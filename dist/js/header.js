//Este archivo contiene el codigo js necesario para controlar los eventos realcionados a el header
let navbar = document.querySelector('.nav-items');
let searchForm = document.querySelector('.search-form');
let filters =  document.querySelector('.filter-box');
let useroptions =  document.querySelector('.options');
let profile =  document.querySelector('.user-profile');
let modal_login = document.querySelector('#modal-login');
let modal_signup = document.querySelector('#modal-signup');
let header = document.querySelector('header');
let headerModal = document.querySelector('.modal-header');

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('scroll', function(){
        let value = window.scrollY;
        
        header.style.marginTop = value * -0.5 + 'px';
    })

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        filters.classList.remove('active');
        useroptions.classList.remove('active');
        profile.classList.remove('active');
    }
    
    document.querySelector('#search-dropdown').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        useroptions.classList.remove('active');
        profile.classList.remove('active');
    }
    
    document.querySelector('#user-dropdown').onclick = () =>{
        useroptions.classList.toggle('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        searchForm.classList.remove('active');
        profile.classList.remove('active');
    }

    document.querySelector('#profile-btn').onclick = () =>{
        profile.classList.toggle('active');
    }

    document.querySelector('#skip-btn').onclick = () =>{
        modal_login.classList.remove('active');
        modal_signup.classList.remove('active');
        headerModal.classList.remove('active');
    }
    
    document.querySelector('#filter-btn').onclick = () =>{
        filters.classList.toggle('active');
        navbar.classList.remove('active');
    }
    
    document.querySelector('#search-btn').onclick = () =>{
        filters.classList.remove('active');
    }
    
    document.querySelector('.nav-items').onclick = () =>{
        navbar.classList.remove('active');
    }
    
    document.querySelector('#logout-btn').onclick = () =>{
        modal_login.classList.toggle('active');
        headerModal.classList.toggle('active');
        useroptions.classList.remove('active');
        profile.classList.remove('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        searchForm.classList.remove('active');
    }

    document.querySelector('#signup-btn').onclick = () =>{
        modal_signup.classList.toggle('active');
        headerModal.classList.toggle('active');
        modal_login.classList.remove('active');
        
    }

    document.querySelector('#login-btn').onclick = () =>{
        modal_login.classList.toggle('active');
        headerModal.classList.toggle('active');
        modal_signup.classList.remove('active');
    }
});



