

<script lang="ts" setup>
  import { onMounted, onBeforeMount } from 'vue';
  

  const topButton = ref<boolean>(false);

  // Show and hide Button based on it's viewHeight
  function handleScroll() {
    const scrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / totalHeight;

    topButton.value = scrollPercentage > 0.4;
  };

  // Scroll to the Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Start scroll event listener
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  // Remove event listener when the component is unmounted
  onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
  });


</script>


<template>
  <div class="default-layout scroll-smooth">
    <NavBar class="relative z-[99] inset-0 bottom-[unset] cursor-default bg-transparent" />
      
      <!--SearchBar  -->
      <!-- <div>
        <SearchBar />
      </div> -->

      <div>
        <slot></slot>
      </div>

      <!-- Scroll To Top Button -->
      <button
        v-if="topButton"
        @click="scrollToTop"
        class="fixed flex items-center justify-center bottom-20 right-8 bg-gradient-to-br from-(--dark-red) to-(--dark-orange) hover:scale-102 w-12 h-20 text-(--white) rounded-lg shadow-lg z-99 cursor-pointer opacity-100 hover:opacity-85 ease-in-out duration-300 transition-all"
      >
        <Icon 
          name="mdi:arrow-up" 
          class="font-bold text-2xl text-(--white)" 
        />

        
      </button>
      
    <FooTer/>
  </div>
</template>


<style lang="css" scoped>
  .default-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content minmax(0, 1fr) max-content;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100vw;
    background-color: transparent;
    color: transparent;
    font-size: 1rem;
    font-family: var(--font-notosans);
    font-weight: normal;
  }
</style>