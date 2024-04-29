import { createStore } from "vuex";

const skills = [
    {
        title:'FRONTEND',
        image:'',
        name:'Vue JS',
        desc:'JavaScript framework'
    },
    {
        title:'BACKEND',
        image:'',
        name:'Laravel',
        desc:'PHP framework'
    },
    {
        title:'STYLES',
        image:'',
        name:'Tailwind',
        desc:'css framework'
    },
    {
        title:'DATABASES',
        image:'',
        name:'MySQL',
        desc:'data storage'
    },
    {
        title:'Collaboration',
        image:'',
        name:'Github',
        desc:'collaboration tool'
    },
    {
        title:'CICD',
        image:'',
        name:'Docker',
        desc:'ease Continous Intergartion and Continous Development'
    }
]
const store = createStore({
    state:{

    },
    getters:{},
    actions:{},
    mutations:{},
    modules:{}
})

export default store;