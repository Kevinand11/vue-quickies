const produce = [
  {"id":1,"product":"Hamburgers","price":Number(5.75).toFixed(2)}, 
  {"id":2,"product":"Cheese Cakes","price":Number(10.15).toFixed(2)}, 
  {"id":3,"product":"Fresh Bread","price":Number(7).toFixed(2)}, 
  {"id":4,"product":"Suya","price":Number(14.99).toFixed(2)}, 
  {"id":5,"product":"Lettuce","price":Number(2.25).toFixed(2)}, 
  {"id":6,"product":"Pizza","price":Number(12.5).toFixed(2)}, 
  {"id":7,"product":"Ice Cream","price":Number(5.75).toFixed(2)}, 
  {"id":8,"product":"Meat Pie","price":Number(3.99).toFixed(2)}, 
  {"id":9,"product":"Cream Pudding","price":Number(5.5).toFixed(2)}, 
  {"id":10,"product":"Hot Dogs","price":Number(2).toFixed(2)}
];


const app = new Vue({
     
     data:{
        products: produce,
        cart:[], 
     },
     mounted(){
     },
     methods:{
          addToCart(product){
                this.cart.push(product);
          },
          isInCart(product){
                return (this.cart.find(item => item.id == product.id) ? true : false); 
          },
          removeFromCart(product){
                this.cart = this.cart.filter(item=>item.id != product.id);
          },
          payNow(){
              this.cart= [];
              alert("Thanks and come again");
          }, 
     }, 
});
app.$mount("#app");