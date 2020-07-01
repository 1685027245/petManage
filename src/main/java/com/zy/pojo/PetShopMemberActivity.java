package com.zy.pojo;

import java.util.Date;

/**
 * @ClassName PetShopMemberActivity
 * @Description TODO
 * @Author zy
 * @Date 2020/4/12 12:51
 */
public class PetShopMemberActivity {

    private String id;

    private String name;

    private String activityTime;

    private int score;

    private String remarks;

    private String shopId;

    private Boolean isEnd;

    private Date createTime;

    public PetShopMemberActivity() {
    }

    public PetShopMemberActivity(String id, String name, String activityTime, int score, String remarks, String shopId, Boolean isEnd, Date createTime) {
        this.id = id;
        this.name = name;
        this.activityTime = activityTime;
        this.score = score;
        this.remarks = remarks;
        this.shopId = shopId;
        this.isEnd = isEnd;
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

    public String getActivityTime() {
        return activityTime;
    }

    public void setActivityTime(String activityTime) {
        this.activityTime = activityTime;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
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

    public Boolean getEnd() {
        return isEnd;
    }

    public void setEnd(Boolean end) {
        isEnd = end;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
