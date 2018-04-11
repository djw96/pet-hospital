<template>
    <el-table :data="tableData">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
    </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          name: 'djw'
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
