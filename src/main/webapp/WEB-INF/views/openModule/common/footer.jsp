<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<footer class="am_footer" style="margin-bottom: 0">
    <div class="am_footer_con">
        <div class="am_footer_link">
            <span>关于爱宠乐</span>
            <ul>
                <li><a href="${pageContext.request.contextPath}/open/index.html">关于我们</a></li>
                <li><a href="${pageContext.request.contextPath}/open/index.html">发展历程</a></li>
                <li><a href="${pageContext.request.contextPath}/login">加入我们</a></li>
            </ul>
        </div>


        <div class="am_footer_don">
            <span>
                <img src="${pageContext.request.contextPath}/statics/img/logo.png" style="width: 100px;height: 50px" alt="">
            </span>
            <dl>
                <%--<dt><img src="${pageContext.request.contextPath}/statics/img/logo.png" alt=""></dt>--%>
                <dd>一起加入爱宠乐吧！帮助你对宠物的知识了解的更多，萌宠资讯看不完！</dd>
                    <!-- <a href="###" class="footdon_pg ">
                         <div class="foot_d_pg am-icon-apple "> App store</div>
                     </a> -->
            </dl>
        </div>

        <div class="am_footer_erweima">
            <div class="am_footer_weixin"><img src="${pageContext.request.contextPath}/statics/img/weChart.jpg" alt="">

                <div class="am_footer_d_gzwx am-icon-weixin"> 添加微信</div>
            </div>
            <div class="am_footer_ddon"><img src="${pageContext.request.contextPath}/statics/img/qq.jpg" alt="">

                <div class="am_footer_d_dxz am-icon-qq"> QQ留言</div>
            </div>
        </div>

    </div>
    <div class="am_info_line">备案号：<span></span><a href="http://beian.miit.gov.cn" class="keep-on-record" >粤ICP备20005925号</a></div>
</footer>
<script src="${pageContext.request.contextPath}/statics/js/openModule/petshow.js"></script>
</body>

</html>
