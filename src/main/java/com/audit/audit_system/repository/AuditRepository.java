package com.audit.audit_system.repository;

import com.audit.audit_system.model.AuditLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuditRepository extends MongoRepository<AuditLog, String> {
    
}
