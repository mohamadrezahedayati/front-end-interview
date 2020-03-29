import Grades from '@/components/Grades/Grades.vue'
import Intern from '@/components/Grades/Intern/Intern'
import internHtml from '@/components/Skills/html/intern-html.vue'
import juniorHtml from '@/components/Skills/html/junior-html.vue'
import juniorCss from '@/components/Skills/css/junior-css.vue'
import internCss from '@/components/Skills/css/intern-css.vue'
import javascript from '@/components/Skills/javascript/javascript.vue'
export const routes = [
    {
        path: "/",
        component:Grades
    },
    {
        name:'Intern',
        path:'/intern',
        component:Intern,
        children:[
            {
                name:'intern-html',
                path:'html',
                component:internHtml
            },
            {
                name:'intern-css',
                path:'css',
                component:internCss
            },
            {
                name:'intern-javascript',
                path:'javascript',
                component:javascript
            }
        ]
    },
    {
        name:'Junior',
        path:'/junior',
        component:Intern,
        children:[
            {
                name:'junior-html',
                path:'html',
                component:juniorHtml
            },
            {
                name:'junior-css',
                path:'css',
                component:juniorCss
            },
            {
                name:'junior-javascript',
                path:'javascript',
                component:javascript
            }
        ]
    }
];
