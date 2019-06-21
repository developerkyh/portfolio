<template id="left-view">
  <!-- Left side column. contains the logo and sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!--
      <div v-if="status.loggedIn">
        <div class="user-panel">
          <div class="pull-left image">
            <img src="img/user2-160x160.jpg" class="img-circle" alt="User Image1">
          </div>
          <div class="pull-left info">
            <p>{{account.user.firstName}} {{account.user.lastName}}</p>
            <a href="#"><i class="fa fa-circle text-success"></i> {{account.user.createdDate}}</a>
          </div>
        </div>
      </div>
      -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <!-----
        <li class="header">ALL PORTFOLIO</li>
        <router-link to="/all" class="treeview" tag="li">
          <a>
            <i class="fa fa-dashboard"></i>
            <span>ALL</span>
            <span class="pull-right-container">
            <span class="label label-primary pull-right">4</span>
            </span>
          </a>
        </router-link>
        ------->
        <li class="header">CODING</li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-code"></i>
            <span>PUBLISHING</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link to="/pc" tag="li"><a><i class="fa fa-circle-o"></i>PC</a></router-link>
            <router-link to="/responsive" tag="li"><a><i class="fa fa-circle-o"></i> RESPONSIVE</a></router-link>
            <!--<router-link to="/jquery" tag="li"><a><i class="fa fa-circle-o"></i> JQUERY</a></router-link>-->
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-code"></i>
            <span>FRAME WORK</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link to="/vue-js" tag="li"><a><i class="fa fa-circle-o"></i> VUEJS</a></router-link>
            <!--<li><a href="#"><i class="fa fa-circle-o"></i> REACTJS</a></li>-->
            <!--<li><a href="#"><i class="fa fa-circle-o"></i> ANGULARJS</a></li>-->
          </ul>
        </li>
        <li class="header">DESIGNS</li>
        <router-link to="/design" class="treeview" tag="li">
          <a>
            <i class="fa fa-paint-brush"></i>
            <span>DESIGN</span>
            <span class="pull-right-container">
              <span class="label label-warning pull-right">6</span>
            </span>
          </a>
        </router-link>
      </ul>
      <!--
      <ul class="sidebar-menu">
        <li class="header">ADMINISTRATOR MENU</li>
      </ul>
      <div class="admin-btn-group">
        <p v-if="status.loggedIn" class="text-center">
          <router-link to="/admin" class="btn btn-app-modify" tag="a">
            <i class="fa fa-home"></i><span>ADMIN MAIN</span>
          </router-link>
          <a href="#" class="btn btn-app-modify fa-border" data-toggle="modal" data-target="#modal-write">
            <i class="fa fa-edit"></i><span>WRITE</span>
          </a>
        </p>
      </div>
      -->
      <div class="admin-btn-group">
        <p class="text-center">
          <router-link to="/admin" class="btn btn-app-modify" tag="a">
            <i class="fa fa-home"></i><span>ADMIN MAIN</span>
          </router-link>
          <a href="#" class="btn btn-app-modify fa-border" data-toggle="modal" data-target="#modal-write">
            <i class="fa fa-edit"></i><span>WRITE</span>
          </a>
        </p>
      </div>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'

  Vue.component('left-view', {
    template: 'left-view'
  });

  export default {
    computed: {
      ...mapState({
        account: state => state.account,
        users: state => state.users.all
      }),
      ...mapState('account', ['status']),
    }
  };
</script>