public class Photo {
    String id;
    String image;
    String produitid;
    
    public Photo(){

    }
    public Photo(String id, String image, String produitid) {
        this.id = id;
        this.image = image;
        this.produitid = produitid;
    }
    
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getProduitid() {
        return produitid;
    }
    public void setProduitid(String produitid) {
        this.produitid = produitid;
    }

    public List<Photo> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Admin(rs.getString("id"),
                rs.getString("image"),
                rs.getString("produitid")));
    }
    
        public void insert(JdbcTemplate jt) {
        String query = String.format("insert into photo values (concat('PHOTO',nextval('id_photo'), '%s','%s')", getImage(),getProduitid());
        jt.update(query);
    }
    public void update(JdbcTemplate j){
        String query = String.format("update photo set image='%s',produitid='%s' where id= '%s'",getImage(),getProduitid(),getID());
        j.update();
    }
}
