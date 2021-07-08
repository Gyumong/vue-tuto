
import {computed} from 'vue'
import titles from '../post-data.json'

<template>
    <div class="root">
        <p>Showing{{filteredTitles.length}} results for "{{query}}"</p>
        <ul>
            <li v-for='title in filteredTitles' :key="title.Page">
                {{title.Name}}
            </li>>
        </ul>
</template>

export default {
    props:{
        query: String
    }
    setup(props,context){
        const filteredTitles = computed(()=>{
            return titles.filter(s=>s.Name.toLowerCase().includes(props.query.toLowerCase()))
        })
        return {
            filteredTitles
        }
    }
}