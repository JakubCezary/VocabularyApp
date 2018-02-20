<template>
    <div id="single-word">
    <h1> Test </h1>
        <h1>{{ word.title }}</h1>
        <article>{{ word.body }}</article>
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
        this.$http.get('https://vuevocabulary.firebaseio.com/posts/' + this.id).then(function(data){
             console.log(data);
            this.word = data.body;
        });
    }
}
</script>

<style>
#single-word{
    max-width: 960px;
    margin: 0 auto;
}
</style>
