export default {
   methods: {
      removerItem(){
         this.itens.pop() //removendo o último elemento do array
      }
   },
   created(){
      console.log('RemoverItemListaMixin criado')
   }
}