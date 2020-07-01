package com.zy.pojo;

import java.util.Date;
import java.util.List;

/* *
 *功能描述: 用户信息
 * @author zy
 * @date 2020.3.4
 */
public class User  {

    private String id;

    private String userName;

    private String userNumber;

    private String password;

    private String phone;

    private String address;

    private String imgPath;

    private String email;

    private boolean isForbidden;

    private String salt;

    private int sex;

    private int age;

    private String status;

    private Date createTime;

    private Date updateTime;

    private Date lastLoginTime;

    List<UserRole> userRoles;

    public User() {

    }

    public User(String id, String userName, String userNumber, String password, String phone, String address, String imgPath, String email, boolean isForbidden, String salt, int sex, int age, String status, Date createTime, Date updateTime, Date lastLoginTime, List<UserRole> userRoles) {
        this.id = id;
        this.userName = userName;
        this.userNumber = userNumber;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.imgPath = imgPath;
        this.email = email;
        this.isForbidden = isForbidden;
        this.salt = salt;
        this.sex = sex;
        this.age = age;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
        this.lastLoginTime = lastLoginTime;
        this.userRoles = userRoles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserNumber() {
        return userNumber;
    }

    public void setUserNumber(String userNumber) {
        this.userNumber = userNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getForbidden() {
        return isForbidden;
    }

    public void setForbidden(boolean forbidden) {
        isForbidden = forbidden;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public Date getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    public List<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(List<UserRole> userRoles) {
        this.userRoles = userRoles;
    }
}
