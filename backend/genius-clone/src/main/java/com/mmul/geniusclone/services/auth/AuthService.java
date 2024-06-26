package com.mmul.geniusclone.services.auth;

import com.mmul.geniusclone.dtos.auth.post.LoginRequest;
import com.mmul.geniusclone.dtos.auth.post.LoginResponse;
import com.mmul.geniusclone.dtos.auth.post.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.post.RegistrationResponse;
import com.mmul.geniusclone.models.Role;
import com.mmul.geniusclone.models.User;
import com.mmul.geniusclone.repositories.auth.AuthRepository;
import com.mmul.geniusclone.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Service
public class AuthService implements IAuthService {
    @Autowired
    private AuthRepository authRepository;

    public RegistrationResponse registerUser(RegistrationRequest request) {
        User user = new User();
        user.setEmail(request.email());
        user.setPassword(request.password());
        HashSet<Role> roles = new HashSet<>();
        roles.add(Role.USER);
        user.setRoles(roles);

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

