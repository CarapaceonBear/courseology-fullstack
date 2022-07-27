package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    CourseService courseService;

    @ExceptionHandler
    public ResponseEntity<String> handleException(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        Course response = courseService.readCourseById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/courses/{page}")
    public ResponseEntity<List<Course>> getAllCourses(@PathVariable int page) {
        List<Course> responses = courseService.readAllCourses();
        Collections.sort(responses);
        int upperBound = page * 10;
        if ((page - 1) * 10 > responses.size()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        if (upperBound > responses.size()) {
            upperBound = responses.size();
        }
        List<Course> sublist = responses.subList((page - 1) * 10, upperBound);
        return ResponseEntity.status(HttpStatus.FOUND).body(sublist);
    }

    @GetMapping("/filter/{subject}/{page}")
    public ResponseEntity<List<Course>> getAllBySubject(@PathVariable String subject, @PathVariable int page) {
        List<Course> responses = courseService.readAllBySubject(subject);
        Collections.sort(responses);
        int upperBound = page * 10;
        if ((page - 1) * 10 > responses.size()) {
            throw new ArrayIndexOutOfBoundsException();
        }
        if (upperBound > responses.size()) {
            upperBound = responses.size();
        }
        List<Course> sublist = responses.subList((page - 1) * 10, upperBound);
        return ResponseEntity.status(HttpStatus.FOUND).body(sublist);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addCourse(@RequestBody Course course) {
        Course response = courseService.saveCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(String.format("Course added with ID:%s", response.getId()));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCourse(@RequestBody List<String> newCourse, @PathVariable String id) {
        courseService.updateCourse(newCourse, id);
        return ResponseEntity.status(HttpStatus.OK).body(String.format("Course with ID:%s updated", id));
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<String> removeCourse(@PathVariable String id) {
        courseService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body(String.format("Course with ID:%s removed", id));
    }
}
