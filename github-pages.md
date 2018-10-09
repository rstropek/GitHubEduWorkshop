# GitHub Pages

Hosting static content on GitHub...


## What is [GitHub Pages](https://help.github.com/articles/what-is-github-pages/)?

* Static site hosting service
  * Personal pages
  * Organization pages (e.g. school homepage)
  * Project pages (e.g. documentation)
* Static site generator [Jekyll](https://jekyllrb.com)
* DNS provided by GitHub *or* custom DNS name
  * `http(s)://<username | organization-name>.github.io/<projectname>`
  * `http(s)://<organization-name>.github.io/` if project has same name as organization
  * [More about custom domain names](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)
* **Note:** GitHub Pages are **always public**, even for private repositories


## Setting Up GitHub Pages

* Repository settings
* Source
  * *master* branch
  * *gh-pages* branch
  * *docs* folder in *master* branch
* [Read more in docs](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)


## Jekyll

* Static website generator written in Ruby
* [Liquid](https://shopify.github.io/liquid/) layout template language
* Markdown content
* Many plugins (including blog)
  * Some available in GitHub Pages, too ([docs](https://help.github.com/articles/configuring-jekyll-plugins/))


## Exercise

* [*GitHub Classroom* exercise](https://github.com/rstropek/GitHubEduWorkshop/blob/master/hands-on-labs/pages)
* Real-world example (by Rainer): Global Azure Bootcamp 2018
* Real-world example (by Rainer): Software Architects Blog
