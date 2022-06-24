<template>
  <div class="wrapper">
    <img 
      src="./../../../assets/images/gallery/1.webp" 
      alt="Ekipa w kryjówce"
      width="100%"
      height="auto" 
    />
    <img
      src="./../../../assets/images/gallery/2.webp"
      alt="Ekipa na ścieżkach"
      width="100%"
      height="auto" 
    />
    <img 
      src="./../../../assets/images/gallery/3.webp" 
      alt="Ekipa w Avalonie"
      width="100%"
      height="auto"  
    />
    <img
      src="./../../../assets/images/gallery/4.webp"
      alt="Pokonani przeciwnicy"
      width="100%"
      height="auto" 
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
  min-width: 250px;
  max-width: 540px;
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
