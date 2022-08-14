<template>
  <el-dialog
    title="修改信息"
    :visible.sync="show">
    <el-form ref="form" :model="form" label-width="80px" style="padding: 0 15vh;">
      <el-form-item label="客编号">
        <el-input v-model="form.id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="客户名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="等级">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="客户等级">
        <el-input v-model="form.level"></el-input>
      </el-form-item>
      <el-form-item label="信用等级">
        <el-input v-model="form.creditLevel"></el-input>
      </el-form-item>
      <el-form-item label="客户经理">
        <el-input v-model="form.manager"></el-input>
      </el-form-item>
      <el-form-item label="法人">
        <el-input v-model="form.legalPerson"></el-input>
      </el-form-item>
      <el-form-item label="流失原因">
        <el-input v-model="form.loseReason"></el-input>
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
  data() {
    return {
      show: false,
      form: {}
    }
  },
  created() {
    eventBus.$on("clientUpdate", data => {
      this.form = data;
      this.show = true;
    })
  },
  methods: {
    submitForm() {
      const that = this;
      this.axios.put(Global.SERVER_ADDRESS + "/clients/" + that.form.id, that.form)
        .then(rs => {
          this.successMsg("修改成功");
        })
    }
  },
}
</script>

<style scoped>

</style>
