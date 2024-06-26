package com.mmul.geniusclone.controllers.auth;


import com.mmul.geniusclone.dtos.auth.post.LoginRequest;
import com.mmul.geniusclone.dtos.auth.post.LoginResponse;
import com.mmul.geniusclone.dtos.auth.post.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.post.RegistrationResponse;
import com.mmul.geniusclone.services.interfaces.IAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private IAuthService authService;

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest request) {
        RegistrationResponse response = authService.registerUser(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = authService.loginUser(request);
        return ResponseEntity.ok(response);
    }
}