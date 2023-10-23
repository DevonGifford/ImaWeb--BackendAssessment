import Cache from "../cache.mjs";
import apiService from "../apiService.mjs";

const cacheLayer = new Cache(apiService);

(async () => {
  // Test Fetch DOGS
  console.log("TEST FETCH DOGS 🐶");
  console.log("----------------------------------------------------\n\n");

  // Test 1.1
  console.log("TEST 1.1 ");
  console.log("----------------------------------------------------");
  const dogsResult1 = await cacheLayer.get("DOGS");
  console.log("🧪 My Solution: \n", dogsResult1, "\n");
  console.log(
    "✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Fresh' }\n\n\n\n"
  );

  // Simulate 100ms delay
  console.log("⌛100ms \n");
  console.log("TEST 1.2 ");
  console.log("----------------------------------------------------");
  const dogsResult2 = await cacheLayer.get("DOGS");
  console.log("🧪 My Solution: \n", dogsResult2, "\n");
  console.log(
    "✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Cached' }\n\n\n\n"
  );

  // Simulate 1000ms delay
  console.log("⌛1000ms \n");
  console.log("TEST 1.3\n\n ");
  console.log("----------------------------------------------------");
  const dogsResult3 = await cacheLayer.get("DOGS");
  console.log("🧪 My Solution:  \n", dogsResult3, "\n");
  console.log(
    "✅ Should log:  \n{ data: { dogs: ['puppy'] }, status: 'Fresh' }\n\n\n\n"
  );

  // Test Fetch CATS
  console.log("TEST FETCH CATS 🐱");
  console.log("----------------------------------------------------");

  // Test 2.1
  console.log("TEST 2.1 ");
  console.log("----------------------------------------------------");
  const catsResult1 = await cacheLayer.get("CATS");
  console.log("🧪 My Solution: \n", catsResult1, "\n");
  console.log(
    "✅ Should log:  \n{ data: { cats: ['kitten'] }, status: 'Fresh' }\n\n\n\n"
  );

  // Set cache refresh to 10ms
  cacheLayer.setCacheRefresh(10);

  // Simulate 100ms delay
  console.log("⌛100ms \n");
  console.log("TEST 2.2 ");
  console.log("----------------------------------------------------");
  const catsResult2 = await cacheLayer.get("CATS");
  console.log("🧪 My Solution: \n", catsResult2, "\n");
  console.log(
    "✅ Should log:  \n{ data: { cats: ['kitten'] }, status: 'Fresh' }\n\n\n\n"
  );

  // Test Fetch BIRDS
  console.log("FETCH BIRDS 🐥");
  console.log("----------------------------------------------------");
  const birdsResult1 = await cacheLayer.get("BIRDS");
  console.log("🧪 My Solution:  \n", birdsResult1, "\n");
  console.log(
    "✅ Should log:  \n{ data: { birds: ['sparrow'] }, status: 'Fresh' }\n\n\n\n"
  );

  // Test Fetch BIRDS with force = true
  console.log("FETCH BIRDS w/ FORCE 🐣");
  console.log("----------------------------------------------------");
  const birdsResult2 = await cacheLayer.get("BIRDS", true);
  console.log("🧪 My Solution:  \n", birdsResult2, "\n");
  console.log(
    "✅ Should log:  \n{ data: { birds: ['sparrow'] }, status: 'Fresh' }\n\n"
  );
})();
