<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">About Us</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/about_img_en.png">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>CHENYU ENTERPRISES CANADA LTD.</h3>
                    <p class=".text-justify">ChenYu Canada is a fast-growing solar energy company that keeps creativity of everything we do.
We aim to build a clean, low-carbon, safe and efficient energy system.
We uphold the entrepreneurial spirit of integrity, excellence, service, and innovation
We respect the culture of the regions that we do business in, and we take responsibility for our actions.
We adhere to the spirit of our enterprise, and will hopefully benefit humankind.</p>
                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{

        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
    color:white;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
}
</style>

