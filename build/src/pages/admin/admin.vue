<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        ADMIN
        <small>ADMINISTRATOR</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i> Admin</a></li>
      </ol>
    </section>
    <div class="row">
      <section class="content">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">{{account.user.firstName}}
              <small>주인님!! 환영합니다.</small>
            </h3>
            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            <p>
              <em v-if="users.loading">Loading users...</em>
            </p>
            <p>
              <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
            </p>
            <table class="table table-bordered table-hover">
              <colgroup>
                <col width="5%">
                <col width="20%">
                <col width="15%">
                <col width="15%">
                <col width="15%">
                <col width="25%">
                <col width="5%">
              </colgroup>
              <thead>
              <tr>
                <th>No.</th>
                <th>Object ID</th>
                <th>First name</th>
                <th>Last name</th>
                <th>User name</th>
                <th>Creation time</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              <tr v-if="users.items" v-for="user in users.items" :key="user.id">
                <td>{{user.userNumber}}</td>
                <td>{{user._id}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.username}}</td>
                <td>{{user.createdDate}}</td>
                <td>
                  <button type="button" class="btn col-sm-1 btn-block btn-warning" @click="deleteUser(user.id)">DELETE
                  </button>
                </td>
              </tr>
              </tbody>
              <!--                            <ul v-if="users.items">
                                              <li v-for="user in users.items" :key="user.id">
                                                  {{user.firstName + ' ' + user.lastName}}
                                                  <span v-if="user.deleting"><em> - Deleting...</em></span>
                                                  <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                                                  <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
                                              </li>
                                          </ul>-->
            </table>
          </div>
          <div class="box-footer">
            <div class="col-sm-1 pull-right">
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState({
        account: state => state.account,
        users: state => state.users.all
      })
    },
    created() {
      this.getAllUsers();
    },
    methods: {
      ...mapActions('users', {
        getAllUsers: 'getAll',
        deleteUser: 'delete'
      })
    }
  };
</script>