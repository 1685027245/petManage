package com.zy.service;

import com.zy.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @ClassName OpenModuleService
 * @Description 开放平台宠物百科
 * @Author zy
 * @Date 2020/3/14 21:18
 */
public interface SystemModuleService {


    /**
     * 获取所有拦截规则
     * @return
     */
    public List<Resource> getAllSource();

    /**
     * 新增拦截规则
     * @param resource
     * @return
     */
    public int addResource(Resource resource);

    /**
     * 删除拦截规则
     * @param id
     * @return
     */
    public int delResource(@Param("id") String id);

    /**
     * 更新拦截规则
     * @param resource
     * @return
     */
    int updateResource(Resource resource);
    /**
     * 获取所有权限
     * @return
     */
    public List<Permission> getAllPermission();

    /**
     * 获取所有角色
     * @return
     */
    public List<UserRole> getAllRole(String status);

    /**
     * 更新角色信息
     * @param userRole
     * @return
     */
    public int updateRole(UserRole userRole);

    /**
     * 新增宠物百科
     * @param petEncyclopedias
     * @return
     */
    public int addEncyclopedias(PetEncyclopedias petEncyclopedias);

    /**
     * 删除宠物百科
     * @param id
     * @return
     */
    public int delEncyclopedias(String id);

    /**
     * 更新宠物百科
     * @param petEncyclopedias
     * @return
     */
    public int editEncyclopedias(PetEncyclopedias petEncyclopedias);

    /**
     * 获取开放模块的主页数据
     * @return
     */
    public OpenIndexData getOpenIndexData();

    /**
     * 更新开放模块首页数据
     * @param openIndexData
     * @return
     */
    public int updateOpenIndexData(OpenIndexData openIndexData);

    /**
     * 更新资讯状态
     * @param id
     * @param status
     * @return
     */
    public int updatePetInfoStatus(String id,String status);

    /**
     * 删除宠物资讯
     * @param id
     * @return
     */
    public int delPetInfo(String id);

    /**
     * 保存资讯
     * @param petInformation
     * @return
     */
    public int savePetInfo(PetInformation petInformation);

    /**
     * 更新资讯
     * @param petInformation
     * @return
     */
    public int updatePetInfo(PetInformation petInformation);

    /**
     * 获取用户注册情况
     * @return
     */
    List<Map<String, Object>> getNewUserAnalysis(String startTime,String endTime,String selectType);

    /**
     * 获取宠物店申请情况
     * @return
     */
    List<Map<String, Object>> getNewShopAnalysis(String startTime,String endTime,String selectType);

    /**
     * 删除角色
     * @param roleId
     * @return
     */
    int delUserRole(String roleId);

    /**
     * 新增角色
     * @param userRole
     * @return
     */
    int addUserRole(UserRole userRole);
}
