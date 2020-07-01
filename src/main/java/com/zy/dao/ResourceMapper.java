package com.zy.dao;

import com.zy.pojo.Permission;
import com.zy.pojo.Resource;
import com.zy.pojo.UserRole;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @ClassName ResourceMapper
 * @Description TODO
 * @Author zy
 * @Date 2020/3/18 17:49
 */
@Repository
public interface ResourceMapper {


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
    public List<UserRole> getAllRole(@Param("status") String status);

    /**
     * 更新角色信息
     * @param userRole
     * @return
     */
    public int updateRole(UserRole userRole);

    /**
     * 删除角色
     * @param roleId
     * @return
     */
    int delUserRole(@Param("roleId") String roleId);

    /**
     * 新增角色
     * @param userRole
     * @return
     */
    int addUserRole(UserRole userRole);
}
