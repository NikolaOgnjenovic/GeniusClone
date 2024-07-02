package com.mmul.geniusclone.services.auth;

import com.mmul.geniusclone.dtos.auth.LoginRequest;
import com.mmul.geniusclone.dtos.auth.LoginResponse;
import com.mmul.geniusclone.dtos.auth.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.RegistrationResponse;
import com.mmul.geniusclone.exceptions.auth.UserEmailAlreadyExistsException;
import com.mmul.geniusclone.models.User;
import com.mmul.geniusclone.repositories.auth.AuthRepository;
import com.mmul.geniusclone.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AuthService implements IAuthService {
    @Autowired
    private AuthRepository authRepository;

    public RegistrationResponse registerUser(RegistrationRequest request) {
        if (authRepository.existsByEmail(request.email())) {
            throw new UserEmailAlreadyExistsException("User with email " + request.email() + " already exists.");
        }

        User user = new User(request.email(), request.password());
        authRepository.save(user);

        return new RegistrationResponse(user.getId(), user.getEmail(), user.getRoles());
    }

    public LoginResponse loginUser(LoginRequest request) {
        User user = authRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!(request.password().equals(user.getPassword()))) {
            throw new RuntimeException("Invalid credentials");
        }

        return new LoginResponse(user.getId(), user.getEmail(), user.getRoles());
    }
}

