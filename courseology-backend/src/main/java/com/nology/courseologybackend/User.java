package com.nology.courseologybackend;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Entity
public class User implements Comparable<User> {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    private String username;
    private String email;
    private String password;
    private boolean admin = false;
//    private List<String> courseIds;

    public User() {}

    public User(String username, String email, String password) {
        super();
        this.username = username;
        this.email = email;
        this.password = password;
    }

    @Override
    public int compareTo(User user) {
        return this.id.compareTo(user.getId());
    }

//    public void addCourse(String courseId) {
//        this.courseIds.add(courseId);
//    }

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

//    public List<String> getCourseIds() {
//        return courseIds;
//    }
//    public void setCourseIds(List<String> courseIds) {
//        this.courseIds = courseIds;
//    }


    public boolean isAdmin() {
        return admin;
    }
    public void setAdmin(boolean admin) {
        this.admin = admin;
    }
}
