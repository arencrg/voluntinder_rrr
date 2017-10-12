![Voluntinder Logo](/Documentation_Screenshots/Voluntinder.png)


# Project 3: Charitable Application

> “If our hopes of building a better and safer world are to become more than wishful thinking, we will need the engagement of volunteers more than ever.” — Kofi Annan

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

<hr>

## The Problem

Our team believes that work done for no one's benefit is time wasted. The problem we've decided to focus on is the lack of resources to find meaningful projects for people to dedicate themselves to, so we decided to create a matching platform for volunteer experiences.

At this point, you may find yourself asking, _Why volunteer? Who still does that, anyway? What do I get out of it?_ And to that we quote Muhammad Ali for another nugget of wisdom on why we wanted to do what we did:

> "Service to others is the rent you pay for your room here on Earth."

You may not get paid for your hours, trust us, the fulfilment you get and the gratefulness of the people whom you've helped is more than enough for payment.

Aren has volunteered in three different countries and in several typhoon relief operations in her university, and she is a staunch believer in the good that comes from genuine volunteer work. Marc also thinks that volunteering is a way of giving back to the community, and it's very much aligned with his religious background to offer one's self in the service of his neighbor.

After a few days of research, we were able to find a few reputable groups that have compiled a list of volunteer groups and NGOs, some of them have the projects categorized and have the application links right then and there; their system is robust and it works. There are already good systems in place. Okay, so if it ain't broke, why fix it?

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
(How we planned, screenshots of our convos on Slack, screenshots of Google Sheets/Docs, etc)
![Initial Planning](/Documentation_Screenshots/day1.png)
![Google Sheets Planning](/Documentation_Screenshots/gsheet.png)
![Letter to iVolunteer](/Documentation_Screenshots/letter_ivolunteer.png)
![Slack Conversations](/Documentation_Screenshots/slack.png)
![More Slack Conversations](/Documentation_Screenshots/slack2.png)

### Branding Guidelines
![Branding Guidelines](/Documentation_Screenshots/branding.png)


### User Stories
(Trello screenshots + link)

### Wireframe
(Figma screenshots + link)

### Entity Relationship Diagram
(LucidChart screenshots + link)

## Tools and Methodologies
(some copy of why React, why no backend, etc)
(Links to the previous repos and all the stuff I cloned to learn how to make this app)

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

The app **should** be live on Heroku. =))))

### Todos

- Make it better. =))))))

- A few ideas we've been playing around with:

  - Some sort of client-side dashboard, and by that we mean the NGOs/ groups can view all available volunteers (maybe sorted by date, or location), and send them messages or notices that they're a fit for the opportunity, and that they might want to apply.

  - An integrated donations platform (specifically for Lumad community schools)
