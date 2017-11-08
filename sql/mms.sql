/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : mms

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-11-08 09:25:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for mms_allocationapplys
-- ----------------------------
DROP TABLE IF EXISTS `mms_allocationapplys`;
CREATE TABLE `mms_allocationapplys` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `applicant` int(11) DEFAULT NULL COMMENT '申领人',
  `applydate` varchar(255) DEFAULT NULL COMMENT '申请时间',
  `circulation` varchar(255) DEFAULT NULL COMMENT '流转状态',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `equipments` varchar(255) DEFAULT NULL COMMENT '申领设备',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `reason` varchar(255) DEFAULT NULL COMMENT '申请原因',
  `returndate` varchar(255) DEFAULT NULL COMMENT '归还时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_allocationapplys
-- ----------------------------
INSERT INTO `mms_allocationapplys` VALUES ('42', '1', '2017-04-01', '2', '2017-04-26 14:11:32', '1', '鼠标X300', '1', null, '补货', '2017-04-29');
INSERT INTO `mms_allocationapplys` VALUES ('43', '1', '2017-04-01', '2', '2017-04-27 15:06:25', '1', '键盘X200,鼠标X710', '1', null, '补货', '2017-04-29');

-- ----------------------------
-- Table structure for mms_allocationlists
-- ----------------------------
DROP TABLE IF EXISTS `mms_allocationlists`;
CREATE TABLE `mms_allocationlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '申请数量',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  `sid` int(11) DEFAULT NULL COMMENT '垛位编号',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `sequenceNumber` varchar(255) DEFAULT NULL COMMENT '流水单号',
  `outquantity` int(11) DEFAULT NULL COMMENT '出库数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_allocationlists
-- ----------------------------
INSERT INTO `mms_allocationlists` VALUES ('40', '42', '2017-04-26', '1', 'id', '300', '3', '72', '16', '2', 'mms-allocationlist2017042614190877661000', '290');
INSERT INTO `mms_allocationlists` VALUES ('41', '43', '2017-04-27', '1', 'id', '200', '1', '73', '17', '1', 'mms-allocationlist2017042715063157021000', '0');
INSERT INTO `mms_allocationlists` VALUES ('42', '43', '2017-04-27', '1', 'id', '710', '1', '72', '16', '2', 'mms-allocationlist2017042715063157021000', '0');

-- ----------------------------
-- Table structure for mms_applicationillustrate
-- ----------------------------
DROP TABLE IF EXISTS `mms_applicationillustrate`;
CREATE TABLE `mms_applicationillustrate` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `company` varchar(255) DEFAULT NULL COMMENT '使用单位',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `department` varchar(255) DEFAULT NULL COMMENT '使用部门',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `instructions` varchar(255) DEFAULT NULL COMMENT '设备使用说明',
  `responsibleperson` int(11) DEFAULT NULL COMMENT '责任人',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `usedate` varchar(255) DEFAULT NULL COMMENT '开始使用时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_applicationillustrate
-- ----------------------------
INSERT INTO `mms_applicationillustrate` VALUES ('1', '北京安心', '2017-03-29 14:06:51', '1', '研发部', '1', '1', '研发中心服务器A-101', '1', '1', '2017-03-29 14:06:51');

-- ----------------------------
-- Table structure for mms_applydetails
-- ----------------------------
DROP TABLE IF EXISTS `mms_applydetails`;
CREATE TABLE `mms_applydetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  `sid` int(11) DEFAULT NULL COMMENT '垛位编号',
  `iid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_applydetails
-- ----------------------------
INSERT INTO `mms_applydetails` VALUES ('36', '42', '2017-04-26 14:11:32', '1', '2', '1', '300', '72', '16', '4');
INSERT INTO `mms_applydetails` VALUES ('37', '43', '2017-04-27 15:06:25', '1', '1', '1', '200', '73', '17', '5');
INSERT INTO `mms_applydetails` VALUES ('38', '43', '2017-04-27 15:06:25', '1', '2', '1', '710', '72', '16', '4');

-- ----------------------------
-- Table structure for mms_equipments
-- ----------------------------
DROP TABLE IF EXISTS `mms_equipments`;
CREATE TABLE `mms_equipments` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `arrivaldate` varchar(255) DEFAULT NULL COMMENT '到货日期',
  `createcate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eclassify` varchar(255) DEFAULT NULL COMMENT '设备种类',
  `ename` varchar(255) DEFAULT NULL COMMENT '设备名称',
  `etype` varchar(255) DEFAULT NULL COMMENT '设备分类',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `integrator` varchar(255) DEFAULT NULL COMMENT '集成商',
  `life` varchar(255) DEFAULT NULL COMMENT '设备寿命',
  `manufacturer` varchar(255) DEFAULT NULL COMMENT '生产厂商',
  `originalprice` float DEFAULT NULL COMMENT '原始单价',
  `state` varchar(255) DEFAULT NULL COMMENT '设备状态',
  `pnfru` varchar(255) DEFAULT NULL COMMENT 'PN/FRU编号',
  `productiondate` varchar(255) DEFAULT NULL COMMENT '出厂日期',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `serialnumber` varchar(255) DEFAULT NULL COMMENT '序列号',
  `specifications` varchar(255) DEFAULT NULL COMMENT '规格',
  `unpackingdate` varchar(255) DEFAULT NULL COMMENT '拆封时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_equipments
-- ----------------------------
INSERT INTO `mms_equipments` VALUES ('1', null, null, '0', '1', '键盘', '1', null, '华宇科技', '10', '西部数据', '0', '1', '2001-0098-3390-3387', null, '0', '2AC1-AA98-3370-3387', '机械硬盘 1T', null);
INSERT INTO `mms_equipments` VALUES ('2', '2017-04-13 18:27:11', null, '0', '1', '鼠标', '1', null, '华宇科技', '8', '西部数据', '500', '1', '2001-0098-3390-3387', '2017-04-13 18:27:11', '10', '2AC1-AA98-3370-3387', '机械硬盘 1T', '2017-04-13 18:27:11');

-- ----------------------------
-- Table structure for mms_inventorylist
-- ----------------------------
DROP TABLE IF EXISTS `mms_inventorylist`;
CREATE TABLE `mms_inventorylist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `sid` int(11) DEFAULT NULL COMMENT '垛位号',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_inventorylist
-- ----------------------------
INSERT INTO `mms_inventorylist` VALUES ('4', '2017-04-21 16:35:08', '1', '2', '1', '710', '16', '1', '72');
INSERT INTO `mms_inventorylist` VALUES ('5', '2017-04-21 16:42:52', '1', '1', '1', '200', '17', '1', '73');
INSERT INTO `mms_inventorylist` VALUES ('6', '2017-04-21 16:42:52', '1', '0', '1', '0', '18', '1', '73');
INSERT INTO `mms_inventorylist` VALUES ('7', '2017-04-21 17:32:14', '1', '0', '1', '0', '23', '1', '74');
INSERT INTO `mms_inventorylist` VALUES ('8', '2017-04-21 17:49:16', '1', '0', '1', '0', '26', '1', '74');

