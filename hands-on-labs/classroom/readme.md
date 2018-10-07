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

1. Open the [GitHub repository with the starter code](https://github.com/rstropek/GitHubEduWorkshop-JS-Assignment-Starter) and make yourself familiar with the exercise

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

1. Follow the exercise guide in the *readme.md* file and solve the quiz. Use the following solution for this hands-on lab:
    ```js
    exports.add = function (x, y) {
        return x + y;
    }
    exports.sub = function (x, y) {
        return x - y;
    }
    exports.sumOfPositiveNumbers = function (upperLimitInclusive) {
        let result = 0;
        for (let i = 0; i <= upperLimitInclusive; i++) {
            result += i;
        }
        return result;
    }
    ```

1. Stage, commit, and push your solution to GitHub

## *Fred*: Give Feedback

1. Open the *assignment repository* in your classroom's organization on GitHub

1. Check Alice's code

1. Create the following issue:
    * Title: *Inefficient Code*
    * Description: ``Your loop in *math.js* start with zero. That is not necessary. Starting from one saves you one unnecessary loop iteration.``
