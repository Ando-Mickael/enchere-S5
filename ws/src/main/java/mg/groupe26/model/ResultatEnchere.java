package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class ResultatEnchere {

    String id;
    String gagnant;
    String enchereid;
    double prixVente;

    public ResultatEnchere() {
    }

    public ResultatEnchere(String id, String gagnant, String encherid, double prixVente) {
        this.id = id;
        this.gagnant = gagnant;
        this.enchereid = encherid;
        this.prixVente = prixVente;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGagnant() {
        return gagnant;
    }

    public void setGagnant(String gagnant) {
        this.gagnant = gagnant;
    }

    public String getEnchereid() {
        return enchereid;
    }

    public void setEnchereid(String enchereid) {
        this.enchereid = enchereid;
    }

    public double getPrixVente() {
        return prixVente;
    }

    public void setPrixVente(double prixVente) {
        this.prixVente = prixVente;
    }

    public List<ResultatEnchere> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new ResultatEnchere(rs.getString("id"),
                rs.getString("gagnant"),
                rs.getString("enchereid"),
                rs.getDouble("prixvente")));
    }

    public List<ResultatEnchere> selectAll(JdbcTemplate jt) {
        String query = "select * from v_resultatEnchere";
        return (select(query, jt));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into resultatenchere values (concat('RESULTATENCHERE',nextval('id_resultatenchere'), '%s', '%s', %s)", getGagnant(), getEnchereid(), getPrixVente());
        jt.update(query);
    }

    public void update(JdbcTemplate j) {
        String query = String.format("update resultatcompte set gagnant='%s',enchereid='%s' prixvente=%s where id= '%s'", getGagnant(), getEnchereid(), getPrixVente(), getId());
        j.update(query);
    }
}
