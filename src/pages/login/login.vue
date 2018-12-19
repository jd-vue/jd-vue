<template>
<div class="box">
  <div class="header" v-if="!loginmethod">
   <div class="headlogo">
    <img src="../../assets/image/jdlogo.jpg" class="logo"/>
   </div>
   <form class="login_txt">
    <div class="headcoun">
      <i class="headcountext">国家/地区</i><input type="text" class="mobile"><span class="headcountry">中国中国中国(+86)</span><i class="headbig"> > </i>
      <input type="text" placeholder="请输入手机号" class="mobile" oninput = "value=value.replace(/[^\d]/g,'')"/>
    </div>
    <div class="btn">
    <button class="receiveBtn">获取验证码</button>
    </div>
    </form>
    <div class="headerli">
      <span>账号密码登录</span>
      <span>新用户注册</span>
    </div>
  </div>
  <div class="header" v-if="loginmethod">
   <div class="headlogo">
    <img src="../../assets/image/jdlogo.jpg" class="logo"/>
   </div>
   <form class="login_txt">
    <div class="headcoun">
      <input type="text" placeholder="用户名/邮箱/手机号" class="mobile"/>
    </div>
    <div class="headcoun">
      <input type="text" placeholder="请输入密码" class="mobile"/>
      <div class="passright">
       <img src="../../assets/image/eye.png" class="eye" v-if ="open"/>
       <img src="../../assets/image/closeeye.png" class="eye" v-if ="!open"/><i class="line"> | </i><span class="forgetword">忘记密码</span>
    </div>
    </div>
    <div class="btn">
    <button class="receiveBtn">登录</button>
    </div>
    </form>
    <div class="headerli">
      <span>短信验证码登录</span>
      <span @click="newUser">新用户注册</span>
    </div>
  </div>
  <div class="footer">
    <div class="othertext">其他登录方式</div>
    <div class="othlogin">
     <div class="otherlogin">
      <span class="icon"><img class="weixin" src="../../assets/image/weixin.png" style="background-color:#98FB98"></span>
      <span class="qqtext">微信登录</span>
     </div>
      <div class="otherlogin">
      <span class="icon"><img class="qq" src="../../assets/image/qq.png" style="background-color:#B0E0E6"></span>
      <span class="qqtext">QQ登录</span>
     </div>
    </div>
    <div class="footertext">登录即代表您已同意<span style="color:#00BBFF">《京东隐私政策》</span></div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      loginmethod: true,
      open: true
    }
  },
  methods: {
    newUser () {
      this.$router.push('/loginNewUser')
    }
  }
}
</script>
<style scoped lang="scss">
 .box {
   width:100%;
   height:100%;
   background-color:#fff;
   position: absolute;
   padding:100px 40px 200px 40px;
 }
 .header {
   display:flex;
   flex-direction:column;
 }
 .headlogo {
   display:flex;
   width:100%;
   justify-content: center;
 }
 .login_txt {
   display: flex;
   align-items: center;
   flex-direction: column;
   position: relative;
   margin-top: 50px;
 }
 .headcountext {
   position: absolute;
   top: 25px;
 }
 .headcoun {
   font-size:30px;
   letter-spacing: 1px;
   display:flex;
   flex-direction:row
 }
 .mobile {
   border-bottom:1px solid #b0b0b0;
   width:654px;
   line-height: 100px;
   font-size:27px;
   letter-spacing: 1px;
 }
 .headcountry {
   position: absolute;
   right: 60px;
   top: 25px;
 }
 .logo {
   width:200px;
   height:200px;
 }
 .btn {
   margin-top:80px
 }
 .headbig{
   position: absolute;
   right: 20px;
   top: 25px;
 }
 .receiveBtn {
   height:100px;
   width:600px;
   color:white;
   border-radius:42px 42px 42px 42px;
   //background:linear-gradient(to right,rgba(225,52,9),rgba(241,2,1));
   background:linear-gradient(to right,#FF7F50,#FFA07A);
   letter-spacing: 10px;
   font-size: 34px;
 }
 .headerli{
   display:flex;
   flex-direction:row;
   justify-content: space-between;
   margin-top:40px;
   padding-right: 8px;
   padding-left: 13px;
   font-size:30px;
   letter-spacing: 1px;
 }
 .icon {
   width:100px;
   height:100px;
   border-radius:100px;
 }
 .weixin {
   width:70px;
   height:70px;
 }
 .qq {
   width:70px;
   height:70px;
 }
 .otherlogin {
    display: flex;
    flex-direction: column;
    padding-right:200px;
    vertical-align: middle;
    text-align: center;
    justify-content: center;
    align-items: Center;
 }
 .othlogin {
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   padding-right:30px;
   padding-left:110px;
   position: fixed;
   bottom: 100px;
 }
 .qqtext {
   width:130px;
   font-size:30px;
   letter-spacing: 1px;
   color:#b0b0b0;
 }
 .othertext {
   font-size:30px;
   position:fixed;
   bottom:300px;
   color:#b0b0b0;
   padding: 0 30px 0;
   margin: 20px 0;
   line-height: 1px;
   border-left: 220px solid #ddd;
   border-right: 220px solid #ddd;
   text-align: center;
 }
 .footertext{
   font-size:30px;
   position:fixed;
   bottom:25px;
   text-align: center;
   vertical-align:middle;
   width:700px;
   line-height:35px;
   color:#b0b0b0;
 }
 .eye {
   width:50px;
   height:50px;
   position:absolute;
   right:200px;
 }
 .forgetword {
   position:absolute;
   right:20px
 }
 .passright {
  margin-top:30px
 }
 .line {
   color:#b0b0b0;
   position:absolute;
   right:160px
 }
</style>
