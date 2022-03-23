<template>
   <div id="listas">
      <div>
         <lista-filmes/>
      </div>

      <div>
         <lista-pessoas/>
      </div>

      <div>
         <lista-videogames/>
      </div>
      
   </div>
</template>

<script>
import ListaFilmes from '@/components/ListaFilmes.vue'
import ListaPessoas from '@/components/ListaPessoas.vue'
import ListaVideogames from '@/components/ListaVideogames.vue'

export default {
   name: 'App',
   components: {
      ListaFilmes,
      ListaPessoas,
      ListaVideogames
   }
}
</script>

<style>
   #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
   }

   #listas{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
   }
</style>
