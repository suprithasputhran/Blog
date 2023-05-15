<template>
    <div class="mx-20 my-16">
        <!-- popular tags -->
        <div class="flex flex-col">
            <h5 class="uppercase tracking-wider font-medium text-sm">Popular Tags</h5>
            <div class="flex flex-row w-full">
                <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image1" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}">  
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-16 h-7 py-1 text-center font-Varela  text-gray-600 font-medium rounded-3xl " v-for="data in state.item">{{data.attributes.catagory}}</p>
                    </div>
                </div>
                  <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image2" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}">
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-14 h-7 py-1 text-center font-Varela text-gray-600 font-medium rounded-3xl " v-for="data in state.item2">{{data.attributes.catagory}}</p>
                    </div>
                </div>
                  <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image3" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}"> 
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-28 h-7 py-1 text-center font-Varela  text-gray-600 font-medium rounded-3xl " v-for="data in state.item3">{{data.attributes.catagory}}</p>
                    </div>
                </div>
           <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image1" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}">  
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-16 h-7 py-1 text-center font-Varela  text-gray-600 font-medium rounded-3xl " v-for="data in state.item">{{data.attributes.catagory}}</p>
                    </div>
                </div>
                  <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image2" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}">
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-14 h-7 py-1 text-center font-Varela text-gray-600 font-medium rounded-3xl " v-for="data in state.item2">{{data.attributes.catagory}}</p>
                    </div>
                </div>
                  <div class="relative mt-4 w-1/4 ">
                    <div v-for="image in images.image3" class=" w-44 h-32 bg-cover rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer" :style="{backgroundImage:`url(${image})`}"> 
                    <p class="absolute mt-20 ml-2 text-sm bg-white w-28 h-7 py-1 text-center font-Varela  text-gray-600 font-medium rounded-3xl " v-for="data in state.item3">{{data.attributes.catagory}}</p>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- whats new? -->
        <div class="mt-12">
            <h5 class="uppercase tracking-wider font-medium text-sm">What's new?</h5>
            <div class="flex w-full mt-4">
                <div class="flex w-2/3 flex-col">
                    <router-link to="/sport">
                        <img class="w-full h-full rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer"  v-for="image in images.image1" :src="image" alt="sports"/>
                    </router-link>     
                <div class="mt-5 mr-24" v-for="data in state.item" :key="data.id">
                    <div class="flex flex-row my-1">
                        <p class="px-3 py-1 mr-3 bg-gray-100 text-sm tracking-wide font-Poly rounded-2xl">  {{data.attributes.catagory}}</p>
                    </div>
                    <router-link to="/sport">
                        <h1 class=" font-PlayFair tracking-wider leading-normal font-extrabold text-5xl hover:underline hover:decoration-2">{{data.attributes.Title}}</h1>
                    </router-link>
                
                    <p class="font-Raleway tracking-wider text-gray-700 leading-normal text-2xl my-4"> {{data.attributes.description}}</p>
                    <div class="flex justify-start w-9/12" v-for="image in images.image2" :key="image.id">
                        <img :src="image" class="mr-3 w-12 h-12 ease-out hover:-translate-y-1 transition-all rounded-full  cursor-pointer " alt="author image"/>
                        <div class="flex flex-col mt-2">
                            <p class="tracking-wider text-gray-600 text-sm">by {{data.attributes.author}}</p>
                            <p class="tracking-wider text-gray-600 text-sm">{{new Date(data.attributes.published_on).toLocaleDateString("en-us",
                                {
                                    month:"long",
                                    day:"2-digit", 
                                    year:"numeric",
                                    
                                })
                            }}
                            </p>
                        </div>
                </div>
                </div>
            </div>
        

        <!-- newsletter  -->

        <div class="flex flex-col w-1/3 ml-9">
        <div class=" flex flex-col items-center bg-amber-300 w-96 h-80 rounded-3xl">
            <h5 class="uppercase -ml-56 pt-5 pb-3 text-md font-medium tracking-wider">NewsLetter</h5>
            <p class="  pl-7 pr-4 tracking-wide text-3xl font-bold">Get all the latest posts delivered straight to your inbox.</p>
            <div class="flex flex-col items-center mt-3">
                <input class="w-72 h-12 px-5 rounded-3xl outline-none"  id="email" type="email" v-model="email" placeholder="Your email address" required />
                <div class="mt-2">
                    <button v-if="!subscribed" @click.prevent="subscribe" class="h-12 w-64 rounded-3xl text-slate-700 font-medium bg-white hover:w-72 " type="submit">Subscribe</button>
                    <button v-show="subscribed" type="button" class=" h-12 w-72 rounded-3xl bg-white text-slate-700 font-medium">Subscribed</button>
                </div>
            </div>
        </div>

        <!-- article 2 -->
        <div class="mt-7">
            <router-link to="/arts">
                <img class="w-full h-45 rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer"  v-for="image in images.image2" :src="image" alt="sports"/>
            </router-link>     
            <div class="mt-4" v-for="data in state.item2" :key="data.id">
                <div class="flex flex-row my-1">
                    <p class="px-3 py-1 mr-3 bg-gray-100 text-sm tracking-wide font-Poly rounded-2xl">  {{data.attributes.catagory}}</p>
                </div>
                <router-link to="/arts">
                    <h1 class=" font-PlayFair tracking-wider leading-normal font-extrabold text-2xl hover:underline hover:decoration-2">{{data.attributes.Title}}</h1>
                </router-link>
                <p class="mt-4 tracking-wider text-gray-600 text-sm">by{{data.attributes.author}}</p>
            </div>
        </div>        

        <!-- article 3 -->
        <div class="mt-7">
            <router-link to="/photography">
                <img class="w-full h-45 rounded-3xl ease-out hover:-translate-y-1 transition-all cursor-pointer"  v-for="image in images.image3" :src="image" alt="sports"/>
            </router-link>     
            <div class="mt-4 " v-for="data in state.item3" :key="data.id">
                <div class="flex flex-row my-1">
                    <p class="px-3 py-1 mr-3 bg-gray-100 text-sm tracking-wide font-Poly rounded-2xl">  {{data.attributes.catagory}}</p>
                </div>
                <router-link to="/photography">
                    <h1 class=" font-PlayFair tracking-wider leading-normal font-extrabold text-2xl hover:underline hover:decoration-2">{{data.attributes.Title}}</h1>
                </router-link>
                <p class="mt-4 tracking-wider text-gray-600 text-sm">by {{data.attributes.author}}</p>
            </div>
        </div> 
        </div>
        </div>
        </div>

        <div class="mt-7 mb-36">
            <h5 class="mb-3 uppercase tracking-wider font-medium text-sm">Featured Posts</h5>
            <div class="relative w-full h-full ">
            <div class="absolute flex flex-col items-center mt-14 mx-96">
            <h5 class="tracking-wider font-medium text-lg">Editor's Choice</h5>
             <h1 class="-mx-32 mt-9 font-PlayFair tracking-wide leading-tight font-extrabold text-6xl text-center">Get started with our best stories</h1>
            </div>
                <img class="w-full h-full rounded-3xl opacity-5 " src="../assets/backgroundimage.jpg" alt="background image"/>
            
            
                <div class="flex flex-row w-full -mt-96 ">
               
                <!-- Category 1 -->
                <router-link to="/sport" class="w-1/3 -mt-24 ml-9 ease-out hover:-translate-y-2 transition-all cursor-pointer">
                <div v-for="data in state.item" class="relative w-80 h-96 ml-12 rounded-3xl bg-amber-400">
                    <div class="flex flex-col mx-7">
                    <img class=" mt-9 w-64 h-40 rounded-2xl" v-for="image in images.image1" :src="image" alt="sportsimage"/>
                    <h1 class="mt-5 font-PlayFair tracking-wide leading-normal font-extrabold text-xl">{{data.attributes.Title}}</h1>
                    <p class="mt-4 tracking-wider text-gray-600 text-sm">by {{data.attributes.author}}</p>
                    </div>
                </div>
                </router-link> 

                  <!-- Category 2 -->
                <router-link to="/sport" class="w-1/3 -mt-24 ease-out hover:-translate-y-2 transition-all cursor-pointer">
                <div v-for="data in state.item2" class="relative w-80 h-96 rounded-3xl ml-4 bg-amber-400">
                    <div class="flex flex-col mx-7">
                    <img class=" mt-9 w-64 h-40 rounded-2xl" v-for="image in images.image2" :src="image" alt="sportsimage"/>
                    <h1 class="mt-5 font-PlayFair tracking-wide leading-normal font-extrabold text-xl">{{data.attributes.Title}}</h1>
                    <p class="mt-4 tracking-wider text-gray-600 text-sm">by {{data.attributes.author}}</p>
                    </div>
                </div>
                </router-link>

                  <!-- Category 3 -->
                <router-link to="/sport" class="w-1/3 -mt-24 ease-out hover:-translate-y-2 transition-all cursor-pointer">
                <div v-for="data in state.item3" class="relative w-80 h-96 -ml-4 rounded-3xl bg-amber-400">
                    <div class="flex flex-col mx-7">
                    <img class=" mt-9 w-64 h-40 rounded-2xl" v-for="image in images.image3" :src="image" alt="sportsimage"/>
                    <h1 class="mt-5  font-PlayFair tracking-wide leading-normal font-extrabold text-xl">{{data.attributes.Title}}</h1>
                    <p class="mt-3 tracking-wider text-gray-600 text-sm">by {{data.attributes.author}}</p>
                    </div>
                </div>
                </router-link>
              
            </div>
            <div class=" absolute w-full mt-5 text-right ">
            <p class=" mr-24 hover:underline cursor-pointer ">See all featured posts &rarr;</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive, onMounted } from 'vue';
