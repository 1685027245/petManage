package com.zy.utils;

import com.alibaba.fastjson.JSON;
import org.apache.shiro.crypto.hash.SimpleHash;

/**
 * @ClassName MD5Utils
 * @Description TODO
 * @Author zy
 * @Date 2020/4/17 13:39
 */
public class MD5Utils {

    /**
     *
     * @param password 明码
     * @param salt 盐值，一般都是用户名或者userid，要保证唯一
     * @return
     */
    public static SimpleHash getMD5Password(String password,String salt){
        String algorithmName = "MD5";//加密算法
        Object source = password;//要加密的密码
        Object saltNow = salt;//盐值，一般都是用户名或者userid，要保证唯一
        int hashIterations = 1024;//加密次数
        SimpleHash simpleHash = new SimpleHash(algorithmName,source,saltNow,hashIterations);
        return simpleHash;
    }

}
