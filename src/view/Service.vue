<template>
    <div id="Service">
        <div class="container text-center">
            <div class="page-header">
                <h1>PROFESSIONAL SERVICES </h1>
                <h3><small>Serving our customers with full dedication</small></h3>
            </div>
        </div>

        <div class="container">
            <div class="Service-container row">
                <div class="Service-item col-xs-12 col-sm-6 col-md-4 wow slideInUp" v-for="(item, index) in serviceList"
                    :key="index" @click="ServiceClick(item.id)">
                    <div class="Service-item-wrapper">
                        <div class="Service-item-top">
                            <h4>{{ item.title }}</h4>
                            <i></i>
                            <p>{{ item.eng_title }}</p>
                        </div>
                        <div class="Service-item-img">
                            <img :src="item.img" alt="Service">
                        </div>
                        <div class="Service-item-border"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'Service',
    data() {
        return {
            serviceList: [
                {
                    id: 'section-1',
                    title: 'SaaS Software Development',
                    eng_title: '',
                    img: require('@/assets/img/service/service1.png')
                }, {
                    id: 'section-2',
                    title: 'EV Charging Robot',
                    eng_title: 'Outsourcing',
                    img: require('@/assets/img/service/service2.svg')
                }, {
                    id: 'section-3',
                    title: 'Solar Panel Project Development',
                    eng_title: 'eCommerce Site',
                    img: require('@/assets/img/service/service3.png')
                }, {
                    id: 'section-4',
                    title: 'Virtual Smart Power Stations',
                    eng_title: 'iOS App Dev',
                    img: require('@/assets/img/service/service4.png')
                }, {
                    id: 'section-5',
                    title: 'Space Photovoltaic Power Station',
                    eng_title: 'iOS App Dev',
                    img: require('@/assets/img/service/service5.svg')
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
    methods: {
        ServiceClick(id) {
            this.$router.push({
                name: 'servicedetail',
                params: {
                    id: id
                }
            })
        }
    }
}
</script>
<style scoped>
.Service-container {
    padding: 30px 50px;
}

.Service-item {
    margin-bottom: 50px;
}

.Service-item-wrapper {
    cursor: pointer;
    background: rgba(244, 244, 244, 1);
    overflow: hidden;
    position: relative;
    background-color: white;

}

.Service-item-top {
    width: 100%;
    height: 120px;
    padding: 30px;
    text-align: center;
}

.Service-item-top>i {
    display: inline-block;
    width: 0px;
    height: 2px;
    background: green;
}

.Service-item-top>p {
    color: white;
    opacity: 0;
    transform: translateY(10px);
    transition: all .5s ease;
}

.Service-item-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    /*margin: 0px auto 20px auto;*/
    margin: 20px auto;


}

.Service-item-img img {
    width: 100%;
    transition: all 0.5s ease;
}

.Service-item-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999999;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    border: 0;
    opacity: 0;
    border-radius: 0%;
    border: 2px solid green;
}

.Service-item-wrapper:hover .Service-item-top>i {
    opacity: 0;
}

.Service-item-wrapper:hover .Service-item-top>p {
    opacity: 1;
    transform: translateY(-10px);
}

.Service-item-wrapper:hover .Service-item-img>img {
    transform: scale(1.1, 1.1);
}

.Service-item-wrapper:hover>.Service-item-border {
    opacity: 1;
    width: 100%;
    height: 100%;
}
</style>
