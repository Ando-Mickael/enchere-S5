package mg.groupe26.controller;

import java.util.List;
import mg.groupe26.model.Categorie;
import mg.groupe26.model.Enchere;
import mg.groupe26.model.ResultatEnchere;
import mg.groupe26.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EnchereRC  {

    @Autowired
    JdbcTemplate jdbcTemplate;
    
    @GetMapping("/encheres")
    public List<Enchere> getEncheres() {
        return (new Enchere().select("select * from Enchere", jdbcTemplate));
    }

    @GetMapping("/encheres/{id}")
    public Object[] getEnchereById(@PathVariable String id) {
        Object[] result = new Object[1];
        Enchere enchere = null;

        enchere = new Enchere().select(String.format("select * from Enchere where id = '%s'", id), jdbcTemplate).get(0);
        enchere.setProprietaire(new Utilisateur(enchere.getProprietaireId(), null, null, null, null).selectById(jdbcTemplate));
        enchere.setCategorie(new Categorie(enchere.getCategorieId(), null).selectById(jdbcTemplate));

        result[0] = enchere;
        
        return result;
    }
    
    @GetMapping("/encheresByUtilisateur/{utilisateurId}")
    public List<Enchere> getEncheresByUtilisateur(@PathVariable String utilisateurId) {
        String query = String.format("select * from Enchere where proprietaireId = '%s' ", utilisateurId);
        
        return (new Enchere(null, null, null, null, null, null, null, utilisateurId, null).select(query, jdbcTemplate));
    }

    @GetMapping("/addEnchere")
    public void addEnchere(
            @RequestParam String duree,
            @RequestParam double prixMin,
            @RequestParam String nomProduit,
            @RequestParam String descriProduit,
            @RequestParam String proprietaireId,
            @RequestParam String categorieId) {
        new Enchere(null, null, duree, prixMin, null, nomProduit, descriProduit, proprietaireId, categorieId).insert(jdbcTemplate);
    }

    @GetMapping("/updateEnchere")
    public void updateEnchere(
            @RequestParam String id,
            @RequestParam String duree,
            @RequestParam Double prixmin,
            @RequestParam Integer status, 
            @RequestParam String nomProduit,
            @RequestParam String descriProduit) {
        new Enchere(id, null, duree, prixmin, status, nomProduit, descriProduit, null, null).update(jdbcTemplate);
    }
    
    @GetMapping("/deleteEnchere/{id}")
    public void deleteEnchere(@PathVariable String id) {
        new Enchere(id, null, null, null, null, null, null, null, null).delete(jdbcTemplate);
    }
    
    @GetMapping("/resultatEnchere")
    public List<ResultatEnchere> getResultatEnchere() {
        return (new ResultatEnchere().select("select * from resultatenchere", jdbcTemplate));
    }
    
}
