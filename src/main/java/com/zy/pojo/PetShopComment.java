package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopComment
 * @Description 宠物店评论
 * @Author zy
 * @Date 2020/4/7 15:43
 */
public class PetShopComment {

    private String id;

    private String shopId;

    private String userId;

    private String commentContent;

    private String starRating;

    private Date createTime;

    private String userName;

    private String userImg;

    private String orderId;

    public PetShopComment() {
    }

    public PetShopComment(String id, String shopId, String userId, String commentContent, String starRating, Date createTime, String userName, String userImg, String orderId) {
        this.id = id;
        this.shopId = shopId;
        this.userId = userId;
        this.commentContent = commentContent;
        this.starRating = starRating;
        this.createTime = createTime;
        this.userName = userName;
        this.userImg = userImg;
        this.orderId = orderId;
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

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public String getStarRating() {
        return starRating;
    }

    public void setStarRating(String starRating) {
        this.starRating = starRating;
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

    public String getUserImg() {
        return userImg;
    }

    public void setUserImg(String userImg) {
        this.userImg = userImg;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }
}
