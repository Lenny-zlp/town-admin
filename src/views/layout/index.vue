<template>
    <el-container class='layout_container'>
        <el-aside
        width="200px"
        class="aside"
        >
          <Aside />
        </el-aside>
        <el-container>
            <el-header class="header">Header</el-header>
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
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
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
        background-color: #323232;
    }
    .header {
        background-color: #ccc;
    }
    .main {
        background-color: #eee;
    }
</style>
