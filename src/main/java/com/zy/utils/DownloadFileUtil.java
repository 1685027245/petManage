package com.zy.utils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

/**
 * @ClassName downloadFileUtil
 * @Description 文件下载
 * @Author zy
 * @Date 2020/4/12 11:16
 */
public class DownloadFileUtil {

    public static void downloadFile(String filename, HttpServletRequest request,HttpServletResponse response) throws IOException{
        //模拟文件，myfile.txt为需要下载的文件
        String path = "D:\\petManager"+"\\"+filename;
        //获取输入流
        InputStream bis = new BufferedInputStream(new FileInputStream(new File(path)));
        //转码，免得文件名中文乱码
        filename = URLEncoder.encode(filename,"UTF-8");
        //设置文件下载头
        response.addHeader("Content-Disposition", "attachment;filename=" + filename);
        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型
        response.setContentType("multipart/form-data");
        BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
        int len = 0;
        while((len = bis.read()) != -1){
            out.write(len);
            out.flush();
        }
        out.close();
    }
}
