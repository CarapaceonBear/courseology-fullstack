package com.nology.courseologybackend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

    Optional<Course> findById(String id);

    List<Course> findAll();

    List<Course> findAllBySubject(String subject);

//    void save(Course course);

    void delete(Course course);
}
