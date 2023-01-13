<template>
    <div id="Software">
        <h3>Rooftop Power Station of Dalian PPEDL Energy Co., Ltd</h3>
        <div class="image"><img src="../assets/img/cases/dalian.jpg" /></div>
        <p>Zero input. Clean energy consumes more than 95% of the total energy consumption, saving about 1630 tons of coal per year. Reduce CO2 emissions by about 2930 tons per year.</p>
        
    </div>

</template>
<script>
export default {
    name: 'Software',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
#Software{
    text-align: center;
}
.image{
    text-align: center;
    display: grid;
    place-items: center;
    margin: 50px auto;
}
#Software p{
    text-align: left;
}
img{
width:70%;   
height: 300px;
}
</style>
