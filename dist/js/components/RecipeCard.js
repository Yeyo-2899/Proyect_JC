app.component('recipe-card', {
    props:{
        index:{
            type:Number
        },
        name:{
            type: String,
            default: "recipe name"
        },
        total_time:{
            type: String,
            default: "0 min"
        },
        category:{
            type: String,
            default: "recipe category"
        },
        description:{
            type: String,
            default: "recipe description"
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
    `<a href="./html/recipe.html" class="recipe-card">
    <div class="recipe-img">
        <img class="img" v-bind:src="image" alt="image">
    </div>

    <div class="title-card-container">
        <h3 class="recipe-title">{{ name }}</h3>
        <div class="like-container">
            <p class="likes">{{ likes }}</p>
            <button class="like-btn fa-regular fa-heart"></button>
        </div>
    </div>

    <div class="info-card-container">
        <ul class="recipe-info">
            <li class="recipe-info-element"><p class="icons-var fa-regular fa-clock"></p><p class="recipe-info-var">Total Time: {{ total_time }}</p></li>
            <li class="recipe-info-element"><p class="icons-var fa-solid fa-list"></p><p class="recipe-info-var">Category: {{ category }}</p></li>
        </ul>
    </div>

    <div class="description-card-container">
        <h4 class="recipe-description-title">Description</h4>
        <p class="recipe-description">{{ description }}</p>
    </div>
    </a>`
})