package com.zy.shiro;

import com.zy.dao.ResourceMapper;
import com.zy.pojo.Resource;
import com.zy.utils.StringUtils;
import org.apache.shiro.config.Ini;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.util.CollectionUtils;
import org.apache.shiro.web.config.IniFilterChainResolverFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName ShiroPermissionFactory
 * @Description TODO
 * @Author zy
 * @Date 2020/3/19 21:51
 */
public class ShiroPermissionFactory extends ShiroFilterFactoryBean {

    public static final String PREMISSION_STRING = "roles[\"{0}\"]";

    @Autowired
    private ResourceMapper resourceDao;

    /** 记录配置中的过滤链 */
    public static String filterChainDefinitions = "";//这个要和配置文件中的名称要一样

    /**
     * 初始化设置过滤链,动态设置拦截条件
     */
    @Override
    public void setFilterChainDefinitions(String definitions) {
        filterChainDefinitions = definitions;// 记录配置的静态过滤链
        Map<String, String> otherChains = new HashMap<>();
        List<Resource> list = (List) resourceDao.getAllSource();
        for (Resource resource : list) {
            if (!StringUtils.isEmpty(resource.getValue()) &&!StringUtils.isEmpty(resource.getPerms())) {
                otherChains.put(resource.getValue(),resource.getPerms());
            }
        }
        otherChains.put("/**", "authc");
        // 加载配置默认的过滤链
        Ini ini = new Ini();
        ini.load(filterChainDefinitions);
        Ini.Section section = ini.getSection(IniFilterChainResolverFactory.URLS);
        if (CollectionUtils.isEmpty(section)) {
            section = ini.getSection(Ini.DEFAULT_SECTION_NAME);
        }
        // 加上数据库中过滤链
        section.putAll(otherChains);
        setFilterChainDefinitionMap(section);
    }
}


