package com.nology.courseologybackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User readUserById(String id) {
        Optional<User> response = userRepository.findById(id);
        if (response.isEmpty()) {
            throw new UserNotFoundException();
        }
        return response.get();
    }

    public User readUserByName(String name) {
        Optional<User> response = userRepository.findByUsername(name);
        if (response.isEmpty()) {
            throw new UserNotFoundException();
        }
        return response.get();
    }

    public List<User> readAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public void updateUser(List<String> newUser, String id) {
        User oldUser = readUserById(id);
        if (! newUser.get(0).equals("")) {
            oldUser.setUsername(newUser.get(0));
        }
        if (! newUser.get(1).equals("")) {
            oldUser.setEmail(newUser.get(1));
        }
        if (! newUser.get(2).equals("")) {
            oldUser.setPassword(newUser.get(2));
        }
        if (!newUser.get(3).equals("")) {
            oldUser.setAdmin(Boolean.parseBoolean(newUser.get(3)));
        }
        userRepository.deleteById(id);
        userRepository.save(oldUser);
    }

    public void deleteUserById(String id) {
        readUserById(id);
        userRepository.deleteById(id);
    }
}
