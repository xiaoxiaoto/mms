package com.aoto.business.allocationms.allocationlist.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.allocationms.allocationlist.repository.pojo.AllocationList;
@Repository
public interface IAllocationListJpaDao extends JpaRepository<AllocationList, Serializable>{
}
