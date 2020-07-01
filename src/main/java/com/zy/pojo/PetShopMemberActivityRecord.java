package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopMemberActivityRecord
 * @Description 积分活动兑换记录
 * @Author zy
 * @Date 2020/4/12 15:04
 */
public class PetShopMemberActivityRecord {

    private String id;

    private String activityId;

    private String memberId;

    private int number;

    private Date createTime;

    private String shopId;

    private int score;

    private int totalScore;

    public PetShopMemberActivityRecord() { }

    public PetShopMemberActivityRecord(String id, String activityId, String memberId, int number, Date createTime, String shopId, int score, int totalScore) {
        this.id = id;
        this.activityId = activityId;
        this.memberId = memberId;
        this.number = number;
        this.createTime = createTime;
        this.shopId = shopId;
        this.score = score;
        this.totalScore = totalScore;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getActivityId() {
        return activityId;
    }

    public void setActivityId(String activityId) {
        this.activityId = activityId;
    }

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }
}
