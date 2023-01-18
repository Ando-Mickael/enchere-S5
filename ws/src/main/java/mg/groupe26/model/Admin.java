package mg.groupe26.model;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

public class Admin {
    String id;
    String personneid;
    
        public Admin(){

    }
    public Admin(String id, String personneid) {
        this.id = id;
        this.personneid = personneid;
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
    public List<Admin> select(String query, JdbcTemplate jt) {
        return jt.query(query, (rs, row) -> new Admin(rs.getString("id"),rs.getString("personneid")));
    }
    
    public void insert(JdbcTemplate jt) {
        String query = String.format("insert into admin values (concat('ADMIN',nextval('id_admin'), '%s')", getPersonneid());
        jt.update(query);
    }
}
