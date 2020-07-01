package com.zy.service;

import com.zy.pojo.User;
import com.zy.pojo.UserRole;
import com.zy.pojo.UserRoleRelation;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {

    public List<User> getAllUser(User user);

    public User hasUser(String username);

    public User getUserById(String id);

    /**
     * 根据用户id获取角色
     * @param id
     * @return
     */
    List<UserRole> getUserRoleById(String id);

    /**
     * 记录最后登录时间
     * @param id
     * @return
     */
    int lastLoginTime(String id);
    /**
     * 用户注册
     * @param user
     * @return
     */
    int registerUser(User user);

    /**
     * 判断是否有角色关联
     * @return
     */
    int hasRoleRelationShip(String userId,String roleId);
    /**
     * 清楚用户绑定角色关系
     * @param userId
     * @return
     */
    int delUserRoleRelation(String userId);
    /**
     * 绑定角色关系
     * @param userRoleRelation
     * @return
     */
    int bindingRoleRelationship(UserRoleRelation userRoleRelation);

    /**
     * 获取用户数量
     * @return
     */
    int getUserCount();

    /**
     * 更新用户信息
     * @param user
     * @return
     */
    int updateUser(User user);

    /**
     * 找回密码
     * @return
     */
    int findPwd(String phone,String newPwd);
}
