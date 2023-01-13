<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <div class="page-header">
                    <h1>News</h1>
                </div>

            </div>



            <div class="article" v-for="(item, index) in newsList" :key="index" @click="NewsClick(item.id)"
                v-if='index=="000"'>
                <h1 class="p-title">{{ item.title }}</h1>
                <div class="attribute">
                    Post Time: {{ item.date }}
                    Views: {{ item.click }}
                </div>
                <p class="p-content">{{ item.introduce }}</p>
            </div>

       

            <div class="show-comment list-group" v-for="(item, index) in commentList" :key="index">
                <div class="list-group-item">
                    <h4 class="list-group-item-heading">{{ item.name }}</h4>
                    <p class="list-group-item-text">{{ item.content }}</p>
                    <p class="list-group-item-text">{{ item.time }}</p>
                </div>
            </div>



            <div class="add-comment">
                <form role="form">
                    <div class="form-group">
                        <label for="exampleInputName">Name</label>
                        <input type="text" class="form-control" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Comment</label>
                        <textarea class="form-control" rows="3" placeholder="Add new comment"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">Submit</button>
                    </div>


                </form>
            </div>







        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
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

                }, {
                    id: '002',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'First, we must recognize that mobile device users do not have a huge impact on the mobile business, which is an undeniable fact that important. Electricity supplier website multichannel marketing lead single trading day has left us. Mobile provider in order to seize these mobile users, we must change the method of personality, rather than waiting and reacting to the transaction. On promotion channels, usually choose a single approach, such as e-mail or offline the ultimate mobile application on the need to maintain the degree of time online. They failing too lazy to direct mobile users to provide benefits and value of services, it is based on more indirect user activities such as login or access a URL. 2, highly integrated Have to say, the web and mobile clients seamlessly together which is something of a landmark. Service-oriented architecture that allows different applications to communicate with each other like never did in the past. Integrate various resources to provide customers with value, which is the key to moving electricity supplier. Online that provide customers with promotions, for promotion effect is not significant, but it has a special meaning in the mobile network. Now is the time to allow players outside the app phone concern, can provide more value to their partners and other integration. 3, socialization Socialization has been considered mobile phone hardware killer app. Combined electricity supplier and mobile clients, must have two characteristics of marketing and promotional activities, while still allowing users to set up a group to share social media comments. Through creative ways to make consumers and their network systems involved, including those based on self-organizing network location, demographics and behavior (adhocnetworks). This is critical. 4, the game of Do not underestimate those simple games and badges cumulative score of the game, which allows the potential of e-commerce products have been effectively carried out. Games of the electricity supplier is highly relevant, since it can even be widespread use of traditional electricity supplier website. It improve the loyalty of mobile phone users have a close relationship, because those users highly attracted to the target, the impulse to buy yet. If the "play" the good, the game between the upstart technology can create winners and business, this is an important distinction. 5, consumer awareness of context Compared to computers, mobile phones biggest advantage lies in its ability to provide context. Whether through a user logs to track their location, or the delivery of dynamic and custom menus, or simply a user behavior and relatively popular products are mixed, when users use mobile e-commerce applications for consumers based on the users preference understanding and action taken by the context, is a key factor in its success.',
                    date: '2017-09-09 05:35:47',
                    year: '2019',
                    click: '345'
                }, {
                    id: '003',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019'
                }, {
                    id: '004',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019'
                }, {
                    id: '005',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019'
                }, {
                    id: '006',
                    title: 'Mobile providers to succeed six strategies',
                    introduce: 'According to the relevant data show that China probably has more than 4000 million businesses, of which there are about thirty to forty percent of businesses to find out about online marketing, in which companies only about 10 percent is trying to use the network marketing expand their business, and they derive a profit, with the rapid development of the Internet, to join the network marketing companies will gradually increase. Experts had predicted: e-commerce, Internet marketing will sweep the globe. This shows the problem: Internet marketing is the future trend of development, who should now implement, whoever first obtain business opportunities and wealth',
                    date: '05-24',
                    year: '2019'
                }
            ],
            commentList: [
                {
                    id: '1',
                    name: 'Tom',
                    content: 'Awesome!',
                    time: '2019-05-03 09:34:23'

                },
                {
                    id: '2',
                    name: 'Jerry',
                    content: ':)',
                    time: '2019-05-03 09:34:23'

                },
                {
                    id: '3',
                    name: 'Perry',
                    content: 'Wow',
                    time: '2019-05-03 09:34:23'

                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    methods: {

    }
}
</script>
<style scoped>
#title {
    font-weight: bold;
    font-size: large;
}

.p-content {
    font-size: large;
    margin-top: 20px;
    margin-bottom: 30px;
    text-align: justify;
    font-family: futura;
}

.attribute {
    margin-top: 20px;
}
</style>

