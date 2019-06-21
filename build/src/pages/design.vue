<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        DESIGN
        <small>Design Portfolio</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li class="active">Design</li>
      </ol>
    </section>
    <div class="row">
      <section class="content">
        <!-----Weather Information------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/lg/01.html" target="_blank"><img class="" src="img/port_img_37.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="#">Weather Information</a></dd>
            <dd>
              <label class="label bg-orange-active"><i class="fa fa-check-square-o"></i>Design</label>
              <label class="label label-warning"><i class="fa fa-check-square-o"></i>Illustration</label>
            </dd>
            <div class="non-other-page">
            </div>
          </dl>
        </div>
        <!-----ESM------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/globallinkers/esm/01.html" target="_blank"><img class="" src="img/port_img_20.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="#">ESM</a></dd>
            <dd>
              <label class="label bg-orange-active"><i class="fa fa-check-square-o"></i>Design</label>
              <label class="label label-warning"><i class="fa fa-check-square-o"></i>Illustration</label>
            </dd>
            <div>
              <a href="http://amorray.cafe24.com/portfolio/globallinkers/esm/02.html" target="_blank">1</a>
              <a href="http://amorray.cafe24.com/portfolio/globallinkers/esm/03.html" target="_blank">2</a>
            </div>
          </dl>
        </div>
        <!-----LG실트론 에너지경영시스템------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/ecosian/LG/01.html" target="_blank"><img class="" src="img/port_img_13.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="http://amorray.cafe24.com/portfolio/ecosian/LG/01.html">LG실트론 에너지경영시스템</a></dd>
            <dd>
              <label class="label bg-orange-active"><i class="fa fa-check-square-o"></i>Design</label>
            </dd>
            <div>
              <a href="http://amorray.cafe24.com/portfolio/ecosian/LG/02.html" target="_blank">1</a>
            </div>
          </dl>
        </div>
        <!-----솔브레인 에너지경영시스템------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/ecosian/soulbrain/01.html" target="_blank"><img class="" src="img/port_img_07.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="http://amorray.cafe24.com/portfolio/ecosian/soulbrain/01.html">솔브레인 에너지경영시스템</a></dd>
            <dd>
              <label class="label bg-orange-active"><i class="fa fa-check-square-o"></i>Design</label>
            </dd>
            <div>
              <a href="http://amorray.cafe24.com/portfolio/ecosian/soulbrain/02.html" target="_blank">1</a>
            </div>
          </dl>
        </div>
        <!-----삼성전자 빌딩 에너지 시뮬레이터------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/ecosian/samsung/03.html" target="_blank"><img class="" src="img/port_img_11.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="http://amorray.cafe24.com/portfolio/ecosian/samsung/03.html">삼성전자 빌딩 에너지 시뮬레이터</a></dd>
            <dd>
              <label class="label bg-orange-active"><i class="fa fa-check-square-o"></i>Design</label>
            </dd>
            <div>
              <a href="http://amorray.cafe24.com/portfolio/ecosian/samsung/01.html" target="_blank">1</a>
              <a href="http://amorray.cafe24.com/portfolio/ecosian/samsung/02.html" target="_blank">2</a>
            </div>
          </dl>
        </div>
        <!-----동물일러스트 개발(작업중)------>
        <div class="list-el">
          <dl>
            <dt><a href="http://amorray.cafe24.com/portfolio/globallinkers/illust01.html" target="_blank"><img class="" src="img/port_img_25.png" alt="portfolio images"></a></dt>
            <dd class="list-title"><a href="#">동물일러스트(작업중)</a></dd>
            <dd>
              <label class="label label-warning"><i class="fa fa-check-square-o"></i>Illustration</label>
            </dd>
            <div class="non-other-page">
            </div>
          </dl>
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