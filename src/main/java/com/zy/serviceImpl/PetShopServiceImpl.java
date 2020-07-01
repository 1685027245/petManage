package com.zy.serviceImpl;

import com.zy.dao.PetShopMapper;
import com.zy.pojo.*;
import com.zy.service.PetShopService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("petShopService")
public class PetShopServiceImpl implements PetShopService {

    @Autowired
    private PetShopMapper petShopMapper;

    @Override
    public List<Pet> queryAllPet(String shopId,int startRow,int pageSize,String keyword,String category,String price,String shape,String hairLength) {
        return petShopMapper.queryAllPet(shopId,startRow,pageSize,keyword,category,price,shape,hairLength);
    }

    /**
     * 获取宠物数量
     * @return
     */
    @Override
    public int getPetCount(String shopId,String keyword,String category,String price,String shape,String hairLength) {
        return petShopMapper.getPetCount(shopId,keyword,category,price,shape,hairLength);
    }


    /* *
     *功能描述: 根据条件查询宠物信息
     * @author zy
     * @date
     */
    @Override
    public Pet queryPetByCondition(String id) {
        return petShopMapper.queryPetByCondition(id);
    }

    /**
     * 新增宠物
     * @param pet
     * @return
     */
    @Override
    public int savePets(Pet pet) {
        return petShopMapper.savePets(pet);
    }

    /**
     *删除宠物
     * @param id
     * @return
     */
    @Override
    public int delPetById(String id) {
        return petShopMapper.delPetById(id);
    }

    /**
     * 更新宠物信息
     * @param pet
     * @return
     */
    @Override
    public int updatePet(Pet pet) {
        return petShopMapper.updatePet(pet);
    }

    /* *
     *功能描述: 根据宠物种类和名称信息查询宠物百科
     * @author zy
     * @date
     */
    @Override
    public List<PetEncyclopedias> getPetEncyclopedias(String category,String name) {
        return  petShopMapper.getPetEncyclopedias(category,name);
    }
    /* *
     *功能描述: 根据宠物信息查询宠物百科
     * @author zy
     * @date
     */
    @Override
    public List<PetEncyclopedias> getEncyclopedias(int startRow,int pageSize,String category,String shape,String hairLength,String coatColor,String function,String environment,String varieties,String keyword) {
        return petShopMapper.getEncyclopedias(startRow,pageSize,category,shape,hairLength,coatColor,function,environment,varieties,keyword);
    }

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
    @Override
    public int getEncyclopediasCount(String category, String shape, String hairLength, String coatColor, String function,String environment,String varieties, String keyword) {
        return petShopMapper.getEncyclopediasCount(category,shape,hairLength,coatColor,function,environment,varieties,keyword);
    }


    /**
     * 宠物百科详情
     * @param id
     * @return
     */
    @Override
    public PetEncyclopedias getEncyclopediasById(String id) {
        return petShopMapper.getEncyclopediasById(id);
    }
    /**
     * 获取宠物店列表
     * @param petShop
     * @return
     */
    @Override
    public List<PetShop> getAllPetShop(PetShop petShop) {
        return petShopMapper.getAllPetShop(petShop);
    }

    /* *
     *功能描述: 根据用户id获取宠物店
     * @author zy
     * @date
     */
    @Override
    public PetShop getPetShopByUserId(String userId) {
        return petShopMapper.getPetShopByUserId(userId);
    }

    /* *
     *功能描述: 根据宠物店id获取宠物店
     * @author zy
     * @date
     */
    @Override
    public PetShop getPetShopByShopId(String petShopId) {
        return petShopMapper.getPetShopByShopId(petShopId);
    }

    /* *
     *功能描述:根据宠物店id查询当前订单
     * @author zy
     * @date
     */
    @Override
    public List<PetSalesRecords> getPetSalesRecordsByShopId(String shopId,Boolean isComplete) {
        return petShopMapper.getPetSalesRecordsByShopId(shopId,isComplete);
    }

