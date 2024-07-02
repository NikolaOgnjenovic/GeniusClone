package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.auth.LoginRequest;
import com.mmul.geniusclone.dtos.auth.LoginResponse;
import com.mmul.geniusclone.dtos.auth.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.RegistrationResponse;
import com.mmul.geniusclone.models.User;

import java.util.UUID;

public interface IAuthService {
    RegistrationResponse registerUser(RegistrationRequest request);
    LoginResponse loginUser(LoginRequest request);
    User getById(UUID id);
}
