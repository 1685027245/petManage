package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName Permission
 * @Description 权限
 * @Author zy
 * @Date 2020/3/18 17:39
 */
public class Permission {

    private String id;

    private String permissionId;

    private String name;

    private String description;

    private String url;

    private String perms;

    private String parentId;

    private String type;

    private String orderNum;

    private String icon;

    private String status;

    private Date createTime;

    private Date updateTime;

    public Permission() {
    }

    public Permission(String id, String permissionId, String name, String description, String url, String perms, String parentId, String type, String orderNum, String icon, String status, Date createTime, Date updateTime) {
        this.id = id;
        this.permissionId = permissionId;
        this.name = name;
        this.description = description;
        this.url = url;
        this.perms = perms;
        this.parentId = parentId;
        this.type = type;
        this.orderNum = orderNum;
        this.icon = icon;
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

    public String getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(String permissionId) {
        this.permissionId = permissionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPerms() {
        return perms;
    }

    public void setPerms(String perms) {
        this.perms = perms;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
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
