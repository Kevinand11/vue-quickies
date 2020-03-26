Vue.component("cart",{
     props:["items"],  
     template: `
        <div>
           <ul class="list-group">
               <li class="list-group-item my-1" v-for="item in items" :key="item.id">
                     {{item.product}} -  $ {{item.price}} 
                     <button class="btn badge badge-danger float-right" @click="$emit('removed',item)">
                           Remove from cart
                     </button>
               </li>
           </ul>
           <div class="card p-2 my-1">
               <h5 class="text-center">Cart Total is: $ {{total}}</h5>
           </div>
           <button class="btn btn-info form-control" @click="$emit('pay')" :disabled="emptyCart">
                Pay Now
           </button>
        </div>
     `,
     computed:{
          total(){
               return Number(this.items.reduce((acc,item)=>acc+Number(item.price), 0)).toFixed(2);
          }, 
          emptyCart(){
             return this.items.length==0;
          },
     }, 
});
