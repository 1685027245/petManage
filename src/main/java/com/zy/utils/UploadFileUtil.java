package com.zy.utils;

import com.zy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @ClassName UploadFileUtil
 * @Description TODO
 * @Author zy
 * @Date 2020/3/31 15:17
 */
public class UploadFileUtil {

    /**
     * 上传文件
     * @param loadFile 上传的文件
     * @param path 文件相对路径
     * @return
     */
    public static Map<String,Object> uploadFile(CommonsMultipartFile loadFile,String path){
        String filePath = "D:/petManager/"+path+"/";//定义上传文件的存放位置
        String fileName = loadFile.getOriginalFilename();  //获取上传文件的名字
        fileName = fileName.substring(fileName.lastIndexOf("."),fileName.length());
        fileName = UUIDUtils.getUUID()+fileName;
        //判断文件夹是否存在,不存在则创建
        File file=new File(filePath);
        if(!file.exists()){
            file.mkdirs();
        }
        String newFilePath=filePath+fileName; //新文件的路径
        try {
            loadFile.transferTo(new File(newFilePath));  //将传来的文件写入新建的文件
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
        }

        Map<String,Object> map = new HashMap<>();
        map.put("url","/img/"+path+"/"+fileName);
        map.put("fileName",fileName);

        return map;
    }
}
