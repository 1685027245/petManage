package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetInformation
 * @Description TODO
 * @Author zy
 * @Date 2020/3/24 12:44
 */
public class PetInformation {

    private String id;

    private String title;

    private String content;

    private String category;

    private Date createTime;

    private String userId;

    private String status;

    //文本图片路径
    private String picPath;

    //用户名
    private String userName;
    //用户图片地址
    private String imgPath;

    public PetInformation() {
    }

    public PetInformation(String id, String title, String content, String category, Date createTime, String userId, String status, String picPath, String userName, String imgPath) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.createTime = createTime;
        this.userId = userId;
        this.status = status;
        this.picPath = picPath;
        this.userName = userName;
        this.imgPath = imgPath;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPicPath() {
        return picPath;
    }

    public void setPicPath(String picPath) {
        this.picPath = picPath;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }
}
