package com.mmul.geniusclone.dtos.auth.post;

import com.mmul.geniusclone.models.Role;

import java.util.Set;
import java.util.UUID;

public record RegistrationResponse(UUID id, String email, Set<Role> roles) {}