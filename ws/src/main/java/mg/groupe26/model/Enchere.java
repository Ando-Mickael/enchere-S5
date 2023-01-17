package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Enchere {

    String id;
    String produitid;
    String duree;
    String dateDebut;
    double prixmin;
    Integer status;

    public Enchere() {
    }

    public Enchere(String id, String produitid, String duree, String dateDebut, double prixmin, Integer status) {
        this.id = id;
        this.produitid = produitid;
        this.duree = duree;
        this.dateDebut = dateDebut;
        this.prixmin = prixmin;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProduitid() {
        return produitid;
    }

    public void setProduitid(String produitid) {
        this.produitid = produitid;
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(String dateDebut) {
        this.dateDebut = dateDebut;
    }

    public double getPrixmin() {
        return prixmin;
    }

    public void setPrixmin(double prixmin) {
        this.prixmin = prixmin;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public List<Enchere> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Enchere(
                rs.getString("id"),
                rs.getString("produitid"),
                rs.getString("duree"),
                rs.getString("datedebut"),
                rs.getFloat("prixmin"),
                rs.getInt("status")
        ));
    }

    public List<Enchere> selectAll(JdbcTemplate jt) {
        String query = "select * from v_enchere";
        return (select(query, jt));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into enchere values (concat('ENCHERE',nexval('id_enchere'), %s, %s, %s, %s, '%s')", getProduitid(), getDuree(), getDateDebut(), getPrixmin(), getStatus());
        jt.update(query);
    }

    public void update(JdbcTemplate j) {
        String query = String.format("update enchere set produitid='%s',duree='%s',datedebut='%s',prixmin=%s,status=%s where id= %s", getProduitid(), getDuree(), getDateDebut(), getPrixmin(), getStatus(), getId());
        j.update(query);
    }

    public void updatestatus(JdbcTemplate j) {
        String query = String.format("update enchere set status=%s where id='%s'", getStatus(), getId());
        j.update(query);
    }

    public void delete(JdbcTemplate j) {
        String query = String.format("delete from enchere where id='%s'", getId());
        j.update(query);
    }
}
