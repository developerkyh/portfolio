<template>
  <div>
    <div class="modal fade" id="modal-modify">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Modify</h4>
          </div>
          <div class="modal-body">
            <form id="upload-file" class="form-horizontal" @submit.prevent="writeSubmit" enctype="multipart/form-data">
              <div class="form-group">
                <label class="col-sm-2 control-label">Category</label>
                <div class="col-sm-10">
                  <select id="list.listCategory" @change="onChange($event)" v-model="list.category"
                          v-validate="'required'" name="category" class="form-control">
                    <option disabled value="">Please select one</option>
                    <optgroup label="PUBLISHING">
                      <option>pc</option>
                      <option>responsive</option>
                      <option>jquery</option>
                    </optgroup>
                    <optgroup label="FRAME WORK">
                      <option>vuejs</option>
                    </optgroup>
                    <optgroup label="DESIGN">
                      <option>web</option>
                    </optgroup>
                  </select>
                  <div v-show="submitted && !list.category" class="invalid-feedback text-danger">카테고리를 입력하세요</div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">Subject</label>
                <div class="col-sm-10">
                  <input type="text" value="subject" v-model="list.subject" v-validate="'required'" name="subject"
                         class="form-control"
                         maxlength="24" placeholder="max number 24">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">Content</label>
                <div class="col-sm-10">
                  <textarea v-model="list.contents" v-validate="'required'" name="contents" class="form-control"
                            maxlength="48" placeholder="max number 48"></textarea>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label">File</label>
                <div class="form-group">
                  <input type="file" id="file" name="file" ref="file" accept=".jpg, .jpeg, .gif, .png"
                         class="custom-file-input" @change="previewFiles($event)">
                </div>
              </div>
              <div v-for="(link, index) in list.links">
                <div class="form-group">
                  <label class="col-sm-2 control-label">Link({{index + 1}})</label>
                  <div class="col-sm-8">
                    <input type="text" v-model="list.links[index]" id="links" name="links" class="form-control">
                    <div v-show="submitted && !list.links[0]" class="invalid-feedback text-danger">대표 링크를 입력하세요</div>
                    <div v-show="index === 0 && !list.links[0]" class="invalid-feedback text-danger">최소 1개의 링크 입력은 하세요
                    </div>
                    <div v-show="index === 9" class="invalid-feedback text-danger">링크 입력은 10개 까지만 가능합니다.</div>
                  </div>
                  <div class="col-sm-1">
                    <button type="button" v-on:click="addNewApartment(index)" class="btn btn-block btn-success">+</button>
                  </div>
                  <div class="col-sm-1">
                    <button type="button" v-on:click="removeApartment(index)" class="btn btn-block btn-danger">-
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group hidden">
                <label class="col-sm-2 control-label">Image Url</label>
                <div class="col-sm-10">
                  <input type="text" v-model="list.imageUrl" id="imageUrl" name="imageUrl" class="form-control">
                </div>
              </div>
              <div class="form-group hidden">
                <label class="col-sm-2 control-label">Created By</label>
                <div class="col-sm-10">
                  <input type="text" v-model="list.createdBy" id="createdBy" name="createdBy" class="form-control">
                </div>
              </div>
              <div class="form-group hidden">
                <label class="col-sm-2 control-label">Created By Id</label>
                <div class="col-sm-10">
                  <input type="text" v-model="list.createdById" id="createdById" name="createdById"
                         class="form-control">
                </div>
              </div>
              <div class="form-group hidden">
                <label class="col-sm-2 control-label">Date</label>
                <div class="col-sm-10">
                  <input type="text" v-model="list.date" id="date" name="date" class="form-control">
                </div>
              </div>
              <pre>{{id}}</pre>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal" v-on:click="clearReset">Close
            </button>
            <button type="button" class="btn btn-success" v-on:click="writeSubmit">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
              Start Upload
            </button>
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapActions, mapState} from 'vuex'
  import { bus } from '../app.vue'


  Vue.component('modal-modify', {
    template: 'modal-modify'
  });

  export default {
    data() {
      return {
        id: 0,
        category: '',
        subject: '',
        contents: '',
        links: '',

        list: {
          id: 0,
          category: '',
          subject: '',
          contents: '',
          file: [],
          imageUrl: '',
          createdBy: '',
          createdById: '',
          links: [''],
          date:''
        },
        submitted: false
      }
    },
    created() {
      bus.$on('list', obj => {
        this.list.id = obj.id;
        this.list.category = obj.category;
        this.list.subject = obj.contents;
        this.list.contents = obj.contents;
        this.list.links = obj.links;
      });
    },
    computed: {
      ...mapState('account', ['status'])
    },
    methods: {

      ...mapActions('account', ['update']),

      addNewApartment: function (index) {
        if (this.list.links.length < 10 && this.list.links[index] !== '') {
          this.list.links.push(Vue.util.extend('', this.links))
        }
      },
      removeApartment: function (index) {
        if (this.list.links.length > 1) Vue.delete(this.list.links, index);
      },
      previewFiles($event) {
        this.list.file = $event.target.files[0];
      },
      onChange($event) {
        this.list.category = $event.target.value;
      },
      writeSubmit(e) {
        this.submitted = true;
        this.$validator.validate().then(valid => {
          if (valid) {
             this.update(this.list);
            $('#modal-modify').modal('hide');
          }
        });
      },
      clearReset : function () {
        Object.assign(this.$data, this.$options.data.call(this));
      }
    }
  }
</script>
