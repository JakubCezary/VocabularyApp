<template>



    <div id="add-word">
            <form v-if="!submitted">
        <h2>New word</h2>

            <label>Word:</label>
            <input type="text" v-model.lazy="word.title" required />

            <label>Artikel:</label>
      <select v-model="word.art">
          <option v-for="art in arts">{{ art }}</option>
      </select>

            <label>Translation:</label>
<input type="text" v-model.lazy="word.trans" required />

<label>Example:</label>
<input type="text" v-model.lazy="word.example" required />
<label>Comment:</label>
<input type="text" v-model.lazy="word.addition" required />

            <hr />
            <button v-on:click.prevent="post">Save!</button>
        </form>
        <div v-if="submitted">
            <h3>Übung macht den Maister, lerne täglich!</h3>

        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            word: {
                title: '',
                trans: '',
                art: '',
                example: '',
                addition: ''
            },
            arts: ['der', 'die', 'das', 'Adjektiv', 'Substantiv','Verb','andere'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://vuevocabulary.firebaseio.com/posts.json', this.word).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
#add-word *{
    box-sizing: border-box;
}
#add-word{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    height:200px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: green;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
