<template>
    <div>
        <nav>
           <ul>
              <router-link tag="li" to="/shouye" activeClass="active">首页</router-link>
              <router-link tag="li" to="/fenlei" activeClass="active">分类</router-link>
               <router-link tag="li" to="/gouwuche" activeClass="active">购物车</router-link>
                <router-link tag="li" to="/xiaoxi" activeClass="active">消息</router-link>
                 <router-link tag="li" to="/wo" activeClass="active">我</router-link>
              
           </ul>
        </nav>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.active{

    color:red;
}
ul li {
    list-style: none;
}
nav{
    position:fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: white;  
    ul{
        display: flex;
        li{
            flex: 1;
            line-height: 50px;
            text-align: center;
        }
    }
}

</style>