<template>
    <div class="nav">
      <div class="logo">L O G O</div>
        <el-menu
        default-active="/storeManage"
        background-color="#323232"
        text-color="#fff"
        :unique-opened='true'
        router
        active-text-color="#fff"
        @select="handleSelect"
        >
        <div v-for="item in menus" :key="item.id">
          <el-submenu :index="item.id">
              <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.name}}</span>
              </template>
              <div v-for="menu in item.child" :key="menu.id">
                <el-menu-item :index="menu.path">* {{menu.name}}</el-menu-item>
                <!-- <el-menu-item index="/storeStatistics">* 店铺统计</el-menu-item> -->
              </div>
          </el-submenu>
        </div>
        <el-menu-item @click.native="layout" class="layout">
            <i class="el-icon-setting"></i>
            <span slot="title">退出登录</span>
        </el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  components: {},
  props: {},
  data () {
    return {
      pathlist: [],
      menus: [
        {
          id: '1',
          name: '店铺管理',
          icon: 'menhuguanli',
          path: '#2',
          child: [
            {
              id: '1-1',
              name: '店铺管理',
              path: '/storeManage'
            },
            {
              id: '1-2',
              name: '店铺统计',
              path: '/storeStatistics'
            }
          ]
        },
        {
          id: '2',
          name: '页面管理',
          icon: 'menhuguanli',
          path: '#2',
          child: [
            {
              id: '2-1',
              name: '页面管理',
              path: '/indesmagement'
            },
            {
              id: '2-2',
              name: '发布备份',
              path: '/public'
            }
          ]
        },
        {
          id: '3',
          name: '商品管理',
          icon: 'menhuguanli',
          path: '#2',
          child: [
            {
              id: '3-1',
              name: '基础产品',
              path: '/baseproduct'
            },
            {
              id: '3-2',
              name: '品牌管理',
              path: '/pinpaistore'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  watch: {
    $route () {
      this.handChange()
    }
  },
  created () {
    this.handChange()
  },
  mounted () {},
  methods: {
    // 退出登录
    layout () {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.localStorage.removeItem('user')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出登录'
        })
      })
    },
    // 激活子菜单
    handleSelect (index, indexPath) {
      this.pathlist = indexPath
      // console.log(index, indexPath)
    },
    getPathList () {
      const menuList = []
      const menus = this.menus
      // console.log('1', this.pathlist, menuList)
      this.pathlist.map(item => {
        // console.log('item', item)
        for (let i = 0; i < menus.length; i++) {
          // console.log(menus[i].child)
          if (item === menus[i].id) {
            for (let k = 0; k < menus[i].child.length; k++) {
              for (let j = 0; j < this.pathlist.length; j++) {
                if (this.pathlist[j] === menus[i].child[k].path) {
                  menus[i].child[k].parentName = menus[i].name
                  menuList.push(menus[i].child[k])
                  // console.log('2', menus[i].child[k])
                }
              }
            }
            // console.log(menus[i].child)
          }
        }
      })
      return menuList
    },
    // 路由变化
    handChange () {
      // console.log(123)
      this.$emit('handChange', this.getPathList())
    }
  }
}
</script>

<style scoped lang='less'>
.nav {
  .logo {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
    /deep/ .el-submenu, .layout {
        width: 200px;
    }
    /deep/ .is-opened .el-submenu__title {
        background-color:#0099cd!important
    }
    /deep/ .el-submenu__title:hover {
        background-color:#0099cd!important
    }
    /deep/ .is-opened .el-submenu__title:hover, .layout:hover {
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
