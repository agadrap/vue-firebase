<template>
    <div class="blogs">
        <input type="text" v-model="searchTerm">
        <h2>{{ blogTitle }}</h2>
        <button @click="changeTitle">Change Title</button>
        <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | snippet }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios' //in node modules
export default {
    name: 'Blogs',
    data() {
        return {
            blogTitle: 'Blogs',
            posts: [],
            searchTerm: ''
        }
    },
    methods: {
        changeTitle(){
            this.blogTitle = 'Amazing Blog Site'
        }
    },
    computed: {
        filteredPosts(){
            return this.posts.filter(post => {
                return post.title.match(this.searchTerm)
            })
        }
    },
    //beforeCreate(){
    //    alert('beforeCreate hook')
    //},
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            console.log(response)
            this.posts = response.data
        }).catch(err=> {
            alert(err)
        })

    }
    //beforeUpdate(){
    //    alert('before update hook')
    //}
}
</script>

<style>

</style>

