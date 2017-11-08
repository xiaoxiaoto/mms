

/*Table structure for table `mms_allocationapplys` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_allocationapplys` */

insert  into `mms_allocationapplys`(`id`,`applicant`,`applydate`,`circulation`,`createdate`,`createuser`,`equipments`,`flag`,`quantity`,`reason`,`returndate`) values (1,1,'2017-03-29 14:02:46','1','2017-03-29 14:02:46',1,'机柜 X2,电缆 X6,显示器 X9','1',2,'新建实验室机房','2017-03-29 14:02:46');

/*Table structure for table `mms_allocationlists` */

DROP TABLE IF EXISTS `mms_allocationlists`;

CREATE TABLE `mms_allocationlists` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_allocationlists` */

insert  into `mms_allocationlists`(`id`,`aid`,`createdate`,`createuser`,`eid`,`flag`,`quantity`,`state`) values (1,1,'2017-03-29 14:03:26',1,1,'1',10,'1');

/*Table structure for table `mms_applicationillustrate` */

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

/*Data for the table `mms_applicationillustrate` */

insert  into `mms_applicationillustrate`(`id`,`company`,`createdate`,`createuser`,`department`,`eid`,`flag`,`instructions`,`responsibleperson`,`state`,`usedate`) values (1,'北京安心','2017-03-29 14:06:51',1,'研发部',1,'1','研发中心服务器A-101',1,'1','2017-03-29 14:06:51');

/*Table structure for table `mms_applydetails` */

DROP TABLE IF EXISTS `mms_applydetails`;

CREATE TABLE `mms_applydetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_applydetails` */

insert  into `mms_applydetails`(`id`,`aid`,`createdate`,`createuser`,`eid`,`flag`,`quantity`) values (1,1,'2017-03-29 14:04:22',1,1,'1',20);

/*Table structure for table `mms_equipments` */

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
  `pnfru` varchar(255) DEFAULT NULL COMMENT 'PN/FRU编号',
  `productiondate` varchar(255) DEFAULT NULL COMMENT '出厂日期',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `serialnumber` varchar(255) DEFAULT NULL COMMENT '序列号',
  `specifications` varchar(255) DEFAULT NULL COMMENT '规格',
  `unpackingdate` varchar(255) DEFAULT NULL COMMENT '拆封时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_equipments` */

insert  into `mms_equipments`(`id`,`arrivaldate`,`createcate`,`createuser`,`eclassify`,`ename`,`etype`,`flag`,`integrator`,`life`,`manufacturer`,`originalprice`,`pnfru`,`productiondate`,`quantity`,`serialnumber`,`specifications`,`unpackingdate`) values (1,'2017-03-29 14:05:32','2017-03-29 14:05:32',1,'1','硬盘','1','1','华宇科技','8年','西部数据',500,'2001-0098-3390-3387','2017-03-29 14:05:32',10,'2AC1-AA98-3370-3387','机械硬盘 1T','2017-03-29 14:05:32');

/*Table structure for table `mms_inventorylist` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_inventorylist` */

insert  into `mms_inventorylist`(`id`,`createdate`,`createuser`,`eid`,`flag`,`quantity`,`sid`,`state`,`wid`) values (1,'2017-03-29 14:07:12',1,1,'1',10,1,'1',1);

/*Table structure for table `mms_purchaseapplys` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_purchaseapplys` */

insert  into `mms_purchaseapplys`(`id`,`applicant`,`applydate`,`arrivaldate`,`circulation`,`createdate`,`createuser`,`equipments`,`flag`,`quantity`,`reason`,`state`) values (1,1,'2017-03-29 14:08:22','2017-03-29 14:08:22','1','2017-03-29 14:08:22',1,'机柜 X2,电缆 X6,显示器 X9','1',2,'新建实验室机房',NULL);

/*Table structure for table `mms_purchaseapplysdetails` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_purchaseapplysdetails` */

insert  into `mms_purchaseapplysdetails`(`id`,`aid`,`createdate`,`createuser`,`eid`,`flag`,`quantity`) values (1,1,'2017-03-29 14:08:48',1,1,'1',20);

