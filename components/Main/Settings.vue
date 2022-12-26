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

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="menu-items">
        <div class="py-2">
          <MenuItem class="menu-item">
            <p>Test</p>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style scoped>
.menu-button {
  @apply inline-flex w-full justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-base font-medium text-white focus:outline-none;
}

.menu-items {
  @apply absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 blur-md focus:outline-none dark:border dark:border-blue-800 dark:bg-gray-900 dark:bg-opacity-90;
}

.menu-item {
  @apply hover: bg-light-700 text-gray-400 transition-colors hover:text-gray-600 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white;
}

.menu-items .icon-container {
  @apply flex h-full items-center;
}

.menu-items .icon-container .icon {
  @apply h-5 w-5;
}
</style>
