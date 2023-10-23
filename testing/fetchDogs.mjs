import Cache from "../cache.mjs";
import apiService from "../apiService.mjs";

const cacheLayer = new Cache(apiService);

(async () => {
  //test Fetch DOGS
  console.log("TEST FETCH DOGS 🐶");
  console.log("----------------------------------------------------\n\n");
  
  console.log("TEST 1.1 ")
  console.log("----------------------------------------------------");
  const dogsResult1 = await cacheLayer.get("DOGS");
  console.log("🧪 My Solution: \n", dogsResult1, "\n");
  console.log("✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Fresh' }\n\n\n\n");
  


  //👇 Simulate 100ms delay

  setTimeout(async () => {
    console.log("TEST 1.2 ")
    console.log("----------------------------------------------------");
    const dogsResult2 = await cacheLayer.get("DOGS");
    console.log("⌛100ms \n")
    console.log("🧪 My Solution: \n", dogsResult2, "\n");
    console.log("✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Cached' }\n\n\n\n");
  }, 100);


  
  //👇 Simulate 1000ms delay

  setTimeout(async () => {
    console.log("TEST 1.3\n\n ")
    console.log("----------------------------------------------------");
    const dogsResult3 = await cacheLayer.get("DOGS");
    console.log("⌛1000ms \n")
    console.log("🧪 My Solution:  \n",dogsResult3, "\n");
    console.log("✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Fresh' }\n\n\n\n");
  }, 1000);

})();
