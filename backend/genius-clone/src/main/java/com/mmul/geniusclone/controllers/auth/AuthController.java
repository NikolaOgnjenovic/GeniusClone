package com.mmul.geniusclone.controllers.auth;


import com.mmul.geniusclone.dtos.auth.post.LoginRequest;
import com.mmul.geniusclone.dtos.auth.post.LoginResponse;
import com.mmul.geniusclone.dtos.auth.post.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.post.RegistrationResponse;
import com.mmul.geniusclone.exceptions.auth.UserEmailAlreadyExistsException;
import com.mmul.geniusclone.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private IAuthService authService;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest request) {
        try {
            RegistrationResponse response = authService.registerUser(request);
            return ResponseEntity.ok(response);
        } catch (UserEmailAlreadyExistsException ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = authService.loginUser(request);
        return ResponseEntity.ok(response);
    }
}