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

    public void updateCourse(List<String> newCourse, String id) {
        Course oldCourse = readCourseById(id);
        if (! newCourse.get(0).equals("")) {
            oldCourse.setCourse_name(newCourse.get(0));
        }
        if (! newCourse.get(1).equals("")) {
            oldCourse.setSubject(newCourse.get(1));
        }
        if (! newCourse.get(2).equals("")) {
            oldCourse.setDuration(newCourse.get(2));
        }
        if (! newCourse.get(3).equals("")) {
            oldCourse.setPrice(Double.parseDouble(newCourse.get(3)));
        }
        if (! newCourse.get(4).equals("")) {
            oldCourse.setTutor(newCourse.get(4));
        }
        courseRepository.deleteById(id);
        courseRepository.save(oldCourse);
//        courseRepository.updateById(newCourse, id);
    }

    public void deleteCourseById(String id) {
        readCourseById(id);
        courseRepository.deleteById(id);
    }
}
