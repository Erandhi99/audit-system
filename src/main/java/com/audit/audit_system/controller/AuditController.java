package com.audit.audit_system.controller;

import com.audit.audit_system.model.AuditLog;
import com.audit.audit_system.repository.AuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/audit")
public class AuditController {
    @Autowired
    private AuditRepository repository;

    @PostMapping
    public AuditLog createLog(@RequestBody AuditLog log){
        log.setCreatedAt(java.time.Instant.now());
        return repository.save(log);
    }

    @GetMapping
    public List<AuditLog> getAllLogs(){
        return repository.findAll();
    }
    
}