-- ----------------------------
-- Table structure for mms_purchaseapplys
-- ----------------------------
DROP TABLE IF EXISTS `mms_purchaseapplys`;
CREATE TABLE `mms_purchaseapplys` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `applicant` int(11) DEFAULT NULL COMMENT '申请人',
  `applydate` varchar(255) DEFAULT NULL COMMENT '申请时间',
  `arrivaldate` varchar(255) DEFAULT NULL COMMENT '预计到货时间',
  `circulation` varchar(255) DEFAULT NULL COMMENT '流转状态',
  `createdate` varchar(255) DEFAULT NULL COMMENT '申请时间',
  `createuser` int(11) DEFAULT NULL COMMENT '申请人',
  `equipments` varchar(255) DEFAULT NULL COMMENT '采购设备',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `reason` varchar(255) DEFAULT NULL COMMENT '采购原因',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_purchaseapplys
-- ----------------------------
INSERT INTO `mms_purchaseapplys` VALUES ('9', '1', '2017-04-01', '2017-04-29', '2', '2017-04-24 15:13:14', '1', '鼠标X300,键盘X1200', '1', null, '旧鼓楼大街店补货', null);
INSERT INTO `mms_purchaseapplys` VALUES ('10', '1', '2017-04-06', '2017-04-29', '2', '2017-04-25 13:34:28', '1', '键盘X4', '1', null, '321312', null);

