<template>
    <div>
        <van-tabbar v-model="active" active-color="red" inactive-color="#000">
            <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/Pointes" icon="points">分类</van-tabbar-item>
            <van-tabbar-item to="/shop" icon="cart-o">购物车</van-tabbar-item>
            <van-tabbar-item to="/me" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:""
        }
    },
  methods: {

  }
}
</script>
<style>
    
</style>