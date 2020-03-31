<template>
    <div class="containerQuestions">
        <component :is="this.$route.params.grade+'_'+this.$route.params.skill"></component>
    </div>
</template>
<script>
import intern_html from './intern/html/html'
import intern_css from './intern/css/css'
import intern_javascript from './intern/javascript/javascript'

import junior_html from './junior/html/html'
import junior_css from './junior/css/css'
import junior_javascript from './junior/javascript/javascript'

import middle_html from './middle/html/html'
import middle_css from './middle/css/css'
import middle_javascript from './middle/javascript/javascript'

import senior_html from './senior/html/html'
import senior_css from './senior/css/css'
import senior_javascript from './senior/javascript/javascript'

import lead_html from './lead/html/html'
import lead_css from './lead/css/css'
import lead_javascript from './lead/javascript/javascript'
export default {
    data() {
        return {
            questionRelated:{
                intern:{
                    html:{

                    },
                    css:{

                    },
                    javascript:{

                    }
                },
                junior:{
                    html:{

                    },
                    css:{

                    },
                    javascript:{

                    }
                },
                middle:{
                    html:{

                    },
                    css:{

                    },
                    javascript:{

                    }
                },
                senior:{
                    html:{

                    },
                    css:{

                    },
                    javascript:{

                    }
                },
                lead:{
                    html:{

                    },
                    css:{

                    },
                    javascript:{

                    }
                },
            }
        }
    },
    components:{
        intern_html,
        intern_css,
        intern_javascript,
        junior_html,
        junior_css,
        junior_javascript,
        middle_html,
        middle_css,
        middle_javascript,
        senior_html,
        senior_css,
        senior_javascript,
        lead_html,
        lead_css,
        lead_javascript
    },
    mounted() {
        console.log(this.$route)
    },
}
</script>

<style lang="css">
    .containerQuestions{
        height: 100%;
    }
</style>