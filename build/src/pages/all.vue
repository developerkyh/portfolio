<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        ALL
        <small>ALL PORTFOLIO</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li class="active">All</li>
      </ol>
    </section>
    <div class="row">
      <section class="content">
        <div id="list-view">
          <list-view></list-view>
        </div>
      </section>
      <!-- /.content -->
    </div>
  </div>
</template>
<script>
  import list from '../components/list.vue';

  export default {
    components: {
      'list-view': list,
    }
  }
</script>