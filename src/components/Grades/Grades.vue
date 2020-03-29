<template>
    <div class="grades d-flex justify-content-center align-items-center flex-column">
        <div>
            <h2>Front-end Interview</h2>
        </div>
        <ul class="m-0 p-0 list-unstyled d-flex">
            <li v-for="grade in grades" :key="grade" class="grade text-center" @click="setSelectedGrade(grade)" :class="selectGrade == grade ? 'active' : ''">
                <router-link :to="{name: grade}">
                    <span>{{grade}}</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            grades:['Intern','Junior','Middle','Senior','Lead'],
            selectGrade:''
        }
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
    .active{
        background: #5a0bd8;
        border-color: #8fff62;
    }
</style>