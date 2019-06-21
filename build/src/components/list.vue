<template id="list-view">
  <div>
    <div class="list-el-wrap" v-if="lists.items" v-for="(list, index) in lists.items">
      <div class="list-el">
        <dl>
          <dt><a :href=list.links[index] target="_blank"><img :src=list.imageUrl class="" alt="portfolio images"></a></dt>
          <dd class="list-title"><a :href=list.links[index] target="_blank">{{list.subject}}</a></dd>
          <dd>{{list.contents}}</dd>
          <div>
            <a v-for="(link, index) in list.links" :href=list.links[index] target="_blank">{{index+1}}</a>
          </div>
        </dl>
        <div>
          <a data-toggle="modal" data-target="#modal-modify" @click="openModal(list)">
            <i class="fa fa-edit"></i>
          </a>
          <a>
            <i class="fa fa-trash-o"></i>
          </a>
        </div>
        <pre>{{list}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapState, mapActions} from 'vuex'
  import { bus } from '../app.vue'

  Vue.component('list-view',{
    template: 'list-view'
  });
  export default {
    computed: {
      ...mapState({
        account: state => state.account,
        lists: state => state.lists.all
      }),
    },
    created() {
      this.getAllList();
    },
    methods: {
      ...mapActions('lists', {
        getAllList: 'getAll'
      }),
      openModal(getList) {
        bus.$emit('list', getList)
      },
    }
  };
</script>

<style scoped>

</style>