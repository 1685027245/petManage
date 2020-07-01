package com.zy.controller.systemModule;

import com.alibaba.fastjson.JSON;
import com.zy.controller.petShop.PetShopController;
import com.zy.pojo.*;
import com.zy.service.OpenModuleService;
import com.zy.service.PetShopService;
import com.zy.service.SystemModuleService;
import com.zy.service.UserService;
import com.zy.serviceImpl.FilterChainDefinitionsServiceImpl;
import com.zy.utils.StringUtils;
import com.zy.utils.UUIDUtils;
import com.zy.utils.UploadFileUtil;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName SystemController
 * @Description TODO
 * @Author zy
 * @Date 2020/3/18 13:53
 */
@Controller
@RequestMapping(value = "/system")
public class SystemController {
    @Autowired
    private OpenModuleService openModuleService;

    @Autowired
    private UserService userService;

    @Autowired
    private PetShopService petShopService;

    @Autowired
    private SystemModuleService systemModuleService;


    @Autowired
    FilterChainDefinitionsServiceImpl filterChainDefinitionsService;

    /**
     * 重新加载配置规则
     */
    @RequestMapping(value="/reloadRole")
    public void reloadRole(){
        filterChainDefinitionsService.reloadFilterChains();
    }

    /**
     * 获取拦截规则
     * @return 所有未启用的
     */
    @RequestMapping("/getResource.html")
    @ResponseBody
    public String  getResource(){
        List<Resource> resourceList=systemModuleService.getAllSource();
        return JSON.toJSONString(resourceList);
    }

