# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. 

## Features

- Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday.
- Each appointment has one student and one interviewer.
- When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list.
- The user can save the appointment and view the entire schedule of appointments on any day of the week.
- Appointments can also be edited or deleted.
- The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.

## Screenshots

!["Main Page"](https://github.com/pedrolorandi/scheduler/blob/master/docs/main-page.png?raw=true)
**Main Page**

!["New Form"](https://github.com/pedrolorandi/scheduler/blob/master/docs/new-form.png?raw=true)
**New Form**

!["Edit Form"](https://github.com/pedrolorandi/scheduler/blob/master/docs/edit-form.png?raw=true)
**Edit Form**

## Dependencies

  - axios: ^0.20.0,
  - classnames: ^2.2.6,
  - normalize.css: ^8.0.1,
  - react: ^16.9.0,
  - react-dom: ^16.9.0,
  - react-scripts: 3.4.4

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
