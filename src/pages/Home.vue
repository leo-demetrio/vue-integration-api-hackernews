<template>
  <main>
    <div class="banner-area">
        <div class="content-area">
          <div class="content">
            <h1>Hacker News</h1>
            <h3>your tech world news site</h3>
          </div>
        </div>
    </div>

    <section class="container">
      <article v-for="(story,i) in stories" :key="i">
        <h3>{{story.data.title}}</h3>
        <div class="box-span">
        <span v-on:click="searchComments(story.data.id)" class="span-comments">comments: {{story.data.descendants}}</span>
        <span>score: {{ story.data.score }}</span>
        </div>
        <a :href="story.data.url">know more</a>
      </article>      
    </section>

  </main>

</template>

<script>
import api from '@/services/api';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      title: '',
      stories: [],
      comments: []
    }

  },
  mounted() {
    try {
        axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
        .then(response => {
          let results = response.data.slice(0, 20)
          results.forEach(idItem => {
            api.get(`item/${idItem}.json`)
            .then(response => {
              this.stories.push(response)
            })
          })
          console.log(this.stories)
        })
    }catch(e) {
      console.log(e)
    }
   },
   methods: {
     searchComments: function(id) {
        try {
        localStorage.setItem('id',id)
        return this.$router.push('/comments');
    }catch(e) {
      console.log(e)
    }
     }
   }

  }
</script>


<style scoped>
  main {
    width: 100%;
    height: 100vh;
  }
  .banner-area {
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(../assets/hero.jpg);
    background-size: cover;
    background-position: center;
  }
  .content-area {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-light);
  }
  .content {
    text-align: center;
  }
  .content h1 {
    font-size: 5rem;
  }
  .container {
    width: 95%;
    margin: auto;
  }
  .container article {
    padding: 1rem;
    margin-top: 15px;
  }
  span {
    margin-right: 3px;
  }
  span:hover {
    color: var(--color-button);
    transition: 0.5s;
  }
  .box-span {
    margin-bottom: 0.5rem;
  }
  .span-comments:hover {
    text-decoration: underline;
  }
  .btn {
    color: var(--color-button);
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 15px;
    padding: 5px 15px;

  }

</style>
