<template>
  <el-dialog
    title="修改信息"
    :visible.sync="show">
    <el-form ref="form" :model="form" label-width="80px" style="padding: 0 15vh;">
      <el-form-item label="客户名称">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="创建人">
        <el-input v-model="form.createName"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import eventBus from "../../../js/eventBus";
import Global from "../../../js/global";

export default {
  name: "ServingAdd",
  data() {
    return {
      show: false,
      form: {}
    }
  },
  created() {
    eventBus.$on("servingAdd", data => {
      this.show = true;
    })
  },
  methods: {
    submitForm() {
      const that = this;
      this.axios.post(Global.SERVER_ADDRESS + "/servings", that.form)
        .then(rs => {
          this.successMsg("添加成功");
        })
    }
  },
}
</script>

<style scoped>

</style>
