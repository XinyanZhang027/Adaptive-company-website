<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">Our Services</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 hidden-xs hidden-sm" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>Services</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <!--<small>/ {{item.eng_title}}</small>-->
            </h2>
            <div class="content" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "SaaS Software Development"
        },
        {
          id: "section-2",
          title: "EV Charging Robot"
        },
        {
          id: "section-3",
          title: "Solar Panel Project Development"
        },
        {
          id: "section-4",
          title: "Virtual Smart Power Stations"
        },
        {
          id: "section-5",
          title: "Space Photovoltaic Power Station"
        }
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "SaaS Software Development",
          eng_title: "Customize Software",
          content:
            "<h3></h3><p>Based on the characteristics of regional energy supply and demand and local energy consumption, through the integration of microgrid electricity</p>"
        },
        {
          id: "section-2",
          title: "EV Charging Robot",
          eng_title: "Outsourcing",
          content:
            "<h3></h3><p>EV charging robot is a platform that serves all parking spaces, not just a few. As more EVs hit the roads every day, EV charging demand can't keep up. New regulations on parking infrastructure are being introduced daily to try to meet that demand, at significant costs.</p>"
        },
        {
          id: "section-3",
          title: "Solar Panel Project Development",
          eng_title: "eCommerce Site",
          content:
            "<h3></h3><p>Relying on scientific and technological means such as intelligent industry, Internet of Things, big data, blockchain, etc.</p>"
        },
        {
          id: "section-4",
          title: "Virtual Smart Power Stations",
          eng_title: "iOS App Dev",
          content:
            "<h3></h3><p>A virtual smart power station is a cloud-based distributed power plant that aggregates the capacities of heterogeneous distributed energy resources (DER) for the purposes of enhancing power generation, as well as trading or selling power on the electricity market.</p>"
        },
        {
          id: "section-5",
          title: "Space Photovoltaic Power Station",
          eng_title: "iOS App Dev",
          content:
            "<h3></h3><p>Space Photovoltaic Power Station essentially consists of three elements: collecting solar energy in space with reflectors or inflatable mirrors onto solar cells or heaters for thermal systems. wireless power transmission to Earth via microwave or laser. receiving power on Earth via a rectenna, a microwave antenna.</p>"
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
      }
    });
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
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
  text-align: center;

}

.content-block .content{
  text-align: left;
  /*font-size: calc(1em + 0.3vw);*/
  font-size: 18px;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}
</style>
