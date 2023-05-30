# Global Aerospace Product Market Size by PN

This project was generated to support marketing teams involved in the Aerospace industry identify and gauge the size of the global aftermarket segment. Data is based on actual historical flying hours provided by [Aviation Edge](https://aviation-edge.com/).

## Technical Used

The following technologies were used in the building of this application:
- React.js
- Fetch API
- ChartJS
- React-Router-DOM
- React Hooks (useState, useEffect, useRef)

## Wireframes

![IMG_20230530_113941](https://github.com/SIMCHUNKIAT/CKSim_Project2/assets/126931095/7ea1c48a-5fdb-430d-8a53-8ff8020a2514)


## User Stories

1. User needs to be able to generate a competitive landscape based on the actual historical flight hours performed and the specifications of the products provided.
2. The historical flight hours is obtained through an API call to [Aviation Edge](https://aviation-edge.com/) API after entering the search criteria of 'Arrival Airport', 'Airline' and 'Date'.
3. The product specifications are provided by the users.

---

# Planning & Development Process

With the basic wireframes developed in the previous phase of the project, I knew I wanted 4 'pages'. The first would be a homepage which introduced the application to users, the second for users to enter their product specifications, the next to call upon the API and the last to generate the data and charts that will help marketers analyse the available market. This meant the necessity to use React Router and to plan for 4 routes.

In the home page component, a simple paragraph was sufficient to cover what i needed.
  
For the Product Specification entry page, I needed input fields for the user to key in 3 pieces of data, which would then need to be stored as an array. The user can add as many products as they wish. Once the data has been entered, it will appear in a numbered list within the same page.
  
Once that has been completed, the user will proceed to the Data page, which will fetch data from the API based on the search criteria input by the user. The list of flights will appear in a table within the same page. The newly generated array will also need to be stored until the application has been re-freshed.
  
In the last Analytics component, there is no need for further inputs from the user. The total flight hours and chart will be auto generated and displayed for the user for further usage.

## Problem Solving Strategy

Problems encountered as well as the solutions found are detailed below:
1. Localising and selecting the right data points within arrays/objects when trying to fetch API - I had difficulty in the beginning trying to select the right data. Resolved that by using console.log areas i wasn't sure was correct and commenting out those I was sure had no issues. Had to call in help in the end.
2. Getting errors when no entries were made yet - the code needed to know how to deal with null fields when trying to perform a .map function. Resolved the issue by inserting a Array.isArray(flights) && to make it understand to ignore the code and do nothing with null entries initially.
3. Data with the arrays were unmounting after switching routes every time - To resolve this issue, I performed a 2 step approach. Firstly, lifted state up one level and next used localstorage to store the data in the browser and call it back whenever it mounted again.
4. Calculation of flight hours initially came up with NaN returns - Performed console.log to see what the individual results were in the console, where i discovered that the output from the calculations were at times NaN as there were instances where a flight was still flying and the actual landing times were not available. Therefore, implemented code to skip those objects that did not meet specifications.

## Unsolved Problems

1. CSS to 'beautify the application'.
2. Drop down selection for input fields.
3. Log in screen.
4. Option to save the product lists into a server and use for later.
5. Option to export Analytics page into excel.

---

# APIs Used

[Aviation Edge](https://aviation-edge.com/) API was used as it had actual historical flight hour data information. 

---
# Acknowledgements

1. [Aviation Edge](https://aviation-edge.com/) for providing the API key and allowing me to use their product on a complementary basis for the application of this project.
2. The instructors and TAs from General Assembly who have patiently supported and guided me along this learning journey so far.
3. Theresa Nguyen for her free stock video.

---
# References

1. ChartJS Youtube Pie chart https://www.youtube.com/watch?v=6ajY1fJgbVM
2. Chart JS Tutorial https://www.youtube.com/watch?v=RF57yDglDfE
3. ChatGPT https://openai.com/blog/chatgpt
4. Localstorage Tutorial https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/


