<template>
    <div>
        <!--搜索框-->
       
        <img class="img1" src="../assets/logo.png" width="20px">
        <form action="/" class="aaa">
            <van-search v-model="value" show-action="" placeholder="请输入搜索商品名称"
            />
        </form>
        <!-- 轮播图 -->
        <div class="nav">
                <div class="li1">
                    
                    <li>推荐</li>
                    <li>
                       笔记本   
                           
                    </li>                       
                    <li>
                       鼠标键盘   
                            
                    </li>                       
                    <li>
                       生活周边                              
                    </li>                    
                    <li>
                       新品                             
                        </li>                        
                        <li>
                            RE版专区                          
                        </li>  
                </div>
            </div>
        
        <div class="lun"> 
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item><img src="../assets/20200121104245635.jpg" alt="" width="350px" reight="250px"></van-swipe-item> 
            <van-swipe-item ><img src="../assets/20200121104245635.jpg" alt="" width="350px"></van-swipe-item> 
        </van-swipe>
        </div>
        <div class="server">
        <ul>
            <li>
                <img src="../assets/serve1.png" width="20px" height="20px" margin:>
                <span class="span1">官方正品</span>
            </li>
            <li>
                <img src="../assets/serve2.png" width="20px" height="20px" margin-top:10px>
                <span class="span1">全场包邮</span>
            </li>
            <li>
                <img src="../assets/serve3.png" width="20px" height="20px">
                <span> 7天无理由</span>
            </li>
            <li>
                <img src="../assets/serve4.png" width="20px" height="20px">
                <span class="span1">个性定制</span>
            </li>
        </ul>
    </div>
    <div class="indexPart1">
        <ul>
            
            <li>
                <a href="https://www.maibenben.cn/m/category.aspx">
                    <div class="ico"><img src="../assets/20181102110739381.png" alt=""></div>
                    <div class="name">全部分类</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/integral/Product.html">
                    <div class="ico"><img src="../assets/2019041004507633.jpg" alt=""></div>
                    <div class="name">积分兑换</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/test/product.aspx">
                    <div class="ico"><img src="../assets/20181102110827579.png" alt=""></div>
                    <div class="name">免费试用</div>
                </a>
            </li>
            
            <li>
                <a href="http://q.url.cn/abSY43?_type=wpa&amp;qidian=true">
                    <div class="ico"><img src="../assets/20181102110848714.png" alt=""></div>
                    <div class="name">在线客服</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/familylocation.aspx">
                    <div class="ico"><img src="../assets/20181102110939303.png" alt=""></div>
                    <div class="name">售后网点</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/download.aspx">
                    <div class="ico"><img src="../assets/2018110211104119.png" alt=""></div>
                    <div class="name">驱动下载</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/ServiceZW.aspx">
                    <div class="ico"><img src="../assets/20181102111026332.png" alt=""></div>
                    <div class="name">正品查询</div>
                </a>
            </li>
            
            <li>
                <a href="https://www.maibenben.cn/m/about/about.aspx">
                    <div class="ico"><img src="../assets/20181102111048327.png" alt=""></div>
                    <div class="name">品牌介绍</div>
                </a>
            </li>
            
        </ul>
        <div class="clear_f"></div>
    </div>
    <div class="indexFloor">
        <div class="title">
            
            笔记本-明星单品
        </div>
        
        <div class="bigImg"><a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000040498796"><img src="../assets/20190227080349748.jpg" alt=""></a></div>
        
        <div class="list">
            <ul>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000040498796">
                            <div class="imgDiv">
                                <img src="../assets/20190223071523825.jpg" alt="">
                                
                            </div>
                            <div class="name"> 小麦6A</div>
                            <div class="msg">八代四核处理器 / MX250 2G独显 / 金属机身 / 窄边框全面屏 / 全新快充技术 / 轻1.64KG 薄16.9mm</div>
                            <div class="price">
                                <em>¥2499 起</em>
                                <del>¥2999</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000144757533">
                            <div class="imgDiv">
                                <img src="../assets/20190103101354644.jpg" alt="">
                                <div class="label">今日秒杀</div>
                            </div>
                            <div class="name"> 金麦6A RE版</div>
                            <div class="msg">英特尔处理器 / 72色域广视角屏 / 铝镁合金机身</div>
                            <div class="price">
                                <em>¥1599 起</em>
                                <del>¥1999</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000045664995">
                            <div class="imgDiv">
                                <img src="../assets/20190223071852566.jpg" alt="">
                                
                            </div>
                            <div class="name">小麦6S-2</div>
                            <div class="msg">八代增强版i5处理器 / 满血版MX150独显 / 窄边框全面屏 / 指纹解锁 / 全新快充技术</div>
                            <div class="price">
                                <em>¥4199 起</em>
                                <del>¥5999</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000023919186">
                            <div class="imgDiv">
                                <img src="../assets/2019022307175278.jpg" alt="">
                                
                            </div>
                            <div class="name"> 小麦5</div>
                            <div class="msg">英特尔七代处理器 / GeForce 940MX独显 / 170°广视角ADS屏 / 铝镁合金机身 / 持久续航</div>
                            <div class="price">
                                <em>¥2599 起</em>
                                
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000019745912">
                            <div class="imgDiv">
                                <img src="../assets/20181228033748047.jpg" alt="">
                                
                            </div>
                            <div class="name"> 大麦6S</div>
                            <div class="msg">八代酷睿强芯四核处理器 / GTX1050 4G独显 / 金属喷砂机身 / ADS广视角屏 / PCIE高速传输</div>
                            <div class="price">
                                <em>¥4499 起</em>
                                
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000017641118">
                            <div class="imgDiv">
                                <img src="../assets/20181212014650915.jpg" alt="">
                                
                            </div>
                            <div class="name"> 大麦6</div>
                            <div class="msg">八代酷睿强芯处理器 / GTX1050 4G独显 / ADS广视角屏 / 铝镁合金机身 / 白色背光键盘</div>
                            <div class="price">
                                <em>¥3799 起</em>
                                <del>¥4999</del>
                            </div>
                        </a>
                    </div>
                </li>
                
              
            </ul>
        </div>
        <div class="moreBtn"><a href="https://www.maibenben.cn/m/category.aspx?cid=100000006428282">查看更多&gt;</a></div>

        


    </div>
    
    <div class="indexFloor">
        <div class="title">
            
            配件-炫酷配件
        </div>
        
        <div class="bigImg"><a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000051983411"><img src="../assets/20190530032140217.jpg" alt=""></a></div>
        
        <div class="list">
            <ul>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000009983716">
                            <div class="imgDiv">
                                <img src="../assets/2019022307440593.jpg" alt="">
                                
                            </div>
                            <div class="name">紫麦 61键机械键盘</div>
                            <div class="msg">  61键布局 / 机械青轴 / 双色背光可选 / 5000万次敲击寿命 / 小巧便携</div>
                            <div class="price">
                                <em>¥139 起</em>
                                
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000118687642">
                            <div class="imgDiv">
                                <img src="../assets/20190418105351130.jpg" alt="">
                                
                            </div>
                            <div class="name"> WMK02无线键鼠套装</div>
                            <div class="msg">  双色可选 / 即插即用 / 鼠标1600DPI / 持久续航 / 小巧95键布局</div>
                            <div class="price">
                                <em>¥99 起</em>
                                <del>¥199</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000137539133">
                            <div class="imgDiv">
                                <img src="../assets/20190624024341834.jpg" alt="">
                                
                            </div>
                            <div class="name">  ESD01-J1电动螺丝刀套装</div>
                            <div class="msg">全铝一体设计 / 双动力混合技术 / 持久续航 / 150RPM高转速 / 国际标准批头 / 配备20支经典批头</div>
                            <div class="price">
                                <em>¥119 起</em>
                                <del>¥169</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000136875443">
                            <div class="imgDiv">
                                <img src="../assets/2019062402307091.jpg" alt="">
                                
                            </div>
                            <div class="name">紫麦 FD02-J1三合一U盘-64G</div>
                            <div class="msg">手机&amp;电脑两用 /  USB3.0高速传输 / 即插即用 / 全金属外壳 / 360°旋转 / 支持个性定制</div>
                            <div class="price">
                                <em>¥99.9 起</em>
                                <del>¥139</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000123585156">
                            <div class="imgDiv">
                                <img src="../assets/2019052301268147.jpg" alt="">
                                
                            </div>
                            <div class="name">紫麦  DF01桌面小风扇</div>
                            <div class="msg">持久续航 / 90°风向调整 / 3档风力调节 / 静音舒适</div>
                            <div class="price">
                                <em>¥49.9 起</em>
                                <del>¥99</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000135455147">
                            <div class="imgDiv">
                                <img src="../assets/20190620101223395.jpg" alt="">
                                
                            </div>
                            <div class="name"> WNC01无线网卡</div>
                            <div class="msg"> 免装驱动 即插即用 / 150M无损传输轻松穿墙 / 稳定wifi共享 / windows系统多向兼容</div>
                            <div class="price">
                                <em>¥34.9 起</em>
                                <del>¥69</del>
                            </div>
                        </a>
                    </div>
                </li>
                
              
            </ul>
        </div>
        <div class="moreBtn"><a href="https://www.maibenben.cn/m/category.aspx?cid=100000008538739">查看更多&gt;</a></div>

        


    </div>
    
    <div class="indexFloor">
        <div class="title">
            
            搭配-精选搭配
        </div>
        
        <div class="bigImg"><a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000001583578"><img src="../assets/20190223080013562.jpg" alt=""></a></div>
        
        <div class="list">
            <ul>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000138978925">
                            <div class="imgDiv">
                                <img src="../assets/20191115054443171.jpg" alt="">
                                
                            </div>
                            <div class="name"> 大麦E527</div>
                            <div class="msg">15.6英寸ADS屏  / 四核八线程处理器 /  ADS广视角屏 </div>
                            <div class="price">
                                <em>¥3499 起</em>
                                
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000001583578">
                            <div class="imgDiv">
                                <img src="../assets/2019022307427899.jpg" alt="">
                                
                            </div>
                            <div class="name"> 手提电脑包</div>
                            <div class="msg"> 五色可选 / 进口聚酯纤维 / 防水抗震 / 双层大空间 / 可手提/斜跨</div>
                            <div class="price">
                                <em>¥54.9 起</em>
                                
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000131967363">
                            <div class="imgDiv">
                                <img src="../assets/20190618050234211.jpg" alt="">
                                
                            </div>
                            <div class="name">紫麦 JM6内胆包</div>
                            <div class="msg">适用13.3英寸笔记本 / 纤薄便携 / 双层容量 / 柔软内里 / 防尘防摔放刮</div>
                            <div class="price">
                                <em>¥69 起</em>
                                <del>¥99</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000119376562">
                            <div class="imgDiv">
                                <img src="../assets/20190514042614976.jpg" alt="">
                                
                            </div>
                            <div class="name">紫麦 TWS无线蓝牙耳机</div>
                            <div class="msg">自动配对 / 自动充电 / HiFi高清立体声 / 4小时长久续航 / IPX4级防水</div>
                            <div class="price">
                                <em>¥159.9 起</em>
                                <del>¥399</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000116583952">
                            <div class="imgDiv">
                                <img src="../assets/20190223075149861.jpg" alt="">
                                
                            </div>
                            <div class="name"> UH01转换器</div>
                            <div class="msg"> 高速传输 / 即插即用 / USB 4分口 / 全向兼容 / 小巧便携</div>
                            <div class="price">
                                <em>¥37 起</em>
                                <del>¥99</del>
                            </div>
                        </a>
                    </div>
                </li>
                
                <li>
                    <div class="box">
                        <a href="https://www.maibenben.cn/m/productshow.aspx?pid=100000117921275">
                            <div class="imgDiv">
                                <img src="../assets/20190628032321535.jpg" alt="">
                                
                            </div>
                            <div class="name"> 迪麦蓝牙音箱</div>
                            <div class="msg">360°环绕立体声 / 二分频单元喇叭 / 长久播放 / 精雕细琢 / 金属机身 / 蓝牙全向兼容</div>
                            <div class="price">
                                <em>¥898 起</em>
                                <del>¥1699</del>
                            </div>
                        </a>
                    </div>
                </li>
                
              
            </ul>
        </div>
        <div class="moreBtn"><a href="https://www.maibenben.cn/m/category.aspx?cid=100000010633931">查看更多&gt;</a></div>

        


    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:""
        }
    },
    methods:{
        onSearch(){},
        onCancel(){}
    }
}
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.img1{
    margin-top: 15px;
    margin-left: 10px;
    float:left;
}
.img2{
    margin-top: 15px;
    margin-left: 10px;
    
}
.li1 li{list-style-position:outside; list-style-type:none; float: left; margin-right: 10px; font-size: 12px;}
 .server li{list-style-position:outside; list-style-type:none; float: left; margin-right: 7px; font-size: 12px;}
