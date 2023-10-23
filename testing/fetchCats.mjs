import Cache from "../cache.mjs";
import apiService from "../apiService.mjs";

const cacheLayer = new Cache(apiService);

(async () => {
  //test  Fetch CATS
  console.log("TEST FETCH CATS 🐱");
  console.log("----------------------------------------------------");


  console.log("TEST 1.1 ");
  console.log("----------------------------------------------------");
  const catsResult1 = await cacheLayer.get("CATS");
  console.log("🧪 My Solution: \n", catsResult1, "\n");
  console.log(
    "✅ Should log:  \n{ data: { cats: ['kitten'] }, status: 'Fresh' }\n\n\n\n"
  );

  //👇 Set cache refresh to 10ms
  cacheLayer.setCacheRefresh(10);

  //👇 Simulate 100ms delay
  setTimeout(async () => {
    console.log("TEST 1.2 ");
    console.log("----------------------------------------------------");
    const catsResult2 = await cacheLayer.get("CATS");
    console.log("🧪 My Solution: \n", catsResult2, "\n");
    console.log(
      "✅ Should log:  \n{ data: { cats: ['kitten'] }, status: 'Fresh' }\n\n\n\n"
    );
  }, 100);
})();
