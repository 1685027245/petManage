package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName ShopService
 * @Description 宠物店服务
 * @Author zy
 * @Date 2020/3/30 15:47
 */
public class ShopService {

    private String id;

    private String serviceCategory;

    private double price;

    private String priceUnit;

    private String shopId;

    private String status;

    private Date createTime;

    private String serviceNum;

    public ShopService() {
    }

    public ShopService(String id, String serviceCategory, double price, String priceUnit, String shopId, String status, Date createTime, String serviceNum) {
        this.id = id;
        this.serviceCategory = serviceCategory;
        this.price = price;
        this.priceUnit = priceUnit;
        this.shopId = shopId;
        this.status = status;
        this.createTime = createTime;
        this.serviceNum = serviceNum;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getServiceCategory() {
        return serviceCategory;
    }

    public void setServiceCategory(String serviceCategory) {
        this.serviceCategory = serviceCategory;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getPriceUnit() {
        return priceUnit;
    }

    public void setPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getServiceNum() {
        return serviceNum;
    }

    public void setServiceNum(String serviceNum) {
        this.serviceNum = serviceNum;
    }
}
