<template>
  <div>
    <h1>{{$route.params.id}}</h1>
    <el-table :data="tableData">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="name"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'djw1'
        },
        {
          id: 2,
          name: 'djw2'
        },
        {
          id: 3,
          name: 'djw3'
        }
      ]
    }
  }
}
</script>
