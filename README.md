# Demeter Dashboard API

This API provides access to student and user data for the [Demeter Dashboard](https://main.d3rc3gpot85iux.amplifyapp.com/) app built for team Phantom Elephants' final project at [School of Code](https://www.schoolofcode.co.uk/). For more information about the frontend of the application, please its [repository](https://github.com/onlyasmalllizard/phantom-elephants-frontend).

## Contents

1. [Technology Used](#technology-used)
2. [Database Architecture](#database-architecture)
3. [Routes](#routes)
4. [Meet Phantom Elephants](#meet-phantom-elephants)

## Technology Used

- TypeScript
- Node.js
- PostgreSQL

Deployed on [Heroku](https://shielded-springs-20982.herokuapp.com/)

## Database Architecture

![The database has five tables: Bootcamps, Students, Assignments, Comments, and Users. Students and Users stores the primary key of Bootcamps item that the person is linked to. Assignments and Comments hold the primary key of the student that the item is associated with.](./finalDataArchitecture.drawio.svg)

## Routes

Successful responses come through in the following object:

```
{
  success: true,
  message: 'Descriptive message',
  payload: // If request affected a single item, an     object. If request affected multiple items, an array of objects.
}
```

Unsucessful responses return the following object:

```
{
  success: false,
  message: 'Descriptive message'
}
```

### Bootcamps

| Request   | Route          |
| --------- | -------------- |
| GET all   | /bootcamps     |
| GET by id | /bootcamps/:id |
| POST      | /bootcamps     |
| PUT       | /bootcamps     |
| DELETE    | bootcamps/:id  |

#### Shape of Response

```
[
  {
    id: number;
    name: string;
    region: string;
    startDate: datestring;
  }
]

```

### Students

| Request   | Route         |
| --------- | ------------- |
| GET all   | /students     |
| GET by id | /students/:id |
| POST      | /students     |
| PUT       | /students     |
| DELETE    | students/:id  |

#### Shape of Response

```
[
  {
    id: number;
    name: string;
    username: string;
    email: string;
    avatar: string; // Url to image
    bootcampId: number;
  }
]

```

### Assignments

| Request   | Route            |
| --------- | ---------------- |
| GET all   | /assignments     |
| GET by id | /assignments/:id |
| POST      | /assignments     |
| PUT       | /assignments     |
| DELETE    | assignments/:id  |

#### Shape of Response

```
[
  {
    id: number;
    studentId: number;
    title: string;
    type: string;
    date: datestring;
    url: string or null;
    score: string or null;
    timeOfDay: string or null;
    experienceRating: number or null;
    comment: string or null;
    didAttend: boolean or null;
    content: string or null;
  }
]

```

### Records

The records route combines data from /students, /bootcamps, and /assignments, reducing the number of fetch requests needed to build a detailed student display.

| Request   | Route        |
| --------- | ------------ |
| GET all   | /records     |
| GET by id | /records/:id |

#### Shape of Response

```
[
  {
    id: number;
    name: string;
    username; string;
    avatar: string; // Url to image
    boocampId: number;
    region: string;
    startDate: datestring;
    daysAttended: number;
    hasWork: boolean;
    feedback: array of feedback tuples (containing feedback objects) and nulls OR null;
    quizzes: array of quiz objects and nulls OR null;
    recaps: array of recap objects and nulls OR null;
    workshops: array of workshop object and nulls OR null;
    reflections: array of reflection objects and nulls OR null;
  }
]

```

### Feedback Object

```
{
  date: datestring;
  dateDay: number; // 0 for Monday, 1 for Tuesday ... 4 for Friday
  timeOfDay: string;
  title: string;
  content: string;
  type: 'feedback';
  week: number;
}
```

### Quiz Object

```
{
  date: datestring;
  dateDay: number; // 0 for Monday, 1 for Tuesday ... 4 for Friday
  percentage: number;
  score: string; // e.g. '10/11'
  title: string;
  type: 'quiz';
  week: number;
}
```

### Recap Object

```
{
  date: datestring;
  score: string; // red OR amber OR green
  title: string:
  type: 'recap';
}
```

### Workshop Object

```
{
  date: datestring;
  dateDay: number; // 0 for Monday, 1 for Tuesday ... 4 for Friday
  score: string; // red OR amber OR green
  title: string;
  type: 'workshop';
  week: number;
}
```

### Reflection object

```
{
  content: string;
  date: datestring;
  dateDay: number; // 0 for Monday, 1 for Tuesday ... 4 for Friday
  title: string;
  type: 'reflection';
  week: number;
}
```

### Users

🔨 Under Construction 🔧

## Meet Phantom Elephants

### Juweyriya Abdikadir

### Lizard Morrow

// I still need a sentence here!

[My Github Profile](https://github.com/onlyasmalllizard)

### James Perrett
Hi! I'm [James](https://github.com/PerrettJ4), I am a full stack Software Engineer with a Masters in mechanical Engingeering. Check out my website!
### Mohit Sharma
Mohit, you knows it. 

Click the link below to exit

[Exit](https://github.com/Ratmsunny)
