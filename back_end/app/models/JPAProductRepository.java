package models;

import play.db.jpa.JPAApi;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import play.libs.Json;
import static play.libs.Json.toJson;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;
import java.lang.Exception;
//import javax.persistence.NoResultException;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAProductRepository implements ProductRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAProductRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<String> addproduct(Product product) {
        return supplyAsync(() -> wrap(em -> insert(em, product)), executionContext);
    }

    @Override
    public CompletionStage<Integer> update(Long id,Integer np) {
        return supplyAsync(() -> wrap(em -> update(em,id,np)), executionContext);
    }

    @Override
    public CompletionStage<Integer> delete(Long id) {
        return supplyAsync(() -> wrap(em -> del(em,id)), executionContext);
    }

    @Override
    public CompletionStage<Integer> deletecart(Long pid,Long cid) {
        return supplyAsync(() -> wrap(em -> deletecart(em,pid,cid)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> getcProducts(String scat) {
        return supplyAsync(() -> wrap(em -> getcProducts(em,scat)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> getSearchProducts(String search) {
        return supplyAsync(() -> wrap(em -> getSearchProducts(em,search)), executionContext);
    }

    @Override
    public CompletionStage<String> addSearchProduct(String email,String search) {
        return supplyAsync(() -> wrap(em -> addSearchProduct(em,email,search)), executionContext);
    }



    @Override
    public CompletionStage<Stream<Product>> getdl(Long did) {
        return supplyAsync(() -> wrap(em -> dlist(em,did)), executionContext);
    }

    @Override
    public CompletionStage<String> customerSearch(Long cid) {
        return supplyAsync(() -> wrap(em -> customerSearch(em,cid)), executionContext);
    }

    @Override
    public CompletionStage<Product> singleproduct(Long id) {
        return supplyAsync(() -> wrap(em -> singleproduct(em, id)), executionContext);
    }
    @Override
    public CompletionStage<String> buyproduct(Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {
        return supplyAsync(() -> wrap(em -> buyproduct(em,pid,cid,aprice,quant,nquant)), executionContext);
    }

    @Override
    public CompletionStage<String> cartproduct(Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {
        return supplyAsync(() -> wrap(em -> cartproduct(em,pid,cid,aprice,quant,nquant)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Product>> clist(Long cid) {
        return supplyAsync(() -> wrap(em -> clist(em,cid)), executionContext);
    }
    @Override
    public CompletionStage<Stream<Product>> cartlist(Long cid) {
        return supplyAsync(() -> wrap(em -> cartlist(em,cid)), executionContext);
    }



    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

//    @Override
//    public String addProduct(Product product){
//        EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("defaultPersistenceUnit");
//        EntityManager em= entityManagerFactory.createEntityManager();
//        em.getTransaction().begin();
//        em.persist(product);
//        em.close();
//        if(product.pid!=0)
//        return "ok"+product.pid;
//        else
//        return "notok";
//
//
//    }

    private String insert(EntityManager em, Product js) {
       em.persist(js);
       return "ok"+js.pid;

    }


    private Stream<Product> list(EntityManager em) {
        List<Product> persons = em.createQuery("select pid,pname,quant,cat,img1,expdate,cost,year from Product where state=:s ORDER BY expdate DESC").setParameter("s",0).getResultList();
        return persons.stream();
    }

    private Stream<Product>  dlist(EntityManager em,Long did) {
        List<Product> persons = em.createQuery("select pname,img1,ngo from Product where did=:did").setParameter("did",did).getResultList();
        return persons.stream();
    }

    private int update(EntityManager em,Long id,Integer np) {
        int s=1;
        int i = em.createQuery("update Product SET state=:s,nprice=:nprice where pid=:id").setParameter("s",s).setParameter("nprice",np).setParameter("id",id).executeUpdate();
        //int i=q.executeUpdate();
        return i;
    }

    private Stream<Product>  getcProducts(EntityManager em,String scat) {
        List<Product> persons = em.createQuery("select pid,pname,nprice,quant,img1,des,cost,year from Product p where scat=:scat and state=:s").setParameter("scat",scat).setParameter("s",1).getResultList();
        return persons.stream();
    }

    private Stream<Product>  getSearchProducts(EntityManager em,String search) {
        String sc="%"+search+"%";
        List<Product> persons = em.createQuery("select pid,pname,nprice,quant,img1,des,cost,year from Product p where (p.pname LIKE  :search or p.cat LIKE  :search or p.scat LIKE  :search or p.des LIKE  :search) and state=:s").setParameter("search",sc).setParameter("s",1).getResultList();
        return persons.stream();
    }

    private int del(EntityManager em,Long id) {

            int i = em.createQuery("Delete  from Product p where pid=:id ").setParameter("id", id).executeUpdate();
            //em.remove(foundPerson);

           return i;

    }

    private Product  singleproduct(EntityManager em,Long id) {
       Product persons = em.createQuery("select p from Product p where pid=:id",Product.class).setParameter("id", id).getSingleResult();
        return persons;
    }

    private String buyproduct(EntityManager em,Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {


        Integer q = quant - nquant;
        int i;
        String s = "got Inserted into pc with pid";
        if (q == 0) {
            i = em.createQuery("update Product SET state=:s,quant=:q where pid=:id").setParameter("id", pid).setParameter("s", 2).setParameter("q", q).executeUpdate();
        } else {
            i = em.createQuery("update Product SET quant=:q where pid=:id").setParameter("id", pid).setParameter("q", q).executeUpdate();
        }
        if (i != 0)
        {


            try {
                PC p = em.createQuery("select p from PC p where pid=:pid and cid=:cid", PC.class).setParameter("pid", pid).setParameter("cid", cid).getSingleResult();
                int r = em.createQuery("update PC set cart=:c where pid=:pid and cid=:cid").setParameter("pid", pid).setParameter("cid", cid).setParameter("c", 1).executeUpdate();
                if (r != 0)
                    return s;
                else
                    return null;

            }
            catch (Exception e)
            {


                PC pc = new PC();
                pc.pid = pid;
                pc.cid = cid;
                pc.cart = 1;
                pc.aprice = aprice;
                pc.nquant = nquant;
                em.persist(pc);
                return s;


            }}
            else
            {
                return null;
            }


    }

    private String cartproduct(EntityManager em,Long pid,Long cid,Integer aprice,Integer quant,Integer nquant) {


        PC pc=new PC();
        pc.pid=pid;
        pc.cid=cid;
        pc.aprice=aprice;
        pc.cart=0;
        pc.nquant=nquant;
        em.persist(pc);
        String s="got Inserted into pc with pid"+pc.id;
        return s;

    }

    private Stream<Product> clist(EntityManager em,Long cid) {
        List<Product> persons = em.createQuery("select p.pname,p.img1,n.aprice,n.nquant,n.cart,p.des from Product p,PC n where p.pid=n.pid and n.cid=:cid and n.cart=:c").setParameter("cid",cid).setParameter("c",1).getResultList();
        return persons.stream();
    }

    private Stream<Product> cartlist(EntityManager em,Long cid) {

        List<Product> persons = em.createQuery("select p.pname,p.img1,p.quant,n.pid,n.aprice,n.nquant,p.des from Product p,PC n where p.pid=n.pid and n.cid=:cid and n.cart=:c").setParameter("cid",cid).setParameter("c",0).getResultList();
        return persons.stream();
    }

    private int deletecart(EntityManager em,Long pid,Long cid) {

        int i = em.createQuery("Delete  from PC p where pid=:pid and cid=:cid").setParameter("pid", pid).setParameter("cid", cid).executeUpdate();
        //em.remove(foundPerson);

        return i;

    }

    private String addSearchProduct(EntityManager em,String email,String search) {
        try{
            Long id=em.createQuery("Select id from Person where email=:email ",Long.class).setParameter("email",email).getSingleResult();
            Search s=new Search();
            s.cid=id;
            s.search=search;
            em.persist(s);
            return("added to search"+s.id);

        }

        catch(Exception e){
            return ("exception");
        }

    }


    private String customerSearch(EntityManager em,Long cid) {

           List<String> cs=em.createQuery("Select search from Search where cid=:cid ").setParameter("cid",cid).getResultList();
           String s="Hi Buddy \n";
           for(int i=0;i<cs.size();i++)
           {    String k="%"+cs.get(i)+"%";
               List<Product> p=em.createQuery("select p from Product p where (p.pname LIKE  :search or p.cat LIKE  :search or p.scat LIKE  :search or p.des LIKE  :search) and state=:s").setParameter("search",k).setParameter("s",1).getResultList();
               if(!p.isEmpty()) {
                   s = s + "we got some new " + cs.get(i) + "\n";

                   int j = em.createQuery("delete from Search p where p.cid=:cid and p.search=:search").setParameter("cid",cid).setParameter("search",cs.get(i)).executeUpdate();
               }

           }
            return(s);

    }



}