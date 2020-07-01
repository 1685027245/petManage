package com.zy.shirotest;

import com.alibaba.fastjson.JSON;
import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import com.zy.pojo.PetSalesRecords;
import com.zy.service.PetShopService;
import com.zy.utils.MD5Utils;
import com.zy.utils.StringUtils;
import jdk.nashorn.internal.runtime.regexp.joni.Regex;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.MessageFormat;
import java.text.SimpleDateFormat;
import java.util.*;

public class MyTest {

    @Test
    public void test()throws Exception {
        System.out.println("MyTest.test:"+ MD5Utils.getMD5Password("15975400724","15975400722").toString());
    }
}
