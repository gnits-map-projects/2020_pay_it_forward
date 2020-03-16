package models;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
public class Ngo {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Long id;

    public String ngo;
    public String email;
    public BigInteger phone;
    public String address;
}