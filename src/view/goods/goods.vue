<template>
  <div class="goods">
    <div class="content">
      <div class="menu-content">
        <ul class="menu-slide">
          <li v-for="(item, index) in goods" class="menu-item">{{item.name}}</li>
        </ul>
      </div>
      <div class="goods-content"></div>
    </div>
    <div class="shopping-cart">
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goods: []
    }
  },
  methods: {
    fetchGoods () {
      this.$axios.get('/api/goods')
        .then((res) => {
          if(res.data.errno === 0) {
            this.goods = res.data.data
          }
        })
    }
  },
  created () {
    this.fetchGoods()
  }
}
</script>

<style lang="scss">
.goods {
  position: absolute;
  top: 174px;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: 58px;
  .content {
    height: 100%;
    display: flex;
    .menu-content {
      flex: 0 0 80px;
      width: 80px;
      height: auto;
      overflow: auto;
      .menu-item {
        display: table;
        width: 100%;
        width: 56px;
        height: 54px;
        padding: 0 12px;
      }
    }
  }
}
</style>
