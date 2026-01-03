package com.audit.audit_system.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.Instant;

@Data
@Document(collection = "logs")
public class AuditLog {
    
    @Id
    private String id;
    private String action;
    private String user;
    private String details;
    
    @Indexed(name = "self_destruct_index", expireAfter = "60s")
    private Instant createdAt;

    public AuditLog() {
        this.createdAt = Instant.now();
    }
}