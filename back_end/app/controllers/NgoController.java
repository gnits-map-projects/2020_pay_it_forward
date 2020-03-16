package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import models.Ngo;
import models.NgoRepository;
import play.data.FormFactory;
import play.libs.Json;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Result;
import java.util.Map;

import play.mvc.Http.Response;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import java.util.stream.Collectors;

import static play.libs.Json.toJson;

public class NgoController extends Controller {

    private final FormFactory formFactory;
    private final NgoRepository ngoRepository;
    private final HttpExecutionContext ec;

    @Inject
    public NgoController(FormFactory formFactory, NgoRepository ngoRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.ngoRepository = ngoRepository;
        this.ec = ec;
    }

    public Result index() {
        return ok(views.html.index.render());
    }

    public CompletionStage<Result> addNgo() {
        JsonNode js=request().body().asJson();
        Ngo n= Json.fromJson(js,Ngo.class);
        return ngoRepository.addngo(n).thenApplyAsync(p -> {
            //return redirect(routes.PersonController.index());
            return ok("inserted ngo name.."+p.ngo);
        }, ec.current());
    }

    public CompletionStage<Result> getNgos() {
        return ngoRepository.list().thenApplyAsync(p -> {

            return ok(toJson(p.collect(Collectors.toList())));
        }, ec.current());
    }
}