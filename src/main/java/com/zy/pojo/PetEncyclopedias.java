package com.zy.pojo;

import java.util.Date;

/* *
 *功能描述: 宠物百科
 * @author zy
 * @date
 */
public class PetEncyclopedias {

    private String id;

    private String name;

    private String alias;

    private String shape;

    private String hairLength;

    private String englishName;

    private String intelligenceQuotient;

    private String countryOfOrigin;

    private String weight;

    private String life;

    private String price;

    private String coatColor;

    private String function;

    private String detailCharacterities;

    private String imgPath;

    private String origin;

    private String category;

    private String stockCount;//接收库存统计

    private Date createTime;

    private String keyword;

    private String environment;

    private String varieties;

    public PetEncyclopedias() {
    }

    public PetEncyclopedias(String id, String name, String alias, String shape, String hairLength, String englishName, String intelligenceQuotient, String countryOfOrigin, String weight, String life, String price, String coatColor, String function, String detailCharacterities, String imgPath, String origin, String category, String stockCount, Date createTime, String keyword, String environment, String varieties) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.shape = shape;
        this.hairLength = hairLength;
        this.englishName = englishName;
        this.intelligenceQuotient = intelligenceQuotient;
        this.countryOfOrigin = countryOfOrigin;
        this.weight = weight;
        this.life = life;
        this.price = price;
        this.coatColor = coatColor;
        this.function = function;
        this.detailCharacterities = detailCharacterities;
        this.imgPath = imgPath;
        this.origin = origin;
        this.category = category;
        this.stockCount = stockCount;
        this.createTime = createTime;
        this.keyword = keyword;
        this.environment = environment;
        this.varieties = varieties;
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

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getShape() {
        return shape;
    }

    public void setShape(String shape) {
        this.shape = shape;
    }

    public String getHairLength() {
        return hairLength;
    }

    public void setHairLength(String hairLength) {
        this.hairLength = hairLength;
    }

    public String getEnglishName() {
        return englishName;
    }

    public void setEnglishName(String englishName) {
        this.englishName = englishName;
    }

    public String getIntelligenceQuotient() {
        return intelligenceQuotient;
    }

    public void setIntelligenceQuotient(String intelligenceQuotient) {
        this.intelligenceQuotient = intelligenceQuotient;
    }

    public String getCountryOfOrigin() {
        return countryOfOrigin;
    }

    public void setCountryOfOrigin(String countryOfOrigin) {
        this.countryOfOrigin = countryOfOrigin;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getLife() {
        return life;
    }

    public void setLife(String life) {
        this.life = life;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCoatColor() {
        return coatColor;
    }

    public void setCoatColor(String coatColor) {
        this.coatColor = coatColor;
    }

    public String getFunction() {
        return function;
    }

    public void setFunction(String function) {
        this.function = function;
    }

    public String getDetailCharacterities() {
        return detailCharacterities;
    }

    public void setDetailCharacterities(String detailCharacterities) {
        this.detailCharacterities = detailCharacterities;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStockCount() {
        return stockCount;
    }

    public void setStockCount(String stockCount) {
        this.stockCount = stockCount;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public String getEnvironment() {
        return environment;
    }

    public void setEnvironment(String environment) {
        this.environment = environment;
    }

    public String getVarieties() {
        return varieties;
    }

    public void setVarieties(String varieties) {
        this.varieties = varieties;
    }
}
