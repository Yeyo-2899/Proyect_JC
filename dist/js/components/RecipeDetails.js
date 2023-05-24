app.component('recipe-details', {
    props:{
        index:{
            type:Number
        },
        name:{
            type: String,
            default: "recipe name"
        },
        prep_time:{
            type: String,
            default: "0 min"
        },
        cook_time:{
            type: String,
            default: "0 min"
        },
        total_time:{
            type: String,
            default: "0 min"
        },
        portions:{
            type: String,
            default: "recipe portion"
        },
        complexity:{
            type: String,
            default: "recipe complexity"
        },
        occasion:{
            type: String,
            default: "recipe occasion"
        },
        category:{
            type: String,
            default: "recipe category"
        },
        description:{
            type: String,
            default: "recipe description"
        },
        ingredients:{
            type: String,
            default: "recipe ingradient"
        },
        instructions:{
            type: String,
            default: "recipe intruction"
        },
        image:{
            type: String
        },
        likes:{
            type: Number,
            default: 10
        }
    },
    data(){
        return{
        
        }
    },
    template:
    /*html*/
    `<div class="recipe-panel">
        <div class="image-container">
            <img class="img-recipe-panel" v-bind:src="image" alt="image">
        </div>

        <div class="data-container">
            <div class="title-container">
                <h1 class="title">{{ name }}</h1>
                <div class="likes-count">
                    <p class="likes-amount">{{ likes }}</p>
                    <button class="like-btn fa-regular fa-heart"></button>
                </div>
            </div>
            <div class="info-container">
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Preparation Time: {{ prep_time }}</p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Cooking Time: {{ cook_time }}</p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Total Time: {{ total_time }}</p></div>
                    </ul>
                </div>
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-utensils"></p><p class="data-info">Portions: {{ portions }}</p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-scale-balanced"></p><p class="data-info">Complexity: {{ complexity }}</p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-calendar"></p><p class="data-info">Occasions: {{ occasion }}</p></div>
                    </ul>
                </div>
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-list"></p><p class="data-info">Category: {{ category }}</p></div>
                    </ul>
                </div>
            </div>
        </div>

        <div class="description-container">
            <h2 class="subtitle">Description</h2>
            <p class="description">{{ description }}</p>
        </div>

        <div class="requirements-box">
            <div class="requirements-card">
                <div class="requirements-container">
                    <h3 class="requirement-title">Ingredients</h3>
                    <ul class="requirement-list">
                        <li class="requirement-list">{{ ingredients }}</li>
                    </ul>
                </div>
                <div class="requirements-container">
                    <h3 class="requirement-title">Instructions</h3>
                    <ul class="requirement-list">
                        <li class="requirement-list">{{ instructions }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="relateds-container">
            <h2 class="subtitle">Relateds</h2>
            <div class="relateds">
                
            </div>
        </div>
    </div>`
})