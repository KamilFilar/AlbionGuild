<template>
  <div class="wrapper">
    <article>
      <h2 class="subtitle">A poza tym my na prawdę się świetnie bawimy!</h2>
      <p class="text">
        Z niepowodzeń się śmiejemy i najczęściej kończą jako... memy! 😅
      </p>
      <p class="text">
        Nie czekaj, wbij na kanał i oznacz jednego z naszych rekruterów pisząc
        <span class="text--color">@Rekruter</span>
      </p>
    </article>
    <ButtonDiscord class="center" />
  </div>
</template>

<script>
import ButtonDiscord from "@/components/ButtonDiscord.vue";

export default {
  components: {
    ButtonDiscord,
  },
};
</script>

<style scoped>
.subtitle {
  margin-top: 100px;
  text-align: center;
  font-family: "Pattaya", "Cambria", serif;
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 2px;
  color: rgb(70, 70, 70);
}

.text {
  margin: 0 auto;
  width: 75%;
  font-family: "Cambria", serif;
  font-size: 25px;
  text-indent: 15px;
  text-align: center;
  line-height: 35px;
}

.text--color {
  color: rgb(0, 119, 255);
  font-weight: bold;
}

.center {
  margin: 50px auto;
}

@media screen and (max-width: 786px) {
  .text {
    width: 95%;
  }
}
</style>
