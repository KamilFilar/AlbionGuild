<template>
  <div class="wrapper">
    <section class="heading">
      <h1 class="heading__title">ZakonWiedzy.pl</h1>
      <p class="heading__subtitle">Twoja przygoda zaczyna się tutaj!</p>
    </section>
    <button class="btn" v-on:click="scrollToContent">
      <font-awesome-icon icon="fa-solid fa-arrow-down" class="fa-icon" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContent() {
      return document
        .getElementById("aboutUs")
        .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
@import "./../../../assets/styling/typingAnimation.css";
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  min-height: 100vh;
  background-image: url("./../../../assets/images/bg.webp");
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.heading {
  margin-top: -50px;
  color: rgb(250, 250, 250);
  text-align: center;
  text-shadow: 0 2px 4px white;
  cursor: default;
}

.heading__title {
  margin: 10px;
  font-family: "Cambria", serif;
  font-size: 70px;
  letter-spacing: 2px;
  transition: font-size 0.3s;
}

.heading__subtitle {
  margin: 0 auto;
  padding-right: 10px;
  overflow: hidden;
  border-right: 2px solid transparent;
  font-family: "Pattaya", "Cambria", serif;
  font-weight: 100;
  font-size: 45px;
  letter-spacing: 3px;
  white-space: nowrap;
  animation: typing 4s steps(33, end), blink-caret 0.7s step-end infinite;
  transition: font-size 0.3s;
}

.btn {
  margin-top: 100px;
  padding: 10px 15px;
  border: 2px solid rgb(255, 75, 75);
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 5px rgb(255, 75, 75);
  transition: 0.3s;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 0 0 15px rgb(255, 75, 75);
}

.fa-icon {
  color: rgb(255, 75, 75);
  font-size: 35px;
}

@media screen and (max-width: 1000px) {
  .heading__title {
    font-size: 50px;
  }
  .heading__subtitle {
    margin: 7px;
    font-size: 35px;
  }
}

@media screen and (max-width: 650px) {
  .heading__title {
    font-size: 35px;
  }
  .heading__subtitle {
    margin: 5px;
    font-size: 25px;
    border-right: none;
    white-space: normal;
    animation: none;
  }
}
</style>
