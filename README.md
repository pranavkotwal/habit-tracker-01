## About 
Habit tracker app with two views
- Home View for Entering a Habit to track
- Habit View for tracking the Habit with different Status

## How-To-Use

- Clone this project
- Start by installing npm and mongoDB
- Run the Mongo Server.
- Navigate to Project Directory
    ```
    cd habitttracker
    ```
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
    ```

# Folder Structure 
```
Habitttracker
    |-----assets
    |       |--- css
    |       |     |-- habit.css
    |       |     |-- home.css
    |       |     └-- layout.css
    |       |--- js
    |       |     |-- habit.js
    |       |     └-- moment.js
    |       |--- sass
    |             |-- habit.scss
    |             |-- home.scss
    |             └-- layout.scss
    |------ config
    |         └--- mongoose.js
    |------ controllers
    |         └--- homeControllers.js
    |------ models
    |         └--- habit.js
    |------ routers
    |         └--- index.js
    |------ views
    |         |--- habit..ejs
    |         |--- home.ejs
    |         └--- layout.ejs
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md

