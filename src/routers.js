import Grades from '@/components/Grades/Grades.vue';
import showIncludeSkill from '@/components/Grades/showIncludeSkill/showIncludeSkill';
import showQustion from './components/Qusetions/containerQuestions';
export const routes = [
    {
        path: "/",
        component:Grades,
    },
    {
        name:'grade',
        path:'/:grade',
        component:showIncludeSkill,
        props:true
    },
    {
        name:'skill',
        path:'/:grade/:skill',
        component: showQustion,
        props:true
    },
];