-- ----------------------------
-- Table structure for mms_purchaseapplysdetails
-- ----------------------------
DROP TABLE IF EXISTS `mms_purchaseapplysdetails`;
CREATE TABLE `mms_purchaseapplysdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_purchaseapplysdetails
-- ----------------------------
INSERT INTO `mms_purchaseapplysdetails` VALUES ('16', '9', '2017-04-24 15:13:14', '1', '2', '1', '300');
INSERT INTO `mms_purchaseapplysdetails` VALUES ('17', '9', '2017-04-24 15:13:14', '1', '1', '1', '1200');
INSERT INTO `mms_purchaseapplysdetails` VALUES ('20', '10', '2017-04-25 13:34:28', '1', '1', '1', '4');

-- ----------------------------
-- Table structure for mms_purchasereceiptlist
-- ----------------------------
DROP TABLE IF EXISTS `mms_purchasereceiptlist`;
CREATE TABLE `mms_purchasereceiptlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '采购数量',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `sequenceNumber` varchar(255) DEFAULT NULL COMMENT '流水单号',
  `intoquantity` int(11) DEFAULT NULL COMMENT '入库数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_purchasereceiptlist
-- ----------------------------
INSERT INTO `mms_purchasereceiptlist` VALUES ('16', '9', '2017-04-25', '1', '2', 'id', '300', '3', 'mms-allocationlist2017042519281059311000', '300');
INSERT INTO `mms_purchasereceiptlist` VALUES ('17', '9', '2017-04-25', '1', '1', 'id', '1200', '2', 'mms-allocationlist2017042519281059311000', '200');
INSERT INTO `mms_purchasereceiptlist` VALUES ('18', '10', '2017-04-25', '1', '1', 'id', '4', '1', 'mms-allocationlist2017042519525231451000', '0');

-- ----------------------------
-- Table structure for mms_stacks
-- ----------------------------
DROP TABLE IF EXISTS `mms_stacks`;
CREATE TABLE `mms_stacks` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `classify` varchar(255) DEFAULT NULL COMMENT '种类',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `position` varchar(255) DEFAULT NULL COMMENT '位置',
  `scode` varchar(255) DEFAULT NULL COMMENT '垛位号',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_stacks
-- ----------------------------
INSERT INTO `mms_stacks` VALUES ('16', '1', '2017-04-21 16:42:52', '0', '1', 'A1区2层第一行第五列', 'A1-F1-R1-C5', '1', '72');
INSERT INTO `mms_stacks` VALUES ('17', '3', '2017-04-21 16:42:52', '1', '1', 'A1区1层第一行第一列', 'A1-F1-R1-C1', '1', '73');
INSERT INTO `mms_stacks` VALUES ('18', '1', '2017-04-21 16:42:52', '1', '1', 'A1区1层第一行第二列', 'A1-F1-R1-C2', '1', '73');
INSERT INTO `mms_stacks` VALUES ('23', '1', '2017-04-21 17:49:00', '1', '1', 'A1区1层第一行第一列', 'A1-F1-R1-C1', '1', '74');
INSERT INTO `mms_stacks` VALUES ('26', '1', '2017-04-21 17:49:10', '1', '1', 'A1区1层第一行第二列', 'A1-F1-R1-C2', '1', '74');

-- ----------------------------
-- Table structure for mms_storagelist
-- ----------------------------
DROP TABLE IF EXISTS `mms_storagelist`;
CREATE TABLE `mms_storagelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `operator` int(11) DEFAULT NULL COMMENT '经办人',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `sid` int(11) DEFAULT NULL COMMENT '垛位编号',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `storagedate` varchar(255) DEFAULT NULL COMMENT '入库时间',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  `qid` int(11) DEFAULT NULL COMMENT '回执单编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_storagelist
-- ----------------------------
INSERT INTO `mms_storagelist` VALUES ('12', '2017-04-25 19:28:37', '1', '2', '1', '1', '100', '16', '1', '2017-04-25 19:28:37', '72', '16');
INSERT INTO `mms_storagelist` VALUES ('13', '2017-04-25 19:40:21', '1', '2', '1', '1', '100', '16', '1', '2017-04-25 19:40:21', '72', '16');
INSERT INTO `mms_storagelist` VALUES ('14', '2017-04-25 19:52:18', '1', '2', '1', '1', '100', '16', '2', '2017-04-25 19:52:18', '72', '16');
INSERT INTO `mms_storagelist` VALUES ('15', '2017-04-25 19:59:10', '1', '2', '1', '1', '0', '16', '3', '2017-04-25 19:59:10', '72', '16');
INSERT INTO `mms_storagelist` VALUES ('16', '2017-04-26 14:26:47', '1', '1', '1', '1', '200', '17', '2', '2017-04-26 14:26:47', '73', '17');

-- ----------------------------
-- Table structure for mms_supplyedlist
-- ----------------------------
DROP TABLE IF EXISTS `mms_supplyedlist`;
CREATE TABLE `mms_supplyedlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '调拨单编号',
  `applicant` int(11) DEFAULT NULL COMMENT '申领人',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `operator` int(11) DEFAULT NULL COMMENT '经办人',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `sid` int(11) DEFAULT NULL COMMENT '垛位编号',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `supplyeddate` varchar(255) DEFAULT NULL COMMENT '出库时间',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_supplyedlist
