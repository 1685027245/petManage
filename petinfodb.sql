/*
SQLyog 企业版 - MySQL GUI v8.14 
MySQL - 5.7.25-log : Database - petinfodb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`petinfodb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `petinfodb`;

/*Table structure for table `open_index_data` */

DROP TABLE IF EXISTS `open_index_data`;

CREATE TABLE `open_index_data` (
  `id` varchar(32) NOT NULL COMMENT '主页数据',
  `platform_description` text COMMENT '平台描述',
  `platform_img` text COMMENT '平台图片',
  `encyclopedia_title` varchar(20) DEFAULT NULL COMMENT '百科标题',
  `encyclopedia_description` text COMMENT '百科说明',
  `information_title` varchar(20) DEFAULT NULL COMMENT '资讯标题',
  `information_description` text COMMENT '资讯说明',
  `shop_title` varchar(20) DEFAULT NULL COMMENT '店铺标题',
  `shop_description` text COMMENT '店铺说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `open_index_data` */

insert  into `open_index_data`(`id`,`platform_description`,`platform_img`,`encyclopedia_title`,`encyclopedia_description`,`information_title`,`information_description`,`shop_title`,`shop_description`) values ('1','爱宠乐主要供宠物店管理自己宠物店各方面的数据，后台也会有管理人员对各个模块进行管理，以便能够保证系统的整体正常运行。平台的模块包括用户开放模块、宠物店模块、系统管理模块。用户开放模块的功能包括用户登录、用户浏览资讯信息、用户查询周围宠物店、用户发表动态、用户申请宠物店模块。宠物店模块包括用户登录、订单结算、商品管理、会员管理、库存管理、数据分析、宠物店系统设置等功能。系统管理模块的功能包括对宠物店模块的申请进行审核、对宠物店的信息进行管理、对用户开放模块的数据信息进行管理。\n爱宠乐宠物店管理模块：主要是对宠物店的所有宠物进行管理，这个部分包括宠物基本信息管理，进行宠物交易等业务，宠物食品的管理，会员管理，库存的管理，预约相关宠物店的服务，对宠物店销售的情况进行数据分析生成报告，还有对宠物店信息的系统管理。宠物店的管理人员可以获取宠物店的各项数据，实时监测宠物店的各个方面的情况。\n爱宠乐开放模块：普通用户可以在这里了解各类宠物的相关信息和宠物资讯，可以在该模块进行查看附近宠物店和发表自己的宠物动态，需要使用宠物店模块功能的可以在这里申请开店，在系统管理平台通过审核之后即可使用宠物店模块对宠物进行各项数据的管理。\n爱宠乐系统管理模块：管理员可以进行进行查看用户基本信息，修改用户权限。对宠物店的信息管理，开启宠物店模块的审核，和各项数据的分析，对宠物资讯和百科数据信息管理。能够更好的管理用户开放模块。\n','/img/shopImg/e4029ba9c0c445ae8b0f516d55089468.png;/img/shopImg/e55f8bcfcb814ae98fd1ed68e580f253.png;/img/shopImg/9a48910701ab4adcbbd83948ab964448.png;/img/shopImg/55c9068439e54a6a93b3ae08f7dad083.png;/img/shopImg/a21e48568916483ca4d5f121c2df58fb.png;/img/shopImg/48c01b6578074261a75acbf73a5a1440.png;','宠物百科','开放部分，无需登录可查看，按照宠物类别分类，以宠物特征条件的方式查询宠物的具体信息，查看宠物基本资料及参考。','宠物资讯','开放部分，无需登录可以查看，用户可以查看热门有关于宠物的新闻资讯。','宠物店铺','开放部分，无需登录可以查看，用户查找爱宠乐平台上已经入驻的宠物店及其宠物店信息，预约和交流需要先注册登录。');

/*Table structure for table `permission` */

DROP TABLE IF EXISTS `permission`;

CREATE TABLE `permission` (
  `id` varchar(32) NOT NULL COMMENT '权限资源表',
  `permission_id` varchar(32) DEFAULT NULL COMMENT '权限id',
  `name` varchar(32) DEFAULT NULL COMMENT '权限名称',
  `description` varchar(255) DEFAULT NULL COMMENT '权限描述',
  `url` varchar(255) DEFAULT NULL COMMENT '权限访问路径',
  `perms` varchar(255) DEFAULT NULL COMMENT '权限标识',
  `parent_id` varchar(32) DEFAULT NULL COMMENT '父级权限id',
  `type` int(3) DEFAULT NULL COMMENT '类型   0：目录   1：菜单   2：按钮',
  `order_num` int(5) NOT NULL DEFAULT '0' COMMENT '排序',
  `icon` varchar(20) DEFAULT NULL COMMENT '图标',
  `status` int(3) NOT NULL DEFAULT '1' COMMENT '状态：1有效；2删除',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `permission` */

insert  into `permission`(`id`,`permission_id`,`name`,`description`,`url`,`perms`,`parent_id`,`type`,`order_num`,`icon`,`status`,`create_time`,`update_time`) values ('1',NULL,'申请宠物店','用户登录后才能申请宠物店模块','/open/applyPetShop.html','authc',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL),('2',NULL,'个人中心','注册账号才有个人中心','/open/userCenter.html','authc',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL),('4',NULL,'宠物店所有页面','管理员和宠物店店长可以将进入宠物店模块','/petShop/**','hasAnyRoles[petShop,admin]',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL),('5',NULL,'系统管理所有页面','只有管理员才有进入系统管理','/system/**','roles[admin]',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL),('6',NULL,'朋友圈','发表动态，需要登录','/open/wechatMoments.html','authc',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL),('7','','开放模块','除了需要登录的其他全部开放','/open/**','anon',NULL,1,0,NULL,1,'2020-03-01 10:15:20',NULL);

/*Table structure for table `pet` */

DROP TABLE IF EXISTS `pet`;

CREATE TABLE `pet` (
  `id` varchar(32) NOT NULL COMMENT '宠物信息',
  `nick_name` varchar(32) DEFAULT NULL COMMENT '宠物昵称',
  `shape` varchar(32) DEFAULT NULL COMMENT '体型',
  `hair_length` varchar(32) DEFAULT NULL COMMENT '毛长',
  `weight` varchar(32) DEFAULT NULL COMMENT '体重',
  `price` decimal(18,2) DEFAULT NULL COMMENT '价格',
  `img_path` text COMMENT '图片地址',
  `number` varchar(32) NOT NULL COMMENT '编号',
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注',
  `coat_color` varchar(32) DEFAULT NULL COMMENT '毛色',
  `pet_encyclopedias_id` varchar(32) DEFAULT NULL COMMENT '宠物百科id',
  `sales_status` varchar(32) DEFAULT NULL COMMENT '销售状态(待售，已售，当前订单)',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet` */

insert  into `pet`(`id`,`nick_name`,`shape`,`hair_length`,`weight`,`price`,`img_path`,`number`,`remarks`,`coat_color`,`pet_encyclopedias_id`,`sales_status`,`shop_id`,`create_time`) values ('3cbdd43e7b904fa2854569d41ae9a044','','小型','长毛','6KG','400.00','/img/pet/5f23af4c58a747c4872c1d7f2b723442.jpg;','FC434','','白色','5c4a12afbc9d49c7b91f7db040f0696b','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:51:15'),('3e7c6de4136e47faa8f3a075519846a9','','大型','长毛','25KG','7000.00','/img/pet/d4f3c5be15ff4e43a73b5e64da2ba720.jpg;','FA343','','黄灰色','3','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:54:36'),('44bb6a7c1a714f979f2f4a5661c518a5','','大型','长毛','10KG','6000.00','/img/pet/c21479fbf0c141969cee1171a32fe407.jpg;','FA123','暂无备注内容','灰黑色','2','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:45:33'),('4d19d6488cbc40c6891690ccc34d3162','','中型','长毛','30KG','6500.00','/img/pet/e49f5700863f4020bc1d419bd7f68c93.jpg;','FA545','','黑白色','dcf00247c7bd4672ab9cc340a5643949','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:56:18'),('5b40be236d6b44bab85d1e59dfd9d183','','大型','长毛','40KG','9000.00','/img/pet/f009b8fd53c84e6386a67dea5c025ebf.jpg;','FA343','','黄色','d18ac0cdf42742d88de292d2154efc6a','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:58:25'),('77a0fc24fce44dfea264b9b19a366b2c','','中型','长毛','8KG','5000.00','/img/pet/2e9e8874436144ba8d1cc59a329630f9.jpg;','FB124','','白色','21dc2652d9fc46059a2c831b6a2b2e7a','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:47:14'),('887050a0fd0b48cc9625a35dbd8f60d9','','小型','长毛','15KG','5500.00','/img/pet/9f09cf1f3b874ba2b277fd9675bccb58.jpg;','FA6552','','黑白色','2','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:59:40'),('9d0365d07dbb478899bd2269a6062ead','','中型','长毛','13KG','6000.00','/img/pet/06f8ea389e9b436bb75d038b3b767af5.jpg;','FB44343','','其它颜色','5','已售','44e770a3718d4c52b570979ae590b491','2020-04-25 15:16:34'),('bc9b5d82d51446fc847b7c02e73c2498','','小型','长毛','15KG','6600.00','/img/pet/15d8741314f7493f8b87707442a6fcf1.jpg;','FA332','','黑白色','2','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 15:00:34'),('dde43069d694486f9f60dfaf00bd394f','','小型','短毛','0.5KG','300.00','/img/pet/a001816d42564c6593a3e86361e1985f.jpg;','FF2321','','灰黄色','fc24e9112b954ff8a84514a3fb376657','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:53:10'),('f900204aa19d43578e077711302bfd5f','','中型','长毛','7KG','5500.00','/img/pet/121aca6907b24210bab571882776353b.jpg;','FB125','','灰色','4','待售','44e770a3718d4c52b570979ae590b491','2020-04-25 14:50:00');

/*Table structure for table `pet_encyclopedias` */

DROP TABLE IF EXISTS `pet_encyclopedias`;

CREATE TABLE `pet_encyclopedias` (
  `id` varchar(32) NOT NULL COMMENT '宠物百科',
  `name` varchar(32) DEFAULT NULL COMMENT '名称（中文名）',
  `alias` varchar(255) DEFAULT NULL COMMENT '别名',
  `shape` varchar(32) DEFAULT NULL COMMENT '体型',
  `hair_length` varchar(32) DEFAULT NULL COMMENT '毛长',
  `english_name` varchar(32) DEFAULT NULL COMMENT '英文名',
  `intelligence_quotient` varchar(32) DEFAULT '--' COMMENT '智商',
  `country_of_origin` text COMMENT '原产地',
  `weight` varchar(32) DEFAULT NULL COMMENT '体重',
  `life` varchar(32) DEFAULT NULL COMMENT '寿命',
  `price` varchar(32) DEFAULT NULL COMMENT '参考价格',
  `coat_color` varchar(32) DEFAULT NULL COMMENT '毛色',
  `function` varchar(32) DEFAULT '--' COMMENT '功能',
  `detail_characterities` varchar(255) DEFAULT NULL COMMENT '详细特征',
  `img_path` text COMMENT '图片地址',
  `origin` text COMMENT '起源',
  `category` varchar(32) DEFAULT NULL COMMENT '类别（狗，猫）',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `environment` varchar(32) DEFAULT NULL COMMENT '生活环境',
  `varieties` varchar(32) DEFAULT NULL COMMENT '常见品种/稀有品种',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_encyclopedias` */

insert  into `pet_encyclopedias`(`id`,`name`,`alias`,`shape`,`hair_length`,`english_name`,`intelligence_quotient`,`country_of_origin`,`weight`,`life`,`price`,`coat_color`,`function`,`detail_characterities`,`img_path`,`origin`,`category`,`create_time`,`environment`,`varieties`) values ('08eafba33b6a47ed9c697d6a9027d2ad','彩豚','逆毛绒豚鼠','大型','长毛','borovs','','秘鲁、巴西、圭亚那、巴拉圭、哥伦比亚等地','0.4~0.7公斤','6~7年','25~260元','白色,黄色,其它颜色','','娇小可爱','/img/encyclopedias/150c1529e1c348df94163dad64aebb86.jpg;/img/encyclopedias/bfcee0a3f9dc4f90a8d40cdc9f7d1f39.jpg;','逆毛绒豚：是安哥拉豚鼠的一种，身披长毛，因其全身的体毛逆向生长，并形成玫瑰花般的圈型美丽纹路，拥有8—10厘米长的如丝般柔软体毛，所以才叫逆毛绒豚。它有白、黑、黄、灰及白黑、白黄、黑白黄等多种色彩。','老鼠','2020-04-15 11:46:38',NULL,'豚鼠'),('2','阿拉斯加雪橇犬','阿拉斯加马拉缪特;阿拉斯加马拉穆','大型','长毛','Alaskan Malamute','第50名','美国','39-56KG','10-15年','2000-3000元','白色,黑色,灰色,其它颜色','守卫犬,雪橇犬,其它','耐寒程度','/img/encyclopedias/02198fe411e6471ba0f913c39c139e7d.jpg;/img/encyclopedias/1d1bc908f2554d098fd9c8ab70ed57df.jpg;/img/encyclopedias/b3a4daf7c93f4db4b884b8ef4f6035c4.jpg;/img/encyclopedias/9e50b39460ed4b5691b4c924999d8581.jpg;','在最初北美移民的纪录上，可发现有阿拉斯加雪橇犬的记载。此犬属匀称的体格和有顽强精神和忍耐力的犬种。阿拉斯加雪橇犬喜欢户外运动，在使用雪橇的年代里马拉缪特族已年)拥有此强壮并能在北极雪地中旅行的犬种，还利用此犬猎捕北极熊、狼等动物，同时还用它担任守护驯鹿的工作。阿拉斯加雪橇犬以身强力壮及富忍耐力而闻名于世，在白人逐渐进入北极圈后，它们常被用来从事探险南北极的活动。随着美洲的发现、阿拉斯加被征服，白人开始将北极圈内的犬和外来的犬杂交。就像他们在格陵兰岛和拉布拉多半岛西伯利亚和其他的极地地区所做的一样。最威胁阿','狗狗','2020-03-23 11:15:20',NULL,NULL),('20552a33e3904525a173fb1307f9a508','阿拉拜咬狼犬','阿拉拜;中亚;土库曼狼狗;土库曼牧羊犬','大型','短毛','Alabai','第 999名','苏联','40~79公斤','','4000~5000元','白色,黑色,其它颜色','守卫犬','体味，运动','/img/encyclopedias/a671754a55ce4e519694775675381d05.jpg;/img/encyclopedias/0b778ab4aa784053b025ef004a76c50e.jpg;','几千年前，亚洲的游牧民族用一种身高、体大、裁耳、断尾的猛犬来驱逐害兽、护卫他们的牲畜。这一犬种是经过自然残酷的选择而形成的。它是人类的需要和自然的选择交互影响作用的产物，它适应了很多地方的自然条件。适应气候从夏天的酷热干燥到冬天的严寒大风。只有最顽强的幼犬才可以在这种气候下成活下来，而且这些幼犬中有天生护卫牲畜本能的幼犬才能真正有机会留存下来。因为中亚地区的传统喜好以颜色和工作类别为狗命名， Alabai的Ala指Motley (colorful two， three or more colors...两色或多色的) ；Bai指Rich(富有的、鲜明的)。顾名思义，Alabai是色彩分明的狗，有”花开富贵“的传统寓意。因为千年来几个斯坦之间的历史、文化、政治交流。现在还可以在阿富汗、伊朗、哈萨克斯坦、乌兹别克斯坦和Kazakhstan、Kirgyzstan、Tadjikistan，发现它们的踪迹。','狗狗','2020-04-05 12:29:02',NULL,NULL),('21dc2652d9fc46059a2c831b6a2b2e7a','伯曼猫','缅甸圣猫','大型','长毛','Birman','','缅甸','4.5~5公斤','8~15年','2000~4000元','重点色','','友善','/img/encyclopedias/a0c5e485fa3f4524af5325229014445e.jpg;','伯曼猫相传是源出于缅甸，传说伯曼猫颜色的来源是这样的：在LaoTsum庙宇的守护神是一只金黄眼睛的白色长毛猫，而庙 宇的尊贵女神Tsun-Kyan-Kse的眼睛则是深蓝色。庙宇的主持与一只猫猫Sinh为伴，在一次遇袭中去世，而在主持去世的时候，爱猫Sinh踏在 主持的身上并面向尊贵女神，在这时候，神迹显现使白猫的毛盖上一层金色，眼睛变成蓝色，面，脚及尾巴都变成泥土颜色，但踏在主人身上的四只脚却保持原有白 色。Sinh过了七日后便死去，把主持的灵魂带到极乐世界。\n\n在现代历史中记载，一对伯曼猫首次于1919年从缅甸运到法国，在运送途中，雄猫死去，只剩下母猫及其腹中小猫，自始伯曼猫在欧洲不继发 展，于1925年在法国被确认。但在二次大战期间，全欧洲的伯曼猫只剩余两只，为了挽救这个濒危的品种，繁殖家唯有以异种交配方法，重新建立这个品种。自 始以后，一般伯曼猫的注册必须最少有五代的纯种血统。伯曼猫于1966年被英国确认，而CFA则于1967年承认这个品种。','猫','2020-04-05 14:15:25',NULL,NULL),('26ecf4fb9392420f8713f0484bd68524',' 豹纹壁虎','豹纹蜥虎;豹纹守宫','小型','无毛','Leopard Gecko','','中亚','0.3~0.5公斤','18~20年','250~1000元','','','','/img/encyclopedias/4ad320649d094a3fb47cfeafcf0d9501.jpg;','豹纹守宫，也叫豹纹壁虎，在中文里面，守宫就是壁虎的意思，原产于印度，巴基斯坦，伊朗和阿富汗等地，属于蜥蜴亚目壁虎科拟蜥属，是最早被人类当作宠物饲养的壁虎品种。由于外形可爱，性格温顺，饲养简单，并且在人工繁育过程中不断有新的花色和品系被培育出来，目前是世界壁虎市场上当仁不让的最高人气品种，近两年来在我国爬虫市场中也迅速升温，可说是爬虫爱好者的不二之选。','其它','2020-04-15 12:45:08','无','蜥蜴'),('2bfc2f82a1694475b394046e8872060c','巴厘岛猫','长毛暹罗猫、爪洼猫、巴厘岛猫','中型','长毛','Balinese','','美国','3.5~7公斤','8~15年','500~6000元','白色,蓝色,其它颜色','','粘人，','/img/encyclopedias/2b6b58b3ed904b268633159ea3232e4b.jpg;','巴厘猫是著名的长毛猫，由美国人培育而成，最早出现在人们认为是纯暹罗猫血统的猫中，但它只是暹罗猫的长毛突变种。20世 纪初，美国纽约州的贝伦•斯密斯夫人在饲养的暹罗猫后代中发现长毛突变种，当时被称为“残废的暹罗猫”，虽然1930年就参加猫展，但一直未能在展示会中 获奖。后来经过育种学家30多年的努力，进行了一系列的选育、纯化、繁殖，终于在1963年首次被美国养猫协会承认。','猫','2020-04-05 14:18:53',NULL,NULL),('3','澳大利亚牧羊犬','澳牧','中型','长毛','Australian Shepherd','第42名','美国','16-32KG','10-15年','2000-10000元','白色,黑色,褐色,红棕色,陨石色','伴侣犬,牧羊犬,守卫犬','运动量','/img/encyclopedias/e97add6f8d8749e98398de5da80f345f.jpg;/img/encyclopedias/d4ff1f8a66554d89a2713c39fdb694f1.jpg;/img/encyclopedias/699bd3ddd5af48048364bd173bb381bc.jpg;','澳大利亚牧羊犬是从美国发展起来的，它也可能起源于西班牙和法国之间的比里牛斯山脉的巴斯克地区，但是之所以称作澳大利亚牧羊犬，是因为它与18世纪从澳大利亚进入美国的巴斯克牧羊犬有联系。像其他大多数牧羊犬一样，澳大利亚牧羊犬最初也有许多名字，包括西班牙牧羊犬、牧羊断尾犬、追踪犬，新墨西哥牧羊犬和加利福尼亚牧羊犬。','狗狗','2020-03-23 11:15:20',NULL,NULL),('3321770d25f1463cb15e3679ceb4122a','蝾螈','火蜥蜴;水八狗;四足鱼;潜水狗','小型','无毛','Salamander','','北半球的温带区域','','','无','','','','/img/encyclopedias/f5c5b0054e70431aa45020bde5746b06.jpg;','蝾螈有一个长长的尾巴，它们的视力都比较差，因此在捕食的时候只吃活饵。成年的蝾螈体长约为61～155mm之间。它们的皮肤比较光滑有小疣，脊棱弱。\n　　蝾螈由头、颈、躯干、四肢和尾5部分组成。蝾螈的头部扁平，舌小而厚，卵圆形，前后端与口腔底部粘膜相连，四肢细弱，指、趾无蹼；尾极侧扁。雄性肛部肥大，肛裂较大；雌性肛部呈丘状隆起，肛裂短。蝾螈的颈部不明显，躯干较扁，四肢较发达，前肢四指，后肢五趾，指（趾）间无蹼，尾侧扁而长。\n　　蝾螈犁骨齿呈“∧”形，唇褶较显，前颌骨1枚，鼻突中间无骨缝；上颌骨和翼骨均短，二者相距远。基舌软骨有1对指状突，2对角鳃骨均骨化或仅有1对骨化,上鳃骨仅1对。幼体有平衡枝，外鳃3对，羽状；尾背鳍褶始自体前部，鳍褶低而平直。蝾螈身体短小，有4条腿，皮肤潮湿，大都有明亮的色彩和显眼的模样。霸王蝾螈体型最大，体长可达2.3米。\n　　蝾螈都有尾巴，体形和蜥蜴相似，但体表没有鳞。它与蛙类不同，一生都长着一条长尾巴。它的四肢不发达，成体可分为水栖、陆栖和半水栖几类。水栖类型在水中产卵，陆栖类型在繁殖时回到水中产卵，少数种类在潮湿的陆地产卵，产卵后幼体要在水中发育成长。','其它','2020-04-15 12:49:50','无','其它'),('4','阿契安吉蓝猫','阿契安吉蓝猫;马耳他猫','中型','短毛','Russian Blue','--','俄罗斯','3-6KG','','1300-1800元','蓝色','--','耐寒程度','/img/encyclopedias/67ea4882f8124bdeb2f226adb2a0db54.jpg;','俄罗斯蓝猫，英文名Russian Blue。历史上曾被称做阿契安吉蓝猫，由于祖先起源于寒冷的西伯利亚地带，很多地方称它为“冬天的精灵”。17世纪时随着船只被带到英国繁衍，第二次世 界大战期间险些绝种。俄罗斯蓝猫历史较为悠久，它们的祖先“阿契安吉蓝猫”早在17世纪就从俄罗斯的港口被带往英国。二次大战以后，俄罗斯蓝猫的数量急剧 减少，为了把其种群数量恢复，培育者用暹罗猫与其进行杂交，使得俄罗斯蓝猫的外形带有一些东方情调。','猫','2020-03-23 11:15:20',NULL,NULL),('42aaf5b6b09c4c59b576865a6512e756','八哥','黑八哥;鸲鹆;寒皋;凤头八哥;了哥仔','中型','长毛','Acridotheres cristatellus','','印度至中国云南南部、广西南部及海南岛、东南亚、巴拉望岛及大巽他群岛','','22~23年','50~500元','黑色','','会说话','/img/encyclopedias/973448cb19a34849bbb80a77cd0900dc.jpg;','鹩哥体长约28厘米，嘴峰22毫米，翅160毫米，尾80毫米，足30毫米。嘴角呈橙色，头上有两片鲜黄色的肉垂，全身羽毛乌黑闪亮，头和颈具紫黑色金属光泽。\n眼先和头侧被以绒黑色短羽，头顶中央羽毛硬密而卷曲，雄性成鸟嘴须发达；额至头顶辉黑色，头侧被以绒黑色短羽；上体的后颈、肩和两翅内侧覆羽均为辉紫铜色；下背、腰及尾上覆羽呈金属绿色；飞羽黑色，第2～7枚初级飞羽内翈横贯白斑，飞翔时更为明显；尾羽黑色，沾辉绿色。\n颏、喉至前颈紫黑色；前胸铜绿色；腹部蓝紫铜色，腹中央和尾下覆羽羽端具狭窄白色羽缘。雌鸟体色与雄鸟相似。幼鸟上体褐黑色；头后肉垂缺如；头部裸露部分不如成鸟显著。两胁和腹部具狭窄白色羽缘。离趾型足，趾三前一后，后趾与中趾等长；腿细弱，跗跖后缘鳞片常愈合为整块鳞板；雀腭型头骨。','宠物鸟','2020-04-02 21:32:20',NULL,'雀类'),('5','埃及猫','法老王猫、埃及神猫','中型','短毛','Egyptian Mau','--','埃及','2-5KG','8-15年','5000-6000元','其它颜色','--','护家程度','/img/encyclopedias/9868d51e92ef44b5a45790dfdb910f00.jpg;','埃及猫原产于埃及，是一个古老的品种，可能是世界上最早出现的家猫，在古埃及被奉为神猫。早在公元1400年前，古埃及时 代的壁画或纸莎草等，都画有和今天的埃及猫模样一样的猫。后来，埃及猫的地位随着古埃及的没落而衰弱，直到公元4世纪康士坦丁统治时期，埃及猫才开始作为 普通的小生物而存在。1953年第一只埃及猫传入意大利，后传入美国，1957年，埃及猫首次在英国伦敦皇家猫展上亮相，1972年得到猫协承认。','猫','2020-03-23 11:15:20',NULL,NULL),('568056e249964a60bb542a90c7c35c22','布偶猫','布娃娃猫;玩偶猫','大型','长毛','Ragdoll','','美国','4.5~9公斤','','8000~15000元','渐层色,其它颜色','','粘人，友善','/img/encyclopedias/dc1322aeff8441a78d7aed79e1b871e2.jpg;','布偶猫的原产地是美国，又称布拉多尔猫，是猫中体型和体重最大的一种猫。它们的祖先是白色长毛猫和伯曼猫。于1960年开始繁育，1965年在美国获得认可。\n\n布偶猫的确切来由可追溯到20世纪60年代，有位住在加州的妇女安贝可（Ann Baker）开始经营布偶猫种的培育。她的第一只育种猫叫做Josephine乔瑟芬（简称乔），它是只纯白的混种长毛猫。\n\n原本这只猫是只野生猫，经常在安贝可家附近跑来跑去。有一次它被车子撞了，刚巧被安贝可的邻居见到，就好心地救它回家，还细心地照顾它。渐 渐地，乔的身体也复原了。就在这段期间内，乔生下一批小猫，安贝可注意到了乔的小猫。以前乔所生的小猫，野性都很重。可是被车子撞过后，乔生下的这批小 猫，个性变得特别的好。安贝可觉得这些小猫的个性很特别，所以她想来试验培育这种猫。安贝可把乔要回家后，到户外抓回了二只以前乔和不同公猫生下的小猫。 而安贝可找来的种公叫做Warbucks，它有个白鼻，尾端也是白的。安贝可让它和其它母猫交配，结果生下的小猫，全都有像暹逻的重点花色。后来安帮他们 注册为Ragdoll布偶猫，并在媒体上宣扬放送，才开始引起猫界人士的注意。这位安贝可女士在1997年过世，她在猫界历史上，就留下这支布偶猫血系， 渐渐流传开来。','猫','2020-04-05 14:17:06',NULL,NULL),('58fc7328256e4ceebe2f43248d2bd52d','巴西彩龟','巴西红耳龟;红耳龟;巴西龟;秀丽锦龟;麻将龟;七彩龟','小型','无毛','Trachemys Acripta Elegans','','北美洲','0.5~0.8公斤','20~25年','5~40元','','','饲养难','/img/encyclopedias/64e63846742743f983ad0fd3d8e14c2d.jpg;/img/encyclopedias/95aabc70014f435fadb5322c8a29605c.jpg;','巴西龟又称为巴西红耳龟，原产地并非位于巴西，而是生存于北美密西西比河及格兰德河流域。具有很高的食用、药用和观赏价值，而且很适宜人工养殖。首先要指出的是一开始巴西龟事实上是来自巴西的巴西斑彩龟。20世纪80年代中国有引入。后期因为经费问题，引入了原产地美国的密西西比红耳龟。由于两者幼体相似度极高，难以区分。称呼上延续了之前的“巴西龟”，久而久之巴西龟变成了密西西比红耳龟的俗称。所以，我们现在见到的巴西龟都是来自密西西比河的，而不是来自巴西的。','宠物龟','2020-04-15 11:37:25','水生','稀有品种'),('5c4a12afbc9d49c7b91f7db040f0696b','波兰兔','波兰','小型','短毛','Polish','','波兰','1.5~1.6公斤','','300-800元','白色,黑色,灰色','','友善','/img/encyclopedias/56f8a81863d24190ad87c1116e34ab9b.jpg;','波兰兔原产于波兰，是在当地非常普遍的宠物兔品种，因为体型出奇的小，所以照顾起来也会比较麻烦，同时波兰兔也是纯种宠物兔中最小的一个，长度也不会超过十厘米，非常的袖珍。\n\n波兰兔体形特征：小于1.6kg 是纯种兔中最娇小的，身圆头短，两只耳朵竖起及靠在一起，长度不过7.6cm，毛短及浓密。草食，比如红豆幼叶，大豆幼叶，小草幼叶，等等。兔子可分为三大类：家兔( Rabbits )、野兔( Hares )及鼠兔( Pikas )。兔子在动物分类学上属於哺乳动物中的兔形目( Lagomorpha )。兔形目可分为两科，分别是鼠兔科( 鼠兔 )和兔科( 家兔及野兔 )。兔科由十一属四十五种兔子所组成，十一属中包括有野兔属(Lepus )、穴兔属(Oryctolagus )及棉尾兔属( Sylvilagus )等，一般饲养的兔子便是属於穴兔属。','兔子','2020-04-02 20:26:41',NULL,NULL),('603ab499a8a54eda97ee592cbb247b8b','豹纹陆龟','豹龟','大型','无毛','Leopard Tortoise','','非洲南部','35~45公斤','80~100年','2000~25000元','','','','/img/encyclopedias/cb759fe839d0461fb7f43f5dcd6fbc78.jpg;','豹纹陆龟是一种大型的迷人的陆龟，它们在撒哈拉沙漠地区有着广泛的分布，其中有南部的苏丹，埃塞俄比亚，东非（包括纳塔尔）、占比亚、博兹瓦纳、纳米比亚、安哥拉、西非。雄性豹龟的体形比雌性龟大，这种特性在其它Geochelone类陆龟中也存在，包括哥拉帕斯陆龟。在野生状态下，距今发现的最大的豹龟，名叫Domkrag，它在Addo国家大象公园生活了很长时间，这个大龟体形有65.6cm长，43公斤重。记录在案的最大的雌性豹龟体长49.8cm，重20公斤。','宠物龟','2020-04-15 11:51:52','陆地','常见品种'),('64dabfd5da604654bc329cdd4e703ec3',' 波斯猫','波丝、喜马拉雅','大型','长毛','Persian','','阿富汗','4~7公斤','8~15年','','白色,虎斑,其它颜色','','粘人','/img/encyclopedias/009abfc129aa44f890ea2e5a4cbebc23.jpg;','波斯猫历史悠久，波斯猫有文字记载的确切起源年代是公元前1684年。大约16世纪就经法国传入英国，18世纪被人带到意 大利，19世纪由欧洲传到美国。据说维多利亚女王养了两只蓝色波斯猫，威尔士王子(爱德华七世)在猫展上对其大为褒奖，从此波斯猫的名声越来越大，公众也 由此而为之倾慕。自19世纪后期以来，波斯猫已形成了圆的头，较小的耳朵，更短的鼻子，大眼睛。看起来有点像昔日的波斯\n\n关于波斯猫的起源一直没有一个统一的说法，一种说法是波斯猫起源于波斯和伊朗，古时候欧洲的商人经常到波斯交易珠宝和香料，偶然的机会他们 发现了奇特的长毛猫，于是商团用他们起运地的名字命名了这种猫，就叫它“波斯猫”。另一种说法认为波斯猫是在阿富汗土著长毛猫的基础上，同土耳其或亚美尼 亚地区的安哥拉猫杂交培育而成。','猫','2020-04-05 14:23:07',NULL,NULL),('65dd1b3394604b54933eb07482a42b2d','长毛暹罗猫','长毛暹罗猫;爪洼猫;巴厘岛猫','中型','长毛','Balinese','','','4~7公斤','','500~6000元','白色,蓝色,其它颜色','','粘人','/img/encyclopedias/7ab502d795c44861a6ad3d07304c72c3.jpg;','长毛暹罗猫是著名的长毛猫，由美国人培育而成，最早出现在人们认为是纯暹罗猫血统的猫中，但它只是暹罗猫的长毛突变种。20世 纪初，美国纽约州的贝伦•斯密斯夫人在饲养的暹罗猫后代中发现长毛突变种，当时被称为“残废的暹罗猫”，虽然1930年就参加猫展，但一直未能在展示会中 获奖。后来经过育种学家30多年的努力，进行了一系列的选育、纯化、繁殖，终于在1963年首次被美国养猫协会承认。\n','猫','2020-04-05 14:26:02',NULL,NULL),('669a41fee45845f2bd8424be5d3278cf','博美犬','波美拉尼亚犬;松鼠犬','小型','长毛','Pomeranian','第23名','德国','2~3公斤','','1000~3000元','白色,黄色,褐色','伴侣犬,玩赏犬','耐寒','/img/encyclopedias/e9bd42e37cfb4cf29ed8d124606c7863.jpg;/img/encyclopedias/3321dfd9a31446029d876b20c63bf87a.jpg;/img/encyclopedias/26258888feb345b8a9f4a3d355ed17ab.jpg;/img/encyclopedias/bb270ee7535849d7a668912212cb3e6c.jpg;','原产德国。起源于19世纪。博美犬属尖嘴犬系品种，祖先为北极的雪橇犬。因此，该犬与荷兰毛狮犬和挪威糜缇关系密切。据此犬的最初记载，此犬来自波兰及德国沿海交界地的博美拉尼亚地区。当时，这些犬被使用于看守羊群。\n\n1750年，博美犬传到欧洲各国，其中包括意大利。当维多利亚女王访问意大利时，佛罗伦斯的百姓们赠送女王一只博美犬，此犬亦深受女王的宠爱。\n\n早期的博美犬体型较大，且大多是白色。19世纪以来，经过选拔配种而成为今日被毛蓬松柔软，颜色鲜明的小型犬。\n\n1888年，维多利亚女皇喜欢上了一头叫Marco的意大利博美犬，并将它带回英国。因为女皇的一举一动都具有很大的号召力，因此该犬也受到广泛欢迎。维多利亚女皇喜欢小体形的，推动了该犬的小型化。\n\n1901年，维多利亚女皇临终前还让人把她心爱一头叫Turi的小博美犬放在她的床边。这只小犬一直陪伴女皇直到她去世。\n\n博美犬从1892年开始在美国的犬展参加混合犬组的比赛，到1900年在纽约才正式将其归类。\n\n1911年，美国博美犬俱乐部第一次举办犬展。美国犬展中早期的优胜者都是骨骼发达，耳大，体重低于2.72千克的博美犬。','狗狗','2020-04-05 14:05:36',NULL,NULL),('6ec394acb26b4be49ba6d3e97bbd2c02','长寿龟2','金线龟;墨龟;泥龟;山龟;臭青龟;中华草龟','大型','无毛','Chinese Pond Turtle','','中国、日本、韩国','','20~30年','5~50元','','','','/img/encyclopedias/fc0118b1a36c4edb9f544542b48a97b8.jpg;','中华草龟体为长椭圆形，背甲稍隆起，有三条纵棱，脊棱明显。头顶黑橄榄色，前部皮肤光滑，后部其细鳞。腹甲平坦，后端具缺刻。颈部、四肢及裸露皮肤部分为灰黑色或黑橄榄色。雄性体型较小，尾长，有臭味。雌性背甲由浅褐色到深褐色，腹甲棕黑色，尾较短，体无异味。 　　\n头、颈侧面有黄色线状斑纹，有三条纵向的隆起，后缘不呈锯齿状；雄体背部为黑色或全身黑色，雌体为棕色，腹面略带一些黄色，均有暗褐色斑纹；四肢比较扁平，有爪子，趾间具有全蹼。','宠物龟','2020-04-15 11:57:27','两栖','常见品种'),('70bec693aa2a42978d7001d33fc62952','刺豚鱼','气鼓鱼;气泡鱼;吹肚鱼;鸡泡鱼;青郎君;刺豚鱼;艇鮁鱼;深水炸弹;河鲀','中型','短毛','Tetraodontidae','','中国','','2~3年','15~2000元','斑纹,其它颜色','',' 饲养难','/img/encyclopedias/ba63f28f04414cf3b64da35904d232f3.jpg;','河豚体呈圆筒形，具有众所皆知的圆滚滚身躯，一般体长在10~30cm左右，大的可达63cm以上。上下颌骨与牙愈合成4个大牙板。背鳍1个，无腹鳍。无鳞或有小刺。有气囊，能吸气膨胀。种类很多，大部分生活在海中，但在淡水及海、淡水汇合处也可发现。它们在水中吹动水和空气，使泥沙飞起，然后捕食躲在沙中的生物。因为牙齿和颌骨很坚硬，所以连极硬的贝壳也能咬碎。全体椭圆形，前部钝圆，尾部渐细。吻短，圆钝；口小，端位，横裂。上下颌各具有2个板状门齿，中缝明显。唇发达，下唇两端向上弯曲在上唇的外侧。眼小，鳃孔小，为一弧形裂缝，位于胸鳍的前方，体表密生小刺。背鳍位置很后，与臀鳍相对；无腹鳍；尾鳍后端平截。体背灰褐，体侧稍带黄褐，腹面白色；体背、侧面的斑纹随种类不同而各异。','宠物鱼','2020-04-15 11:41:22','淡水','常见品种'),('71668a7a9a34437081a7ee032f09f43c','布履阑珊猫','褴褛猫','大型','长毛','RagaMuffin','','美国','8~12公斤','7~15年','15000~25000元','白色,其它颜色','','护家，粘人，友善','/img/encyclopedias/b63ed252ab8d4b428f2466fb629e9d68.jpg;','布履阑珊猫又被称为褴褛猫，由布偶猫培育而来，是一种新品种，在外貌上更偏向于挪威森林猫。这是CFA唯一一种没有历史起源的猫咪，关于它们的起源，好像是谜一样神秘无解。','猫','2020-04-05 14:20:46',NULL,NULL),('9021a7a96d6f443987bc9c3e721a133d','安纳托利亚牧羊犬','康巴柯皮基犬;卡拉巴斯犬;堪尼高犬','大型','短毛','Anatolian Shepherd Dog','第 120名','土耳其','41~64公斤','10~11年','5000~10000元','白色,黑色,灰色,褐色,红棕色','牧羊犬,守卫犬','体味','/img/encyclopedias/180e02b4abe743598f5c43863cb78a6c.jpg;','安纳托利亚牧羊犬起源于土耳其，自巴比伦尼亚时期(公元前2800-1800年)以来，一直生活在土耳其。从前，这种犬作为军犬之用，现在人们用它来牧羊。最初，土耳其人不用牧羊犬赶羊群，只是用它们保护羊群免受食肉动物的袭击。这些牧羊犬被称之为康巴柯皮基犬，直到1970年，育种家经过调查发现了几种不同地区差异的牧羊犬。土耳其中部与西部的牧羊犬类型非常相似。在土耳其当地，安纳托利亚牧羊犬仍然是羊群安全的保护者，使羊群免受狼和熊的威胁。由于安纳托利亚牧羊犬有严格的社会组织性，它们理应很好地适合于家庭环境。但是，它们缺乏依赖性，不善于顺从，所以它们不太适合做伴侣动物。','狗狗','2020-04-05 12:31:32',NULL,NULL),('d18ac0cdf42742d88de292d2154efc6a','阿富汗猎犬','阿富汗犬;阿富汗;俾路支猎犬;喀布尔犬','大型','长毛','Afghan Hound','第 79名','阿富汗','23~27公斤','','4000~6000元','白色,黑色,其它颜色','伴侣犬,玩赏犬','耐热,运动','/img/encyclopedias/df1fc4583c6547efa3b76fb4b7c294fe.jpg;','阿富汗猎犬起源于17世纪，又名喀布尔犬，属古老犬种。4000年前阿富汗的绘画中即有该犬的画像，此犬原产中东地区，后来沿着通商路线传到阿富汗，被用来狩猎瞪羚、狼、雪豹等动物。阿富汗犬种于1886年首次登陆英国，成为英国皇室猎犬。1926年英国将此犬种介绍给美国后，美国经过半世纪的改良使阿富汗猎犬有其高雅威武的外观，以其美丽的姿容而形成独特的风格，在任何恶劣的环境中都能有较强的忍耐力，惊人的敏捷和强壮的体魄，并且具有了极高的观赏性，随后此犬种再次传入欧洲使之风靡全世界。在19世纪末首次出现在欧洲，由参加阿富汗战争的士兵带回来的。那时有很多体型较大的本地化品种，但现今品种中本土种的特征已经消失。\n','狗狗','2020-04-02 21:22:43',NULL,NULL),('dcf00247c7bd4672ab9cc340a5643949','边境柯利','边境牧羊犬;边牧','中型','长毛','Border Collie','第 1名','苏格兰','14~20公斤','10~15年','2000~5000元','白色,黑色','牧羊犬','耐热','/img/encyclopedias/4b01975718dd4782aa2cde46ee056502.jpg;/img/encyclopedias/3322a9ac7f764cf48b34bb92d2c413eb.jpg;','在西元前五世纪到西元前一世纪时，许多凯尔特人(Celtic)在欧洲四处迁移，其中有三支塞尔特人来到爱尔兰，他们带来了牲畜、看牧牲畜的狗还有猎狗。这几个种族使用一种叫做Q Gaelic的方言，而Collie的意思就是”有用处的”，因此对他们有用处的狗都被叫做Collie（柯利）。\n\n爱尔兰的动物学家WLC Martin如此形容这种狗：有观察力、敏锐；毛发长且经常是毛茸茸的；体态有型、强壮、外表漂亮、有点像狼似的。由此相信边境牧羊犬可能起源自Basque Celtics。\n\n虽然英国的collie犬最早是在爱尔兰被发现的，不过它们却是在苏格兰被发展为牧羊犬，可以在苏格兰早期的历史中找到明显的答案；爱尔兰拥有青草茂盛的山坡地，因此爱尔兰人多畜养牛只与马匹；相较于荒凉不毛、气候恶劣的苏格兰，苏格兰人只好畜牧较易生存的绵羊。苏格兰最早期被放牧的羊及看管羊的狗是在苏格兰群岛被发现的，这些狗是源自于当初从爱尔兰迁移到苏格兰的教士所带去的狗，而且是在早期维京人入侵苏格兰之前就过去了的。\n\n一直到山区峡谷内各部落间的对抗与斗争结束后苏格兰人都没有发展他们的天然资源，那样的环境特别是在高地区（The Highlands），人们都没有投入农业生产，唯有放牧绵羊对他们来说是较好的职业。而在崎岖的地理环境下人们只有仰赖狗来帮忙驱赶、集合、看牧牲畜了。并不知道高地牧羊边境牧羊犬犬和低地牧羊犬是来自何处、起源如何，不过却知道现代牧羊犬的起源，它们拥有“眼神控制”（eye of control）的能力，这样的能力是由在苏格兰与英格兰的边界处放牧的牧羊人发展训练出来的，也因此有“眼神控制”能力的狗就叫做“边境牧羊犬”。','狗狗','2020-04-05 12:34:14',NULL,NULL),('ea6ca5359be9473eb6b8be02a7ceb7f5','八点黑','八点黑','中型','短毛','Californian Rabbit','','美国加利福尼亚州','3~5公斤','','300~800元','白色,黑色','','立耳, 友善','/img/encyclopedias/31372a1ee81c457a81b5a30992024216.png;','在加利福尼亚兔的饲养中，喂食要以青料为主，辅以精料。通常草占兔日粮总量的70~90％，而补给兔10~30％的配合精料，同时饲料搭配需要多样化。饲喂过程中配合精料用配合饲料或混合饲料。变换饲料时，要由少到多，逐渐改变。调制饲料要均匀，干湿恰当，最好现调现喂，不要放置过久，以免发馊变质。\n加利福尼亚兔的饲养，要注意笼舍的卫生，保证舍内干燥，通风、透光。对兔舍做到勤清扫、勤洗涮、勤修补、勤更换用具。注意要保持兔舍的安静，防止骚扰。同时要防鼠害。因为鼠类不仅会传播各种疾病，而且常会偷吃兔只，因此必须彻底灭鼠。在加利福尼亚生长到一定程度时，要分群、分阶段管理。幼兔断奶后要按大小、强弱分群饲养。对于种兔、孕母兔、乳母兔、仔兔，要分别按照不同阶段的营养需求，满足它们的生长需要。','兔子','2020-04-02 21:26:30',NULL,NULL),('fc24e9112b954ff8a84514a3fb376657','搬仓鼠','腮鼠;仓鼠;葵鼠','小型','短毛','搬仓','','西伯利亚',' 0.1~0.1公斤',' 2~3年','20~50元','白色,灰色,黄色,其它颜色','','娇小可爱','/img/encyclopedias/30df065730f84acf967fbff7ffccbdc9.jpg;','1829年，仓鼠在西伯利亚附近一个城市第一次被发现。1880年，在叙利亚阿勒颇城的总领事馆服务的史凯，捕捉到黄金鼠并将它们带回苏格兰饲养，他们繁殖延续了将近30年才结束。\n\n1930年，以色列黑伯莱大学的阿哈罗尼教授又在阿勒颇城捕获到这种老鼠，而陪同前去的当地导游也在小麦田里发现了它们的巢穴，挖掘之后发现了1只母鼠和出生不久的11只小鼠，并把它们都捕捉放入木箱中。但母鼠发觉到不对劲后将其中的一只小鼠给咬死了，因此阿哈罗尼教授只好把母鼠和小鼠分开饲养，并把小鼠都带回以色列饲养。\n\n阿哈罗尼教授所饲养的这些老鼠，一年后增加到150只。1931年，其中一部分老鼠被带去了英国交给了伦敦科学研究所的西顿尔教授，加以繁殖后开始贩卖给民众。仓鼠成为人类的宠物就是从这个时候开始的，现在英国所饲养的仓鼠也都是在那个时候所繁衍下来的子孙。1938年，已经成为宠物的仓鼠流传到美国。','老鼠','2020-04-02 21:28:49',NULL,'仓鼠');

/*Table structure for table `pet_food` */

DROP TABLE IF EXISTS `pet_food`;

CREATE TABLE `pet_food` (
  `id` varchar(32) NOT NULL COMMENT '宠物食品',
  `name` varchar(255) DEFAULT NULL COMMENT '食品名称',
  `category` varchar(32) DEFAULT NULL COMMENT '类别（猫粮/犬粮）',
  `brand` varchar(32) DEFAULT NULL COMMENT '品牌',
  `flavor` varchar(32) DEFAULT NULL COMMENT '产品风味',
  `specification` varchar(32) DEFAULT NULL COMMENT '产品规格',
  `shelf_life` varchar(32) DEFAULT NULL COMMENT '保质期限',
  `place_of_origin` varchar(32) DEFAULT NULL COMMENT '产地',
  `storage_mode` varchar(32) DEFAULT NULL COMMENT '存储方式',
  `img_path` text COMMENT '图片地址',
  `price` decimal(18,2) DEFAULT NULL COMMENT '价格',
  `instructions` varchar(200) DEFAULT NULL COMMENT '使用说明',
  `food_serial_number` varchar(32) DEFAULT NULL COMMENT '食品编号',
  `date_of_manufacture` datetime DEFAULT NULL COMMENT '生产日期',
  `address_of_manufacturer` varchar(64) DEFAULT NULL COMMENT '生产厂家地址',
  `name_of_manufacturer` varchar(64) DEFAULT NULL COMMENT '生产厂家名称',
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注',
  `stock` int(11) DEFAULT NULL COMMENT '库存数量',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `status` varchar(20) DEFAULT NULL COMMENT '订单状态',
  `sold` int(11) DEFAULT NULL COMMENT '已售数量',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_food` */

insert  into `pet_food`(`id`,`name`,`category`,`brand`,`flavor`,`specification`,`shelf_life`,`place_of_origin`,`storage_mode`,`img_path`,`price`,`instructions`,`food_serial_number`,`date_of_manufacture`,`address_of_manufacturer`,`name_of_manufacturer`,`remarks`,`stock`,`shop_id`,`status`,`sold`,`create_time`) values ('73064c57f6224cfc83d82dc147ad2c67','麦富迪宠物狗粮','犬粮','麦富迪','牛肉味','15.0kg','90天','中国大陆','干燥存储','/img/food/3c9be63dbb5b4c7a88c4f7adce9c68e9.jpg;','169.00','通用','H21212','2020-04-02 00:00:00','河北省唐山市开平区','','',47,'44e770a3718d4c52b570979ae590b491','待售',3,'2020-04-25 15:04:11'),('8ae2cf4b2e2d4a9a990fcec096e9cd19','凡可奇凡可奇','犬粮','凡可奇','牛肉味','10.17kg','3个月','中国大陆','干燥存储','/img/food/3888ab6a38fa425dbc6eef99322b7e48.jpg;','75.00','天然粮通用','H3343','2020-04-07 00:00:00','辽宁省沈阳市铁西区','','',29,'44e770a3718d4c52b570979ae590b491','待售',1,'2020-04-25 15:06:54'),('d6ca36ae8d394d13b0108a0fdd9f5387','弗兰士 猫粮','猫粮','弗兰士','鱼肉味','2.6kg','6个月','国产','干燥存储','/img/food/27d8d6fe9f384d4f8c7a8732a06bd3dd.jpg;','29.50','','H6767','2020-04-22 00:00:00','江苏省徐州市泉山区','','',35,'44e770a3718d4c52b570979ae590b491','待售',5,'2020-04-25 15:09:24');

/*Table structure for table `pet_information` */

DROP TABLE IF EXISTS `pet_information`;

CREATE TABLE `pet_information` (
  `id` varchar(32) NOT NULL COMMENT '宠物资讯',
  `title` varchar(200) DEFAULT NULL COMMENT '资讯标题',
  `content` longtext COMMENT '资讯内容',
  `category` varchar(10) DEFAULT NULL COMMENT '资讯分类',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `status` varchar(10) DEFAULT NULL COMMENT '资讯状态',
  `pic_path` varchar(255) DEFAULT NULL COMMENT '图片路径',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_information` */

insert  into `pet_information`(`id`,`title`,`content`,`category`,`create_time`,`user_id`,`status`,`pic_path`) values ('088389477b6c464fbd69d3d9f890b029','怎么帮助宠物做好防护“疫”起科学做好宠物的防护与喂养!','<p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">随着新型冠状病毒肺炎的暴发，许多养<a href=\"http://www.ixiupet.com/\" target=\"_blank\" style=\"color: rgb(19, 110, 194);\">宠物</a>的朋友难免有些担心：自家的宠物会不会感染病毒，宠物该如何防护呢?怎么帮助宠物做好防护?接下来大家随着小编“疫”起科学做好宠物的防护与喂养!</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　<strong>关于宠物防护，你需要了解这几点：</strong></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　首先，目前没有证据显示猫、狗等宠物会感染新冠病毒。新型冠状病毒的来源、中间宿主还不明确，但是不建议将不明来源的动物，特别是野生动物作为宠物。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px; text-align: center;\"><img src=\"http://localhost:8080/img/2-200325154019.jpg\" style=\"width: 443px;\"><br></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　其次，“铲屎官们”可以每日监测宠物的健康情况，尽量减少外出次数。外出时如果有条件，可以给宠物佩戴专用嘴套，尽可能防止它捡拾不明物体。及时清理宠物的排泄物，保持环境整洁健康。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　再次，携宠物外出回家后，用湿巾擦拭、清洁宠物的毛发，特别是面部和爪子。要定期给宠物洗澡、驱虫;定期清洁、消毒宠物的用品，比如牵引绳、嘴套、猫砂盆等;定期开窗通风，适当对室内环境进行消毒。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　宠主们可以选用爱能宠物消毒喷雾来为自家宠物清洁消毒，爱能宠物消毒喷雾是一种强效而温和的杀菌消毒除臭液，它的主要成分是次氯酸(HCIO)。采用食品添加级物料作为原料，通过日本专利生成技术，最适合的ph值及浓度，使其达到最好的杀菌效果。符合人体ph值的弱酸性的次氯酸，无刺激，是安全且理想的，所以可以直接喷洒在皮肤上或者伤口上。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　<strong>　使用效果：</strong></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　1、快速氧化分解宠物毛发中特有的臭味及排泄物遗留的臭味等。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　2、有效杀菌，辅助治疗宠物皮肤疾病，加速宠物体表伤口愈合，PH值5.5~6.8，呈弱酸性，接近皮肤酸碱度，安全无毒，无色无味。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　3、快速杀灭多种病毒(犬瘟热病毒、犬细小病毒、犬冠状病毒、流感病毒)和致病菌(肠道病细菌、化脓性细菌、致病性酵母菌、医院感染常见菌等)。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　4、喷洒在人宠共存的空间内，可有效预防流行性疾病的发生。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　5、有效去除房屋、家居、车体内的甲醛、苯等有害物质。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px; text-align: center;\"><img src=\"http://localhost:8080/img/2-200325154017.jpg\" style=\"width: 501px;\"><br></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　疫情之中有宠物的家庭，在做好自身及家庭成员的防护的时候，一定要做好宠物的防护，这样才是一家完整的防护。仅仅做好人的防护，宠物不防护那是存在问题的!爱宠物一定要在疫情中帮助宠物做好防护!这也是家人负责，也对社会的贡献!</p>','涨知识','2020-03-27 13:19:01','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/2-200325154019.jpg'),('19d6ee87960e4c37871b6d53f1ac4669','600名有AI实战力的大学生结业：展示宠物医生、斗地主等','<p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">经过4周的密集训练，600名来自国内外的大学生接受了来自李开复、张潼、周志华、吴恩达等人工智能大牛导师的“学术+产业”课程培训。相比起普通的校内课程，该训练营中的学生共计完成了由22家企业发起的50个AI实践课题，可以说具备一定用AI解决真实世界问题的能力。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">8月16日，2019 DeeCamp人工智能训练营在北京中国科学院大学雁栖湖校区举办成果展示暨结营仪式。6个项目小组作为代表在现场展示了自己Demo成果，由学术及产业导师现场予以点评</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">其中，斗地主AI被评为“最突破”项目。从国际象棋到围棋到德扑、电竞，游戏一直具有很高的AI水平表现力。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">虽然斗地主这个牌类游戏十分接地气，但从AI的角度需要解决不完美信息下博弈问题，换句话说，要在无法看见其他玩家手牌的前提下，对游戏中的14种合法牌型、13551种合法出牌、10的30次方的状态空间和10的85次方的游戏树进行全面考虑。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">目前，业内对这一问题普遍采用规则模型+搜索的方式，DeeCamp学员创新性地使用了多模型融合的斗地主AI，可谓是从“专家中挑选专家”。</span></font><img style=\"width: 25%; float: right;\" src=\"http://localhost:8080/img/platform/60ff66851084451eaf79ea66205219a8.jpg\" class=\"note-float-right\"></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">该项目组组长张天昊同学说道：“相较于斗地主界‘龙头老大’腾讯使用监督学习做牌型预测，并且基于牌型预测做策略搜索，我们加入了博弈论的思想，使用了CFR模型；同时使用强化学习，在试错与探索的过程中，学会斗地主策略；还用了多模型融合的思想，将多个模型的优点结合起来，方案具有扩展性。”</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">项目团队并未一味追求胜率，而是通过调试做到一个和人类玩家相似的胜率结果，属于陪玩性质。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">据了解，当人类与人类对战时，人类作为地主的胜率为52.4%、作为农民的胜率为47.8%；而该项目小组研发的AI在与人类进行对战时，AI作为地主的胜率为58.6%、作为农民的胜率为41%。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">宠物健康状态评价AI则被评选为“最实用”项目，利用计算机视觉和机器学习技术帮助宠物主人尤其是新手“一拍”随时随地了解自己宠物的健康状态</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">具体来看，这个项目攻坚的技术堡垒可以被分解为狗体检测、品种识别、年龄分类、体型度量，解决了体型标签几乎无法获得、不同品种狗的肥胖标准不同、多只狗的照片难以识别等技术难点。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">现场展现的项目还包括“AI识别车辆损伤”、“AI金融风控”、“3D医学影像诊断”、 “定雨神针：提高降水预报时空准确度”、“用人工智能构建一带一路相关项目的知识图谱”等，兼顾产业需求与社会意义。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">据了解， DeeCamp人工智能训练营由创新工场在2017年首次发起，2018年被被教育部选中作为“中国高校人工智能人才国际培养计划”两个组成部分之一的学生培训营。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">今年的DeeCamp包括2次学术课程、18次产业课程、50个实践课题，知识课程围绕机器学习、自然语言处理、计算机视觉、机器人与自动化、自动驾驶5个全球最热的AI研究方向展开，实践课题涵盖金融、零售、医疗健康、教育、公益、移动互联网6大领域。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">四周的时间里，南京大学教授周志华教授、港科大教授张潼担任科学总顾问，李开复领衔来自华为、旷视、科大讯飞、Google等顶尖公司的产业导师。</span></font><img src=\"http://localhost:8080/img/platform/949338e3639449eca77837a4092de759.jpg\" style=\"width: 25%; float: right;\" class=\"note-float-right\"></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">中国科学院大学校长助理、经济与管理学院执行院长、创新创业学院院长董纪昌在结营仪式上表示，本届DeeCamp人工智能训练营的成功举办是在前沿科学与创新创业领域校企合作的一个典型实践，未来将会深化合作。希望学员们充分认识到科技创新带来的必然发展，抓住时代的机遇。</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\">创新工场首席执行官李开复则说道：“当下AI正在进入AI+、去赋能传统行业的时代，是AI开花结果的最好时期，这个阶段将会释放大量的商业机会和人才成长机会，是一个千载难逢的好时代。”</span></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><br></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"font-size: 14px;\"><span style=\"font-size: 14px;\">文章来源：澎湃新闻</span><span style=\"font-size: 14px;\">&nbsp;</span></span><a href=\"https://www.thepaper.cn/newsDetail_forward_4188865\" target=\"_self\" microsoft=\"\" font-size:=\"\" style=\"color: rgb(0, 0, 0); text-decoration-line: underline; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); outline: none; font-size: 14px;\"><span style=\"font-size: 14px;\">https://www.thepaper.cn/newsDetail_forward_4188865</span></a></font></p><p><font face=\"Helvetica\"><br style=\"font-size: 12px;\"><span style=\"font-size: 14px;\">本文转自有宠网：http://www.yc.cn/news/news-41399.html</span></font></p>','新鲜事','2020-04-05 22:54:13','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/platform/949338e3639449eca77837a4092de759.jpg'),('25c4d271972042dcb83d4f5c5ac737a9','宠物保健更为精细化的需求, 健康保健领域强势发力!','<p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">对于现在年轻<a href=\"http://www.ixiupet.com/\" target=\"_blank\" style=\"color: rgb(19, 110, 194);\">宠物</a>主，他们宁愿自己吃外卖，也要给“毛孩子”准备定制主粮;给自己补钙靠晒太阳，但是给狗娃子补钙就要钙片和营养膏齐飞;近半年来，某电商平台进口猫狗保健品的销量同比增长401%。肠胃宝、优能钙、益生菌，这些人们较为熟悉的保健品，在宠物市场中也悄然兴起。猫狗保健品成为近一年来线上宠物消费增速最高的产品之一，并且消费人数和市场规模连续三年同步增长。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px; text-align: center;\"><img src=\"http://localhost:8080/img/platform/2689b52990574ecc8be4ed339a23fec4.jpg\" style=\"width: 25%; float: right;\" class=\"note-float-right\"><br></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　近期，一组数据显示，2019年上半年来，宠物行业成为销量增速最快的行业。其中宠物美妆销量同比增长超100%，猫狗耳部清洁用品同比增长552%，香波浴液增长149%，眼部清洁护理增长141%。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　数据表明，随着宠物市场的发展，宠物产业链在逐步完善，能够满足消费者更多样化的需求，因此除了宠物食品和宠物医疗这两个大的细分行业，如今也出现了宠物美妆、宠物保健等更为精细化的需求。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px; text-align: center;\"><br></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　宠物保健品不仅是对宠物食品品类的补充，也是对宠物医疗保健品类的拓展。可以说宠物医疗保健的场景不仅仅在宠物医院或门店呈现，还逐渐渗透入日常的家庭场景。与此同时，一线城市的线下医疗保健场景的完善，也将继续推动消费者宠物保健消费意识的增强。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\"><strong>　　产品创新、品牌运作才是经营根本</strong></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\"><strong>　　产品</strong></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　除了我们熟知的线上线下营销模式，宠物保健品的渠道拓展规模也越发庞大，宠物店、宠物医院、商超、专卖、网店、体验店纷纷亮相宠物保健品。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　但是，要解决的是如何给消费者一个充分的购买理由，宠物保健品的经营核心就在于产品的创新和新技术的开发，好产品会在市场中大浪淘沙，经得起任何环节的推敲。而简单粗暴的模仿，甚至野蛮的低价竞争的产品，终究会背离消费人群，被宠物行业所抛离。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　无论营销模式多么新颖、渠道拓展如何深入、市场开发何等迅猛，最终宠物消费者是最终的体验者，品牌口碑和产品效果才是最终的说服力。高额利润带来的并不是经营者的中饱私囊，而是将精力投入到产品研发当中，如何更新迭代始终保持市场需求最前沿，才是持久经营的根本。</p>','涨知识','2020-03-27 13:59:23','604b94fd27314c95a5ffc48d27ba444f','待发布','/img/platform/2689b52990574ecc8be4ed339a23fec4.jpg'),('3e943129cabe45ddaa95a9f82e65a40e','你知道地球上怀孕周期最长的动物是谁吗？','<p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">大象不仅在现实中被受关注，在动漫和电影中也时常有它的身影，那肥硕的耳朵和长长的鼻子，无不透露着可爱，而它拥有的不仅仅是可爱哦。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">2年孕期</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">人类是十月怀胎，而大象从怀孕到当妈则需要历时2年之久，是所有哺乳动物孕期最长的。在怀孕16周左右，才能扫描到象宝宝的大概模样，难道孕期的长短还和体型有关系？</font></p><div class=\"pgc-img\" pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"font-size: 12px; -webkit-tap-highlight-color: transparent; margin: 0px; padding: 0px; color: rgb(34, 34, 34);\"><img src=\"http://localhost:8080/img/platform/d1ee350b81a14380b4248c608bdb40a2.jpg\" style=\"width: 500px; float: right;\" class=\"note-float-right\"></div><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">有理解人类手势的天性</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">尽管它从未被训练，但是它们仍然可以理解人类的手势，甚至可以通过鼻子与人类进行沟通，它比我们想象中更像人类。当然了，灵长类的黑猩猩在经过训练后也可以理解。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">超大的脑容量</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">地球上所有动物中，除鲸鱼外大象的大脑是最大的，可达到5公斤，可见它在动物界拥有超高的智商，比如它们可以在镜中认出自己，懂得对其他动物给予帮助等。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">“较轻”的体重</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">绝大多数大象的体重还抵不过蓝鲸的一条舌头，你是在逗我吗？当然不是。蓝鲸作为地球上最重的动物，单是一条舌头就相当于一头大象的重量，不愧是地球上最大的动物啊。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">丁丁是它的第五条“腿”</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">大象的丁丁长达一米，重量有30公斤，所以雄性大象经常会将自己的丁丁当做第五条腿来支撑身体，这还不算完，它还可以当肚子部位的痒痒挠，还真是一“丁”多用啊！</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">惊人的记忆力</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">大象有着惊人的记忆力，甚至比人类还好，而这也正是它在野外生存的必要条件。例如非洲大象被非洲蜜蜂蛰过，它们甚至可以记住蜜蜂振翅发出的声音，着实令人惊叹。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">也受紫外线侵扰</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">大象虽然有厚厚的皮肤，但仍然会被紫外线晒伤，它们不像河马自带“防晒乳”，所以只能在自己的身体上扔沙土，以达到防晒的目的。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><span style=\"-webkit-tap-highlight-color: transparent; font-weight: 700;\"><font face=\"Helvetica\">画画天赋</font></span></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">大象拥有超高智商，所以它们经过一些训练后，可以将自己脑海中的画面留在纸上，对于不会画画的小编来说，佩服佩服。</font></p><p pingfang=\"\" hiragino=\"\" sans=\"\" microsoft=\"\" wenquanyi=\"\" micro=\"\" helvetica=\"\" white-space:=\"\" background-color:=\"\" style=\"margin-top: 16px; margin-bottom: 16px; padding: 0px; word-break: break-all; font-size: 12px; -webkit-tap-highlight-color: transparent; color: rgb(34, 34, 34);\"><font face=\"Helvetica\">拥有重量级身材的大象同时也拥有一个颗善良的心，懂得照顾家族中的弱者，也懂得给予受伤人类帮助，希望人类可以停止一切伤害大象的行为，还它们一个宁静的生活。</font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span style=\"color: rgb(0, 0, 0); text-align: start;\"><font face=\"Helvetica\">本文转自有宠网：http://www.yc.cn/news/news-41442.h</font></span></p>','新鲜事','2020-04-05 17:16:34','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/platform/d1ee350b81a14380b4248c608bdb40a2.jpg'),('43a92a0ff8e142debcedbe831a5dc5a3','西班牙某家狗狗一天被遛38次怎么回事? 累瘫在地!','<p style=\"margin-bottom: 0px; padding: 0px;\">&nbsp; &nbsp; &nbsp; &nbsp;前不久，意大利公布“封城”严禁住户无原因出门，可是能够遛狗。群众以便外出层出不穷，有狗的遛狗，遛小玩具遛鸡遛纸箱子，乃至租狗借狗还要外出，有的狗狗一天被遛了7次，也有的狗狗被累到瘫坐在地。</p><p style=\"margin-bottom: 0px; padding: 0px;\"><br></p><p style=\"margin-bottom: 0px; padding: 0px;\">　　据了解，在街上溜做到精疲力竭的狗、超级变身美发店的夜店、到期的报刊……由于病疫情，意大利老百姓早已决策蹲在家里防护，可是决不能丧失风趣，社交媒体上因而充满了各种各样以苦为乐的搞笑幽默界面。</p><p style=\"margin-bottom: 0px; padding: 0px;\"><br></p><p style=\"margin-bottom: 0px; padding: 0px;\">　　西班牙首相罗马尼奥利18日公布，为抵制新冠肺炎病疫情扩散，全国性今起进到紧急状况，执行历时半个月的“封城”对策。除工作中、就诊或选购生活必需品等特殊状况外，全国性范畴内的群众严禁摆脱家门口。意大利全国性各种教育培训机构终止现场教学，除供货食品类等生活必需品、报纸杂志、然料等的店铺之外，别的零售店铺所有停止营业，可是美发店列外。更是这一列外点爆了群众的风趣体细胞。</p><p style=\"margin-bottom: 0px; padding: 0px;\"><br></p><p style=\"margin-bottom: 0px; padding: 0px;\">　　在网上最红的一张图片是，已经接纳防护的意大利第二副总统巴勃罗·伊格莱西亚斯甩着一条高马尾，画外音写着“谁出了那么好的想法?”有一张图是一名小伙在车上喊着广告牌子“我是去剪发的”;也有图片是讲夜店秒变美发店。</p><p style=\"margin-bottom: 0px; padding: 0px;\"><br></p><p style=\"text-align: left; margin-bottom: 0px; padding: 0px; margin-left: 25px;\"><img src=\"http://localhost:8080/img/platform/a7ae1f759c4649ea9a7b115504d752fd.jfif\" style=\"width: 25%; float: none;\" class=\"\"><br></p><p style=\"margin-bottom: 0px; padding: 0px;\"><br></p><p style=\"margin-bottom: 0px; padding: 0px;\">　　据统计，狗狗们变成这几天社交媒体上的另一个搞笑明星，由于主人家被容许出门遛狗。有一张图是一条狗躺在沙发上精疲力竭，责怪它主人家说：“今日你早已带我出来38次了。”另一张图是狗脖子上挂着宣传语“1圈10欧元，3圈20欧元，马上订购!”也有图片显示信息老年人带一只塑胶假狗在街上，或是父亲让小孩穿狗狗玩偶服在街上……</p>','新鲜事','2020-03-27 13:52:28','604b94fd27314c95a5ffc48d27ba444f','待发布','/img/platform/a7ae1f759c4649ea9a7b115504d752fd.jfif'),('61298b8d5b844fb79cdcb5fe1bf5a9f2','英国女子拥有“特异功能” 几分钟就能寻回失踪宠物','<p style=\"margin-bottom: 15px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em; line-height: 1.5em;\"><img src=\"http://localhost:8080/img/platform/a1a6314c96094b4a92f9143102021b86.jpg\" style=\"width: 329.5px; float: right; height: 304.086px;\" class=\"note-float-right\"><span style=\"font-size: 16px;\"><font face=\"Helvetica\"><br></font></span></p><p style=\"margin-bottom: 15px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em; line-height: 1.5em;\"><span style=\"font-size: 16px;\"><font face=\"Helvetica\">来自英国德文郡的50岁女子Becky Willoughby称自己和动物之间有心灵感应，她利用自己的这项特殊本领帮助不少宠主成功找回失踪的宠物。</font></span></p><p style=\"margin-bottom: 15px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em; line-height: 1.5em;\"><span style=\"font-size: 16px;\"><font face=\"Helvetica\">Becky Willoughby称，她在10岁时就发现了自己的这项“特异功能”。她表示，自己可以与动物进行“能量连接”，像是收音机一样，可以调到动物的频道，这样她就能听到动物们说的话，还可以在脑海中浮现一些场景。</font></span></p><p style=\"margin-bottom: 15px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em; line-height: 1.5em;\"><span style=\"font-size: 16px;\"><font face=\"Helvetica\">Becky成立了一家公司，专门帮助主人们重新找回失踪的宠物。宠主需要提供宠物的名字、照片、它们是怎样失踪的，以及最后出现的地点。目前，Becky已经处理了100多件宠物失踪事件，有时仅用3、4分钟就能找到它们。</font></span></p><p style=\"margin-bottom: 15px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em; line-height: 1.5em;\"><span style=\"font-size: 16px;\"><font face=\"Helvetica\">除了寻找失踪的宠物，Becky还告诉宠主们与动物的沟通方式，让它们能够更好地了解宠物的感受。有一次，她感觉到一匹马的脊椎有问题，就告诉了它的主人，最后通过检查发现确实如此。Becky表示，她很高兴自己能有这样特殊的能力，帮助别人是一件令人愉快的事情。（中国青年网编译报道）</font></span></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><br></font></p><p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; text-indent: 2em;\"><font face=\"Helvetica\"><span style=\"text-indent: 2em; font-size: 14px;\">文章来源：中国青年网&nbsp;</span><a href=\"http://d.youth.cn/shrgch/201909/t20190926_12081491.htm\" target=\"_self\" style=\"text-indent: 2em; background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); text-decoration-line: underline; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); outline: none; font-size: 14px;\">http://d.youth.cn/shrgch/201909/t20190926_12081491.htm</a></font></p><p><br></p>','新鲜事','2020-04-05 17:21:26','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/platform/a1a6314c96094b4a92f9143102021b86.jpg'),('96be84fdeec445cb82e044c043ad93ff','澳大利亚2019年最受欢迎宠物名揭晓 王室名字人气高','<p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\" style=\"\"><font face=\"Helvetica\"><span class=\"bjh-strong\" style=\"font-size: 18px; font-weight: 700;\">中新网11月28日电</span>据澳洲网报道，澳大利亚宠物保险公司近日公布了2019年澳大利亚最受欢迎宠物名。其中，英国王子幼子的名字阿尔奇成为了最受欢迎雄性狗狗名字的第一名，而洛基成为了最受欢迎雄性猫咪名字的第一名。最受欢迎雌性狗狗和猫咪名字的第一名则全部被露娜包揽。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><span class=\"bjh-strong\" style=\"font-size: 18px; font-weight: 700;\"><font face=\"Helvetica\">王室宝宝名字受欢迎</font></span></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">据报道，澳大利亚宠物保险公司近日在研究了全澳15万只新投保宠物的数据后，总结出2019年最受欢迎宠物名字排行榜。根据榜单显示，最受欢迎宠物名字主要来源于英国王室宝宝和迪斯尼经典。流行文化激发了人们的想象力，其中英国哈里王子和梅根的幼子阿尔奇的名字成为了最受欢迎雄性宠物狗名字第一位和最受欢迎雄性宠物猫名字第二名。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">人类名字也被广泛应用于宠物名字上，其中有大量的雄性宠物狗叫查理，雌性宠物猫叫Chloe、Poppy和Mia。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><span class=\"bjh-strong\" style=\"font-size: 18px; font-weight: 700;\"><font face=\"Helvetica\">“露娜”蝉联第一名桂冠</font></span></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">露娜连续第二年获得了澳大利亚最受欢迎雌性宠物猫名字第一名，而第一次上榜的名字包括受到食物启发的名字奥利奥，和迪斯尼主题的名字娜娜。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">受欢迎的雌性宠物狗的名字一般由4个字母组成，如Coco、Ruby和Lola。而以-y和-ie结尾的名字则在雄性宠物中比较常见，如Buddy、Teddy和Bailey以及Alfie和Ollie。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">今年新增加的宠物狗名字包括Leo、Millie和Frankie。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">澳大利亚宠物保险公司发言人克里顿表示，2019年是“王室狂热”的一年，而传统的名字也继续占据主导地位。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">来源：中国新闻网：<a href=\"http://baijiahao.baidu.com/s?id=1651423690253930277&amp;wfr=spider&amp;for=pc\" style=\"color: rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); outline: none;\">http://baijiahao.baidu.com/s?id=1651423690253930277&amp;wfr=spider&amp;for=pc</a></font></span></p><p><font face=\"Helvetica\"><br style=\"font-size: 12px;\"><span style=\"font-size: 12px;\">本文转自有宠网：http://www.yc.cn/news/news-41463.html</span></font></p>','新鲜事','2020-04-05 17:12:26','604b94fd27314c95a5ffc48d27ba444f','已发布',''),('9eff736dff4b4218b5231fcad987ab38','FFFFFFFF','<p style=\"line-height: 1;\">FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p><p style=\"line-height: 1;\">FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p><p style=\"line-height: 1;\">FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF</p><p style=\"line-height: 1;\"><br></p>','涨知识','2020-04-05 15:01:16','604b94fd27314c95a5ffc48d27ba444f','已发布',''),('d64001267a354f228f2a1bed8ff5424d','视狗如己出的阿根廷人养一只宠物狗一年要花费多少钱?','<p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">你想养狗吗?说实话，现在有很多人特别想养狗，但是他们又特别害怕养狗开销会特别大，所以，他们哪怕是再想养，也没有去养。你知道养狗得开销到底有多大吗?细算之后吓自己一跳!66%的阿根廷人至少拥有一种动物作为<a href=\"http://www.ixiupet.com/\" target=\"_blank\" style=\"color: rgb(19, 110, 194);\">宠物</a>，因此阿根廷居民拥有<a href=\"http://www.ixiupet.com/\" target=\"_blank\" style=\"color: rgb(19, 110, 194);\">宠物狗</a>的排名位居世界前列。但是，如果没有事先计划或没有为所涉及的费用进行预算的话，那么就不要随意购买或收养宠物狗。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　此外，在一个去年年通货膨胀率超过50%的国家生活，不仅要考虑每月养宠物的固定费用，还要考虑全年的成本增长，以免半途而废。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　决定养狗的人不仅应该考虑在有宠物后由谁来照顾它，它将在哪里睡觉以及将给它起什么名字，首先要回答的问题是：每个月养狗要花多少钱?</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　据悉，考虑到宠物狗的食物，遛狗，清除跳蚤和洗澡的费用，每月成本可能超过6,000比索(合约600人民币)。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px; text-align: center;\"><img src=\"http://localhost:8080/img/2-200320152110.jpg\" style=\"width: 435px;\"><br></p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　不考虑宠物主拥有足够的空间将狗养在公寓或住家中，首先要考虑的是饲料，除跳蚤和壁虱清洗的年度费用之外，还要列入预算的费用包括疫苗接种费用，洗澡，如果没有时间遛狗，还要找人遛狗，兽医咨询费用，以及一些额外的费用，例如狗玩具，项链，遛狗绳和带有电话的狗牌等等。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　如果考虑到主要的支出，那就是<a href=\"http://www.ixiupet.com/tags/15.html\" target=\"_blank\" style=\"color: rgb(19, 110, 194);\">狗粮</a>，这部分费用根据狗的大小，所消费的品牌和质量不同而有所不同。对于中型犬来说，每天的狗粮消耗量在180到300克之间。另一方面，如果它们是中型犬，则每天要吃300到350克之间的食物，而如果它是超过25公斤的犬只，则每天要吃500到700克之间的食物。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　经济实惠的狗粮在布宜诺斯艾利斯市的兽医和宠物店中的平均价格(以21公斤为单位)为每袋1,250比索。因此，中型犬每月狗粮费用为660比索。另一方面，如果是高质量品牌的狗粮，则价格将升至1,350比索(18公斤包装的价格平均3,400比索)。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　此外，还必须加上洗澡的价格，价格从200比索到500比索不等，具体取决于店铺收费和宠物的大小。还有1000比索要用于每年接种一到四次的疫苗，例如狂犬病疫苗(一年一次)和针对寄生虫的疫苗(每3或4个月一次)。而且还需要考虑兽医看诊的费用，大概在600比索到800比索之间。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　布宜诺斯艾利斯市遛狗人的平均价格在每月3500比索到5,000比索之间，具体取决于每天遛狗花费的小时数而定。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　中型犬的平均日托价格为每晚450比索，因此一个周末的照看费用为1,350比索(包括三晚)。</p><p style=\"margin-bottom: 15px; padding: 0px; font-family: 微软雅黑; color: rgb(51, 51, 51); font-size: 16px;\">　　简而言之，就像狗是人类最好的朋友一样，重要的是要知道它的主人是否可以履行饲养动物所要求的所有义务。因此，在收养或购买宠物之前，不仅要知道主人是否可以腾出时间照顾它们，还必须提前计划养宠物的支出。</p>','涨知识','2020-03-27 14:10:07','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/2-200320152110.jpg'),('daff7b84f0a349ef8ce8d59198d41514','GGGGGGGGGG','<p>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p><p>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p><p>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p><p>GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG</p><p><img src=\"http://localhost:8080/img/platform/b8fb11dd2d1a448c9dcc2875ef39d6b6.jpg\" style=\"width: 25%;\"><br></p>','新鲜事','2020-04-05 15:01:50','604b94fd27314c95a5ffc48d27ba444f','已发布','/img/platform/b8fb11dd2d1a448c9dcc2875ef39d6b6.jpg'),('e7defcab32f1472bb9955ea32eaca9ee','在云南洱海范围内清洗车辆、宠物等罚款最高5000元 将于12月1日施行','<p style=\"margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\" style=\"\"><font face=\"Helvetica\">日前，云南省大理州召开《云南省大理白族自治州洱海保护管理条例(修订)》《云南省大理白族自治州苍山保护管理条例(修订)》公布施行大会，两《条例》将于12月1日施行。据了解，《云南省大理白族自治州洱海保护管理条例》于1989年3月1日施行，先后于1998年、2004年和2014年进行过三次修订；《云南省大理白族自治州苍山保护管理条例》于2002年10月1日施行，2009年进行过一次修订。通过此次修订，两《条例》的适用性和可操作性进一步增强。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">修订后的《洱海保护管理条例》共八章60条，对立法宗旨、保护原则、洱海流域空间管控和产业结构调整等作了修订，最突出的特点是将洱海保护管理范围划分为一、二、三级保护区，并对各级保护区的保护管理作了规定；进一步明晰了自治州、大理市和洱源县、流域各乡镇的保护管理职责，新增了洱源县洱海保护管理机构职能职责的规定。对整个洱海流域保护管理涉及的规划管控、基础设施建设、转型发展、生态保护、农业面源污染防治、垃圾污水处理、水环境监测、科学研究等作了梳理规范；对洱海湖区渔业捕捞、码头、游船及相关活动管理作了修订，对法律责任进一步作了规范。修订后的《条例》中明确了法律责任：擅自使用水上飞行器的，责令停止违法行为，处1万元以上5万元以下罚款，有违法所得的，没收违法所得；擅自在洱海湖区和湖滨带范围内搭棚、摆摊、设点经营等的，责令停止违法行为，没收违法所得，可以并处100元以上1000元以下罚款。在洱海湖区和湖滨带范围内清洗车辆、宠物、畜禽、农产品、生产生活用具，情节轻微的，处200元以上1000元以下罚款；情节严重的，处1000元以上5000元以下罚款。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">修订后的《苍山保护管理条例》共五章35条，根据有关上位法和国家关于建立以国家公园为主体的自然保护地体系的相关要求，对立法宗旨、保护管理原则作了修订；专设了保护管理职责一章，明确了各级各相关县市和部门的职责；对保护管理范围和对象作了更为科学准确的界定，进一步细化了保护管理措施，对相关禁止行为作了修订，对法律责任进一步作了规范。修订后的《条例》明确了法律责任：乱扔垃圾或者在景物或者设施上刻画、涂污的，由苍山保护管理机构责令恢复原状或者采取其他补救措施，处50元罚款；刻画、涂污或者以其他方式故意损坏国家保护的文物、名胜古迹的，依照《中华人民共和国治安管理处罚法》的有关规定予以处罚；擅自采摘花卉、果实、茎叶的，由苍山保护管理机构责令停止违法行为，可以并处100元以上500元以下罚款；造成损失的，依法承担赔偿责任。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">洱海是大理实现可持续发展的根基，苍山是世界地质公园重要组成部分。通过此次修订，两《条例》的适用性和可操作性进一步增强，将为洱海、苍山的保护管理工作提供更加完善、更加有力的法制保障。(央视记者 李常明)</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><font face=\"Helvetica\">延伸阅读</font></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><font face=\"Helvetica\">洱海</font></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">古代文献中曾称为叶榆泽、昆弥川、西洱河、西二河等，位于云南大理郊区，为云南省第二大淡水湖。洱海北起洱源，长约42.58公里，东西最大宽度9.0公里，湖面面积256.5平方公里，平均湖深10米，最大湖深达20米。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">洱海有两个出水口：</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">1.在下关镇附近，经西洱河流出；</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">2.“引洱入宾”。洱海是大理“风花雪月”四景之一“洱海月”之所在。据说因形状像一个耳朵而取名为“洱海”。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">洱海水质优良，水产资源丰富，同时也是一个有着迤逦风光的风景区。洱海，虽然称之为海，但其实是一个湖泊，据说是因为云南深居内陆，白族人民为表示对海的向往，所以称之为洱海。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><span class=\"bjh-p\"><font face=\"Helvetica\">2014年，云南大理白族自治州环境保护局为加强人们对洱海的环保意识，邀请音乐家为大理的母亲湖“洱海”，创(制)作了洱海形象歌曲《洱海情》。</font></span></p><p style=\"margin-top: 22px; margin-bottom: 0px; padding: 0px; word-break: break-all; font-size: 12px; line-height: 24px; color: rgb(51, 51, 51); text-align: justify;\"><font face=\"Helvetica\">来源 北晚新视觉网综合 环球网 央视 百度百科</font></p>','新鲜事','2020-04-05 17:13:27','604b94fd27314c95a5ffc48d27ba444f','置顶','');

/*Table structure for table `pet_moments` */

DROP TABLE IF EXISTS `pet_moments`;

CREATE TABLE `pet_moments` (
  `id` varchar(32) NOT NULL COMMENT '朋友圈',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `content` text COMMENT '内容主体',
  `img_path` text COMMENT '图片地址',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `status` varchar(64) DEFAULT NULL COMMENT '状态',
  `browse_count` int(11) NOT NULL DEFAULT '0' COMMENT '浏览次数',
  `user_img` text COMMENT '用户头像',
  `user_name` varchar(64) DEFAULT NULL COMMENT '用户昵称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_moments` */

insert  into `pet_moments`(`id`,`user_id`,`content`,`img_path`,`create_time`,`status`,`browse_count`,`user_img`,`user_name`) values ('b6f59a8ae48b4c198d46c94c447156a4','604b94fd27314c95a5ffc48d27ba444f','今天天气真好','/img/moments/e4b0ca88e72b43c4b0861fb841adb5b4.jpg;','2020-04-25 15:36:54','已发布',0,'/img/user/84ca4ee8a1ae42acac0ec2728f4039d4.jpg','管理员');

/*Table structure for table `pet_moments_comment` */

DROP TABLE IF EXISTS `pet_moments_comment`;

CREATE TABLE `pet_moments_comment` (
  `id` varchar(64) NOT NULL COMMENT '宠物圈信息评论',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_moments_comment` */

/*Table structure for table `pet_moments_comment_reply` */

DROP TABLE IF EXISTS `pet_moments_comment_reply`;

CREATE TABLE `pet_moments_comment_reply` (
  `id` varchar(64) NOT NULL COMMENT '宠物圈评论回复',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_moments_comment_reply` */

/*Table structure for table `pet_periphery` */

DROP TABLE IF EXISTS `pet_periphery`;

CREATE TABLE `pet_periphery` (
  `id` varchar(32) NOT NULL COMMENT '宠物周边商品',
  `name` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `price` decimal(10,0) DEFAULT NULL COMMENT '价格',
  `brand` varchar(255) DEFAULT NULL COMMENT '品牌',
  `type` varchar(255) DEFAULT NULL COMMENT '颜色样式',
  `number` varchar(32) DEFAULT NULL COMMENT '商品编号',
  `stock` int(11) DEFAULT NULL COMMENT '库存',
  `sold` int(11) DEFAULT NULL COMMENT '已售',
  `img_path` text COMMENT '图片地址',
  `weight` varchar(64) DEFAULT NULL COMMENT '重量',
  `remarks` text COMMENT '备注',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `name_of_manufacturer` varchar(255) DEFAULT NULL COMMENT '生产厂家',
  `status` varchar(20) DEFAULT NULL COMMENT '销售状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_periphery` */

insert  into `pet_periphery`(`id`,`name`,`price`,`brand`,`type`,`number`,`stock`,`sold`,`img_path`,`weight`,`remarks`,`shop_id`,`create_time`,`name_of_manufacturer`,`status`) values ('5d039292e38c49e898dc5cbbb18bdb44','Dr.Bio001','49','Dr.Bio','黄色','H332',99,1,'/img/periphery/f2be273ddcf64a26aa3115cbda58be5b.jpg;','360.00g','逗猫玩具','44e770a3718d4c52b570979ae590b491','2020-04-25 15:13:00','国产','待售'),('7193859e00554349a99c0fb847774781','大侦探皮卡丘影视周边','49','孟溪','黄色','GA45454',59,1,'/img/periphery/ed66e44986bc4a538f3bff1e1970831b.jpg;','10.00g','','44e770a3718d4c52b570979ae590b491','2020-04-25 15:11:12','','待售');

/*Table structure for table `pet_sales_records` */

DROP TABLE IF EXISTS `pet_sales_records`;

CREATE TABLE `pet_sales_records` (
  `id` varchar(32) NOT NULL COMMENT '销售记录',
  `product_id` varchar(32) DEFAULT NULL COMMENT '产品id',
  `category` varchar(32) DEFAULT NULL COMMENT '类别（宠物/食品/服务）',
  `price` decimal(18,2) DEFAULT NULL COMMENT '单价',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `sales_time` datetime DEFAULT NULL COMMENT '销售时间',
  `user_id` varchar(32) DEFAULT NULL COMMENT '购买用户id',
  `salesman_id` varchar(32) DEFAULT NULL COMMENT '销售人员id',
  `folding_rate` double DEFAULT NULL COMMENT '折率',
  `remarks` varchar(255) DEFAULT NULL COMMENT '备注',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `is_complete` tinyint(1) DEFAULT NULL COMMENT '是否完成',
  `total` decimal(18,2) DEFAULT NULL COMMENT '金额',
  `product_name` varchar(255) DEFAULT NULL COMMENT '产品名称',
  `product_number` varchar(255) DEFAULT NULL COMMENT '产品编号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_sales_records` */

insert  into `pet_sales_records`(`id`,`product_id`,`category`,`price`,`number`,`sales_time`,`user_id`,`salesman_id`,`folding_rate`,`remarks`,`shop_id`,`is_complete`,`total`,`product_name`,`product_number`) values ('081ba71d473f450cbff261ab40a5569c','73064c57f6224cfc83d82dc147ad2c67','food','169.00',3,'2020-04-25 15:18:37','1','e34deaa06ae442949201bc699068fca7',0.75,NULL,'44e770a3718d4c52b570979ae590b491',1,'380.25','麦富迪宠物狗粮','H21212'),('2fd315c099a74f24ada2a00f531384d5','d6ca36ae8d394d13b0108a0fdd9f5387','food','29.50',5,'2020-04-25 15:17:57','1','e34deaa06ae442949201bc699068fca7',1,NULL,'44e770a3718d4c52b570979ae590b491',1,'147.50','弗兰士 猫粮','H6767'),('414ce18f0ca244688c7b7c5ce406837f','ee5b7a7a3e3d4e6f8967adaf920f1514','service','200.00',1,'2020-04-25 15:17:57','1','e34deaa06ae442949201bc699068fca7',1,NULL,'44e770a3718d4c52b570979ae590b491',1,'200.00','宠物美容','KD2343'),('6ee951c21c7e49dcb0161875fcace039','8ae2cf4b2e2d4a9a990fcec096e9cd19','food','75.00',1,'2020-04-25 15:17:57','1','e34deaa06ae442949201bc699068fca7',1,NULL,'44e770a3718d4c52b570979ae590b491',1,'75.00','凡可奇凡可奇','H3343'),('752819ef226b4db78effbdfef69e6bc8','7193859e00554349a99c0fb847774781','periphery','49.00',1,'2020-04-25 15:18:37','1','e34deaa06ae442949201bc699068fca7',0.75,NULL,'44e770a3718d4c52b570979ae590b491',1,'36.75','大侦探皮卡丘影视周边','GA45454'),('bbcb248efb874b90912e3b33a8a7460c','9d0365d07dbb478899bd2269a6062ead','pet','6000.00',1,'2020-04-25 15:17:57','1','e34deaa06ae442949201bc699068fca7',1,NULL,'44e770a3718d4c52b570979ae590b491',1,'6000.00','埃及猫','FB44343'),('c7b9218654ac4c1fa699b2deecbc9ff7','5d039292e38c49e898dc5cbbb18bdb44','periphery','49.00',1,'2020-04-25 15:17:58','1','e34deaa06ae442949201bc699068fca7',1,NULL,'44e770a3718d4c52b570979ae590b491',1,'49.00','Dr.Bio001','H332');

/*Table structure for table `pet_shop` */

DROP TABLE IF EXISTS `pet_shop`;

CREATE TABLE `pet_shop` (
  `id` varchar(32) NOT NULL COMMENT '宠物店',
  `shop_name` varchar(255) DEFAULT NULL COMMENT '店名',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id(店长id)',
  `category` varchar(32) DEFAULT NULL COMMENT '类别',
  `address` varchar(64) DEFAULT NULL COMMENT '地址',
  `shop_phone` varchar(32) DEFAULT NULL COMMENT '店铺电话',
  `business_hours` varchar(64) DEFAULT NULL COMMENT '营业时间段',
  `shop_img_path` text COMMENT '店铺图片地址',
  `detailed_description` varchar(255) DEFAULT NULL COMMENT '详细描述',
  `create_time` datetime DEFAULT NULL COMMENT '开店申请创建时间',
  `accept_appointment_or_not` tinyint(1) DEFAULT NULL COMMENT '是否接受预约（true/false）',
  `business_status` tinyint(1) DEFAULT NULL COMMENT '营业状态(1:正在营业,0:暂停营业)',
  `is_forbidden` varchar(10) DEFAULT NULL COMMENT '宠物店管理平台状态',
  `longitude` decimal(10,7) DEFAULT NULL COMMENT '经度',
  `latitude` decimal(10,7) DEFAULT NULL COMMENT '纬度',
  `audit_time` datetime DEFAULT NULL COMMENT '审核通过时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop` */

insert  into `pet_shop`(`id`,`shop_name`,`user_id`,`category`,`address`,`shop_phone`,`business_hours`,`shop_img_path`,`detailed_description`,`create_time`,`accept_appointment_or_not`,`business_status`,`is_forbidden`,`longitude`,`latitude`,`audit_time`) values ('44e770a3718d4c52b570979ae590b491','23宠物店','e34deaa06ae442949201bc699068fca7','销售产品','广东省广州市海珠区赤岗街道赤岗路62号','15975400723','8:00-20:00','/img/shopImg/c3140aed2a1749a9bc5d3ddcaf54fca0.jpg;',' 23宠物店23宠物店23宠物店23宠物店23宠物店23宠物店23宠物店23宠物店','2020-04-25 14:22:53',1,1,'启用','113.3612000','23.1246800','2020-04-25 14:24:13'),('5671a30c9b2c48148ad7b293a6e844fd','管理员测试宠物店','604b94fd27314c95a5ffc48d27ba444f','测试类型','广东省广州市海珠区琶洲街道广州香格里拉大酒店','15975400724','8:00-20:00','/img/shopImg/9f5a8781208046cd9bc23538f926d483.jpg;',' 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述 管理员测试描述','2020-04-25 14:12:46',1,1,'启用','113.3612000','23.1246800','2020-04-25 14:14:26'),('f86e10027f9d46228fb8e0112c7f9249','25宠物店','843431e563544af4852f992231efa0a0','宠物服务','广东省佛山市南海区大沥镇回龙大道','15975400725','8:00-20:00','/img/shopImg/cf4c04add3ec44ba9cc08638417dcd92.jpg;',' 25宠物店25宠物店25宠物店25宠物店25宠物店25宠物店25宠物店','2020-04-25 14:28:15',0,0,'待审核',NULL,NULL,NULL);

/*Table structure for table `pet_shop_browse_record` */

DROP TABLE IF EXISTS `pet_shop_browse_record`;

CREATE TABLE `pet_shop_browse_record` (
  `id` varchar(32) NOT NULL COMMENT '宠物店浏览浏览记录',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id 游客可以为空',
  `create_time` datetime DEFAULT NULL COMMENT '浏览时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_browse_record` */

insert  into `pet_shop_browse_record`(`id`,`shop_id`,`user_id`,`create_time`) values ('0176bf3b01cb4404a133c07dabc4318e','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 15:27:19'),('165a2defe6d74a0d94a66ce2b295e0e4','1','1','2020-04-07 17:21:53'),('16800c550ef3409f9384e4ac0984ff42','1','1','2020-04-15 16:04:49'),('175d11e568fb4c9fb3c20af32f3d256a','1','1','2020-04-07 16:20:40'),('176d83702f5a49c8b991768f1e603c18','1','1','2020-04-07 16:25:51'),('17ad78d65e6444b0b7ade21847f4bcb0','1','1','2020-04-07 16:25:27'),('17c64cca2aeb41f487f96049e16a716c','1','1','2020-04-07 18:09:23'),('182e93a4749d417184b1c690cedc191a','1','1','2020-04-07 16:00:39'),('182fe4b9fcd2439092174784a467eb45','1','1','2020-04-07 17:13:54'),('1857dd6c09fa428a94a97f3908e15d59','1','1','2020-04-03 19:27:26'),('18a675f9a6fe474cb5b13dc2a48f5517','1','1','2020-04-07 16:31:30'),('18bc7a75c24c47a1a355101a4f42a346','1','1','2020-03-28 16:53:45'),('195c26e1c15c48508b135f454c426fcd','1','1','2020-04-07 18:08:05'),('19a926b57e584fb99cd40abd292b5d90','1','','2020-04-10 13:05:06'),('19b7702659ef4a5e95b27bc7918cc811','1','1','2020-04-03 19:23:45'),('1a71b0bc3038475baf1a642f254a8039','ed6c54dbfdbd4d55a803bedbac8e8af4','d9661848464e4d499f1b369b8c89bfd5','2020-04-17 19:59:04'),('1afbdba7a9cb48be8dba476951ce295d','8d59b4958da9487291828d62a40fc823','1','2020-04-07 18:35:55'),('1b37ca8ead334214b434ad399cd479a0','1','1','2020-04-03 19:49:31'),('1b74b6cc0d4241ad8d99b713efda6e4d','1','1','2020-04-03 19:49:45'),('1bfe2ab76fdb47eaa2d5f165efb86e54','1','1','2020-04-07 15:35:35'),('1dbd70d46a0b488c885e0f7ec59e1e90','1','1','2020-04-07 17:12:45'),('1e0960f52fe34e5aa0819c7f5bd375b2','1','','2020-04-06 19:22:51'),('1e17c47c5d1541b4a87662e04b2e9c3f','1','1','2020-04-06 16:37:04'),('1eb59effd3424e5e8c0635cfd46f5bb4','1','1','2020-04-03 19:16:55'),('1f57ffe2696f49fe87bd2f3e1e27ce37','1','1','2020-04-07 16:33:28'),('1f715f1313e84393a882ed5aca4e9e3d','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 13:05:32'),('1f9966b49ff843c18806f60acb68ccdf','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:04:24'),('1ffbe836ac3f4e64ab6c1c698bffea93','1','1','2020-04-03 19:36:05'),('209bf44711ae4f5c8237c8528c488f9c','1','1','2020-04-07 17:35:51'),('21a04317d5f94cedbd086d4b34254844','1','','2020-04-07 18:19:48'),('21d16c9a367a4feabf2869a0dc33abdc','1','','2020-04-07 18:20:29'),('22ea0290f8de4df792ec7c9a34bf2a6d','1','1','2020-04-07 18:56:15'),('233144870e554f17b7b2b49839650be9','1','1','2020-04-07 15:59:30'),('23e9f1c6a4584c9fadbf79369b905e22','1','1','2020-04-07 16:57:24'),('245438bd987e46b4827965a42ea1115e','a0c356fc175f43098eeb2a656fc59ca6','1','2020-03-30 18:03:56'),('24beaea347b544b0883d8feb6f52c149','1','1','2020-04-04 18:26:51'),('24fed8022211456e8f9acee785655885','1','1','2020-04-06 14:18:44'),('252710afb4e34ebf9ce5d926b8eb6a24','1','1','2020-04-07 17:02:21'),('25ee71d2dd3a4ec58103c7b0fe9919da','1','1','2020-04-06 14:18:53'),('26989925428e411487129389d5455ca9','1','1','2020-04-07 15:21:51'),('26cc165ef08d4086936730f7af0b93b4','1','1','2020-04-07 15:30:18'),('27663cf5ec854ea6aedd0e176d8c6e92','1','1','2020-04-07 16:02:38'),('27b0d95efbe74c578dc1629ed2eb7ea9','1','1','2020-04-07 17:22:24'),('280ca27bded3413fb21e18b6136a0743','1','1','2020-04-07 15:41:44'),('28348dcb91714e12b8b15e7588803c3f','1','1','2020-04-07 17:21:36'),('28bc5bb15a354fa49fb7e2b9662a0f42','1','1','2020-04-07 16:32:49'),('28db92b2ec0b4b1c8c1143bc9f245ce8','1','1','2020-04-07 15:38:15'),('2ab4f3b22c024c05949c10bcded7199c','1','1','2020-04-07 16:02:53'),('2b52569fe215472e860a774d6cb8b3ab','1','1','2020-04-07 18:13:23'),('2bc7c20b859b485e8d66c11c7688dc58','a0c356fc175f43098eeb2a656fc59ca6','1','2020-04-01 18:04:00'),('2c4957bfc24648be93f5c6d170259a99','1','1','2020-04-07 12:16:35'),('2c70fbdf3d664da5ada4885c6091d266','1','1','2020-04-07 15:14:45'),('2cda49c29916424091ba7e1cf68c999a','1','1','2020-04-03 19:29:59'),('2d60314edd3b44dcb13522f7c604b254','44e770a3718d4c52b570979ae590b491','68068eb3417944b397039e641b99b8a6','2020-04-25 15:28:39'),('2e117fa264c44bb288a2e7c77118b1f9','1','1','2020-04-07 18:14:12'),('2e7cfc1977ef4412b4da1a361db681dc','1','1','2020-04-07 15:07:07'),('2eb9a843e23a48698915caff1b405b2a','1','1','2020-04-07 16:56:18'),('2f6a3136a769488195aa2e9d7a7f00d6','1','1','2020-04-07 15:27:06'),('2f73b8b283cd4574a0b99914ee31ee82','1','1','2020-04-07 16:12:37'),('2f9cedaabbbb413e9b8711d8dea51ef3','1','1','2020-04-07 11:53:41'),('3020d63b89b1420cbf445a2a0a86e250','1','1','2020-04-03 19:03:50'),('31410c89cbb749e1afe21245d28f9b21','1','1','2020-02-28 17:07:31'),('320c6bd836484c96ac751eaa29b1b9b3','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:05:47'),('323567257e0c4fd189744998f4cf793f','1','1','2020-04-07 15:01:21'),('32e73771e7ec4979bd5bca79078398a5','1','1','2020-04-06 14:01:37'),('336c36372ab44e7fb52b44de78d8bd88','1','1','2020-04-07 17:48:07'),('336e121491ad40729c5473b96de703bf','1','1','2020-04-03 19:32:17'),('33a8c82263c748e98de66fde766d5cfa','1','1','2020-04-07 17:15:32'),('348c31cfcd8441978b17fcc5264ba46a','1','1','2020-04-03 19:33:49'),('351a2c51463f468581495880c29c349c','1','1','2020-04-07 16:35:27'),('35420c4bc9b045338058dc6bf05eb2af','1','1','2020-04-07 15:22:36'),('357c920001924cb180e3ae4b0f7a6164','1','1','2020-04-06 16:20:18'),('3773dbe280014bd99eaedc5624183e07','1','1','2020-04-06 19:13:16'),('37806fd349e4455399e52ea7cfc72aef','1','1','2020-04-07 17:41:52'),('37bf77874a5748edba3ab254fbcb101b','1','1','2020-04-08 14:16:11'),('38115d5a2b74493fbfffb24001df0546','1','1','2020-04-07 16:21:54'),('3831dca5640548c4a16938ce49e89b7d','1','1','2020-04-07 15:34:02'),('38ac7da8f7b44288ae140ffdea56fb76','1','1','2020-04-07 16:19:25'),('3b1b22f5b0f74dbabc6e0ecd29a14dc5','8d59b4958da9487291828d62a40fc823','1','2020-04-07 18:57:40'),('3b231c83b10f417eacdaf485f830c3da','1','1','2020-04-07 18:56:30'),('3b284e20a64e44bcbf25689fb9a50fff','1','1','2020-04-07 16:41:34'),('3b2dfc9e36f248d5834331caa113ea7b','1','1','2020-04-06 14:00:58'),('3b83a8a73bc145dc9bae254f8b077672','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 12:42:29'),('3b943630f6884bb2abc640bc2a327096','1','','2020-04-03 19:43:52'),('3b99ae1044254cc3a340361c64b7a33f','1','1','2020-04-07 17:36:42'),('3c4b51beb6cf425f96b6b4d75a276bc4','1','1','2020-04-07 15:02:41'),('3ced58a1774141718eb8c9e80b5c8465','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 15:36:29'),('3d6ccaec335340e68f388b46b74deca1','1','1','2020-04-07 16:30:27'),('3d9deffaf6f3445e878ba91a33423669','1','9a57e4bc04204dfb9ee75c5dedcdba6a','2020-04-16 14:10:56'),('3da313cd51e845229f51185e98b2e7c1','1','1','2020-04-07 16:05:56'),('3ded371487dd42458599900c8137f685','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-24 23:26:52'),('3e6da950d88842c8a98ce9a0e2584c14','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-07 18:38:22'),('3e7d8c2f611b42ae913f943fe72086ba','1','1','2020-04-07 15:41:09'),('3ef41dd25f254a3a8e388e9843785955','1','1','2020-04-07 16:39:54'),('3f0e2675651c41dcba08da07763dbf2f','1','1','2020-04-08 14:27:26'),('3f49f1cb9f0b4997b6ba7618ceaa168c','1','1','2020-04-03 19:34:04'),('3f578cf937fe4bc9b462e41835055fbc','1','1','2020-04-07 15:25:36'),('3f696f2059ed45f3ac2314a07bfad067','1','d9661848464e4d499f1b369b8c89bfd5','2020-04-17 20:32:22'),('411af81ef0764e179f1734d02e12cac8','1','1','2020-04-06 16:29:04'),('4187702cf46342469ca519fa0e662ebb','1','1','2020-04-07 15:22:50'),('41aa4867a07f46449820d2cf18e167e8','1','1','2020-04-06 14:22:29'),('424563953d9749019716037da24a1ad1','1','1','2020-04-07 16:57:05'),('42baff8629584ec0a007a45bf4c7f22b','1','1','2020-04-05 10:21:48'),('43497b4b2ef74f209b10cb9b4b044f76','1','1','2020-04-03 19:16:31'),('43f6168f0ae94e79a6ab7195d956d6c3','1','1','2020-04-07 16:06:00'),('440b15a0dcea4c44952ad2e1fb64554f','9b24cf69ca5140cf9f9a5f4ce240c83a','1','2020-04-07 18:57:51'),('44526ae2aa7a4b66af281dcac71e4bcf','1','','2020-04-06 19:18:35'),('44cc626b20e8478eaa7e72be8eb4afa9','1','1','2020-04-07 16:32:02'),('454ce21c79ab4a82bc5cdc8a7394fefe','1','1','2020-04-03 19:30:02'),('4558436a6e754daab920443123332e33','1','1','2020-04-07 16:14:58'),('46102e451669454abc34572a38993087','1','1','2020-04-03 19:38:34'),('4750cdf8e2e64514a70e5eb0e21a3144','1','1','2020-04-07 18:08:09'),('4831bb39808d4dfdb3ab8915d38fc4dd','1','1','2020-04-10 15:19:15'),('4872e76910f948cca29f3364564a3601','1','1','2020-04-07 16:08:29'),('4916348626124fdf94fb15d5d75125c2','1','1','2020-04-06 13:47:53'),('4a2eaa67f1de40d6895ca744e5b0dfb7','1','1','2020-04-06 14:17:10'),('4a6296457bff499ca92a0a6177d12e46','1','1','2020-04-07 16:31:10'),('4a76161be7bf4117a316dc15b6855858','1','1','2020-04-07 12:17:01'),('4b8d4365184e4b3199669ccdf6d12bf2','1','1','2020-04-02 22:08:19'),('4bd24ef0a62a422d91897d0448f53c0f','1','1','2020-04-06 14:21:14'),('4c91f8d1ff634f69bb8b48f6489ad976','1','1','2020-04-03 19:31:58'),('4cb1b1dd897f4c18833928412951adf0','1','1','2020-04-07 16:22:53'),('4d51ea6118184f1e8ef7d85045503307','1','d9661848464e4d499f1b369b8c89bfd5','2020-04-15 22:16:54'),('4d8591bb10664ca6a007c7502596d471','1','1','2020-04-07 15:59:51'),('4dc9d05639f9409c8fc2800e5d6e4cdb','1','1','2020-04-07 17:03:41'),('4e3b058d9f424d89a2503725032435ea','1','1','2020-04-03 19:32:09'),('4f6085a230d243a0a281ec5b80882679','1','1','2020-04-07 16:17:39'),('4f707f106fcf4e42bfece5d7d284aa0b','1','1','2020-04-06 19:18:08'),('4fc0a6be777f4c7d827f21c611e5f82d','1','1','2020-04-07 16:03:51'),('4fd1a4b26575442dbbc7fd277353c23b','1','1','2020-04-07 17:03:25'),('500f67fdc1a24aae92d57e5135172d08','1','1','2020-04-07 21:10:49'),('5024aaf7acfa44c994978873c38b1802','1','1','2020-04-07 15:56:33'),('51145af45ee04056a734efa9ce55658a','1','1','2020-04-10 15:30:37'),('513c81b2a0ee4eb4b786d25b2ee45240','1','1','2020-04-06 13:43:58'),('5145905d95cb4332ba9a10f36dea3a2c','1','1','2020-04-07 16:40:08'),('51a8390acb904d1d88ec5deeaff002e3','1','1','2020-04-07 16:26:46'),('52ccf2b66048494eae8ed82430837b45','1','1','2020-04-07 15:12:29'),('52d53eefabc4430787160b51dab844b6','1','1','2020-04-07 16:22:39'),('55d734598e7b46758c67f3f77e3cf3d8','1','','2020-04-03 19:43:25'),('56b26a36d41342a0b88a4054ac5d24c3','1','1','2020-04-02 22:05:44'),('57f1192ea39940d1baa2e744cc01771c','1','','2020-04-03 19:43:43'),('580c284987264a8383fe93d8e5cac5be','1','1','2020-04-06 19:23:04'),('5852672c33c34877b3a4da92da71dcad','1','1','2020-04-07 16:29:08'),('5885e2cc9ffa4a53b6e7c0701ae23a2f','1','1','2020-04-07 16:05:27'),('58aebaa1d9734d8bba62ce49df8844c9','1','1','2020-04-03 19:07:34'),('5a70cac0dfcf43eba387cf087d3bb5f5','1','1','2020-04-03 19:48:25'),('5ac97f2450c44df2b0bbca9796dce13a','1','1','2020-04-07 18:13:14'),('5b49ce4f6c904398955815f2a13aea73','1','1','2020-04-03 19:45:02'),('5cd26e54ef714daeaeeb934ecc6dd348','1','1','2020-04-04 18:26:37'),('5d4de1684fcd42b18d3675b2844b2101','1','1','2020-04-07 17:41:33'),('5d8750b4b4b84bb595474e2bd7eaad51','1','1','2020-04-08 14:16:29'),('5d8cfa6acfeb447fbfa2754be057dab3','1','1','2020-04-07 16:38:42'),('5e58975e3e60452782fe4b7cd91dfc62','1','1','2020-04-07 15:20:29'),('5ea751bbcb3248958f799f65753f8207','1','1','2020-04-06 16:30:20'),('5ed1f7a6d08a4fbbb4ad48fd5629eed4','1','1','2020-04-03 19:38:54'),('5f9ef5a633844dd09683c4203c0bdd9a','1','','2020-04-15 19:08:20'),('600a9bc6d400496fa638002b949f48a0','1','1','2020-04-07 16:04:32'),('6021921bfabc403ea207df443307c612','1','1','2020-04-14 11:23:59'),('606e073d086648c1a00a260dced4abbe','1','1','2020-04-07 17:33:40'),('60c271ba449a4abab2d3c933177ebcfc','1','1','2020-04-07 16:38:44'),('60d7c8e10f4348b38b43d8564a9f8228','1','1','2020-04-03 19:40:30'),('612ab8d3297e4995a111897b765fe652','1','1','2020-04-03 19:32:40'),('6196841d96754db4b1e67fcec59ad601','1','1','2020-04-06 16:28:44'),('61cb2e73627d4b32a90356252f87d786','1','1','2020-04-07 17:43:59'),('62338621e35e4064916e23c99c706871','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 17:59:47'),('62acf1b4175147c7b3ea26ab83306017','1','1','2020-04-07 15:04:14'),('631ebc5a05d441958133e3f30631e040','1','','2020-04-07 14:51:59'),('63270f396b1c4d8289bcd3a54b9f1d84','1','1','2020-04-03 19:27:03'),('6358ece9cdb4497fbf1917cb2cf6620c','1','1','2020-04-06 13:48:10'),('6396e70dbb6c461788ba964fb4deed04','1','','2020-04-03 19:44:02'),('63a3c6a9bfed47acb075cac59a515345','1','1','2020-04-07 16:06:28'),('63b5d77685d44473ab5eeb5bff289ff3','1','1','2020-04-07 16:05:29'),('63d7584a6978425ba142b242e67ae048','1','1','2020-04-07 17:15:54'),('646f27707f2e43bbab46a72c22317df8','1','1','2020-04-07 15:33:52'),('64800485d2c24501b36bc0868fa91def','1','1','2020-04-07 16:08:57'),('650e7a83dfb44782bf0f84d3bd51130c','1','1','2020-04-07 16:33:53'),('6586abad2fb14029b92102ad186c1435','1','1','2020-04-03 19:34:32'),('65bbf38b51fe4b4cb6bcf0ef2d86d2c7','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 12:42:34'),('65c90a2f06e8468cbb8068db00136c03','1','1','2020-04-07 15:09:40'),('665bb4fcabf64c32bb45867a00cc106d','1','1','2020-04-07 16:04:48'),('676643fab8884a3d86dba9a802d83cb3','1','1','2020-04-07 16:38:26'),('67e85e6934064fbaa5f81aa2a6f08e85','1','1','2020-04-03 19:28:01'),('682c9deb367742e7b235bd81b95a7af0','1','','2020-04-06 19:21:06'),('688e9f34578e47e2979955795ef419e2','1','1','2020-04-07 15:09:30'),('68929a0e9dbe48c7b2a8ded10cb6feb9','1','1','2020-04-06 14:17:48'),('68977d078c324942a7ab80c5400d60fa','1','1','2020-04-07 17:36:13'),('69218a452f9e4a37997808caf2798262','1','1','2020-04-07 15:32:42'),('695b050659834071809095da3a60733d','1','1','2020-04-07 18:13:08'),('6a34d3c9260e49a4aa6693715e6e75aa','1','1','2020-04-07 17:56:24'),('6aacc6ab20b140d18950c4afd4d47888','1','1','2020-04-07 17:15:39'),('6b66d4833a8441f8959b1cd7e07f04ef','1','1','2020-04-07 15:40:26'),('6b8c2f12976b49deac18fd70985a5cc9','8d59b4958da9487291828d62a40fc823','1','2020-04-10 15:24:15'),('6b9187e20bf94ecca25d13e88ae4b6f1','1','1','2020-04-07 15:26:14'),('6bc308ef271b46588775e2cb98587ead','1','1','2020-04-03 19:30:02'),('6c33072ab0904134b4407aca3e81ef9c','1','1','2020-04-07 16:21:28'),('6c36303add6b4985a8659fafa3cb14cf','1','1','2020-04-15 20:31:28'),('6c3bf74dc1344166ac0b60bdfda5457d','1','1','2020-04-03 19:23:20'),('6c58452c6c204a3d8cf71bd48d095c71','1','1','2020-04-07 18:38:54'),('6c7eada3de6d4acd8d82d6b04e894b19','1','1','2020-04-07 17:16:58'),('6cb49c9186284e7fada0a4e068a17c60','1','1','2020-04-07 17:35:01'),('6dc4267425294c6fbf02e5b5613cd01b','1','1','2020-04-25 13:50:03'),('6fbf9af3db4c44ada85baea37ee96324','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 13:50:26'),('7025aafcaed245e28c44c8c84afe9b59','1','1','2020-04-06 14:22:36'),('70b17f6ba8bc4f2c929c36158ab5b06c','1','1','2020-04-16 21:31:13'),('712a466ae91644f68d1865167b39539a','1','1','2020-04-07 16:25:38'),('71fbc7545887440c934ac2695753aed1','1','1','2020-04-06 14:18:00'),('7236b631539f49b7bbbd033281c55279','1','1','2020-04-03 19:19:04'),('726a27954de34d1581e6d4b9e5123791','8d59b4958da9487291828d62a40fc823','1','2020-04-02 22:07:15'),('72d2060e64d44f1598f3dc7e2e48b3e4','1','1','2020-04-07 18:12:25'),('73b84d6843c14260a1aa2a5a74257338','1','1','2020-04-03 19:47:54'),('741204cfc8264d75a0f9e6b08e87b322','1','1','2020-04-07 16:32:43'),('751b6aa2e9ab483686e94e6c6f51eb75','1','1','2020-04-07 12:15:42'),('754e9eabd54f41eb9268502a1c556a79','1','1','2020-04-07 17:16:22'),('75653d5696dc4ce387d861e9b8410250','1','1','2020-04-03 19:37:21'),('75d4fce964c94e1bae88c0d2984aa481','1','1','2020-04-07 16:35:12'),('769a24f0865f41f3bc1fef06d21d8056','1','1','2020-04-07 17:35:57'),('76f1eefc7aee401183dff084cc85c1ea','1','1','2020-04-06 13:49:20'),('775b63ee276a4c7fa0088a3fda638b2f','1','','2020-04-25 13:01:09'),('77719e80fa934bf99c3129f65ce362cc','1','1','2020-04-02 22:07:50'),('780a38facbf84e57bb024737bfa33f70','1','1','2020-04-07 17:29:44'),('783a74d751ba48e2bf782297f1ed7473','1','1','2020-04-07 15:29:24'),('7858fdc948ac4aaa9bb84a6a1468cac0','1','1','2020-04-07 16:25:11'),('789006d068a64a7f80dee1c9f96d8b2e','8d59b4958da9487291828d62a40fc823','1','2020-04-07 18:56:48'),('78caf946c9a54b07a224156157d7cb76','1','','2020-04-03 19:43:29'),('7a8214055ea44684ac4502e7cedeb740','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:03:03'),('7a8c930982634ef5b49eab6a926bdedb','1','1','2020-04-07 18:13:35'),('7aa61c8ffb014367ad1de96143038665','1','1','2020-04-03 19:33:12'),('7b2ba7481e5043a1bbf1192111fd26a0','1','','2020-04-07 15:00:47'),('7b64f4059740472b9a47887459695a21','1','1','2020-04-07 16:41:52'),('7be3aaf549284342b1cc1a9b902af6aa','1','1','2020-04-04 18:30:08'),('7c7d91b3125f43ef98cc557295729783','1','1','2020-04-03 19:10:00'),('7e70f2373ab5486a99a6d17c2e15ead3','1','1','2020-04-07 17:47:30'),('7f0a4e68e7434f8fabf87352cf569b0e','1','1','2020-04-07 11:54:06'),('804496f0e56c42caa0e4fcb041d51b80','1','1','2020-04-07 12:16:27'),('80fbac73eb2e45aca450ddf91d34e09d','1','1','2020-04-07 16:08:50'),('81d60a7ce30340f6b9c0e763cba5571a','1','1','2020-04-07 11:42:19'),('822ac551484d4f81bc0fd54f9d916971','1','','2020-04-02 22:06:10'),('82638cf6baf84999ba91a2183decca21','1','1','2020-04-07 16:04:53'),('831b652acd204e8a95945ff43fde7790','1','1','2020-04-07 16:40:21'),('83aa438644564f65a18eafd6dfcb8df9','1','1','2020-04-07 15:33:37'),('83c7b9132a7f48a0bc2df6d3748e1630','1','1','2020-04-07 18:08:02'),('84b5f8f5b35e4d398e0a596b3a0d517e','1','1','2020-04-03 19:04:48'),('85394fc0404648289423cfbd8ccf3f8a','1','1','2020-04-07 16:32:15'),('858b1806f9f043638b6920d67d4af7ab','1','1','2020-04-07 15:22:45'),('8603c20392784da984fce17f8bf8224c','1','1','2020-04-07 16:11:22'),('863c7bb86a4c4c11bf48ed33ce8d415b','1','1','2020-04-03 19:47:17'),('867aff7009c44e0882a3e0ead607f6c2','1','1','2020-04-07 16:38:01'),('8685501edef545a5823df0840736845d','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:06:11'),('86bba34476ed41819c8d326115e3e284','1','1','2020-04-07 21:10:12'),('875b639166684efc83110daec95ab6c7','1','1','2020-04-07 16:54:05'),('87710109d656482f8c2d879b97c3a0a7','a0c356fc175f43098eeb2a656fc59ca6','1','2020-04-13 18:47:13'),('87cfa454c5c14ffab3615cb61a439a8f','1','1','2020-04-08 14:16:23'),('8a8e51baf4b5467ea12c396e62125f53','1','1','2020-04-07 16:37:33'),('8ad13954dccb42f5905503d6e78ba1c3','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-15 13:45:54'),('8afa205fe30b46cca6ed5fce59033a99','1','1','2020-04-07 15:25:31'),('8b179a8acb01423f88c2608ef6052a91','1','1','2020-04-07 16:38:49'),('8b205e19bf564fa5a13a29335fae4b11','1','1','2020-04-07 16:04:10'),('8b9b032859104c79af428a409506e13d','1','','2020-04-06 19:22:15'),('8bb0b15eebce472c8df7821c224f3ec7','1','1','2020-04-07 16:35:19'),('8c240d91a51c4d0e829698efbf55daab','1','1','2020-04-07 17:28:54'),('8cb1719ebcfc471f943faea26d7ba3ca','1','1','2020-04-07 16:51:20'),('8d6bbf75b39a453c934157645d1de93d','1','1','2020-04-01 18:03:26'),('8d8ba74c22284e30a6dc85d9a6788115','1','1','2020-04-06 14:17:59'),('8de0abefd24a4cd8b439af469483ff06','1','1','2020-04-03 19:37:05'),('8e18e7a65f7c4a71a7289a30d7533f62','f28907c765194a8880aa50993c9d089a','','2020-04-24 19:21:53'),('8f6b7189f81b49b5a19daf54cdb1b2e9','1','1','2020-04-03 19:09:56'),('8fc096421a624f9d8b63148b48f7ddf9','1','1','2020-04-07 16:56:39'),('90bf45253414450c99c1030ce6dba671','1','','2020-04-15 20:31:35'),('90f4eb44687d456abf9e2467ef3570f6','1','1','2020-04-10 15:18:48'),('91b8771b0a4a41bfa9d0b899b2ef51ab','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 17:03:58'),('91c3e8f984744c0abd3bfe421f87848b','1','1','2020-04-07 17:20:51'),('91d5071e3db64a4692bf043a7923b494','1','1','2020-04-01 18:03:26'),('926efb474fb24edda65a4e9c174f508f','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 17:59:36'),('9317277ca7e1460dadb649a6eeb8d88d','1','1','2020-04-07 17:34:51'),('9347806170114155be6aef2e156f3ca4','1','1','2020-04-08 12:23:50'),('93ad32c4d279496d8901e8af68464ab9','1','1','2020-04-02 22:07:36'),('93b27e136b064261b52040fe6bab7b55','5671a30c9b2c48148ad7b293a6e844fd','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 14:16:06'),('93b333a5d97f4d709e8bfc765e0f4685','1','1','2020-04-05 10:08:30'),('9440acead3594ad7bf76c561da82e944','1','1','2020-04-07 11:54:13'),('9449d9dec7d5471cb43b604458c68e0a','1','1','2020-04-07 16:36:47'),('9463e31699d545b4b6b2451f0198ad1a','1','feac3d6d287a48b8ba406cd3d82d4694','2020-04-17 14:01:25'),('9491ccaa861f4917b61d74e14c392b22','1','1','2020-04-07 18:18:19'),('958162cf624d45488f4843db3e5584a6','1','1','2020-04-07 17:21:39'),('9584077ab62d4fbd9347632d852d4605','1','1','2020-04-07 18:18:15'),('95b6d5a137fe4b4486a2e61034eb7d36','1','1','2020-04-07 17:42:33'),('962924f22b9f43e3a112a7eda9530424','44e770a3718d4c52b570979ae590b491','e34deaa06ae442949201bc699068fca7','2020-04-25 14:25:17'),('9687759faea44eaf97e439cf13de948c','1','1','2020-04-07 17:24:28'),('9741e42c83164930b2b963bb695dc25b','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 17:03:44'),('9752740e419041949c1310ff36c49d97','1','1','2020-04-03 19:56:07'),('9786f04e3a1543129fdee6ec41d7f93e','1','1','2020-04-07 16:19:18'),('97971326cf1d4d0ba6e86f758649fbbf','1','','2020-04-06 19:13:51'),('9836e6eddaa7419a9b113fb68f554632','1','1','2020-04-07 15:14:08'),('9896ba6f16cc442193c379bbeabfcd95','1','1','2020-04-07 15:25:19'),('98af51f53703483cbed05f93f52a0301','1','1','2020-04-07 18:06:10'),('9921086d76cb42e8a2e3b2b32e9bd39c','1','1','2020-04-03 19:15:02'),('9980d77d15934a7bbdb7b0275b5037b3','1','1','2020-04-07 15:34:26'),('9994a6b92aae4ebd958ed18088b235f0','1','1','2020-04-06 14:25:53'),('99c54692749849488a3a2c65fc448848','1','1','2020-04-07 16:36:23'),('9a420d1fb2434f2283ea47989ce8b81f','1','1','2020-04-03 19:09:51'),('9b3d39e55cfb400ca3ff1f5c7e9a1bbb','1','1','2020-04-16 21:31:52'),('9beec7a2ecab473586501d56e7ef1cda','44e770a3718d4c52b570979ae590b491','68068eb3417944b397039e641b99b8a6','2020-04-25 15:28:11'),('9c52df650e474fd19055e8fc5e622fda','1','1','2020-04-06 13:55:52'),('9c9974250501467783b9391130a88bea','1','9a57e4bc04204dfb9ee75c5dedcdba6a','2020-03-28 18:21:44'),('9dfb16d77aca4f7e86de2b94782f123f','1','1','2020-04-07 16:25:07'),('9e54853208f64deba55bcb94b4a3e735','1','1','2020-04-07 16:06:11'),('9f2b9315f66346589d9043e204b4d2bf','1','1','2020-04-07 17:33:23'),('a0cb72f84dce4a6d8138083dd3e62343','1','1','2020-04-07 15:26:29'),('a17a7552f3fd4a6b9c2defa06ab3e97a','1','1','2020-04-08 23:50:28'),('a31ca89617fc40d98461f67988d7e2ae','1','1','2020-04-06 19:18:16'),('a4025a585d0d45688dcca0f014d2b4d1','1','1','2020-04-07 16:28:50'),('a402eac7017e45e195b6a5497887c6b3','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 13:50:00'),('a4a0ec4144c34b6e92c6ac4936019dab','1','1','2020-04-03 19:36:18'),('a5153efa07ae49989ffb47111ef690fd','1','1','2020-04-03 19:28:35'),('a5657c026f3e4f6493e651ffe35f13bb','1','1','2020-04-06 14:24:30'),('a5a669edd0ae48ab9ff32162eb3d3556','1','1','2020-04-07 16:04:56'),('a5f074d262074c8c88a582b676324e6a','1','1','2020-04-03 19:27:52'),('a6b2fc1e074e4939a9fd621c2f6e39e9','1','1','2020-04-07 18:08:35'),('a7f64fb6976c4e7c866cfc4ee415c188','1','1','2020-04-06 19:16:11'),('a7fcb9c68cc2408ea72f1e7a7a4b24f5','1','1','2020-04-07 16:36:38'),('a977a20c150a4b34a941c86f35e1d00d','1','1','2020-04-07 18:57:13'),('aa1ab1d831bd465f81979f3c5163e2f8','1','','2020-04-17 20:28:52'),('aab712439a5d498796384f3a89932c4d','1','1','2020-04-04 18:28:51'),('ab54e865971c46d5a3b49b6a24ac470f','1','1','2020-04-07 17:14:50'),('aba7430ebbe44109a1f7cf3d69c71d3e','8d59b4958da9487291828d62a40fc823','1','2020-04-07 18:36:19'),('abde9518c86a45f18a191e69224daf4c','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:02:56'),('ac30e80e4f264ee59ccfc75e76a23453','1','1','2020-04-07 16:17:45'),('ac5424e3ff474139957768b6518eb22c','1','1','2020-04-07 16:56:21'),('ac68ed8322f84ccfa074dc44cce9a2ec','1','1','2020-04-07 12:02:03'),('acf7d96ed8c4427ebb0ecd96d75be6fc','1','','2020-04-06 19:13:28'),('ad873bfa114e43848ea3f1027b0bf09b','1','1','2020-04-07 18:14:26'),('ae13e2e20b38448699670792cfcb5cbc','1','1','2020-04-07 18:13:46'),('aee1f592d64a4acfa5d42815b8b35f5b','1','','2020-04-03 19:42:49'),('aefb20ad393e42c084b1ab6bb745c414','1','1','2020-04-07 18:14:05'),('af3403e37d14457694326930f3fb8125','1','1','2020-04-07 17:14:00'),('af91e4f4846e4f968f774f2186d586fe','1','1','2020-04-07 15:15:11'),('afd4223004384f84905b718bcc71c4b7','1','1','2020-04-07 16:08:14'),('afdac7d2ac194bc3934960e245a5856b','1','1','2020-04-07 16:24:23'),('b08bf2b2cff5486d921b53d349d3ce3c','1','1','2020-04-06 13:50:07'),('b0a4074c6dfa444bb90dd274d6ecba50','8d59b4958da9487291828d62a40fc823','d9661848464e4d499f1b369b8c89bfd5','2020-04-08 14:23:29'),('b0bf8fb4a09d4310ac7425e1768379f4','9b24cf69ca5140cf9f9a5f4ce240c83a','1','2020-04-07 18:38:35'),('b0ceb3a893254555b178f282c4645c97','1','1','2020-04-07 11:53:50'),('b0eb8e2117524141907cf559d3571d34','1','1','2020-04-03 19:42:22'),('b10f9de0afc641539ca6443db944bc0b','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 15:35:57'),('b164501f03cf49ab81e33dd017241c5a','1','1','2020-04-07 16:04:23'),('b1b61a86f9eb4a058e3a4c32b6da2c1f','1','1','2020-04-06 14:23:52'),('b1e02b9253264d7094aa6e91fc330081','1','1','2020-04-07 16:05:32'),('b1f8f16bde7441239d1338f8d03d0722','1','1','2020-04-07 16:12:29'),('b209657e795442f9bdac3685a2d40f24','1','1','2020-04-06 13:37:04'),('b259015428f84054aa73a5995d249f7c','1','1','2020-04-07 15:23:33'),('b2d97a7398ff4321824353a7180796e9','1','1','2020-04-07 15:22:12'),('b2feee241e224224afd7cdd35ab6dd70','1','1','2020-04-06 13:57:03'),('b39f8956636b4c2eafc71ad1053d42f6','1','1','2020-04-03 19:09:57'),('b3fe21611fa14495b786471ddc530d94','1','1','2020-04-10 15:24:32'),('b404617b172b4a2a92708a3f017b517b','1','1','2020-04-03 19:19:42'),('b4b4fda090614e2ab154e64093f8af46','1','1','2020-04-07 12:01:55'),('b4eae5318484437dae335e6dae6c5855','1','1','2020-04-07 17:22:20'),('b5ce2b2494f749f3b1e2ecaf661f5d15','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-07 18:57:47'),('b5eb6564d8974f3aae4b0b8fc4e95bb1','8d59b4958da9487291828d62a40fc823','','2020-04-08 12:11:45'),('b65b3a9ba7284f8cb83acf9e91665a61','1','1','2020-04-07 18:19:26'),('b660af98aab44266807e612fc5881d95','1','1','2020-04-03 19:34:53'),('b6e63b9f058b42a087c152b477ea93ad','1','1','2020-04-03 19:42:33'),('b711c882179e4f7ab08157e8e1a39b2d','1','1','2020-04-03 19:35:06'),('b754413921664ff1b318cf9a4cac788d','1','1','2020-04-07 15:23:54'),('b7e0732f3c1c49e6b221258c2e1f53be','1','1','2020-04-07 16:26:17'),('b91990b56df2449aae7d29f8cf5552a2','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 15:27:47'),('b9c071e8f4e24da0bfd368e3e6a8e368','1','1','2020-04-07 17:03:06'),('ba32c196a94f4f8db519557ba570bd1b','44e770a3718d4c52b570979ae590b491','e34deaa06ae442949201bc699068fca7','2020-04-25 15:39:12'),('baadeb8bc407456f934f469a91695273','1','1','2020-04-07 18:56:44'),('baea1990acf74dd3812764c3af7bfd24','1','1','2020-04-07 16:57:08'),('bb2b9e759d62480b96e270ef8a090d02','1','','2020-04-02 22:36:29'),('bccfca0d922d47248c4017dbfc08b5a8','1','1','2020-04-07 17:43:15'),('bd35df2b033c49c0b7b4a945976dd4ed','1','1','2020-04-08 13:29:22'),('be4511c1e1bc46ca8a268a33ec906c6c','1','1','2020-04-07 16:27:04'),('be4eb1b3e5dc4b249586089f21d677cc','8d59b4958da9487291828d62a40fc823','1','2020-04-16 21:32:59'),('bfe0cabe910e4ae49db663397df4e70c','1','1','2020-04-24 23:26:42'),('bfe1db25ee1e4257bdb2551b89104697','1','1','2020-04-07 11:42:25'),('c0260495eefc4af39858b5aa4e4c6a17','1','1','2020-03-28 17:09:29'),('c0b167dab7aa4dfca466d1e9734092ba','1','1','2020-04-03 19:48:10'),('c0d2d21e7963477399e3415ff22d1f68','1','1','2020-04-07 16:37:11'),('c0dac9c290af499f988e40d6620584e2','1','1','2020-04-07 17:25:04'),('c1109726095d47b89f1f0d3a7341de58','b804abd8550141f6838268f75d27e225','1','2020-04-10 19:06:31'),('c1def42e97204f2e8e3fcd072879d2ad','1','1','2020-04-07 17:36:32'),('c2cd04b3e4524d52906c8b0048f2ee92','1','1','2020-04-07 15:20:03'),('c327e83a608c4fb08603870a3201120f','1','1','2020-04-04 14:56:30'),('c476db12025541a9979bf45e643c1b33','1','1','2020-04-07 16:36:17'),('c4f781e9cdd54cea831bc4d2ed974628','1','1','2020-04-06 13:57:02'),('c57e73e7fda94e1289a9ca33efef3eb4','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-10 19:06:42'),('c5f6fd006648460fb2886533cc270a1b','1','1','2020-04-04 18:28:04'),('c66e8b33641346e8a8b50f32f0d32dd2','1','1','2020-04-07 17:05:23'),('c68cbde801a5459e81367a311b20fbf3','1','1','2020-04-03 19:37:14'),('c697933a7f27467c89d0e51f7dc9a453','1','1','2020-04-07 16:27:53'),('c8089d51b7fe4254939501bea9d8be1f','1','1','2020-04-07 18:49:09'),('c90cf308693a49ceab20c6ed0ca5c895','1','1','2020-04-10 15:18:28'),('cab9b1da21144bbb8282ce9803fa181c','1','1','2020-04-07 16:37:26'),('cacbd285dfca454580b0a97d9baf22e6','1','1','2020-04-07 17:44:48'),('cacc36759f0a4a8ead422528c38be1a7','1','1','2020-03-29 15:27:21'),('cb109025005e4a4baa43754713677249','1','','2020-04-06 19:20:42'),('cb327cd8b5104d589f11f864af053c20','1','1','2020-04-07 16:29:00'),('cbdb0668717041629ae3353d0bef9b28','1','1','2020-04-03 19:34:23'),('cc4fdcbe8a71450e8507b1334040e951','1','feac3d6d287a48b8ba406cd3d82d4694','2020-04-17 14:01:50'),('cccc5d1d30694d678a4f0fbf6a62a4ec','1','1','2020-04-07 16:02:15'),('cd7f65423ce74ee29ffaa21b743c2067','1','1','2020-04-07 16:32:09'),('ce24a9f0b73d4ccf99f4a44041ccb496','1','1','2020-04-03 19:36:37'),('cee39cddcc5e40c09431bd476a498ff9','1','1','2020-04-03 19:19:19'),('cf2a9704d92c405890a91d3e919c9585','1','1','2020-04-03 19:42:24'),('cf48def38f1d4d4986541f79475fc966','1','1','2020-04-07 16:33:04'),('cfb776bc60c94d0fa2f4cc45fe6d3aa9','1','1','2020-04-08 13:59:33'),('d14e592086ca4720aa47c79e6e3eaedf','1','','2020-04-10 13:00:32'),('d23a92ee317245819936198a23e9263f','1','1','2020-04-06 14:26:02'),('d33f58556f674cab9416e28558763d7f','1','1','2020-04-07 16:56:11'),('d3ebf3d650674f3690d7d7ea3bb76680','1','1','2020-04-07 16:35:08'),('d3feae70abd14d3eb8a7d62a49ebe996','1','1','2020-04-07 16:23:40'),('d463b5dac9704124a86d58380a07224c','1','1','2020-04-10 15:19:24'),('d47624de195d42ec8840773d91978b48','1','1','2020-04-07 17:29:56'),('d476410f59a54b6dad245f5f4d2a820d','1','1','2020-04-07 12:17:35'),('d47e39dd8eda450eb22708d11964825e','ed6c54dbfdbd4d55a803bedbac8e8af4','1','2020-04-08 14:23:51'),('d4880bc278854b76abd46f0965238810','1','1','2020-04-06 12:02:09'),('d502734145574c27a653eacf12d5b93f','1','1','2020-04-07 15:27:45'),('d53ccf7ce815462e820b9ba016491f04','1','1','2020-04-04 18:32:47'),('d58099150591490eab270bd2a5a1fa21','1','1','2020-04-07 15:31:30'),('d581c3cde9094618a9192b9ffb0abb1d','1','1','2020-04-10 15:19:23'),('d58eaf0c578c426d8c1e5ce66d36ac0a','1','1','2020-04-06 14:22:42'),('d6276a9259ee4b1e90d8c0b4ac586005','1','1','2020-04-07 11:52:15'),('d715c29b7bf0413582ef2f67e096ccc3','1','1','2020-04-07 16:37:54'),('d772efcf6008405f82b4b99e03fe50f1','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:07:53'),('d7b86afcfedc41d68a9927c530187e50','1','1','2020-04-07 16:31:49'),('d845cab2c6e541ac8cf1ed2cc9d3de95','1','1','2020-04-07 17:33:43'),('d972fe0dbf3240c0a3e6c8124fbab9be','1','1','2020-04-07 15:22:59'),('da01bfd23f194b9bbac6f95e87e056a3','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-20 14:05:55'),('da7501d3e4634c549f5cf2d5e673621f','1','1','2020-04-07 18:55:12'),('daa4c8d10600449385467b7bb780ca0d','1','1','2020-04-07 15:24:40'),('dadcea8e48f64cc2b60d7b27cdce3d9b','1','1','2020-04-06 19:23:40'),('daffb9b3bb95464b92cb0e9aed666223','1','1','2020-04-07 16:24:32'),('db216f438f2d49bc94d680be16995cf2','1','1','2020-04-06 13:39:27'),('db7050896bb04b9caea035f1f96b6d9c','1','1','2020-04-07 15:08:49'),('dba7d41f396940d49e2ffd34a4c5fd48','1','1','2020-04-07 16:18:44'),('dc0226cf48f5410f928d417fbc23d187','1','1','2020-04-07 17:43:23'),('dcaaf0f65aa048658dd331cbc71a9880','1','1','2020-04-07 16:16:40'),('dcaefdc4f4264dd48a60e2e33de1ac6b','1','1','2020-04-07 17:01:48'),('dd05206dc73f4a11aff93f0fcce6cf79','1','1','2020-04-07 16:30:47'),('ddba8704ea02493689093d6eb4308c20','1','1','2020-04-07 15:05:33'),('dee73e04c612477299cd3c70f55c57c0','1','1','2020-04-06 16:36:05'),('df5ff25526494e8ca0d53b45a1dcade8','1','1','2020-04-07 15:23:30'),('dff215fd29674f36a7fcb61ed387fd03','1','1','2020-04-06 14:23:33'),('dff3b4a882804802b4cc9d723465f6aa','1','1','2020-04-04 18:28:44'),('e022c2c2be804f0eb6cfa70b030a7a65','1','1','2020-04-06 14:18:11'),('e09eb39eae1344cba2ccee7d3aa93d22','1','1','2020-04-08 12:36:02'),('e11a87dcc6df466091a6267ba36e41ab','f28907c765194a8880aa50993c9d089a','1','2020-04-24 23:27:00'),('e1a1d7d35c404b06a20b1be05d00c5f7','1','1','2020-04-07 17:35:44'),('e3be5fe8cdc144aaab973f01a7fcf4bc','1','1','2020-04-07 18:57:24'),('e3e408497f4a4b39a249b8db6d6351d6','1','1','2020-04-07 16:38:39'),('e3f68e33c37c4bcaa9c5fc2b71614e73','1','1','2020-04-07 16:34:57'),('e3f68f5f7f91462b847da8626cd9e93b','1','1','2020-04-06 14:21:05'),('e444297555664928a09c52674d02f567','ed6c54dbfdbd4d55a803bedbac8e8af4','d9661848464e4d499f1b369b8c89bfd5','2020-04-15 22:09:22'),('e51773252f58441284ed4d33b329d3a6','1','1','2020-04-06 14:23:24'),('e71dec4fadf1420f8dbb169e974bafc9','1','1','2020-04-03 19:25:10'),('e74b4aeb9033494aa292d3e4d48168c7','1','1','2020-04-07 15:38:09'),('e74edefb928d45d184e5d6648bef853a','1','1','2020-04-07 15:27:56'),('e7d4a19ac6af455ab2f0b64ecb88644c','b804abd8550141f6838268f75d27e225','1','2020-04-10 15:23:37'),('e7e80a964656446595efd70741af1cd8','1','1','2020-04-03 19:35:34'),('e8403ef94efb42cca089f371e161392a','1','1','2020-04-07 16:12:50'),('e8d68637ebeb4811a95075a58b92d5c8','1','1','2020-04-07 16:23:21'),('e916b9a05ddb40a08908f14b47c70a61','8d59b4958da9487291828d62a40fc823','1','2020-04-02 22:06:37'),('e93da313d9794341a92662a6d98ce7a5','1','1','2020-04-07 16:05:51'),('e9928b15751c49e8bc3119273c7181ea','1','1','2020-04-07 16:08:38'),('ea0078a5c08448ddb517ed50be2f1b04','1','1','2020-04-03 19:40:44'),('eac1b6f6c62e444bb4e3193d88a3a637','1','','2020-04-10 12:22:42'),('ead82f9d3998485098b7bb954e739dc1','1','1','2020-04-03 19:21:39'),('eb4380e0bcd5479badccdd7091048930','1','1','2020-04-07 15:40:14'),('ebc4d35c168b4926804728eb6128b8c9','1','1','2020-04-07 18:55:06'),('ebe0241a8de64596b5044ad93edd0a14','1','1','2020-04-03 19:35:46'),('ebf2f2a74b0e45e68398dbb39ae3dbe3','1','1','2020-04-03 19:42:20'),('ec31ab8cb2884c32a27a0a20634dae4d','1','1','2020-04-06 16:30:40'),('ec5eb47d98614845afcff451a2b6fc58','1','1','2020-04-06 13:47:22'),('ecb3c695727047148f22550a675a38db','1','1','2020-04-07 16:26:52'),('edb3605acc7b43d68920dd7fac646c6a','1','1','2020-04-07 16:18:27'),('edb3e376ae68432caa9868b3b7975ad5','a0c356fc175f43098eeb2a656fc59ca6','d9661848464e4d499f1b369b8c89bfd5','2020-04-15 22:16:49'),('edc80a3ad1294b42817625e0ed069c05','1','1','2020-04-07 17:46:09'),('ee2e57dcfec6400695a21ab9e4c6e060','1','1','2020-04-07 17:30:11'),('eea40224c72f44e7a3b590ee8f9f632a','1','','2020-04-06 19:22:32'),('efb6f3393bbb47219ad07d2299ce6e7b','1','073e3a7f370248cb8de073842e046d60','2020-04-17 17:33:18'),('f1b3761af1754fe5987be6e52061c1bf','1','1','2020-04-07 16:55:39'),('f1f48d13ee9749798ab26179eebc8dc8','1','1','2020-04-07 16:06:48'),('f233bb07ebfe44bd9db4b90b5d070488','1','1','2020-04-07 16:36:57'),('f2c60fd39914465d9b618be58bd635ae','1','1','2020-04-07 15:23:11'),('f32dbea99e5f4585813d8de713155200','1','1','2020-04-07 16:25:05'),('f36d0f5c6d1145ecba957dd885136048','1','1','2020-04-03 19:31:51'),('f3b454af0fcf4aabbaa65222f1abcc2f','1','1','2020-04-07 16:50:53'),('f420890dba644b1d9066cdb69ff3f174','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 17:02:15'),('f4600fb3ec9146678db3ca0c07a491ef','1','1','2020-04-07 17:46:37'),('f4a9d168ab184e80b463ac43d04dab05','1','1','2020-04-07 16:54:48'),('f4ac7daabe3f44a980ceac97f1a0eeee','1','1','2020-04-07 16:53:52'),('f5508524329e414c98e4b2173b2eb1e7','1','1','2020-04-07 16:40:58'),('f575c2fd9d464cdf94e69b2f8f33a064','f28907c765194a8880aa50993c9d089a','0e1f00d8d1684e739eaf34b9639fca9b','2020-04-19 18:29:10'),('f5cb70b49d5f4473813c7a870bfc0d05','1','1','2020-04-07 18:54:18'),('f64220e609b54ac6a709171bcc7d0104','1','1','2020-04-07 11:52:23'),('f6a03a778ba94cd3b45b576ca6c4ac43','1','1','2020-04-06 14:19:21'),('f722a29c1152446188e8d69a6fe56e1b','1','1','2020-04-03 19:20:03'),('f76ce2e0a05749c689ed7b43fe3dde80','1','1','2020-04-06 14:15:51'),('f84c802461174fc6b5f26be78aca4642','1','1','2020-04-03 19:42:35'),('f8a4dcab0a6d4aeeb8816d887dbbf460','1','1','2020-04-07 17:16:55'),('faacb05061ba4b9d910f03f5c43747a7','1','1','2020-04-06 14:18:01'),('fb15733fe7b540298f2d7aed097883ed','1','1','2020-04-03 19:38:48'),('fb6e0a20f9d14407b5666d8d3d11b856','1','1','2020-04-07 16:42:48'),('fbedbdbf0df24864a272b7482501824a','1','1','2020-04-07 11:57:56'),('fc57ec464121429e89ac33a26f23e4cb','1','1','2020-04-03 19:15:28'),('fcb75d3e1dc4416fa57568c322e35d8f','5671a30c9b2c48148ad7b293a6e844fd','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 14:16:23'),('fd31f81c574f43d8995ec09e43895da0','1','1','2020-04-07 15:12:55'),('fdb7e83390d14a97a43214db60f06919','1','1','2020-04-02 22:06:28'),('fe7131a66452427d94972f0c0849df65','8d59b4958da9487291828d62a40fc823','1','2020-04-01 18:03:20'),('feb92d3a01f24a9c85cf87ae13acf068','1','1','2020-04-07 16:31:22'),('feb9a72af62d49669e14a1547d46c8f1','1','1','2020-04-06 14:19:13'),('fec614fa9f7b429d88d1c6f01d45759a','1','1','2020-04-07 16:30:20'),('fee42305dc0e459dbf8236a5752744af','1','1','2020-04-07 18:18:23'),('ff3b689bd0ec49449e9adc85e6ace0c7','a0c356fc175f43098eeb2a656fc59ca6','1','2020-04-13 18:46:48'),('ff8cfff55b5d47d4ae9ead4dafa166d2','1','1','2020-04-07 17:28:24');

/*Table structure for table `pet_shop_comment` */

DROP TABLE IF EXISTS `pet_shop_comment`;

CREATE TABLE `pet_shop_comment` (
  `id` varchar(64) NOT NULL COMMENT '宠物店评论',
  `shop_id` varchar(64) DEFAULT NULL COMMENT '店铺id',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户id',
  `comment_content` varchar(64) DEFAULT NULL COMMENT '评论内容',
  `star_rating` varchar(32) DEFAULT NULL COMMENT '评星',
  `create_time` datetime DEFAULT NULL COMMENT '评论时间',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户名',
  `user_img` text COMMENT '用户头像',
  `order_id` varchar(32) DEFAULT NULL COMMENT '预约id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_comment` */

insert  into `pet_shop_comment`(`id`,`shop_id`,`user_id`,`comment_content`,`star_rating`,`create_time`,`user_name`,`user_img`,`order_id`) values ('54f7e75489034962959f02e690bc88ef','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','服务很好，推荐大家','4.6','2020-04-25 15:35:51','管理员','/img/user/84ca4ee8a1ae42acac0ec2728f4039d4.jpg','fe6887eca0bb4ba19bd63b1c9c0b1dbc');

/*Table structure for table `pet_shop_comment_reply` */

DROP TABLE IF EXISTS `pet_shop_comment_reply`;

CREATE TABLE `pet_shop_comment_reply` (
  `id` varchar(64) NOT NULL COMMENT '宠物店评论回复',
  `shop_comment_id` varchar(64) DEFAULT NULL COMMENT '宠物店评论id',
  `reply_user_id` varchar(64) DEFAULT NULL COMMENT '回复用户id',
  `reply_content` varchar(64) DEFAULT NULL COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_comment_reply` */

/*Table structure for table `pet_shop_member` */

DROP TABLE IF EXISTS `pet_shop_member`;

CREATE TABLE `pet_shop_member` (
  `id` varchar(32) NOT NULL COMMENT '宠物店会员',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `level` int(11) DEFAULT NULL COMMENT '会员等级',
  `score` int(11) DEFAULT NULL COMMENT '会员积分',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `processing_time` datetime DEFAULT NULL COMMENT '办理时间',
  `balance` decimal(18,2) DEFAULT NULL COMMENT '会员账号余额',
  `total` decimal(18,2) DEFAULT NULL COMMENT '消费总额',
  `member_number` varchar(32) DEFAULT NULL COMMENT '会员账号',
  `status` varchar(10) DEFAULT '1' COMMENT '会员状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member` */

insert  into `pet_shop_member`(`id`,`user_id`,`level`,`score`,`shop_id`,`processing_time`,`balance`,`total`,`member_number`,`status`) values ('2793f3811ab14f96ab6d94784f7fde0e','604b94fd27314c95a5ffc48d27ba444f',4,10,'44e770a3718d4c52b570979ae590b491','2020-04-25 15:13:55','1583.00','2000.00','88881','1'),('d6aadbc0dd314a95a881565001d462ff',NULL,1,0,'44e770a3718d4c52b570979ae590b491','2020-04-25 15:13:44','0.00','0.00','88888','1');

/*Table structure for table `pet_shop_member_activity` */

DROP TABLE IF EXISTS `pet_shop_member_activity`;

CREATE TABLE `pet_shop_member_activity` (
  `id` varchar(32) NOT NULL COMMENT '宠物店会员推广活动',
  `name` varchar(64) DEFAULT NULL COMMENT '活动名称',
  `activity_time` varchar(255) DEFAULT NULL COMMENT '活动时间',
  `score` int(11) DEFAULT NULL COMMENT '多少积分兑换',
  `remarks` text COMMENT '备注',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `is_end` tinyint(1) DEFAULT NULL COMMENT '是否结束',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member_activity` */

insert  into `pet_shop_member_activity`(`id`,`name`,`activity_time`,`score`,`remarks`,`shop_id`,`is_end`,`create_time`) values ('2d5bde36fd114c37b2e314cfe69ad4a3','促销活动','2020.4.20至2020.4.25',3,'兑换周边商品2个','44e770a3718d4c52b570979ae590b491',1,'2020-04-25 15:32:22'),('45bed2d5d5894c798fc6789af80e5200','周年活动','2020.4.25至2020.4.30',5,'兑换猫粮一份','44e770a3718d4c52b570979ae590b491',0,'2020-04-25 15:31:10');

/*Table structure for table `pet_shop_member_activity_record` */

DROP TABLE IF EXISTS `pet_shop_member_activity_record`;

CREATE TABLE `pet_shop_member_activity_record` (
  `id` varchar(32) NOT NULL COMMENT '会员推广活动兑换记录',
  `activity_id` varchar(32) DEFAULT NULL COMMENT '活动id',
  `member_id` varchar(32) DEFAULT NULL COMMENT '会员id',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `score` int(11) DEFAULT NULL COMMENT '单个积分',
  `total_score` int(11) DEFAULT NULL COMMENT '结算积分',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member_activity_record` */

insert  into `pet_shop_member_activity_record`(`id`,`activity_id`,`member_id`,`number`,`create_time`,`shop_id`,`score`,`total_score`) values ('6b500414f8574977bebb60ca518a4d95','45bed2d5d5894c798fc6789af80e5200','2793f3811ab14f96ab6d94784f7fde0e',1,'2020-04-25 15:32:54','44e770a3718d4c52b570979ae590b491',5,5),('8ef1099cec7243968a9df21cb616ff01','45bed2d5d5894c798fc6789af80e5200','2793f3811ab14f96ab6d94784f7fde0e',1,'2020-04-25 15:31:30','44e770a3718d4c52b570979ae590b491',5,5);

/*Table structure for table `pet_shop_member_discount` */

DROP TABLE IF EXISTS `pet_shop_member_discount`;

CREATE TABLE `pet_shop_member_discount` (
  `id` varchar(32) NOT NULL COMMENT '宠物店会员优惠方案',
  `upper_limit_one` decimal(18,2) DEFAULT '100.00' COMMENT '一级会员消费上限',
  `upper_limit_two` decimal(18,2) DEFAULT '500.00' COMMENT '二级会员消费上限',
  `upper_limit_three` decimal(18,2) DEFAULT '1000.00' COMMENT '三级会员消费上限',
  `upper_limit_four` decimal(18,2) DEFAULT '2000.00' COMMENT '四级会员消费上限',
  `name_one` varchar(20) DEFAULT '一级会员' COMMENT '一级会员名称',
  `name_two` varchar(20) DEFAULT '二级会员' COMMENT '二级会员名称',
  `name_three` varchar(20) DEFAULT '三级会员' COMMENT '三级会员名称',
  `name_four` varchar(20) DEFAULT '四级会员' COMMENT '四级会员名称',
  `discount_one` float DEFAULT '0.9' COMMENT '一级会员打折率',
  `discount_two` float DEFAULT '0.85' COMMENT '二级会员打折率',
  `discount_three` float DEFAULT '0.8' COMMENT '三级会员打折率',
  `discount_four` float DEFAULT '0.75' COMMENT '四级会员打折率',
  `integral_sum` decimal(18,2) DEFAULT '100.00' COMMENT '金额/积分',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member_discount` */

insert  into `pet_shop_member_discount`(`id`,`upper_limit_one`,`upper_limit_two`,`upper_limit_three`,`upper_limit_four`,`name_one`,`name_two`,`name_three`,`name_four`,`discount_one`,`discount_two`,`discount_three`,`discount_four`,`integral_sum`,`shop_id`) values ('3771e12c121f4aa0a7d49bd7eedda0ab','100.00','500.00','1000.00','2000.00','一级会员','二级会员','三级会员','四级会员',0.9,0.85,0.8,0.75,'100.00','5671a30c9b2c48148ad7b293a6e844fd'),('a34715d251ca4c3db61d9ffb6bc15a88','100.00','500.00','1000.00','2000.00','一级会员','二级会员','三级会员','四级会员',0.9,0.85,0.8,0.75,'100.00','f86e10027f9d46228fb8e0112c7f9249'),('beabbb8a36e147a2a93051b2eb19b0ca','100.00','500.00','1000.00','2000.00','一级会员','二级会员','三级会员','四级会员',0.9,0.85,0.8,0.75,'100.00','44e770a3718d4c52b570979ae590b491');

/*Table structure for table `pet_shop_member_opinion` */

DROP TABLE IF EXISTS `pet_shop_member_opinion`;

CREATE TABLE `pet_shop_member_opinion` (
  `id` varchar(64) NOT NULL COMMENT '宠物店会员意见',
  `shop_id` varchar(64) DEFAULT NULL COMMENT '店铺id',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户id',
  `opinion_content` varchar(64) DEFAULT NULL COMMENT '意见内容',
  `reply_content` varchar(64) DEFAULT NULL COMMENT '回复内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `reply_time` datetime DEFAULT NULL COMMENT '回复时间',
  `reply_status` tinyint(1) DEFAULT '0' COMMENT '回复状态',
  `shop_member_id` varchar(32) DEFAULT NULL COMMENT '会员id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member_opinion` */

insert  into `pet_shop_member_opinion`(`id`,`shop_id`,`user_id`,`opinion_content`,`reply_content`,`create_time`,`reply_time`,`reply_status`,`shop_member_id`) values ('34c09ebeefb34b4ea6197ddcc370a2cc','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','希望推出一些积分活动',NULL,'2020-04-25 15:29:47',NULL,0,'2793f3811ab14f96ab6d94784f7fde0e');

/*Table structure for table `pet_shop_member_record` */

DROP TABLE IF EXISTS `pet_shop_member_record`;

CREATE TABLE `pet_shop_member_record` (
  `id` varchar(64) NOT NULL COMMENT '宠物店会员充值记录',
  `user_id` varchar(64) DEFAULT NULL COMMENT '用户id',
  `time` datetime DEFAULT NULL COMMENT '充值时间',
  `amount` decimal(18,2) DEFAULT NULL COMMENT '充值金额',
  `personnel_id` varchar(64) DEFAULT NULL COMMENT '办理人员id',
  `card_number` varchar(32) DEFAULT NULL COMMENT '会员卡号',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_member_record` */

insert  into `pet_shop_member_record`(`id`,`user_id`,`time`,`amount`,`personnel_id`,`card_number`,`shop_id`) values ('6df198760dcb435b83809e3c139e02f7','604b94fd27314c95a5ffc48d27ba444f','2020-04-25 15:14:20','2000.00','e34deaa06ae442949201bc699068fca7','88881','44e770a3718d4c52b570979ae590b491');

/*Table structure for table `pet_shop_service` */

DROP TABLE IF EXISTS `pet_shop_service`;

CREATE TABLE `pet_shop_service` (
  `id` varchar(32) DEFAULT NULL COMMENT '宠物服务',
  `service_category` varchar(20) DEFAULT NULL COMMENT '服务类型',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `price_unit` varchar(255) DEFAULT NULL COMMENT '价格单位',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `status` varchar(20) DEFAULT NULL COMMENT '状态',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `service_num` varchar(32) DEFAULT NULL COMMENT '服务编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_service` */

insert  into `pet_shop_service`(`id`,`service_category`,`price`,`price_unit`,`shop_id`,`status`,`create_time`,`service_num`) values ('ee5b7a7a3e3d4e6f8967adaf920f1514','宠物美容','200.00','一次','44e770a3718d4c52b570979ae590b491','待售','2020-04-25 15:17:35','KD2343'),('a96aa45ad2fe4d94a5da3fa3b3bd8ff4','宠物美容','200.00','一次','5671a30c9b2c48148ad7b293a6e844fd','待售','2020-04-25 19:36:20','FA32');

/*Table structure for table `pet_shop_user_order` */

DROP TABLE IF EXISTS `pet_shop_user_order`;

CREATE TABLE `pet_shop_user_order` (
  `id` varchar(32) NOT NULL COMMENT '宠物店用户预约',
  `shop_id` varchar(32) DEFAULT NULL COMMENT '宠物店id',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `category` varchar(10) DEFAULT NULL COMMENT '预约类别',
  `time_explain` varchar(255) DEFAULT NULL COMMENT '预约时间说明',
  `result` varchar(32) DEFAULT NULL COMMENT '预约结果',
  `remarks` varchar(255) DEFAULT NULL COMMENT '预约备注',
  `reply_status` varchar(32) DEFAULT NULL COMMENT '预约回复状态',
  `create_time` datetime DEFAULT NULL COMMENT '预约发起时间',
  `reply_content` varchar(255) DEFAULT NULL COMMENT '回复内容',
  `user_name` varchar(32) DEFAULT NULL COMMENT '用户昵称',
  `user_phone` varchar(32) DEFAULT NULL COMMENT '用户手机号码',
  `reply_time` datetime DEFAULT NULL COMMENT '回复时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pet_shop_user_order` */

insert  into `pet_shop_user_order`(`id`,`shop_id`,`user_id`,`category`,`time_explain`,`result`,`remarks`,`reply_status`,`create_time`,`reply_content`,`user_name`,`user_phone`,`reply_time`) values ('85cd3b3e7f9f4ef3a108c3323eb87eac','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','宠物寄养','2020.4.26下午','预约中','寄养猫','待答复','2020-04-25 15:36:29',NULL,'管理员','15975400724',NULL),('ba69903d6fab4d8abc7f5b23f8c176db','44e770a3718d4c52b570979ae590b491','68068eb3417944b397039e641b99b8a6','宠物寄养','2020.4.27','预约中','寄养一下宠物狗','待答复','2020-04-25 15:28:39',NULL,'普通用户1','15975400721',NULL),('fe6887eca0bb4ba19bd63b1c9c0b1dbc','44e770a3718d4c52b570979ae590b491','604b94fd27314c95a5ffc48d27ba444f','购买商品','2020.4.26下午三点左右','接受','购买一些猫粮','已完成','2020-04-25 15:27:47','好的，请准时到店','管理员','15975400724','2020-04-25 15:34:48');

/*Table structure for table `platform_member` */

DROP TABLE IF EXISTS `platform_member`;

CREATE TABLE `platform_member` (
  `id` varchar(64) NOT NULL COMMENT '平台会员',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `platform_member` */

/*Table structure for table `resource` */

DROP TABLE IF EXISTS `resource`;

CREATE TABLE `resource` (
  `id` varchar(32) NOT NULL COMMENT '权限拦截规则',
  `value` varchar(255) DEFAULT NULL COMMENT 'url路径',
  `perms` varchar(255) DEFAULT NULL COMMENT '权限',
  `order_num` int(5) NOT NULL DEFAULT '0' COMMENT '权限属性排序',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `resource` */

insert  into `resource`(`id`,`value`,`perms`,`order_num`,`create_time`) values ('0b887c5e434c4661b0cee3f1a4e2e5b6','/open/addOrder.html','authc',1,NULL),('2','/system/**','roles[admin]',0,NULL),('4','/userCount','anon',1,NULL),('40476f3ec8a04b5e9f57cb33404e4501','/open/weChatDetails.html','anon',1,NULL),('637f325120f14ce58bfc86fc353efdcf','/open/**','anon',0,NULL),('917e761d71d14ebe9cf04e8d2a2d512b','/open/wechatMoments.html','authc',1,NULL),('cbda7f064f5342c39e9f648d3366adbc','/open/applyPetShop.html','authc',1,NULL),('d51ff8159c684dc292105fb1b9be6ad3','/user/user/user22','authc',2,NULL),('f3ae15d5d206435a977374cbdab919de','/petShop/**','hasAnyRoles[petShop,admin]',0,NULL),('f5d3e9bf06d742b29e287f0df43c96e8','/open/userCenter.html','authc',1,NULL),('fda1f77286734ef281c5279d620e4a36','/open/order.html','authc',1,NULL);

/*Table structure for table `system_feedback` */

DROP TABLE IF EXISTS `system_feedback`;

CREATE TABLE `system_feedback` (
  `id` varchar(64) NOT NULL COMMENT '系统反馈',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `system_feedback` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` varchar(32) NOT NULL COMMENT '用户信息',
  `user_name` varchar(255) DEFAULT NULL COMMENT '用户昵称',
  `user_number` varchar(255) DEFAULT NULL COMMENT '用户账号',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `phone` varchar(32) DEFAULT NULL COMMENT '联系电话',
  `address` varchar(64) DEFAULT NULL COMMENT '联系地址',
  `img_path` varchar(255) DEFAULT NULL COMMENT '头像地址',
  `email` varchar(32) DEFAULT NULL COMMENT '邮箱',
  `is_forbidden` tinyint(1) DEFAULT NULL COMMENT '是否禁用',
  `salt` varchar(128) DEFAULT NULL COMMENT '加密盐值',
  `sex` int(1) DEFAULT NULL COMMENT '性别（1男2女,0：隐藏）',
  `age` int(3) DEFAULT NULL COMMENT '年龄',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '用户状态(有效，注销)',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`user_name`,`user_number`,`password`,`phone`,`address`,`img_path`,`email`,`is_forbidden`,`salt`,`sex`,`age`,`status`,`create_time`,`update_time`,`last_login_time`) values ('604b94fd27314c95a5ffc48d27ba444f','管理员','gly','acf9c8c660ae9cfe643be90682433609','15975400724','广州天河','/img/user/84ca4ee8a1ae42acac0ec2728f4039d4.jpg','1685027245@qq.com',0,'15975400724',0,0,1,'2020-04-25 14:00:55','2020-04-25 14:36:17','2020-04-26 11:24:23'),('68068eb3417944b397039e641b99b8a6','普通用户1','未设置','7ba8dcdf7bac9ab781f107ff619c069a','15975400721','未设置','/img/user/01329154e8eb42089a05a98246672a1b.jpg','1685027245@qq.com',0,'15975400721',1,0,1,'2020-04-25 14:20:22','2020-04-25 14:39:43','2020-04-25 15:28:07'),('843431e563544af4852f992231efa0a0','宠物店2','未设置','b4b5c9a05f5cc19680318e33505f4a5f','15975400725','未设置','/statics/img/defaultImg.png','未设置',0,'15975400725',0,0,1,'2020-04-25 14:26:46',NULL,'2020-04-25 15:46:39'),('bf39588f0bae423cb5771bead3800927','普通用户2','未设置','b774d7f4ec78c4fc86c335e57a1c930b','15975400722','未设置','/statics/img/defaultImg.png','168@qq.com',0,'15975400722',2,0,1,'2020-04-25 14:21:01','2020-04-25 14:40:23','2020-04-25 14:40:07'),('e34deaa06ae442949201bc699068fca7','宠物店1','未设置','d5310e0db317a29cee01d5edb0b1b194','15975400723','未设置','/img/user/9a7e807a1c8c4603afec0614d5d3f0e7.jpg','未设置',0,'15975400723',0,0,1,'2020-04-25 14:21:46','2020-04-25 15:38:28','2020-04-25 15:38:48');

/*Table structure for table `user_friend_relation` */

DROP TABLE IF EXISTS `user_friend_relation`;

CREATE TABLE `user_friend_relation` (
  `id` varchar(64) NOT NULL COMMENT '用户好友关联',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_friend_relation` */

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `id` varchar(64) NOT NULL COMMENT '角色表',
  `role_name` varchar(32) DEFAULT NULL COMMENT '角色名称',
  `alias` varchar(32) DEFAULT NULL COMMENT '角色中文名',
  `status` int(3) NOT NULL DEFAULT '1' COMMENT '状态（1:启用，2：禁用）',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role` */

insert  into `user_role`(`id`,`role_name`,`alias`,`status`,`create_time`,`update_time`) values ('1','petShop','宠物店店主',1,'2020-03-19 10:15:20',NULL),('2','admin','管理员',1,'2020-03-19 10:15:20',NULL),('3','general','普通用户',1,'2020-03-19 10:15:20',NULL),('4','applyingPetShop','宠物店申请中',1,'2020-03-19 10:15:20','2020-04-24 14:24:19'),('5','forbiddenPetShop','宠物店禁用',1,'2020-03-19 10:15:20','2020-04-24 14:47:40'),('de650439bfff4ed4b64811dfb3e861e5','superUser','超级用户',1,'2020-04-25 13:48:24',NULL);

/*Table structure for table `user_role_permission_relation` */

DROP TABLE IF EXISTS `user_role_permission_relation`;

CREATE TABLE `user_role_permission_relation` (
  `id` varchar(64) NOT NULL COMMENT '角色权限关联',
  `role_id` varchar(32) DEFAULT NULL COMMENT '角色id',
  `permission_id` varchar(32) DEFAULT NULL COMMENT '权限id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role_permission_relation` */

insert  into `user_role_permission_relation`(`id`,`role_id`,`permission_id`) values ('1','2','1');

/*Table structure for table `user_role_relation` */

DROP TABLE IF EXISTS `user_role_relation`;

CREATE TABLE `user_role_relation` (
  `id` varchar(32) NOT NULL COMMENT '用户角色关联',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `role_id` varchar(32) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role_relation` */

insert  into `user_role_relation`(`id`,`user_id`,`role_id`) values ('0a675645ecc24fcc9589f81cc618544f','843431e563544af4852f992231efa0a0','4'),('2b289e86b3af42e58ee0613fa6604187','68068eb3417944b397039e641b99b8a6','3'),('9b8d797c9f39497689e5e667c7bd9456','bf39588f0bae423cb5771bead3800927','3'),('a83489e96ad54d57a0245d1312007805','604b94fd27314c95a5ffc48d27ba444f','2'),('b912aebba5ce4e49956a92b2146a0179','e34deaa06ae442949201bc699068fca7','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