    /**
     * 获取拦截规则
     * @return 所有未启用的
     */
    @RequestMapping("/delResource.html")
    @ResponseBody
    public String  delResource(String id){
        int result=systemModuleService.delResource(id);
        if (result>0){
            reloadRole();
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 新增拦截规则
     * @return 所有未启用的
     */
    @RequestMapping("/addResource.html")
    @ResponseBody
    public String  addResource(Resource resource){
        resource.setId(UUIDUtils.getUUID());
        int result = systemModuleService.addResource(resource);
        if(result>0){
            reloadRole();
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 更新拦截规则
     * @return 所有未启用的
     */
   @RequestMapping("/updateResource.html")
    @ResponseBody
    public String  updateResource(Resource resource){
        int result = systemModuleService.updateResource(resource);
        if(result>0){
            reloadRole();
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转系统管理主页
     * @return
     */
    @RequestMapping("/systemIndex.html")
    public String  toIndex(Model model){

        int userTotal = userService.getUserCount();
        int petShopTotal = openModuleService.getAllPetShopCount();
        int infoTotal = openModuleService.getPetInfoCount();
        int petEncyclopediasTotal = petShopService.getEncyclopediasCount(null,null,null,null,null,null,null,null);

        Map<String,Object> map = new HashMap<>();
        map.put("userTotal",userTotal);
        map.put("petShopTotal",petShopTotal);
        map.put("infoTotal",infoTotal);
        map.put("petEncyclopediasTotal",petEncyclopediasTotal);

        model.addAttribute("countTotal",map);
        return "systemManager/systemIndex";
    }


    /**
     * 获取用户分析情况
     * @return
     */
    @RequestMapping("/getNewUser.html")
    @ResponseBody
    public String  getNewUser(String startTime,String endTime,String selectType) throws Exception {
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        List<Map<String, Object>> resultList = systemModuleService.getNewUserAnalysis(startTime,endTime,selectType.equals("month")?"%Y-%m":"%Y-%m-%d");
        if(selectType.equals("month")){
            resultMap = PetShopController.getSalesAnalysisList(resultList,resultMap,"userMap",startTime,endTime);
        }else {
            resultMap = PetShopController.getAnalysisByDayList(resultList,resultMap,"userMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }

    /**
     * 获取用户分析情况
     * @return
     */
    @RequestMapping("/getNewShopAnalysis.html")
    @ResponseBody
    public String  getNewShopAnalysis(String startTime,String endTime,String selectType) throws Exception {
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        List<Map<String, Object>> resultList = systemModuleService.getNewShopAnalysis(startTime,endTime,selectType.equals("month")?"%Y-%m":"%Y-%m-%d");
        if(selectType.equals("month")){
            resultMap = PetShopController.getSalesAnalysisList(resultList,resultMap,"newShopMap",startTime,endTime);
        }else {
            resultMap = PetShopController.getAnalysisByDayList(resultList,resultMap,"newShopMap",startTime,endTime);
        }
        return JSON.toJSONString(resultMap);
    }


    /**
     * 跳转宠物店审核
     * @return
     */
    @RequestMapping("/petShopApplicationAudit.html")
    public String  toPetShopApplicationAudit(){
        return "systemManager/petShopApplicationAudit";
    }

    /**
     * 跳转宠物店审核
     * @return 所有未启用的
     */
    @RequestMapping("/getPetShopApplicationAudit.html")
    @ResponseBody
    public String  getPetShopApplicationAudit(){
        PetShop petShop = new PetShop();
        petShop.setIsForbidden("待审核");
        List<PetShop> petShopList = petShopService.getAllPetShop(petShop);
        return JSON.toJSONString(petShopList);
    }

    /**
     * 宠物店审核
     * @return
     */
    @RequestMapping("/petShopToExamine.html")
    @ResponseBody
    public String petShopToExamine(String id,String userId,String isPass){
        PetShop petShop = new PetShop();
        petShop.setId(id);
        petShop.setAuditTime(StringUtils.getSystemTime());
        int result;
        if (isPass.equals("pass")){//通过审核
            petShop.setIsForbidden("启用");
            result = petShopService.updatePetShop(petShop);
            if (result>0){
                List<UserRole> userRoleList = userService.getUserRoleById(userId);
                if(!StringUtils.isEmpty(userRoleList)){
                    if(!userRoleList.get(0).getRoleName().equals("admin")){//判断是不是管理员
                        openModuleService.updateUserRoleRelation(userId,"1");
                    }
                }
            }
        }else {
            petShop.setIsForbidden("审核不通过");
            petShop.setBusinessStatus(false);
            result = petShopService.updatePetShop(petShop);
        }
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转权限管理
     * @return
     */
    @RequestMapping("/permissionManager.html")
    public String  toPermissionManager(){
        return "systemManager/permission";
    }

    /**
     * 获取所有权限
     * @return
     */
    @RequestMapping("/getAllPermission.html")
    @ResponseBody
    public String  getAllPermission(){
        List<Permission> permissionList =systemModuleService.getAllPermission();
        return JSON.toJSONString(permissionList);
    }

    /**
     * 获取所有角色
     * @return
     */
    @RequestMapping("/getAllRole.html")
    @ResponseBody
    public String  getAllRole(){
        List<UserRole> userRoleList =systemModuleService.getAllRole(null);
        return JSON.toJSONString(userRoleList);
    }

    /**
     * 获取用户所有角色
     * @return
     */
    @RequestMapping("/getRoleByUserId.html")
    @ResponseBody
    public String  getRoleByUserId(String userId){
        List<UserRole> userRoleList= userService.getUserRoleById(userId);
        return JSON.toJSONString(userRoleList);
    }

    /**
     * 绑定用户角色
     * @return
     */
    @RequestMapping("/bindUserRole.html")
    @ResponseBody
    public String  bindUserRole(String userId,String roleId){
        int result = userService.hasRoleRelationShip(userId,roleId);
        if(result>0){
            return JSON.toJSONString("hasUserRoleRelation");
        }else {
            UserRoleRelation userRoleRelation =new UserRoleRelation();
            userRoleRelation.setId(UUIDUtils.getUUID());
            userRoleRelation.setUserId(userId);
            userRoleRelation.setRoleId(roleId);
            userService.bindingRoleRelationship(userRoleRelation);
            return JSON.toJSONString("success");
        }
    }

    /**
     * 删除用户绑定角色
     * @return
     */
    @RequestMapping("/delUserRoleRelation.html")
    @ResponseBody
    public String  delUserRoleRelation(String userId){
        int result = userService.delUserRoleRelation(userId);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 更新角色信息
     * @return
     */
    @RequestMapping("/updateUserRole.html")
    @ResponseBody
    public String  updateUserRole(UserRole userRole){
        int result =systemModuleService.updateRole(userRole);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 删除角色信息
     * @return
     */
    @RequestMapping("/delUserRole.html")
    @ResponseBody
    public String  delUserRole(String roleId){
        int result =systemModuleService.delUserRole(roleId);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 更新角色信息
     * @return
     */
    @RequestMapping("/addUserRole.html")
    @ResponseBody
    public String  addUserRole(UserRole userRole){
        userRole.setId(UUIDUtils.getUUID());
        userRole.setCreateTime(StringUtils.getSystemTime());
        userRole.setStatus(1);
        int result =systemModuleService.addUserRole(userRole);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 跳转宠物百科管理页面
     * @return
     */
    @RequestMapping("/petEncyclopedias.html")
    public String  toPetEncyclopedias(){
        return "systemManager/petEncyclopediasManager";
    }

    /**
     * 跳转宠物百科修改
     * @return
     */
    @RequestMapping("/petEncyclopediasEdit.html/{id}")
    public String  toPetEncyclopediasEdit(@PathVariable("id")String id, Model model){
        if(!id.equals("0")){
            PetEncyclopedias petEncyclopedias = petShopService.getEncyclopediasById(id);
            model.addAttribute("petEncyclopedias",petEncyclopedias);
            model.addAttribute("pageId",id);
            String imgPath = petEncyclopedias.getImgPath();
            model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        }else {
            model.addAttribute("pageId","0");
        }

        return "systemManager/addEncyclopedias";
    }

    /**
     * 新增宠物百科
     * @return
     */
    @RequestMapping("/addEncyclopedias.html")
    @ResponseBody
    public String  addEncyclopedias(PetEncyclopedias petEncyclopedias){
        petEncyclopedias.setId(UUIDUtils.getUUID());
        petEncyclopedias.setCreateTime(StringUtils.getSystemTime());
        int result =systemModuleService.addEncyclopedias(petEncyclopedias);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 删除宠物百科
     * @return
     */
    @RequestMapping("/delEncyclopedias.html")
    @ResponseBody
    public String  delEncyclopedias(String id){
        int result = systemModuleService.delEncyclopedias(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 修改宠物百科
     * @return
     */
    @RequestMapping("/editEncyclopedias.html")
    @ResponseBody
    public String  editEncyclopedias(PetEncyclopedias petEncyclopedias){
        int result = systemModuleService.editEncyclopedias(petEncyclopedias);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转宠物店管理页面
     * @return
     */
    @RequestMapping("/petShopManager.html")
    public String  toPetShopManager(){
        return "systemManager/petShopManager";
    }

    /**
     * 获取所有宠物店
     * @return
     */
    @RequestMapping("/petShopListManager.html")
    @ResponseBody
    public String  petShopListManager(PetShop petShop){
        List<PetShop> petShopList = petShopService.getAllPetShop(petShop);
        if(petShopList.size()>0){
            return JSON.toJSONString(petShopList);
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 改变宠物店平台状态
     * @return
     */
    @RequestMapping("/changePetShopStatus.html")
    @ResponseBody
    public String  changePetShopStatus(PetShop petShop){
        int result = petShopService.updatePetShop(petShop);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转商品销售分析管理页面
     * @return
     */
    @RequestMapping("/merchandiseSalesAnalysis.html")
    public String  toGoodsSalesAnalysis(){
        return "systemManager/petSalesAnalysisManager";
    }

    /**
     * 跳转用户分析
     * @return
     */
    @RequestMapping("/userAnalysis.html")
    public String  userAnalysis(){
        return "systemManager/userAnalysisManager";
    }

    /**
     * 跳转商品销售分析管理页面
     * @return
     */
    @RequestMapping("/getMerchandiseSalesAnalysis.html")
    @ResponseBody
    public String  getGoodsSalesAnalysis() throws Exception{
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();

        //统计宠物销售分类占比
        List<Map<String, Object>> petSalesEncyclopediasList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.category","p2.category",null,"已售",-1);
        resultMap = PetShopController.getSalesAnalysisList(petSalesEncyclopediasList,resultMap,"petSalesEncyclopediasMap",null,null);
        //统计食品销售分类占比
        List<Map<String, Object>> foodSalesAnalysisByCategoryList = petShopService.getFoodSalesAnalysisByCategory("sold",null,-1);
        resultMap = PetShopController.getSalesAnalysisList(foodSalesAnalysisByCategoryList,resultMap,"foodSalesAnalysisByCategoryMap",null,null);

        //宠物待售占比
        List<Map<String, Object>> petNoSalesEncyclopediasList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.category","p2.category",null,"待售",-1);
        resultMap = PetShopController.getSalesAnalysisList(petNoSalesEncyclopediasList,resultMap,"petNoSalesEncyclopediasMap",null,null);
        //统计食品待售占比
        List<Map<String, Object>> foodNoSalesAnalysisByCategoryList = petShopService.getFoodSalesAnalysisByCategory("stock",null,-1);
        resultMap = PetShopController.getSalesAnalysisList(foodNoSalesAnalysisByCategoryList,resultMap,"foodNoSalesAnalysisByCategoryMap",null,null);

        return JSON.toJSONString(resultMap);
    }


    /**
     * 根据时间段获取宠物店销售金额情况
     * @return
     */
    @RequestMapping("/getPetSalesMoneyAnalysis.html")
    @ResponseBody
    public String getPetSalesMoneyAnalysis(String startTime,String endTime,String selectType) throws Exception{
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //获取宠物销售金额
        List<Map<String, Object>> petMoneyList = petShopService.getPetSalesAnalysisByMonths("pet",null,startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //食品销售金额
        List<Map<String, Object>> foodMoneyList = petShopService.getPetSalesAnalysisByMonths("food",null,startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //服务销售金额
        List<Map<String, Object>> seviceMoneyList = petShopService.getPetSalesAnalysisByMonths("service",null,startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //周边销售金额
        List<Map<String, Object>> peripheryMoneyList = petShopService.getPetSalesAnalysisByMonths("periphery",null,startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        if(selectType.equals("month")){
            resultMap = PetShopController.getSalesAnalysisList(petMoneyList,resultMap,"petMoneyMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(foodMoneyList,resultMap,"foodMoneyMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(seviceMoneyList,resultMap,"serviceMoneyMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(peripheryMoneyList,resultMap,"peripheryMoneyMap",startTime,endTime);
        }else {
            resultMap = PetShopController.getAnalysisByDayList(petMoneyList,resultMap,"petMoneyMap",startTime,endTime);
            resultMap = PetShopController.getAnalysisByDayList(foodMoneyList,resultMap,"foodMoneyMap",startTime,endTime);
            resultMap = PetShopController.getAnalysisByDayList(seviceMoneyList,resultMap,"serviceMoneyMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(peripheryMoneyList,resultMap,"peripheryMoneyMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }

    /**
     * 根据时间段获取宠物店销售数量情况
     * @return
     */
    @RequestMapping("/getPetSalesNumberAnalysis.html")
    @ResponseBody
    public String getPetSalesNumberAnalysis(String startTime,String endTime,String selectType) throws Exception{
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //获取宠物销售量
        List<Map<String, Object>> petNumberList = petShopService.getPetSalesAnalysisByMonths("pet",null,startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //食品销售量
        List<Map<String, Object>> foodNumberList = petShopService.getPetSalesAnalysisByMonths("food",null,startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //服务销售量
        List<Map<String, Object>> serviceNumberList = petShopService.getPetSalesAnalysisByMonths("service",null,startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //周边销售量
        List<Map<String, Object>> peripheryNumberList = petShopService.getPetSalesAnalysisByMonths("periphery",null,startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));

        if(selectType.equals("month")){
            resultMap = PetShopController.getSalesAnalysisList(petNumberList,resultMap,"petNumberMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(foodNumberList,resultMap,"foodNumberMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(serviceNumberList,resultMap,"serviceNumberMap",startTime,endTime);
            resultMap = PetShopController.getSalesAnalysisList(peripheryNumberList,resultMap,"peripheryNumberMap",startTime,endTime);
        }else {
            resultMap = PetShopController.getAnalysisByDayList(petNumberList,resultMap,"petNumberMap",startTime,endTime);
            resultMap = PetShopController.getAnalysisByDayList(foodNumberList,resultMap,"foodNumberMap",startTime,endTime);
            resultMap = PetShopController.getAnalysisByDayList(serviceNumberList,resultMap,"serviceNumberMap",startTime,endTime);
            resultMap = PetShopController.getAnalysisByDayList(peripheryNumberList,resultMap,"peripheryNumberMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }

    /**
     * 宠物销售排名靠前
     * @return
     */
    @RequestMapping("/getPetSalesEncyclopediasHighest.html")
    @ResponseBody
    public String getPetSalesEncyclopediasHighest(int pageSize) throws Exception{
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //宠物最畅销品种(前十)
        List<Map<String, Object>> petSalesEncyclopediasHighestList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.name","p1.pet_encyclopedias_id",null,"已售",pageSize);
        resultMap = PetShopController.getSalesAnalysisList(petSalesEncyclopediasHighestList,resultMap,"petSalesEncyclopediasHighestMap",null,null);
        return JSON.toJSONString(resultMap);
    }

    /**
     * 食品销售排名靠前
     * @return
     */
    @RequestMapping("/getFoodSalesAnalysisHighes.html")
    @ResponseBody
    public String getFoodSalesAnalysisHighes(int pageSize) throws Exception{
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //食品最畅销产品(前十)
        List<Map<String, Object>> foodSalesAnalysisHighesList = petShopService.getFoodSalesAnalysisHighes(null,pageSize);
        resultMap = PetShopController.getSalesAnalysisList(foodSalesAnalysisHighesList,resultMap,"foodSalesAnalysisHighesMap",null,null);
        return JSON.toJSONString(resultMap);
    }

    /**
     * 跳转开放模块首页数据管理
     * @return
     */
    @RequestMapping("/openIndexDataManager.html")
    public String  openIndexDataManager(Model model){
        OpenIndexData openIndexData = systemModuleService.getOpenIndexData();
        model.addAttribute("openIndexData",openIndexData);

        String imgPath = openIndexData.getPlatformImg();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "systemManager/openIndexManager";
    }

    /**
     * 修改开放模块首页数据管理
     * @return
     */
    @RequestMapping("/changeOpenIndexData.html")
    @ResponseBody
    public String  changeOpenIndexData(OpenIndexData openIndexData){
        int result = systemModuleService.updateOpenIndexData(openIndexData);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转宠物资讯管理页面
     * @return
     */
    @RequestMapping("/petInformationManager.html")
    public String  petInformationManager(){
        return "systemManager/petInformationManager";
    }

    /**
     * 获取宠物资讯数据
     * @return
     */
    @RequestMapping("/getPetInformation.html")
    @ResponseBody
    public String  getPetInformation(){
        List<PetInformation> petInformationList =openModuleService.getPetInformation(-1,-1,null,null);
        return JSON.toJSONString(petInformationList);
    }

    /**
     * 修改宠物资讯状态
     * @return
     */
    @RequestMapping("/changePetInformationStatus.html")
    @ResponseBody
    public String  changePetInformationStatus(String id,String status){
        int result =systemModuleService.updatePetInfoStatus(id,status);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 删除宠物资讯状态
     * @return
     */
    @RequestMapping("/delPetInformation.html")
    @ResponseBody
    public String  delPetInformationStatus(String id){
        int result =systemModuleService.delPetInfo(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转新增资讯页面
     * @return
     */
    @RequestMapping("/addPetInformation.html/{id}")
    public String  addPetInformation(@PathVariable("id")String id,Model model){
        if(!id.equals("0")){
            PetInformation petInformation=openModuleService.getPetInformationById(id);
            model.addAttribute("petInformation",petInformation);
        }
        return "systemManager/addPetInformation";
    }

    /**
     * 保存资讯
     * @return
     */
    @RequestMapping("/savePetInfo.html")
    @ResponseBody
    public String  addPetInfo(PetInformation petInformation){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        petInformation.setId(UUIDUtils.getUUID());
        petInformation.setCreateTime(StringUtils.getSystemTime());
        petInformation.setUserId(user.getId());
        int result = systemModuleService.savePetInfo(petInformation);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 保存资讯
     * @return
     */
    @RequestMapping("/updatePetInfo.html")
    @ResponseBody
    public String  updatePetInfo(PetInformation petInformation){
        int result = systemModuleService.updatePetInfo(petInformation);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 上传平台图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadImg")
    @ResponseBody
    public Map<String,Object> uploadImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"platform");
        return map;
    }


    /**
     * 上传宠物百科图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadPetEncyclopediasImg")
    @ResponseBody
    public Map<String,Object> uploadPeripheryImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"encyclopedias");
        return map;
    }
}

