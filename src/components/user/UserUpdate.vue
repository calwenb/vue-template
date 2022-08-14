<template>
  <div>
    <el-dialog
      title="修改信息"
      :visible.sync="userShow"
      append-to-body>
      <el-form ref="form" :model="form" label-width="80px" style="padding: 0 15vh;">
        <el-form-item label="昵称">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phoneNumber"></el-input>
        </el-form-item>
      </el-form>
      <br>
      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateUser">确 定</el-button>
      <el-button @click="userShow = false">取 消</el-button>
    </span>
    </el-dialog>

    <el-dialog
      title="修改密码"
      :visible.sync="pwdShow"
      width="50vh"
      append-to-body>
      <el-input placeholder="请输入旧密码" v-model="oldPassword" show-password></el-input>
      <el-input placeholder="请输入新密码" v-model="newPassword" show-password></el-input>
      <span slot="footer" class="dialog-footer">
      <el-button @click="pwdShow = false">取 消</el-button>
      <el-button type="primary" @click="updatePassword">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
import eventBus from "../../js/eventBus";
import Global from "../../js/global";

export default {
  name: "UpdateUser",
  data() {
    return {
      userShow: false,
      pwdShow: false,
      form: {
        userName: '',
        email: '',
        phoneNumber: '',
      },
      oldPassword: '',
      newPassword: '',
    }
  },
  created() {
    eventBus.$on("userUpdate", data => {
      this.form = data;
      this.userShow = true;
    });
    eventBus.$on("userPwdUpdate", data => {
      this.form = data;
      this.pwdShow = true;
    });
  },
  methods: {
    updateUser() {
      const that = this;
      this.axios.put(Global.SERVER_ADDRESS + "/users/" + that.form.id, that.form)
        .then(rs => {
          this.successMsg("修改成功");
        })
    },
    updatePassword() {
      const that = this;
      this.axios.put(Global.SERVER_ADDRESS + "/users/" + that.form.id + '/pdw', {
        oldPwd: that.oldPassword,
        newPwd: that.newPassword
      }).then(rs => {
        this.successMsg("修改成功");
      })
    }
  },


}
</script>

<style scoped>

</style>
