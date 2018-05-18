<template>
  <div class="dialog">
    
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    seller: Object
  },
  methods: {
    closeDialog () {
      this.$emit("togleDialog", false)
    }
  }
}
</script>

<style lang="scss">
  .dialog {
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.8);
  }
</style>