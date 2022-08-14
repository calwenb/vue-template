<template>
  <div>
    <el-row type="flex" :gutter="10" justify="end">
      <!--用户信息-->
      <el-col :xs="4" :md="4" style="text-align: left;padding-left: 1%; padding-top: 10px;" class="userMsg">

        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar :size="45">
               <el-image :src="avatarUrl"/>
            </el-avatar>
            <span class="mobileHide">
              <span>{{ user.userName }}</span>
            </span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="userInfo">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yanzhengma"></use>
              </svg>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item command="updateUser">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianji4"></use>
              </svg>
              修改信息
            </el-dropdown-item>
            <el-dropdown-item command="updatepwd">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yanzhengma"></use>
              </svg>
              修改密码
            </el-dropdown-item>
            <el-dropdown-item command="outLogin">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuichudenglu"></use>
              </svg>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-col>

    </el-row>
    <user-info/>
    <user-update/>
  </div>
</template>

<script>

import eventBus from "../../js/eventBus";
import UserUpdate from "../user/UserUpdate";
import UserInfo from "../user/UserInfo";

export default {
  name: "NavHead",
  props: ['user'],
  components: {UserUpdate, UserInfo},
  data() {
    return {
      avatarUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    };
  },
  methods: {
    handleCommand(command) {
      if (command === 'userInfo') {
        eventBus.$emit("userInfo", this.user);
      } else if (command === "updateUser") {
        eventBus.$emit("userUpdate", this.user);
      } else if (command === "updatepwd") {
        eventBus.$emit("userPwdUpdate", this.user);
      } else if (command === "outLogin") {
        this.$cookies.remove("TOKEN");
        this.$router.push('/login');
      }
    },


  }
}

</script>

<style scoped>
</style>
