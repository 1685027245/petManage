package com.zy.dao;

import com.zy.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @ClassName OpenModuleMapper
 * @Description TODO
 * @Author zy
 * @Date 2020/3/16 12:23
 */
public interface OpenModuleMapper {

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
     * 修改角色权限
     * @return
     */
    int updateUserRoleRelation(@Param("userId")String userId,@Param("roleId") String roleId);

    /**
     * 查询附近的所有宠物店
     * @return
     */
    List<PetShop> getNearbyPetShop(@Param("startRow")int startRow,@Param("pageSize")int pageSize,@Param("keyword")String keyword,@Param("longitude")String longitude,@Param("latitude")String latitude);

    /**
     * 统计宠物店个数
     * @param longitude
     * @param latitude
     * @return
     */
    int getNearbyPetShopCount(@Param("longitude")String longitude,@Param("latitude")String latitude,@Param("keyword")String keyword);

    /**
     * 获取所有宠物店数量
     * @return
     */
    int getAllPetShopCount();
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
    int cancleOrder(@Param("id") String id);

    /**
     * 获取宠物资讯
     * @return
     */
    List<PetInformation> getPetInformation(@Param("startRow") int startRow,@Param("pageSize") int pageSize,@Param("status")String status,@Param("category")String category);

    /**
     * 获取宠物资讯个数
     * @return
     */
    int getPetInfoCount();
    /**
     * 获取宠物资讯详情
     * @param id
     * @return
     */
    PetInformation getPetInformationById(@Param("id")String id);
    /**
     * 获取用户朋友圈
     * @return
     */
    List<Moments> getMoments(@Param("userId")String userId);

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
    Moments getIsSaveMoments(@Param("userId")String userId);

    /**
     * 查询朋友圈详情
     * @return
     */
    Moments getMomentesById(@Param("id")String id);

    /**
     * 删除朋友圈
     * @param id
     * @return
     */
    int delMoments(@Param("id")String id);

    /**
     * 更新朋友圈
     * @param moments
     * @return
     */
    int updateMomentes(Moments moments);

    /**
     * 宠物店评论
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
     * 根据宠物店id或者用户id查询宠物店评论
     * @param shopId
     * @return
     */
    List<PetShopComment> getPetShopComment(@Param("startRow")int startRow,@Param("pageSize")int pageSize,@Param("shopId") String shopId);

    /**
     * 获取宠物店评论条数
     * @param shopId
     * @return
     */
    int getPetShopCommentCount(@Param("shopId") String shopId);

    /**
     * 根据预约id获取评论内容
     * @param orderId
     * @return
     */
    PetShopComment getPetshopCommentByOrderId(@Param("orderId")String orderId);

    /**
     * 获取宠物店评分
     * @param shopId
     * @return
     */
    double getPetShopScore(@Param("shopId")String shopId);

    /**
     * 宠物店反馈
     * @param petShopMemberOpinion
     * @return
     */
    int addOpinion(PetShopMemberOpinion petShopMemberOpinion);
}