-- ----------------------------
INSERT INTO `mms_supplyedlist` VALUES ('16', '40', '1', '2017-04-26 15:35:12', '1', '2', '1', '1', '10', '16', '1', '2017-04-26 15:35:12', '72');
INSERT INTO `mms_supplyedlist` VALUES ('17', '40', '1', '2017-04-26 15:36:35', '1', '2', '1', '1', '20', '16', '3', '2017-04-26 15:36:35', '72');
INSERT INTO `mms_supplyedlist` VALUES ('18', '40', '1', '2017-04-26 15:37:44', '1', '2', '1', '1', '10', '16', '1', '2017-04-26 15:37:44', '72');
INSERT INTO `mms_supplyedlist` VALUES ('19', '40', '1', '2017-04-26 15:38:00', '1', '2', '1', '1', '10', '16', '3', '2017-04-26 15:38:00', '72');

-- ----------------------------
-- Table structure for mms_warehouses
-- ----------------------------
DROP TABLE IF EXISTS `mms_warehouses`;
CREATE TABLE `mms_warehouses` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `address` varchar(255) DEFAULT NULL COMMENT '地址',
  `classify` varchar(255) DEFAULT NULL COMMENT '仓库种类',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `latitude` float DEFAULT NULL COMMENT '纬度',
  `longitude` float DEFAULT NULL COMMENT '经度',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `wcode` varchar(255) DEFAULT NULL COMMENT '仓库编号',
  `wname` varchar(255) DEFAULT NULL COMMENT '仓库名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mms_warehouses
-- ----------------------------
INSERT INTO `mms_warehouses` VALUES ('72', '北京市海淀区学院路科大天工大厦A-13', '1', '2017-04-21 17:19:07', '1', '1', '0', '0', '1', 'BJ-HD-XYL-A1003', '学院路飞度仓库');
INSERT INTO `mms_warehouses` VALUES ('73', '北京市东城区鼓楼大街108', '3', '2017-04-21 16:42:52', '1', '1', '0', '0', '1', 'BJ-DC-GLDJ-A1001', '鼓楼大街德胜门仓库');
INSERT INTO `mms_warehouses` VALUES ('74', '北京市海淀区学院路109', '1', '2017-04-21 17:48:54', '1', '1', '0', '0', '1', 'BJ-HD-XYL-A1002', '科大天工大厦1号仓库');

-- ----------------------------
-- Table structure for sys_domains
-- ----------------------------
DROP TABLE IF EXISTS `sys_domains`;
CREATE TABLE `sys_domains` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `businesstype` varchar(255) DEFAULT NULL COMMENT '业务类型',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `domainkey` varchar(255) DEFAULT NULL COMMENT '值域键',
  `domainvalue` varchar(255) DEFAULT NULL COMMENT '值域值',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `describes` varchar(255) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_domains
