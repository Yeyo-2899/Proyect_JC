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
            url: 'http://prueba-2.test/api/recipes/recipe/' + id 

        })
        .then(
            (response) => {
                console.log(response.data[2]);
                let item = response.data[0];
                let items = response.data[2];
                let inst = " ";
                this.relateds = [];
    
                    

                /*for (let i = 1; i <= 20; i++) {
                    if(item[0]["strIngredient"+i] !="" && item[0]["strIngredient"+i] !=null){
                        this.ingredients.push({
                            ingredient: item[0]["strMeasure"+i] + " - " + item[0]["strIngredient"+i]
                        });
                    }
                }*/

                for (var i = 0; i < item[0].preparation_instructions.length; i++) {
                     inst += item[0].preparation_instructions[i];
                     if(item[0].preparation_instructions[i] === "."){
                        this.instructions.push({
                            instruction: inst
                        });
                        
                        inst = "";
                     }
                }

                
                this.id = item[0].id;
                this.image = item[0].image;
                this.name = item[0].name;
                this.prep_time = item[0].preparation_time;
                this.cook_time = item[0].cooking_time;
                this.total_time = item[0].total_time;
                this.portions = item[0].portions;
                this.complexity = item[0].level;
                this.occasion = item[0].occasion;
                this.category = item[0].category;
                this.description = item[0].description;
                this.likes = item[0].likes;
                console.log(this.ingredients);
                console.log(this.instructions);

                items.forEach(element =>{
                    this.relateds.push({
                        id: element.id,
                        name:element.name,
                        image:element.image,
                        total_time: "20 mins",
                        category: element.category,
                        description: element.description,
                        likes: element.likes
                    });
                });

                this.relateds = this.getRelateds(this.relateds);
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