<template>
    <div class="grades d-flex justify-content-center align-items-center flex-column">
        <div>
            <h2>Front-end Interview</h2>
        </div>
        <ul class="m-0 p-0 list-unstyled">
            <li class="grade text-center">
                <router-link :to="{name: 'Intern'}">
                    <span>Intern</span>
                </router-link>
            </li>
            <li class="grade text-center">
                <router-link :to="{name: 'Junior'}">
                    <span>Junior</span>
                </router-link>
            </li>
            <li class="grade text-center">
                <router-link :to="{name: 'Middle'}">
                    <span>Middle</span>
                </router-link>
            </li>
            <li class="grade text-center">
                <router-link :to="{name: 'Senior'}">
                    <span>Senior</span>
                </router-link>
            </li>
            <li class="grade text-center">
                <router-link :to="{name: 'Lead'}">
                    <span>Lead</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
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
    }
    .grade span{
        color: white;
    }
</style>