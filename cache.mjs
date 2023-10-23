export default class Cache {
  constructor(apiService) {
    this.apiService = apiService;
    this.cache = {};
    this.ttl = 1000; // time to live in ms
  }

  // by default we want to use cache so force is false
  async get(identifier, force = false) {
    const noCachedDataOrForce = !this.cache[identifier] || force;
    // if forcing or if identifier not in the cache
    if (noCachedDataOrForce) {
      const { data } = await this.apiService.fetch(identifier);

      this.cache[identifier] = {
        data,
        timestamp: Date.now(),
        status: "Fresh",
      };

      return this.cache[identifier];
    } else {
      const cacheTimeStamp = this.cache[identifier].timestamp;
      const timeSinceCached = Date.now() - cacheTimeStamp;
      const expiredTime = timeSinceCached > this.ttl;

      // if cached version is older than time to live
      if (expiredTime) {
        const { data } = await this.apiService.fetch(identifier);

        this.cache[identifier] = {
          data,
          timestamp: Date.now(),
          status: "Fresh",
        };

        return this.cache[identifier];
      } else {
        const { data } = this.cache[identifier];

        return {
          data,
          status: "Cached",
        };
      }
    }
  }

  setCacheRefresh(ttl) {
    this.ttl = ttl;
  }
}

const cacheLayer = new Cache();
