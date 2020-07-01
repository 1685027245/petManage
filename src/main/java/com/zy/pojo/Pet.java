package com.zy.pojo;

import java.util.Date;

public class Pet {

    private String id;

    private String nickName;

    private String shape;

    private String hairLength;

    private String weight;

    private Double price;

    private String coatColor;

    private String imgPath;

    private String number;

    private String remarks;

    private String petEncyclopediasId;

    private PetEncyclopedias petEncyclopedias;

    private String salesStatus;

    private String shopId;

    private Date createTime;

    public Pet() {

    }

    public Pet(String id, String nickName, String shape, String hairLength, String weight, Double price, String coatColor, String imgPath, String number, String remarks, String petEncyclopediasId, PetEncyclopedias petEncyclopedias, String salesStatus, String shopId, Date createTime) {
        this.id = id;
        this.nickName = nickName;
        this.shape = shape;
        this.hairLength = hairLength;
        this.weight = weight;
        this.price = price;
        this.coatColor = coatColor;
        this.imgPath = imgPath;
        this.number = number;
        this.remarks = remarks;
        this.petEncyclopediasId = petEncyclopediasId;
        this.petEncyclopedias = petEncyclopedias;
        this.salesStatus = salesStatus;
        this.shopId = shopId;
        this.createTime = createTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public String getHairLength() {
        return hairLength;
    }

    public void setHairLength(String hairLength) {
        this.hairLength = hairLength;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCoatColor() {
        return coatColor;
    }

    public void setCoatColor(String coatColor) {
        this.coatColor = coatColor;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getPetEncyclopediasId() {
        return petEncyclopediasId;
    }

    public void setPetEncyclopediasId(String petEncyclopediasId) {
        this.petEncyclopediasId = petEncyclopediasId;
    }

    public PetEncyclopedias getPetEncyclopedias() {
        return petEncyclopedias;
    }

    public void setPetEncyclopedias(PetEncyclopedias petEncyclopedias) {
        this.petEncyclopedias = petEncyclopedias;
    }

    public String getSalesStatus() {
        return salesStatus;
    }

    public void setSalesStatus(String salesStatus) {
        this.salesStatus = salesStatus;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
