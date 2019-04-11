<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'
import Blogs from './Blogs'

export default {
  name: 'app',
  components: {
    Navbar: Navbar, // if both names the same can be just: Navbar
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data () {
    return {
      title: 'my first Vue app! wooo ! :)',
      friends: [
                { name: 'Mario', online: true},
                { name: 'Luigi', online: false},
                { name: 'Toad', online: true},
                { name: 'Bowser', online: false}
            ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
    }
  }
}
</script>

<style>
h1 {
  font-weight: normal;
  color: #444;
  text-align: center;
}
</style>
