<template>
    <div>
        <nav>
            <ul>
                <li class="one">尖叫设计</li>
                <router-link class="two" to="/resou" tag="li"><input type="text" ></router-link>
                
            </ul>
        </nav>
     
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0
}
    nav{
        width: 100%;
        height: 50px;
       
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        line-height: 40px;
        .one {
            padding: 0 20px;
         width: 65px
        }
        .two{
            flex: 1; 
             
            padding-right: 20px;
            input{
                
                width: 100%;
            }
        }
    }

    }
</style>