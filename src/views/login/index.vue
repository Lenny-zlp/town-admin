<template>
  <div class="login_container">
    <el-form
    class="login_form"
    ref="loginform"
    :model="user"
    :rules="formrules"
    >
        <div class="login_header"></div>
        <el-form-item prop="mobile">
            <el-input
            v-model="user.mobile"
            placeholder="请输入账号"
            ></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input
            v-model="user.code"
            placeholder="请输入密码"
            ></el-input>
        </el-form-item>
        <el-form-item prop="agree">
           <el-checkbox
           v-model="user.agree">我已阅读并同意霸王条款</el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button
            :loading="loginLoading"
            class="login_btn"
            type="primary"
            @click="onLogin"
            >登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>

import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false
      },
      // checked: false,
      loginLoading: false,
      formrules: {
        mobile: [
          { required: true, message: '账号不能为空！', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空！', trigger: 'blur' }
        ],
        agree: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请勾选用户协议！'))
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      this.$refs.loginform.validate(valid => {
        if (!valid) {
          return
        }
        this.login()
      })
    },
    login () {
      this.loginLoading = true
      const user = this.user
      login(user).then(res => {
        this.$message({
          message: '登录成功！',
          type: 'success'
        })
        this.loginLoading = false
        window.localStorage.setItem('user', JSON.stringify(res.data.data))
        // 根据路径跳转
        this.$router.push('/')
        // 根据名字跳转
        // this.$router.push({
        //   name: 'home'
        // })
      }).catch(err => {
        console.log(err)
        this.$message.error('账号或密码错误，请检查后重新输入！')
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
    .login_container {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("../../assets/timg.jpg") no-repeat;
        background-size: cover;
        .login_form {
            padding: 50px;
            width: 300px;
            background-color: #fff;
            background-size: 100% 100%;
            .login_header {
                width: 300px;
                height: 70px;
                background-color: #fff;
                margin-bottom: 20px;
                background: url("../../assets/adminlog.gif") no-repeat;
                background-size: 100% 100%;
            }
            .login_btn {
                width: 100%;
            }
        }
    }
</style>
