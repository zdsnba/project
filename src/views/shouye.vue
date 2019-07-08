<template>
    <div>    
        <tou></tou>
        <ul>
            <li @click="who='tuijian'">推荐</li>
            <li @click="who='jiaju'">家具</li>
            <li @click="who='Furnishing'">家居</li>
            <li @click="who='huodong'">活动</li>
        </ul>
        <component :is="who"></component>
     
    </div>
</template>

<script>
    import tou  from './shouye/tou'
    import tuijian from './shouye/tuijian'
    import jiaju from './shouye/jiaju'
    import huodong from './shouye/huodong'
    import Furnishing from './shouye/Furnishing'
    export default {
        data() {
            return {
                who:"tuijian",
                
            }
        },
        components:{
           jiaju,
           tuijian,
           huodong,
            Furnishing,
            tou

        },

   
      }
</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        list-style: none;
        li{
          flex: 1  ;
          height: 40px;
          line-height: 40px;
          background: white;    
          
        }
    }
</style>