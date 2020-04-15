<template>
<div>
  <div class="container" v-if="isLogin">

  </div>
 <!--pages/personal/orderDetail/orderDetail.wxml-->
<div class="main">

   <!-- 商品 -->
   <div class="commodity">
      <img :src="data.img"/>
      <div class="commodity_one">
         <div class="commodity_text">{{data.item_name}}</div>
         <div class="price">
            <text>￥{{data.item_price}}.00</text>
            <div>
               <text>x</text>
               <text>{{data.num}}</text>
            </div>
         </div>
      </div>

   </div>
   <!-- 订单信息 -->
   <div class="orderDetail">
      <div class="orderDetail_one">
         <text>订单详情</text>
      </div>
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one">客户</div>：
         <div class="orderDetail_two_text">{{data.name}}</div>
      </div>
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one">电话</div>：
         <div>{{data.tel}}</div>
      </div>
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one"> 份数</div>：
         <div>{{data.num}}</div>
         <div style="color:#555">份</div>
      </div>
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one"> 订单编号</div>：
         <div class="orderDetail_two_text">{{data.number}}</div>
         <div class="orderDetail_two_copy" bindtap="copy">复制</div>
      </div>
     
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one">预约时期</div>：
         <div v-if="data.state==0">支付成功后预约</div>
         <div v-if="data.state==1">请预约时间</div>
         <div v-if="data.state==2">{{data.about_time}}</div>
         <div v-if="data.state==3">{{data.about_time}}</div>
         <div v-if="data.state==4">{{data.about_time}}</div>
         <div v-if="data.state==5">已退款</div>
      </div>
      <div class="orderDetail_two">
         <div class="orderDetail_two_texe_one">成交时间</div>：
         <div>{{data.create_time}}</div>
      </div>
      <div class="orderDetail_two" v-if="data.salesman_name">
         <div class="orderDetail_two_texe_one">业务员姓名</div>：
         <div class="orderDetail_two_text">{{data.salesman_name}}</div>
      </div>
      <div class="orderDetail_two" v-if="data.salesman_phone">
         <div class="orderDetail_two_texe_one">业务员手机</div>：
         <div class="orderDetail_two_text">{{data.salesman_phone}}</div>
      </div>
   </div>
   <!-- 商品总额 -->
   <div class="total">
      <div class="total_one">商品总额</div>
      <div class="total_two">
         <div class="total_two_L">
            <div class="total_two_title">总额</div>
            <div>：</div>
         </div>
         <div class="total_two_text">
            <div>￥</div>
            <div>{{data.item_prices}}</div>
         </div>
      </div>
      <div class="total_two">
         <div class="total_two_L">
            <div class="total_two_title">优惠</div>
            <div>：</div>
         </div>
         <div class="total_two_text">
            <div>￥</div>
            <div>0.00</div>
         </div>
      </div>
      <div class="total_two">
         <div class="total_two_L">
            <div class="total_two_title">实付款</div>
            <div>：</div>
         </div>
         <div class="total_two_text">
            <div class="total_two_price">￥</div>
            <div v-if="data.state==0" class="total_two_price">未支付</div>
            <div v-if="data.state==1" class="total_two_price">{{data.item_price}}</div>
            <div v-if="data.state==2" class="total_two_price">{{data.item_price}}</div>
            <div v-if="data.state==3" class="total_two_price">{{data.item_price}}</div>
            <div v-if="data.state==4" class="total_two_price">退款中</div>
            <div v-if="data.state==5" class="total_two_price">已退款</div>
         </div>
      </div>
   </div>
   <!-- 底部 -->
   <div class="box">
      确定使用订单
   </div>
</div>
</div>
</template>

<script>
export default {
  name: 'Inedx',
  props: {
   
  },
  data(){
    return {
      isLogin:true,
      data:{}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*登录*/
.banner-wrapper{width:100%;}
.banner-wrapper>img{width: 100%;}
.form-wrapper{width: 100%;margin-top: 40px;padding: 30px;}
.input-wrapper{background: #efefef;line-height: 3em;padding-left: 20px;border-radius: 6px;margin-bottom:20px;}
.input-wrapper>i{padding-right: 6px;}
.icon-shouji{font-size: 17px;}
.input-wrapper>input{background:#efefef;border: none;font-size: 15px;padding: 2px;}
.btn{background: linear-gradient(45deg,#F7911E,#F25B26);line-height: 3em;border-radius: 6px;margin-top:80px;
text-align: center;color: #fff;letter-spacing: .2em;}

/*订单详情*/

/* pages/personal/orderDetail/orderDetail.wxss */

/* 商品 */

.commodity {
   width: 100vw;
   height: 15vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-left: 4vw;
   padding-right: 2vw;
   margin-top: 1vh;
   box-sizing: border-box;
}
.commodity> img {
   width: 57px;
   height: 57px;
   border:1px solid red
}

.commodity_one {
   display: flex;
   justify-content: space-between;
}

.price {
   width: 20vw;
   height: 7vh;
   display: flex;
   flex-wrap: wrap;
}

.price>div{
   width: 20vw;
   display: flex;
   justify-content: flex-end;
   padding-right: 3vw;
   color: #626262;
}
.commodity_text {
   color: #626262;
   width: 45vw;
}

/* 订单详细 */

.orderDetail {
   border-top: 5px solid #eee;
   padding: 4vh 4vw;
   background-color: white;
}

.orderDetail_one {
   margin-bottom: 3vh;
   font-weight: bold;
}

.orderDetail_two {
   display: flex;
   font-size: 26rpx;
   width: 90vw;
   margin-bottom: -11rpx;
   position: relative;
}

.orderDetail_two_texe_one {
   width: 20vw;
   text-align: justify;
   color: #555;
}

.orderDetail_two_texe_one:after {
   content: " ";
   display: inline-block;
   width: 100%;
}

.orderDetail_two_text {
   /* margin-left: 10vw;
   margin-right: 15vw; */
}

.orderDetail_two_copy {
   position: absolute;
   left: 80vw;
   border: 1px solid #f58c6c;
   width: 12vw;
   height: 3vh;
   text-align: center;
   border-radius: 60rpx;
   color: #f58c6c;
}
.orderDetail_two>view:nth-child(2) {
   margin-left: 5vw;
   color: #555;
}

/* 商品总额 */

.total {
   width: 100%;
   border-top: 5rpx solid #eee;
   padding: 4vh 4vw;
   margin-bottom: 25vh;
   background-color: white;
   box-sizing: border-box;
}

.total_one {
   margin-bottom: 3vh;
   font-weight: bold;
}

.total_two {
   display: flex;
   justify-content: space-between;
   margin-bottom: -10rpx;
}

.total_two_title {
   width: 18vw;
   text-align: justify;
   font-size: 26rpx;
   color: #626262;
}

.total_two_title:after {
   content: '';
   width: 100%;
   display: inline-block;
}

.total_two_L {
   width: 25vw;
   display: flex;
   font-size: 26rpx;
}

.total_two_text {
   display: flex;
   color: #626262;
   font-size: 26rpx;
}

/* 底部 */

.box {
   width: 100vw;
   height: 10vh;
   /* display: flex;
   align-items: center;
   justify-content: flex-end; */
   /* padding-right: 10vw; */
   background-color: #f56334;
   color: #fff;
   line-height: 10vh;
   text-align: center;
   letter-spacing: .2em;
   border-top: 2px solid #eee;
   position: fixed;
   bottom: 0;
   left: 0;
}


.total_two_price {
   color: #f56334;
}



</style>
