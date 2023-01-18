package mg.groupe26.model;

import java.util.ArrayList;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Utilisateur {

    String id;
    String personneid;
    String nom;
    String pseudo;

    
    public Utilisateur() {

    }

    public Utilisateur(String id, String personneid,String nom,String pseudo) {
        this.id = id;
        this.personneid = personneid;
        this.nom = nom;
        this.pseudo = pseudo;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPersonneid() {
        return personneid;
    }

    public void setPersonneid(String personneid) {
        this.personneid = personneid;
    }
    
    List<Utilisateur> getUtilisateur(){
        List<Utilisateur> liste = new ArrayList<>();
        
        return liste;
    }
                List<Utilisateur> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Utilisateur(rs.getString("id"),
                rs.getString("personneid"),
                rs.getString("nom"),
                rs.getString("pseudo")));
    }
    
        public void insert(JdbcTemplate jt) {
        String query = String.format("insert into Utilisateur values (concat('UTILISATEUR',nextval('id_utilisateur'), '%s','%s','%s')", getPersonneid(),getNom(),getPseudo());
        jt.update(query);
    }
    public void update(JdbcTemplate j){
        String query = String.format("update utilisateur set personneid='%s',nom='%s',pseudo='%s' where id= '%s'",getPersonneid(),getNom(),getPseudo(),getID());
        j.update(query);
    }
}
