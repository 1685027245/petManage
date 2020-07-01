package com.zy.pojo;

import java.util.List;

/**
 * @ClassName ResultQuery
 * @Description TODO
 * @Author zy
 * @Date 2020/3/30 19:47
 */
public class ResultQuery<T> {
    private List<T> list;           //对象记录结果集
    private int total;      // 总条数数
    private int limit;     // 每页显示条数
    private int pages;      // 总页数
    private int pageNumber; // 当前页
    private int low;        //需要获取数据的第一个id
    private int high;       //需要获取数据的最后一个id


    public int getLow() {
        return low;
    }

    public void setLow(int low) {
        this.low = low;
    }

    public int getHigh() {
        return high;
    }

    public void setHigh(int high) {
        this.high = high;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
        this.low = (this.pageNumber - 1) * this.limit;
        this.high = low + this.limit - 1;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public int getPageNumber() {
        return pageNumber;

    }

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
        this.low = (this.pageNumber - 1) * this.limit;
        this.high = low + this.limit - 1;
    }

}
