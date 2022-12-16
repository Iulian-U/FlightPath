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
        <div class="px-1 py-1">
          <MenuItem>
            <p>Test</p>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Settings } from "lucide-vue-next";
</script>

<style>
.menu-button {
  @apply inline-flex w-full justify-center rounded-md bg-white  p-3 text-base font-medium text-sky-500  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;
}

.menu-items {
  @apply absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none;
}
</style>
