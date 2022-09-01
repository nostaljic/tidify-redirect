<template>
  <div>
    <h1>[Google 인증 중] ... 잠시만 기다려주세요.</h1>
  </div>
</template>

<script>
export default {
  created() {
    window.location.href = 'http://118.67.130.242:8888/auth/google/callback';
  },
};
</script>

<style lang="scss" scoped></style>
