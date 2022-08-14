<template>
  <div class="main">
    <h4>{{ title }}</h4>
    <el-row type="flex" class="row-bg">
      <el-button plain @click="add" circle>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tianjia"></use>
        </svg>
      </el-button>
      <el-button plain @click="refresh" circle>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shuaxin"></use>
        </svg>
      </el-button>
    </el-row>

    <el-divider></el-divider>
    <div class="table" v-loading="loading">
      <el-table
        :data="list.filter(data => !search
        || data.userName.toLowerCase().includes(search.toLowerCase())
        )"
        style="width: 100%;margin-bottom: 10%"
        :default-sort="{prop: 'date', order: 'descending'}">

        <el-table-column
          prop="id"
          label="编号"
          sortable
          width="80">
        </el-table-column>

        <el-table-column
          prop="userName"
          label="客户名称"
          sortable
          width="150">
        </el-table-column>

        <el-table-column
          prop="title"
          label="标题"
          sortable
          width="200">
        </el-table-column>

        <el-table-column
          prop="content"
          label="内容"
          sortable
          width="150">
        </el-table-column>

        <el-table-column
          prop="type"
          label="类型"
          sortable
          width="80">
        </el-table-column>


        <el-table-column
          prop="createName"
          label="创建人"
          sortable
          width="150">
        </el-table-column>


        <el-table-column
          prop="createTime"
          label="创建时间"
          sortable
          width="300">
        </el-table-column>


        <el-table-column
          fixed="right"
          align="right"
          width="200">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="input"/>
          </template>
          <template slot-scope="scope">
            <el-button circle @click="update(scope.row)">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bianji3"></use>
              </svg>
            </el-button>
            <el-button type="danger" icon="el-icon-delete" circle
                       @click="delOpen(scope.row)">
            </el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>
    <serving-add/>
    <serving-update/>
  </div>
</template>

<script>
import eventBus from "../../../js/eventBus";
import Global from "../../../js/global";
import ServingAdd from "./ServingAdd";
import ServingUpdate from "./ServingUpdate";

export default {
  name: "Serving",
  components: {ServingAdd, ServingUpdate},
  data() {
    return {
      title: '服务列表',
      loading: true,
      search: '',
      list: {},
    }
  },
  methods: {
    add() {
      eventBus.$emit("servingAdd")
    },
    update(row) {
      eventBus.$emit("servingUpdate", row)
    },
    refresh() {
      this.list = null;
      this.getList();
    },
    getList(condition) {
      this.loading = true;
      const that = this;
      this.axios.get(Global.SERVER_ADDRESS + "/servings/list", {}).then(rs => {
        that.list = rs.data
      })
      this.loading = false;
    },
    del(id) {
      this.axios.delete(Global.SERVER_ADDRESS + "/servings/" + id)
        .then(rs => {
          this.successMsg(rs.message);
          this.refresh();
        })
    },
    delOpen(row) {
      const that = this;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          that.del(row.id)
        }
      ).catch(function (error) {
        console.log(error)
        that.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.getList();
    });
  }
}
</script>

<style scoped>

</style>

