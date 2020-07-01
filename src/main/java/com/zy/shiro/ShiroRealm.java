package com.zy.shiro;

import com.alibaba.fastjson.JSON;
import com.zy.pojo.User;
import com.zy.pojo.UserRole;
import com.zy.service.UserService;
import com.zy.utils.RedisUtil;
import com.zy.utils.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 登录校验
 */
public class ShiroRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;

    /**
     * 判断是否有登陆权限
     * @param token
     * @return
     * @throws AuthenticationException
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {

        //将token转换为usernamepasswordToken
        UsernamePasswordToken token2= (UsernamePasswordToken) token;
        String username = token2.getUsername();
        User user = (User) userService.hasUser(username);
        if(StringUtils.isEmpty(user)) {
            throw new UnknownAccountException("noPerson");//没有该用户
        }
        if(user.getForbidden()) {
            throw new UnknownAccountException("locking");//用户锁定
        }
        /**
         * principals: 可以使用户名，或d登录用户的对象
         * hashedCredentials: 从数据库中获取的密码
         * credentialsSalt：密码加密的盐值
         * RealmName:  类名（ShiroRealm）
         */
        AuthenticationInfo info = new SimpleAuthenticationInfo(user, user.getPassword(), ByteSource.Util.bytes(username), getName());
        return info; //框架完成验证
    }


    /**
     * 判断用户是否具有角色的权限
     * @param principal
     * @return
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principal) {

        User myUser =(User)principal.getPrimaryPrincipal();
//        String username= (String) SecurityUtils.getSubject().getPrincipal();
        Set<String> roles=new HashSet<>();
        Set<String> menus=new HashSet<String>();
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        /*User user = (User) userService.hasUser(myUser.getUserNumber());*/
        User user = userService.getUserById(myUser.getId());
        List<UserRole> userRoleList= userService.getUserRoleById(user.getId());
        //这里手动将角色设进去
        if(userRoleList.size()>0){
            for (UserRole userRole:userRoleList){
                //通过用户id查询用户角色
                roles.add(userRole.getRoleName());
            }
            //通过用户id查询用户权限
            menus.add("query");
        }else {
            roles.add("general");
        }
        // 角色加入AuthorizationInfo认证对象
        info.setRoles(roles);
        // 权限加入AuthorizationInfo认证对象
        info.setStringPermissions(menus);
        //记录最后登录时间
        userService.lastLoginTime(user.getId());
        return info;
    }

    /**
     * 清空权限
     */
    public void clearAuthz(){
        this.clearCachedAuthorizationInfo(SecurityUtils.getSubject().getPrincipals());
    }

}
