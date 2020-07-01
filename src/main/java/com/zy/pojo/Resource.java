package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName Resource
 * @Description TODO
 * @Author zy
 * @Date 2020/3/19 21:54
 */
public class Resource {

    private String id;

    private String value;

    private String perms;

    private String orderNum;

    private Date createTime;

    public Resource() {
    }

    public Resource(String id, String value, String perms, String orderNum, Date createTime) {
        this.id = id;
        this.value = value;
        this.perms = perms;
        this.orderNum = orderNum;
        this.createTime = createTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getPerms() {
        return perms;
    }

    public void setPerms(String perms) {
        this.perms = perms;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
