package com.zy.pojo;

/**
 * @ClassName OpenIndexData
 * @Description TODO
 * @Author zy
 * @Date 2020/3/23 20:30
 */
public class OpenIndexData {

    private String id;

    private String platformDescription;

    private String platformImg;

    private String encyclopediaTitle;

    private String encyclopediaDescription;

    private String informationTitle;

    private String informationDescription;

    private String shopTitle;

    private String shopDescription;

    public OpenIndexData() {
    }


    public OpenIndexData(String id, String platformDescription, String platformImg, String encyclopediaTitle, String encyclopediaDescription, String informationTitle, String informationDescription, String shopTitle, String shopDescription) {
        this.id = id;
        this.platformDescription = platformDescription;
        this.platformImg = platformImg;
        this.encyclopediaTitle = encyclopediaTitle;
        this.encyclopediaDescription = encyclopediaDescription;
        this.informationTitle = informationTitle;
        this.informationDescription = informationDescription;
        this.shopTitle = shopTitle;
        this.shopDescription = shopDescription;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPlatformDescription() {
        return platformDescription;
    }

    public void setPlatformDescription(String platformDescription) {
        this.platformDescription = platformDescription;
    }

    public String getPlatformImg() {
        return platformImg;
    }

    public void setPlatformImg(String platformImg) {
        this.platformImg = platformImg;
    }

    public String getEncyclopediaTitle() {
        return encyclopediaTitle;
    }

    public void setEncyclopediaTitle(String encyclopediaTitle) {
        this.encyclopediaTitle = encyclopediaTitle;
    }

    public String getEncyclopediaDescription() {
        return encyclopediaDescription;
    }

    public void setEncyclopediaDescription(String encyclopediaDescription) {
        this.encyclopediaDescription = encyclopediaDescription;
    }

    public String getInformationTitle() {
        return informationTitle;
    }

    public void setInformationTitle(String informationTitle) {
        this.informationTitle = informationTitle;
    }

    public String getInformationDescription() {
        return informationDescription;
    }

    public void setInformationDescription(String informationDescription) {
        this.informationDescription = informationDescription;
    }

    public String getShopTitle() {
        return shopTitle;
    }

    public void setShopTitle(String shopTitle) {
        this.shopTitle = shopTitle;
    }

    public String getShopDescription() {
        return shopDescription;
    }

    public void setShopDescription(String shopDescription) {
        this.shopDescription = shopDescription;
    }
}
