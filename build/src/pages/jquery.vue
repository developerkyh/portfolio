<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                JQUERY
                <small>Jquery Portfolio</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
                <li>Publishing</li>
                <li class="active">Jquery</li>
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
        components : {
            'list-view': list,
        }
    }
</script>