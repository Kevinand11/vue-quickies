Vue.component("item",{
      props:["product", "carted"],
      template: `
            <div class="card my-2">
                <div class="card-body">
                    <h5 class="text-center card-title">{{product.product}} </h5>
                    <p class="text-muted text-center card-text">{{product.price}}</p>
                    <button :disabled="carted" @click="emitCart" class="btn btn-primary form-control">
                         {{ carted ? "Added to cart" : "Add to cart"}} 
                    </button>
                </div>
            </div>
      `, 
      methods:{
           emitCart() {
                this.$emit('added', this.product);
           }, 
      },
      
});