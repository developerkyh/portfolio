<template id="top-view">
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>P</b>T</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>PORT</b>FOLIO</span>
    </router-link>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->

      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!--
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li v-if="status.loggedIn" class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{account.user.firstName}} {{account.user.lastName}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="img/user2-160x160.jpg" class="img-circle" alt="User Image">
                <p>
                  {{account.user.firstName}} {{account.user.lastName}} - Web FE Developer
                  <small>{{account.user.createdDate}}</small>
                </p>
              </li>
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <router-link to="/logout" class="btn btn-default btn-flat" tag="a">Logout
                  </router-link>
                </div>
              </li>
            </ul>
          </li>
          <li v-if="status.loggedIn">
            <router-link to="/logout" tag="a">
              <i class="fa fa-power-off"></i>
            </router-link>
          </li>
          <li v-else>
            <router-link to="/admin" tag="a">
              <i class="fa fa-gears"></i>
            </router-link>
          </li>
        </ul>
      </div>
      -->
    </nav>
  </header>
</template>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'

  Vue.component('top-view', {
    template: 'top-view'
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
