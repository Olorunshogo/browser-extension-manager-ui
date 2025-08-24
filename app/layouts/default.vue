
<script lang="ts" setup>

</script>


<template>
  <div class="default-layout scroll-smooth bg-gradient-to-br from-(--light-bg-1) to-(--light-bg-2) font-(--font-notosans)">
    <!-- Navigation Bar -->
    <NavBar class="relative z-[99] inset-0 bottom-[unset] cursor-default bg-transparent" />
      

      <div class="flex-1 relative">
        <slot></slot>
      </div>
      
    <FooTer/>
  </div>
</template>


<style lang="css" scoped>
  .default-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content minmax(0, 1fr) max-content;
    gap: 2rem;
    min-height: 100vh;
    min-height: 100dvh;
    width: 100vw;
    font-size: 1rem;
    font-family: var(--font-notosans);
    font-weight: normal;
  }

  /* .default-layout > .relative {
    grid-row: 2;
  } */
</style>