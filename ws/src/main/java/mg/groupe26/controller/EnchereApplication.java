package mg.groupe26.controller;

import java.util.List;
import mg.groupe26.model.Admin;
import mg.groupe26.model.Categorie;
import mg.groupe26.model.Config;
import mg.groupe26.model.Enchere;
import mg.groupe26.model.Personne;
import mg.groupe26.model.Photo;
import mg.groupe26.model.Produit;
import mg.groupe26.model.RechargeCompte;
import mg.groupe26.model.ResultatEnchere;
import mg.groupe26.model.Token;
import mg.groupe26.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@CrossOrigin
public class EnchereApplication {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(EnchereApplication.class, args);
    }

//    test
    @GetMapping("/hello")
    public String hello() {
        return ("Hello !");
    }

//    select
    @GetMapping("/admin")
    public List<Admin> getAdmin() {
        return (new Admin().select("select * from admin", jdbcTemplate));
    }

    @GetMapping("/enchere")
    public List<Enchere> getEnchere() {
        return (new Enchere().select("select * from enchere", jdbcTemplate));
    }

    @GetMapping("/produit")
    public List<Produit> getProduit() {
        return (new Produit().select("select * from produit", jdbcTemplate));
    }

    @GetMapping("/rechargecompte")
    public List<RechargeCompte> getRechargeCompte() {
        return (new RechargeCompte().select("select * from rechargecompte", jdbcTemplate));
    }

    @GetMapping("/resultatenchere")
    public List<ResultatEnchere> getResultatEnchere() {
        return (new ResultatEnchere().select("select * from resultatenchere", jdbcTemplate));
    }

    @GetMapping("/personne")
    public List<Personne> getPersonne() {
        return (new Personne().select("select * from personne", jdbcTemplate));
    }

    @GetMapping("/photo")
    public List<Photo> getPhoto() {
        return (new Photo().select("select * from photo", jdbcTemplate));
    }

    @GetMapping("/personne")
    public List<Utilisateur> geUtlisateur() {
        return (new Utilisateur().select("select * from utilisateur", jdbcTemplate));
    }

    @GetMapping("/categorie")
    public List<Categorie> getCategorie() {
        return (new Categorie().select("select * from categorie", jdbcTemplate));
    }

//    insert
    @GetMapping("/addAdmin")
    public void addAdmin() {
        new Admin().insert(jdbcTemplate);
    }

    @GetMapping("/addCategorie")
    public void addCategorie() {
        new Categorie().insert(jdbcTemplate);
    }

    @GetMapping("/addConfig")
    public void addConfig() {
        new Config().insert(jdbcTemplate);
    }

    @GetMapping("/addEnchere")
    public void addEnchere() {
        new Enchere().insert(jdbcTemplate);
    }

    @GetMapping("/addPersonne")
    public void addPersonne() {
        new Personne().insert(jdbcTemplate);
    }

    @GetMapping("/addPhoto")
    public void addPhoto() {
        new Photo().insert(jdbcTemplate);
    }

    @GetMapping("/addProduit")
    public void addProduit() {
        new Produit().insert(jdbcTemplate);
    }

    @GetMapping("/addRechargeCompte")
    public void addRechargeCompte() {
        new RechargeCompte().insert(jdbcTemplate);
    }

    @GetMapping("/addResultatEnchere")
    public void addResultatEnchere() {
        new ResultatEnchere().insert(jdbcTemplate);
    }

    @GetMapping("/addToken")
    public void addToken() {
        new Token().insert(jdbcTemplate);
    }

    @GetMapping("/updateEnchere")
    public void updateEnchere() {
        new Enchere().update(jdbcTemplate);
    }
}
