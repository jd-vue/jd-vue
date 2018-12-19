<template>
<div class="box">
  <div class="boxlogin">
   <input type="text" placeholder="请输入手机号" class="loginmobile" oninput = "value=value.replace(/[^\d]/g,'')"/><i @click="empty" v-if="this.showClose" class="icon-close2 ic-close"></i>
   <span class="logincode"><input type="text" placeholder="请输入验证码" class="loginmobile" style="width:200px;margin-right:10px"/><i @click="empty" v-if="this.showClose" class="icon-close2 ic-close"></i><button class="enter">发送验证码</button></span>
   <input type="text" placeholder="请输入用户名" class="loginmobile"/><i @click="empty" v-if="this.showClose" class="icon-close2 ic-close"></i>
   <span class="loginpass"><input type="password" placeholder="请设置密码(6-20位)" class="loginmobile"/><i @click="empty" v-if="this.showClose" class="icon-close2 ic-close"></i><img class="eye" src=../../assets/image/eye.png /></span>
   <button class="loginmobile loginbtn">下一步</button>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      showClose: false
    }
  },
  methods: {
    empty () {
      this.txt = ''
    }
  }
}
</script>
<style scoped lang="scss">
.box {
   width:100%;
   height:100%;
   position: absolute;
   padding:60px 40px 200px 40px;
 }
.loginmobile {
   width:670px;
   height:90px;
   background-color: #fff;
   border-color: #A9A9A9;
   line-height: 90px;
   padding-left:30px;
   font-size:30px;
   letter-spacing: 1px;
   margin-bottom: 30px;
 }
 .enter {
   background-color:rgb(238,238,238);
   font-size:30px;
   letter-spacing: 6px;
   width:250px;
   height:90px
 }
 .logincode {
  display:flex;
  flex-direction: row
 }
 .loginpass {
  display:block
 }
 .eye {
  width:55px;
  height:55px;
  position:absolute;
  right:60px;
  margin-top:25px
 }
 .loginbtn {
  background-color:rgb(238,238,238);
  color:rgb(218,218,218);
  font-size:34px;
  letter-spacing:10px;
  margin-top:30px
 }
</style>
