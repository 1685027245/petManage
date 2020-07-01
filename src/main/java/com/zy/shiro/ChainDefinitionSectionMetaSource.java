package com.zy.shiro;

import com.zy.dao.ResourceMapper;
import com.zy.pojo.Permission;
import com.zy.utils.StringUtils;
import org.apache.shiro.config.Ini;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.filter.mgt.DefaultFilterChainManager;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * @ClassName ChainDefinitionSectionMetaSource
 * @Description 动态初始化拦截配置,这里没启用了，使用另一种动态加载方式
 * @Author zy
 * @Date 2020/3/15 23:03
 */
public class ChainDefinitionSectionMetaSource implements FactoryBean<Ini.Section> {

    @Autowired
    private ResourceMapper resourceDao;

    @Autowired
    ShiroFilterFactoryBean shiroFilterFactoryBean;

    private String filterChainDefinitions;

    /**
     * 默认premission 字符串格式模板
     */
    public static final String PREMISSION_STRING="roles[\"{0}\"]";

    @Override
    public Ini.Section getObject() throws Exception {
        //获取所有Resource
        List<Permission> list = resourceDao.getAllPermission();
        Ini ini = new Ini();
        //加载默认的url
        ini.load(filterChainDefinitions);
        Ini.Section section = ini.getSection(Ini.DEFAULT_SECTION_NAME);
        //循环Resource 的url,逐个添加到section 中。section 就是filterChainDefinitionMap,
        //里面的键就是链接URL,值就是存在什么条件才能访问该链接
        for (Iterator<Permission> it = list.iterator(); it.hasNext();) {
            Permission permission = it.next();
            //如果不为空值添加到section 中
            if(!StringUtils.isEmpty(permission.getUrl()) &&
                    !StringUtils.isEmpty(permission.getPerms())) {
                section.put(permission.getUrl(),permission.getPerms());
            }
        }
        return section;
    }


    @Override
    public Class<?> getObjectType() {
        return this.getClass();
    }

    @Override
    public boolean isSingleton() {
        return false;
    }

    public void setFilterChainDefinitions(String filterChainDefinitions) {
        this.filterChainDefinitions = filterChainDefinitions;
    }

    public void updatePermission() {

        synchronized (shiroFilterFactoryBean) {

            AbstractShiroFilter shiroFilter = null;

            try {
                shiroFilter = (AbstractShiroFilter) shiroFilterFactoryBean.getObject();
            } catch (Exception e) {
            }

            // 获取过滤管理器
            PathMatchingFilterChainResolver filterChainResolver = (PathMatchingFilterChainResolver) shiroFilter
                    .getFilterChainResolver();
            DefaultFilterChainManager manager = (DefaultFilterChainManager) filterChainResolver.getFilterChainManager();

            // 清空初始权限配置
            manager.getFilterChains().clear();
            shiroFilterFactoryBean.getFilterChainDefinitionMap().clear();

            // 重新构建生成
            shiroFilterFactoryBean.setFilterChainDefinitions(filterChainDefinitions);
            Map<String, String> chains = shiroFilterFactoryBean.getFilterChainDefinitionMap();

            for (Map.Entry<String, String> entry : chains.entrySet()) {
                String url = entry.getKey();
                String chainDefinition = entry.getValue().trim().replace(" ", "");
                manager.createChain(url, chainDefinition);
            }

        }
    }

}