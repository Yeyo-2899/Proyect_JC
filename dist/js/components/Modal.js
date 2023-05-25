app.component('modal', {
    props: {
        id:{
            type: String
        }, 
        purpose:{
            type: String
        } 
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    template:
    /*html*/
    `<section :id="id" class="modal">

        <!--Modal Header-->
        <div id="modal-header" class="modal-header">
            <a href="" class="logo">JUSTCOOK</a>
            <button id="skip-btn" class="skip-btn">Skip</button>
        </div>
        <!--Modal Header-->

        <!--Form container-->
        <div class="form-container">

            <!--Form title-->
            <h1 v-if="purpose === 'login'" class="form-title">Login</h1>
            <h1 v-else="purpose === 'signin'" class="form-title">Sign Up</h1>
            <!--Form title-->

            <!--Form-->
            <form action="" class="form">

            <!--Full Name input-->
            <div v-if="purpose === 'signin'" class="input-content">
                <label class="fas fa-user modal-icon"></label>
                <input class="modal-input" type="text" name="name" id="#name" placeholder="Full Name">
            </div>
            <!--Full Name input-->

            <!--User input-->
            <div v-if="purpose != 'recovery'" class="input-content">
                <label class="fas fa-user-lock modal-icon"></label>
                <input class="modal-input" type="text" name="user_name" id="#user-signup" placeholder="User">
            </div>
            <!--User input--> 

            <!--Email input-->
            <div v-if="purpose === 'signin'" class="input-content">
                <label class="fas fa-at modal-icon"></label>
                <input class="modal-input" type="text" name="email" id="#email" placeholder="Email">
            </div>
            <!--Email input-->

            <!--Password input-->
            <div class="input-content">
                <label class="fas fa-key modal-icon"></label>
                <input class="modal-input" type="password" name="password" id="#password-signup" placeholder="Password">
            </div>
            <!--Password input-->

            <!--Confirm Password input-->
            <div v-if="purpose != 'login'" class="input-content">
                <label class="fas fa-lock modal-icon"></label>
                <input class="modal-input" type="password" name="confirm-password" id="#confirm-password" placeholder="Confirm Password">
            </div>
            <!--Confirm Password input-->
                
            <!--Action btn-->
            <div class="submit">
                <input v-if="purpose === 'login'" type="submit" vlaue="Login" class="primary-btn">
                <input v-else="purpose === 'signin'" type="submit" vlaue="Signin" class="primary-btn">
                <input v-else="purpose === 'recovery'" type="submit" vlaue="Recovery" class="primary-btn">
            </div>
            <!--Action btn-->

            </form>
            <!--Form-->

            <!--Alternative btn-->
            <div class="alternative-container">
                <p v-if="purpose === 'login'" class="alternative-text">First time? <button id="signup-btn" class="alternative-btn">Sign Up!</button></p>
                <p v-else="purpose === 'signin'" class="alternative-text">Already have account? <button id="login-btn" class="alternative-btn">Login!</button></p>
            </div>
            <!--Alternative btn-->
        </div>
        <!--Form container-->

    </section>`
})