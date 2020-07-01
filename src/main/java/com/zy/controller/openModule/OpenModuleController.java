package com.zy.controller.openModule;

import com.alibaba.fastjson.JSON;
import com.zy.pojo.*;
import com.zy.service.OpenModuleService;
import com.zy.service.PetShopService;
import com.zy.service.SystemModuleService;
import com.zy.service.UserService;
import com.zy.utils.DownloadFileUtil;
import com.zy.utils.StringUtils;
import com.zy.utils.UUIDUtils;
import com.zy.utils.UploadFileUtil;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

/**
 * @ClassName openModuleController
 * @Description 用户开放平台控制层
 * @Author zy
 * @Date 2020/3/14 18:13
 */
@Controller
@RequestMapping(value = "/open")
public class OpenModuleController {

    @Autowired
    private PetShopService petShopService;

    @Autowired
    private OpenModuleService openModuleService;

    @Autowired
    private SystemModuleService systemModuleService;

    @Autowired
    private UserService userService;
    /**
     * 跳转开放平台首页
     * @return
     */
    @RequestMapping("/index.html")
    public String  toOpenIndex(Model model){
        OpenIndexData openIndexData = systemModuleService.getOpenIndexData();
        model.addAttribute("openIndexData",openIndexData);

        String imgPath = openIndexData.getPlatformImg();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        //置顶资讯
        List<PetInformation> petInformationList=openModuleService.getPetInformation(0,1,"置顶",null);
        PetInformation petInfoTop = petInformationList.get(0);
        petInfoTop.setContent(petInfoTop.getContent().replaceAll("\\&[a-zA-Z]{1,10};", "").replaceAll("<[^>]*>", "").replaceAll("[(/>)<]", ""));
        model.addAttribute("petInfoTop",petInfoTop);
        return "openModule/openIndex";
    }

    /**
     * 跳转到宠物百科页面
     * @return
     */
    @RequestMapping("/encyclopedias.html")
    public String toOpenPetEncyclopedias(){
        return "openModule/openEncyclopedias";
    }

    /**
     * 跳转宠物百科详情
     * @return
     */
    @RequestMapping("/encyclopediasDetails.html/{id}")
    public String encyclopediasDetails(@PathVariable("id") String id,Model model){
        PetEncyclopedias encyclopedias = petShopService.getEncyclopediasById(id);
        model.addAttribute("encyclopedias",encyclopedias);

        String imgPath = encyclopedias.getImgPath();
        List<String> imgPathList = StringUtils.getImgPath(imgPath);
        model.addAttribute("imgPathList",imgPathList);
        model.addAttribute("firstImg",imgPathList.get(0));
        model.addAttribute("imgNum",imgPathList.size());
        return "openModule/openEncyclopediasDetails";
    }


    /**
     * 宠物条件获取宠物百科
     * @return
     */
    @RequestMapping("/getAllEncyclopedias.html")
    @ResponseBody
    public String getAllEncyclopedias(int pageNum,int pageSize,String category,String shape,String hairLength,String coatColor,String petFunction,String environment,String varieties,String keyword){
        ResultQuery<PetEncyclopedias> resultQuery = new ResultQuery();
        int startRow = 0;
        startRow = (pageNum-1)*pageSize;

        List<PetEncyclopedias> encyclopediasList = petShopService.getEncyclopedias(startRow,pageSize,category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword);
        int totalSize = petShopService.getEncyclopediasCount(category,shape,hairLength,coatColor,petFunction,environment,varieties,keyword);

        resultQuery.setList(encyclopediasList);
        resultQuery.setPageNumber(pageNum);
        resultQuery.setTotal(totalSize);
        return JSON.toJSONString(resultQuery);
    }


    /**
     * 跳转到宠物资讯
     * @return
     */
    @RequestMapping("/information.html")
    public String toOpenInformation(){
        /*List<PetInformation> petInformationList=openModuleService.getPetInformation(0,5,null,"已发布");
        if(petInformationList.size()>0){
            for (PetInformation p:petInformationList){
                p.setContent(p.getContent().replaceAll("\\&[a-zA-Z]{1,10};", "").replaceAll("<[^>]*>", "").replaceAll("[(/>)<]", ""));
            }
        }
        model.addAttribute("petInformationList",petInformationList);*/
        return "openModule/openInformation";
    }

