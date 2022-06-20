<template>
  <button class="btn" v-on:click="moveToDiscord">
    <span class="btn__text">Discord</span>
    <font-awesome-icon icon="fa-brands fa-discord" class="fa-icon" />
  </button>
</template>

<script>
export default {
  name: "ButtonDiscord",
  methods: {
    moveToDiscord() {
      return window.open("https://discord.gg/v5kfuKg", "_blank");
    },
  }
};
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 15px;
  border: transparent;
  border-radius: 10px;
  background-color: rgb(80, 65, 165);
  box-shadow: 0 1px 4px black;
  transition: background-color 0.3s;
}

.btn__text,
.fa-icon {
  font-size: 25px;
  color: white;
}

.btn__text {
  font-family: "Cambria", serif;
  letter-spacing: 1px;
}

.btn:hover {
  cursor: pointer;
  background-color: darkslateblue;
}

.btn:hover .fa-icon {
  animation: spinIcon 1s;
}

@keyframes spinIcon {
  100% {
    transform: rotate(360deg);
  }
}
</style>
