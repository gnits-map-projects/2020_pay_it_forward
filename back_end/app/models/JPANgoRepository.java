package models;

import play.db.jpa.JPAApi;

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
public class JPANgoRepository implements NgoRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPANgoRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }
    @Override
    public CompletionStage<Ngo> addngo(Ngo ngo) {
        return supplyAsync(() -> wrap(em -> insert(em, ngo)), executionContext);

    }

    @Override
    public CompletionStage<Stream<Ngo>> list() {
        return supplyAsync(() -> wrap(em -> list(em)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Ngo insert(EntityManager em, Ngo ngo) {
        em.persist(ngo);
        return ngo;
    }

    private Stream<Ngo> list(EntityManager em) {
        List<Ngo> persons = em.createQuery("select p.ngo from Ngo p").getResultList();
        return persons.stream();
    }
}