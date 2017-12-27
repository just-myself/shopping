<template >
  <el-container>
    <el-header style="background: #EBEEF5">
    <el-steps style="display: flex;justify-content: center"  :active="active" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    </el-header>
   <el-main style="margin-top:80px;">
     <router-view></router-view>
     <el-button type="success" style="margin-left:70%; width:10%;" @click="next()">下一步</el-button>
  </el-main>
  </el-container>
</template>

<script>
  import bus from './bus';
  export default {
    data() {
      return {
        active:1,
    }
  },
    methods:{
      next() {
          this.active++;
          if(this.active>1){
              this.$router.push('/pay');
          }
        if (this.active > 2){
        this.$router.push('/end');}
        if (this.active > 3){
          this.$router.push('/shop');}
      }
    }
  }
</script>
