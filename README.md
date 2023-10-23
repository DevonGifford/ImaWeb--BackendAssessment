<div align="center">
   <h1>ImaWeb / NextLane </h1>
   <h3>Backend Technical Assessment</h3>
   <p><em>Implement a Client-Side Caching Layer in JavaScript:</em><p>
</div><br/>





- This repository contains my local development/solution to the backend developer technical assessment. 

- The assessment was conducted on Codility, and this repository serves as my local development version.

- The assessment had built in test, howeve I wrote some quick manual test in local dev (see testing folder)


<br/>

### My Solution Overview

The general overview was to implement a client-side caching layer using JavaScript. 
The caching layer was designed as a cache class with methods that call the API only when specific requirements are met and return the cached response data.


<br/>

### Objective overview

✅ Cache Class Methods

✅ Constructor and API Injection

  ✅ GET function with force feature 

  ✅ set Cache with time to live 


✅ Data Fetching Rules



### Assumptions and Hints:

The fetch method from ApiService returns unique data for different identifiers.
Do not change the way the class is exported.
Follow the provided naming conventions for method names.
Assume the API never fails.

<br/><br/>

# Running Locally

To run the project locally, follow these steps:
<br/><br/>

### 1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/<this-repo-name🎯>.git
```
<br/>

### 2. Navigate to the project directory:
```bash
cd <this-repo-name🎯>
```
<br/>

### 3. Install the necessary dependencies:
```bash
npm install
```
<br/>

### 4. Run specific tests using the following commands:

#### Run all test's at once:

```bash
npm start
```

<br/>

#### Run individual test:

To fetch birds data:
```bash
npm run birds
```

To fetch cats data:
```bash
npm run cats
```
To fetch dogs data:
```bash
npm run dogs
```

⚠ Note: Make sure you have Node.js installed on your machine before running the above commands.

