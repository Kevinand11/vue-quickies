const signup = Vue.component("signup",{
      data(){
          return {
               name:"", 
               email:"", 
               password:"", 
     }},
      methods:{
          registerUser(){
             axios.post("https://react-blog-api.bahdcasts.com/api/auth/register",{name:this.name,email:this.email,password:this.password}).then(response=>{
                     alert(response.message);
               }).catch(error=>{
                     alert(error.message);
               });
          }, 
      }, 
      computed:{
      
      }, 
      template: `
            <div class="row my-3">
               <div class="col-md-6 offset-md-3">
                    <div class="card">
                         <div class="card-body">
                             <h3 class="text-center my-1">Signup</h3>
                              <div class="form-group">
                                 <input type="text" placeholder="Name" class="form-control" v-model="name">
                             </div>
                             <div class="form-group">
                                 <input type="text" placeholder="Email" class="form-control" v-model="email">
                             </div>
                             <div class="form-group">
                                 <input type="password" v-model="password" placeholder="Password" class="form-control">
                             </div>
                             <div class="form-group text-center">
                                 <button class="btn form-control btn-success" @click="registerUser">Signup</button>
                             </div>
                         </div>
                    </div>
               </div>
          </div>
      `, 
});