-- ----------------------------
INSERT INTO `sys_domains` VALUES ('2', 'WarehousesClassify', '2017-03-24', '1', '1', '普通仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('3', 'WarehousesClassify', '2017-03-24', '1', '2', '冷藏仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('4', 'WarehousesClassify', '2017-03-24', '1', '3', '恒温仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('5', 'WarehousesClassify', '2017-03-24', '1', '4', '露天仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('6', 'WarehousesClassify', '2017-03-24', '1', '5', '储藏仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('7', 'WarehousesClassify', '2017-03-24', '1', '6', '危险品仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('8', 'WarehousesClassify', '2017-03-24', '1', '7', '水上仓库', '1', '仓库类型');
INSERT INTO `sys_domains` VALUES ('9', 'WarehousesState', '2017-03-24', '1', '1', '正常', '1', '仓库状态');
INSERT INTO `sys_domains` VALUES ('10', 'WarehousesState', '2017-03-24', '1', '2', '废弃', '1', '仓库状态');
INSERT INTO `sys_domains` VALUES ('11', 'WarehousesState', '2017-03-24', '1', '3', '维修', '1', '仓库状态');
INSERT INTO `sys_domains` VALUES ('12', 'WarehousesState', '2017-03-24', '1', '4', '在建', '1', '仓库状态');
INSERT INTO `sys_domains` VALUES ('13', 'StacksState', '2017-03-24', '1', '1', '正常', '1', '垛位状态');
INSERT INTO `sys_domains` VALUES ('14', 'StacksState', '2017-03-24', '1', '2', '废弃', '1', '垛位状态');
INSERT INTO `sys_domains` VALUES ('15', 'StacksState', '2017-03-24', '1', '3', '维修', '1', '垛位状态');
INSERT INTO `sys_domains` VALUES ('16', 'StacksState', '2017-03-24', '1', '4', '在建', '1', '垛位状态');
INSERT INTO `sys_domains` VALUES ('17', 'StacksClassify', '2017-03-24', '1', '1', '整件', '1', '垛位类型');
INSERT INTO `sys_domains` VALUES ('18', 'StacksClassify', '2017-03-24', '1', '2', '杂物', '1', '垛位类型');
INSERT INTO `sys_domains` VALUES ('19', 'StacksClassify', '2017-03-24', '1', '3', '散件', '1', '垛位类型');
INSERT INTO `sys_domains` VALUES ('20', 'StacksClassify', '2017-03-24', '1', '4', '特殊', '1', '垛位类型');
INSERT INTO `sys_domains` VALUES ('21', 'EquipmentsClassify', '2017-03-24', '1', '1', '生产设备', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('22', 'EquipmentsClassify', '2017-03-24', '1', '2', '非生产设备', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('23', 'EquipmentsClassify', '2017-03-24', '1', '3', '固定资产', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('24', 'EquipmentsClassify', '2017-03-24', '1', '4', '非固定资产', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('25', 'EquipmentsClassify', '2017-03-24', '1', '5', '自有设备', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('26', 'EquipmentsClassify', '2017-03-24', '1', '6', '租赁设备', '1', '设备类型');
INSERT INTO `sys_domains` VALUES ('28', 'EquipmentsState', '2017-03-24', '1', '1', '已停产', '1', '设备状态');
INSERT INTO `sys_domains` VALUES ('29', 'EquipmentsState', '2017-03-24', '1', '2', '正常生产', '1', '设备状态');
INSERT INTO `sys_domains` VALUES ('31', 'EquipmentsType', '2017-03-24', '1', '1', '虚拟设备', '1', '设备状态');
INSERT INTO `sys_domains` VALUES ('32', 'EquipmentsType', '2017-03-24', '1', '2', '非虚拟设备', '1', '设备状态');
INSERT INTO `sys_domains` VALUES ('33', 'AllocationapplysCirculation', '2017-03-24', '1', '1', '已归还', '1', '调拨申请流转状态');
INSERT INTO `sys_domains` VALUES ('34', 'AllocationapplysCirculation', '2017-03-24', '1', '2', '未归还', '1', '调拨申请流转状态');
INSERT INTO `sys_domains` VALUES ('35', 'AllocationapplysCirculation', '2017-03-24', '1', '3', '转借', '1', '调拨申请流转状态');
INSERT INTO `sys_domains` VALUES ('36', 'InventoryListState', '2017-03-24', '1', '1', '正常', '1', '库存状态');
INSERT INTO `sys_domains` VALUES ('37', 'SupplyedListState', '2017-03-24', '1', '2', '全部出库', '1', '出库状态');
INSERT INTO `sys_domains` VALUES ('38', 'SupplyedListState', '2017-03-24', '1', '1', '未出库', '1', '出库状态');
INSERT INTO `sys_domains` VALUES ('39', 'PurchaseApplysCirculation', '2017-03-24', '1', '1', '申请通过', '1', '采购申请流转状态');
INSERT INTO `sys_domains` VALUES ('40', 'PurchaseApplysCirculation', '2017-03-24', '1', '2', '未通过', '1', '采购申请流转状态');
INSERT INTO `sys_domains` VALUES ('41', 'PurchaseApplysCirculation', '2017-03-24', '1', '3', '待审核', '1', '采购申请流转状态');
INSERT INTO `sys_domains` VALUES ('43', 'PurchaseReceiptListState', '2017-03-24', '1', '1', '未入库', '1', '采购申请回执单状态');
INSERT INTO `sys_domains` VALUES ('44', 'PurchaseReceiptListState', '2017-03-24', '1', '2', '部分入库', '1', '采购申请回执单状态');
INSERT INTO `sys_domains` VALUES ('45', 'PurchaseReceiptListState', '2017-03-24', '1', '3', '全部入库', '1', '采购申请回执单状态');
INSERT INTO `sys_domains` VALUES ('46', 'SupplyedListState', '2017-03-24', '1', '3', '部分出库', '1', '出库状态');
