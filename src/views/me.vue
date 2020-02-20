<template>
  <div class="com_bg">
            <div class="myweb_h">
                
                <div class="myweb_hbox">
                    <a class="via" href="javascript:;"><img src="../assets/nimg92_1.png"/></a>
                    <a class="enter" href="http://localhost:8080/login">登录</a>/<a class="logIn" href="Reg.aspx">注册</a>
                </div>
                
            
            </div>

            <div class="myweb">
                <div class="content">
                    <div class="myweb1"><span>我的订单</span><a href="/m/member/myorder.aspx">全部订单</a></div>
                    <div class="myweb2">
                        <ul>
                            <li>
                                <a href="/m/member/myorder.aspx?type=1">
                                    <div class="img"><img src="../assets/my1.png"/></div>		
                                    <div class="p">待付款</div>
                                </a>
                            </li>
                            <li>
                                <a href="/m/member/myorder.aspx?type=2">
                                    <div class="img"><img src="../assets/my2.png"/></div>		
                                    <div class="p">待收货</div>
                                </a>
                            </li>
                            <li>
                                <a href="/m/member/myrefund.aspx">
                                    <div class="img"><img src="../assets/my3.png"/></div>		
                                    <div class="p">退换货</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
        </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onSearch() {
      
    },
    onCancel() {
      
    }
  }
}
</script>
<style>
    .com_bg{ background: #f5f5f5; height: 100%; }
.myweb_h{background-size: 100%; }
.myweb_hbox{ padding: 4% 6%; font-size: 16px; background:red} 
.myweb_hbox img{ width: 46px;border-radius:50%; }
.myweb_hbox .via{ margin-right: 8px; }
.myweb_hbox .enter{ color: #FFFFFF; }
.myweb_hbox .logIn{ color: #FFFFFF; }
.myweb_hbox .enter span{ font-size:14px; }
.myweb_hbox a{color:#fff;}
.myweb1{ padding: 0 3%; overflow: hidden; line-height: 40px; border-bottom: 1px solid #d9d9d9; background: #FFFFFF; }
.myweb1 span{ display: block; float: left; font-size:15px; margin-left: 10px}
.myweb1 a{ display: block; width: 100px; float: right; background-size: 5px;}

.myweb2 ul{ overflow: hidden; }
.myweb2 li{ float: left; width: 33.33%; background: #fff; padding: 12px 0 16px; }
.myweb2 a{ display: block; }
.myweb2 .img{ width:100%; height: 40px; display: flex; flex-direction: column; justify-content: flex-end; margin-bottom: 10px; }
.myweb2 .img img{ display: block; width: 26px; margin: 0 auto; }
.myweb2 .p{ text-align: center; font-size: 12px; color: #000; }

.myweb3{ margin-top: 12px; background: #FFFFFF; }
.myweb3 ul{ padding: 0px 3%; }
.myweb3 li{ line-height: 50px; font-size: 13px; }
.myweb3 li a{ display: block; overflow: hidden; position: relative; }
.myweb3 .img{ float: left; position: absolute; left: 0; top: 0;  }
.myweb3 .img img{ width: 26px;}
.myweb3 .span{ float:left; width: 88%;margin-left: 12%; border-bottom: 1px solid #d9d9d9; color: #000000;}
.myweb3 li:last-of-type .span{ border-bottom: none; }
</style>