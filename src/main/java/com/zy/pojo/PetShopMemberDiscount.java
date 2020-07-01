package com.zy.pojo;

/**
 * @ClassName PetShopMemberDiscount
 * @Description 会员优惠设置实体类别
 * @Author zy
 * @Date 2020/3/10 11:40
 */
public class PetShopMemberDiscount {

    private String id;

    private Double upperLimitOne;

    private Double upperLimitTwo;

    private Double upperLimitThree;

    private Double upperLimitFour;

    private String nameOne;

    private String nameTwo;

    private String nameThree;

    private String nameFour;

    private String discountOne;

    private String discountTwo;

    private String discountThree;

    private String discountFour;

    private Double integralSum;

    private String shopId;

    public PetShopMemberDiscount() {
    }

    public PetShopMemberDiscount(String id, Double upperLimitOne, Double upperLimitTwo, Double upperLimitThree, Double upperLimitFour, String nameOne, String nameTwo, String nameThree, String nameFour, String discountOne, String discountTwo, String discountThree, String discountFour, Double integralSum, String shopId) {
        this.id = id;
        this.upperLimitOne = upperLimitOne;
        this.upperLimitTwo = upperLimitTwo;
        this.upperLimitThree = upperLimitThree;
        this.upperLimitFour = upperLimitFour;
        this.nameOne = nameOne;
        this.nameTwo = nameTwo;
        this.nameThree = nameThree;
        this.nameFour = nameFour;
        this.discountOne = discountOne;
        this.discountTwo = discountTwo;
        this.discountThree = discountThree;
        this.discountFour = discountFour;
        this.integralSum = integralSum;
        this.shopId = shopId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Double getUpperLimitOne() {
        return upperLimitOne;
    }

    public void setUpperLimitOne(Double upperLimitOne) {
        this.upperLimitOne = upperLimitOne;
    }

    public Double getUpperLimitTwo() {
        return upperLimitTwo;
    }

    public void setUpperLimitTwo(Double upperLimitTwo) {
        this.upperLimitTwo = upperLimitTwo;
    }

    public Double getUpperLimitThree() {
        return upperLimitThree;
    }

    public void setUpperLimitThree(Double upperLimitThree) {
        this.upperLimitThree = upperLimitThree;
    }

    public Double getUpperLimitFour() {
        return upperLimitFour;
    }

    public void setUpperLimitFour(Double upperLimitFour) {
        this.upperLimitFour = upperLimitFour;
    }

    public String getNameOne() {
        return nameOne;
    }

    public void setNameOne(String nameOne) {
        this.nameOne = nameOne;
    }

    public String getNameTwo() {
        return nameTwo;
    }

    public void setNameTwo(String nameTwo) {
        this.nameTwo = nameTwo;
    }

    public String getNameThree() {
        return nameThree;
    }

    public void setNameThree(String nameThree) {
        this.nameThree = nameThree;
    }

    public String getNameFour() {
        return nameFour;
    }

    public void setNameFour(String nameFour) {
        this.nameFour = nameFour;
    }

    public String getDiscountOne() {
        return discountOne;
    }

    public void setDiscountOne(String discountOne) {
        this.discountOne = discountOne;
    }

    public String getDiscountTwo() {
        return discountTwo;
    }

    public void setDiscountTwo(String discountTwo) {
        this.discountTwo = discountTwo;
    }

    public String getDiscountThree() {
        return discountThree;
    }

    public void setDiscountThree(String discountThree) {
        this.discountThree = discountThree;
    }

    public String getDiscountFour() {
        return discountFour;
    }

    public void setDiscountFour(String discountFour) {
        this.discountFour = discountFour;
    }

    public Double getIntegralSum() {
        return integralSum;
    }

    public void setIntegralSum(Double integralSum) {
        this.integralSum = integralSum;
    }

    public String getShopId() {
        return shopId;
    }

    public void setShopId(String shopId) {
        this.shopId = shopId;
    }
}
