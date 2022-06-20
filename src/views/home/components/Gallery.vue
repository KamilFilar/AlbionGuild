<template>
  <div class="wrapper">
    <!-- 
    <img src="./../../../assets/images/gifs/1.gif" alt="description" />
    <img src="./../../../assets/images/gifs/3.gif" alt="description" />
    <img src="./../../../assets/images/gifs/2.gif" alt="description" /> 
    -->
    <img src="./../../../assets/images/gallery/1.webp" alt="description" />
    <img src="./../../../assets/images/gallery/2.webp" alt="description" />
    <img src="./../../../assets/images/gallery/3.webp" alt="description" />
    <img src="./../../../assets/images/gallery/4.webp" alt="description" />
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 100px;
}

img {
  width: 100%;
  min-width: 250px;
  max-width: 550px;
  height: auto;
  transition: .3s;
}

img:hover {
    cursor: pointer;
    transform: scale(1.25);
}
</style>
