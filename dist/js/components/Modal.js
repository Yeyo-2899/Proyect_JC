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
        <div v-if="purpose === 'login'" id="modal-header-login" class="modal-header">
            <a href="" class="logo">JUSTCOOK</a>
            <button id="skip-btn-login" class="skip-btn">Skip</button>
        </div>

        <div v-else-if="purpose === 'signin'" id="modal-header-signin" class="modal-header">
            <a href="" class="logo">JUSTCOOK</a>
            <button id="skip-btn-signin" class="skip-btn">Skip</button>
        </div>

        <div v-else-if="purpose === 'recovery'" id="modal-header-recovery" class="modal-header">
            <a href="" class="logo">JUSTCOOK</a>
            <button id="skip-btn-recovery" class="skip-btn">Skip</button>
        </div>

        <div v-else="purpose === 'edit'" id="modal-header-edit" class="modal-header">
            <a href="" class="logo">JUSTCOOK</a>
            <button id="skip-btn-edit" class="skip-btn">Skip</button>
        </div>
        <!--Modal Header-->

        <!--Form container-->
        <div class="form-container">

            <!--Form title-->
            <h1 v-if="purpose === 'login'" class="form-title">Login</h1>
            <h1 v-else-if="purpose === 'signin'" class="form-title">Sign Up</h1>
            <h1 v-else-if="purpose === 'recovery'" class="form-title">Recovery Pass</h1>
            <h1 v-else="purpose === 'edit'" class="form-title">Edit Profile</h1>
            <!--Form title-->

            <!--Form-->
            <form action="" class="form">

            <!--Full Name input-->
            <div v-if="purpose === 'signin' || purpose === 'edit'" class="input-content">
                <label class="fas fa-user modal-icon"></label>
                <input v-if="purpose === 'signin'" class="modal-input" type="text" name="name" id="#name-signin" placeholder="Full Name">
                <input v-else="purpose === 'edit'" class="modal-input" type="text" name="name" id="#name-edit" placeholder="Full Name">
            </div>
            <!--Full Name input-->

            <!--User input-->
            <div v-if="purpose != 'recovery'" class="input-content">
                <label class="fas fa-user-lock modal-icon"></label>
                <input v-if="purpose === 'signin'" class="modal-input" type="text" name="user_name" id="#user-signup" placeholder="User">
                <input v-else-if="purpose === 'login'" class="modal-input" type="text" name="user_name" id="#user-login" placeholder="User">
                <input v-else="purpose === 'edit'" class="modal-input" type="text" name="user_name" id="#user-edit" placeholder="User">
            </div>
            <!--User input--> 

            <!--Email input-->
            <div v-if="purpose === 'signin' || purpose === 'edit'" class="input-content">
                <label class="fas fa-at modal-icon"></label>
                <input v-if="purpose === 'signin'" class="modal-input" type="text" name="email" id="#email-signin" placeholder="Email">
                <input v-else="purpose === 'edit'" class="modal-input" type="text" name="email" id="#email-edit" placeholder="Email">
            </div>
            <!--Email input-->

            <!--Password input-->
            <div class="input-content">
                <label class="fas fa-key modal-icon"></label>
                <input v-if="purpose === 'signin'" class="modal-input" type="password" name="password" id="#password-signup" placeholder="Password">
                <input v-else-if="purpose === 'login'" class="modal-input" type="password" name="password" id="#password-login" placeholder="Password">
                <input v-else-if="purpose === 'recovery'" class="modal-input" type="password" name="password" id="#password-recovery" placeholder="Password">
                <input v-else="purpose === 'edit'" class="modal-input" type="password" name="password" id="#password-edit" placeholder="Password">
            </div>
            <!--Password input-->

            <!--Confirm Password input-->
            <div v-if="purpose != 'login'" class="input-content">
                <label class="fas fa-lock modal-icon"></label>
                <input v-if="purpose === 'signin'" class="modal-input" type="password" name="confirm-password" id="#confirm-password-signin" placeholder="Confirm Password">
                <input v-else-if="purpose === 'recovery'" class="modal-input" type="password" name="confirm-password" id="#confirm-password-recovery" placeholder="Confirm Password">
                <input v-else="purpose === 'edit'" class="modal-input" type="password" name="confirm-password" id="#confirm-password-edit" placeholder="Confirm Password">
            </div>
            <!--Confirm Password input-->
                
            <!--Action btn-->
            <div class="submit">
                <input v-if="purpose === 'login'" type="submit" vlaue="Login" class="primary-btn">
                <input v-else-if="purpose === 'signin'" type="submit" vlaue="Signin" class="primary-btn">
                <input v-else-if="purpose === 'recovery'" type="submit" vlaue="Recovery" class="primary-btn">
                <input v-else="purpose === 'edit'" type="submit" vlaue="EDit" class="primary-btn">
            </div>
            <!--Action btn-->

            </form>
            <!--Form-->

            <!--Alternative btn-->
            <div class="alternative-container">
                <p v-if="purpose === 'login'" class="alternative-text">Forgot your password? <button id="recover-btn" class="alternative-btn">Recover!</button></p>
                <p v-if="purpose === 'login'" class="alternative-text">First time? <button id="signup-btn" class="alternative-btn">Sign Up!</button></p>
                <p v-else-if="purpose === 'signin'" class="alternative-text">Already have account? <button id="login-btn" class="alternative-btn">Login!</button></p>
                <p v-else-if="purpose === 'recovery'" class="alternative-text">Remember your password? <button id="recovery-btn" class="alternative-btn">Login!</button></p>
                <p v-else="purpose === 'edit'" class="alternative-text">Keep your data? <button id="keep-btn" class="alternative-btn">Exit!</button></p>
            </div>
            <!--Alternative btn-->
        </div>
        <!--Form container-->

    </section>`
})