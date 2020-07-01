package com.zy.serviceImpl;

import com.zy.dao.OpenModuleMapper;
import com.zy.pojo.*;
import com.zy.service.OpenModuleService;
import com.zy.shiro.ShiroRealm;
import org.apache.ibatis.annotations.Param;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.RealmSecurityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ClassName OpenModuleServiceImpl
 * @Description 开发平台接口实现
 * @Author zy
 * @Date 2020/3/14 21:19
 */
@Service("openEncyclopediasService")
public class OpenModuleServiceImpl implements OpenModuleService {

    @Autowired
    private OpenModuleMapper openModuleMapper;

    /**
     * 新增宠物店
     * @param petShop
     * @return
     */
    @Override
    public int addPetShop(PetShop petShop) {
        return openModuleMapper.addPetShop(petShop);
    }

    /**
     * 添加宠物店优惠规则
     * @param shopMemberDiscount
     * @return
     */
    @Override
    public int addPetShopMemberDiscount(PetShopMemberDiscount shopMemberDiscount) {
        return openModuleMapper.addPetShopMemberDiscount(shopMemberDiscount);
    }

    /**
     * 修改角色权限
     * @return
     */
    @Override
    public int updateUserRoleRelation(String userId, String roleId) {
        int result = openModuleMapper.updateUserRoleRelation( userId,roleId);
        if(result>0){//清空之前的权限
            RealmSecurityManager rsm = (RealmSecurityManager) SecurityUtils.getSecurityManager();
            ShiroRealm authRealm = (ShiroRealm)rsm.getRealms().iterator().next();
            authRealm.clearAuthz();
        }
        return result;
    }

    /**
     * 查询附近的所有宠物店
     * @return
     */
    @Override
    public List<PetShop> getNearbyPetShop(int startRow,int pageSize,String keyword,String longitude,String latitude) {
        return openModuleMapper.getNearbyPetShop(startRow,pageSize,keyword,longitude,latitude);
    }

    /**
     * 统计宠物店个数
     * @param longitude
     * @param latitude
     * @return
     */
    @Override
    public int getNearbyPetShopCount(String longitude, String latitude,String keyword) {
        return openModuleMapper.getNearbyPetShopCount(longitude,latitude,keyword);
    }

    /**
     * 添加宠物店用户浏览记录
     * @param petShopBrowseRecord
     * @return
     */
    @Override
    public int addPetShopBrowseRecord(PetShopBrowseRecord petShopBrowseRecord) {
        return openModuleMapper.addPetShopBrowseRecord(petShopBrowseRecord);
    }

    /**
     * 用户预约宠物店
     * @param petShopUserOrder
     * @return
     */
    @Override
    public int addOrder(PetShopUserOrder petShopUserOrder) {
        return openModuleMapper.addOrder(petShopUserOrder);
    }

    /**
     * 查询预约
     * @param petShopUserOrder
     * @return
     */
    @Override
    public List<PetShopUserOrder> getPetShopUserOrder(PetShopUserOrder petShopUserOrder) {
        return openModuleMapper.getPetShopUserOrder(petShopUserOrder);
    }

    /**
     * 取消预约
     * @param id
     * @return
     */
    @Override
    public int cancleOrder(String id) {
        return openModuleMapper.cancleOrder(id);
    }

    /**
     * 获取宠物资讯
     * @return
     */
    @Override
    public List<PetInformation> getPetInformation(int startRow,int pageSize,String status,String category) {
        return openModuleMapper.getPetInformation(startRow,pageSize,status,category);
    }

    /**
     * 获取宠物资讯详情
     * @param id
     * @return
     */
    @Override
    public PetInformation getPetInformationById(String id) {
        return openModuleMapper.getPetInformationById(id);
    }

    /**
     * 获取用户朋友圈
     * @param userId
     * @return
     */
    @Override
    public List<Moments> getMoments(String userId) {
        return openModuleMapper.getMoments(userId);
    }

    /**
     * 新增朋友圈
     * @param moments
     * @return
     */
    @Override
    public int addMoments(Moments moments) {
        return openModuleMapper.addMoments(moments);
    }

    /**
     * 查询朋友圈草稿
     * @return
     */
    @Override
    public Moments getIsSaveMoments(String userId) {
        return openModuleMapper.getIsSaveMoments(userId);
    }

    /**
     * 查询朋友圈详情
     * @return
     */
    @Override
    public Moments getMomentesById(String id) {
        return openModuleMapper.getMomentesById(id);
    }

    /**
     * 删除朋友圈
     * @param id
     * @return
     */
    @Override
    public int delMoments(String id) {
        return openModuleMapper.delMoments(id);
    }

    /**
     * 更新朋友圈
     * @param moments
     * @return
     */
    @Override
    public int updateMomentes(Moments moments) {
        return openModuleMapper.updateMomentes(moments);
    }

    /**
     * 新增宠物店评论
     * @return
     */
    @Override
    public int addPetShopComment(PetShopComment petShopComment) {
        return openModuleMapper.addPetShopComment(petShopComment);
    }

    /**
     * 修改评论
     * @param petShopComment
     * @return
     */
    @Override
    public int updateComment(PetShopComment petShopComment) {
        return openModuleMapper.updateComment(petShopComment);
    }

    /**
     * 根据宠物店id查询宠物店评论
     * @param shopId
     * @return
     */
    @Override
    public List<PetShopComment> getPetShopComment(int startRow,int pageSize,String shopId) {
        return openModuleMapper.getPetShopComment(startRow,pageSize,shopId);
    }

    /**
     * 获取宠物店评论条数
     * @param shopId
     * @return
     */
    @Override
    public int getPetShopCommentCount(String shopId) {
        return openModuleMapper.getPetShopCommentCount(shopId);
    }

    /**
     * 根据预约id获取评论内容
     * @param orderId
     * @return
     */
    @Override
    public PetShopComment getPetshopCommentByOrderId(String orderId) {
        return openModuleMapper.getPetshopCommentByOrderId(orderId);
    }

    /**
     * 获取宠物店评分
     * @param shopId
     * @return
     */
    @Override
    public double getPetShopScore(String shopId) {
        return openModuleMapper.getPetShopScore(shopId);
    }

    /**
     * 宠物店反馈
     * @param petShopMemberOpinion
     * @return
     */
    @Override
    public int addOpinion(PetShopMemberOpinion petShopMemberOpinion) {
        return openModuleMapper.addOpinion(petShopMemberOpinion);
    }
    /**
     * 获取所有宠物店数量
     * @return
     */
    @Override
    public int getAllPetShopCount() {
        return openModuleMapper.getAllPetShopCount();
    }

    /**
     * 获取宠物资讯个数
     * @return
     */
    @Override
    public int getPetInfoCount() {
        return openModuleMapper.getPetInfoCount();
    }
}
