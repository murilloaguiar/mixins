<template>
   <div>
      <h3>{{titulo}}</h3>
      <input type="text" placeholder="Nome do Filme" v-model="item">
      <button @click="adicionarItem">Adicionar</button>
      <br>
      <ul>
         <li v-for="(filme, index) in itens" :key="index">{{filme}}</li>
      </ul>
      <button @click="removerItem">Remover</button>
   </div>
   
</template>

<script>

import ListaMixin from '@/mixins/ListaMixin'
import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin'

export default {
   name: 'ListaFilmes',
   mixins: [ListaMixin, RemoverItemListaMixin],
   data: ()=>({
      titulo: 'Lista Filmes'
   }),
   created(){
      console.log('Lista filmes criado')
   }
}
</script>