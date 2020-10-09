<template>
  <div class='home_container'>首页</div>
</template>

<script>

import { getUserProfile } from '@/api/user'
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {
    getUserProfile()
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang='less'></style>
