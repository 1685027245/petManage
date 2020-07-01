package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName Moments
 * @Description TODO
 * @Author zy
 * @Date 2020/4/3 20:38
 */
public class Moments {

    private String id;

    private String userId;

    private String content;

    private String imgPath;

    private Date createTime;

    private String status;

    private String userImg;

    private String userName;

    private int browseCount;

    public Moments() {
    }

    public Moments(String id, String userId, String content, String imgPath, Date createTime, String status, String userImg, String userName, int browseCount) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.imgPath = imgPath;
        this.createTime = createTime;
        this.status = status;
        this.userImg = userImg;
        this.userName = userName;
        this.browseCount = browseCount;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUserImg() {
        return userImg;
    }

    public void setUserImg(String userImg) {
        this.userImg = userImg;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getBrowseCount() {
        return browseCount;
    }

    public void setBrowseCount(int browseCount) {
        this.browseCount = browseCount;
    }
}
