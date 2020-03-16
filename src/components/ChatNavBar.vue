<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">
      Vue Chat
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ user.name }} | </b-nav-text>
      <b-nav-item href="#" active @click="onLogout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'ChatNavBar',
    computed: {
        ...mapState([
            'user',
            'reconnect'
        ])
    },
    methods: {
        ...mapMutations([
            'setReconnect',
        ]),
        ...mapActions([
            'login',
            'logout'
        ]),
        unload() {
            if(this.user.username) { // User hasn't logged out
                this.setReconnect(true);
            }
        },
        onLogout() {
            this.logout();
            this.$router.push('/');
        }
    },
    mounted() {
        window.addEventListener('beforeunload', this.unload);
        if(this.reconnect) {
            this.login(this.user.username);
        }
    }
}
</script>

<style scoped>
#chat-navbar {
    margin-bottom: 15px;
}
</style>