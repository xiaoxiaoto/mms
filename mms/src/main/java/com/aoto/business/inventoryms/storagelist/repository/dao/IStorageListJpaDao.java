package com.aoto.business.inventoryms.storagelist.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.inventoryms.storagelist.repository.pojo.StorageList;
@Repository
public interface IStorageListJpaDao extends JpaRepository<StorageList, Serializable>{
}
