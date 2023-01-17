package mg.groupe26.controller;

import java.util.List;
import mg.groupe26.model.Admin;
import mg.groupe26.model.Enchere;
import mg.groupe26.model.Produit;
import mg.groupe26.model.RechargeCompte;
import mg.groupe26.model.ResultatEnchere;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@SpringBootApplication
public class EnchereApplication {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(EnchereApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return ("Hello !");
    }

    @GetMapping("/admin")
    public List<Admin> getAdmin() {
        return (new Admin().select("SELECT * from admin", jdbcTemplate));
    }

    @GetMapping("/enchere")
    public List<Enchere> getEnchere() {
        return (new Enchere().select("SELECT * from enchere", jdbcTemplate));
    }

    @GetMapping("/produit")
    public List<Produit> getProduit() {
        return (new Produit().select("SELECT * from produit", jdbcTemplate));
    }

    @GetMapping("/rechargecompte")
    public List<RechargeCompte> getRechargeCompte() {
        return (new RechargeCompte().select("SELECT * from rechargecompte", jdbcTemplate));
    }

    @GetMapping("/resultatenchere")
    public List<ResultatEnchere> getResultatEnchere() {
        return (new ResultatEnchere().select("SELECT * from resultatenchere", jdbcTemplate));
    }

}
