<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in carouselList" :key=item.id>
                <img :src="item.imgUrl" alt="" />
            </div>

        </div>
        <!-- 如果需要分页器  -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮  -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>

</template>

<script type="text/ecmascript-6">
    import Vue from 'vue'
    import Swiper from 'swiper'
    export default {
        name: 'Carousel',
        props: {
            carouselList: Array
        },
        mounted() {
            console.log('mounted', this.carouselList.length)
            /*// new Swiper('.swiper-container', {//有问题，会匹配所有此类名元素
               setTimeout(()=>{ 
                new Swiper(this.$refs.swiper,{//可以，只会匹配当前组件中的对应元素
                // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
             })
            },1000)*/

        },
        watch: { //监视banners的变化
            carouselList: {
                handler() {
                    //只有数组中有数据，才需要创建swiper对象
                    if(this.carouselList.length===0)return
                    console.log('watch carouselList', this.carouselList.length)
                    //将回调延迟到下次DOM更新循环之后执行， $nextTick（）在修改数据之后立即调用他，然后等待DOM更新
                    // this.$nextTick(()=>{
                    Vue.nextTick(() => {
                        //必须在轮播列表界面显示之后创建
                        new Swiper(this.$refs.swiper, { //可以，只会匹配当前组件中的对应元素
                            /*
                            数据绑定流程==》更新状态数据==》同步调用监视的回调函数==》界面就会自动`异步`更新*/
                            loop: true, // 循环模式选项

                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                            },

                            // 如果需要前进后退按钮
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },

                            // 如果需要滚动条
                            scrollbar: {
                                el: '.swiper-scrollbar',
                            },
                        })
                    })
                },
                immediate:true,//在初始显示时就默认执行一次，默认时false（只有数据改变才立即执行）
            },
            // carouselList(){//说明banners状态数据发生了改变，但界面还没有更新


            // }
        },
    }
</script>

<style lang="less" scoped>


</style>