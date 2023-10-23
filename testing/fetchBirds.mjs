import Cache from "../cache.mjs";
import apiService from "../apiService.mjs";

const cacheLayer = new Cache(apiService);

(async () => {
  //test Fetch BIRDS
  console.log("FETCH BIRDS 🐥");
  console.log("----------------------------------------------------");
  const birdsResult1 = await cacheLayer.get("BIRDS");
  console.log("🧪 My Solution:  \n", birdsResult1, "\n");
  console.log(
    "✅ Should log:  \n{ data: { birds: ['sparrow'] }, status: 'Fresh' }\n\n\n\n"
  );

    //test  Fetch BIRDS with force = true
    console.log("FETCH BIRDS w/ FORCE 🐣");
    console.log("----------------------------------------------------");
    const birdsResult2 = await cacheLayer.get("BIRDS", true);
    console.log("🧪 My Solution:  \n", birdsResult2, "\n");
    console.log(
      "✅ Should log:  \n{ data: { birds: ['sparrow'] }, status: 'Fresh' }\n\n"
    );
})();
