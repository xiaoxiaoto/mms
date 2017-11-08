package com.aoto.business.purchasems.applysdetails.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
@Repository
public interface IApplysDetailJpaDao extends JpaRepository<ApplysDetail, Serializable>{
}
