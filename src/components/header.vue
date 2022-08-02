<template>
<div>
<div id="sideNav" :class="active ? 'active' : ''">
      <nav>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">TESTIMONIALS</a></li>
          <li><a href="/login"><span>LOGIN</span></a></li>
          <li><a href="/register"><span>REGISTER</span></a></li>
        </ul>
      </nav>
      <div id="menuBtn" @click="toggleActive">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-list menu"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
    </div>
</div>
    </template>

    <script>
    export default{
        name:"Header",

       
 data() {
    return {
      active: false
    }
  },
  // created a method with a condition of not active
  methods: {
    toggleActive() {
      this.active = !this.active;
    }
  }
}
    
    </script>


    <style>
    </style>

    