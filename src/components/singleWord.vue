<template>

<div class="container">
    <div id="single-word">
        <h1>{{ word.title }}</h1>
        <article>{{ word.trans }}</article>
            <article>{{ word.art }}</article>
                <article>{{ word.example }}</article>
                  <article>{{ word.addition }}</article>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            id: this.$route.params.id,
            word: {}
        }
    },
    created() {
        this.$http.get('https://vuevocabulary.firebaseio.com/posts/' + this.id + '.json').then(function(data){
             console.log(data);
            this.word = data.body;
        });
    }
}
</script>

<style>
#single-word{
    max-width: 600px;
      margin: 20px auto;
}
</style>
