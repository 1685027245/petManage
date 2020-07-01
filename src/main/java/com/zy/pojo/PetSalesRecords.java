package com.zy.pojo;

import java.util.Date;

/* *
 *功能描述: 宠物店销售记录
 * @author zy
 * @date
 */
public class PetSalesRecords {

    private String id;

    private String productId;

    private String category;

    private Double price;

    private Integer number;

    private Date salesTime;

    private String userId;

    private String salesmanId;

    private float foldingRate;

    private String remarks;

    private String shopId;

    private Boolean isComplete;

    private Double total;

    private String productName;

    private String productNumber;

    public PetSalesRecords() {
    }

    public PetSalesRecords(String id, String productId, String category, Double price, Integer number, Date salesTime, String userId, String salesmanId, float foldingRate, String remarks, String shopId, Boolean isComplete, Double total, String productName, String productNumber) {
        this.id = id;
        this.productId = productId;
        this.category = category;
        this.price = price;
        this.number = number;
        this.salesTime = salesTime;
        this.userId = userId;
        this.salesmanId = salesmanId;
        this.foldingRate = foldingRate;
        this.remarks = remarks;
        this.shopId = shopId;
        this.isComplete = isComplete;
        this.total = total;
        this.productName = productName;
        this.productNumber = productNumber;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Date getSalesTime() {
        return salesTime;
    }

    public void setSalesTime(Date salesTime) {
        this.salesTime = salesTime;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getSalesmanId() {
        return salesmanId;
    }

    public void setSalesmanId(String salesmanId) {
        this.salesmanId = salesmanId;
    }

    public float getFoldingRate() {
        return foldingRate;
    }

    public void setFoldingRate(float foldingRate) {
        this.foldingRate = foldingRate;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public Boolean getComplete() {
        return isComplete;
    }

    public void setComplete(Boolean complete) {
        isComplete = complete;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductNumber() {
        return productNumber;
    }

    public void setProductNumber(String productNumber) {
        this.productNumber = productNumber;
    }
}
