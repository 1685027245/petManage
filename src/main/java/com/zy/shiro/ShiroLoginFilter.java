package com.zy.shiro;

import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * @ClassName ShiroLoginFilter
 * @Description TODO
 * @Author zy
 * @Date 2020/3/18 10:44
 */
public class ShiroLoginFilter extends FormAuthenticationFilter {
    private static final Logger log = LoggerFactory.getLogger(ShiroLoginFilter.class);
    /**
     * 如果isAccessAllowed返回false 则执行onAccessDenied
     *
     * @param request
     * @param response
     * @param mappedValue
     * @return
     */
    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue) {

        if(isLoginRequest(request,response)&&isLoginSubmission(request, response)){
            return false;
        }
        return super.isAccessAllowed(request, response, mappedValue);
    }
}

