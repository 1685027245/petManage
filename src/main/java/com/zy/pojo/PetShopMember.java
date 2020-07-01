package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopMember
 * @Description 宠物店会员
 * @Author zy
 * @Date 2020/3/7 10:49
 */
public class PetShopMember {

    private String id;

    private String userId;

    private Integer level;

    private Integer score;

    private String shopId;

    private Date processingTime;

    private Double balance;

    private Double total;

    private String memberNumber;

    private String shopName;

    public PetShopMember() {
    }

    public PetShopMember(String id, String userId, Integer level, Integer score, String shopId, Date processingTime, Double balance, Double total, String memberNumber, String shopName) {
        this.id = id;
        this.userId = userId;
        this.level = level;
        this.score = score;
        this.shopId = shopId;
        this.processingTime = processingTime;
        this.balance = balance;
        this.total = total;
        this.memberNumber = memberNumber;
        this.shopName = shopName;
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

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public Date getProcessingTime() {
        return processingTime;
    }

    public void setProcessingTime(Date processingTime) {
        this.processingTime = processingTime;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getMemberNumber() {
        return memberNumber;
    }

    public void setMemberNumber(String memberNumber) {
        this.memberNumber = memberNumber;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }
}
