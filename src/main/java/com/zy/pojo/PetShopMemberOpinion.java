package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopMemberOpinion
 * @Description 会员意见反馈
 * @Author zy
 * @Date 2020/3/10 15:06
 */
public class PetShopMemberOpinion {

    private String id;

    private String shopId;

    private String userId;

    private String opinionContent;

    private String replyContent;

    private Date createTime;

    private Date replyTime;

    private Boolean replyStatus;

    private String shopMemberId;

    private String shopName;

    public PetShopMemberOpinion() {
    }

    public PetShopMemberOpinion(String id, String shopId, String userId, String opinionContent, String replyContent, Date createTime, Date replyTime, Boolean replyStatus, String shopMemberId, String shopName) {
        this.id = id;
        this.shopId = shopId;
        this.userId = userId;
        this.opinionContent = opinionContent;
        this.replyContent = replyContent;
        this.createTime = createTime;
        this.replyTime = replyTime;
        this.replyStatus = replyStatus;
        this.shopMemberId = shopMemberId;
        this.shopName = shopName;
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

    public String getOpinionContent() {
        return opinionContent;
    }

    public void setOpinionContent(String opinionContent) {
        this.opinionContent = opinionContent;
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

    public Date getReplyTime() {
        return replyTime;
    }

    public void setReplyTime(Date replyTime) {
        this.replyTime = replyTime;
    }

    public Boolean getReplyStatus() {
        return replyStatus;
    }

    public void setReplyStatus(Boolean replyStatus) {
        this.replyStatus = replyStatus;
    }

    public String getShopMemberId() {
        return shopMemberId;
    }

    public void setShopMemberId(String shopMemberId) {
        this.shopMemberId = shopMemberId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }
}
