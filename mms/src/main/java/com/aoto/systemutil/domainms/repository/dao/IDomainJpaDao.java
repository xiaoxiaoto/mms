package com.aoto.systemutil.domainms.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.systemutil.domainms.repository.pojo.Domain;
@Repository
public interface IDomainJpaDao extends JpaRepository<Domain, Serializable>{
}
