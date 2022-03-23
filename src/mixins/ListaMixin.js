export default {
   data:()=>({
      itens: [],
      item: '',
      titulo: 'Lista padrão'
   }),
   methods:{
      adicionarItem(){
         this.itens.push(this.item)
         this.item = ''
      }
   },
   created(){
      console.log('Lista mixin criado')
   }
}