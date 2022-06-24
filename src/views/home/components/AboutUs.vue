<template>
  <div class="wrapper" id="aboutUs">
    <h2 class="text margin-top">
      Jesteśmy jedną z najstarszych gildii na serwerze, a naszym celem jest
      nauka nowych graczy oraz zrzeszanie tych bardziej doświadczonych. Wspólnie
      zajmujemy coraz mocniejszą pozycję w świecie Albionu.
    </h2>
    <img
      src="./../../../assets/images/appIcon.png"
      alt="Sword and pencil image"
      class="separatorImg"
      width="100%"
      height="auto"
    />
    <article>
      <h3 class="subtitle">Dlaczego warto nas wybrać? 😄</h3>
      <ol class="list">
        <li class="list-item">
          W naszych szeregach znajdziesz zarówno nowych jak i doświadczonych
          graczy, więc zawsze znajdziesz kogoś na ciekawy content. Dodatkowo
          jako nowy gracz otrzymasz od nas wsparcie w postaci opiekuna (osoba
          która Cię zrekrutowała) która wdroży Cię w tajniki gry.
        </li>
        <li class="list-item">
          Posiadamy kryjówke w głębokich avalonach (to nie to samo co zwykłe
          avalony 😉) obok nas zawsze będziesz miał najbardziej pożądane mapy w
          grze ze złotymi skrzynkami, ulepszonymi avalonami czy po prostu pełne
          surowców do zbierania!
        </li>
        <li class="list-item">
          Codziennie organizujemy contenty tj. grupówki, PK, Small Scale czy
          Avalony T7-T8!
        </li>
        <li class="list-item">
          Posiadamy autorskie poradniki którę wyjaśnią Tobie jak prawidłowo
          zdobywać sławę (fejmić) w grze, dokonywać przewozów lub po prostu jak
          się szybko dorobić by się nie narobić, a zarobić!
        </li>
      </ol>
    </article>
    <article>
      <h3 class="subtitle">Masz własną gildię? ⚔️</h3>
      <p class="text">
        Dołącz do naszego sojuszu i uzyskaj dostęp do dużej liczby graczy oraz
        ciekawych contentów dla swojej gildii. W początkowych miesiącach w
        zamian za niewielką opłatę rentierską, a w następnych już zupełnie za
        darmo jako nasz sojusznik!
      </p>
    </article>
  </div>
</template>

<style scoped>
@import "./../../../assets/styling/subtitle.css";
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}

.text {
  margin: 0 auto;
  width: 75%;
  font-family: "Cambria", serif;
  font-size: 25px;
  line-height: 35px;
  text-indent: 15px;
}

.margin-top {
  margin-top: 100px;
}

.separatorImg {
  max-width: 300px;
}

.list {
  width: 75%;
  margin: 0 auto;
}

.list-item {
  margin: 30px 0;
  font-family: "Cambria", serif;
  font-size: 23px;
  line-height: 32px;
}

@media screen and (max-width: 786px) {
  .text {
    width: 90%;
  }

  .list {
    width: 85%;
  }
}
</style>