    /**
     * 更新宠物店信息
     * @param petShop
     * @return
     */
    @Override
    public int updatePetShop(PetShop petShop) {
        return petShopMapper.updatePetShop(petShop);
    }

    @Override
    public int addGoodsToSalesRecords(PetSalesRecords petSalesRecords) {
        return petShopMapper.addGoodsToSalesRecords(petSalesRecords);
    }

    /* *
     *功能描述: 更改销售状态
     * @author zy
     * @date
     */
    @Override
    public int updatePetSalesStatus(String id,String status) {
        return petShopMapper.updatePetSalesStatus(id,status);
    }

    /* *
     *功能描述: 将商品从当前订单中删除
     * @author zy
     * @date
     */
    @Override
    public int delGoodsFromSalesRecordsByProductId(String productId) {
        return petShopMapper.delGoodsFromSalesRecordsByProductId(productId);
    }

    @Override
    public PetSalesRecords getSalesRecordsById(String id) {
        return petShopMapper.getSalesRecordsById(id);
    }

    /**
     * 修改订单
     * @param petSalesRecords
     * @return
     */
    @Override
    public int updateSalesRecordsById(PetSalesRecords petSalesRecords) {
        return petShopMapper.updateSalesRecordsById(petSalesRecords);
    }

    /**
     * 根据条件获取宠物店会员信息
     * @param petShopMember
     * @return
     */
    @Override
    public List<PetShopMember> getPetShopMemberInfo(PetShopMember petShopMember) {
        return petShopMapper.getPetShopMemberInfo(petShopMember);
    }

    /**
     * 宠物店添加会员用户
     * @param petShopMember
     * @return
     */
    @Override
    public int addShopMemberUser(PetShopMember petShopMember) {
        return petShopMapper.addShopMemberUser(petShopMember);
    }

    /**
     * 宠物店会员与平台账户绑定
     * @param petShopMember
     * @return
             */
    @Override
    public int updatePetShopMember(PetShopMember petShopMember) {
        return petShopMapper.updatePetShopMember(petShopMember);
    }

    /**
     * 宠物店会员结账
     * @param petShopMember
     * @return
     */
    @Override
    public int updatePetShopMemberBalance(PetShopMember petShopMember) {
        return petShopMapper.updatePetShopMemberBalance(petShopMember);
    }

    /**
     * 宠物店会员充值记录
     * @param petShopMemberRecord
     * @return
     */
    @Override
    public int addPetShopMemberRecord(PetShopMemberRecord petShopMemberRecord) {
        return petShopMapper.addPetShopMemberRecord(petShopMemberRecord);
    }

    /**
     * 获取宠物店充值记录
     * @param petShopMemberRecord
     * @return
     */
    @Override
    public List<PetShopMemberRecord> getPetShopMemberRecord(PetShopMemberRecord petShopMemberRecord) {
        return petShopMapper.getPetShopMemberRecord(petShopMemberRecord);
    }

    /**
     *根据id删除销售记录
     * @param id
     * @return
     */
    @Override
    public int delSalesRecordsById(String id) {
        return petShopMapper.delSalesRecordsById(id);
    }

    @Override
    public List<PetFood> getFoodInformation(String shopId,int startRow,int pageSize,String keyword,String category,String price,String flavor) {
        return petShopMapper.getFoodInformation(shopId,startRow,pageSize,keyword,category,price,flavor);
    }

    /**
     * 获取食品列表总数
     * @return
     */
    @Override
    public int getFoodCount(String shopId,String keyword,String category,String price,String flavor) {
        return petShopMapper.getFoodCount(shopId,keyword,category,price,flavor);
    }

    @Override
    public PetFood getFoodInformationById(String id) {
        return petShopMapper.getFoodInformationById(id);
    }


    /**
     * 保存食品信息
     * @param petFood
     * @return
     */
    @Override
    public int addPetFood(PetFood petFood) {
        return petShopMapper.addPetFood(petFood);
    }

