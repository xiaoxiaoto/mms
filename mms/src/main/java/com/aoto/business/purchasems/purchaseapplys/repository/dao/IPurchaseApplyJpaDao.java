package com.aoto.business.purchasems.purchaseapplys.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.purchasems.purchaseapplys.repository.pojo.PurchaseApply;
@Repository
public interface IPurchaseApplyJpaDao extends JpaRepository<PurchaseApply, Serializable>{
}
