package com.aoto.business.warehousems.warehouses.repository.dao;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
@Repository
public interface IWarehouseJpaDao extends JpaRepository<Warehouse, Serializable>{
}
