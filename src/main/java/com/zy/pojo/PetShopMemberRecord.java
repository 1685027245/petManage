package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopMemberRecord
 * @Description 宠物店会员充值记录
 * @Author zy
 * @Date 2020/3/7 21:46
 */
public class PetShopMemberRecord {

    private String id;

    private String userId;

    private Date time;

    private Double amount;

    private String personnelId;

    private String cardNumber;

    private String shopId;

    public PetShopMemberRecord() {
    }

    public PetShopMemberRecord(String id, String userId, Date time, Double amount, String personnelId, String cardNumber, String shopId) {
        this.id = id;
        this.userId = userId;
        this.time = time;
        this.amount = amount;
        this.personnelId = personnelId;
        this.cardNumber = cardNumber;
        this.shopId = shopId;
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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getPersonnelId() {
        return personnelId;
    }

    public void setPersonnelId(String personnelId) {
        this.personnelId = personnelId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }
}
