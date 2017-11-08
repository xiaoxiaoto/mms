package com.aoto.business.allocationms.allocationapplys.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
@Repository
public interface IAllocationApplyJpaDao extends JpaRepository<AllocationApply, Serializable>{
}
