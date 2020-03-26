const navbar =  Vue.component("navbar", {
    template: `
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark"><div class="container">
  <a class="navbar-brand" href="#">Vue-Router</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
         <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
      </li>
       <li class="nav-item">
          <router-link to="/signup" class="nav-link">Sign Up</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hey Coder
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Logout</a>
        </div>
      </li>
    </ul>
  </div>
  </div>
</nav>
    `, 

});