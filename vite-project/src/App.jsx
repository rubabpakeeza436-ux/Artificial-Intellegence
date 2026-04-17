import React from 'react'
import Image1 from"/download.jfif"
import Image2 from"/narrow-ai.webp"
import Image3 from"/Strong.jfif"
import Image4 from"/super.jfif"

function App() {
  return (
    
<div class="bg-green-400 h-full w-full ">
<nav class=" bg-black flex flex-wrap justify-center ">

<img src={Image1} class="h-20 w-32 ml-5 "/>
  <h1 class=" text-white text-4xl  mr-auto ml-60 mt-5"> Artificial Intelligence</h1>
  <p class="text-white mt-7 mr-10">Home</p>
  <p class="text-white mt-7 mr-10">About</p>
  <p class="text-white mt-7 mr-10 ">Contact</p>
  
  
  
</nav>
 

<div class="flex flex-wrap justify-center">
  <div class="w-full md:w-1/2 xl:w-1/3 p-4 mt-10">
    <div class="bg-white rounded shadow-md">
      <img src={Image2} class="object-cover h-80 w-full"/>
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">Narrow AI</h2>
        <p class="text-gray-600"> Designed to perform a specific task, such as image recognition, language translation, or playing chess.</p>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/2 xl:w-1/3 p-4 mt-10">
    <div class="bg-white rounded shadow-md">
      <img src={Image3} class="object-cover h-80 w-full"/>
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">General AI</h2>
        <p class="text-gray-600">Aims to match human intelligence and perform any intellectual task..</p>
      </div>
    </div>
  </div>
  <div class="w-full md:w-1/2 xl:w-1/3 p-4 mt-10">
    <div class="bg-white rounded shadow-md">
      <img src={Image4} class="object-cover h-80 w-full"/>
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-2">Superintelligence</h2>
        <p class="text-gray-600"> Significantly surpasses human intelligence and capabilities.</p>
      </div>
    </div>
  </div>
</div>


</div>
    
    
      
    
  )
}

export default App
