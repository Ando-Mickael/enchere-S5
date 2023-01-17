package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Token {

    String id;
    String contenu;
    String utilisateurid;

    public Token() {

    }

    public Token(String id, String contenu, String utilisateurid) {
        this.id = id;
        this.contenu = contenu;
        this.utilisateurid = utilisateurid;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getUtilisateurid() {
        return utilisateurid;
    }

    public void setUtilisateurid(String utilisateurid) {
        this.utilisateurid = utilisateurid;
    }

    public List<Token> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Token(rs.getString("id"),
                rs.getString("contenu"),
                rs.getString("utililisateurid")));
    }

    public void update(JdbcTemplate j) {
        String query = String.format("update token set contenu='%s',utilisateurid='%s' where id= '%s'", getContenu(), getUtilisateurid(), getId());
        j.update(query);
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into admin values (concat('ADMIN',nexval('id_token'), %s,%s)", getContenu(), getUtilisateurid());
        jt.update(query);
    }
}
