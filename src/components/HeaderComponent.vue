<template>
<header class="header">
    
    <h1>Movies</h1>
    
    <nav>
        <ul class="nav-list">
            <li>
                <router-link class="link" to="/">Home</router-link>
            </li>
            <li>
                <router-link class="link" to="/movies">Movies</router-link>
            </li>
            <li>
                <router-link class="link" :to="{name: 'CreateMovie'}">CreateMovie</router-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<script setup>

</script>

<style>

.header{
    background-color: black;
    color: aliceblue;
    text-align: center;
    padding: 20px;

    .nav-list{

        display: flex;
        justify-content: space-around;

        .link{
            color: aliceblue;
            text-decoration: none;
        }
    }
}
</style>