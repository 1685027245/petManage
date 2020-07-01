package com.zy.shirotest;
import org.apache.commons.collections4.Factory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Quickstart {

    private static final transient Logger log = LoggerFactory.getLogger(Quickstart.class);
//    public static void main(String[] args) {
//
//        /**
//         * 工厂方式读取配置文件shiro.ini（定义用户信息、密码、角色、行为）
//         */
//        Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shirotest.ini");
//        SecurityManager securityManager = factory.getInstance();
//        SecurityUtils.setSecurityManager(securityManager);
//
//        // 获取Subject对象
//        Subject currentUser = SecurityUtils.getSubject();
//
//        //获取session
//        Session session = currentUser.getSession();
//        //给session设置值
//        session.setAttribute("someKey", "aValue");
//        //从session中获取刚才设置的值
//        String value = (String) session.getAttribute("someKey");
//        if (value.equals("aValue")) {
//            log.info("检索到正确的值! [" + value + "]");
//        }
//
//        // 让我们登录当前用户，以便检查角色和权限：
//        if (!currentUser.isAuthenticated()) {
//            //设置令牌
//            UsernamePasswordToken token = new UsernamePasswordToken("lonestarr", "vespa");
//            //记住我
//            token.setRememberMe(true);
//            try {
//                currentUser.login(token);
//            } catch (UnknownAccountException uae) { //未知账户异常
//                log.info("没有用户名为的用户" + token.getPrincipal());
//            } catch (IncorrectCredentialsException ice) {
//                log.info("帐户密码 " + token.getPrincipal() + " 错误!");
//            } catch (LockedAccountException lae) {
//                log.info("用户名的帐户 " + token.getPrincipal() + " 已锁定.  " +
//                        "请与管理员联系以解除锁定.");
//            }
//            //所有异常的父类
//            catch (AuthenticationException ae) {
//                log.info("出现异常");
//            }
//        }
//
//        //say who they are:
//        //print their identifying principal (in this case, a username):
//        log.info("用户 [" + currentUser.getPrincipal() + "] 登录成功.");
//
//        //角色测试:
//        //是否有schwartz的角色
//        if (currentUser.hasRole("schwartz")) {
//            log.info("May the Schwartz be with you!");
//        } else {
//            log.info("Hello, 凡人.");
//        }
//
//        //测试类型化权限（不是实例级）
//        if (currentUser.isPermitted("lightsaber:wield")) {
//            log.info("You may use a lightsaber ring.  Use it wisely.");
//        } else {
//            log.info("Sorry, lightsaber rings are for schwartz masters only.");
//        }
//
//        //一个（非常强大的）实例级权限：
//        if (currentUser.isPermitted("winnebago:drive:eagle5")) {
//            log.info("You are permitted to 'drive' the winnebago with license plate (id) 'eagle5'.  " +
//                    "Here are the keys - have fun!");
//        } else {
//            log.info("Sorry, you aren't allowed to drive the 'eagle5' winnebago!");
//        }
//
//        //全部完成-注销！
//        currentUser.logout();
//
//        System.exit(0);
//    }
}
