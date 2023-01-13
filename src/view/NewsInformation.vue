<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="page-header">
                <h1>NEWS </h1>
                <h3><small>Company News</small></h3>
            </div>
            <!--
            <div class="nav container text-center">
                <a href="#" class="active">公司新闻</a>
                <a href="#">行业动态</a>
            </div>
            -->

            <div class="panel panel-default col-xs-12 col-sm-6 col-md-4 wow slideInUp" v-for="(item, index) in newsList"
                :key="index">
                <div class="panel-body" id="title">{{ item.title }}</div>
                <div class="panel-body"><!--<img src="../assets/img/clients/client10.png" alt="">-->

                    <img :src="item.img" alt="News Image">

                </div>
                <div class="panel-body" id="panel-body-content">{{ item.introduce.slice(0, 200) + "..." }}
                </div>
                <div class="panel-footer">
                    <div>Post Time: {{ item.date }}</div>
                    <div>Views: {{ item.click }}</div>

                    <button style="float:right" type="button" class="btn btn-success" @click="jump">Read More</button>

                </div>
            </div>








        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
import axios from 'axios';
export default {
    name: 'NewsInformation',

    data() {
        return {

            newsList: [
                {
                    id: '001',
                    title: 'One article to understand the 2021 photovoltaic industry',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth.',
                    date: '2015-09-09 05:35:47',
                    year: '2015',
                    click: '708',
                    img: require("../assets/img/banners/banner1.jpg"),
                    path: "/",

                }, {
                    id: '002',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'First, we must recognize that mobile device users do not have a huge impact on the mobile business, which is an undeniable fact that important. Electricity supplier website multichannel marketing lead single trading day has left us. Mobile provider in order to seize these mobile users, we must change the method of personality, rather than waiting and reacting to the transaction. On promotion channels, usually choose a single approach, such as e-mail or offline the ultimate mobile application on the need to maintain the degree of time online. They failing too lazy to direct mobile users to provide benefits and value of services, it is based on more indirect user activities such as login or access a URL. 2, highly integrated Have to say, the web and mobile clients seamlessly together which is something of a landmark. Service-oriented architecture that allows different applications to communicate with each other like never did in the past. Integrate various resources to provide customers with value, which is the key to moving electricity supplier. Online that provide customers with promotions, for promotion effect is not significant, but it has a special meaning in the mobile network. Now is the time to allow players outside the app phone concern, can provide more value to their partners and other integration. 3, socialization Socialization has been considered mobile phone hardware killer app. Combined electricity supplier and mobile clients, must have two characteristics of marketing and promotional activities, while still allowing users to set up a group to share social media comments. Through creative ways to make consumers and their network systems involved, including those based on self-organizing network location, demographics and behavior (adhocnetworks). This is critical. 4, the game of Do not underestimate those simple games and badges cumulative score of the game, which allows the potential of e-commerce products have been effectively carried out. Games of the electricity supplier is highly relevant, since it can even be widespread use of traditional electricity supplier website. It improve the loyalty of mobile phone users have a close relationship, because those users highly attracted to the target, the impulse to buy yet. If the "play" the good, the game between the upstart technology can create winners and business, this is an important distinction. 5, consumer awareness of context Compared to computers, mobile phones biggest advantage lies in its ability to provide context. Whether through a user logs to track their location, or the delivery of dynamic and custom menus, or simply a user behavior and relatively popular products are mixed, when users use mobile e-commerce applications for consumers based on the users preference understanding and action taken by the context, is a key factor in its success.',
                    date: '05-24',
                    year: '2019',
                    img: require("../assets/img/banners/banner2.jpg"),
                    path: "",
                    click: '256',
                }, {
                    id: '003',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019',
                    img: require("../assets/img/banners/banner3.jpg"),
                    path:'',
                }, {
                    id: '004',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019',
                    img: require("../assets/img/banners/banner4.jpg")
                }, {
                    id: '005',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019',
                    img: require("../assets/img/banners/banner1.jpg")
                }, {
                    id: '006',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019',
                    img: require("../assets/img/banners/banner2.jpg")
                }
            ]

        }
    },


    mounted() {
        var wow = new WOW();
        wow.init();
        //wow.sync();

        /*
                let data = axios.get('http://chenyu01.com/api/v1/topic/photo/1').then(
                    function (response) {
                        that.newsList = response.data;
                        console.log(data);
                    },
                    function (error) {
                        console.log(error);
                    }
                )
                data1 => console.log(data)).catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
                    */


    },
    methods: {



        jump() {
            //this.$router.push("/cart")
            //传递的参数用{{ $route.query.goodsId }}获取
            this.$router.push({ path: '/newsdetails?id=001' })
            //this.$router.go(-2)
            //后退两步
        }

    }

}



</script>
<style scoped>
.page-header {
    text-align: center;
}

.panel {
    padding: 0;
    padding-bottom: 10px;
    
}

.panel img{
    width:200px;
    height: 120px;
}

#panel-body-content{
    height: 130px;
}



#title {
    font-weight: bold;
    font-size: large;
    height: 100px;
}


.panel-footer {
    background-color: white;
}




.nav {
    margin: 20px 0;
}

.nav>a {
    display: inline-block;
    text-decoration: none;
    width: 120px;
    height: 45px;
    line-height: 45px;
    color: #333;
    border: 1px solid #333;
}

.nav>a.active {
    color: #1e73be;
    border-color: #1e73be;
}

.nav>a:hover {
    color: #1e73be;
    border-color: #1e73be;
}
</style>

