<template>
    <div class="nav">
        <el-menu
        default-active="/storeManage"
        @open="handleOpen"
        @close="handleClose"
        background-color="#323232"
        text-color="#fff"
        :unique-opened='true'
        router
        active-text-color="#fff">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>店铺管理</span>
            </template>
                <el-menu-item index="/storeManage">*店铺管理</el-menu-item>
                <el-menu-item index="/storeStatistics">*店铺统计</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>页面管理</span>
            </template>
                <el-menu-item index="/indesmagement">*页面管理</el-menu-item>
                <el-menu-item index="/public">*发布备份</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
            </template>
                <el-menu-item index="/baseproduct">*基础产品</el-menu-item>
                <el-menu-item index="/pinpaistore">*品牌管理</el-menu-item>
        </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang='less'>
.nav {
    /deep/ .is-opened .el-submenu__title {
        background-color:#0099cd!important
    }
    /deep/ .el-submenu__title:hover {
        background-color:#0099cd!important
    }
    /deep/ .is-opened .el-submenu__title:hover {
        background-color:#0099cd!important
    }
    /deep/ .is-opened ul li {
        background-color: #ebedf1!important;
        color: #333!important;
    }
    /deep/ .is-opened ul li:hover {
        background-color: #fff!important;
        color: #0099cd!important;
    }
    /deep/ .is-opened ul .is-active {
        background-color: #fff!important;
        color: #0099cd!important;
    }
}
</style>
