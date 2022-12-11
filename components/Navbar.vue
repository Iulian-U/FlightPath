<template>
  <nav>
    <a class="nav-logo">
      <img src="@/assets/images/paper-plane.png" alt="" class="logo" />
      <p>FlightPath</p>
    </a>
    <a>About</a>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  @apply flex justify-between items-center px-2 h-20;
}

nav a {
  @apply flex items-center px-2 bg-white p-2 rounded-md shadow-sm h-12;
}

.nav-logo {
  @apply flex flex-row justify-around items-center;
}

.nav-logo p {
  @apply ml-1 text-2xl antialiased font-bold tracking-normal text-sky-500;
}

.nav-logo img {
  @apply h-10 rounded-md;
}
</style>
