package com.zy.service;

import com.zy.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface PetShopService {
    /* *
     *功能描述:根据条件查询所有宠物信息
     * @author zy
     * @date
     */
    List<Pet> queryAllPet(String shopId,int startRow,int pageSize,String keyword,String category,String price,String shape,String hairLength);

    /**
     * 获取宠物数量
     * @return
     */
    int getPetCount(String shopId,String keyword,String category,String price,String shape,String hairLength);
    /* *
     *功能描述: 根据id查询宠物信息
     * @author zy
     * @date
     */
    Pet queryPetByCondition(String id);

    /* *
     *功能描述: 添加宠物库存
     * @author zy
     * @date
     */
    int savePets(Pet pet);

    /**
     *删除宠物
     * @param id
     * @return
     */
    int delPetById(String id);

    /**
     * 更新宠物信息
     * @param pet
     * @return
     */
    int updatePet(Pet pet);

    /* *
     *功能描述: 根据宠物类别和名称信息查询宠物百科
     * @author zy
     * @date
     */
    List<PetEncyclopedias> getPetEncyclopedias(String category,String name);

    /* *
     *功能描述: 根据宠物信息查询宠物百科
     * @author zy
     * @date
     */
    List<PetEncyclopedias> getEncyclopedias(int startRow,int pageSize,String category,String shape,String hairLength,String coatColor,String function,String environment,String varieties,String keyword);

    /**
     * 宠物百科数量
     * @param category
     * @param shape
     * @param hairLength
     * @param coatColor
     * @param function
     * @param keyword
     * @return
     */
    int getEncyclopediasCount(String category,String shape,String hairLength,String coatColor,String function,String environment,String varieties,String keyword);
    /**
     * 宠物百科详情
     * @param id
     * @return
     */
    PetEncyclopedias getEncyclopediasById(String id);
    /**
     * 获取宠物店列表
     * @param petShop
     * @return
     */
    List<PetShop> getAllPetShop(PetShop petShop);
    /* *
     *功能描述: 根据用户id获取宠物店
     * @author zy
     * @date
     */
    PetShop getPetShopByUserId(String userId);

    /* *
     *功能描述: 根据宠物店id获取宠物店
     * @author zy
     * @date
     */
    PetShop getPetShopByShopId(@Param("petShopId")String petShopId);
    /* *
     *功能描述:根据宠物店id查询当前订单
     * @author zy
     * @date
     */
    List<PetSalesRecords> getPetSalesRecordsByShopId(String shopId,Boolean isComplete);

    /**
     * 更新宠物店信息
     * @param petShop
     * @return
     */
    int updatePetShop(PetShop petShop);
    /* *
     *功能描述: 将商品添加到当前订单
     * @author zy
     * @date
     */
    int addGoodsToSalesRecords(PetSalesRecords petSalesRecords);

    /* *
     *功能描述: 更改宠物销售状态
     * @author zy
     * @date
     */
    int updatePetSalesStatus(String id,String status);

    /* *
     *功能描述: 将商品从当前订单中删除
     * @author zy
     * @date
     */
    int delGoodsFromSalesRecordsByProductId(String productId);

    /**
     * 根据id查询订单
     * @param id
     * @return
     */
    PetSalesRecords getSalesRecordsById(String id);

    /**
     * 修改订单
     * @param petSalesRecords
     * @return
     */
    int updateSalesRecordsById(PetSalesRecords petSalesRecords);

    /**
     * 根据条件获取宠物店会员信息
     * @param petShopMember
     * @return
     */
    List<PetShopMember> getPetShopMemberInfo(PetShopMember petShopMember);

    /**
     * 宠物店添加会员用户
     * @param petShopMember
     * @return
     */
    int addShopMemberUser(PetShopMember petShopMember);

    /**
     * 更新宠物店会员信息（会员充值,账号绑定）
     * @param petShopMember
     * @return
     */
    int updatePetShopMember(PetShopMember petShopMember);

    /**
     * 更新宠物店会员信息（会员结账）
     * @param petShopMember
     * @return
     */
    int updatePetShopMemberBalance(PetShopMember petShopMember);

    /**
     * 添加宠物店会员充值记录
     * @param petShopMemberRecord
     * @return
     */
    int addPetShopMemberRecord(PetShopMemberRecord petShopMemberRecord);

    /**
     * 获取宠物店充值记录
     * @param petShopMemberRecord
     * @return
     */
    List<PetShopMemberRecord> getPetShopMemberRecord(PetShopMemberRecord petShopMemberRecord);

    /**
     *根据id删除销售记录
     * @param id
     * @return
     */
    int delSalesRecordsById(String id);
    /**
     * 根据条件获取宠物店食品列表
     * @param shopId
     * @param startRow
     * @param pageSize
     * @return
     */
    List<PetFood> getFoodInformation(String shopId,int startRow,int pageSize,String keyword,String category,String price,String flavor);

    /**
     * 获取食品列表总数
     * @return
     */
    int getFoodCount(String shopId,String keyword,String category,String price,String flavor);

    /**
     * 根据id查询宠物店食品列表
     * @param id
     * @return
     */
    PetFood getFoodInformationById(String id);

    /**
     * 新增宠物店食品信息
     * @param petFood
     * @return
     */
    int addPetFood(PetFood petFood);

    /**
     * 删除食品信息
     * @param id
     * @return
     */
    int delFoodById(String id);

    /**
     * 修改食品信息更新
     * @param petFood
     * @return
     */
    int updateAllFood(PetFood petFood);
    /**
     * 更新食品状态
     * @param id
     * @return
     */
    int updateFoodSalesStatus(String id,String status);

    /**
     * 更新食品信息,食品结算时更新
     * @param id
     * @param stock
     * @param status
     * @return
     */
    int updateFood(String id,int stock, String status);

    /**
     * 清空当前宠物店所有订单
     * @param shopId
     * @return
     */
    int delAllCurrentOrder(String shopId);

    /**
     * 将当前宠物店所有宠物信息为当前订单的改为待售
     * @param shopId
     * @return
     */
    int updateAllPetStatusToBefore(String shopId);

    /**
     * 将当前宠物店所有食品信息为当前订单的改为待售
     * @param shopId
     * @return
     */
    int updateAllFoodStatusToBefore(String shopId);

    /**
     * 周边商品改为待售
     * @param shopId
     * @return
     */
    int updateAllPeripheryStatusToBefiore(String shopId);

    /**
     * 服务设置未待售
     * @param shopId
     * @return
     */
    int updateAllServiceStatusToBefiore(String shopId);
    /**
     * 统计宠物店各宠物的数量及其宠物百科
     * @param shopId
     */
    List<PetEncyclopedias> getPetStockByPetShopId(String shopId);

    /**
     * 获取宠物店的会员优惠方案
     * @param shopId
     * @return
     */
    PetShopMemberDiscount getPetShopMemberDiscount(String shopId);

    /**
     * 更新宠物店会员等级名称
     * @param petShopMemberDiscount
     * @return
     */
    int updateShopMemberName(PetShopMemberDiscount petShopMemberDiscount);


    /**
     * 获取宠物店反馈意见
     * @param shopId
     * @return
     */
    List<PetShopMemberOpinion> getPetShopMemberOpinion(String shopId,String replyStatus,String userId);

    /**
     * 根据id获取宠物店会员信息
     * @param id
     * @return
     */
    PetShopMember getPetShopMemberById(String id);

    /**
     * 更新宠物店会员反馈意见
     * @return
     */
    int updatePetShopMemberOpinion(PetShopMemberOpinion petShopMemberOpinion);

    /**
     * 删除会员反馈意见
     * @param id
     * @return
     */
    int delPetShopMemberOpinion(String id);
    /**
     *根据月份时间来获取宠物店销售情况数据
     * @return
     */
    List<Map<String, Object>> getPetSalesAnalysisByMonths(String category,String shopId,String startTime,String endTime,String name,String selectType);

    /**
     * 宠物销售分类占比
     * @return
     */
    List<Map<String, Object>> getPetSalesAnalysisByEncyclopedias(String selectCountName,String selectName,String groupName,String petShopId,String salesStatus,int pageSize);

    /**
     * 食品销售分类占比
     * @return
     */
    List<Map<String, Object>> getFoodSalesAnalysisByCategory(String selectName,String petShopId,int pageSize);

    /**
     * 最畅销产品
     * @param shopId
     * @param pageSize
     * @return
     */
    List<Map<String, Object>> getFoodSalesAnalysisHighes(String shopId, @Param("pageSize")int pageSize);


    /**
     * 查询宠物店浏览统计
     * @param shopId
     * @param startTime
     * @param endTime
     * @return
     */
    List<Map<String, Object>> getPetShopBrowseByShopId(String shopId,String startTime,String endTime,String selectType);

    /**
     * 查询宠物店今日浏览统计
     * @param shopId
     * @return
     */
    List<Map<String, Object>> getPetShopBrowseByDay(String shopId);

    /**
     * 获取宠物店服务
     * @return
     */
    List<ShopService> getPetShopService(String shopId);

    /**
     * 获取宠物店服务byId
     * @return
     */
    ShopService getPetShopServiceById(String id);

    /**
     * 删除宠物店服务
     * @param id
     * @return
     */
    int delServiceById(String id);
    /**
     * 更新服务状态
     * @param id
     * @return
     */
    int upDateShopServiceStatus(String id,String status);

    /**
     * 新增宠物服务
     * @param shopService
     * @return
     */
    int addShopService(ShopService shopService);

    /**
     * 获取宠物周边商品
     * @param shopId
     * @param keyword
     * @param price
     * @return
     */
    List<PetPeriphery> getPetPeriphery(int startRow,int pageSize,String shopId,String keyword,String color,String price);

    /**
     * 根据id查询宠物周边商品
     * @param id
     * @return
     */
    PetPeriphery getPetPeripheryById(String id);

    /**
     * 更新宠物周边商品状态
     * @param id
     * @param status
     * @return
     */
    int updatePetPeripheryStatus(String id,String status);
    /**
     * 获取宠物周边商品数量
     * @param shopId
     * @return
     */
    int getPetPeripheryCount(String shopId,String keyword,String color,String price);

    /**
     * 删除宠物周边信息
     * @param id
     * @return
     */
    int delPeripheryById(String id);

    /**
     * 更新宠物周边商品信息
     * @param petPeriphery
     * @return
     */
    int updatePeriphery(PetPeriphery petPeriphery);

    /**
     * 新增宠物周边信息
     * @param petPeriphery
     * @return
     */
    int addPeriphery(PetPeriphery petPeriphery);

    /**
     * 结算时更新
     * @param id
     * @param status
     * @return
     */
    int updatePeripherySales(String id,int stock,String status);

    /**
     * 宠物店预约答复
     * @return
     */
    int updatePetShopOrder(PetShopUserOrder petShopUserOrder);

    /**
     * 获取宠物店会员推广活动
     * @param shopId
     * @param isEnd
     * @return
     */
    List<PetShopMemberActivity> getPetShopMemberActivity(String shopId,Boolean isEnd);

    /**
     * 新增宠物店会员推广活动
     * @param shopMemberActivity
     * @return
     */
    int addActivity(PetShopMemberActivity shopMemberActivity);

    /**
     * 更新活动
     * @param shopMemberActivity
     * @return
     */
    int updateActivty(PetShopMemberActivity shopMemberActivity);
    /**
     * 结束活动
     * @param isEnd
     * @return
     */
    int updateShopActivityStatus(Boolean isEnd,String id);
    /**
     * 会员积分兑换结算
     * @param score
     * @param shopId
     * @param memberId
     * @return
     */
    int updateShopMemberScore(int score,String shopId,String memberId);

    /**
     * 保存积分兑换记录
     * @param petShopMemberActivityRecord
     * @return
     */
    int savePetShopMemberActivityRecord(PetShopMemberActivityRecord petShopMemberActivityRecord);

    /**
     * 获取积分兑换记录
     * @param shopId
     * @return
     */
    List<PetShopMemberActivityRecord> getPetShopMemberActivityRecord(String shopId);

    /**
     * 获取宠物店会员充值情况
     * @return
     */
    List<Map<String, Object>> getShopMemberRechargeMoney(String shopId,String startTime,String endTime,String selectType);

    /**
     * 获取新增会员情况
     * @param shopId
     * @param startTime
     * @param endTime
     * @return
     */
    List<Map<String, Object>> getShopNewMember(String shopId,String startTime,String endTime,String selectType);

    /**
     * 获取会员等级情况
     * @param shopId
     * @return
     */
    List<Map<String, Object>> getShopMemberLevel(String shopId);
}
