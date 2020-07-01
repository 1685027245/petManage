package com.zy.controller.petShop;

import com.alibaba.fastjson.JSON;
import com.zy.pojo.*;
import com.zy.service.PetShopService;
import com.zy.service.UserService;
import com.zy.utils.StringUtils;
import com.zy.utils.UUIDUtils;
import com.zy.utils.UploadFileUtil;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.util.*;


@Controller
@RequestMapping(value = "/petShop")
public class PetShopController {

    @Autowired
    private UserService userService;

    @Autowired
    private PetShopService petShopService;

    /**
     * 跳转宠物店主页面
     * @return
     */
    @RequestMapping("/petIndex.html")
    public String  toIndex(Model model) throws Exception{
        /*model.addAttribute("userinfo", JSON.toJSONString(RedisUtil.getObj("userinfo",User.class)));*/
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());

        /*model.addAttribute("petShop",petShop);*/
        //获取用户访问情况
        List<Map<String, Object>> mapList = petShopService.getPetShopBrowseByDay(petShop.getId());
        int total=0;
        int userTotal=0;
        Map<String, Object> resultMap = new HashMap<>();
        for (Map<String, Object> map:mapList){
            Number num = (Number) map.get("total");
            total += num.intValue();
            userTotal++;
        }
        resultMap.put("total",total);
        resultMap.put("userTotal",userTotal);
        model.addAttribute("userBrowse",resultMap);
        //宠物销售量 本月
        String today = StringUtils.getNowDay(0);//当天日期+0
        List<Map<String, Object>> petNumberList = petShopService.getPetSalesAnalysisByMonths("pet",petShop.getId(),StringUtils.getMonthFirstData(),StringUtils.getNowDay(1),"number","%Y-%m");
        model.addAttribute("petNumberList",petNumberList.size()>0?petNumberList.get(0):null);
        model.addAttribute("dayList",today.substring(today.length()-2));
        model.addAttribute("dayNow",StringUtils.getStringTime(new Date()));
        //食品销售量 本月
        List<Map<String, Object>> foodNumberList = petShopService.getPetSalesAnalysisByMonths("food",petShop.getId(),StringUtils.getMonthFirstData(),StringUtils.getNowDay(1),"number","%Y-%m");
        model.addAttribute("foodNumberList",foodNumberList.size()>0?foodNumberList.get(0):null);

