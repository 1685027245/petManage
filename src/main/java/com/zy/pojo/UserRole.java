package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName UserRole
 * @Description 用户角色
 * @Author zy
 * @Date 2020/3/9 11:21
 */
public class UserRole {

    private String id;

    private String roleName;

    private String alias;

    private int status;

    private Date createTime;

    private Date updateTime;

    public UserRole() {
    }

    public UserRole(String id, String roleName, String alias, int status, Date createTime, Date updateTime) {
        this.id = id;
        this.roleName = roleName;
        this.alias = alias;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}
