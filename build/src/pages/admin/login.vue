<template>
  <section class="content">
    <div class="login-box">
      <div class="login-logo">
        <a href="/"><b>Admin</b>LTE</a>
      </div>
      <!-- /.login-logo -->
      <div class="login-box-body">
        <form @submit.prevent="handleSubmit">
          <div v-show="status.loginFailure">
            <p class="bg-danger text-warning">
              <small>비밀번호가 틀립니다.</small>
            </p>
          </div>
          <div class="form-group has-feedback">
            <input v-model="username" name="username" class="form-control" placeholder="Enter your ID"
                   v-validate="'required'" :class="{ 'is-invalid': submitted && !username }">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            <div v-show="submitted && !username" class="invalid-feedback text-danger">ID를 입력하세요</div>
          </div>
          <div class="form-group has-feedback">
            <input v-model="password" name="password" class="form-control" placeholder="Enter your password"
                   type="password" v-validate="'required|min:6'"
                   :class="{ 'is-invalid': submitted && !password }">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            <div v-show="submitted && !password" class="invalid-feedback text-danger">비밀번호를 입력하세요</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" :disabled="status.loggingIn">Login</button>
            <router-link to="/register" class="btn btn-link">Register</router-link>
          </div>
          <div class="social-auth-links text-center">
            <div class="bg-warning" v-if="errors.has('password')">{{errors.first('password')}}</div>
          </div>
        </form>
        <!-- /.social-auth-links -->
      </div>
      <!-- /.login-box-body -->
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    data() {
      return {
        username: '',
        password: '',
        submitted: false
      }
    },
    computed: {
      ...mapState('account', ['status'])
    },
    methods: {
      ...mapActions('account', ['login']),
      handleSubmit(e) {
        this.$validator.validateAll();
        this.submitted = true;
        const {username, password} = this;
        if (username && password) {
          this.login({username, password});
        }
      }
    }
  };
</script>