    /**
     * 删除食品信息
     * @param id
     * @return
     */
    @Override
    public int delFoodById(String id) {
        return petShopMapper.delFoodById(id);
    }

    /**
     * 修改食品信息更新
     * @param petFood
     * @return
     */
    @Override
    public int updateAllFood(PetFood petFood) {
        return petShopMapper.updateAllFood(petFood);
    }

    /**
     * 更新食品状态
     * @param id
     * @param status
     * @return
     */
    @Override
    public int updateFoodSalesStatus(String id,String status) {
        return petShopMapper.updateFoodSalesStatus(id,status);
    }

   /**
     * 更新食品信息,食品结算时更新
     * @param id
     * @param stock
     * @param status
     * @return
     */
    @Override
    public int updateFood(String id,int stock, String status) {
        return petShopMapper.updateFood(id,stock,status);
    }


    /**
     * 清空当前宠物店所有订单
     * @param shopId
     * @return
     */
    @Override
    public int delAllCurrentOrder(String shopId) {
        return petShopMapper.delAllCurrentOrder(shopId);
    }

    /**
     * 将当前宠物店所有宠物信息为当前订单的改为待售
     * @param shopId
     * @return
     */
    @Override
    public int updateAllPetStatusToBefore(String shopId) {
        return petShopMapper.updateAllPetStatusToBefore(shopId);
    }

    /**
     * 将当前宠物店所有食品信息为当前订单的改为待售
     * @param shopId
     * @return
     */
    @Override
    public int updateAllFoodStatusToBefore(String shopId) {
        return petShopMapper.updateAllFoodStatusToBefore(shopId);
    }

    /**
     * 周边商品改为待售
     * @param shopId
     * @return
     */
    @Override
    public int updateAllPeripheryStatusToBefiore(String shopId) {
        return petShopMapper.updateAllPeripheryStatusToBefiore(shopId);
    }

    /**
     * 服务设置未待售
     * @param shopId
     * @return
     */
    @Override
    public int updateAllServiceStatusToBefiore(String shopId) {
        return petShopMapper.updateAllServiceStatusToBefiore(shopId);
    }

    /**
     * 统计宠物店各宠物的数量及其宠物百科
     * @param shopId
     */
    @Override
    public List<PetEncyclopedias> getPetStockByPetShopId(String shopId) {
        return petShopMapper.getPetStockByPetShopId(shopId);
    }

    /**
     * 获取宠物店的会员优惠方案
     * @param shopId
     * @return
     */
    @Override
    public PetShopMemberDiscount getPetShopMemberDiscount(String shopId) {
        return petShopMapper.getPetShopMemberDiscount(shopId);
    }

    /**
     * 更新宠物店会员等级名称
     * @param petShopMemberDiscount
     * @return
     */
    @Override
    public int updateShopMemberName(PetShopMemberDiscount petShopMemberDiscount) {
        return petShopMapper.updateShopMemberName(petShopMemberDiscount);
    }

    /**
     * 获取宠物店反馈意见
     * @param shopId
     * @return
     */
    @Override
    public List<PetShopMemberOpinion> getPetShopMemberOpinion(String shopId, String replyStatus,String userId) {
        return petShopMapper.getPetShopMemberOpinion(shopId,replyStatus,userId);
    }

    /**
     * 根据id获取宠物店会员信息
     * @param id
     * @return
     */
    @Override
    public PetShopMember getPetShopMemberById(String id) {
        return petShopMapper.getPetShopMemberById(id);
    }

    /**
     * 更新宠物店会员反馈意见
     * @return
     */
    @Override
    public int updatePetShopMemberOpinion(PetShopMemberOpinion petShopMemberOpinion) {
        return petShopMapper.updatePetShopMemberOpinion(petShopMemberOpinion);
    }

    @Override
    public int delPetShopMemberOpinion(String id) {
        return petShopMapper.delPetShopMemberOpinion(id);
    }

