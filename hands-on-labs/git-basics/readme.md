# Exercise: Git and GitHub Basics

The goal of this exercise is to recap the most important Git basics.

## Create Local Repository

```bash
git init
```

## Simple File Handling

```bash
echo Hello World > a.txt
type a.txt
git status
git add .
git status
git commit --message "Add first file"
git status
git log
echo Hello Universe > b.txt
echo Hello World again >> a.txt
git status
git add .
git commit --message "Fix a, add b"
git log
echo Local config > some.config
echo *.config > .gitignore
git status
```

## Use Commit History

```bash
git checkout [revision]
git status
echo Hello Moon > a.txt
git status
git reset --hard
git status
type a.txt
git checkout master
```

## Branching

```bash
git branch newVersion
git checkout newVersion
echo Hello HTL > c.txt
git status
git add .
git commit --message "Add c"
git checkout master
dir
git checkout newVersion
dir
```

## Merging

```bash
git checkout master
git merge newVersion
git checkout -b newFeature
git checkout master
echo Hi >> a.txt
git add .
git commit --message "Extend a"
git checkout newFeature
echo Hi >> c.txt
git add .
git commit --message "Extend c"
git checkout master
git merge newFeature
```

## GitHub

* Create repository on GitHub
  * Include *readme.md* and license file
* Clone repository
* Add a file locally and commit your changes
* List remotes: `git remote`
* Get remote URL: `git remote get-url origin`
* Push changes using `git push`
* Follow [Set up git](https://help.github.com/articles/set-up-git/) to configure your Git client
* Use a GUI client to access GitHub repository

## GitHub Flow


