<template>
    <div class=" px-16 py-4">
        <div class=" flex  justify-between items-center">
        <!-- Blog Header -->
        <router-link to="/" class=" tracking-wider font-Yatra text-6xl font-semibold">
          Blog
        </router-link>
  
        <!-- Category Dropdown -->
        <div class="relative z-10">
          <div class="text-gray-700 text-xl font-Poly hover:text-hover-text font-medium tracking-wide flex items-center" @click="toggleDropdown">
            Categories

        </div>

        <!-- Dropdown Menu -->
        <div
          v-if="showDropdown"
          class="absolute mt-7 px-4 py-4 bg-white rounded-md shadow-lg z-50"
        >
          <router-link
            to="/sport"
            class="block px-4 py-2 text-xl tracking-wider font-Poly text-gray-700 hover:bg-gray-100"
          >
            Sports
          </router-link>
          <router-link
            to="/photography"
            class="block px-4 py-2 text-xl tracking-wider font-Poly text-gray-700 hover:bg-gray-100"
          >
            Photography
          </router-link>
          <router-link
            to="/arts"
            class="block px-4 py-2 text-xl font-Poly tracking-wider  text-gray-700 hover:bg-gray-100"
          >
            Arts
          </router-link>
        </div>
      </div>

      <!-- Contact Us Link -->
      <router-link
        to="/contact"
        class="text-black text-xl font-Poly hover:text-hover-text  font-medium"
      >
        Contact Us
      </router-link>
      </div>
  </div>
  
</template>

<script setup>
import { ref } from "vue";
    const showDropdown = ref(false);

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    }
</script>
