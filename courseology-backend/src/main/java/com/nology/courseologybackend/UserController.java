package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    UserService userService;

    @ExceptionHandler
    public ResponseEntity<String> handleException(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        User response = userService.readUserById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/username/{name}")
    public ResponseEntity<User> getUserByName(@PathVariable String name) {
        User response = userService.readUserByName(name);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> responses = userService.readAllUsers();
        Collections.sort(responses);
        return ResponseEntity.status(HttpStatus.FOUND).body(responses);
    }

    @PostMapping("/add-user")
    public ResponseEntity<String> addUser(@RequestBody User user) {
        User response = userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(String.format("User added with ID:%s", response.getId()));
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<String> updateUser(@RequestBody List<String> newUser, @PathVariable String id) {
        userService.updateUser(newUser, id);
        return ResponseEntity.status(HttpStatus.OK).body(String.format("User with ID:%s updated", id));
    }

    @DeleteMapping("/remove-user/{id}")
    public ResponseEntity<String> removeUser(@PathVariable String id) {
        userService.deleteUserById(id);
        return ResponseEntity.status(HttpStatus.OK).body(String.format("User with ID:%s removed", id));
    }
}
