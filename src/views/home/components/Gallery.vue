<template>
  <div class="wrapper">
    <img 
      src="./../../../assets/images/gallery/1.webp" 
      alt="Ekipa w kryjówce" 
    />
    <img
      src="./../../../assets/images/gallery/2.webp"
      alt="Ekipa na ścieżkach"
    />
    <img 
      src="./../../../assets/images/gallery/3.webp" 
      alt="Ekipa w Avalonie" 
    />
    <img
      src="./../../../assets/images/gallery/4.webp"
      alt="Pokonani przeciwnicy"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 50px 0;
  overflow: hidden;
}

img {
  width: 100%;
  min-width: 250px;
  max-width: 540px;
  height: auto;
  transition: transform 0.3s linear;
}

img:hover {
  cursor: pointer;
  transform: scale(1.25);
}

@media screen and (max-width: 768px) {
  img {
    margin: 0 10px;
  }

  img:hover {
    cursor: default;
    transform: scale(1);
  }
}
</style>
