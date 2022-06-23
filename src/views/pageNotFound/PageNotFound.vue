<template>
  <div class="container">
    <div class="errorBox">
      <h2 class="errorBox__title">Error 404</h2>
      <p class="errorBox__subtitle">
        Nie udało znaleźć się wskazanej podstrony! 🤯
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10%;
  min-height: 100vh;
  background-image: url("./../../assets/images/bgPnf.webp");
  background-position: right bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.errorBox {
  margin-top: -50px;
  cursor: default;
  color: rgb(250, 250, 250);
  text-align: center;
  text-shadow: 0 2px 4px white;
}

.errorBox__title {
  margin: 10px;
  font-family: "Cambria", serif;
  font-size: 70px;
  letter-spacing: 2px;
  transition: font-size 0.3s;
}

.errorBox__subtitle {
  margin: 0 auto;
  padding-right: 10px;
  font-family: "Pattaya", "Cambria", serif;
  font-weight: 100;
  font-size: 45px;
  letter-spacing: 3px;
  transition: font-size 0.3s;
}

@media screen and (max-width: 1000px) {
  .errorBox__title {
    font-size: 50px;
  }
  .errorBox__subtitle {
    margin: 7px;
    font-size: 35px;
  }
}

@media screen and (max-width: 650px) {
  .errorBox__title {
    font-size: 35px;
  }
  .errorBox__subtitle {
    margin: 5px;
    font-size: 25px;
    border-right: none;
    white-space: normal;
    animation: none;
  }
}
</style>
