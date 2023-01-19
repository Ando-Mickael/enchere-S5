package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Enchere {

    String id;
    String dateDebut;
    String duree;
    Double prixmin;
    Integer status;
    String produitid;

    public Enchere() {
    }

    public Enchere(String id, String dateDebut, String duree, Double prixmin, Integer status, String produitid) {
        this.id = id;
        this.dateDebut = dateDebut;
        this.duree = duree;
        this.prixmin = prixmin;
        this.status = status;
        this.produitid = produitid;
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

    public Double getPrixmin() {
        return prixmin;
    }

    public void setPrixmin(Double prixmin) {
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
                rs.getString("datedebut"),
                rs.getString("duree"),
                rs.getDouble("prixmin"),
                rs.getInt("prixmin"),
                rs.getString("produitid")
        ));
    }

    public List<Enchere> selectAll(JdbcTemplate jt) {
        String query = "select * from Enchere";
        return (select(query, jt));
    }

    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into enchere values (concat('Enchere',nextval('seq_enchere'), '%s', '%s', '%s', %s, '%s')", getProduitid(), getDuree(), getDateDebut(), getPrixmin(), getStatus());
        jt.update(query);
    }

    public void update(JdbcTemplate j) {
        String query = String.format("update enchere set produitid='%s',duree='%s',datedebut='%s',prixmin=%s,status=%s where id= %s", getProduitid(), getDuree(), getDateDebut(), getPrixmin(), getStatus(), getId());
        j.update(query);
    }

    public void updateStatus(JdbcTemplate j) {
        String query = String.format("update enchere set status=%s where id='%s'", getStatus(), getId());
        j.update(query);
    }

    public void delete(JdbcTemplate j) {
        String query = String.format("delete from enchere where id='%s'", getId());
        j.update(query);
    }
}
