<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Settings, Monitor, Sun, Moon } from "lucide-vue-next";

</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="menu-button">
        <Settings />
      </MenuButton>
    </div>

    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <MenuItems class="menu-items">
        <div class="py-2">
          <MenuItem class="menu-item">
          <FeaturesThemeButton :title="'System Theme'" :color="'system'">
            <template #btnIcon>
              <span class="icon-container">
                <Monitor class="icon" />
              </span>
            </template>
          </FeaturesThemeButton>
          </MenuItem>

          <MenuItem class="menu-item">
          <FeaturesThemeButton :title="'Light Theme'" :color="'light'">
            <template #btnIcon>
              <span class="icon-container">
                <Sun class="icon" />
              </span>
            </template>
          </FeaturesThemeButton>
          </MenuItem>

          <MenuItem class="menu-item">
          <FeaturesThemeButton :title="'Dark Theme'" :color="'dark'">
            <template #btnIcon>
              <span class="icon-container">
                <Moon class="icon" />
              </span>
            </template>
          </FeaturesThemeButton>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.menu-button {
  @apply inline-flex w-full justify-center rounded-md bg-white dark: bg-blue-400 p-3 text-base font-medium text-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;
}

.menu-items {
  @apply absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus: outline-none;
}

.menu-item {
  @apply text-gray-400 hover: text-gray-600 hover: bg-light-700 transition-colors;
}

.menu-items .icon-container {
  @apply h-full flex items-center;
}

.menu-items .icon-container .icon {
  @apply w-5 h-5;
}
</style>
