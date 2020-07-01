package com.zy.pojo;

import java.util.Date;

/* *
 *功能描述: 宠物店信息
 * @author zy
 * @date
 */
public class PetShop {

    private String id;

    private String shopName;

    private String userId;

    private String category;

    private String address;

    private String shopPhone;

    private String businessHours;

    private String shopImgPath;

    private String detailedDescription;

    private Date createTime;

    private Boolean acceptAppointmentOrNot ;

    private Boolean businessStatus;

    private String isForbidden;

    //经度
    private Double longitude;
    //纬度
    private Double latitude;
    //距离
    private Double distance;

    /*private String roleName;*/

    private Date auditTime;

    private Double score;
    
    
    public PetShop() {
    }

    public PetShop(String id, String shopName, String userId, String category, String address, String shopPhone, String businessHours, String shopImgPath, String detailedDescription, Date createTime, Boolean acceptAppointmentOrNot, Boolean businessStatus, String isForbidden, Double longitude, Double latitude, Double distance, Date auditTime, Double score) {
        this.id = id;
        this.shopName = shopName;
        this.userId = userId;
        this.category = category;
        this.address = address;
        this.shopPhone = shopPhone;
        this.businessHours = businessHours;
        this.shopImgPath = shopImgPath;
        this.detailedDescription = detailedDescription;
        this.createTime = createTime;
        this.acceptAppointmentOrNot = acceptAppointmentOrNot;
        this.businessStatus = businessStatus;
        this.isForbidden = isForbidden;
        this.longitude = longitude;
        this.latitude = latitude;
        this.distance = distance;
        this.auditTime = auditTime;
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getShopPhone() {
        return shopPhone;
    }

    public void setShopPhone(String shopPhone) {
        this.shopPhone = shopPhone;
    }

    public String getBusinessHours() {
        return businessHours;
    }

    public void setBusinessHours(String businessHours) {
        this.businessHours = businessHours;
    }

    public String getShopImgPath() {
        return shopImgPath;
    }

    public void setShopImgPath(String shopImgPath) {
        this.shopImgPath = shopImgPath;
    }

    public String getDetailedDescription() {
        return detailedDescription;
    }

    public void setDetailedDescription(String detailedDescription) {
        this.detailedDescription = detailedDescription;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Boolean getAcceptAppointmentOrNot() {
        return acceptAppointmentOrNot;
    }

    public void setAcceptAppointmentOrNot(Boolean acceptAppointmentOrNot) {
        this.acceptAppointmentOrNot = acceptAppointmentOrNot;
    }

    public Boolean getBusinessStatus() {
        return businessStatus;
    }

    public void setBusinessStatus(Boolean businessStatus) {
        this.businessStatus = businessStatus;
    }

    public String getIsForbidden() {
        return isForbidden;
    }

    public void setIsForbidden(String isForbidden) {
        this.isForbidden = isForbidden;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Date getAuditTime() {
        return auditTime;
    }

    public void setAuditTime(Date auditTime) {
        this.auditTime = auditTime;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}
