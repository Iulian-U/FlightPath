<template>
  <a>
    <img src="@/assets/images/paper-plane.png" alt="logo" />
    <p>FlightPath</p>
  </a>
</template>

<style scoped>
a {
  @apply flex items-center  bg-white p-4 rounded-md shadow-sm h-12;
}

p {
  @apply ml-1 text-2xl antialiased font-bold tracking-normal text-sky-500;
}

img {
  @apply h-10 rounded-md;
}
</style>
