<template>
<div class="welcome container">
    <div>
        <h2>Welcome to my chat!</h2>
        <h4>Let's enjoy some privacy 😘</h4>
    <img src="src/assets/Content/lina_selfie.png" alt="Bildbeschreibung">
    
    </div>
    
    <div v-if="showLogin">
        <h2>Login</h2>
        <login-form @login="enterChat"/>
        <p>No account yet? <span @click="showLogin = false">Signup</span> instead</p>
    </div>
    <div v-else>
        <h2>Sign Up</h2>
        <sign-up-form @signup="enterChat" />
        <p>Already a friend of Lina? <span @click="showLogin = true">Login</span> here</p>
    </div>
    
    


</div>


</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import SignUpForm from '../components/SignUpForm.vue'
import {ref} from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
        router.push({name: 'Chatroom'})

    }


    return { showLogin, enterChat} 
  }

}
</script>

<style>

img {
    max-width: 80%
}

h4 {
    margin-bottom: 10px;
}

.welcome {
    text-align: center;
    padding: 20px 0;
}


/* form styles */

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;

}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}



</style>