<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                ADMIN LOGOUT
                <small>ADMINISTRATOR</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-home"></i> Admin logout</a></li>
            </ol>
        </section>
        <div class="row">
            <section class="content">
                <div>
                    로그 아웃 되었습니다.
                </div>
            </section>
            <!-- /.content -->
        </div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'

    export default {
        created () {
            // reset login status
            this.logout();
        },
        methods: {
            ...mapActions('account', ['logout']),
        }
    };
</script>
