<template>
  <div class="wrap">
    <loading :active.sync="isLoading"></loading>
    <div :class="{'add-background': bgShow}"></div>
    <div class="topbar">
      <h1>Hurley Furniture</h1>
      <ul class="menu">
        <li><router-link to="/"> Back Home </router-link></li>
        <li><router-link to="/admin/products"> Products </router-link></li>
        <li><router-link to="/admin/orders"> Orders </router-link></li>
        <li><router-link to="/admin/coupons"> Coupons </router-link></li>
        <li><router-link to="/admin/pictures"> Pictures </router-link></li>
        <li>
          <button type="button" class="signout" @click="signOut()">登出</button>
        </li>
      </ul>
    </div>
    <router-view v-if="isLogin"></router-view>
    <div is="gotop"></div>
  </div>
</template>

<script>
import gotop from '@/components/Gotop.vue'

export default {
  components: {
    gotop
  },
  data () {
    return {
      token: '',
      isLogin: false,
      isLoading: false,
      bgShow: true
    }
  },
  created () {
    this.checkSignin()
  },
  methods: {
    checkSignin () {
      this.isLoading = true
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)HurleyHomeToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
      const url = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(url, { api_token: this.token })
        .then(response => {
          if (response.data.success) {
            this.isLogin = true
            this.$router.push('/admin/products').catch(() => {})
          }
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          this.$router.push('/signin')
        })
    },
    signOut () {
      document.cookie = 'HurleyHomeToken = ; expires = ; path=/'
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass">
  @import '@/assets/sass/all.sass'
</style>
