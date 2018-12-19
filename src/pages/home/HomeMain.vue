<template>
  <div class="home_m">
    <main class="m_product">
      <div class="left_share_quality_content clearfix">
        <div class="share_quality">
          <div class="share_quality_top">
            <div class="share_title">
              <p class="share_text">为你推荐</p>
            </div>
          </div>
          <div class="similar-product">
            <div class="similar-posre">
              <div class="similar-posre">
                <img
                  onerror="__reloadResource(this)"
                  src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t24724/74/200075211/133230/16ad6735/5b6913d0N2ad8d797.jpg!q70.dpg"
                  class="j_rec_goods_pic opa1 ll_fadeIn"
                  loaded="1"
                  style="width: 205px; height: 205px; opacity: 1;"
                >
              </div>
              <span class="similar-product-text">京东专营Midea美的多功能电烤箱家用烘焙小烤箱控温迷你蛋糕汇总 小熊 粉色DKX-A09A1</span>
              <p class="similar-product-info">
                <span class="similar-product-price">¥&nbsp;
                  <span class="big-price">199</span>
                </span>
                <span
                  data-event_id="MHomeGuessYouLike_BSimilarities"
                  data-event_level="1"
                  data-event_param="1_34542140562_1"
                  class="guess-button j_see_similar"
                  jump-href="//home.m.jd.com/myjd/similar/list.action?skuId=34542140562"
                >看相似</span>
              </p>
              <p class="similar-product-info"></p>
            </div>
            <div class="similar-posre">
              <div class="similar-posre">
                <img
                  onerror="__reloadResource(this)"
                  src="//img12.360buyimg.com/mobilecms/s372x372_jfs/t24724/74/200075211/133230/16ad6735/5b6913d0N2ad8d797.jpg!q70.dpg"
                  class="j_rec_goods_pic opa1 ll_fadeIn"
                  loaded="1"
                  style="width: 205px; height: 205px; opacity: 1;"
                >
              </div>
              <span class="similar-product-text">京东专营Midea美的多功能电烤箱家用烘焙小烤箱控温迷你蛋糕汇总 小熊 粉色DKX-A09A1</span>
              <p class="similar-product-info">
                <span class="similar-product-price">¥&nbsp;
                  <span class="big-price">199</span>
                </span>
                <span
                  data-event_id="MHomeGuessYouLike_BSimilarities"
                  data-event_level="1"
                  data-event_param="1_34542140562_1"
                  class="guess-button j_see_similar"
                  jump-href="//home.m.jd.com/myjd/similar/list.action?skuId=34542140562"
                >看相似</span>
              </p>
              <p class="similar-product-info"></p>
            </div>
          </div>
          <!-- <div class="share_quality_left not_eng_box">
            <ul>
              <li class="not_eng_item" v-for="item in mainDatas">
                <router-link class="not_eng_link" :to="'/detail/'+item.product_id">
                  <img v-lazy="item.product_img_url" alt class="not_eng_pic lazy-img-fadein">
                  <div class="not_eng_info">
                    <p class="not_eng_title">{{item.product_name}}</p>
                    <p class="not_eng_text">
                      <i style="text-decoration: none;font-style: normal;font-size: 12px">¥</i>
                      <span class="more_info_price_txt">{{item.product_price}}</span>
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </main>
  </div>
</template>
<script>
// export default{
//     data (){
//         return {
//             homeDatas : [],
//             mainDatas:[]
//         }
//     },
//     mounted(){
//         this.getData();
//     },
//     methods:{
//         getData(){
//             let _this = this;
//             _this.$http.get('/home').then((res)=>{
//                 _this.homeDatas.push(res.data[0]);
//                 _this.homeDatas.push(res.data[1]);
//                 _this.homeDatas.push(res.data[2]);
//                 _this.homeDatas.push(res.data[3]);
//                 _this.mainDatas = res.data;
//             },(err)=>{
//                 console.log(err);
//             })
//         }
//     }
// }
</script>
<style>
/* img[lazy="error"] {
  background: url("../assets/images/err.png");
} */
.similar-product {
  display: flex;
  flex-direction: row;
}
.similar-posre {
  width: 372px;
  display: inline-block;
}
.similar-product-text {
  width: 372px;
  display: inline-block;
}
.similar-product-info {
  width: 372px;
  display: inline-block;
}
</style>
