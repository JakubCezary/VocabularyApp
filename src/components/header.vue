<template>

<ul class="nav justify-content-center">
<b-nav pills>
  <b-nav-item ><router-link to="/" exact>Vocabulary</router-link></b-nav-item>
  <b-nav-item ><router-link to="/add" exact>Add</router-link></b-nav-item>
</b-nav>
</ul>

</template>

<script>
export default {}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    background:green;
    padding: 10px 0;
    margin-bottom: 10px;
    margin-top: 0px;

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

.router-link-active{
    background: white;
    color: #444;
}
</style>
