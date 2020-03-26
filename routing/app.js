const routes = [{path:"/login", component:login}, 
      {path:"/signup", component:signup}, 
      {path:"/home",component:home}, 
];
const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        name:"Kevin", 
        age:20,
    }, 
    getters:{
          getName(state){
                return state.name;
          }, 
          getAge(state){
                return state.age;
          },
    }, 
    actions:{
    
    }, 
    mutations:{
    
    }
});


const app = new Vue({ 
      router,
      store, 
      data:{
         
      },
      methods:{
      
      }, 
      computed:{
      
      },
      mounted(){
      }, 
});
app.$mount("#app");