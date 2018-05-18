<template>
  <div class="home">
    <header-bar :seller="seller"></header-bar>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'

export default {
  name: 'home',
  components: { HeaderBar },
  data () {
    return {
      seller: {}
    }
  },
  watch: {
    seller () {
      console.log(this.seller)
    }
  },
  methods: {
    fetchSellerInfo () {
      this.$axios.get('/api/seller')
        .then((res) => {
          if (res.data.errno === 0) {
            this.seller = res.data.data
            console.log(this.seller)
          } else {
            console.log('error')
          }
        })
    }
  },
  created () {
    this.fetchSellerInfo()
    console.log(this.$route.matched)
  }
}
</script>

<style lang="scss">
.home {
  position: relative;
  .tab {
    display: flex;
    border: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: rgb(77, 85, 93);
      line-height: 40px;
      a {
        font-size: 14px;
        color: rgb(77, 85, 93);
        &.router-link-active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
