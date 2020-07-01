package com.zy.serviceImpl;

import com.zy.dao.OpenModuleMapper;
import com.zy.dao.PetShopMapper;
import com.zy.dao.ResourceMapper;
import com.zy.dao.SystemModuleMapper;
import com.zy.pojo.*;
import com.zy.service.OpenModuleService;
import com.zy.service.SystemModuleService;
import com.zy.shiro.ShiroRealm;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.RealmSecurityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * @ClassName OpenModuleServiceImpl
 * @Description 系统管理
 * @Author zy
 * @Date 2020/3/14 21:19
 */
@Service("systemModuleService")
public class SystemModuleServiceImpl implements SystemModuleService {

    @Autowired
    private SystemModuleMapper systemModuleMapper;

    @Autowired
    private ResourceMapper resourceMapper;

    /**
     * 获取所有拦截规则
     * @return
     */
    @Override
    public List<Resource> getAllSource() {
        return resourceMapper.getAllSource();
    }

    /**
     * 新增拦截规则
     * @param resource
     * @return
     */
    @Override
    public int addResource(Resource resource) {
        return resourceMapper.addResource(resource);
    }

    /**
     * 删除拦截规则
     * @param id
     * @return
     */
    @Override
    public int delResource(String id) {
        return resourceMapper.delResource(id);
    }

    /**
     * 更新拦截规则
     * @param resource
     * @return
     */
   @Override
    public int updateResource(Resource resource) {
        return resourceMapper.updateResource(resource);
    }

    /**
     * 获取所有权限
     * @return
     */
    @Override
    public List<Permission> getAllPermission() {
        return resourceMapper.getAllPermission();
    }

    /**
     * 获取所有角色
     * @return
     */
    @Override
    public List<UserRole> getAllRole(String status) {
        return resourceMapper.getAllRole(status);
    }

    /**
     * 更新角色信息
     * @param userRole
     * @return
     */
    @Override
    public int updateRole(UserRole userRole) {
        return resourceMapper.updateRole(userRole);
    }

    /**
     * 新增宠物百科
     * @param petEncyclopedias
     * @return
     */
    @Override
    public int addEncyclopedias(PetEncyclopedias petEncyclopedias) {
        return systemModuleMapper.addEncyclopedias(petEncyclopedias);
    }
    /**
     * 删除宠物百科
     * @param id
     * @return
     */
    @Override
    public int delEncyclopedias(String id) {
        return systemModuleMapper.delEncyclopedias(id);
    }

    /**
     * 更新宠物百科
     * @param petEncyclopedias
     * @return
     */
    @Override
    public int editEncyclopedias(PetEncyclopedias petEncyclopedias) {
        return systemModuleMapper.editEncyclopedias(petEncyclopedias);
    }

    /**
     * 获取开放模块的主页数据
     * @return
     */
    @Override
    public OpenIndexData getOpenIndexData() {
        return systemModuleMapper.getOpenIndexData();
    }

    @Override
    public int updateOpenIndexData(OpenIndexData openIndexData) {
        return systemModuleMapper.updateOpenIndexData(openIndexData);
    }

    /**
     * 更新资讯状态
     * @param id
     * @param status
     * @return
     */
    @Override
    public int updatePetInfoStatus(String id, String status) {
        return systemModuleMapper.updatePetInfoStatus(id,status);
    }

    /**
     * 删除资讯
     * @param id
     * @return
     */
    @Override
    public int delPetInfo(String id) {
        return systemModuleMapper.delPetInfo(id);
    }

    /**
     * 保存资讯
     * @param petInformation
     * @return
     */
    @Override
    public int savePetInfo(PetInformation petInformation) {
        return systemModuleMapper.savePetInfo(petInformation);
    }

    /**
     * 更新资讯
     * @param petInformation
     * @return
     */
    @Override
    public int updatePetInfo(PetInformation petInformation) {
        return systemModuleMapper.updatePetInfo(petInformation);
    }

    /**
     * 获取用户注册情况
     * @return
     */
    @Override
    public List<Map<String, Object>> getNewUserAnalysis(String startTime,String endTime,String selectType) {
        return systemModuleMapper.getNewUserAnalysis(startTime,endTime,selectType);
    }

    /**
     * 获取宠物店申请情况
     * @return
     */
    @Override
    public List<Map<String, Object>> getNewShopAnalysis(String startTime, String endTime, String selectType) {
        return systemModuleMapper.getNewShopAnalysis(startTime,endTime,selectType);
    }

    /**
     * 删除角色
     * @param roleId
     * @return
     */
    @Override
    public int delUserRole(String roleId) {
        return resourceMapper.delUserRole(roleId);
    }

    /**
     * 新增角色
     * @param userRole
     * @return
     */
    @Override
    public int addUserRole(UserRole userRole) {
        return resourceMapper.addUserRole(userRole);
    }


}