import axios from 'axios';

const imageLink="http://localhost:1337";
const state = reactive({
      item: [],
      item2:[],
item3:[]
    })
const images1=ref('')
const images2=ref('')
const images3=ref('')
const images=reactive({image1:[],
image2:[],image3:[]});

    onMounted(async () => {
      await axios.get('http://localhost:1337/api/articles?populate=*')
       .then((response) => {
            state.item.push(response.data.data[0]);
            state.item2.push(response.data.data[1]);
            state.item3.push(response.data.data[2]);

                
            images1.value=response.data.data[0].attributes.image.data.attributes.url;
            images2.value=response.data.data[1].attributes.image.data.attributes.url;
            images3.value=response.data.data[2].attributes.image.data.attributes.url;
          // console.log(image1.value,image2.value,image3.value);

            images.image1.push(imageLink+images1.value);
            images.image2.push(imageLink+images2.value);
            images.image3.push(imageLink+images3.value);

            console.log( images.image1,images.image2,images.image3);
            return images.image1,images.image2,images.image3;
            return state.item,state.item2,state.item3;
      })
      .catch((error) => {
        console.log(error);
      });
    })

    //Newsletter
    const email = ref('');
    const subscribed = ref(false);

    const subscribe = () => {
      subscribed.value = !subscribed.value;
    }


</script>

