<template>
  <div>
    <p>{{count1()}}</p>
      我是first组件
<p>{{$store.state.count}}</p>
<p>{{count}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mine: ''
    }
  },
  methods: {

    count1 () {
      return this.$store.state.count
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
