import Grades from '@/components/Grades/Grades.vue'
import Intern from '@/components/Grades/Intern/Intern.vue'
import InternHtml from '@/components/Grades/Intern/Html/Html.vue'
import InternCss from '@/components/Grades/Intern/Css/Css.vue'
import InternJs from '@/components/Grades/Intern/Js/Js.vue'
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
                name:'html-intern',
                path:'html',
                component:InternHtml,
                meta:{
                    title:'html for intern'
                }
            },
            {
                name:'css-intern',
                path:'Css',
                component:InternCss,
                meta:{
                    title:'Css for intern'
                }
            },
            {
                name:'js-intern',
                path:'Js',
                component:InternJs,
                meta:{
                    title:'Js for intern'
                }
            },
        ]
    }
];