    /**
     * 跳转到宠物资讯
     * @return
     */
    @RequestMapping("/getInformation.html")
    @ResponseBody
    public String getInformation(Integer pageNum,Integer pageSize,String status,String category){
        ResultQuery<PetInformation> resultQuery = new ResultQuery();
        int startRow = 0;
        startRow = (pageNum-1)*pageSize;

        List<PetInformation> petInformationList=openModuleService.getPetInformation(startRow,pageSize,status,category);
        if(petInformationList.size()>0){
            for (PetInformation p:petInformationList){
                p.setContent(p.getContent().replaceAll("\\&[a-zA-Z]{1,10};", "").replaceAll("<[^>]*>", "").replaceAll("[(/>)<]", ""));
            }
        }
        resultQuery.setList(petInformationList);
        resultQuery.setPageNumber(pageNum);
        resultQuery.setLimit(pageSize);
        return JSON.toJSONString(resultQuery);
    }


    /**
     * 跳转到宠物资讯详情
     * @return
     */
    @RequestMapping("/informationDetails.html/{id}")
    public String informationDetails(@PathVariable("id")String id,Model model){
        PetInformation petInformation=openModuleService.getPetInformationById(id);
        model.addAttribute("petInformation",petInformation);
        return "openModule/openInformationDetails";
    }


    /**
     * 跳转到宠物店列表页面
     * @return
     */
    @RequestMapping("/petShop.html")
    public String toOpenPetShop(Model model){
        /*List<PetShop> petShopList= openModuleService.getNearbyPetShop(null,null);
        model.addAttribute("petShopList",petShopList);

        for(PetShop petShop:petShopList){
            petShop.setScore(openModuleService.getPetShopScore(petShop.getId()));
            petShop.setShopImgPath(StringUtils.getImgPath(petShop.getShopImgPath()).get(0));
        }
        */

        return "openModule/openPetShop";
    }

    /**
     * 获取附近宠物店列表页面
     * @return
     */
    @RequestMapping("/getNearByPetShop.html")
    @ResponseBody
    public String getNearByPetShop(int pageNum,int pageSize,String keyword,String longitude,String latitude){
        ResultQuery<PetShop> resultQuery = new ResultQuery();

        int startRow = 0;
        startRow = (pageNum-1)*pageSize;

        List<PetShop> petShopList= openModuleService.getNearbyPetShop(startRow,pageSize,keyword,longitude,latitude);
        for(PetShop petShop:petShopList){
            petShop.setScore(openModuleService.getPetShopScore(petShop.getId()));
            petShop.setShopImgPath(StringUtils.getImgPath(petShop.getShopImgPath()).get(0));
        }
        int totalSize = openModuleService.getNearbyPetShopCount(longitude,latitude,keyword);
        resultQuery.setList(petShopList);
        resultQuery.setPageNumber(pageNum);
        resultQuery.setLimit(pageSize);
        resultQuery.setTotal(totalSize);

        return JSON.toJSONString(resultQuery);
    }


    /**
     * 文件下载
     * @throws IOException
     *//*
    @RequestMapping(value="/download",method= RequestMethod.GET)
    public void download(@RequestParam(value="filename")String filename, HttpServletRequest request, HttpServletResponse response) throws IOException {
        DownloadFileUtil.downloadFile(filename,request,response);
    }*/


    /**
     * 跳转到朋友圈
     * @return
     */
    @RequestMapping("/wechatMoments.html")
    public String toOpenWechatMoments(){
        return "openModule/openWechatMoments";
    }

    /**
     * 获取朋友圈数据
     * @return
     */
    @RequestMapping("/getWechatMoments.html")
    @ResponseBody
    public String getWechatMoments(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        List<Moments> momentsList = openModuleService.getMoments(user.getId());

        return JSON.toJSONString(momentsList);
    }

    /**
     * 跳转到发表朋友圈
     * @return
     */
    @RequestMapping("/addMoments.html")
    public String openAddMoments(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取草稿
        Moments moments = openModuleService.getIsSaveMoments(user.getId());
        model.addAttribute("moments",moments);

        if (!StringUtils.isEmpty(moments)){
            String imgPath = moments.getImgPath();
            if (!StringUtils.isEmpty(imgPath)){
                model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
            }
        }

        return "openModule/openAddMoments";
    }

    /**
     * 跳转到发布文章
     * @return
     */
    @RequestMapping("/addArticle.html")
    public String addArticle(){
        return "openModule/openAddArticle";
    }


