//Este archivo contiene el codigo js necesario para controlar los eventos realcionados a el header
let navbar = document.querySelector('.nav-items');
let searchForm = document.querySelector('.search-form');
let filters =  document.querySelector('.filter-box');
let useroptions =  document.querySelector('.user-box');
let modal = document.querySelector('.modal');
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
    }
    
    document.querySelector('#search-dropdown').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        useroptions.classList.remove('active');
    }
    
    document.querySelector('#user-dropdown').onclick = () =>{
        useroptions.classList.toggle('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        searchForm.classList.remove('active');
    }

    let explore = document.querySelector('#explore-btn');
    console.log(explore);
    explore.onclick = () =>{
        window.location.href = './html/recipe-book.html';
    }
    
    
    document.querySelector('#skip-btn').onclick = () =>{
        modal.classList.remove('active');
        headerModal.classList.remove('active');
    }
    
    document.querySelector('#filter-btn').onclick = () =>{
        filters.classList.toggle('active');
        /*navbar.classList.remove('active');*/
    }
    
    document.querySelector('#search-btn').onclick = () =>{
        filters.classList.remove('active');
    }
    
    document.querySelector('.nav-items').onclick = () =>{
        navbar.classList.remove('active');
    }
    
    document.querySelector('#modal-btn').onclick = () =>{
        modal.classList.toggle('active');
        headerModal.classList.toggle('active');
        useroptions.classList.remove('active');
        navbar.classList.remove('active');
        filters.classList.remove('active');
        searchForm.classList.remove('active');
    }
    
    /*document.querySelector('#home-btn').onclick = () =>{ //Cambiar este
        window.location.href = '../index.html';
    }*/
    
    document.querySelector('#recipe-book-btn').onclick = () =>{
        window.location.href = '../html/recipe-book.html';
    }
});



