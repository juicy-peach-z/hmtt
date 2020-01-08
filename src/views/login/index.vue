<template>
  <div id="login-container">
     <van-nav-bar  title="登录"/>
<van-cell-group>

  <van-field
    v-model="msg.mobile"
    left-icon="phone-o"
    required
    label="手机号"
    placeholder="请输入手机号"
  />

  <van-field
  v-model="msg.code"
    left-icon="phone-o"
    label="验证码"
    placeholder="请输入验证码"
    required
    >
    <van-button slot="button" size="small" type="primary" class="send">发送验证码</van-button>
 </van-field >
</van-cell-group>
<div class="login-btn">
  <van-button type="default" @click="Login">登录</van-button>
</div>

  </div>
</template>

<script>
import { login } from '@/api/user.js'
console.log(login)

export default {
  data () {
    return {
      msg: {
        mobile: '13911111111',
        code: '246810'
      },
      a: {}

    }
  },
  methods: {
    async  Login () {
      this.$toast.loading(
        {
          message: '加载中~~~',
          forbidClick: true,
          duration: 0
        }
      )

      try {
        let res = await login(this.msg)
        console.log(res)
        this.$toast.success('登录成功')
        // try {
        //   new Promise(
        //     function (resolve, reject) {
        //       resolve('成功')
        //       resolve('失1败')
        //       // 一段耗时的异步操作
        //       // resolve('成功') // 数据处理完成
        //       // reject('失败') // 数据处理出错
        //     }
        //   ).then(
        //     (res) => { console.log(res) }, // 成功
        //     (err) => { console.log(err) } // 失败
        //   ).catch(err => {
        //     console.log(err)
        //   })
        //   console.log(1)
        //   JSON.parse(this.a)

        //   // return new Promise()
        //   // return Promise.reject('错误')
        // } catch (err) {
        //   console.log(err)
        // }
      } catch (error) {
        console.log('登陆失败', error)
        this.$toast.fail('登陆失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
// #login-container{margin: 33px 16px}
.van-nav-bar__title{
  color: #fff
}
.send{
  background: #EEEEEE;
  border: none;
  border-radius: 5px;
  .van-button__text{
    color: #909090
  }
  }
  .login-btn{
    margin:33px 16px;
    .van-button{
    background: #6DB4FB;
    width: 100%;
    .van-button__text{
   color: #fff
   }
    }
  }

</style>
