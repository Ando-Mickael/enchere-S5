package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class RechargeCompte {

    String id;
    String utilisateurid;
    Double montant;
    Integer estValide;

    public void update(JdbcTemplate j){
        String query = String.format("update rechargecompte set utilisateurid='%s',montant=%s,estvalide=%s where id= '%s'",getUtilisateurid(),getMontant(),getEstValide(),getID());
        j.update();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUtilisateurid() {
        return utilisateurid;
    }

    public void setUtilisateurid(String utilisateurid) {
        this.utilisateurid = utilisateurid;
    }

    public Double getMontant() {
        return montant;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public Integer getEstValide() {
        return estValide;
    }

    public void setEstValide(Integer estValide) {
        this.estValide = estValide;
    }

    public RechargeCompte() {

    }

    public RechargeCompte(String id, String utilisateurid, Double montant, Integer estValide) {
        this.id = id;
        this.utilisateurid = utilisateurid;
        this.montant = montant;
        this.estValide = estValide;
    }

    public List<RechargeCompte> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new RechargeCompte(rs.getString("id"),
                rs.getString("utilisateurid"),
                rs.getDouble("montant"),
                rs.getInt("estValide")));
    }

    public List<RechargeCompte> selectAll(JdbcTemplate jt) {
        String query = "select * from v_rechargecompte";
        return (select(query, jt));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into rechargecompte values (concat('RECHARGECOMPTE',nextval('id_rechargecompte'), '%s', %s, %s)", getUtilisateurid(), getMontant(), getEstValide());
        jt.update(query);
    }
}
