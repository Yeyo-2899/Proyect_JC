app.component('recipe-card', {
    props:{
        popular:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            recipes:[
                {id: '1', name: 'Pork Ribs', prep_time: '15 min', cook_time: '20 min', total_time: '35 min', portions: '2', complexity: 'Easy', occasion: 'Summer',  category: 'Lunch', description: 'No description for now.', ingredients: 'Only one ingredient for now', instructions: 'Only one instruction for now', img: '../img/pork_ribs.jpg', likes: 12},
            ]
        }
    },
    mounted:function() {
        const params = window.location.search;
	    const urlParams = new URLSearchParams(params);
    
        if(urlParams.get("keyword") != null){
            const keyword = urlParams.get("keyword");
            
            axios({  
                method: 'get', 
                url:'http://prueba-2.test/api/recipes/searchbyname/' + keyword
            })
            .then(
                (response) => {
                    console.log('Hubo respuesta');
                    console.log(response);
                    let items = response.data;
    
                    this.recipes = [];
    
                    items.forEach(element =>{
                        this.recipes.push({
                            id: element.id,
                            name:element.name,
                            image:element.image,
                            total_time: "20 mins",
                            category: element.category,
                            description: element.description,
                            likes: element.likes
                        });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );

        }else if(urlParams.get("type") != null){
            const filter = urlParams.get("type");
            const id = urlParams.get("id");

            axios({  
                method: 'get', 
                url:'http://prueba-2.test/api/recipes/filterby/'+filter+'/' + id
            })
            .then(
                (response) => {
                    let items = response.data;
    
                    this.recipes = [];
    
                    items.forEach(element =>{
                        this.recipes.push({
                            id: element.id,
                            name:element.name,
                            image:element.image,
                            total_time: "20 mins",
                            category: element.category,
                            description: element.description,
                            likes: element.likes
                        });
                    });
                }
            )
            .catch(
                error => console.log(error)
            );
        
        }else if(this.popular){
            axios({  
                method: 'get', 
                url:'http://prueba-2.test/api/recipes/top10'
            })
            .then(
                (response) => {
                    let items = response.data;
    
                    this.recipes = [];
    
                    items.forEach(element =>{
                        this.recipes.push({
                            id: element.id,
                            name:element.name,
                            image:element.image,
                            total_time: "20 mins",
                            category: element.category,
                            description: element.description,
                            likes: element.likes
                        });
                    });
    
                }
            )
            .catch(
                error => console.log(error)
            );

        }else{
            axios({  
                method: 'get', 
                url:'http://prueba-2.test/api/recipes/all'
            })
            .then(
                (response) => {
                    let items = response.data;
    
                    this.recipes = [];
    
                    items.forEach(element =>{
                        this.recipes.push({
                            id: element.id,
                            name:element.name,
                            image:element.image,
                            total_time: "20 mins",
                            category: element.category,
                            description: element.description,
                            likes: element.likes
                        });
                    });
                    
    
                }
            )
            .catch(
                error => console.log(error)
            );
        }

        
    },
    methods:{
        vote(index){
            console.log("me escuchan?");
            for(i in recipes){
                if(recipes[i].id === index) recipes[i].likes++;
            }
        }
    },
    template:
    /*html*/
    `<a v-for="recipe in recipes" :href="'./recipe.html?id='+recipe.id" class="recipe-card">
        <div class="recipe-img">
            <img class="img" v-bind:src="recipe.image" alt="image">
        </div>

        <div class="title-card-container">
            <h3 class="recipe-title">{{ recipe.name }}</h3>
            <div class="like-container">
                <p class="likes">{{ recipe.likes }}</p>
                <button class="like-btn fa-regular fa-heart" v-on:click="vote(recipe.id)"></button>
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
    </a>`
})