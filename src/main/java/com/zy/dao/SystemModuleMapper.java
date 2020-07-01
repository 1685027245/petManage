package com.zy.dao;

import com.zy.pojo.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * @ClassName OpenModuleMapper
 * @Description TODO
 * @Author zy
 * @Date 2020/3/16 12:23
 */
public interface SystemModuleMapper {

    /**
     * 新增宠物百科
     * @param petEncyclopedias
     * @return
     */
    public int addEncyclopedias(PetEncyclopedias petEncyclopedias);

    /**
     * 删除宠物百科
     * @param id
     * @return
     */
    public int delEncyclopedias(@Param("id") String id);

    /**
     * 更新宠物百科
     * @param petEncyclopedias
     * @return
     */
    public int editEncyclopedias(PetEncyclopedias petEncyclopedias);

    /**
     * 获取开放模块的主页数据
     * @return
     */
    public OpenIndexData getOpenIndexData();

    /**
     * 更新开放模块首页数据
     * @param openIndexData
     * @return
     */
    public int updateOpenIndexData(OpenIndexData openIndexData);

    /**
     * 更新资讯状态
     * @param id
     * @param status
     * @return
     */
    public int updatePetInfoStatus(@Param("id") String id,@Param("status") String status);

    /**
     * 删除宠物资讯
     * @param id
     * @return
     */
    public int delPetInfo(@Param("id")String id);

    /**
     * 保存资讯
     * @param petInformation
     * @return
     */
    public int savePetInfo(PetInformation petInformation);

    /**
     * 更新资讯
     * @param petInformation
     * @return
     */
    public int updatePetInfo(PetInformation petInformation);

    /**
     * 获取用户注册情况
     * @return
     */
    List<Map<String, Object>> getNewUserAnalysis(@Param("startTime")String startTime,@Param("endTime")String endTime,@Param("selectType") String selectType);

    /**
     * 获取宠物店申请情况
     * @return
     */
    List<Map<String, Object>> getNewShopAnalysis(@Param("startTime")String startTime,@Param("endTime")String endTime,@Param("selectType") String selectType);

}
