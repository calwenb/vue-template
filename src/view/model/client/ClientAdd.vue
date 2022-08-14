<template>
  <el-dialog
    title="增加用户"
    :visible.sync="show">
    <el-form ref="form" :model="form" label-width="80px" style="padding: 0 15vh;">
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
import Global from "../../../js/global";
import eventBus from "../../../js/eventBus";

export default {
  data() {
    return {
      show: false,
      form: {}
    }
  },
  created() {
    eventBus.$on("clientAdd", data => {
      this.show = true;
    })
  },
  methods: {
    submitForm() {
      const that = this;
      this.axios.post(Global.SERVER_ADDRESS + "/clients", that.form)
        .then(rs => {
          this.successMsg("添加成功");
        })
    }
  },
}
</script>

<style scoped>

</style>
