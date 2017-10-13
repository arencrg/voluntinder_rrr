![Voluntinder Logo](/Documentation_Screenshots/Voluntinder.png)

---------------

# Project 3: Charitable Application

> “If our hopes of building a better and safer world are to become more than wishful thinking, we will need the engagement of volunteers more than ever.” — Kofi Annan

--------

### Table of Contents

- [Team Profiles](#team-profiles)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Application Design](#application-design)
    - [Branding Guidelines](#branding-guidelines)
    - [User Stories](#user-stories)
    - [Wireframe](#wireframe)
    - [Entity Relationship Diagram](#entity-relationship-diagram)
- [Tools and Methodologies](#tools-and-methodologies)
- [Usage](#usage)
- [Todos](#todos)

### Team Profiles

##### Aren Cariaga
Aren is a European Languages major slash graphic artist slash web developer who likes breakfast food and selfies. Check out Aren's Github profile [here.](https://github.com/arencrg)

##### Marc Macariola
Marc is a pragmatic individual who believes that decisions are made based on what is practical, realistic and beneficial to many. Check out Marc's Github profile [here.](https://github.com/marc-acm)

--------------------

## The Problem

Our team believes that work done for no one's benefit is time wasted. The problem we've decided to focus on is the lack of resources to find meaningful projects for people to dedicate themselves to, so we've created a matching platform for volunteer experiences.

At this point, you may find yourself asking, _Why volunteer? Who still does that, anyway? What do I get out of it?_ And to that we quote Muhammad Ali for another nugget of wisdom on why we wanted to do what we did:

> "Service to others is the rent you pay for your room here on Earth."

You may not get paid for your hours, trust us, the fulfilment you get and the gratefulness of the people whom you've helped is more than enough for payment.

Aren has volunteered in three different countries and in several typhoon relief operations in her university, and she is a staunch believer in the good that comes from genuine volunteer work. Marc also thinks that volunteering is a way of giving back to the community, and it's very much aligned with his religious background to offer one's self in the service of his neighbor.

After a few days of research, we were able to find a few reputable groups that have compiled a list of volunteer groups and NGOs, some of them have the projects categorized and have the application links right then and there; their system is robust and it works. There are already a few systems in place. Okay, so if it ain't broke, why fix it?

## The Solution

This is where our app comes in. The app we've been working on is a platform to deliver better exchange experiences. Our definition of "better" is divided into 2 parts that contribute to our end goal:

1. If the volunteer can be matched to a project that is aligned with his skills. The experience is more enriching to a volunteer when he feels like his skills are used for the betterment of his target group.
    * If the volunteer feels happy with his experience, he will continue to volunteer in future projects. A KPI for the user side of our app is the times the user returns to volunteer (either for the first project, or other projects in the system.)
    * If the volunteer is also able to refer his friends/ colleagues/ whoever, then that would mean that our app is getting buzz. Even if people don't sign up themselves, we plan to integrate a platform for monetary donations in the future.
    * Eventually, we can probably add more features to monitor if we're actually making an impact -- maybe a way to check up on the volunteers to ask if they're enjoying the volunteer opportunity, or if they have any recommendations, maybe a direct messaging platform instead of a static contact form.

2. If the NGO or community can receive volunteers that are chosen to deliver better results (see KPI #3). For some opportunities, there should be preferred skillsets so that there would be less time needed to train the volunteers, and therefore more time to focus on the actual work.
      * A KPI for the client side of our app is an more of an intangible concept, but if the community feels satisfied with the efforts of the volunteers, then that's enough.
      * Another would be community engagement, meaning if this system gets eyes on the project, then an avenue to talk about these issues is opened up.
      * As stated above, this projects aims to get better results, which is a more tangible KPI. We use the term _better_ here to mean more goals reached, more engagement with the community, and better numbers across the board.


Basically, **happy volunteers => happy communities => returning volunteers => better experences for both parties.**

## Application Design

![Initial Planning](/Documentation_Screenshots/day1.jpg)

![Google Sheets Planning](/Documentation_Screenshots/gsheet.PNG)

![Letter to iVolunteer](/Documentation_Screenshots/letter_ivolunteer.PNG)

![Slack Conversations](/Documentation_Screenshots/slack.PNG)

![More Slack Conversations](/Documentation_Screenshots/slack2.PNG)

![Even More Slack Conversations](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-SLACK.png)

### Branding Guidelines
![Branding Guidelines](/Documentation_Screenshots/branding.png)

The two fonts used are Google Fonts, which can be found [here.](https://fonts.google.com/?query=bitter&selection.family=Bitter|PT+Sans)

### User Stories

Our Trello can be found [here.](https://trello.com/b/MnJGa9TB)

For the user stories, we have three (3) types of users namely:  User (Volunteer), Institution (NGOs), and Admin

Below is the Trello Board for the Voluntinder User Stories

![Trello User Stories](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-TRELLO.png)

1. Volunteer
For this type of user, we wanted our volunteer to be able to have the basic functions of signing-up /logging-in. Also, to have the capability to view, filter, and select opportunities where they can submit their application that matches their specific skills and interests.

2. Institutions (e.g. NGOs)
An example for this type of user are NGOs. Organizations can post their opportunities with detailed information, specifically a job description for the future volunteers and the skills needed to participate in the project. The functionalities of these users include the ability to accept or decline an applicant and be able to add and remove opportunities depending on their schedules and status of activity.  

3. Admin
This is the super user. This has the control of the overall performance of the app. The admin has the all the rights and privileges to properly monitor the process, design, and maintenance of the application.

### Wireframe
Our Figma wireframe can be found [here.](https://www.figma.com/file/C3NVkU1709nBjPHMeBn0zyKT/3rd-Term-Final-Project)

For the wireframes we have created two types, one for the desktop/laptop design and the other is for mobile devices.

The first three screenshots are for the desktop view. The prospect is to provide a three-frame application consisting of the following:

- Landing Page
- Opportunities
- Details of A Specific Opportunity

The application is designed with an option of a static bar to be shown throughout the four frames.

##### Landing Page
This contains the Sign-up Form for people who desires to have their profile match with a specific project.

![Wireframe - Landing Page](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-WIFEFRAME-DESKTOP%201.png)

##### Project/Opportunities
The second frame provides a view of the different available projects.

![Wireframe - All Opps Page](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-WIFEFRAME-DESKTOP%202.png)

##### Specific Opportunity
This page will show the details for a specific project.

![Wireframe - Individual Opp](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-WIFEFRAME-DESKTOP%203.png)

##### Profile Page
This frame provides details of the volunteer.
![Wireframe - User Profile](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER-WIFEFRAME-DESKTOP%204.png)



##### Below is the Mobile Design with the same four frames

![Mobile Landing](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER%20-%20WIREFRAME%20-%20MOBILE%201.png)

![Mobile All](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER%20-%20WIREFRAME%20-%20MOBILE%202.png)

![Mobile One](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER%20-%20WIREFRAME%20-%20MOBILE%203.png)

![Mobile Profile](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER%20-%20WIREFRAME%20-%20MOBILE%204.png)



### Entity Relationship Diagram
Our ERD can be found [here](https://www.lucidchart.com/invitations/accept/02cb0d00-8d1a-4c97-b9b9-ea00c17a9b70)

Below is a screenshot of our ERD

![ERD](https://github.com/marc-acm/voluntinder-ir/blob/master/images/VOLUNTINDER%20-%20ERD.png)

An entity relationship diagram (ERD) shows the relationships of entity sets stored in a database.

For this application, we made use of Information Engineering Style to express cardinality showing how many occurrences of relationships among different entities.

As shown in the figure below, there are three entities, namely the Volunteer, Institution and Opportunity establishing their inter-relationships.

The Volunteer, with his name, email and phone_no., has the functions of signing-up.  Once done with this, a user can already filter the many opportunities available but may only be able to select only one opportunity and submit a single application for the chosen project.

As for the Institution, with its ability to create and delete, can have one to many opportunities.

On the opportunity side,  with each specific opportunity, it can have one or many volunteers but a particular opportunity or project must only belong to a specific organization or institution.

The connection between Volunteer and Institution is only through the created Opportunity.

## Tools and Methodologies

This project went through a lot of changes, with two major repos and several overwrites and commits. This repo is the main repository, but there are two local backups and two other repos ([this one](https://github.com/arencrg/Vivixx-Term3-Project) and [this one](https://github.com/arencrg/t3fp_babysteps), which both didn't have Redux, so the passing of data around the app was buggy) that hold a few parts of the older versions of this project. The major block of writing code for this repo happened within the span of a day and a half at most.

As to why we chose to code in React without a real backend (no server (Node/Express) nor database client (Mongo)), we decided that React would be enough to show the functionality of the app.

- [ReactJS](https://reactjs.org/)
- [React-Redux](https://github.com/reactjs/react-redux)
- [React-Router](https://reacttraining.com/react-router/core/guides/quick-start)
- [React-Materialize](http://react-materialize.github.io/)
- [Sass](http://sass-lang.com/guide)

The basic structure of this app is based on Bucky Roberts's [repo](https://github.com/buckyroberts/React-Redux-Boilerplate) from his [React-Redux tutorial on Youtube](https://www.youtube.com/watch?v=DiLVAXlVYR0&list=PL6gx4Cwl9DGBbSLZjvleMwldX8jGgXV6a). As for the React-Router tutorial, we found Evan Jones's [Youtube tutorial](https://www.youtube.com/watch?v=Smk2FusU_70&t=739s) to be simple enough to understand but also quite good for a 20 minute crash-course.

## Usage

To get started, first clone or download this repository
```
> git clone (link)
```

Then install all the necessary dependencies. (Feel free to use yarn or whatever.)
```
> npm install
```

Run an initial webpack build
```
> webpack
```

Start the development server so that changes will be updated live in the browser
```
> npm run start
```

And then we're good to go! Check out where the magic happens on [http://localhost:3000/](http://localhost:3000/)

#### Notes

For the purpose of the presentation, Aren has decided to hard code only one user (Juan dela Cruz). However, there is a route for the creation of a new profile.

### Demo

The app should be live on [Heroku](https://voluntinder-rrr.herokuapp.com/).

### Todos

- Make it better. =))))))

- A few ideas we've been playing around with:

  - Some sort of client-side dashboard, and by that we mean the NGOs/ groups can view all available volunteers (maybe sorted by date, or location), and send them messages or notices that they're a fit for the opportunity, and that they might want to apply.

  - An integrated donations platform (specifically for Lumad community schools).

We are also open to any suggestions! Please feel free to contact either Marc (marcmacariola1@gmail.com) or Aren (arencancode@gmail.com).
