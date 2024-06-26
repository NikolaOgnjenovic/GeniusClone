package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.auth.post.LoginRequest;
import com.mmul.geniusclone.dtos.auth.post.LoginResponse;
import com.mmul.geniusclone.dtos.auth.post.RegistrationRequest;
import com.mmul.geniusclone.dtos.auth.post.RegistrationResponse;

public interface IAuthService {
    RegistrationResponse registerUser(RegistrationRequest request);
    LoginResponse loginUser(LoginRequest request);
}
