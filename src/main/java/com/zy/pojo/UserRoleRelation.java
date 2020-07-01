package com.zy.pojo;

/**
 * @ClassName UserRoleRelation
 * @Description 用户角色关联表
 * @Author zy
 * @Date 2020/3/16 10:28
 */
public class UserRoleRelation {

    private String id;

    private String userId;

    private String roleId;

    public UserRoleRelation() {
    }

    public UserRoleRelation(String id, String userId, String roleId) {
        this.id = id;
        this.userId = userId;
        this.roleId = roleId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId;
    }
}
