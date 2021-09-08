<template>
  <main>
    <div class="banner-area">
        <div class="content-area">
          <div class="content">
            <a href="/"><h1>Hacker News</h1></a>            
          </div>
        </div>
    </div>

    <section class="container">
      <h3>{{ dataComment.data.title}}</h3>
      <article v-for="(comment,i) in comments" :key="i">
        <div class="box-span">
        <span class="span-by">by: {{ comment.data.by }}</span>
        <p class="span-comments">Comment: {{comment.data.text}}</p>        
        </div>
      </article>      
    </section>

  </main>

</template>

<script>
import api from '@/services/api';
import axios from 'axios';

export default {
  name: 'Comments',
  data(){
      return {
          dataComment: [],
          comments: []
      }
  },
  mounted() {
    try {
        const id = JSON.parse(localStorage.id);
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => {
          this.dataComment = response;  
          let results = response.data.kids;
          results.forEach(idItem => {
            api.get(`item/${idItem}.json`)
            .then(response => {
              this.comments.push(response);
            })
          })
        })
    }catch(e) {
      console.log(e)
    }
  }
}
</script>


<style scoped>
  .content {
    text-align: center;
  }
  .content h1 {
    font-size: 2rem;     
    color: var(--color-button);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .container {
    width: 80%;
    margin: auto;
  }
  .container article, h3 {
    padding: 1rem;
    margin-top: 15px;
  }
  span {
    margin-right: 3px;
  }
  .span-by {
    display: block;
    color: var(--color-button);
    transition: 0.5s;
    margin-bottom: 0.4rem;
  }
  .box-span {
    margin-bottom: 0.5rem;
  }
  

</style>
