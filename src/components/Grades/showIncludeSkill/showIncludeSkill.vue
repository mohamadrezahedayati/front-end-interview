<template>
    <div class="intern d-flex justify-content-center align-items-center flex-column">
        <h2>
            {{this.$route.params.grade}}
        </h2>
        <ul class="m-0 p-0 list-unstyled d-flex">
            <li v-for="skill in skills" :key="skill" class="internItem text-center" @click="setSelectedSkill(skill)" :class="selectSkill == skill ? 'active' : ''">
                <router-link :to="{name: 'skill',params:{skill:skill}}">
                    <span>{{skill}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills:['html','css','javascript'],
            selectSkill:''
        }
    },
    components:{
    },
    methods: {
        setSelectedSkill(item){
            this.selectSkill = item;
        }
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
    .active{
        background: #5a0bd8;
        border-color: #8fff62;
    }
</style>