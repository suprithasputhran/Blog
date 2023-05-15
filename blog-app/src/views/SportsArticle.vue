<template>
    <div class="mx-40  my-7  mb-16" v-for="data in state.item" :key="data.id" >
        <div class="mr-64" >
            <h1 class="font-PlayFair tracking-wide leading-normal font-extrabold text-6xl">{{data.attributes.Title}}</h1>
        </div>
        <div class="mr-64">
            <p class="font-Raleway tracking-wide text-gray-700 leading-normal text-2xl my-4"> {{data.attributes.description}}</p>
        </div>
        <div class="flex flex-row mx-3 my-7">
                <p class="px-3 py-1 mr-3 bg-gray-100 text-sm tracking-wide font-Poly rounded-2xl">  {{data.attributes.catagory}}</p>
        </div>
        <hr class="mt-7 mb-4 "/>
        <div class="flex w-full">
        <div class="flex justify-start w-9/12" v-for="image in images.image1" :key="image.id">
            <img :src="image" class="mr-3 w-12 h-12 ease-out hover:-translate-y-1 transition-all rounded-full  cursor-pointer " alt="author image"/>
            
            <div class="flex flex-col mt-2">
             <p class="tracking-wider text-gray-600 text-sm">by{{data.attributes.author}}</p>
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
        <div class=" flex flex-row justify-end mt-2 w-1/4">
            <div  class="text-gray-800 text-xl px-2 hover:bg-gray-200 rounded-s-2xl"><i class="fab fa-twitter"></i></div>
            <div  class="text-gray-800 text-xl px-2 hover:bg-gray-200"><i class="fab fa-facebook"></i></div>
            <div  class="text-gray-800 text-xl px-2 hover:bg-gray-200"><i class="fab fa-instagram"></i></div>
            <div  class="text-gray-800 text-xl px-2 hover:bg-gray-200 rounded-e-2xl"><i class="fab fa-linkedin"></i></div>       
        </div>  
    </div>
        

        <!-- image -->
        
        <div class="mt-9 -mx-20" v-for="image in images.image1" :key="image.id">
            <img :src="image"  class="rounded-3xl" alt="article image"/>
        </div>

        <!-- content -->

        <div class="flex flex-2 w-full mt-24 ">
            <div class="mr-16 w-2/3">
                <p  class="text-black tracking-wide leading-relaxed text-xl whitespace-break-spaces">{{data.attributes.content}}</p>
        

            <div class=" flex flex-row w-full mr-16 -mt-9 text-center h-16 ">
            <button  class="w-1/4 bg-gray-100 text-xl hover:bg-gray-200 rounded-s-2xl"><i class="fab fa-twitter"></i></button>
            <button  class="w-1/4 bg-gray-100 text-xl hover:bg-gray-200"><i class="fab fa-facebook"></i></button>
            <button  class="w-1/4 bg-gray-100 text-xl hover:bg-gray-200"><i class="fab fa-instagram"></i></button>
            <button  class="w-1/4 bg-gray-100 text-xl hover:bg-gray-200 rounded-e-2xl"><i class="fab fa-linkedin"></i></button>
                
            </div>            

            </div>
            <!-- Written by -->

            <div  class="w-2/6">
                <div class="w-80">
                    <h5 class="uppercase tracking-wider text-sm font-medium mb-2">Written by</h5>
                    <hr class="mb-3"/>
                        <div class="flex" v-for="image in images.image1" :key="image.id">
                            <img :src="image" class="mx-2 w-20 h-20 ease-out hover:-translate-y-1 transition-all rounded-full  cursor-pointer " alt="author image"/>
                            <p class="mx-5 mt-5 font-bold">{{data.attributes.author}}</p>
                        </div>
                </div>
            
            <div class="mt-12">
                <h5 class="uppercase tracking-wider text-sm font-medium mb-2">Editor's choice</h5>
                <hr class="mb-3"/>
                <router-link to="/arts">
                    <div class="flex my-4 w-80 h-18" >
                        <img v-for="image in images.image2" :key="image.id" :src="image" class="mx-2 mt-2 w-24 h-16 ease-out hover:-translate-y-1 transition-all rounded-2xl  cursor-pointer " alt="author image"/>
                        <p v-for="data in state.item2" :key="data.id"  class="mx-1 mt-3 text-base font-bold whitespace-break-spaces hover:underline ">{{data.attributes.Title}}</p>
                    </div>
                </router-link>

                <router-link to="/photography">
                    <div class="flex my-4 w-80 h-18" >
                        <img v-for="image in images.image3" :key="image.id" :src="image" class="mx-2 mt-2 w-24 h-16 ease-out hover:-translate-y-1 transition-all rounded-2xl  cursor-pointer " alt="author image"/>
                        <p v-for="data in state.item3" :key="data.id"  class="mx-1 mt-1 text-base font-bold whitespace-break-spaces hover:underline ">{{data.attributes.Title}}</p>
                    </div>
                </router-link>

            </div>

            <!-- newsletter -->

            <div class="mt-12 flex flex-col items-center bg-amber-300 w-80 h-80 rounded-3xl">
                <h5 class="uppercase -ml-44 pt-5 pb-3 text-xs font-medium tracking-wider">NewsLetter</h5>
                <p class="  pl-8 pr-16 tracking-wide text-2xl font-bold">Get all the latest posts delivered straight to your inbox.</p>
                <div class="flex flex-col items-center mt-3">
                    <input class="w-64 h-12 px-5 rounded-3xl outline-none"  id="email" type="email" v-model="email" placeholder="Your email address" required />
                    <div class="mt-2">
                        <button v-if="!subscribed" @click.prevent="subscribe" class="h-12 w-56 rounded-3xl text-slate-700 font-medium bg-white hover:w-64 " type="submit">Subscribe</button>
                        <button v-show="subscribed" type="button" class=" h-12 w-64 rounded-3xl bg-white text-slate-700 font-medium">Subscribed</button>
                    </div>
                </div>
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