    /**
     *根据月份时间来获取宠物店销售情况数据
     * @return
     */
    @Override
    public List<Map<String, Object>> getPetSalesAnalysisByMonths(String category,String shopId,String startTime,String endTime,String name,String selectType) {
        return petShopMapper.getPetSalesAnalysisByMonths(category,shopId,startTime,endTime,name,selectType);
    }

    /**
     * 宠物销售占比
     * @param selectName
     * @param petShopId
     * @param salesStatus
     * @return
     */
    @Override
    public List<Map<String, Object>> getPetSalesAnalysisByEncyclopedias(String selectCountName,String selectName,String groupName,String petShopId,String salesStatus,int pageSize) {
        return petShopMapper.getPetSalesAnalysisByEncyclopedias(selectCountName,selectName,groupName,petShopId,salesStatus,pageSize);
    }

    /**
     * 食品销售占比
     * @param selectName
     * @param petShopId
     * @param pageSize
     * @return
     */
    @Override
    public List<Map<String, Object>> getFoodSalesAnalysisByCategory(String selectName,String petShopId, int pageSize) {
        return petShopMapper.getFoodSalesAnalysisByCategory(selectName,petShopId,pageSize);
    }

    /**
     * 最畅销产品
     * @param shopId
     * @param pageSize
     * @return
     */
    @Override
    public List<Map<String, Object>> getFoodSalesAnalysisHighes(String shopId, int pageSize) {
        return petShopMapper.getFoodSalesAnalysisHighes(shopId,pageSize);
    }

    /**
     * 查询宠物店浏览统计
     * @param shopId
     * @param startTime
     * @param endTime
     * @return
     */
    @Override
    public List<Map<String, Object>> getPetShopBrowseByShopId(String shopId, String startTime, String endTime,String selectType) {
        return petShopMapper.getPetShopBrowseByShopId(shopId,startTime,endTime,selectType);
    }

    /**
     * 查询宠物店今日浏览统计
     * @param shopId
     * @return
     */
    @Override
    public List<Map<String, Object>> getPetShopBrowseByDay(String shopId) {
        return petShopMapper.getPetShopBrowseByDay(shopId);
    }

    /**
     * 获取宠物店服务
     * @return
     */
    @Override
    public List<ShopService> getPetShopService(String shopId) {
        return petShopMapper.getPetShopService(shopId);
    }

    /**
     * 获取宠物店服务byId
     * @return
     */

    @Override
    public ShopService getPetShopServiceById(String id) {
        return petShopMapper.getPetShopServiceById(id);
    }

    /**
     * 删除宠物店服务
     * @param id
     * @return
     */
    @Override
    public int delServiceById(String id) {
        return petShopMapper.delServiceById(id);
    }

    /**
     * 更新服务状态
     * @param id
     * @return
     */
    @Override
    public int upDateShopServiceStatus(String id,String status) {
        return petShopMapper.upDateShopServiceStatus(id,status);
    }

    /**
     * 新增宠物服务
     * @param shopService
     * @return
     */
    @Override
    public int addShopService(ShopService shopService) {
        return petShopMapper.addShopService(shopService);
    }

    /**
     * 获取宠物周边商品
     * @param shopId
     * @param keyword
     * @param color
     * @param price
     * @return
     */
    @Override
    public List<PetPeriphery> getPetPeriphery(int startRow,int pageSize,String shopId, String keyword, String color, String price) {
        return petShopMapper.getPetPeriphery(startRow,pageSize,shopId,keyword,color,price);
    }

    /**
     * 根据id查询宠物周边商品
     * @param id
     * @return
     */
    @Override
    public PetPeriphery getPetPeripheryById(String id) {
        return petShopMapper.getPetPeripheryById(id);
    }

    /**
     * 更新宠物周边商品状态
     * @param id
     * @param status
     * @return
     */
    @Override
    public int updatePetPeripheryStatus(String id, String status) {
        return petShopMapper.updatePetPeripheryStatus(id,status);
    }


