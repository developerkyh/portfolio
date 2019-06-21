<template>
  <div id="app" class="wrapper">
    <div id="modalWrite">
      <modal-write-view></modal-write-view>
    </div>
    <div id="modalModify">
      <modal-modify-view></modal-modify-view>
    </div>
    <div id="top">
      <top-view></top-view>
    </div>
    <div id="left">
      <left-view></left-view>
    </div>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
    </div>
    <!-- /.content-wrapper -->
    <div id="foo">
      <foo-view></foo-view>
    </div>
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <!--
    <div id="right">
      <right-view></right-view>
    </div>
    -->
    <div class="control-sidebar-bg"></div>
  </div>
  <!-- ./wrapper -->
</template>
<script>

  import Vue from 'vue';
  import foo from './layouts/foo.vue';
  import top from './layouts/top.vue';
  import left from './layouts/left.vue';
  import modalWrite from './components/modal_write.vue';
  import modalModify from './components/modal_modify.vue';

  //import right from './layouts/right.vue'

  export const bus = new Vue();    //$on $emit

  export default {
    name: 'app',
    components: {
      'top-view': top,
      'foo-view': foo,
      'left-view': left,
      'modal-write-view': modalWrite,
      'modal-modify-view': modalModify,

      // 'right-view': right
    }
  }
</script>
