<template>


    <el-button @click="handleClick()">{{count}}</el-button>




</template>

<script>
  import {mapState} from 'vuex'
export default{
    data(){
        return {

        }
    },
  methods:{
    handleClick() {
//     console.log(this.$store.state.count);
    }
  },
  computed:mapState({
    count:state=>state.count
  })


}
</script>

<style>

</style>
