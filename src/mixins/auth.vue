<script>
import store from '../store/index';
import router from '../router/index';

// Common mixin that will be used accross many components and views like
// Login, Signup, etc
const authMixin = {
    data(){
        return{
            isError: false
        }
    },
  methods: {
      // make api calls and validate the username and password
      // Local storage used as an API now
    login() {
        const { username, password } = this;
        const userData = JSON.parse(localStorage.getItem(username));
        if(userData && userData.password === password){
            store.commit('setAuth', {...userData, auth: true});
            router.push('/')
        }
        else {
            this.isError = true;
            setTimeout(() => { this.isError = false }, 2000);
        }
    },
    // Sign up the user and store the details on a DB
    // The DB used here is the local storage
    signup(){
        const { name, username, password } = this;
        localStorage.setItem(username, JSON.stringify({name, username, password}));
        store.commit('setAuth', {name, username, password, auth: true});
        router.push('/');
    },
    logout(){
        store.commit('removeAuth');
        router.push('/login');
    }
  }
}
export default authMixin;
</script>