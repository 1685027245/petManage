package com.zy.service;

import com.zy.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @ClassName OpenModuleService
 * @Description 开放平台宠物百科
 * @Author zy
 * @Date 2020/3/14 21:18
 */
public interface OpenModuleService {

    /**
     * 新增宠物店
     * @param petShop
     * @return
     */
    int addPetShop(PetShop petShop);

    /**
     * 添加宠物店优惠规则
     * @param shopMemberDiscount
     * @return
     */
    int addPetShopMemberDiscount(PetShopMemberDiscount shopMemberDiscount);

    /**
     * 修改用户角色
     * @return
     */
    int updateUserRoleRelation(String userId,String roleId);

    /**
     * 查询附近的所有宠物店
     * @return
     */
    List<PetShop> getNearbyPetShop(int startRow,int pageSize,String keyword,String longitude,String latitude);

    /**
     * 统计宠物店个数
     * @param longitude
     * @param latitude
     * @return
     */
    int getNearbyPetShopCount(String longitude,String latitude,String keyword);
    /**
     * 添加宠物店用户浏览记录
     * @param petShopBrowseRecord
     * @return
     */
    int addPetShopBrowseRecord(PetShopBrowseRecord petShopBrowseRecord);

    /**
     * 用户预约宠物店
     * @param petShopUserOrder
     * @return
     */
    int addOrder(PetShopUserOrder petShopUserOrder);

    /**
     * 查询预约
     * @param petShopUserOrder
     * @return
     */
    List<PetShopUserOrder> getPetShopUserOrder(PetShopUserOrder petShopUserOrder);

    /**
     * 取消预约
     * @param id
     * @return
     */
    int cancleOrder(String id);
    /**
     * 获取宠物资讯
     * @return
     */
    List<PetInformation> getPetInformation(int startRow,int pageSize,String status,String category);

    /**
     * 获取宠物资讯详情
     * @param id
     * @return
     */
    PetInformation getPetInformationById(String id);
    /**
     * 获取用户朋友圈
     * @return
     */
    List<Moments> getMoments(String userId);

    /**
     * 新增朋友圈
     * @param moments
     * @return
     */
    int addMoments(Moments moments);

    /**
     * 查询朋友圈草稿
     * @return
     */
    Moments getIsSaveMoments(String userId);

    /**
     * 查询朋友圈详情
     * @return
     */
    Moments getMomentesById(String id);

    /**
     * 删除朋友圈
     * @param id
     * @return
     */
    int delMoments(String id);

    /**
     * 更新朋友圈
     * @param moments
     * @return
     */
    int updateMomentes(Moments moments);

    /**
     * 新增宠物店评论
     * @return
     */
    int addPetShopComment(PetShopComment petShopComment);

    /**
     * 修改评论
     * @param petShopComment
     * @return
     */
    int updateComment(PetShopComment petShopComment);
    /**
     * 根据宠物店id查询宠物店评论
     * @param shopId
     * @return
     */
    List<PetShopComment> getPetShopComment(int startRow,int pageSize,String shopId);

    /**
     * 获取宠物店评论条数
     * @param shopId
     * @return
     */
    int getPetShopCommentCount(String shopId);

    /**
     * 根据预约id获取评论内容
     * @param orderId
     * @return
     */
    PetShopComment getPetshopCommentByOrderId(String orderId);
    /**
     * 获取宠物店评分
     * @param shopId
     * @return
     */
    double getPetShopScore(String shopId);

    /**
     * 宠物店反馈
     * @param petShopMemberOpinion
     * @return
     */
    int addOpinion(PetShopMemberOpinion petShopMemberOpinion);

    /**
     * 获取所有宠物店数量
     * @return
     */
    int getAllPetShopCount();

    /**
     * 获取宠物资讯个数
     * @return
     */
    int getPetInfoCount();
}
