package com.zy.pojo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @ClassName PetFood
 * @Description 宠物店食品信息
 * @Author zy
 * @Date 2020/3/8 10:23
 */
public class PetFood {

    private String id;

    private String name;

    private String category;

    private String brand;

    private String flavor;

    private String specification;

    private String shelfLife;

    private String placeOfOrigin;

    private String storageMode;

    private String imgPath;

    private Double price;

    private String instructions;

    private String foodSerialNumber;

    @DateTimeFormat(pattern="yyyy-MM-dd")//页面写入数据库时格式化
    @JSONField(format="yyyy-MM-dd")//数据库导出页面时json格式化
    private Date dateOfManufacture;

    private String addressOfManufacturer;

    private String nameOfManufacturer;

    private String remarks;

    private Integer stock;

    private String shopId;

    private String status;

    private Integer sold;

    private Date createTime;

    public PetFood() {
    }

    public PetFood(String id, String name, String category, String brand, String flavor, String specification, String shelfLife, String placeOfOrigin, String storageMode, String imgPath, Double price, String instructions, String foodSerialNumber, Date dateOfManufacture, String addressOfManufacturer, String nameOfManufacturer, String remarks, Integer stock, String shopId, String status, Integer sold, Date createTime) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.brand = brand;
        this.flavor = flavor;
        this.specification = specification;
        this.shelfLife = shelfLife;
        this.placeOfOrigin = placeOfOrigin;
        this.storageMode = storageMode;
        this.imgPath = imgPath;
        this.price = price;
        this.instructions = instructions;
        this.foodSerialNumber = foodSerialNumber;
        this.dateOfManufacture = dateOfManufacture;
        this.addressOfManufacturer = addressOfManufacturer;
        this.nameOfManufacturer = nameOfManufacturer;
        this.remarks = remarks;
        this.stock = stock;
        this.shopId = shopId;
        this.status = status;
        this.sold = sold;
        this.createTime = createTime;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getFlavor() {
        return flavor;
    }

    public void setFlavor(String flavor) {
        this.flavor = flavor;
    }

    public String getSpecification() {
        return specification;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public String getShelfLife() {
        return shelfLife;
    }

    public void setShelfLife(String shelfLife) {
        this.shelfLife = shelfLife;
    }

    public String getPlaceOfOrigin() {
        return placeOfOrigin;
    }

    public void setPlaceOfOrigin(String placeOfOrigin) {
        this.placeOfOrigin = placeOfOrigin;
    }

    public String getStorageMode() {
        return storageMode;
    }

    public void setStorageMode(String storageMode) {
        this.storageMode = storageMode;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getFoodSerialNumber() {
        return foodSerialNumber;
    }

    public void setFoodSerialNumber(String foodSerialNumber) {
        this.foodSerialNumber = foodSerialNumber;
    }

    public Date getDateOfManufacture() {
        return dateOfManufacture;
    }

    public void setDateOfManufacture(Date dateOfManufacture) {
        this.dateOfManufacture = dateOfManufacture;
    }

    public String getAddressOfManufacturer() {
        return addressOfManufacturer;
    }

    public void setAddressOfManufacturer(String addressOfManufacturer) {
        this.addressOfManufacturer = addressOfManufacturer;
    }

    public String getNameOfManufacturer() {
        return nameOfManufacturer;
    }

    public void setNameOfManufacturer(String nameOfManufacturer) {
        this.nameOfManufacturer = nameOfManufacturer;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
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

    public Integer getSold() {
        return sold;
    }

    public void setSold(Integer sold) {
        this.sold = sold;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
