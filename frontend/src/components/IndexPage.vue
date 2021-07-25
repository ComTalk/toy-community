<template>
    <div v-if="user">
        <h1>로그인 완료!</h1>
    </div>
    <div v-else>
        <h1>로그인 해주세요</h1>
        <button>Google로 로그인하기</button>
    </div>
</template>

<script>

export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    this.$http.get('/api/login')
      .then(res => {
        const user = res.data.user
        if (user) {
          this.user = user
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}

</script>

<style></style>
