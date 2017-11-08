package com.aoto.business.inventoryms.inventorylist.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
@Repository
public interface IInventoryListJpaDao extends JpaRepository<InventoryList, Serializable>{
}
