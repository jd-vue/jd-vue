<template>
<div class="box">
  <div v-if="login">
    <div class="loginuser">
      <span class="area"><i class="headcountext">+863243432</i><img src=../../assets/image/down.png class="down"/></span>
      <input type="text" placeholder="请输入手机号" class="mobile" oninput = "value=value.replace(/[^\d]/g,'')"/>
    </div>
      <div class="sildbtn">
        <span class="sildcircle">
          <img src=../../assets/image/righticon.png class="btncir">
          <button class="sild">拖动滑块向右滑动</button>
        </span>
      </div>
      <div class="question">遇到问题？您可以<a style="color:#00BBFF">联系客服</a></div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.box {
   width:100%;
   height:100%;
   background-color:#fff;
   position: absolute;
   padding:180px 40px 200px 40px;
 }
  .mobile {
   width:654px;
   line-height: 100px;
   font-size:32px;
   letter-spacing: 1px;
 }
  .loginuser {
   display:flex;
   flex-direction:row;
   border-bottom:1px solid #b0b0b0;
   font-size:32px;
   letter-spacing: 1px;
 }
  .area {
   position:relative;
   top:25px
 }
  .down {
   width:25px;
   height:25px;
   margin:12px 25px 0px 18px
 }
  .sild {
   background-color:#F8F8FF;
   height:100px;
   width:600px;
   border-radius:42px 42px 42px 42px;
   letter-spacing: 10px;
   font-size: 30px;
   color:#A9A9A9;
 }
  .sildbtn {
   margin-top:110px;
   margin-left:30px
 }
  .btncir {
   width:100px;
   height:100px;
   position: absolute;
   border-radius: 50%
 }
  .sildcircle {
   position: relative;
 }
  .question {
   margin-top:50px;
   line-height:20px;
   font-size:30px;
   color:#A9A9A9;
   margin-left: 40px
 }

</style>
