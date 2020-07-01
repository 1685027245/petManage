package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopUserOrder
 * @Description 预约宠物店
 * @Author zy
 * @Date 2020/3/20 16:13
 */
public class PetShopUserOrder {

    private String id;

    private String shopId;

    private String userId;

    private String category;

    private String timeExplain;

    private String result;

    private String remarks;

    private String replyStatus;

    private String replyContent;

    private Date createTime;

    private String userName;

    private String userPhone;

    private Date replyTime;

    public PetShopUserOrder() {
    }

    public PetShopUserOrder(String id, String shopId, String userId, String category, String timeExplain, String result, String remarks, String replyStatus, String replyContent, Date createTime, String userName, String userPhone, Date replyTime) {
        this.id = id;
        this.shopId = shopId;
        this.userId = userId;
        this.category = category;
        this.timeExplain = timeExplain;
        this.result = result;
        this.remarks = remarks;
        this.replyStatus = replyStatus;
        this.replyContent = replyContent;
        this.createTime = createTime;
        this.userName = userName;
        this.userPhone = userPhone;
        this.replyTime = replyTime;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTimeExplain() {
        return timeExplain;
    }

    public void setTimeExplain(String timeExplain) {
        this.timeExplain = timeExplain;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getReplyStatus() {
        return replyStatus;
    }

    public void setReplyStatus(String replyStatus) {
        this.replyStatus = replyStatus;
    }

    public String getReplyContent() {
        return replyContent;
    }

    public void setReplyContent(String replyContent) {
        this.replyContent = replyContent;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public Date getReplyTime() {
        return replyTime;
    }

    public void setReplyTime(Date replyTime) {
        this.replyTime = replyTime;
    }
}
