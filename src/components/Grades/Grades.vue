<template>
    <div class="grades d-flex justify-content-center align-items-center flex-column">
        <div class="">
            <h2>Front-end Interview</h2>
        </div>
        <div class="">
            <ul class="m-0 p-0 list-unstyled d-flex">
                <router-link tag="li" v-for="grade in grades" :key="grade" class="grade text-center" :to="{name: 'grade' , params:{grade:grade}}">
                    <span>{{grade}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            grades:['intern','junior','middle','senior','lead'],
            selectGrade:''
        }
    },
    components:{
        
    },
    methods: {
        setSelectedGrade(item){
            this.selectGrade = item;
        }
    },
}
</script>

<style scoped lang="css">
    .grades{
        height: 100%;
    }
    .grade{
        background: #7045af;
        padding: 10px;
        width: 85px;
        height: 85px;
        display: flex;
        margin: 20px;
        border-radius: 50%;
        border: 2px white solid;
        box-shadow: 1px 3px 5px #000000c2;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .grade span{
        color: white;
    }
</style>