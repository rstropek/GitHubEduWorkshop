# Hands-on Lab: GitHub Classroom

The goal of this hands-on lab is to experience how an assignment works with *GitHub Classroom*.

## Preparation

1. Form teams of two people. One person plays the role of the student, one person has the role of the teacher. In this guide, we call them
    * *Alice* (student)
    * *Fred* (computer science teacher)

1. To execute the sample code of this hands-on lab, you will need [Node.js](https://nodejs.org/en/) installed on your computer.

## *Fred*: Create Organization

1. [Create an organization](https://help.github.com/articles/creating-a-new-organization-from-scratch/) for your classroom. In this guide, we assume that the name of the organization is *ghedu-classroom* (display name *GitHub Education Classroom Workshop*).

1. Open [GitHub Classroom](https://classroom.github.com/) and create a classroom for your organization

## *Fred*: Create Assignment

1. Open the [GitHub repository with the starter code](https://github.com/rstropek/GitHubEduWorkshop-JS-Assignment-Starter) and make yourself familiar with the exercise.
    * Note that the starter code is also included in this repository in the [starter-code](starter-code) folder.

1. Open your new classroom and create an assignment
    * Title: *JavaScript Quiz*
    * Repository prefix: *javascript-quiz*
    * Type: *Public*
    * *Enable assignment invitation URL*
    * Starter code: *rstropek/GitHubEduWorkshop-JS-Assignment-Starter*

1. After the assignment was created, send the *invitation link* to *Alice*

## *Alice*: Take Assignment

1. Receive the *invitation link* from *Fred*

1. Accept the assignment by opening the *invitation link*

1. Open the created GitHub repository online and see how you have received the starter code

1. Clone your assignment repository: `git clone ...`

1. Follow the exercise guide in the *readme.md* file and solve the quiz. Use the code [in this GitHubGist](https://gist.github.com/rstropek/3f46a89db695baecba14613f70c03ac4) as the solution in this hands-on lab.

1. Stage, commit, and push your solution to GitHub

## *Fred*: Give Feedback

1. Open the *assignment repository* in your classroom's organization on GitHub

1. Check Alice's code

1. You recognize that the solution has a minor flaw. The `for` loop should not start at zero. Navigate to the corresponding code line in *math.js* and [create an issue for it](https://help.github.com/articles/opening-an-issue-from-code/) (will become issue #1):
    * Title: *Inefficient Code*
    * Description: ``Your loop in *math.js* start with zero. That is not necessary. Starting from one saves you one unnecessary loop iteration.``

## *Alice*: Code Fix

Alice has received Fred's comment and wants to enhance her code.

1. Alice fixes the inefficiency in her code (loop should start with one instead of zero) and successfully runs the unit tests

1. Alice stages, commits, and pushes the change. She uses the commit message *Resolves #1* in order to close the issue and let Fred know that she managed to include his feedback in her solution.

## *Fred*: Classroom Assistant

Fred wants to download all assignments (in this hands-on lab just the one from Alice) of all students for archiving purposes.

1. Download and open the [GitHub Classroom Assistant](https://classroom.github.com/assistant/)

1. Login, copy/paste the assignment URL, and try to download all assignments
