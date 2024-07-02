package com.mmul.geniusclone.dtos.auth;

import com.mmul.geniusclone.models.Role;

import java.util.Set;
import java.util.UUID;

public record LoginResponse(UUID id, String email, Set<Role> roles) {}
