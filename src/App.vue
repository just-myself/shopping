<template>




  <el-container style=" border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

      <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
        <!--<el-radio-button :label="false">展开</el-radio-button>-->
        <!--<el-radio-button :label="true">收起</el-radio-button>-->
      <!--</el-radio-group>-->
      <el-menu default-active="1" class="el-menu-vertical-demo">



        <router-link to="/shop">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
        </router-link>



<router-link to="/backend">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
</router-link>
    <router-link to="/cart">
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
    </router-link>
      </el-menu>



    </el-aside>

    <el-container>
     <router-view></router-view>
    </el-container>
  </el-container>

</template>
<!--<router-link to="/shop">首页</router-link></el-col></el-row>-->
<!--<el-row><el-col><router-link to="/backend">首页</router-link></el-col></el-row>-->
<!--<el-row><el-col><router-link to="/cart">首页</router-link></el-col></el-row>-->

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {

        tableData:[],


      }
    },
    mounted:function(){
        this.num();
    }
    ,
    methods: {

      num: function () {
        let item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        this.tableData.push(item);
      }
    }
  };
</script>