    /**
     * 跳转到用户中心
     * @return
     */
    @RequestMapping("/userCenter.html")
    public String toOpenUserCenter(){
        return "openModule/openUserCenter";
    }

    /**
     * 跳转到我的预约
     * @return
     */
    @RequestMapping("/order.html")
    public String toMyOrder(){
        return "openModule/myOrder";
    }

    /**
     * 跳转到我的预约
     * @return
     */
    @RequestMapping("/member.html")
    public String toMymember(){
        return "openModule/openMyMember";
    }



    /**
     * 获取用户中心数据
     * @return
     */
    @RequestMapping("/getUserCenterData.html")
    @ResponseBody
    public String getUserCenterData(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        List<Moments> momentsList = openModuleService.getMoments(user.getId());
        return JSON.toJSONString(momentsList);
    }


    /**
     * 跳转朋友圈详情
     * @return
     */
    @RequestMapping("/weChatDetails.html/{id}")
    public String weChatDetails(@PathVariable("id") String id,Model model){
        Moments moments = openModuleService.getMomentesById(id);
        model.addAttribute("moments",moments);
        if (!StringUtils.isEmpty(moments.getImgPath())){
            model.addAttribute("imgPathList",StringUtils.getImgPath(moments.getImgPath()));
        }
        return "openModule/openWeChatDetails";
    }


    /**
     * 跳转到申请宠物店页面
     * @return
     */
    @RequestMapping("/applyPetShop.html/{id}")
    public String openApplyPetShop(@PathVariable("id") String id,Model model){
        if(id.equals("0")){
            //获取用户信息
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            PetShop petShop = petShopService.getPetShopByUserId(user.getId());
            if(!StringUtils.isEmpty(petShop)){
                return "redirect:/open/applyPetShopMsg.html";
            }
        }else {
            PetShop petShop = petShopService.getPetShopByShopId(id);
            model.addAttribute("petShop",petShop);
            model.addAttribute("imgPathList",StringUtils.getImgPath(petShop.getShopImgPath()));
        }
        return "openModule/applyPetShop";
    }

    /**
     * 跳转到申请申请数据页面（已经申请）
     * @return
     */
    @RequestMapping("/applyPetShopMsg.html")
    public String applyPetShopMsg(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        model.addAttribute("petShop",petShop);

        String imgPath = petShop.getShopImgPath();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "openModule/applyPetShopMsg";
    }

    /**
     * 提交申请宠物店
     * @return
     */
    @RequestMapping("/applyPetShopForSubmission.html")
    @ResponseBody
    public String applyPetShop(PetShop petShop){

        if(!StringUtils.isEmpty(petShop.getId())){//再次提交
            int result = petShopService.updatePetShop(petShop);
            if(result>0){
                return JSON.toJSONString("success");
            }
            return JSON.toJSONString("fail");
        }else {
            //获取用户信息
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            if(!StringUtils.isEmpty(petShopService.getPetShopByUserId(user.getId()))){
                return JSON.toJSONString("hasPetShop");
            }
            String shopId = UUIDUtils.getUUID();
            petShop.setId(shopId);
            petShop.setCreateTime(StringUtils.getSystemTime());
            petShop.setAcceptAppointmentOrNot(false);
            petShop.setBusinessStatus(false);
            petShop.setIsForbidden("待审核");
            petShop.setUserId(user.getId());
            petShop.setBusinessHours("8:00-20:00");
            int result = openModuleService.addPetShop(petShop);
            if(result>0){
                //宠物店申请中，添加宠物店默认优惠规则
                PetShopMemberDiscount shopMemberDiscount = new PetShopMemberDiscount();
                shopMemberDiscount.setId(UUIDUtils.getUUID());
                shopMemberDiscount.setShopId(shopId);
                openModuleService.addPetShopMemberDiscount(shopMemberDiscount);
                //修改权限为申请宠物店中
                openModuleService.updateUserRoleRelation(user.getId(),"4");
                return JSON.toJSONString("success");
            }
            return JSON.toJSONString("fail");
        }
    }