.nav{ height: 36px;  padding: 0 10px; position: relative;}
.lun{margin-top: 10px}
.server{
    background: #f6f6f6;
    overflow: hidden;
    margin-top: 10px
    }
.server li img{width:20px;
    margin-top: 10px;
    text-align: center;
    
}

.server li span{
    width: 25%;
	text-align: center;
}
.indexPart1{ padding: 25px 15px 5px; border-bottom: #f6f6f6 solid 2px; margin-top:10px}
.indexPart1 li{ float: left; width: 25%; text-align: center; margin-bottom: 20px; }
.indexPart1 li a{ display: block; width: 100%; height: 100%; }
.indexPart1 li .ico img{ width: 45px; }
.indexPart1 li .name{ padding-top: 10px; font-size: 13px; color: #aaaaaa; }
.indexFloor{ background: #f6f6f6; padding-bottom: 10px; }
.indexFloor2{ padding-bottom: 20px; }
.indexFloor3{ padding-bottom: 0px; }
.indexFloor .title{ height: 45px; background: #fff; line-height: 45px; padding-left: 15px; color: #5b5b5b; font-size: 16px; font-weight: bold; }
.indexFloor .bigImg{ margin-bottom: 2px; }
.indexFloor .bigImg img{ width: 100%; }
.indexFloor .list{ overflow: hidden; background: #fff;}
.indexFloor .list ul{ margin-right: -2px; }
.indexFloor .list li{ width: 50%; float: left; padding-bottom: 8px;}
.indexFloor .list li a{ display: block; width: 100%; height: 100%; }
.indexFloor .list li .box{ margin-right: 2px; }
.indexFloor .list li .imgDiv{ position: relative;text-align:center; }
.indexFloor .list li .imgDiv img{ height:165px; }
.indexFloor .list li .label{ position: absolute; left: 0px; top: 0px; width: 80px; height: 22px; line-height: 22px; text-align: center; color: #fff; font-size: 12px; background: #fb5b52;}
.indexFloor .list li .name{ padding: 12px 8px 0; height: 20px; line-height: 20px; overflow: hidden; font-size: 14px; color: #333; }
.indexFloor .list li .msg{ color: #b0b0b0; padding: 0 8px; height: 20px; line-height: 20px; overflow: hidden; }
.indexFloor .list li .price{ padding: 0 8px; height: 20px; line-height: 20px; color: #b0b0b0;}
.indexFloor .list li .price em{ font-size: 13px; color: #ff6709; padding-right: 6px; }
.indexFloor .moreBtn{ padding-top: 10px; }
.indexFloor .moreBtn a{ display: block; width: 100%; height: 45px; background: #fff; text-align: center; line-height: 45px; font-size: 15px; }
</style>