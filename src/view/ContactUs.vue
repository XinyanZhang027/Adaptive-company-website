<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">Contact Us</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">Name</label>
                <div class="col-sm-10 col-xs-12">
                  <input type="text" class="form-control" id="name" placeholder="Please input your name">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="email" placeholder="Please input your email">
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">Telephone</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="tel" placeholder="Please input your telephone">
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">Content</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="content" rows="8" placeholder="Please input comment"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default btn-block">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <!--<div id="map" class="wow zoomIn"></div>-->
            <div id="gmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8178467920857!2d-123.12684038424474!3d49.27984867889234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d50d6165ff%3A0x2c690537ab9a256c!2s808%20Nelson%20St%2C%20Vancouver%2C%20BC%20V6Z%202H1!5e0!3m2!1sen!2sca!4v1673289281067!5m2!1sen!2sca"
              width="100%" height="370px" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(-123.124652, 49.279845); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "Nelson Square" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "Our office",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}

.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}

#map {
  width: 100%;
  height: 365px;
}

#gmap{
  width: 100%;
  margin: 0px auto;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
</style>