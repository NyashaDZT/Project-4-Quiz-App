![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Quizlympics - Full Stack Web Application


Quizlympics is a full-stack web application designed to create, manage, and take quizzes. This project aims to provide users with a platform to explore various quizzes, create their own, and challenge others.

## Timeframe & Work Team

The time-frame for this project was 2 days of planning and 5 days of working on the project, it was a solo project.

## Deployment Link & Github:

Deployment link: https://quizlympics-83ffc0fee857.herokuapp.com/

## Features

Quiz Creation: Users can create quizzes by providing questions, multiple-choice answers, and correct answers.
Quiz Taking: Users can take quizzes and receive instant feedback on their scores.
User Authentication: Secure user authentication ensures a personalised experience, allowing users to track their quiz history.
Profile Page: Users have a dedicated profile page displaying their bio, profile picture, owned quizzes, and completed quizzes.

## Technologies Used

## Frontend:
- React
- React Router
- React Bootstrap
- Axios
- SASS
- JWT incl SimpleJWT


## Backend:
- Django incl. Pip, Django-environ for virtual environment.
- Django REST Framework
- PostgreSQL
## API:
- RESTful API design
- Token-based authentication
## Deployment & Project Setup:
- Git, Github, Heroku

# Getting Started
Clone the repository:
![Screenshot 2024-01-23 at 11 09 04](https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/0ae411f8-d81a-4e89-b258-5a9bdb78ab05)

Navigate to the project directory:

<img width="171" alt="Screenshot 2024-02-13 at 10 02 59" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/abfa5ee0-121e-4667-aab5-80ba4a336bdb">

Install dependencies:

<img width="604" alt="Screenshot 2024-02-13 at 10 07 04" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/e267dac4-225f-4757-8578-75e6835be433">

Database Setup:

Create a PostgreSQL database and update in “settings.py” within the root project folder.

Run Migrations:

<img width="601" alt="Screenshot 2024-02-13 at 10 08 32" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/ba4e464c-44bb-43a0-8122-3cdf8cc9e7d7">

Run the application:

<img width="599" alt="Screenshot 2024-02-13 at 10 08 45" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/fa2e839f-a76f-4711-ae57-0be2f92f149a">

## Open your browser:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
  
## Technical Requirements
- Build a full-stack application
- Use a Python Django API 
- Consume your API with a separate front-end built with React
- Be a complete product
- Complex Functionality
- Implement thoughtful user stories/wireframes
- Have a visually impressive design
- Be deployed online

## Necessary Deliverables
- A working app hosted on the internet
- A link to your hosted working app in the URL section of your Github repo
- Git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project


# Planning

Planning was completed with the use of Excalidraw for the creation of a basic wireframe, and an ERD was also created, these changed during development.

Wireframe:
<img width="475" alt="Screenshot 2024-02-13 at 10 13 55" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/66058703-b456-47f0-8af7-e951a6088b35">


Initial ERD:
<img width="510" alt="Screenshot 2024-02-13 at 10 19 51" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/d194f601-2f39-499f-a017-f1e36bfac9da">

## Project Structure - Backend

The backend is powered by Django and Django REST Framework, offering robust API endpoints for user authentication, quiz management, and result tracking.
api: Django REST Framework files for API endpoints.
users: Django app for user-related functionalities.
quizzes: Django app for quiz-related functionalities.
results: Django app for result-related functionalities.
Questions: Django app for question & answer-related functionalities.
Within the Quiz App I picked a fairly complex but interconnected system that encapsulated the relationships between quizzes, questions answers and user results and the relationships where as follows:

## Quizzes and Questions
Each quiz could have multiple questions associated with it.
Questions were linked to quizzes through a foreign key relationship allowing each question to belong to a specific quiz:
The quiz model.

<img width="287" alt="Screenshot 2024-02-13 at 10 20 55" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/d524f6ed-7759-46f8-8ce5-9754059e0198">

Questions and Answers
Questions in turn could also have multiple answers, as the quizzes are designed only for multiple choice, answers were modeled to belong to a specific question through a one-to-many relationship. Each answer had a Boolean field for “correct”, with only the correct answer being set to true.

<img width="604" alt="Screenshot 2024-02-13 at 10 34 53" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/ddccc561-78e5-428f-b8dc-eda22a1e9655">

## User Results
The results model was used to keep a track of the users results, this stored information about the user, the quiz they attempted and their corresponding score.
When a user completed a quiz the score was calculated and stored in an instance of the results. By linking the user ID, quiz ID, we would then be able to analyse a user’s performance within a specific quiz and use that information to inform the user if they had passed or failed the quiz.

<img width="461" alt="Screenshot 2024-02-13 at 10 39 20" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/61c76c70-4b9c-48d0-8fae-221cf596f254">

# Frontend
The frontend is built using React.js, providing a dynamic and responsive user interface. Key components include:
Navbar: Navigation bar for easy access to quizzes, login, and registration.
Quiz Pages: Display quizzes, allow quiz creation, and provide a quiz-taking interface.
Profile Page: A dedicated page displaying user information, owned quizzes, and completed quizzes.
Quiz create: A page that has the functionality to create quizzes, achieved in a dynamic and user friendly way, by allowing users to collate quiz, question and answer info on one page.
Quiz edit: Allows users to delete and update quizzes which may be found which they have ownership of.
The setup of the front-end is pretty routine as far as the code set-up, I began by creating a Navbar to allow navigation on the site during development, I used the React Bootstrap Framework for this purpose. I then created the login page so that I could create the login functionality on the webpage, such as displaying a log out button when the user was logged in rather than a login button etc. The next step after this was to create the Quiz index page, this page is where all the quizzes held within the API would be called and displayed for the user to pick a quiz to complete, the most interesting part of this build in general was the filters.
In the index function of the quiz component, the useLoaderData hook is employed to fetch quiz data, and the retrieved data is then stored in the local state variable quizzes using the setQuizzes function. The Filter component is rendered, passing the quizzes array and the setFilteredQuizzes function as props. The Filter component handles the logic for filtering quizzes based on topic, difficulty, and the number of questions. The filtered quizzes are stored in the filteredQuizzes state variable, and the JSX section is populated with the cards representing the quizzes from the filteredQuizzes array.

<img width="446" alt="Screenshot 2024-02-13 at 10 45 16" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/b932a5b1-3e86-4d2d-b620-8a0bed2b332c">

The Filter component, on the other hand, utilises the useState and useEffect hooks to manage the state of selected filters such as selectedTopic, selectedDifficulty, and selectedNumQuestions. The useEffect hook is triggered whenever there are changes to the selected filters or the quiz data. The filtering logic within the useEffect block filters the quizzes based on the selected filters, updating the filteredQuizzes state accordingly. The component then renders three filter groups for topic, difficulty, and number of questions, each containing a label and a dropdown menu. The dropdown menus are dynamically populated with options based on the available topics, difficulty levels, and numbers of questions in the fetched quiz data.
<img width="600" alt="Screenshot 2024-02-13 at 10 47 38" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/00e3808e-85cd-46d7-9ff9-3058981e9b71">


Overall, this filtering mechanism provides users with a dynamic and interactive way to refine their quiz search based on different criteria, enhancing the user experience and making the application more versatile. The other components were fairly straight forward in their design and challenges and other wins have been listed below within the readme.

# Challenges:

During the development of the Quiz App, I encountered several challenges on the backend that required careful problem-solving and debugging. 
One notable issue revolved around the integration of many-to-many relationships and handling categories for quizzes. Initially, there were difficulties in properly configuring and updating the database schema to accommodate the desired data structure. Specifically, I faced issues with the handling of categories, leading to errors such as direct assignment to the forward side of a many-to-many set being prohibited. Resolving this required a comprehensive understanding of Django's model relationships and migrations. Through collaborative troubleshooting and persistent debugging, I successfully implemented a solution that took out the need for the redundant categories model, instead implementing a “topic” field on the quiz model, which simplified the process and gave me a way of implementing and categorising the quizzes of a certain topic, however because this meant that each quiz was limited to a single category.


Setting up the create quiz page presented challenges that required tailored adjustments in the model views to ensure seamless data handling. Specifically, the complexity arose from the need to send data in a structured manner within a single document, with questions and answers nested into quizzes.To address this, modifications were made to the model views, allowing for the creation of quizzes with nested questions and corresponding answers. This structural adjustment facilitates a more efficient and organised data flow, enabling the creation of comprehensive quizzes through a unified process, a picture below details how this was achieved.

<img width="442" alt="Screenshot 2024-02-13 at 10 48 41" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/631ab9e9-29d0-4451-a4f5-21146c84ee30">
These adjustments ensure that the data sent from the create quiz page is properly organised and can be easily handled by the backend, contributing to a more streamlined and effective workflow. 


# Wins

Remarkably, the Quizlympics app was developed with impressive speed, achieving functionality and usability within just four days of dedicated work. This rapid turnaround is a testament to the efficiency and skill exhibited during the app's creation. The focused effort and strategic planning employed throughout the development process allowed for the swift integration of features such as quiz creation, user profiles, and quiz completion tracking. Despite the tight timeline, the app stands as a testament to effective project management and agile development practices, showcasing the ability to deliver a fully functional and user-friendly quiz platform in a remarkably short timeframe.


Another win accomplished during development was a good use of logic  in allowing the creation of quizzes from the client-side. The provided code snippets demonstrate a significant win in enabling users to dynamically create questions and answers, contributing to a more flexible and user-friendly quiz creation experience. The ‘handleAddQuestion’ function allows users to add new questions to the quiz dynamically. By incrementing the ‘number_of_questions’ in the state and adding a new question object to the ‘questions’ array, users can easily expand the quiz structure without being constrained by a predefined number of questions. This feature provides a more intuitive and adaptive way of building quizzes.
<img width="594" alt="Screenshot 2024-02-13 at 10 50 49" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/e847dd96-345a-41ce-bab0-8e9ae5fc1715">


The dynamic rendering of JSX based on the number of questions and answers in the quiz data allows for a seamless and interactive quiz creation interface. Users can see and modify questions and answers in real-time, with the ability to add new answers dynamically using the ‘handleAddAnswer’ function. This approach enhances the user experience by providing an intuitive and responsive quiz-building process.

<img width="459" alt="Screenshot 2024-02-13 at 10 52 37" src="https://github.com/NyashaDZT/Project-4-Quiz-App/assets/124045473/de7851de-5979-4e80-8357-f742e8c41a36"> CreateQuiz page.
Bugs & Future Improvements

During the development of the Quizlympics site, several bugs were encountered and addressed to enhance the overall user experience and functionality. One notable issue was related to the quiz update feature in the user profile. Initially, there were difficulties in pre-populating the quiz edit form with existing data, hindering users from smoothly updating their quizzes. This was resolved by carefully adjusting the useEffect hook to ensure that quiz data is correctly set upon loading the edit page. Additionally, while implementing the quiz creation page, some challenges were faced in managing the dynamic addition of questions and answers. The initial implementation had occasional issues with adding answers to newly created questions. This was addressed by refining the logic in the handleAddAnswer function, ensuring a seamless process for users to add and modify questions and answers dynamically. These bug fixes were crucial to providing a stable and reliable platform for users to create, edit, and take quizzes without encountering unexpected disruptions.

During the deployment phase, challenges arose with certain endpoints, notably the login function and user creation. The issues led to unexpected behaviour, hindering the seamless operation of these critical features on the live site. Diagnosing and addressing deployment-related problems can be complex, involving considerations such as server configuration, environment variables, or networking issues. Rest assured, resolving these deployment challenges is a top priority, and the necessary steps will be taken to ensure that all endpoints, including login and user creation, function as intended. Users can expect a reliable and fully operational platform as these deployment issues are meticulously addressed and rectified.


## Contributing

If you'd like to contribute to Quizlympics, please follow these steps:
Fork the repository.
Create a new branch.
Make your changes.
Create a pull request.

