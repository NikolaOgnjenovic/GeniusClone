package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.auth.LoginRequest;
import com.mmul.geniusclone.dtos.auth.LoginResponse;
import com.mmul.geniusclone.dtos.auth.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.RegistrationResponse;

public interface IAuthService {
    RegistrationResponse registerUser(RegistrationRequest request);
    LoginResponse loginUser(LoginRequest request);
}