        return "petShop/petIndex";
    }
    /**
     * 跳转到宠物信息页面数据
     * @param model
     * @return
     */
    @RequestMapping("/petInformation.html")
    public String getAllPet(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        int totalSize = petShopService.getPetCount(petShop.getId(),null,null,null,null,null);
        model.addAttribute("totalSize",totalSize);
        return "petShop/petInformation";
    }

    /**
     * 根据条件获取宠物信息页面数据
     * @return
     */
    @RequestMapping("/getPetInformation.html")
    @ResponseBody
    public String getPetInformation(Integer num,Integer pageSize,String keyword,String category,String price,String shape,String hairLength){
        int startRow=0;
        if (StringUtils.isEmpty(pageSize)){
            pageSize=5;
        }
        startRow = (num-1)*pageSize;

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        if(!StringUtils.isEmpty(petShop)){
            List<Pet> petList = petShopService.queryAllPet(petShop.getId(),startRow,pageSize,keyword,category,price,shape,hairLength);
            int totalSize = petShopService.getPetCount(petShop.getId(),keyword,category,price,shape,hairLength);

            ResultQuery<Pet> resultQuery = new ResultQuery<>();
            resultQuery.setList(petList);
            resultQuery.setTotal(totalSize>0?totalSize:0);
            resultQuery.setPageNumber(num);
            return JSON.toJSONString(resultQuery);
        }

        return JSON.toJSONString(null);
    }


    /**
     * 当前订单查看详情
     * @param id :商品id
     * @param category :判断商品类别
     * @return
     */
    @RequestMapping("/getGoodsDetailsByCondition.html")
    @ResponseBody
    public String getPetByCondition(String id,String category){
        if(category.equals("pet")){
            Pet pet = petShopService.queryPetByCondition(id);
            return JSON.toJSONString(pet);
        }else if (category.equals("food")){
            PetFood petFood = petShopService.getFoodInformationById(id);
            return JSON.toJSONString(petFood);
        }else if (category.equals("periphery")){
            PetPeriphery petPeriphery = petShopService.getPetPeripheryById(id);
            return JSON.toJSONString(petPeriphery);
        }
        return null;
    }

    /* *
     *功能描述: 跳转添加数据页面
     * @author zy
     * @date
     */
    @RequestMapping("/addGoods.html/{pageName}")
    public String toAddPets(@PathVariable("pageName")String pageName,Model model){
        List<PetEncyclopedias> petNameList= petShopService.getPetEncyclopedias("狗狗","");
        model.addAttribute("petNameList",petNameList);
        model.addAttribute("pageName",pageName);
        return "petShop/addGoods";
    }



    /* *
     *功能描述: 跳转更新数据页面
     * @author zy
     * @date
     */
    @RequestMapping("/updateGoods.html/{pageName}/{id}")
    public String updateGoods(@PathVariable("pageName")String pageName,@PathVariable("id")String id,Model model){
        if (pageName.equals("pet")){
            Pet pet = petShopService.queryPetByCondition(id);
            model.addAttribute("pet",pet);
            String imgPath = pet.getImgPath();
            model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        }else if (pageName.equals("food")){
            PetFood food = petShopService.getFoodInformationById(id);
            model.addAttribute("food",food);
            String imgPath = food.getImgPath();
            model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        }else if(pageName.equals("periphery")){
            PetPeriphery petPeriphery = petShopService.getPetPeripheryById(id);
            model.addAttribute("petPeriphery",petPeriphery);
            String imgPath = petPeriphery.getImgPath();
            model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        }
        model.addAttribute("pageName",pageName);
        return "petShop/updateGoods";
    }



    /* *
     *功能描述: 保存宠物更新
     * @author zy
     * @date
     */
    @RequestMapping("/saveUpdatePet.html")
    @ResponseBody
    public String updatePetSave(Pet pet){
        int result = petShopService.updatePet(pet);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 保存宠物周边商品更新
     * @author zy
     * @date
     */
    @RequestMapping("/updatePeriphery.html")
    @ResponseBody
    public String updatePeriphery(PetPeriphery petPeriphery){
        int result = petShopService.updatePeriphery(petPeriphery);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }



    /* *
     *功能描述: 根据宠物条件获取宠物百科品种
     * @author zy
     * @date
     * category:宠物类别 name:宠物名称
     */
    @RequestMapping("/getPetEncyclopedias.html")
    @ResponseBody
    public String getAllNameByCategory(String category,String name){
        List<PetEncyclopedias> petNameList= petShopService.getPetEncyclopedias(category,name);
        return JSON.toJSONString(petNameList);
    }


    /* *
     *功能描述: 保存新增宠物信息
     * @author zy
     * @date
     */
    @RequestMapping("/saveAddPets.html")
    @ResponseBody
    public String addPets(Pet pet){
        pet.setId(UUIDUtils.getUUID());
        pet.setSalesStatus("待售");
        pet.setCreateTime(StringUtils.getSystemTime());
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        pet.setShopId(petShop.getId());

        int result = petShopService.savePets(pet);
        if(result>0) {
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("error");
    }

    /* *
     *功能描述: 跳转到宠物详情页
     * @author zy
     * @date
     */
    @RequestMapping("/toPetDetails.html/{id}")
    public String toAddPetDetails(@PathVariable("id") String id, Model model){
        Pet petDetails= petShopService.queryPetByCondition(id);
        model.addAttribute("petDetails",petDetails);

        String imgPath = petDetails.getImgPath();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "petShop/petDetails";
    }

    /* *
     *功能描述: 跳转到宠物详情页
     * @author zy
     * @date
     */
    @RequestMapping("/delPet.html")
    @ResponseBody
    public String delPetById(String id){
        int result = petShopService.delPetById(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /* *
     *功能描述: 跳转到店面结算
     * @author zy
     * @date
     */
    @RequestMapping("/storefrontBusiness.html")
    public String tostorefrontBusiness(Model model){
        return "petShop/storefrontBusiness";
    }

    /* *
     *功能描述: 跳转到店面业务页面
     * @author zy
     * @date
     */
    @RequestMapping("/storefrontAllBusiness.html")
    public String storefrontAllBusiness(Model model){
        return "petShop/storefrontAllBusiness";
    }

    /* *
     *功能描述: 跳转到店面业务页面
     * @author zy
     * @date
     */
    @RequestMapping("/getPetSalesRecords.html")
    @ResponseBody
    public String getPetSalesRecords(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //获取宠物店未完成订单
        List<PetSalesRecords> petSalesRecordsList= petShopService.getPetSalesRecordsByShopId(petShop.getId(),false);
        //返回结果
        List<Map<String,Object>> resultList = new ArrayList<Map<String,Object>>();
        //拼接返回结果
        for (PetSalesRecords petSalesRecords:petSalesRecordsList) {
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("id",petSalesRecords.getId());
            map.put("productId",petSalesRecords.getProductId());
            if(petSalesRecords.getCategory().equals("pet")){
                Pet pet = petShopService.queryPetByCondition(petSalesRecords.getProductId());
                if(!StringUtils.isEmpty(pet)){
                    map.put("number",pet.getNumber());
                    map.put("name",pet.getPetEncyclopedias().getName());
                }
            }else if(petSalesRecords.getCategory().equals("food")){
                PetFood petFood =  petShopService.getFoodInformationById(petSalesRecords.getProductId());
                if(!StringUtils.isEmpty(petFood)){
                    map.put("number",petFood.getFoodSerialNumber());
                    map.put("name",petFood.getName());
                }
            }else if(petSalesRecords.getCategory().equals("service")){
                ShopService shopService =  petShopService.getPetShopServiceById(petSalesRecords.getProductId());
                if(!StringUtils.isEmpty(shopService)){
                    map.put("number",shopService.getServiceNum());
                    map.put("name",shopService.getServiceCategory());
                }
            }else if(petSalesRecords.getCategory().equals("periphery")){
                PetPeriphery petPeriphery =  petShopService.getPetPeripheryById(petSalesRecords.getProductId());
                if(!StringUtils.isEmpty(petPeriphery)){
                    map.put("number",petPeriphery.getNumber());
                    map.put("name",petPeriphery.getName());
                }
            }
            map.put("category",petSalesRecords.getCategory());
            map.put("price",petSalesRecords.getPrice());
            map.put("amount",petSalesRecords.getNumber());
            map.put("foldingRate",petSalesRecords.getFoldingRate());
            map.put("total",petSalesRecords.getTotal());
            resultList.add(map);
        }
        return JSON.toJSONString(resultList);
    }

    /* *
     *功能描述: 提交订单
     * @author zy
     * @date
     */
    @RequestMapping("/addGoodsToSalesRecords.html")
    @ResponseBody
    public String addPetToSalesRecords(String id,String category,Integer number){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());

        PetSalesRecords petSalesRecords = new PetSalesRecords();
        petSalesRecords.setId(UUIDUtils.getUUID());
        petSalesRecords.setCategory(category);

        if(category.equals("pet")){
            Pet pet = petShopService.queryPetByCondition(id);
            petSalesRecords.setPrice(pet.getPrice());
            petSalesRecords.setNumber(1);
            petSalesRecords.setProductName(pet.getPetEncyclopedias().getName());
            petSalesRecords.setProductNumber(pet.getNumber());
        }else if(category.equals("food")){
            PetFood petFood = petShopService.getFoodInformationById(id);
            petSalesRecords.setNumber(number);
            petSalesRecords.setPrice(petFood.getPrice());
            petSalesRecords.setProductName(petFood.getName());
            petSalesRecords.setProductNumber(petFood.getFoodSerialNumber());
        }else if(category.equals("service")){
            ShopService shopService = petShopService.getPetShopServiceById(id);
            petSalesRecords.setNumber(1);
            petSalesRecords.setPrice(shopService.getPrice());
            petSalesRecords.setProductName(shopService.getServiceCategory());
            petSalesRecords.setProductNumber(shopService.getServiceNum());
        }else if(category.equals("periphery")){
            PetPeriphery petPeriphery = petShopService.getPetPeripheryById(id);
            petSalesRecords.setNumber(number);
            petSalesRecords.setPrice(petPeriphery.getPrice());
            petSalesRecords.setProductName(petPeriphery.getName());
            petSalesRecords.setProductNumber(petPeriphery.getNumber());
        }

        petSalesRecords.setProductId(id);
        petSalesRecords.setSalesTime(StringUtils.getSystemTime());
        petSalesRecords.setUserId("1");
        petSalesRecords.setSalesmanId(user.getId());
        petSalesRecords.setFoldingRate(1);
        petSalesRecords.setShopId(petShop.getId());
        petSalesRecords.setComplete(false);
        petSalesRecords.setTotal(petSalesRecords.getPrice()*petSalesRecords.getNumber());

        int result = petShopService.addGoodsToSalesRecords(petSalesRecords);
        if(result>0){
            if(category.equals("pet")){
                petShopService.updatePetSalesStatus(id,"当前订单");
            }else if(category.equals("food")) {
                petShopService.updateFoodSalesStatus(id,"当前订单");
            }else if(category.equals("service")) {
                petShopService.upDateShopServiceStatus(id,"当前订单");
            }else if(category.equals("periphery")) {
                petShopService.updatePetPeripheryStatus(id,"当前订单");
            }

            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 取消订单
     * @author zy
     * @date
     */
    @RequestMapping("/delGoodsToSalesRecords.html")
    @ResponseBody
    public String delGoodsToSalesRecords(String id,String category){
        int result = petShopService.delGoodsFromSalesRecordsByProductId(id);
        if(result>0){
            if(category.equals("pet")){
                petShopService.updatePetSalesStatus(id,"待售");
            }else if(category.equals("food")){
                petShopService.updateFoodSalesStatus(id,"待售");
            }else if(category.equals("service")){
                petShopService.upDateShopServiceStatus(id,"待售");
            }else if(category.equals("periphery")){
                petShopService.updatePetPeripheryStatus(id,"待售");
            }

            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 批量取消订单
     * @author zy
     * @date
     */
    @RequestMapping("/delAllGoodsToSalesRecords.html")
    @ResponseBody
    public String delAllGoodsToSalesRecords(@RequestParam(value = "ids[]")String[] ids,@RequestParam(value = "categorys[]")String[] categorys){
        int result = 0;
        for (int i=0;i<ids.length;i++){
            int j = petShopService.delGoodsFromSalesRecordsByProductId(ids[i]);
            if(j>0){
                if(categorys[i].equals("pet")){
                    petShopService.updatePetSalesStatus(ids[i],"待售");
                }else if(categorys[i].equals("food")){
                    petShopService.updateFoodSalesStatus(ids[i],"待售");
                }else if(categorys[i].equals("periphery")){
                    petShopService.updatePetPeripheryStatus(ids[i],"待售");
                }else if(categorys[i].equals("service")){
                    petShopService.upDateShopServiceStatus(ids[i],"待售");
                }
            }
            result++;
        }
        if (result>0){
            return JSON.toJSONString(result);
        }
        return JSON.toJSONString("fail");
    }


    /* *
     *功能描述: 查询订单
     * @author zy
     * @date
     */
    @RequestMapping("/getSalesRecordsById.html")
    @ResponseBody
    public String getSalesRecordsById(String id){
        PetSalesRecords petSalesRecords = petShopService.getSalesRecordsById(id);
        return JSON.toJSONString(petSalesRecords);
    }

    /**
     * 修改订单
     * @param petSalesRecords
     * @return
     */
    @RequestMapping("/updateSalesRecordsById.html")
    @ResponseBody
    public String updateSalesRecordsById(PetSalesRecords petSalesRecords){
        Double total = petSalesRecords.getPrice()*petSalesRecords.getNumber()*petSalesRecords.getFoldingRate();
        petSalesRecords.setTotal(total);
        int result = petShopService.updateSalesRecordsById(petSalesRecords);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 跳转宠物店会员页面
     * @return
     */
    @RequestMapping("/showPetShopMember.html")
    public String toAddShopMember(){
        return "petShop/petShopMember";
    }


    /**
     * 根据条件获取宠物店会员信息
     * @return
     */
    @RequestMapping("/petShopMemberInfo.html")
    @ResponseBody
    public String getPetShopMemberInfo(PetShopMember petShopMember){

        /*if(StringUtils.isEmpty(petShopMember.getMemberNumber())){
            petShopMember.setMemberNumber("AAAAA");
        }*/

        List<Map<String,Object>> memberList = new ArrayList<>();
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        petShopMember.setShopId(petShop.getId());
        List<PetShopMember> petShopMemberList= petShopService.getPetShopMemberInfo(petShopMember);

        PetShopMemberDiscount petShopMemberDiscount = petShopService.getPetShopMemberDiscount(petShop.getId());
        if (!StringUtils.isEmpty(petShopMemberList)){
            for(PetShopMember shopMember:petShopMemberList) {
                Map<String,Object> map = new HashMap<>();
                User resultUSer = userService.getUserById(shopMember.getUserId());
                map.put("id",shopMember.getId());
                map.put("userId",shopMember.getUserId());
                map.put("memberNumber",shopMember.getMemberNumber());
                if(shopMember.getLevel().equals(1)){
                    map.put("level",petShopMemberDiscount.getNameOne());
                    map.put("discount",petShopMemberDiscount.getDiscountOne());
                }else if(shopMember.getLevel().equals(2)){
                    map.put("level",petShopMemberDiscount.getNameTwo());
                    map.put("discount",petShopMemberDiscount.getDiscountTwo());
                }else if(shopMember.getLevel().equals(3)){
                    map.put("level",petShopMemberDiscount.getNameThree());
                    map.put("discount",petShopMemberDiscount.getDiscountThree());
                }else if(shopMember.getLevel().equals(4)){
                    map.put("level",petShopMemberDiscount.getNameFour());
                    map.put("discount",petShopMemberDiscount.getDiscountFour());
                }
                map.put("levelNumber",shopMember.getLevel());
                map.put("score",shopMember.getScore());
                map.put("processingTime",shopMember.getProcessingTime());
                map.put("balance",shopMember.getBalance());
                map.put("total",shopMember.getTotal());
                if(!StringUtils.isEmpty(resultUSer)){
                    map.put("userName",resultUSer.getUserName());
                    map.put("phone",resultUSer.getPhone());
                    map.put("address",resultUSer.getAddress());
                    map.put("email",resultUSer.getEmail());
                }else {
                    map.put("userName",null);
                    map.put("phone",null);
                    map.put("address",null);
                    map.put("email",null);
                }

                memberList.add(map);
            }
            return JSON.toJSONString(memberList);
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 新增宠物店会员
     * @return
     */
    @RequestMapping("/addShopMemberUser.html")
    @ResponseBody
    public String addShopMemberUser(String userNumber,String memberNumber,int level,int score){
        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(nowUser.getId());

        PetShopMember petShopMember = new PetShopMember();
        //判断是否有该用户
        if(!StringUtils.isEmpty(userNumber)){
            User user = userService.hasUser(userNumber);
            if (!StringUtils.isEmpty(user)){
                PetShopMember p = new PetShopMember();
                p.setShopId(petShop.getId());
                p.setUserId(user.getId());
                List<PetShopMember> list=petShopService.getPetShopMemberInfo(p);
                if(list.size()>0){
                    return JSON.toJSONString("hasMember");
                }else {
                    petShopMember.setUserId(user.getId());
                }
            }else {
                return JSON.toJSONString("fail");
            }
        }
        //判断会员账号是否存在
        PetShopMember p2 = new PetShopMember();
        p2.setMemberNumber(memberNumber);
        List<PetShopMember> list2=petShopService.getPetShopMemberInfo(p2);
        if(list2.size()>0){
            return JSON.toJSONString("hasMemberNumber");
        }else {
            petShopMember.setMemberNumber(memberNumber);
        }
        petShopMember.setLevel(level);
        petShopMember.setScore(score);
        petShopMember.setProcessingTime(StringUtils.getSystemTime());
        petShopMember.setShopId(petShop.getId());
        petShopMember.setBalance(0.0);
        petShopMember.setTotal(0.0);
        petShopMember.setId(UUIDUtils.getUUID());
        int result = petShopService.addShopMemberUser(petShopMember);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 宠物店会员绑定用户平台账号
     * @return
     */
    @RequestMapping("/addShopMemberUserNumber.html")
    @ResponseBody
    public String addShopMemberUserNumber(String shopMemberUserId,String userNumber){
        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(nowUser.getId());
        User user = userService.hasUser(userNumber);
        if(!StringUtils.isEmpty(user)){
            PetShopMember petShopMember = new PetShopMember();
            petShopMember.setUserId(user.getId());
            petShopMember.setShopId(petShop.getId());
            List<PetShopMember> list=petShopService.getPetShopMemberInfo(petShopMember);
            if(list.size()>0){
                return JSON.toJSONString("hasMember");
            }else {
                petShopMember.setId(shopMemberUserId);
                int i = petShopService.updatePetShopMember(petShopMember);
                if(i>0){
                    return JSON.toJSONString("success");
                }
            }
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 宠物店会员充值
     * @return
     */
    @RequestMapping("/shopMemberRecharge.html")
    @ResponseBody
    public String shopMemberRecharge(PetShopMember petShopMember)throws Exception{
        int result = petShopService.updatePetShopMember(petShopMember);
        if (result>0){
            //获取会员信息
            PetShopMember resultPetShopMember = petShopService.getPetShopMemberById(petShopMember.getId());
            //判断等级,是否升级
            PetShopMemberDiscount shopMemberDiscount = petShopService.getPetShopMemberDiscount(resultPetShopMember.getShopId());
            PetShopMember p1 = new PetShopMember();
            p1.setId(petShopMember.getId());
            p1.setScore((int)(petShopMember.getBalance()/shopMemberDiscount.getIntegralSum()));
            if(resultPetShopMember.getTotal()>=shopMemberDiscount.getUpperLimitFour()){
                p1.setLevel(4);
            }else if(resultPetShopMember.getTotal()>=shopMemberDiscount.getUpperLimitThree()){
                p1.setLevel(3);
            }else if(resultPetShopMember.getTotal()>=shopMemberDiscount.getUpperLimitTwo()){
                p1.setLevel(2);
            }
            petShopService.updatePetShopMember(p1);
            //充值记录
            PetShopMemberRecord petShopMemberRecord = new PetShopMemberRecord();
            petShopMemberRecord.setId(UUIDUtils.getUUID());
            petShopMemberRecord.setUserId(resultPetShopMember.getUserId());
            petShopMemberRecord.setTime(StringUtils.getSystemTime());
            petShopMemberRecord.setAmount(petShopMember.getBalance());
            //获取当前用户信息
            User user = (User) SecurityUtils.getSubject().getPrincipal();
            petShopMemberRecord.setPersonnelId(user.getId());
            petShopMemberRecord.setCardNumber(resultPetShopMember.getMemberNumber());
            //获取宠物店信息
            PetShop petShop = petShopService.getPetShopByUserId(user.getId());
            petShopMemberRecord.setShopId(petShop.getId());
            petShopService.addPetShopMemberRecord(petShopMemberRecord);

            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 跳转宠物店会员页面
     * @return
     */
    @RequestMapping("/showPetShopMemberRecord.html")
    public String showPetShopMemberRecord(){
        return "petShop/petShopMemberRecord";
    }

    /**
     * 获取宠物店充值记录
     * @return
     */
    @RequestMapping("/showAllPetShopMemberRecord.html")
    @ResponseBody
    public String showAllPetShopMemberRecord(){
        List<Map<String,Object>> resultPetShopMemberRecordList = new ArrayList<>();

        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(nowUser.getId());
        PetShopMemberRecord petShopMemberRecord = new PetShopMemberRecord();
        petShopMemberRecord.setShopId(petShop.getId());
        List<PetShopMemberRecord> petShopMemberRecordList =petShopService.getPetShopMemberRecord(petShopMemberRecord);

        for(PetShopMemberRecord p1:petShopMemberRecordList){
            Map<String,Object> map = new HashMap<>();
            map.put("cardNumber",p1.getCardNumber());

            if (!StringUtils.isEmpty(p1.getUserId())){
                User user = userService.getUserById(p1.getUserId());
                if(!StringUtils.isEmpty(user)){
                    map.put("userName",user.getUserName());
                    map.put("management",userService.getUserById(p1.getPersonnelId()).getUserName());
                }
            }else {
                map.put("userName",null);
            }
            map.put("management",userService.getUserById(p1.getPersonnelId()).getUserName());
            map.put("amount",p1.getAmount());
            map.put("time",p1.getTime());
            resultPetShopMemberRecordList.add(map);
        }
        return JSON.toJSONString(resultPetShopMemberRecordList);
    }

    /**
     * 跳转食品列表页面
     * @return
     */
    @RequestMapping("/foodInformation.html")
    public String getFoodInformation(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        if(!StringUtils.isEmpty(petShop)){
            int totalSize = petShopService.getFoodCount(petShop.getId(),null,null,null,null);
            model.addAttribute("totalSize",totalSize);
        }
        return "petShop/foodInformation";
    }

    /**
     *获取食品数据
     * @return
     */
    @RequestMapping("/getFoodInformation.html")
    @ResponseBody
    public String getFoodInformationData(Integer num,Integer pageSize,String keyword,String category,String price,String flavor){
        ResultQuery<PetFood> resultQuery = new ResultQuery<>();

        int startRow = 0;
        startRow = (num-1)*pageSize;

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        if(!StringUtils.isEmpty(petShop)){
            List<PetFood> petFoodList = petShopService.getFoodInformation(petShop.getId(),startRow,pageSize,keyword,category,price,flavor);
            int totalSize = petShopService.getFoodCount(petShop.getId(),keyword,category,price,flavor);
            resultQuery.setList(petFoodList);
            resultQuery.setTotal(totalSize);
            resultQuery.setPageNumber(num);
            resultQuery.setPages((totalSize/pageSize)+((totalSize%pageSize)>0?1:0));
        }

        return JSON.toJSONString(resultQuery);
    }


    /**
     * 宠物店新增食品添加保存
     * @return
     */
    @RequestMapping("/addFood.html")
    @ResponseBody
    public String addFood(PetFood petFood){
        petFood.setId(UUIDUtils.getUUID());
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        petFood.setShopId(petShop.getId());
        petFood.setStatus("待售");
        petFood.setSold(0);
        petFood.setCreateTime(StringUtils.getSystemTime());
        int result = petShopService.addPetFood(petFood);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 宠物店食品修改
     * @return
     */
    @RequestMapping("/updateFood.html")
    @ResponseBody
    public String updateAllFood(PetFood petFood){
        int result = petShopService.updateAllFood(petFood);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 跳转到食品详情页
     * @author zy
     * @date
     */
    @RequestMapping("/toFoodDetails.html/{id}")
    public String toFoodDetails(@PathVariable("id") String id, Model model){
        PetFood petFoodDetails = petShopService.getFoodInformationById(id);
        model.addAttribute("petFoodDetails",petFoodDetails);

        String imgPath = petFoodDetails.getImgPath();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "petShop/foodDetails";
    }

    @RequestMapping("/delFood")
    @ResponseBody
    public String delFood(String id){
        int result = petShopService.delFoodById(id);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /* *
     *功能描述: 清空当前所有订单
     * @author zy
     * @date
     */
    @RequestMapping("/clearCurrentOrder.html")
    @ResponseBody
    public String clearCurrentOrder(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        int result = petShopService.delAllCurrentOrder(petShop.getId());
        if(result>0){
            //将宠物店当前订单改为待售
            petShopService.updateAllPetStatusToBefore(petShop.getId());
            petShopService.updateAllFoodStatusToBefore(petShop.getId());
            petShopService.updateAllPeripheryStatusToBefiore(petShop.getId());
            petShopService.updateAllServiceStatusToBefiore(petShop.getId());
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /* *
     *功能描述: 跳转到宠物库存
     * @author zy
     * @date
     */
    @RequestMapping("/petShopStock.html")
    public String toPetShopStock(){
        return "petShop/petShopStock";
    }

    /* *
     *功能描述: 获取宠物库存
     * @author zy
     * @date
     */
    @RequestMapping("/getPetShopStock.html")
    @ResponseBody
    public String getPetShopStock(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetEncyclopedias> petStockList = petShopService.getPetStockByPetShopId(petShop.getId());
        if(petStockList.size()>0){
            return JSON.toJSONString(petStockList);
        }
        return JSON.toJSONString(petStockList);
    }

    /* *
     *功能描述: 跳转到食品库存
     * @author zy
     * @date
     */
    @RequestMapping("/petShopFoodStock.html")
    public String toPetShopFoodStock(){
        return "petShop/petShopFoodStock";
    }

    /* *
     *功能描述: 跳转到食品库存
     * @author zy
     * @date
     */
    @RequestMapping("/petShopPeripheryStock.html")
    public String petShopPeripheryStock(){
        return "petShop/petShopPeripheryStock";
    }

    /**
     * 获取食品库存信息
     * @return
     */
    @RequestMapping("/getPetShopFoodStock.html")
    @ResponseBody
    public String getPetShopFoodStock(){
        /*if (StringUtils.isEmpty(startRow)){
            startRow=0;
        }
        if (StringUtils.isEmpty(pageSize)){
            pageSize=Integer.MAX_VALUE;
        }*/
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetFood> petFoodList = petShopService.getFoodInformation(petShop.getId(),0,Integer.MAX_VALUE,null,null,null,null);
        return JSON.toJSONString(petFoodList);
    }

    /**
     * 获取周边商品库存
     * @return
     */
    @RequestMapping("/getPetShopPeripheryStock.html")
    @ResponseBody
    public String getPetShopPeripheryStock(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetPeriphery> petPeripheryList = petShopService.getPetPeriphery(0,Integer.MAX_VALUE,petShop.getId(),null,null,null);
        return JSON.toJSONString(petPeripheryList);
    }


    /* *
     *功能描述: 获取宠物店的优惠方案
     * @author zy
     * @date
     */
    @RequestMapping("/petShopMembershipDiscount.html")
    public String toPetShopMembershipDiscount(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        if(StringUtils.isEmpty(petShop)){
            return "petShop/petShopMembershipDiscount";
        }
        PetShopMemberDiscount petShopMemberDiscount = petShopService.getPetShopMemberDiscount(petShop.getId());
        model.addAttribute("memberDiscount",petShopMemberDiscount);
        return "petShop/petShopMembershipDiscount";
    }

    /* *
     *功能描述: 更新宠物店的优惠方案
     * @author zy
     * @date
     */
    @RequestMapping("/updateShopMemberName.html")
    @ResponseBody
    public String updateShopMemberName(PetShopMemberDiscount petShopMemberDiscount){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        petShopMemberDiscount.setShopId(petShop.getId());
        int result = petShopService.updateShopMemberName(petShopMemberDiscount);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 跳转到宠物店会员用户反馈
     * @author zy
     * @date
     */
    @RequestMapping("/petShopMemberOpinion.html")
    public String toPetShopMemberOpinion(){
        return "petShop/petShopMemberOpinion";
    }

    /* *
     *功能描述: 获取宠物店会员用户反馈
     * @author zy
     * @date
     */
    @RequestMapping("/getPetShopMemberOpinion.html")
    @ResponseBody
    public String getPetShopMemberOpinion(String replyStatus){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetShopMemberOpinion> memberOpinionList = petShopService.getPetShopMemberOpinion(petShop.getId(),replyStatus,null);
        List<Map<String,Object>> list = new ArrayList<>();

        for(PetShopMemberOpinion p:memberOpinionList){
            Map<String,Object> map = new HashMap<>();
            PetShopMember petShopMember = petShopService.getPetShopMemberById(p.getShopMemberId());
            PetShopMemberDiscount petShopMemberDiscount = petShopService.getPetShopMemberDiscount(p.getShopId());
            User resultUser = userService.getUserById(p.getUserId());
            String level = "";
            if(petShopMember.getLevel().equals(1)){
                level = petShopMemberDiscount.getNameOne();
            }else if(petShopMember.getLevel().equals(2)){
                level = petShopMemberDiscount.getNameTwo();
            }else if(petShopMember.getLevel().equals(3)){
                level = petShopMemberDiscount.getNameThree();
            }else if(petShopMember.getLevel().equals(4)){
                level = petShopMemberDiscount.getNameFour();
            }
            map.put("id",p.getId());
            map.put("memberNumber",petShopMember.getMemberNumber());
            map.put("userName",resultUser.getUserName());
            map.put("level",level);
            map.put("content",p.getOpinionContent());
            map.put("createTime",p.getCreateTime());
            map.put("replyStatus",p.getReplyStatus());
            map.put("replyTime",p.getReplyTime());
            map.put("replyContent",p.getReplyContent());
            list.add(map);
        }
        return JSON.toJSONString(list);
    }

    /* *
     *功能描述: 宠物店回复会员反馈意见
     * @author zy
     * @date
     */
    @RequestMapping("/replyPetShopMember.html")
    @ResponseBody
    public String replyPetShopMemberOpinion(String id,String replyContent){
        PetShopMemberOpinion petShopMemberOpinion = new PetShopMemberOpinion();
        petShopMemberOpinion.setId(id);
        petShopMemberOpinion.setReplyContent(replyContent);
        petShopMemberOpinion.setReplyStatus(true);
        petShopMemberOpinion.setReplyTime(StringUtils.getSystemTime());
        int result = petShopService.updatePetShopMemberOpinion(petShopMemberOpinion);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 删除宠物店会员反馈意见
     * @author zy
     * @date
     */
    @RequestMapping("/delPetShopMemberOpinion.html")
    @ResponseBody
    public String delPetShopMemberOpinion(String id){
        int result = petShopService.delPetShopMemberOpinion(id);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /* *
     *功能描述: 宠物店结算
     * @author zy
     * @date
     */
    @RequestMapping("/petShopSettlement.html")
    @ResponseBody
    public String petShopSettlement(float foldingRate,String memberId){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetSalesRecords> petSalesRecordsList = petShopService.getPetSalesRecordsByShopId(petShop.getId(),false);
        int i=0;
        for (PetSalesRecords petSalesRecords:petSalesRecordsList){
            petSalesRecords.setSalesTime(StringUtils.getSystemTime());
            petSalesRecords.setComplete(true);
            if(!StringUtils.isEmpty(foldingRate)){
                petSalesRecords.setFoldingRate(petSalesRecords.getFoldingRate()*foldingRate);
                petSalesRecords.setTotal(petSalesRecords.getTotal()*foldingRate);
            }
            int result = petShopService.updateSalesRecordsById(petSalesRecords);
            if(result>0){
                if(petSalesRecords.getCategory().equals("pet")){//宠物
                    petShopService.updatePetSalesStatus(petSalesRecords.getProductId(),"已售");
                }else if(petSalesRecords.getCategory().equals("food")){//食品
                    petShopService.updateFood(petSalesRecords.getProductId(),petSalesRecords.getNumber(),"待售");
                }else if(petSalesRecords.getCategory().equals("service")){//服务
                    petShopService.upDateShopServiceStatus(petSalesRecords.getProductId(),"待售");
                } else {//周边其他
                    petShopService.updatePeripherySales(petSalesRecords.getProductId(),petSalesRecords.getNumber(),"待售");
                }
                if(!StringUtils.isEmpty(memberId)){
                    PetShopMember petShopMember = new PetShopMember();
                    petShopMember.setBalance(petSalesRecords.getTotal());
                    petShopMember.setId(memberId);
                    petShopService.updatePetShopMemberBalance(petShopMember);
                }
                i++;
            }
        }
        if(i>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /* *
     *功能描述: 跳转到宠物店宠物销售分析
     * @author zy
     * @date
     */
    @RequestMapping("/petSalesAnalysis.html")
    public String toPetSalesAnalysis(){
        return "petShop/petSalesAnalysis";
    }

    /**
     * 根据时间段获取宠物店销售情况
     * @return
     */
    @RequestMapping("/getPetSalesAnalysis.html")
    @ResponseBody
    public String getPetSalesAnalysis() throws Exception{
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();

        //统计宠物销售分类占比
        List<Map<String, Object>> petSalesEncyclopediasList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.category","p2.category",petShop.getId(),"已售",-1);
        resultMap = getSalesAnalysisList(petSalesEncyclopediasList,resultMap,"petSalesEncyclopediasMap",null,null);
        //统计食品销售分类占比
        List<Map<String, Object>> foodSalesAnalysisByCategoryList = petShopService.getFoodSalesAnalysisByCategory("sold",petShop.getId(),-1);
        resultMap = getSalesAnalysisList(foodSalesAnalysisByCategoryList,resultMap,"foodSalesAnalysisByCategoryMap",null,null);

        //宠物待售占比
        List<Map<String, Object>> petNoSalesEncyclopediasList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.category","p2.category",petShop.getId(),"待售",-1);
        resultMap = getSalesAnalysisList(petNoSalesEncyclopediasList,resultMap,"petNoSalesEncyclopediasMap",null,null);
        //统计食品待售占比
        List<Map<String, Object>> foodNoSalesAnalysisByCategoryList = petShopService.getFoodSalesAnalysisByCategory("stock",petShop.getId(),-1);
        resultMap = getSalesAnalysisList(foodNoSalesAnalysisByCategoryList,resultMap,"foodNoSalesAnalysisByCategoryMap",null,null);

        return JSON.toJSONString(resultMap);
    }

    /**
     * 食品销售排名靠前
     * @return
     */
    @RequestMapping("/getFoodSalesAnalysisHighes.html")
    @ResponseBody
    public String getFoodSalesAnalysisHighes(int pageSize) throws Exception{
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //食品最畅销产品(前十)
        List<Map<String, Object>> foodSalesAnalysisHighesList = petShopService.getFoodSalesAnalysisHighes(petShop.getId(),pageSize);
        resultMap = getSalesAnalysisList(foodSalesAnalysisHighesList,resultMap,"foodSalesAnalysisHighesMap",null,null);
        return JSON.toJSONString(resultMap);
    }

    /**
     * 宠物销售排名靠前
     * @return
     */
    @RequestMapping("/getPetSalesEncyclopediasHighest.html")
    @ResponseBody
    public String getPetSalesEncyclopediasHighest(int pageSize) throws Exception{
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //宠物最畅销品种(前十)
        List<Map<String, Object>> petSalesEncyclopediasHighestList = petShopService.getPetSalesAnalysisByEncyclopedias("p1.pet_encyclopedias_id","p2.name","p1.pet_encyclopedias_id",petShop.getId(),"已售",pageSize);
        resultMap = getSalesAnalysisList(petSalesEncyclopediasHighestList,resultMap,"petSalesEncyclopediasHighestMap",null,null);
        return JSON.toJSONString(resultMap);
    }



    /**
     * 根据时间段获取宠物店销售数量情况
     * @return
     */
    @RequestMapping("/getPetSalesNumberAnalysis.html")
    @ResponseBody
    public String getPetSalesNumberAnalysis(String startTime,String endTime,String selectType) throws Exception{

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //获取宠物销售量
        List<Map<String, Object>> petNumberList = petShopService.getPetSalesAnalysisByMonths("pet",petShop.getId(),startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //食品销售量
        List<Map<String, Object>> foodNumberList = petShopService.getPetSalesAnalysisByMonths("food",petShop.getId(),startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //服务销售量
        List<Map<String, Object>> serviceNumberList = petShopService.getPetSalesAnalysisByMonths("service",petShop.getId(),startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //周边销售量
        List<Map<String, Object>> peripheryNumberList = petShopService.getPetSalesAnalysisByMonths("periphery",petShop.getId(),startTime,endTime,"number",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));

        if(selectType.equals("month")){
            resultMap = getSalesAnalysisList(petNumberList,resultMap,"petNumberMap",startTime,endTime);
            resultMap = getSalesAnalysisList(foodNumberList,resultMap,"foodNumberMap",startTime,endTime);
            resultMap = getSalesAnalysisList(serviceNumberList,resultMap,"serviceNumberMap",startTime,endTime);
            resultMap = getSalesAnalysisList(peripheryNumberList,resultMap,"peripheryNumberMap",startTime,endTime);
        }else {
            resultMap = getAnalysisByDayList(petNumberList,resultMap,"petNumberMap",startTime,endTime);
            resultMap = getAnalysisByDayList(foodNumberList,resultMap,"foodNumberMap",startTime,endTime);
            resultMap = getAnalysisByDayList(serviceNumberList,resultMap,"serviceNumberMap",startTime,endTime);
            resultMap = getAnalysisByDayList(peripheryNumberList,resultMap,"peripheryNumberMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }


    /**
     * 根据时间段获取宠物店销售金额情况
     * @return
     */
    @RequestMapping("/getPetSalesMoneyAnalysis.html")
    @ResponseBody
    public String getPetSalesMoneyAnalysis(String startTime,String endTime,String selectType) throws Exception{

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        //获取宠物销售金额
        List<Map<String, Object>> petMoneyList = petShopService.getPetSalesAnalysisByMonths("pet",petShop.getId(),startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //食品销售金额
        List<Map<String, Object>> foodMoneyList = petShopService.getPetSalesAnalysisByMonths("food",petShop.getId(),startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //服务销售金额
        List<Map<String, Object>> seviceMoneyList = petShopService.getPetSalesAnalysisByMonths("service",petShop.getId(),startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //周边销售金额
        List<Map<String, Object>> peripheryMoneyList = petShopService.getPetSalesAnalysisByMonths("periphery",petShop.getId(),startTime,endTime,"total",(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        if(selectType.equals("month")){
            resultMap = getSalesAnalysisList(petMoneyList,resultMap,"petMoneyMap",startTime,endTime);
            resultMap = getSalesAnalysisList(foodMoneyList,resultMap,"foodMoneyMap",startTime,endTime);
            resultMap = getSalesAnalysisList(seviceMoneyList,resultMap,"serviceMoneyMap",startTime,endTime);
            resultMap = getSalesAnalysisList(peripheryMoneyList,resultMap,"peripheryMoneyMap",startTime,endTime);
        }else {
            resultMap = getAnalysisByDayList(petMoneyList,resultMap,"petMoneyMap",startTime,endTime);
            resultMap = getAnalysisByDayList(foodMoneyList,resultMap,"foodMoneyMap",startTime,endTime);
            resultMap = getAnalysisByDayList(seviceMoneyList,resultMap,"serviceMoneyMap",startTime,endTime);
            resultMap = getSalesAnalysisList(peripheryMoneyList,resultMap,"peripheryMoneyMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }


    /**
     * 将新的销售数据添加到返回的list
     * @param inputList
     * @param resultMap
     * @return
     */
    public static Map<String,Map<String, Object>> getSalesAnalysisList(List<Map<String, Object>> inputList,Map<String,Map<String, Object>> resultMap,String resultName,String startTime,String engTime) throws Exception{
        Map<String,Object> map = new HashMap<>();
        ArrayList array1 = new ArrayList<String>();
        ArrayList array2 = new ArrayList<String>();
        if(!StringUtils.isEmpty(startTime)){
            ArrayList timeArray = new ArrayList();
            engTime = StringUtils.StringToDateYearMonth(engTime,"yyyy-MM");
            engTime = StringUtils.DatePlusToString(engTime,1,"yyyy-MM");
            startTime = StringUtils.StringToDateYearMonth(startTime,"yyyy-MM");
            for(int i=0;!startTime.equals(engTime);i++){
                timeArray.add(startTime);
                startTime = StringUtils.DatePlusToString(startTime,1,"yyyy-MM");
            }
            for(int j=0;j<timeArray.size();j++){
                for(Map<String, Object> map1:inputList){
                    if(timeArray.get(j).equals(map1.get("dataName"))){
                        array1.add(map1.get("total"));
                        array2.add(map1.get("dataName"));
                    }
                }
                if (array1.size()!=j+1){
                    array1.add(0);
                    array2.add(timeArray.get(j));
                }
            }
        }else{
            for(Map<String, Object> map1:inputList){
                array1.add(map1.get("total"));
                array2.add(map1.get("dataName"));
            }
        }
        map.put("total",array1);
        map.put("dataName",array2);
        resultMap.put(resultName,map);
        return resultMap;
    }

    /**
     * 跳转到宠物销售记录页面
     * @return
     */
    @RequestMapping("/petSalesRecords.html")
    public String toPetSalesRecordsPage(){
        return "petShop/petShopSalesRecords";
    }

    /**
     * 获取宠物店已完成的销售记录
     * @return
     */
    @RequestMapping("/petAllSalesRecords.html")
    @ResponseBody
    public String getPetShopCompleteSalesRecords(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetSalesRecords> petSalesRecordsList= petShopService.getPetSalesRecordsByShopId(petShop.getId(),true);
        return JSON.toJSONString(petSalesRecordsList);

        /*List<Map<String,Object>> resultList = null;
        if(petSalesRecordsList.size()>0){
            resultList = new ArrayList<>();
            for(PetSalesRecords p:petSalesRecordsList){
                Map<String,Object> map = new HashMap<>();
                if(p.getCategory().equals("pet")){
                    Pet pet = petShopService.queryPetByCondition(p.getProductId());
                    map.put("name",pet.getPetEncyclopedias().getName());
                    map.put("productNumber",pet.getNumber());
                }else if(p.getCategory().equals("food")){
                    PetFood petFood = petShopService.getFoodInformationById(p.getProductId());
                    map.put("name",petFood.getName());
                    map.put("productNumber",petFood.getFoodSerialNumber());
                }else if(p.getCategory().equals("service")){
                    ShopService shopService = petShopService.getPetShopServiceById(p.getProductId());
                    map.put("name",shopService.getServiceCategory());
                    map.put("productNumber",shopService.getServiceNum());
                }else if(p.getCategory().equals("periphery")){
                    PetPeriphery petPeriphery = petShopService.getPetPeripheryById(p.getProductId());
                    map.put("name",petPeriphery.getName());
                    map.put("productNumber",petPeriphery.getNumber());
                }

                map.put("productId",p.getProductId());
                map.put("category",p.getCategory());
                map.put("price",p.getPrice());
                map.put("number",p.getNumber());
                map.put("salesTime",p.getSalesTime());
                map.put("foldingRate",p.getFoldingRate());
                map.put("total",p.getTotal());
                resultList.add(map);
            }
        }
        if(resultList.size()>0){
            return JSON.toJSONString(resultList);
        }
        return JSON.toJSONString("fail");*/
    }

    /**
     * 删除销售记录
     * @return
     */
    @RequestMapping("/delSalesRecords.html")
    @ResponseBody
    public String delSalesRecords(String salesRecordsId){
        int result = petShopService.delSalesRecordsById(salesRecordsId);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转到宠物店系统设置页面
     * @return
     */
    @RequestMapping("/petSystemSetup.html")
    public String toPetSystemSetupPage(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        model.addAttribute("petShop",petShop);

        String imgPath = petShop.getShopImgPath();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "petShop/systemSetup";
    }

    /**
     * 跳转到宠物店员工管理界面
     * @return
     */
    @RequestMapping("/petShopStaff.html")
    public String toPetShopStaffPage(){
        return "petShop/petShopStaff";
    }

    /**
     * 跳转到宠物店用户分析报告
     * @return
     */
    @RequestMapping("/petShopUserAnalysis.html")
    public String toPetShopUserAnalysisPage(){
        return "petShop/petShopUserAnalysis";
    }


    /**
     * 跳转到宠物店用户分析报告
     * @return
     */
    @RequestMapping("/getPetShopUserAnalysis.html")
    @ResponseBody
    public String getPetShopUserAnalysis(String startTime,String endTime,String type) throws Exception{
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        //获取宠物店信息
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        List<Map<String, Object>>  petShopBrowseList=petShopService.getPetShopBrowseByShopId(petShop.getId(),startTime,endTime,(type.equals("month")?"%Y-%m":"%Y-%m-%d"));

        if(type.equals("month")){
            //查询宠物店浏览量情况-按月
            resultMap = getSalesAnalysisList(petShopBrowseList,resultMap,"petShopBrowseMap",startTime,endTime);
        }else {
            resultMap = getAnalysisByDayList(petShopBrowseList,resultMap,"petShopBrowseMap",startTime,endTime);
        }
        return JSON.toJSONString(resultMap);
    }

    /**
     * 跳转到宠物店会员预约界面
     * @return
     */
    @RequestMapping("/petShopMemberOrder.html")
    public String toPetShopMemberOrderPage(){
        return "petShop/petShopMemberOrder";
    }

    /**
     * 预约回复
     * @return
     */
    @RequestMapping("/replyOrder.html")
    @ResponseBody
    public String replyOrder(PetShopUserOrder petShopUserOrder){
        if(StringUtils.isEmpty(petShopUserOrder.getReplyStatus())){
            if(petShopUserOrder.getResult().equals("拒接")){
                petShopUserOrder.setReplyStatus("已完成");
            }else {
                petShopUserOrder.setReplyStatus("已答复");
            }
            petShopUserOrder.setReplyTime(StringUtils.getSystemTime());
        }

        int result = petShopService.updatePetShopOrder(petShopUserOrder);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 跳转到宠物店会员推广活动
     * @return
     */
    @RequestMapping("/petShopMemberActivity.html")
    public String toPetShopMemberActivityPage(){
        return "petShop/petShopMemberActivity";
    }

    /**
     * 获取宠物店会员推广活动
     * @return
     */
    @RequestMapping("/getPetShopMemberActivity.html")
    @ResponseBody
    public String getPetShopMemberActivity(Boolean isEnd){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<PetShopMemberActivity> petShopMemberActivityList = petShopService.getPetShopMemberActivity(petShop.getId(),isEnd);
        return JSON.toJSONString(petShopMemberActivityList);
    }

    /**
     * 新增宠物店会员推广活动
     * @return
     */
    @RequestMapping("/addActivity.html")
    @ResponseBody
    public String addActivity(PetShopMemberActivity shopMemberActivity){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        shopMemberActivity.setId(UUIDUtils.getUUID());
        shopMemberActivity.setCreateTime(StringUtils.getSystemTime());
        shopMemberActivity.setEnd(false);
        shopMemberActivity.setShopId(petShop.getId());
        int result = petShopService.addActivity(shopMemberActivity);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 更新宠物店会员推广活动
     * @return
     */
    @RequestMapping("/updateActivity.html")
    @ResponseBody
    public String updateActivity(PetShopMemberActivity shopMemberActivity){
        int result = petShopService.updateActivty(shopMemberActivity);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }
    /**
     * 结束推广活动
     * @return
     */
    @RequestMapping("/changePetShopMemberActivityStatus.html")
    @ResponseBody
    public String changePetShopMemberActivityStatus(Boolean isEnd,String activityId){

        int result = petShopService.updateShopActivityStatus(isEnd,activityId);
        if(result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 宠物店会员推广活动兑换
     * @return
     */
    @RequestMapping("/petShopMemberActivityScore.html")
    @ResponseBody
    public String petShopMemberActivityScore(PetShopMemberActivityRecord petShopMemberActivityRecord){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        int result = petShopService.updateShopMemberScore(petShopMemberActivityRecord.getTotalScore(),petShop.getId(),petShopMemberActivityRecord.getMemberId());
        if (result>0){
            petShopMemberActivityRecord.setId(UUIDUtils.getUUID());
            petShopMemberActivityRecord.setCreateTime(StringUtils.getSystemTime());
            petShopMemberActivityRecord.setShopId(petShop.getId());
            petShopService.savePetShopMemberActivityRecord(petShopMemberActivityRecord);
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 获取宠物店会员推广活动兑换记录
     * @return
     */
    @RequestMapping("/getPetShopMemberActivityRecord.html")
    @ResponseBody
    public String getPetShopMemberActivityRecord(){
        List<Map<String,Object>> resultList = new ArrayList<>();

        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        //活动记录
        List<PetShopMemberActivityRecord> petShopMemberActivityRecordList= petShopService.getPetShopMemberActivityRecord(petShop.getId());
        //所有活动
        List<PetShopMemberActivity> petShopMemberActivityList = petShopService.getPetShopMemberActivity(petShop.getId(),null);

        for (PetShopMemberActivityRecord p:petShopMemberActivityRecordList){
            Map<String,Object> map = new HashMap<>();
            for (PetShopMemberActivity p2:petShopMemberActivityList){
                if(p.getActivityId().equals(p2.getId())){
                    map.put("activityName",p2.getName());
                }
            }
            map.put("activityId",p.getActivityId());
            PetShopMember petShopMember = petShopService.getPetShopMemberById(p.getMemberId());
            map.put("memberNumber",petShopMember.getMemberNumber());
            map.put("score",p.getScore());
            map.put("number",p.getNumber());
            map.put("totalScore",p.getTotalScore());
            map.put("createTime",p.getCreateTime());
            resultList.add(map);
        }
        return JSON.toJSONString(resultList);
    }


    /**
     * 跳转到用户评论查看
     * @return
     */
    @RequestMapping("/petShopUserComment.html")
    public String petShopUserComment(){
        return "petShop/petShopUserComment";
    }


    /**
     * 跳转到宠物周边
     * @return
     */
    @RequestMapping("/peripheryInformation.html")
    public String toPeripheryInformationPage(Model model){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        int totalSize = petShopService.getPetPeripheryCount(petShop.getId(),null,null,null);
        model.addAttribute("totalSize",totalSize);
        return "petShop/petPeripheryInformation";
    }


    /**
     * 获取宠物周边数据
     * @return
     */
    @RequestMapping("/getPeripheryInformation.html")
    @ResponseBody
    public String getPeripheryInformation(Integer num,Integer pageSize,String keyword,String color,String price){
        ResultQuery<PetPeriphery> resultQuery = new ResultQuery<>();
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());

        int startRow = 0;
        startRow = (num-1)*pageSize;

        List<PetPeriphery> petPeripheryList = petShopService.getPetPeriphery(startRow,pageSize,petShop.getId(),keyword,color,price);
        if (petPeripheryList.size()>0){
            int totalSize = petShopService.getPetPeripheryCount(petShop.getId(),keyword,color,price);
            resultQuery.setList(petPeripheryList);
            resultQuery.setPageNumber(num);
            resultQuery.setTotal(totalSize);
        }
        return JSON.toJSONString(resultQuery);
    }

    /**
     * 获取宠物周边数据
     * @return
     */
    @RequestMapping("/addPeriphery.html")
    @ResponseBody
    public String addPeriphery(PetPeriphery petPeriphery){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        petPeriphery.setId(UUIDUtils.getUUID());
        petPeriphery.setCreateTime(StringUtils.getSystemTime());
        petPeriphery.setSold(0);
        petPeriphery.setShopId(petShop.getId());
        petPeriphery.setStatus("待售");
        int result = petShopService.addPeriphery(petPeriphery);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转到宠物周边详情
     * @return
     */
    @RequestMapping("/toPeripheryDetails.html/{id}")
    public String toPeripheryDetails(@PathVariable("id") String id,Model model){
        PetPeriphery petPeriphery = petShopService.getPetPeripheryById(id);
        model.addAttribute("petPeriphery",petPeriphery);
        String imgPath = petPeriphery.getImgPath();
        model.addAttribute("imgPathList",StringUtils.getImgPath(imgPath));
        return "petShop/peripheryDetails";
    }


    /**
    * 获取宠物店信息
    * @return
    */
    @RequestMapping("/delPeriphery.html")
    @ResponseBody
    public String delPeriphery(String id){
        int result = petShopService.delPeripheryById(id);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 获取宠物店信息
     * @return
     */
    @RequestMapping("/getPetShopMsg.html")
    @ResponseBody
    public String getPetShopMsg(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        return JSON.toJSONString(petShop);
    }

    /**
     * 获取宠物店服务
     * @return
     */
    @RequestMapping("/getPetShopService.html")
    @ResponseBody
    public String getPetShopService(){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<ShopService> petShopServiceList = petShopService.getPetShopService(petShop.getId());
        return JSON.toJSONString(petShopServiceList);
    }

    /**
     * 新增宠物店服务
     * @return
     */
    @RequestMapping("/addShopService.html")
    @ResponseBody
    public String addShopService(ShopService shopService){
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        shopService.setId(UUIDUtils.getUUID());
        shopService.setCreateTime(StringUtils.getSystemTime());
        shopService.setStatus("待售");
        shopService.setShopId(petShop.getId());
        int result = petShopService.addShopService(shopService);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 删除宠物店服务
     * @return
     */
    @RequestMapping("/delService.html")
    @ResponseBody
    public String delService(String id){
        int result = petShopService.delServiceById(id);
        if (result>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }


    /**
     * 获取会员充值金额情况
     * @return
     */
    @RequestMapping("/getShopMemberRechargeMoney.html")
    @ResponseBody
    public String getShopMemberRechargeMoney(String startTime,String endTime,String selectType) throws Exception {
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<Map<String, Object>> list= petShopService.getShopMemberRechargeMoney(petShop.getId(),startTime,endTime,(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        if(selectType.equals("month")){
            resultMap = getSalesAnalysisList(list,resultMap,"petShopMemberRechargeMoneyMap",startTime,endTime);
        }else {
            resultMap = getAnalysisByDayList(list,resultMap,"petShopMemberRechargeMoneyMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }

    /**
     * 根据天来封装返回数据分析列表
     * @param inputList
     * @param resultMap
     * @param resultName
     * @param startTime
     * @param engTime
     * @return
     * @throws Exception
     */
    public static Map<String,Map<String, Object>> getAnalysisByDayList(List<Map<String, Object>> inputList,Map<String,Map<String, Object>> resultMap,String resultName,String startTime,String engTime) throws Exception{
        ArrayList array1 = new ArrayList<String>();
        ArrayList array2 = new ArrayList<String>();

        ArrayList<String> timeArray = new ArrayList();
        engTime = StringUtils.StringToDateYearMonth(engTime,"yyyy-MM-dd");
        /*engTime = StringUtils.DateDayPlusToString(engTime,1,"yyyy-MM-dd");*/
        startTime = StringUtils.StringToDateYearMonth(startTime,"yyyy-MM-dd");
        for(int i=0;!startTime.equals(engTime);i++){
            timeArray.add(startTime);
            startTime = StringUtils.DateDayPlusToString(startTime,1,"yyyy-MM-dd");
        }
        for(int j=0;j<timeArray.size();j++){
            for(Map<String, Object> map1:inputList){
                if(timeArray.get(j).equals(map1.get("dataName"))){
                    array1.add(map1.get("total"));
                    array2.add(map1.get("dataName"));
                }
            }
            if (array1.size()!=j+1){
                array1.add(0);
                array2.add(timeArray.get(j));
            }
        }

        Map<String,Object> map = new HashMap<>();
        map.put("total",array1);
        map.put("dataName",array2);
        resultMap.put(resultName,map);

        return resultMap;
    }

    /**
     * 获取会员新增情况
     * @return
     */
    @RequestMapping("/getShopNewMember.html")
    @ResponseBody
    public String getShopNewMember(String startTime,String endTime,String selectType) throws Exception {
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<Map<String, Object>> list= petShopService.getShopNewMember(petShop.getId(),startTime,endTime,(selectType.equals("month")?"%Y-%m":"%Y-%m-%d"));
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();

        if(selectType.equals("month")){
            resultMap = getSalesAnalysisList(list,resultMap,"petShopNewMemberMap",startTime,endTime);
        }else {
            resultMap = getAnalysisByDayList(list,resultMap,"petShopNewMemberMap",startTime,endTime);
        }

        return JSON.toJSONString(resultMap);
    }

    /**
     * 获取会员等级情况
     * @return
     */
    @RequestMapping("/getShopMemberLevel.html")
    @ResponseBody
    public String getShopMemberLevel() throws Exception {
        //获取用户信息
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        PetShop petShop = petShopService.getPetShopByUserId(user.getId());
        List<Map<String, Object>> list= petShopService.getShopMemberLevel(petShop.getId());

        PetShopMemberDiscount petShopMemberDiscount = petShopService.getPetShopMemberDiscount(petShop.getId());

        for (Map<String, Object> map:list){
            if(map.get("dataName").equals(1)){
                map.put("dataName",petShopMemberDiscount.getNameOne());
            }else if(map.get("dataName").equals(2)){
                map.put("dataName",petShopMemberDiscount.getNameTwo());
            }else if(map.get("dataName").equals(3)){
                map.put("dataName",petShopMemberDiscount.getNameThree());
            }else if(map.get("dataName").equals(4)){
                map.put("dataName",petShopMemberDiscount.getNameFour());
            }
        }
        //返回列表
        Map<String,Map<String, Object>> resultMap = new HashMap<>();
        resultMap = getSalesAnalysisList(list,resultMap,"memberLevelMap",null,null);
        return JSON.toJSONString(resultMap);
    }


    /**
     * 上传宠物图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadPetImg")
    @ResponseBody
    public Map<String,Object> uploadPetImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"pet");
        return map;
    }

    /**
     * 上传食品图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadFoodImg")
    @ResponseBody
    public Map<String,Object> uploadFoodImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"food");
        return map;
    }

    /**
     * 上传宠物周边图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadPeripheryImg")
    @ResponseBody
    public Map<String,Object> uploadPeripheryImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"periphery");
        return map;
    }
}
