# Java-Rest-API-with-Frontend-UI
A WEB UI frontend for the REST API application . We can create, show, search and delete records from the UI
Implementing an application in java which provides a REST API with endpoints for searching, creating and deleting “task” objects.

Step 1 - Initializing Node.js Project - We initialize a Node.js project using npm and installing the Express framework.
 - Open a terminal in your project directory.
 - Run "npm init" and follow the prompts to create a package.json file.
 - Run "npm i express" to install the Express framework.
 - Step 2 - We Create and Run a Basic Express Application

- In the Project Directory we create a File Named App.js and Write the Basic Express Application in it .

- Host the Created Basic Express Application Locally and run the application using " node .\app.js" or "nodemon .\app.js" for automatic restarts on file changes.

- Now we build RESTful API for the Requeird Operations. we build upon the basic express application that was created.

- we add the required routes and controllers for Create , Search and Delete operations in the Express application.

- Now , we Test the application respones to requests using postman.

- A Simple UI , with HTML , CSS and Javascript is created to Handle the Requests and Stored in Same Directory as the Express Application within the folder named "Public"

The Backend Operations have been discussed in this Repo : " https://github.com/devmd6/Java-REST-API-example "

The Screenshots Below Represent the Requests made from the WEB UI , and the Responses received in MongoDB , Postman and the UI.

The WEB UI Hosted :
![Screenshot (217)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/83eb4b30-c855-42be-aef6-2bdc251ff3ea)

Input Given:
![Screenshot (205)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/1799c5ec-d506-479f-b603-3fb59bb376a4)

Requests Added to list of tasks:
![Screenshot (205)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/18d6edf3-99a0-4ff2-b841-a5cbf71334b1)

The Input Task is also Updated in MongoDB:
![Screenshot (207)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/64ffa21c-8a82-44f9-ba18-3846e7a39aea)

The Input Task is also Reflected in Requests Given By Postman:
![Screenshot (208)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/8d2497d9-cdf9-4eda-b33e-7c898f558ff5)

Results of Search by Task Name:
![Screenshot (218)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/a13bfade-f3d6-41a4-b473-6125b2b60120)

Results of Search By Assignee:
![Screenshot (212)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/cd831280-070a-4063-bb83-4668f9112a95)

The Input Task Deleted from the Web UI:
![Screenshot (219)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/fbecb8f7-2bc9-4fa2-861d-7887b96c6494)

The Task is Deleted from Mongodb:
![Screenshot (220)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/28492a6c-1f47-43e1-8eff-35a8f9717f01)

The Task is Deleted and shown after making requests from Postman:
![Screenshot (221)](https://github.com/devmd6/Java-Rest-API-with-Frontend-UI/assets/85011993/8ae1bc1a-f929-4acb-81ec-c927934304b0)










