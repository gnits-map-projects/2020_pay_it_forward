package models;

import com.google.inject.ImplementedBy;

import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

/**
 * This interface provides a non-blocking API for possibly blocking operations.
 */
@ImplementedBy(JPANgoRepository.class)
public interface NgoRepository {

    CompletionStage<Ngo> addngo(Ngo ngo);
    CompletionStage<Stream<Ngo>> list();
}