package com.zy.dao;

import com.zy.pojo.User;
import com.zy.pojo.UserRole;
import com.zy.pojo.UserRoleRelation;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface UserMapper {


    public List<User> getAllUser(User user);

    public User hasUser(@Param("userNumber") String userNumber);

    public User getUserById(@Param("id") String id);

    /**
     * 根据用户id获取角色
     * @param id
     * @return
     */
    List<UserRole> getUserRoleById(@Param("id")String id);

    /**
     * 记录最后登录时间
     * @param id
     * @return
     */
    int lastLoginTime(@Param("id")String id);
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
    int hasRoleRelationShip(@Param("userId") String userId,@Param("roleId")String roleId);

    /**
     * 清楚用户绑定角色关系
     * @param userId
     * @return
     */
    int delUserRoleRelation(@Param("userId") String userId);
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
    int findPwd(@Param("phone") String phone,@Param("newPwd")String newPwd);
}
