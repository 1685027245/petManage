package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetPeriphery
 * @Description TODO
 * @Author zy
 * @Date 2020/4/2 9:59
 */
public class PetPeriphery {

    private String id;
    private String name;
    private Double price;
    private String brand;
    private String type;
    private String number;
    private int stock;
    private int sold;
    private String imgPath;
    private String weight;
    private String remarks;
    private String shopId;
    private Date createTime;
    private String nameOfManufacturer;
    private String status;

    public PetPeriphery() {
    }

    public PetPeriphery(String id, String name, Double price, String brand, String type, String number, int stock, int sold, String imgPath, String weight, String remarks, String shopId, Date createTime, String nameOfManufacturer, String status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.type = type;
        this.number = number;
        this.stock = stock;
        this.sold = sold;
        this.imgPath = imgPath;
        this.weight = weight;
        this.remarks = remarks;
        this.shopId = shopId;
        this.createTime = createTime;
        this.nameOfManufacturer = nameOfManufacturer;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public int getSold() {
        return sold;
    }

    public void setSold(int sold) {
        this.sold = sold;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
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

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getNameOfManufacturer() {
        return nameOfManufacturer;
    }

    public void setNameOfManufacturer(String nameOfManufacturer) {
        this.nameOfManufacturer = nameOfManufacturer;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
