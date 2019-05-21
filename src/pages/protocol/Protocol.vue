<template>
  <div class='protocol-container'>
    <my-navi :title="title" :isFixed="true"></my-navi>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'protocol',
  props: {
    title: {
      type: String,
      default: '常见问题'
    },
    qtype: Number
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {
    getData () {
      console.log(this.title, this.qtype)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.protocol-container
    background-color #ffffff
</style>
