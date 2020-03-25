<template>
    <div class="intern d-flex justify-content-center align-items-center flex-column">
        <div>
            <h2>intern</h2>
        </div>
        <ul class="m-0 p-0 list-unstyled">
            <li class="internItem text-center">
                <router-link :to="{name: 'html-intern'}">
                    <span>html</span>
                </router-link>
            </li>
            <li class="internItem text-center">
                <router-link :to="{name: 'css-intern'}">
                    <span>css</span>
                </router-link>
            </li>
            <li class="internItem text-center">
                <router-link :to="{name: 'js-intern'}">
                    <span>javascript</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
    .intern{
        height: 100%;
    }
    .internItem{
        background: #7045af;
        padding: 10px;
        width: 130px;
        height: 130px;
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