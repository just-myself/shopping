/**
 * Created by web-01 on 2017/12/24.
 */
<template>
  <div>
<el-card class="box-card">
  <div slot="header" class="clearfix">
  <span>卡片名称</span>
  <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div>



   <el-table
 :data="data"
 style="width: 100%" >
   <el-table-column prop="img" label="图片">
     <template scope="scope">
           <img  :src="scope.row.img" alt="" >
     </template>
   </el-table-column>
   <el-table-column prop="number" label="数量">
   </el-table-column>
   <el-table-column
 prop="title"
 label="书籍名"
  >
   </el-table-column>
   <el-table-column
 prop="money"
 label="金额"
 >
   </el-table-column>


   </el-table>
  <el-button type="primary" style="width: 100% ;display:inline-block" >￥{{count}}</el-button>
</el-card>

</div>
  </template>
  <script>
//import bus from './bus';
export default {
  data() {
    return {
      count:'',
      data:[]
    }
  },
  created(){
    this.$notify({
      title: '温馨提示',
      message: '请确认自己的订单',
      duration:4000,
      position: 'button-right'
    });

  },
  mounted(){

if(this.$store.state.obj[0]===undefined) {
this.data=[];
  }
else{
  for(let item in this.$store.state.obj[0]){
      if(item.number>0){
        this.data = this.$store.state.obj[0];
        this.count = localStorage.getItem('number');
        for (let i = 0; i < this.data.length; i++) {
          let total = 0;
          total = parseInt(this.data[i].number) * parseFloat(this.data[i].money);
          this.count = total;


        }
      }
  }


}
  },
  methods:{

  }




}
</script>