/*Table structure for table `mms_purchasereceiptlist` */

DROP TABLE IF EXISTS `mms_purchasereceiptlist`;

CREATE TABLE `mms_purchasereceiptlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `aid` int(11) DEFAULT NULL COMMENT '申请编号',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_purchasereceiptlist` */

insert  into `mms_purchasereceiptlist`(`id`,`aid`,`createdate`,`createuser`,`eid`,`flag`,`quantity`,`state`) values (1,1,'2017-03-29 14:09:37',1,1,'1',10,'1');

/*Table structure for table `mms_stacks` */

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `mms_stacks` */

insert  into `mms_stacks`(`id`,`classify`,`createdate`,`createuser`,`flag`,`position`,`scode`,`state`,`wid`) values (1,'1','2017-03-29 14:09:58',1,'1','东南脚','2F-4R-6C','1',1),(2,'1','2017-03-29 14:10:02',1,'1','东南脚','2F-4R-6C','1',1),(3,'1','2017-03-29 14:10:44',1,'1','东南脚','2F-4R-6C','1',1);

/*Table structure for table `mms_storagelist` */

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_storagelist` */

insert  into `mms_storagelist`(`id`,`createdate`,`createuser`,`eid`,`flag`,`operator`,`quantity`,`sid`,`state`,`storagedate`,`wid`) values (1,'2017-03-29 14:07:31',1,1,'1',1,10,1,'1','2017-03-29 14:07:31',1);

/*Table structure for table `mms_supplyedlist` */

DROP TABLE IF EXISTS `mms_supplyedlist`;

CREATE TABLE `mms_supplyedlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `allocationid` int(11) DEFAULT NULL COMMENT '调拨单编号',
  `applicant` int(11) DEFAULT NULL COMMENT '申领人',
  `circulation` varchar(255) DEFAULT NULL COMMENT '流转状态',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `eid` int(11) DEFAULT NULL COMMENT '设备编号',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  `operator` int(11) DEFAULT NULL COMMENT '经办人',
  `quantity` int(11) DEFAULT NULL COMMENT '数量',
  `returndate` varchar(255) DEFAULT NULL COMMENT '归还时间',
  `sid` int(11) DEFAULT NULL COMMENT '垛位编号',
  `state` varchar(255) DEFAULT NULL COMMENT '状态',
  `supplyeddate` varchar(255) DEFAULT NULL COMMENT '出库时间',
  `wid` int(11) DEFAULT NULL COMMENT '仓库编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_supplyedlist` */

insert  into `mms_supplyedlist`(`id`,`allocationid`,`applicant`,`circulation`,`createdate`,`createuser`,`eid`,`flag`,`operator`,`quantity`,`returndate`,`sid`,`state`,`supplyeddate`,`wid`) values (1,1,1,'未归还','2017-03-29 14:07:52',1,1,'1',1,10,'2017-03-29 14:07:52',1,'1','2017-03-29 14:07:52',1);

/*Table structure for table `mms_warehouses` */

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `mms_warehouses` */

insert  into `mms_warehouses`(`id`,`address`,`classify`,`createdate`,`createuser`,`flag`,`latitude`,`longitude`,`state`,`wcode`,`wname`) values (1,'科大天工大厦A座13层','1','2017-03-29 14:10:17',1,'1',35,103,'1','BJ-XYQ-176','学院路仓库');

/*Table structure for table `sys_domains` */

DROP TABLE IF EXISTS `sys_domains`;

CREATE TABLE `sys_domains` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `businesstype` varchar(255) DEFAULT NULL COMMENT '业务类型',
  `createdate` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `createuser` int(11) DEFAULT NULL COMMENT '创建人',
  `domainkey` varchar(255) DEFAULT NULL COMMENT '值域键',
  `domainvalue` varchar(255) DEFAULT NULL COMMENT '值域值',
  `flag` varchar(255) DEFAULT NULL COMMENT '标志位',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `sys_domains` */

insert  into `sys_domains`(`id`,`businesstype`,`createdate`,`createuser`,`domainkey`,`domainvalue`,`flag`) values (1,'ReligiousType','2017-03-24',1,'1','佛教','1');

