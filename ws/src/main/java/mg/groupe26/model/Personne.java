package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Personne {

    String id;
    String email;
    String mdp;

    public Personne() {

    }

    public Personne(String id, String email, String mdp) {
        this.id = id;
        this.email = email;
        this.mdp = mdp;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    public List<Personne> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Personne(rs.getString("id"),
                rs.getString("email"),
                rs.getString("mdp")));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into personne values (concat('PERSONNE',nexval('id_personne'), %s, %s)", getEmail(), getMdp());
        jt.update(query);
    }
    
    public void update(JdbcTemplate j) {
        String query = String.format("update personne set email='%s',mdp='%s' where id= '%s'", getEmail(), getMdp(), getId());
        j.update(query);
    }
}
