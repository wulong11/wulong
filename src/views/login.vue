<template>
       <div class="ringup">
	    <div class="ringup1">
		    <div class="img">
			    <img src="../assets/logo.png"/>
			    <div class="span">麦本本账号登录</div>
		    </div>
	    </div>
	    <div class="ringup2">
		    <ul>
			    <li>
				    <input type="text" placeholder="邮箱/手机号码" id="txtuser"/>
			    </li>
			    <li>
				    <input type="password" placeholder="密码" id="txtpwd"/>
			    </li>
		    </ul>
	    </div>
	    <div class="ringup2_btn">
		    <a class="ringup_login" href="http://localhost:8080/index" onclick="login()">登录</a>
		    <a class="login" href="mLogin.aspx">手机短信登录</a>
	    </div>
	    <div class="id_ringup">
		    <a href="/m/member/reg.aspx">账号注册</a><em>|</em><a href="/m/member/forgetPassword.aspx">忘记密码？</a>
	    </div>
        <div class="id_ringup" style="padding: 0 4%;margin-bottom:60px;">
            <div style="display: block;" class="other_login_type sns-login-container" id="custom_display_16">
                <fieldset class="oth_type_tit">
                    <legend align="center" class="oth_type_txt">其他方式登录</legend>
                </fieldset>
                <div class="oth_type_links">
                    <a href="/api/oauth/qq"><img src="../assets/qq.png" /></a>
                    
                </div>
            </div>
        </div>
	
    </div>

    <!---->
</template>

    <script type="text/javascript">
        function login() {
            if (document.getElementById("txtuser").value == "" || document.getElementById("txtuser").value == "邮箱/手机号码") {
                Salert("", "请输入登录名");
                document.getElementById("txtuser").focus();
                return;
            }
            else if (document.getElementById("txtpwd").value == "" || document.getElementById("txtuser").value == "密码") {
                Salert("", "请输入密码");
                document.getElementById("txtpwd").focus();
                return;
            }


            $.ajax({
                type: "post",
                url: "/Ajax/Member.ashx?action=login&randroom=" + Math.random(),
                data: {
                    "user": document.getElementById("txtuser").value,
                    "pwd": document.getElementById("txtpwd").value
                },
                dataType: "JSON",
                success: function (datac) {
                    if (datac.status == "0") {
                        Salert("", datac.info);
                    }
                    else if (datac.status == "1") {
                        //location.href = datac.url;
                        //Salert("", "登录成功");
                        location.href = localStorage.getItem("return_url")==null?"/m/member/index.aspx": localStorage.getItem("return_url");
                    }
                },
                error: function () {
                    Salert("","ERROR");
                }
            });
        }
    </script>

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
    .ringup1{ height: 180px; display: flex; justify-content: center; flex-direction: column; }
.ringup1 .img{ margin: 0 auto;}
.ringup1 .img img{ margin: 0 auto; display: block; }
.ringup1 .span{ font-size: 18px; color: #000000; margin-top: 15px; }
.ringup2{ padding: 0 4%; }
.ringup2 li{ border-bottom: 1px solid #d9d9d9; position: relative;  }
.ringup2 li input{ line-height: 40px; font-size: 16px; width: 90%; margin-left: 10px}
.ringup2 li a{ font-size: 14px; float: right; position: absolute; right: 0; top: 0; line-height: 56px; color: #5aa0c9; }
.ringup2 li input::-moz-placeholder{ color: #959595; }
.ringup2 li input::-ms-input-placeholder{ color: #959595; }
.ringup2 li input::-webkit-input-placeholder{ color: #959595; }
.ringup2_btn{ padding: 12px 4% 0; }
.ringup2_btn a{ display: block; line-height: 46px; border: 1px solid #c2c2c2; border-radius: 8px; text-align: center; margin-top: 24px; font-size: 16px; }
.ringup2_btn .ringup_login{ background: #b87ffd; border-color: #b87ffd; color: #FFFFFF; }
.ringup2_btn .login{ color: #000000; }
.ringup3{ text-align: center; margin-top: 68px; }
.ringup3 .forget_in{ font-size: 13px; color: #606060; }
.id_ringup{ text-align: center; font-size: 13px; margin-top: 20px; }
.id_ringup em{ margin: 0 10px; color: #606060; }
.id_ringup a{ color: #606060; }
.oth_type_links{display: flex;justify-content: center;}
.oth_type_links a{width:50px;text-align:center;}
.oth_type_txt {
    font-size: 14px;
    color: #b0b0b0;
    margin: 0 auto;
    text-align: center;
    width: 100% \9;
}
</style>