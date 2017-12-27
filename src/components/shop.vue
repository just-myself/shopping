<template>
  <el-container>
    <el-main>
      <el-tabs v-model="activeName" >
       <el-tab-pane label="用户管理" name="first">
         <el-table
         :data="arr"
         style="width: 100%" >
         <el-table-column
           prop="img"
           label="图片">
           <template scope="scope">
             <img  :src="scope.row.img" alt="" >
           </template>
         </el-table-column>
         <el-table-column
           prop="number"
           label="数量"
         >
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
         <el-table-column label="操作">
           <template slot-scope="scope">
             <el-button
               size="mini"
               @click="handleDown(scope.$index, arr)">-</el-button>
             <el-button
               size="mini"
               @click="handleUp(scope.$index, arr)">+</el-button>
             <el-button
               size="mini"
               type="danger"
               @click="handleDelete(scope.$index, arr)">删除</el-button>
           </template>
         </el-table-column>
       </el-table>

     </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
      <div style="position: fixed;left:87%;top:87%" >
        <span>￥{{number}}</span>
        <el-button @click="jumpToOver">去结算</el-button>
      </div>
    </el-main>
    <el-footer>

    </el-footer>

  </el-container>

</template>

<script>
  import bus from './bus';
export default{
  data(){
    return {
      activeName: 'first',

      arr: [],
      number:0,
      data:[]

    }
  },
  mounted: function () {
     this.getdata();
  },
  methods: {
    handleDown(index, row) {


      if(row[index].number<=0){
        return;
      }
      this.number=0;

      row[index].number--;
      console.log(row[index].number);
      if(row[index].number>0){
        this.data.push(row[index]);
      }
      for(let item of row){
        this.number+=item.number*item.money;

      }
    },
    handleUp(index, row) {
      this.number=0;
      row[index].number++;
if(row[index].number>0) {
  this.data.push(row[index]);
};
      console.log(row[index].number);
      let len=this.data.length;
      let result=[];
      for(let i=0;i<len;i++){
          let flag=true;
          for(let j=i;j<len-1;j++ ){
              if(this.data[i]==this.data[j+1]){
                  flag=false;
                  break;
              }
          }
          if(flag){
              result.push(this.data[i])
          }
      }
      this.$store.state.obj[length]=result;

   for(let item of row){
       this.number+=item.number*item.money;
   }

    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
      this.number=0;
      for(let item of rows){
        this.number+=item.number*item.money;
      }
    },
    getdata:function(){
       this.$axios.get('http://localhost:3000/shop').then((res)=>{

        this.arr=res.data;
      })
    },
    jumpToOver:function(){

      this.$router.push('/cart');
    }



  },
  updated:function(){
    localStorage.setItem('number' , this.number);
  }
}
</script>

<style>
th{
  padding: 100px;
}
</style>
