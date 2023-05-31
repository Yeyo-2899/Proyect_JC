app.component('recipe-details', {
    props:{

    },
    data(){
        return{
           id: "", 
           image: "", 
           name: "", 
           prep_time: "", 
           cook_time: "", 
           total_time: "", 
           portions: "", 
           complexity: "", 
           occasion: "", 
           category: "", 
           description: "", 
           ingredients:[], 
           instructions:[], 
           likes: 12,
           recipe: "",
           
           saved: false,

           relateds: [{id: '1', name: 'Pork Ribs', total_time: '35 min', category: 'Lunch', img: '../img/mojito.jpg', likes: 12}, {id: '1', name: 'Pork Ribs', total_time: '35 min', category: 'Lunch', img: '../img/mojito.jpg', likes: 12},{id: '1', name: 'Pork Ribs', total_time: '35 min', category: 'Lunch', img: '../img/mojito.jpg', likes: 12}]
        }
    },
    mounted:function() {
        const params = window.location.search;
	    const urlParams = new URLSearchParams(params);
	    const id = urlParams.get("id");

        axios({
            method: 'get',
            url: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id 

        })
        .then(
            (response) => {
                let item = response.data.meals;
                let inst = " ";
                console.log(item);

                for (let i = 1; i <= 20; i++) {
                    if(item[0]["strIngredient"+i] !="" && item[0]["strIngredient"+i] !=null){
                        this.ingredients.push({
                            ingredient: item[0]["strMeasure"+i] + " - " + item[0]["strIngredient"+i]
                        });
                    }
                }

                for (var i = 0; i < item[0].strInstructions.length; i++) {
                     inst += item[0].strInstructions[i];
                     if(item[0].strInstructions[i] === "."){
                        this.instructions.push({
                            instruction: inst
                        });
                        
                        inst = "";
                     }
                }

                
                this.id = item[0].idMeal;
                this.image = item[0].strMealThumb;
                this.name = item[0].strMeal;
                this.prep_time = "20 min";
                this.cook_time = "30 min";
                this.total_time = "50 min";
                this.portions = "5";
                this.complexity = "Intermediate";
                this.occasion = "All";
                this.category = item[0].strCategory;
                this.description = "No description for now";
                this.likes = 12;
                console.log(this.ingredients);
                console.log(this.instructions);
                this.getRelated();
            }
        )
        .catch(
            error => console.log(error)
        );


        /**/
    },
    methods: {
        getRelateds(item){
            return item.slice(0,3);
        },
        getRelated(){
            axios({
                method: 'get',
                url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + this.category 
    
            })
            .then(
                (response) => {
                    let items = response.data.meals;
                    console.log(response);
                    this.relateds = [];
    
                    items.forEach(element =>{
                        this.relateds.push({
                            id: element.idMeal,
                            name:element.strMeal,
                            image:element.strMealThumb,
                            total_time: "20 mins",
                            category: element.strCategory,
                            description: "No description for now",
                            likes: 18
                        });
                    });
    
                    this.relateds = this.getRelateds(this.relateds);
    
                    console.log(this.relateds);
                }
            )
            .catch(
                error => console.log(error)
            )
        },
        vote(){
            console.log("me escuchan");
            this.likes++;
            this.saved = true;
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
                <h1 class="title"> {{name}} </h1>
                <div class="likes-count">
                    <p class="likes-amount"> {{likes}} </p>
                    <button class="like-btn fa-regular fa-heart" v-on:click="vote()"></button>
                </div>
            </div>
            <div class="info-container">
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Preparation Time:  {{prep_time}} </p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Cooking Time:  {{cook_time}} </p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-clock"></p><p class="data-info">Total Time:  {{total_time}} </p></div>
                    </ul>
                </div>
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-utensils"></p><p class="data-info">Portions:  {{portions}} </p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-scale-balanced"></p><p class="data-info">Complexity:  {{complexity}} </p></div>
                        <div class="data-list-element"><p class="icons-data fa-solid fa-calendar"></p><p class="data-info">Occasions:  {{occasion}} </p></div>
                    </ul>
                </div>
                <div class="data">
                    <ul class="data-list">
                        <div class="data-list-element"><p class="icons-data fa-solid fa-list"></p><p class="data-info">Category:  {{category}} </p></div>
                    </ul>
                </div>
            </div>
        </div>

        <div class="description-container">
            <h2 class="subtitle">Description</h2>
            <p class="description"> {{description}} </p>
        </div>

        <div class="requirements-box">
            <div class="requirements-card">
                <div class="requirements-container">
                    <h3 class="requirement-title">Ingredients</h3>
                    <ul class="requirement-list">
                        <li v-for="ing in ingredients" class="requirement-list"> {{ing.ingredient}} </li>
                    </ul>
                </div>
                <div class="requirements-container">
                    <h3 class="requirement-title">Instructions</h3>
                    <ul class="requirement-list">
                        <li v-for="ing in instructions" class="requirement-list"> {{ing.instruction}} </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="relateds-container">
            <h2 class="subtitle">Relateds</h2>
            <div class="relateds">
                <a v-for="recipe in relateds" :href="'./recipe.html?id='+recipe.id" class="recipe-card">
                    <div class="recipe-img">
                        <img class="img" v-bind:src="recipe.image" alt="image">
                    </div>
            
                    <div class="title-card-container">
                        <h3 class="recipe-title">{{ recipe.name }}</h3>
                        <div class="like-container">
                            <p class="likes">{{ recipe.likes }}</p>
                            <button class="like-btn fa-regular fa-heart"></button>
                        </div>
                    </div>
            
                    <div class="info-card-container">
                        <ul class="recipe-info">
                            <li class="recipe-info-element"><p class="icons-var fa-regular fa-clock"></p><p class="recipe-info-var">Total Time: {{ recipe.total_time }}</p></li>
                            <li class="recipe-info-element"><p class="icons-var fa-solid fa-list"></p><p class="recipe-info-var">Category: {{ recipe.category }}</p></li>
                        </ul>
                    </div>
            
                    <div class="description-card-container">
                        <h4 class="recipe-description-title">Description</h4>
                        <p class="recipe-description">{{ recipe.description }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>`
})