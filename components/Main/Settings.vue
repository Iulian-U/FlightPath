<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { Settings, Github } from "lucide-vue-next";

const { locale } = useI18n();
const setLocale = (lang) => {
  locale.value = lang;
};
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
          <h2 class="px-2 py-2 font-bold text-white">{{ $t("langSelect") }}</h2>
          <MenuItem class="menu-item">
            <div class="link">
              <p @click="setLocale('en')">English</p>
            </div>
          </MenuItem>
          <MenuItem class="menu-item">
            <div class="link">
              <p @click="setLocale('ro')">Romanian</p>
            </div>
          </MenuItem>
          <MenuItem class="menu-item">
            <div class="link">
              <p @click="setLocale('it')">Italian</p>
            </div>
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
  @apply absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md  border border-blue-800 bg-gray-900 bg-opacity-90 shadow-lg ring-1 ring-black ring-opacity-5 blur-md focus:outline-none;
}

.menu-item {
  @apply hover: bg-light-700 text-gray-400 text-white transition-colors hover:bg-gray-800 hover:text-gray-600 hover:text-white;
}

.link {
  @apply px-2 py-2 hover:cursor-pointer;
}

.link a {
  @apply flex;
}

.link a p {
  @apply ml-2;
}
</style>
