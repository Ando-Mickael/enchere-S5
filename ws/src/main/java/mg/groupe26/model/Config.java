package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Config {

    String cle;
    String valeur;

    public Config() {

    }

    public Config(String cle, String valeur) {
        this.cle = cle;
        this.valeur = valeur;
    }

    public String getCle() {
        return cle;
    }

    public void setCle(String cle) {
        this.cle = cle;
    }

    public String getValeur() {
        return valeur;
    }

    public void setValeur(String valeur) {
        this.valeur = valeur;
    }

    public List<Config> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Config(rs.getString("cle"),
                rs.getString("valeur")));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into admin values (concat('ADMIN',nexval('cle'), %s)", getValeur());
        jt.update(query);
    }

    public void update(JdbcTemplate j) {
        String query = String.format("update config set valeur=%s where cle= %s", getValeur(), getCle());
        j.update(query);
    }
}
