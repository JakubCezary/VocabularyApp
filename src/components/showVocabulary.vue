<template>

<div class="container">
  <!-- Content here -->

    <div id="show-words">
        <h1>My vocabulary</h1>
        <div v-for="word in words" class="single-word">
            <router-link v-bind:to="'/word/' + word.id"><h2>{{ word.title }}</h2></router-link>
            <article>{{ word.example }}</article>
        </div>
    </div>
    </div>
</template>

<script>


export default {
    data () {
        return {
            words: []
               }
    },

    created() {
        this.$http.get('https://vuevocabulary.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var wordsArray = [];
            for (let key in data){
                data[key].id = key;
                wordsArray.push(data[key]);
            }
            this.words = wordsArray;
            //console.log(this.words);
        });
    }

}
</script>

<style scoped>
#show-words{
    max-width: 600px;
  margin: 20px auto;
}
.single-word{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}

#show-words a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}

</style>
