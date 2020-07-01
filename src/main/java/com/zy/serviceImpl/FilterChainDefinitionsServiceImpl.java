package com.zy.serviceImpl;

import com.zy.shiro.ShiroPermissionFactory;
import org.apache.shiro.util.CollectionUtils;
import org.apache.shiro.web.filter.mgt.DefaultFilterChainManager;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @ClassName FilterChainDefinitionsServiceImpl
 * @Description 重新加载拦截规则
 * @Author zy
 * @Date 2020/3/19 22:01
 */
@Service("filterChainDefinitionsService")
public class FilterChainDefinitionsServiceImpl {

    @Resource
    private ShiroPermissionFactory permissionFactory;

    public void reloadFilterChains() {
        synchronized (permissionFactory) {   //强制同步，控制线程安全
            AbstractShiroFilter shiroFilter = null;
            try {
                shiroFilter = (AbstractShiroFilter) permissionFactory.getObject();

                PathMatchingFilterChainResolver resolver = (PathMatchingFilterChainResolver) shiroFilter
                        .getFilterChainResolver();
                // 过滤管理器
                DefaultFilterChainManager manager = (DefaultFilterChainManager) resolver.getFilterChainManager();
                // 清除权限配置
                manager.getFilterChains().clear();
                permissionFactory.getFilterChainDefinitionMap().clear();
                // 重新设置权限
                permissionFactory.setFilterChainDefinitions(ShiroPermissionFactory.filterChainDefinitions);//传入配置中的filterchains

                Map<String, String> chains = permissionFactory.getFilterChainDefinitionMap();
                //重新生成过滤链
                if (!CollectionUtils.isEmpty(chains)) {
                    for (Map.Entry<String, String> chain : chains.entrySet()) {
                        manager.createChain(chain.getKey(), chain.getValue().replace(" ", ""));
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}