    /**
     * 获取宠物周边商品数量
     * @param shopId
     * @return
     */
    @Override
    public int getPetPeripheryCount(String shopId,String keyword,String color,String price) {
        return petShopMapper.getPetPeripheryCount(shopId,keyword,color,price);
    }

    /**
     * 删除宠物周边信息
     * @param id
     * @return
     */
    @Override
    public int delPeripheryById(String id) {
        return petShopMapper.delPeripheryById(id);
    }

    /**
     * 更新宠物周边商品信息
     * @param petPeriphery
     * @return
     */
    @Override
    public int updatePeriphery(PetPeriphery petPeriphery) {
        return petShopMapper.updatePeriphery(petPeriphery);
    }

    /**
     * 新增宠物周边信息
     * @param petPeriphery
     * @return
     */
    @Override
    public int addPeriphery(PetPeriphery petPeriphery) {
        return petShopMapper.addPeriphery(petPeriphery);
    }

    /**
     * 结算时更新
     * @param id
     * @param status
     * @return
     */
    @Override
    public int updatePeripherySales(String id, int stock, String status) {
        return petShopMapper.updatePeripherySales(id,stock,status);
    }

    /**
     * 宠物店预约答复
     * @return
     */
    @Override
    public int updatePetShopOrder(PetShopUserOrder petShopUserOrder) {
        return petShopMapper.updatePetShopOrder(petShopUserOrder);
    }

    /**
     * 获取宠物店会员推广活动
     * @param shopId
     * @param isEnd
     * @return
     */
    @Override
    public List<PetShopMemberActivity> getPetShopMemberActivity(String shopId, Boolean isEnd) {
        return petShopMapper.getPetShopMemberActivity(shopId,isEnd);
    }

    /**
     * 新增宠物店会员推广活动
     * @param shopMemberActivity
     * @return
     */
    @Override
    public int addActivity(PetShopMemberActivity shopMemberActivity) {
        return petShopMapper.addActivity(shopMemberActivity);
    }

    /**
     * 更新活动
     * @param shopMemberActivity
     * @return
     */
    @Override
    public int updateActivty(PetShopMemberActivity shopMemberActivity) {
        return petShopMapper.updateActivty(shopMemberActivity);
    }

    /**
     * 结束活动
     * @param isEnd
     * @return
     */
    @Override
    public int updateShopActivityStatus(Boolean isEnd,String id) {
        return petShopMapper.updateShopActivityStatus(isEnd,id);
    }

    /**
     * 会员积分兑换结算
     * @param score
     * @param shopId
     * @param memberId
     * @return
     */
    @Override
    public int updateShopMemberScore(int score, String shopId, String memberId) {
        return petShopMapper.updateShopMemberScore(score,shopId,memberId);
    }

    /**
     * 保存积分兑换记录
     * @param petShopMemberActivityRecord
     * @return
     */
    @Override
    public int savePetShopMemberActivityRecord(PetShopMemberActivityRecord petShopMemberActivityRecord) {
        return petShopMapper.savePetShopMemberActivityRecord(petShopMemberActivityRecord);
    }

    /**
     * 获取积分兑换记录
     * @param shopId
     * @return
     */
    @Override
    public List<PetShopMemberActivityRecord> getPetShopMemberActivityRecord(String shopId) {
        return petShopMapper.getPetShopMemberActivityRecord(shopId);
    }


    @Override
    public List<Map<String, Object>> getShopMemberRechargeMoney(String shopId, String startTime, String endTime,String selectType) {
        return petShopMapper.getShopMemberRechargeMoney(shopId,startTime,endTime,selectType);
    }

    @Override
    public List<Map<String, Object>> getShopNewMember(String shopId, String startTime, String endTime,String selectType) {
        return petShopMapper.getShopNewMember(shopId,startTime,endTime,selectType);
    }

    @Override
    public List<Map<String, Object>> getShopMemberLevel(String shopId) {
        return petShopMapper.getShopMemberLevel(shopId);
    }


}
