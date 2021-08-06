import BackTop from 'components/content/backtop/BackTop.vue'
export const mixinTest={
  created () {
    console.log('mixinTest...');
    
  }
}
export const backTopMinx={
  data () {
    return {
      ShowBackTop:false,
    }
    
  },
  components: {
    BackTop,
  },
  methods: {
    ToTop(){
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    }
  }
}