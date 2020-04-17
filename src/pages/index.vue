<template>
  <div>
    <div class="main" v-if="isLogin">
      <!-- 商品 -->
      <div class="commodity">
        <img :src="data.img" />
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
          <div class="orderDetail_two_texe_one">份数</div>：
          <div>{{data.num}}</div>
          <div style="color:#555">份</div>
        </div>
        <div class="orderDetail_two">
          <div class="orderDetail_two_texe_one">订单编号</div>：
          <div class="orderDetail_two_text">{{data.number}}</div>
          <!-- <div class="orderDetail_two_copy" bindtap="copy">复制</div> -->
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
            <!-- <div class="total_two_price"></div> -->
            <div v-if="data.state==0" class="total_two_price">未支付</div>
            <div v-if="data.state==1" class="total_two_price">￥{{data.item_price}}</div>
            <div v-if="data.state==2" class="total_two_price">￥{{data.item_price}}</div>
            <div v-if="data.state==3" class="total_two_price">￥{{data.item_price}}</div>
            <div v-if="data.state==4" class="total_two_price">退款中</div>
            <div v-if="data.state==5" class="total_two_price">已退款</div>
          </div>
        </div>
      </div>
      <!-- 底部 -->

      <div class="box" v-if="orderUse">该订单已使用</div>
      <div class="box" v-else @click="confirmUse">确定使用订单</div>
    </div>
    <div class="container" v-else>
      <div class="banner-wrapper">
        <img src="../../public/images/banner.png" alt srcset />
      </div>
      <div class="form-wrapper">
        <form action>
          <div class="input-wrapper">
            <i class="iconfont icon-shouji"></i>
            <input type="text" placeholder="请输入账号" v-model="number" />
          </div>
          <div class="input-wrapper">
            <i class="iconfont icon-yanzheng"></i>
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn" @click="login">登录</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { Cell, Checklist } from 'mint-ui';
import { MessageBox ,Toast} from "mint-ui";

export default {
  name: "Inedx",
  props: {},
  components: {},
  data() {
    return {
      isLogin: false,
      orderUse: false,
      number: "",
      password: "",
      order_id: 1,
      token: "",
      data: {}
    };
  },
  created() {
    this.order_id=this.getOrderId('id')
    // console.log(this.order_id)
  },
  mounted() {
    //  this.getInitData();
  },
  methods: {
    getOrderId(key) {
       var query = window.location.search.substring(1);
      //  var query = "id=1&image=awesome.jpg"
       var vars = query.split("&");
       console.log(vars)
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == key){return pair[1];}
       }
    },
    login() {
      if (this.number == "") {
        window.alert("请输入账号");
      } else if (this.password == "") {
        window.alert("请输入密码");
      } else {
        this.axios({
          method: "post",
          url: "https://mn.guaishe.com/index.php/index/login/loginpc",
          data: this.qs.stringify({
            username: this.number,
            password: this.password
          })
        })
          .then(response => {
            console.log(response);
            if (response.data.code == 200) {
              Toast('登录成功')
              this.token = response.data.data;
              this.isLogin = true;
              this.getInitData();
            } else {
              window.alert(response.data.msg);
            }
            console.log(response);
          })
          .catch(res => {
            console.log(res);
            //  this.$message.error("网络错误，请联系管理员");
          });
      }
    },

    getInitData() {
      this.axios({
        method: "post",
        url: "https://mn.guaishe.com/index.php/index/pc/orderdesc",
        data: this.qs.stringify({ id: this.order_id, token: this.token })
      })
        .then(response => {
          console.log(response);
          if (response.data.code == 200) {
            this.data = response.data.info;
          } else {
            Toast(response.data.msg);
          }
          console.log(response);
        })
        .catch(res => {
          console.log(res);
          //  this.$message.error("网络错误，请联系管理员");
        });
    },
    confirmUse() {
      //确认使用订单
      MessageBox.confirm("确定执行此操作?").then(action => {
        console.log(action);
        this.axios({
          method: "post",
          url: "https://mn.guaishe.com/index.php/index/pc/confirm",
          data: this.qs.stringify({ id: this.order_id, token: this.token })
        })
          .then(response => {
            
            if (response.data.code == 200) {
              Toast('订单已使用')
              this.orderUse = true;
              // console.log();
            } else {
              Toast(response.data.msg);
            }
            // console.log(response);
          })
          .catch(res => {
            console.log(res);
            Toast("网络错误，请联系管理员");
          });
      });
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*登录*/
.banner-wrapper {
  width: 100%;
}
.banner-wrapper > img {
  width: 100%;
}
.form-wrapper {
  width: 100%;
  margin-top: 40px;
  padding: 30px;
}
.input-wrapper {
  background: #efefef;
  line-height: 3em;
  padding-left: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
}
.input-wrapper > i {
  padding-right: 6px;
}
.icon-shouji {
  font-size: 17px;
}
.input-wrapper > input {
  background: #efefef;
  border: none;
  font-size: 15px;
  padding: 2px;
}
.btn {
  background: linear-gradient(45deg, #f7911e, #f25b26);
  line-height: 3em;
  border-radius: 6px;
  margin-top: 80px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.2em;
}

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
.commodity > img {
  width: 57px;
  height: 57px;
  /* border: 1px solid red; */
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

.price > div {
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
  border-top: 2px solid #eee;
  padding:  4vw;
  background-color: white;
}

.orderDetail_one {
  margin-bottom: 3vh;
  font-weight: bold;
}

.orderDetail_two {
  display: flex;
  font-size: 13px;
  width: 90vw;
  margin-bottom: -6px;
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

/* .orderDetail_two_copy {
  position: absolute;
  left: 80vw;
  border: 1px solid #f58c6c;
  width: 12vw;
  height: 3vh;
  text-align: center;
  border-radius: 60rpx;
  color: #f58c6c;
} */
.orderDetail_two > view:nth-child(2) {
  margin-left: 5vw;
  color: #555;
}

/* 商品总额 */

.total {
  width: 100%;
  border-top: 5rpx solid #eee;
  padding: 4vw;
  margin-bottom: 15vh;
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
  margin-bottom: 3px;
}

.total_two_title {
  width: 18vw;
  text-align: justify;
  font-size: 13px;
  color: #626262;
}

.total_two_title:after {
  content: "";
  width: 100%;
  display: inline-block;
}

.total_two_L {
  width: 25vw;
  display: flex;
  font-size: 13px;
}

.total_two_text {
  display: flex;
  color: #626262;
  font-size: 13px;
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
  letter-spacing: 0.2em;
  border-top: 2px solid #eee;
  position: fixed;
  bottom: 0;
  left: 0;
}

.total_two_price {
  color: #f56334;
}
</style>
