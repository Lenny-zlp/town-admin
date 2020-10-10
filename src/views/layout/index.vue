<template>
    <el-container class='layout_container'>
        <el-aside
        width="200px"
        class="aside"
        >
          <Aside @handChange="geturl" />
        </el-aside>
        <el-container>
            <el-header class="header">
              <div class="h_left" v-for="item in menulist" :key="item.id">
                  <span class="line"></span>
                  <span class="foo">{{item.parentName}}</span> - <span class="soo">{{item.name}}</span>
              </div>
              <div class="h_right" @click="Onback">返回列表</div>
            </el-header>
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from './components/aside'
export default {
  name: 'LayoutIndex',
  components: {
    Aside
  },
  props: {},
  data () {
    return {
      menulist: [
        {
          id: '1-1',
          name: '店铺管理',
          parentName: '店铺管理',
          path: '/storeManage'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {
    console.log(this.menulist)
  },
  mounted () {},
  methods: {
    Onback () {
      console.log('返回列表')
    },
    geturl (menulist) {
      this.menulist = menulist
      // console.log('menulist', menulist)
    }
  }
}
</script>

<style scoped lang='less'>
    .layout_container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .aside {
      margin-right: 5px;
      background-color: #323232;
    }
    .header {
        height: 46px!important;
        font-size: 14px;
        background-color: #323232;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 0 40px 0 20px;
        .h_left {
            display: flex;
            .line {
                width: 4px;
                height: 20px;
                background-color: #0099cd;
                margin-right: 10px;
            }
        }
        .h_right {
            background-color: #0099cd;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
        }
    }
    .main {
        background-color: #eee;
    }
</style>
