# Hands-on Lab: GitHub Flow

The goal of this hands-on lab is to experience how a team of students can use GitHub to collaborate in a computer science project.

## Preparation

1. Form teams of three people. Two people play the role of two students, one person has the role of the teacher. In this guide, we call them
    * *Bob* (student 1)
    * *Alice* (student 2)
    * *Fred* (computer science teacher)

1. *Alice* and *Bob* decide that they want to build a website with which users can perform simple mathematical tasks (e.g. add two numbers). They want to learn basics about web development in this project (e.g. HTML, JavaScript, CSS).

1. *Alice* creates a new repository in GitHub ([docs](https://help.github.com/articles/creating-a-repository-on-github/)). In this guide, we assume that the name of the new repository is *ghedu-github-flow*.
    1. Add a *.gitignore* file for *Node*
    1. Add a license file for *MIT License*

1. *Alice* adds *Bob* as a [contributor](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/) to the project.

## Project and Requirements Management

*Alice* and *Bob* create the initial backlog for their project together. They decide to use *GitHub issues* ([docs](https://help.github.com/articles/managing-your-work-with-issues/)).

1. *Alice* creates the following issue (will become issue *#1*):
    * Title: *Create initial HTML page*
    * Description: ``Create initial [HTML 5-compatible](https://www.w3schools.com/html/html5_intro.asp) page called *index.html*. The `body` will stay empty. Add a JavaScript file *index.js* and reference it from *index.html*. For now, *index.js* can also remain empty.`` (Note the use of *Markdown*).
    * Assigned to: *Alice*
    * Milestone: *V1*

1. *Fred* (the teacher) comments on Alice's issue *Create initial HTML page*: ``Think about adding [Bootstrap](http://getbootstrap.com/) to the site in order to make it look nice.``. Note that this is an example how teachers can interact with students in project planning.

1. *Alice* responds to Fred's comment: ``We looked at *Bootstrap*. It is a great way to add a clean design to a website. Thank you for pointing us to it. We will definitely add it to our website in V2.``. She gives a *+1* to Fred's comment and copies a link to Fred's comment into the clipboard.

1. *Alice* create the following issue (will become issue *#2*):
    * Title: *Add Bootstrap to HTML page*
    * Description: ``Extension to #1. According to [Fred's feedback](<add link to Fred's comment here>), we add Bootstrap to format our HTML page.``
    * Milestone: *V2*
    * Label: *enhancement*

1. *Alice* creates the following issue (will become issue *#3*):
    * Title: *Add parameter form*
    * Description: ``Add a form to *index.html* in which the user can enter two numbers, select one of the mathematical operations *Add* and *Div*, and press a *Calculate* button to trigger the calculation. Additionally, add an empty paragraph that will receive the result of the calculation (content set via JavaScript).``
    * Assigned to: *Bob*
    * Milestone: *V1*

1. *Alice* creates the following issue (will become issue *#4*):
    * Title: *Add logic for mathematical operations*
    * Description: ``Add two functions `add` and `div` to *index.js* containing the logic to execute the corresponding mathematical operations. Add the necessary code to trigger the operation when the user clicks *Calculate* and display the result in HTML.``.
    * Assigned to: *Alice*
    * Milestone: *V1*

1. *Bob* [edits milestone *V1*](https://help.github.com/articles/creating-and-editing-milestones-for-issues-and-pull-requests/) and sets a due date (e.g. one week in the future).

1. *Alice* and *Bob* decide to meet tomorrow for a coding session. They want to work on milestone *V1*. They create a [task list](https://help.github.com/articles/about-task-lists/) for their coding session so that they do not forget what they wanted to do. So *Alice* creates the following issue  (will become issue *#5*):
    * Title: *Tasks for coding session*
    * Description:
      ```md
      * [ ] Create HTML page (#1)
      * [ ] Add parameter input form (#3)
      ```

## *Alice*: Create initial HTML page (*#1*)

*Alice* uses the Git CLI (*Command Line Interface*) here. You can download it from [https://git-scm.com](https://git-scm.com).

1. Clone the repository *ghedu-github-flow* ([docs](https://help.github.com/articles/which-remote-url-should-i-use/)): `git clone https://github.com/github-edu-workshop/ghedu-github-flow.git`

1. Simulate Alice's development work by copying the files from [step-1](step-1) into the directory created by cloning the repository.

1. Check the status of the local Git repository: `git status`

1. Stage the new files in the current directory: `git add .`

1. Commit the changes locally: `git commit -m "Resolves #1"`. Note that this commit message automatically closes the mentioned issue ([docs](https://help.github.com/articles/closing-issues-using-keywords/)).

1. Check the local Git log: `git log`

1. Push the changes to GitHub: `git push origin master`

1. Open issue #1 (*Create initial HTML page*) in GitHub and make sure it has been closed

1. Open issue #5 (*Task List*) in GitHub and check *Create HTML page* because it has been completed

## *Bob*: Add parameter form (*#3*)

*Bob* uses a graphical Git client here. Choose any Git client you like. Here are some suggestions:

* [GitHub Desktop](https://desktop.github.com/)
* [Git Extensions](https://gitextensions.github.io/)
* [Sourcetree](https://www.atlassian.com/software/sourcetree)
* [Git support in VSCode](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)

1. Clone the repository *ghedu-github-flow* ([docs](https://help.github.com/articles/which-remote-url-should-i-use/)) with the graphical Git client of your choice.

1. Simulate Bob's development work by copying the files from [step-2](step-2) into the directory created by cloning the repository. You can overwrite the existing files.

1. Stage, commit, and push your changes using the graphical Git client of your choice. Make sure to enter *Resolves #3* as the commit message to close the corresponding issue.

1. Open issue #3 (*Add parameter form*) in GitHub and make sure it has been closed

1. Open issue #5 (*Task List*) in GitHub and check *Add parameter input form* because it has been completed. As all items on the task list are completed, Alice and Bob decide to close the issue.

## Test with *RawGit*

Alice and Bob would like to send Fred a link where he can test their work and give feedback. They use [*RawGit*](https://rawgit.com/) for that.

1. Open the file *index.html* in the repository *ghedu-github-flow* and copy it's URL into the clipboard

1. Open [*RawGit*](https://rawgit.com/) and paste the URL of *index.html*. Copy the *development* URL that *RawGit* gives you into the clipboard.

1. Open the development URL from *RawGit* in a new browser tab. You should see the website that Alice and Bob have created. They can now send this URL to Fred and ask him for feedback.

## *Fred*: Pull Request

*Fred* looks at the code and recognizes that Alice and Bob created `input` elements with type `text`. They probably don't know yet that there is an [input type `number`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number), too. He creates a pull request to propose this enhancement.

1. [Create a fork](https://help.github.com/articles/fork-a-repo/) of the repository *ghedu-github-flow*.

1. In the fork, [create a branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/) *input-type-enhancement*.

1. In the new branch, use GitHub's online editor to change the type of the `input` elements in *index.html* to `number`.

1. [Create a *pull request*](https://help.github.com/articles/creating-a-pull-request/) with your changes:
    * Title: *Fix input type*
    * Description: ``Did you know that there is an input type `number` in HTML? You input form could benefit from it. Here is a pull request that demonstrates the necessary code change.``

1. *Alice* opens the repository *ghedu-github-flow* on GitHub and sees Fred's pull request. She looks at the content and decides that this is a really good tip. Se [merges the pull request](https://help.github.com/articles/merging-a-pull-request/).

1. *Alice* refreshes her local clone of the repository: `git pull`

## *Alice*: Add Logic for Mathematical Operations (*#4*)

This time, *Alice* works at home without Bob. She wants to store her changes in a separate location so she can discuss them before they go online. So she decides to use a [branch](https://help.github.com/articles/about-branches/).

1. Create a new branch *math*: `git branch math`

1. Switch to branch *math*: `git checkout math`

1. Simulate Alice's development work by copying the files from [step-3](step-3) into the directory created by cloning the repository.

1. Stage the new files in the current directory: `git add .`

1. Commit the changes locally: `git commit -m "Resolves #4"`

1. Push the changes to GitHub: `git push origin math`

## *Bob*: Merge *math* Branch

1. Open the *math* branch in GitHub. Use the *Compare* feature to find out more about Alice's code changes.

1. Open the graphical Git client and pull changes

1. Use the graphical Git client of your choice to merge the changes in the *math* branch into the *master* branch.

## *Fred*: Report a Bug

*Fred*, the teacher, recognizes that the code of Alice and Bob does not handle division by zero gracefully. He wants to let them know about this area of improvement.

1. Open the repository *ghedu-github-flow* on GitHub

1. *Fred* creates the following issue (will become issue *#6*):
    * Title: *Division by Zero*
    * Description:
      ```md
      Division by zero reports an invalid result.

      Expected behavior: If parameter 2 is zero, the user should be notified that this is not a valid parameter for the division operator. The division should not be executed.

      Actual behavior: The program resports a result *Infinity*.
      ```

1. *Alice* can reproduce the problem. She responds *Thank you for reporting this*, labels the issue as a *bug*, and assigns it to milestone *V2*.

## Advanced Exercises

1. Let *Alice* and *Bob* do conflicting changes to a single file and try to merge them ([docs](https://help.github.com/articles/addressing-merge-conflicts/))

1. Try *rebase* instead of merge ([docs](https://help.github.com/articles/about-git-rebase/))
