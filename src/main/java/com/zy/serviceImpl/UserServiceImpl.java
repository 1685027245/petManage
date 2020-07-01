package com.zy.serviceImpl;

import com.zy.dao.UserMapper;
import com.zy.pojo.User;
import com.zy.pojo.UserRole;
import com.zy.pojo.UserRoleRelation;
import com.zy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userSerice")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    //    @RequiresRoles({"admin"})
    @Override
    public List<User> getAllUser(User user) {
       /*List<User> list;
        if(RedisUtil.hasKey("userAllinfo")){
            list = RedisUtil.getList("userAllinfo");
        }else {
            list = userMapper.getAllUser();
            RedisUtil.setList("userAllinfo", list);
        }*/
        return userMapper.getAllUser(user);
    }

    @Override
    public User hasUser(String username) {
        return userMapper.hasUser(username);
    }

    @Override
    public User getUserById(String id) {
        return userMapper.getUserById(id);
    }

    @Override
    public List<UserRole> getUserRoleById(String id) {
        return userMapper.getUserRoleById(id);
    }

    /**
     * 记录最后登录时间
     * @param id
     * @return
     */
    @Override
    public int lastLoginTime(String id) {
        return userMapper.lastLoginTime(id);
    }

    /**
     * 用户注册
     * @param user
     * @return
     */
    @Override
    public int registerUser(User user) {
        return userMapper.registerUser(user);
    }

    /**
     * 判断是否有角色关联
     * @return
     */
    @Override
    public int hasRoleRelationShip(String userId, String roleId) {
        return userMapper.hasRoleRelationShip(userId,roleId);
    }

    /**
     * 清楚用户绑定角色关系
     * @param userId
     * @return
     */
    @Override
    public int delUserRoleRelation(String userId) {
        return userMapper.delUserRoleRelation(userId);
    }

    /**
     * 绑定角色关系
     * @param userRoleRelation
     * @return
     */
    @Override
    public int bindingRoleRelationship(UserRoleRelation userRoleRelation) {
        return userMapper.bindingRoleRelationship(userRoleRelation);
    }

    /**
     * 查询用户数量
     * @return
     */
    @Override
    public int getUserCount() {
        return userMapper.getUserCount();
    }

    /**
     * 更新用户信息
     * @param user
     * @return
     */
    @Override
    public int updateUser(User user) {
        return userMapper.updateUser(user);
    }

    /**
     * 找回密码
     * @return
     */
    @Override
    public int findPwd(String phone, String newPwd) {
        return userMapper.findPwd(phone,newPwd);
    }

}
