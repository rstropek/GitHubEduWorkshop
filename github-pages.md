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
  * SSL/TLS with custom domains is now possible (managed certificates)
* **Note:** GitHub Pages are **always public**, even for private repositories


## Setting Up GitHub Pages

* Repository settings
* Source
  * *main* branch
  * *gh-pages* branch
  * *docs* folder in *master* branch
* [Read more in docs](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)


## Jekyll

* Static website generator written in Ruby
  * Rather slow
  * Consider [*Hugo*](https://gohugo.io/) as an alternative and use GitHub Pages only for hosting
* [Liquid](https://shopify.github.io/liquid/) layout template language
* Markdown content
* Many plugins (including blog)
  * Some available in GitHub Pages, too ([docs](https://help.github.com/articles/configuring-jekyll-plugins/))


## Exercise

* [*GitHub Pages* with *Jekyll* exercise](https://github.com/rstropek/GitHubEduWorkshop/blob/master/hands-on-labs/pages)
* Real-world example (by Rainer): [Global Azure Bootcamp 2020](https://github.com/coding-club-linz/global-azure-bootcamp-2020)
* Real-world example (by Rainer): [Software Architects Blog](https://github.com/software-architects/software-architects-website)
