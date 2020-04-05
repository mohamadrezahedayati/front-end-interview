<template>
    <div class="intern d-flex justify-content-center align-items-center flex-column h-100">
        <h2>
            {{grade}}
        </h2>
        <ul class="m-0 p-0 list-unstyled d-flex">
            <router-link tag="li"  v-for="skill in skills" :key="skill" class="internItem text-center" :to="{name: 'skill',params:{skill:skill}}">
                <span>{{skill}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills:['html','css','javascript'],
        }
    },
    props:['grade'],
    components:{
    },
    mounted() {
        console.log(this.$route)
    },
}
</script>

<style lang="css">
    .internItem{
        background: #7045af;
        padding: 10px;
        width: 100px;
        height: 100px;
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
    .internItem span{
        color: white;
    }
</style>