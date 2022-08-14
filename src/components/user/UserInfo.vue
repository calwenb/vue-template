<template>
  <el-dialog
    title="个人信息"
    :visible.sync="show"
    append-to-body>
    <el-descriptions class="margin-top" :column="3" border>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ user.userName }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        {{ user.phoneNumber }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          邮箱
        </template>
        {{ user.email }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          用户类别
        </template>
        <el-tag size="small">{{ user.userType }}</el-tag>
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          注册时间
        </template>
        {{ user.registerTime }}
      </el-descriptions-item>
    </el-descriptions>
    <br>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="show = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import eventBus from "../../js/eventBus";

export default {
  data() {
    return {
      show: false,
      user: {},
    }
  },
  created() {
    eventBus.$on("userInfo", data => {
      this.user = data;
      this.show = true;
    });

  },
}
</script>

<style scoped>

</style>
