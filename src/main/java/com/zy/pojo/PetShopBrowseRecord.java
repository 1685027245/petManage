package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopBrowseRecord
 * @Description 宠物店浏览记录
 * @Author zy
 * @Date 2020/3/20 13:25
 */
public class PetShopBrowseRecord {

    private String id;

    private String shopId;

    private String userId;

    private Date createTime;

    public PetShopBrowseRecord() {
    }

    public PetShopBrowseRecord(String id, String shopId, String userId, Date createTime) {
        this.id = id;
        this.shopId = shopId;
        this.userId = userId;
        this.createTime = createTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
