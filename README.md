<div align="center">
   <h1>NextLane </h1>
   <h3>Backend Technical Assessment</h3>
   <p><em>Implement TTL Caching Layer in JavaScript:</em><p>
</div>
<br/>


# Introduction

This repository serves as the solution for the backend developer technical assessment, conducted on the Codility platform. The primary objective of this assessment was to implement a client-side caching layer using JavaScript.

| **Platform**           | Codility                                           |
|------------------------|-----------------------------------------------------|
| **Assessment Type**    | Fullstack / Backend Developer              |
| **Assessment Date**    | October 23, 2023                                   |
| **Assessment Time**    | 60 minutes                                         |
| **Tech Used**  | JavaScript, Node.js                                |

<br/>
<br/>


# Solution Overview

The main goal of this assessment was to create a caching layer in JavaScript that operates on the client side. This caching layer was designed as a cache class, featuring methods that interact with the API selectively based on specific requirements. The result is the retrieval of cached response data, minimizing unnecessary API calls.


## Objectives:
- <strong>Constructor and API Injection ✔ </strong>
<br/>
<em>The cache class constructor is responsible for initializing the cache object. It accepts an instance of the API service, allowing seamless integration.</em>

- <strong>Data Fetching Rules ✔ </strong>
<br/>
<em>The caching layer employs specific rules to determine whether to fetch data from the API or retrieve it from the cache. These rules ensure that data remains fresh and up-to-date.</em>

- <strong>Cache Class Methods ✔ </strong>
<br/>
<em>The cache class is equipped with two fundamental methods:</em>

  - <strong>get(identifier, force) ✔ </strong>
<br/>
<em>The get method retrieves data from the API, utilizing an identifier. Additionally, it offers a force option to explicitly trigger data fetching.</em>

  - <strong>setCacheRefresh(ttl) ✔ </strong>
<br/>
<em>This method sets the time-to-live (TTL) for cached data, specifying how long it remains considered fresh.</em>


## Testing
The assessment included built-in tests. Additionally, to validate the functionality of the solution, manual tests were conducted in the local development environment.

To see expected results vs. actual results, run the provided tests. You can refer to the "Running Locally" section below. 

**Please note:**
- These tests were conducted solely to quickly provide a comparison between actual and expected results during development.
- Normally, I might have followed a Test-Driven Development (TDD) approach and set up testing frameworks like Vitest or Jest. However, I didn't have the time to set up the environment within the allotted time frame.

<br/>

## Additional Notes & Self-Assessment
I found the assessment to be challenging but ultimately rewarding. It pushed me to think critically about using classes again. Luckily, I had just been looking at various OOP concepts, which greatly helped with this task because of the familiarity I gained with class-based structures.

Furthermore, I found the time constraint to be both stimulating and demanding. It encouraged me to prioritize tasks efficiently and maintain a focus on clean, effective code. The manual tests in the local development environment were instrumental in gaining confidence in the caching layer's functionality. 

Overall, this assessment provided a valuable opportunity to hone my problem-solving skills and get a refresher on class-based programming paradigms.



<br/>
<br/>
<br/>


# Running Locally

To run the project locally, follow these steps:
<br/><br/>

## 1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/NextLane--BackendAssessment.git
```

## 2. Navigate to the project directory:
```bash
cd NextLane--BackendAssessment
```

## 3. Install the necessary dependencies:
```bash
npm install
```

## 4. Run specific tests using the following commands:

### Run all test's at once:

```bash
npm start
```

<br/>

### Run individual test:

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

---

⚠ Note: Make sure you have Node.js installed on your machine before running the above commands.

