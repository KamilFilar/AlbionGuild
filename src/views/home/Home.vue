<template>
  <Welcome />
  <AboutUs />
  <JoinUs />
  <Gallery />
</template>

<script>
import Welcome from "./components/Welcome.vue";
import AboutUs from "./components/AboutUs.vue";
import JoinUs from "./components/JoinUs.vue";
import Gallery from "./components/Gallery.vue";

export default {
  components: {
    Welcome,
    AboutUs,
    JoinUs,
    Gallery,
  },
};
</script>
