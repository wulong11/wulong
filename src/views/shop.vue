<template>
    <div class="cart">
       <div class="service_h">
		    <a href="javascript:;" class="return" onclick="javascript:history.go(-1)"><img src="../assets/nimg20_1.png"/></a>
		    购物车
		    <a href="/m/search.aspx" class="seek"><img src="../assets/nimg38_1.png" alt="" /></a>
	    </div>
    <div class="cart1">
		    <div class="p">登录后享受更多优惠<a href="http://localhost:8080/login">去登录</a></div>
	    </div>
	    <div class="cart3">
		    <div class="h2">猜你喜欢</div>
		    <ul>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000013454352">
					    <div class="img">
						    <img src="../assets/20190321112552433.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">麦本本双面电脑桌垫</div>
						    <div class="span">¥<em>39</em> 起  </div>
					    </div>
					    <div class="float"></div>
				    </a>
			    </li>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000124253271">
					    <div class="img">
						    <img src="../assets/20190527033732378.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">麦本本 黑麦7 RE版</div>
						    <div class="span">¥<em>4799</em> 起 <s>¥5999</s>  </div>
					    </div>
					    <div class="float"></div>
				    </a>
			    </li>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000102675989">
					    <div class="img">
						    <img src="../assets/20190410102947903.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">紫麦 BS-T3入耳式耳机</div>
						    <div class="span">¥<em>69</em> 起 <s>¥129</s>  </div>
					    </div>
					    <div class="float"></div>
				    </a>
			    </li>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000121465722">
					    <div class="img">
						    <img src="../assets/2019051407446863.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">麦本本 WM05星点鼠标</div>
						    <div class="span">¥<em>39</em> 起 <s>¥99</s>  </div>
					    </div>
					    <div class="float"></div>
				    </a>
			    </li>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000000195963">
					    <div class="img">
						    <img src="../assets/20181211090740393.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">麦本本 冰刃散热器</div>
						   
						    <div class="span">¥<em>69.9</em> 起  </div>
					    </div>
					    <div class="float">71折</div>
				    </a>
			    </li>
                
                <li>
				    <a href="/m/productshow.aspx?pid=100000136875443">
					    <div class="img">
						    <img src="../assets/2019062402307091.jpg"/>
					    </div>
					    <div class="text">
						    <div class="h6">紫麦 FD02-J1三合一U盘-64G</div>
						    
						    <div class="span">¥<em>99.9</em> 起 <s>¥139</s>  </div>
					    </div>
					    <div class="float"></div>
				    </a>
			    </li>
                
		    </ul>
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
.service_h{ margin: 0 3%; text-align: center; position: relative; line-height: 50px; font-size: 16px; color: #373737; }
.service_h .return{ position: absolute;left: 0; top: 0; display: block; }
.service_h .return img{ width: 11px; }
.service_h .seek{ position: absolute;right: 0; top: 0; }
.service_h .seek img{ width: 22px; }
.cart1{ line-height: 46px; padding: 0 3%; background: #FFFFFF;}
.cart1 .p{ border-bottom: 1px solid #f4f4f4; font-size: 13px; color: #000; overflow: hidden; }
.cart1 .p a{ line-height: 46px; display: block; width: 56px; background:#fff; background-size: 8px; color: #7a7a7a; float: right;}
.cart3{ background: #FFFFFF; padding-bottom: 100px;}
.cart3 .h2{ font-size: 16px; line-height: 50px; text-align: center; color: #232323; padding-bottom:2px; }
.cart3 ul{ overflow: hidden; }
.cart3 li{ width: calc(50% - 2px);  }
.cart3 li a{ display: block; position: relative; }
.cart3 li .img img{ width: 100%; }
.cart3 li .text{ padding:  3% 3%; }
.cart3 li .h6{ font-size: 14px; color: #232323; margin: 4px 0 2px;overflow: hidden;text-overflow:ellipsis; white-space: nowrap; }
.cart3 li .p{ color: #b0b0b0; margin-bottom: 2px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height:16px;}
.cart3 li .span{ color: #ff6709; }
.cart3 li .span em{ font-size: 16px; }
.cart3 li .span s{ color: #b0b0b0; }
.cart3 li:nth-child(2n+1){ float: left; }
.cart3 li:nth-child(2n+0){ float: right; } 
.cart3 li .float{ position: absolute; left: 0; top: 0; width: 94px; line-height: 22px; background: #fb5b52; color: #FFFFFF; text-align: center; }
.cart{ background: #F5F5F5; overflow: hidden; }
</style>