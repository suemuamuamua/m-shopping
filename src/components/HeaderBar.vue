<template>
  <div class="header">
    <div class="header-content">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon"  :class="iconMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="toggleDialog(true)">
        <span>{{seller.supports.length}}个</span>
        <span class="iconfont icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin" @click="toggleDialog(true)">
      <span class="bulletin-icon"></span>
      <span class="text">{{seller.bulletin}}</span>
      <span class="iconfont icon-keyboard_arrow_right"></span>
    </div>
    <div class="bg-img">
      <img :src="seller.avatar" width="100%">
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'headerbar',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      iconMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      showDialog: false
    }
  },
  methods: {
    toggleDialog (booleans) {
      if (booleans) {
        this.showDialog = true
      } else {
        this.showDialog = false
      }
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
  .header {
    position: relative;
    color: #fff;
    font-weight: 200;
    line-height: 1;
    text-align: center;
    .header-content {
      position: relative;
      padding: 24px 0 18px 24px;
      font-size: 0;
      text-align: left;
      background: rgba(7, 17, 27, 0.5);
      .avatar {
        display: inline-block;
        width: 64px;
        height: 64px;
        border-radius: 2px;
        overflow: hidden;
      }
      .content {
        display: inline-block;
        vertical-align: top;
        margin-left: 16px;
        .title {
          .brand {
            display: inline-block;
            vertical-align: top;
            width: 30px;
            height: 18px;
            background-image: url('../../static/image/brand@2x.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .name {
            margin-left: 6px;
            font-size: 16px;
            font-weight: bold;
            line-height: 18px;
          }
        }
        .description {
          margin-top: 8px;
          margin-bottom: 10px;
          font-size: 12px;
        }
        .supports {
          font-size: 10px;
          line-height: 12px;
          .icon {
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &.decrease {
              background-image: url('../../static/image/decrease_1@2x.png');
            }
            &.discount {
              background-image: url('../../static/image/discount_1@2x.png');
            }
            &.guarantee {
              background-image: url('../../static/image/guarantee_1@2x.png');
            }
            &.invoice {
              background-image: url('../../static/image/invoice_1@2x.png');
            }
            &.special {
              background-image: url('../../static/image/special_1@2x.png');
            }
          }
        }
      }
      .supports-count {
        position: absolute;
        right: 12px;
        bottom: 12px;
        padding: 0 8px;
        font-size: 10px;
        line-height: 24px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.2);
        span {
          vertical-align: top;
        }
      }
    }
    .bulletin {
      display: flex;
      height: 28px;
      font-size: 0;
      line-height: 28px;
      padding: 0 12px;
      background: rgba(0, 0, 0, 0.5);
      .bulletin-icon {
        flex: 0 0 22px;
        display: inline-block;
        width: 22px;
        height: 12px;
        margin: 8px 4px 8px 0;
        background: url('../../static/image/bulletin@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      .text {
        display: inline-block;
        text-align: left;
        min-width: 0;
        margin-right: 4px;
        font-size: 10px;
        text-overflow: ellipsis;
        overflow: hidden;  
        white-space: nowrap; 
        flex: 1;
      }
      .icon-keyboard_arrow_right {
        display: inline-block;
        font-size: 10px;
      }
    }
    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
      img {
        width: 100%;
        height: auto;
        filter: blur(10px);
      }
    }
  }
</style>
