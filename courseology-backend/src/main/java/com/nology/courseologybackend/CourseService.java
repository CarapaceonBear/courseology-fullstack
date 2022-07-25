package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public Course readCourseById(String id) {
        Optional<Course> response = courseRepository.findById(id);
        if (response.isEmpty()) {
            throw new CourseNotFoundException();
        }
        return response.get();
    }

    public List<Course> readAllCourses() {
        return courseRepository.findAll();
    }

    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    public void updateCourse(Course newCourse, String id) {
        courseRepository.deleteById(id);
        courseRepository.save(newCourse);
//        courseRepository.updateById(newCourse, id);
    }

    public void deleteCourseById(String id) {
        readCourseById(id);
        courseRepository.deleteById(id);
    }
}