    /**
     * 更新宠物店信息
     * @return
     */
    @RequestMapping("/updatePetShop.html")
    @ResponseBody
    public String updatePetShop(PetShop petShop){
        int result = petShopService.updatePetShop(petShop);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转到宠物店详情
     * @return
     */
    @RequestMapping("/petShopDetails.html/{id}")
    public String openPetShopDetails(@PathVariable("id") String id, Model model){
        PetShop petShop = petShopService.getPetShopByShopId(id);
        model.addAttribute("petShop",petShop);

        String imgPath = petShop.getShopImgPath();
        List<String> imgPathList = StringUtils.getImgPath(imgPath);
        model.addAttribute("imgPathList",imgPathList);
        model.addAttribute("imgPathNum",imgPathList.size());
        model.addAttribute("imgPathFirstImg",imgPathList.get(0));

        //获取评分
        double score = openModuleService.getPetShopScore(id);
        model.addAttribute("petScore",score);

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if(!StringUtils.isEmpty(user)){
            PetShopUserOrder petShopUserOrder = new PetShopUserOrder();
            petShopUserOrder.setShopId(id);
            petShopUserOrder.setUserId(user.getId());
            petShopUserOrder.setResult("预约中");
            List<PetShopUserOrder> petShopUserOrderList = openModuleService.getPetShopUserOrder(petShopUserOrder);
            if(petShopUserOrderList.size()>0){
                model.addAttribute("orderMsg",petShopUserOrderList.get(0));
            }else {
                model.addAttribute("orderMsg",null);
            }
        }

        String userId = "";
        if(!StringUtils.isEmpty(user)){
            userId = user.getId();
        }
        //记录浏览记录
        PetShopBrowseRecord petShopBrowseRecord = new PetShopBrowseRecord(UUIDUtils.getUUID(),id,userId,StringUtils.getSystemTime());
        openModuleService.addPetShopBrowseRecord(petShopBrowseRecord);
        return "openModule/openPetShopDetails";
    }


    /**
     * 提交申请预约
     * @return
     */
    @RequestMapping("/addOrder.html")
    @ResponseBody
    public String addOrder(PetShopUserOrder petShopUserOrder){
        petShopUserOrder.setId(UUIDUtils.getUUID());
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        petShopUserOrder.setUserId(user.getId());
        petShopUserOrder.setResult("预约中");
        petShopUserOrder.setReplyStatus("待答复");
        petShopUserOrder.setUserName(user.getUserName());
        petShopUserOrder.setUserPhone(user.getPhone());
        petShopUserOrder.setCreateTime(StringUtils.getSystemTime());
        int result = openModuleService.addOrder(petShopUserOrder);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 查询申请预约
     * @return
     */
    @RequestMapping("/getPetShopOrder.html")
    @ResponseBody
    public String getPetShopOrder(PetShopUserOrder petShopUserOrder){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        petShopUserOrder.setShopId(petShop.getId());
        List<PetShopUserOrder> petShopUserOrderList= openModuleService.getPetShopUserOrder(petShopUserOrder);
        return JSON.toJSONString(petShopUserOrderList);
    }



    /**
     * 查询用户预约
     * @return
     */
    @RequestMapping("/getUserOrder.html")
    @ResponseBody
    public String getUserOrder(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShopUserOrder petShopUserOrder = new PetShopUserOrder();
        petShopUserOrder.setUserId(user.getId());
        List<PetShopUserOrder> petShopUserOrderList= openModuleService.getPetShopUserOrder(petShopUserOrder);
        return JSON.toJSONString(petShopUserOrderList);
    }

    /**
     * 用户取消预约
     * @return
     */
    @RequestMapping("/cancelOrder.html")
    @ResponseBody
    public String cancelOrder(String id){
        int result = openModuleService.cancleOrder(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 用户取消预约
     * @return
     */
    @RequestMapping("/updateOrder.html")
    @ResponseBody
    public String updateOrder(PetShopUserOrder petShopUserOrder){
        petShopUserOrder.setResult("预约中");
        petShopUserOrder.setReplyStatus("待答复");
        int result = petShopService.updatePetShopOrder(petShopUserOrder);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 获取宠物店会员
     * @return
     */
    @RequestMapping("/getMyMember.html")
    @ResponseBody
    public String getMyMember(PetShopMember petShopMember){

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        petShopMember.setUserId(user.getId());
        List<PetShopMember> petShopMemberList= petShopService.getPetShopMemberInfo(petShopMember);

        for(PetShopMember p:petShopMemberList){
            p.setShopName(petShopService.getPetShopByShopId(p.getShopId()).getShopName());
        }

        return JSON.toJSONString(petShopMemberList);
    }

    /**
     * 新增宠物店评论
     * @return
     */
    @RequestMapping("/addComment.html")
    @ResponseBody
    public String addComment(PetShopComment petShopComment){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        petShopComment.setId(UUIDUtils.getUUID());
        petShopComment.setUserId(user.getId());
        petShopComment.setCreateTime(StringUtils.getSystemTime());
        petShopComment.setUserName(user.getUserName());
        petShopComment.setUserImg(user.getImgPath());
        int result = openModuleService.addPetShopComment(petShopComment);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 新增宠物店评论
     * @return
     */
    @RequestMapping("/updateComment.html")
    @ResponseBody
    public String updateComment(PetShopComment petShopComment){
        int result = openModuleService.updateComment(petShopComment);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 新增宠物店意见反馈
     * @return
     */
    @RequestMapping("/addOpinion.html")
    @ResponseBody
    public String addOpinion(PetShopMemberOpinion petShopMemberOpinion){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        petShopMemberOpinion.setId(UUIDUtils.getUUID());
        petShopMemberOpinion.setCreateTime(StringUtils.getSystemTime());
        petShopMemberOpinion.setUserId(user.getId());

        int result = openModuleService.addOpinion(petShopMemberOpinion);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 获取我的意见反馈
     * @return
     */
    @RequestMapping("/getMyOpinion.html")
    @ResponseBody
    public String getMyOpinion(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        List<PetShopMemberOpinion> petShopMemberOpinionList= petShopService.getPetShopMemberOpinion(null,null,user.getId());

        for(PetShopMemberOpinion p:petShopMemberOpinionList){
            p.setShopName(petShopService.getPetShopByShopId(p.getShopId()).getShopName());
        }

        return JSON.toJSONString(petShopMemberOpinionList);
    }

    /**
     * 获取宠物店评论
     * @return
     */
    @RequestMapping("/getPetshopComment.html")
    @ResponseBody
    public String getPetshopComment(String shopId,int pageNum,int pageSize){
        if(StringUtils.isEmpty(shopId)){
            //获取用户信息
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            //获取宠物店信息
            PetShop petShop = petShopService.getPetShopByUserId(user.getId());
            shopId = petShop.getId();
        }

        ResultQuery<PetShopComment> resultQuery = new ResultQuery<>();
        int startRow = 0;
        startRow = (pageNum-1)*pageSize;
        List<PetShopComment> shopCommentList= openModuleService.getPetShopComment(startRow,pageSize,shopId);
        int totalSize = openModuleService.getPetShopCommentCount(shopId);
        resultQuery.setList(shopCommentList);
        resultQuery.setTotal(totalSize);
        resultQuery.setPageNumber(pageNum);
        resultQuery.setLimit(pageSize);
        return JSON.toJSONString(resultQuery);
    }

    /**
     * 获取宠物店评论
     * @return
     */
    @RequestMapping("/getPetshopCommentByOrderId.html")
    @ResponseBody
    public String getPetshopCommentByOrderId(String orderId){
        PetShopComment petShopComment = openModuleService.getPetshopCommentByOrderId(orderId);
        return JSON.toJSONString(petShopComment);
    }


    /**
     * 上传宠物店图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadShopImg")
    @ResponseBody
    public Map<String,Object> uploadShopImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"shopImg");
        return map;
    }

    /**
     * 上传朋友圈图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadMomentsImg")
    @ResponseBody
    public Map<String,Object> uploadMomentsImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"moments");
        return map;
    }


    /**
     * 保存发表朋友圈
     * @return
     */
    @RequestMapping("/saveMoments.html")
    @ResponseBody
    public String saveMoments(Moments moments){
        moments.setId(UUIDUtils.getUUID());
        moments.setCreateTime(StringUtils.getSystemTime());
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        moments.setUserId(user.getId());
        moments.setUserImg(user.getImgPath());
        moments.setUserName(user.getUserName());
        int result = openModuleService.addMoments(moments);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 草稿发表朋友圈
     * @return
     */
    @RequestMapping("/updateMoments.html")
    @ResponseBody
    public String updateMoments(Moments moments){
        moments.setCreateTime(StringUtils.getSystemTime());
        int result = openModuleService.updateMomentes(moments);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 删除朋友圈
     * @return
     */
    @RequestMapping("/delMoments.html")
    @ResponseBody
    public String delMoments(String id){
        int result = openModuleService.delMoments(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }
}
