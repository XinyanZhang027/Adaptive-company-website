<template>
    <div id="Software" class="container">
        <div class="row">
            <div id="left" class="col-md-4 col-xs-12">
                <ul class="left-container wow bounceInLeft">
                    <p>Past Cases</p>
                    <li v-for="(item,index) in softwareList" :key="index">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div id="right" class="col-md-8 col-xs-12  wow bounceInRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'Software',
    data(){
        return{
            softwareList: [
                {
                    path: '/software/coca_cola',
                    name: 'Rooftop Power Station of COFCO Coca-Cola Beverages Ltd.'
                },{
                    path: '/software/dalian_ppedl',
                    name: 'Rooftop Power Station of Dalian PPEDL Energy Co., Ltd'
                },{
                    path: '/software/huanghai',
                    name: 'Rooftop Power Station of HuangHai Shipbuilding Co., Ltd.'
                },{
                    path: '/software/zhengda',
                    name: 'Rooftop Power Station of Zhengda CP food(Suqian) CO.,Ltd.'
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    width: 100%;
    margin: 0 auto;
    border: 1px solid #53A748;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background: #53A748;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
}
.left-container>li {
  text-align: center;
  height: 38px;
  /*line-height: 38px;*/
  margin: 0;
  border-top: 1px solid #474747;
}
.left-container>li>a{
    text-decoration: none;
}
.left-container>li:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
</style>

