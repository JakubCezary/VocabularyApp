<template>

<nav class = "navbar navbar-inverse navbar-fixed-top">
<div class="container-fluid">


<b-nav pills>
  <b-nav-item ><router-link to="/" exact>Vocabulary</router-link></b-nav-item>
  <b-nav-item ><router-link to="/add" exact>Add</router-link></b-nav-item>
</b-nav>


</div>
</nav>




</template>

<script>
export default {}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav{
    background: green;
    padding: 30px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: white;
    color: #444;
}
</style>
