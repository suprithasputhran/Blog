<template>
    <div class="flex flex-row">
        <div class="flex flex-col w-2/3 items-center">
            <h1 class="mt-16 text-6xl font-PlayFair font-extrabold text-slate-700">Blog</h1>
            
            <div class="flex flex-col items-center">
                <h2 class="mt-12 mb-5 font-Raleway font-bold text-3xl">Contact us</h2>
                <input class="w-80 h-12 px-5 shadow text-base py-6 bg-gray-100 outline-none rounded-3xl hover:bg-gray-200"  id="name" type="text" v-model="email" placeholder="Your name" required />
                <input class="w-80 h-12 mt-3 shadow px-5 text-base py-6 bg-gray-100 outline-none rounded-3xl hover:bg-gray-200" id="email" type="email" v-model="email" placeholder="Your email address" required />
                <textarea class="w-80 h-32 mt-3 shadow py-5 text-base px-5 rounded-3xl bg-gray-100 outline-none hover:bg-gray-200" id="message"  name="message"
          rows="5" cols="33" placeholder="Your message"></textarea>
                <div class="mt-5">
                    <button class="h-12 w-40 px-5 font-semibold rounded-3xl text-center text-lg bg-amber-300 hover:w-48 hover:bg-amber-300" type="submit">Send message</button>
                </div>
            </div>
        </div>
        <div class="text-white w-1/3">
            <img class="w-full h-screen" src="../assets/contactimage.jpg" alt="contact image"/>
        </div>
    </div>
</template>

<script setup>

</script>

