// apiService.mjs
const apiService = {
  fetch: async (identifier) => {
    if (identifier === "DOGS") {
      return {
        data: {
          dogs: ["puppy"],
        },
      };
    } else if (identifier === "CATS") {
      return {
        data: {
          cats: ["kitten"],
        },
      };
    } else if (identifier === "BIRDS") {
      return {
        data: {
          birds: ["sparrow"],
        },
      };
    } else {
      throw new Error("Invalid identifier");
    }
  },
};

export default apiService;

