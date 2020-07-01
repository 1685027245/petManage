package com.zy.controller;

import com.alibaba.fastjson.JSON;
import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.github.qcloudsms.httpclient.HTTPException;
import com.zy.pojo.User;
import com.zy.pojo.UserRole;
import com.zy.pojo.UserRoleRelation;
import com.zy.service.UserService;
import com.zy.utils.*;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 返回用户列表
     * @param model
     * @return
     */
    @ResponseBody
    @RequestMapping("/showUser")
    public List<User> getAllUser(User user,Model model){
        List<User> userList = userService.getAllUser(user);
        for(User user1:userList){
            List<UserRole> userRoleList= userService.getUserRoleById(user1.getId());
            user1.setUserRoles(userRoleList);
        }
        return userList;
    }

    /**
     * 获取验证码
     * @return
     */
    @ResponseBody
    @RequestMapping("/getRegisterMsg.html")
    public String sentMsg(String phoneNumber,String register){
        if(register.equals("register")){
            User resultUser = userService.hasUser(phoneNumber);
            if(!StringUtils.isEmpty(resultUser)){
                return JSON.toJSONString("hasUser");
            }
        }
        String number[] = {phoneNumber};
        String code = String.format("%06d",new Random().nextInt(999999));
        String[] params = {code,"1"};
        int result = sendMessage(number,params);
        RedisUtil.set(phoneNumber,code);
        RedisUtil.setExp(phoneNumber,60);
        if(result==0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 用户注册
     * @param user
     * @return
     */
    @ResponseBody
    @RequestMapping("/registerUser.html")
    public String registerUser(User user,String code){
        User resultUser = userService.hasUser(user.getPhone());
        if(!StringUtils.isEmpty(resultUser)){
            return JSON.toJSONString("hasUser");
        }
        if(code.equals(RedisUtil.getString(user.getPhone()).replace("\"", ""))){
            String userId = UUIDUtils.getUUID();
            user.setId(userId);
            user.setForbidden(false);
            user.setSalt(user.getPhone());
            user.setPassword(MD5Utils.getMD5Password(user.getPassword(),user.getPhone()).toString());
            user.setImgPath("/statics/img/defaultImg.png");
            user.setAddress("未设置");
            user.setUserNumber("未设置");
            user.setEmail("未设置");
            user.setSex(0);
            user.setAge(0);
            int result = userService.registerUser(user);
            if (result>0){
                /*将注册的用户绑定普通角色*/
                UserRoleRelation roleRelation = new UserRoleRelation(UUIDUtils.getUUID(),userId,"3");
                userService.bindingRoleRelationship(roleRelation);
                return JSON.toJSONString("success");
            }
            return JSON.toJSONString("fail");
        }else {
            return JSON.toJSONString("验证码不正确，请重新输入!");
        }
    }

    /**
     * 用户找回密码校验码校验
     * @return
     */
    @ResponseBody
    @RequestMapping("/findPwd.html")
    public String findPwd(String phone,String code){
        if(code.equals(RedisUtil.getString(phone).replace("\"", ""))){
            return JSON.toJSONString("success");
        }else {
            return JSON.toJSONString("验证码不正确，请重新输入!");
        }
    }

    /**
     * 用户找回重置密码
     * @return
     */
    @ResponseBody
    @RequestMapping("/updateUserPwd.html")
    public String updateUserPwd(String phone,String newPwd){
        int reuslt = userService.findPwd(phone,MD5Utils.getMD5Password(newPwd,phone).toString());
        if (reuslt>0){
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 跳转登录界面
     * @return
     */
    @RequestMapping("/login")
    public String  login(){
        return "login/login";
    }

    /**
     * 登录校验
     * @param username 用户名
     * @param password 密码
     * @param redirectAttributes 重定向数据
     * @return
     */
    @RequestMapping("/loginCheck")
    @ResponseBody
    public String  doLogin(@RequestParam("username")String username, @RequestParam("password")String password,
                           @RequestParam("remeberMe")Boolean remeberMe,RedirectAttributes redirectAttributes){
        Subject subject= SecurityUtils.getSubject();
        if (subject.isAuthenticated()==false){
            UsernamePasswordToken token=new UsernamePasswordToken(username,password);
            //subject.isRemembered();
            if(remeberMe==true){
                token.setRememberMe(true);
            }
            try{
                subject.login(token);
            }catch (Exception e){
//                redirectAttributes.addFlashAttribute("msg", e.getMessage());
                if(e.getMessage().equals("noPerson")||e.getMessage().equals("locking")){
                    return JSON.toJSONString(e.getMessage());
                }else {
                    return JSON.toJSONString("fail");
                }
            }
        }

        if(subject.hasRole("admin")){
            return JSON.toJSONString("success");//管理员权限
        }else if(subject.hasRole("petShop")){
            return JSON.toJSONString("petShop");//宠物店权限
        }else if(subject.hasRole("forbiddenPetShop")){
            return JSON.toJSONString("forbiddenPetShop");//申请宠物店中
        }else if(subject.hasRole("applyingPetShop")){
            return JSON.toJSONString("general");//申请宠物店中
        }
        return JSON.toJSONString("general");//普通用户
    }

    /**
     * 重定向跳转宠物店主页面
     * @return
     */
    @RequestMapping("/petIndex.html")
    public String  toIndex(){
        return "redirect:/petShop/petIndex.html";
    }

    /**
     * 重定向跳转系统管理主页
     * @return
     */
    @RequestMapping("/administerIndex.html")
    public String  toadministerIndex(){
        return "redirect:/system/systemIndex.html";
    }

    /**
     * 跳转列表页面
     * @return
     */
    @RequestMapping("/list")
    public String  toList(){
        return "list";
    }

    /**
     * 跳转列表页面2
     * @return
     */
    @RequestMapping("/list2")
    public String  toList2(){
        return "list2";
    }

    /**
     * 跳转无权限页面
     * @return
     */
    @RequestMapping("/unauthorized")
    public String  unauthorized(){
        return "unauthorized";
    }


    /**
     *
      * @return
     */
    @RequestMapping("/userCount")
    @ResponseBody
    public String  userCount(){
        int count = userService.getUserCount();
        return JSON.toJSONString(count);
    }


    /**
     * 发送短信
     * @param numbers 需要发送短信的手机号码
     * @param params 验证码和有效时间，单位分钟
     */
    public static int sendMessage(String[] numbers,String[] params) {

        // 短信应用 SDK AppID
        int appid = 1400339692; // SDK AppID 以1400开头
        // 短信应用 SDK AppKey
        String appkey = "8ca700b5c9b6b6b474793eb65996467f";
        // 短信模板 ID，需要在短信应用中申请
        int templateId = 563273; // NOTE: 这里的模板 ID`7839`只是示例，真实的模板 ID 需要在短信控制台中申请
        // 签名
        String smsSign = "张颖我的宠物日志记录"; // NOTE: 签名参数使用的是`签名内容`，而不是`签名ID`。这里的签名"腾讯云"只是示例，真实的签名需要在短信控制台申请

        try {
            SmsSingleSender ssender = new SmsSingleSender(appid, appkey);
            SmsSingleSenderResult result = ssender.sendWithParam("86", numbers[0], templateId, params, smsSign, "", "");
            //System.out.println(result);
            return result.result;
        } catch (HTTPException e) {
            // HTTP响应码错误
            e.printStackTrace();
        } catch (JSONException e) {
            // json解析错误
            e.printStackTrace();
        } catch (IOException e) {
            // 网络IO错误
            e.printStackTrace();
        }
        return 404;
    }

    /**
     * 更新用户信息
     * @param user
     * @return
     */
    @RequestMapping(value = "/updateUserMsg.html")
    @ResponseBody
    public String changeUserMsg(User user){
        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        if(StringUtils.isEmpty(user.getId())){
            user.setId(nowUser.getId());
        }
        int result = userService.updateUser(user);
        if(result>0){
            if(StringUtils.isEmpty(user.getId())){
                nowUser.setForbidden(user.getForbidden());
            }else {
                nowUser.setAddress(user.getAddress());
                nowUser.setUserName(user.getUserName());
                nowUser.setSex(user.getSex());
                nowUser.setAge(user.getAge());
                nowUser.setEmail(user.getEmail());
            }
            return JSON.toJSONString("success");
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 用户更改密码
     * @return
     */
    @RequestMapping(value = "/changePassword.html")
    @ResponseBody
    public String changePassword(String oldPwd,String newPwd){
        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        oldPwd =  MD5Utils.getMD5Password(oldPwd,nowUser.getPhone()).toString();
        if (oldPwd.equals(nowUser.getPassword())){
            String newSurePwd = MD5Utils.getMD5Password(newPwd,nowUser.getPhone()).toString();
            User changeUser = new User();
            changeUser.setId(nowUser.getId());
            changeUser.setPassword(newSurePwd);
            int result = userService.updateUser(changeUser);
            if (result>0){
                nowUser.setPassword(newSurePwd);
                return JSON.toJSONString("success");
            }
        }
        return JSON.toJSONString("fail");
    }

    /**
     * 上传用户图片
     * @param loadFile
     */
    @RequestMapping(value = "/uploadUserImg")
    @ResponseBody
    public Map<String,Object> uploadPeripheryImg(@RequestParam("file") CommonsMultipartFile loadFile) {
        Map<String,Object> map = new HashMap<>();
        map = UploadFileUtil.uploadFile(loadFile,"user");
        //获取用户信息
        User nowUser = (User) SecurityUtils.getSubject().getPrincipal();
        User user = new User();
        user.setId(nowUser.getId());
        user.setImgPath(map.get("url").toString());
        int result = userService.updateUser(user);

        if(result>0){
            nowUser.setImgPath(map.get("url").toString());
        }

        return map;
    }
}
