# Hands-on Lab: GitHub Pages with [Jekyll](https://jekyllrb.com/)

The goal of this hands-on lab is to build a homepage for a fictitious *Hackathon* event visited by students.

## Background

As a teacher, you want to create a website for a *Hackathon* event. The event will be driven by students. They host sessions in which their student colleagues can learn a new technology (e.g. programming language, framework) by following a code example.

You want to setup a basic website. Your students should be able to contribute the content of their sessions via *GitHub Pull Requests*.

## Preparation

1. Create a new repository *ghedu-pages-jekyll*

1. In your repository's *Settings*, [activate GitHub Pages for the *master* branch](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

## Site Configuration

1. Add a file *_config.yml* to your repository. It contains the settings for Jekyll. Copy the content from [artifacts/_config.yml](artifacts/_config.yml). Make yourself familiar with the settings in the file and read more about the available configuration options [in the documentation](https://jekyllrb.com/docs/configuration/). Change the config settings according to your environment.

1. Jekyll supports layout templates that define how Markdown is turned into HTML. Let's create a *default* layout. For that, we have to add a [*default* layout file](https://jekyllrb.com/docs/layouts/). Add a file *_layouts/default.html* and copy the content of [artifacts/_layouts/default.html](artifacts/_layouts/default.html). Note especially:
    * Use of the [*Liquid* template language](https://shopify.github.io/liquid/tags/control-flow/) (e.g. `{% if ... %}...{% endif %}`)
    * Use of [variables](https://jekyllrb.com/docs/variables/) (e.g. `{{ page.title }}`)
    * Use of [includes](https://jekyllrb.com/docs/includes/) (e.g. `{% include main-menu.html %}`). We will add these *include* files in the next steps.
    * The placement of the source files' content with `{{ content }}`

1. *default.html* references two *include* files *jumbotron.html* and *main-menu.html*. Therefore, we have to add them to our site. Add the files *_includes/jumbotron.html* and *_includes/main-menu.html* and copy the content of the corresponding files from the [artifacts/_includes](artifacts/_includes) folder. Note especially:
    * Use of [variables](https://jekyllrb.com/docs/variables/) (e.g. `{{ site.baseurl }}`)

1. Let's add a second layout template *sessions.html*. For that, add a file *_layouts/sessions.html* and copy the content of [artifacts/_layouts/sessions.html](artifacts/_layouts/sessions.html). Note especially:
    * Use of collections in [`site` variables](https://jekyllrb.com/docs/variables/#site-variables) (e.g. `site.pages`)
    * Sorting based on metadata with [`sort`](https://shopify.github.io/liquid/filters/sort/) (e.g. `{% assign sorted_pages = site.pages | sort:"title" %}`)
    * Use of [iterations](https://shopify.github.io/liquid/tags/iteration/) (e.g. `for`)

1. For illustration purposes, we need a background image. Copy [artifacts/images/Audience.jpg](artifacts/images/Audience.jpg) into *images/Audience.jpg*.

1. In order to make our website look nice, we need a CSS file. Copy [artifacts/styles/hackathon.css](artifacts/styles/hackathon.css) into *styles/hackathon.css*.

## Site Content

Now that we have setup the site template, we can start adding content.

1. Add a file *index.md* to your repository and copy the content of [artifacts/index.md](artifacts/index.md). Note especially:
    * [YAML front matter block](https://jekyllrb.com/docs/front-matter/) at the beginning of the file
    * Mixing of HTML and Markdown

1. Add a file *about.md* to your repository and copy the content of [artifacts/about.md](artifacts/about.md)

1. Add files for sessions (one markdown file per session). Add the files *sessions/session1.md* and *sessions/session2.md* and copy the content of the corresponding files from the [artifacts/sessions](artifacts/sessions) folder. Note especially:
    * Session metadata at the beginning of the file (front matter block)
    * There is one file per session. The files will be combined in the layout *sessions.html* (see above). The students can contribute content by sending you pull requests.

1. Add a file *sessions.md* to your repository and copy the content of [artifacts/sessions.md](artifacts/sessions.md). Note that the file only consists of the front matter block. The content is built by the assigned layout template *sessions.html* (see above).

## Optional Exercise: Build Locally

The big advantage of GitHub Pages in combination with Jekyll is that you do not have to run your own Jekyll server. GitHub Pages builds the page and serves it on the internet. However, you can run Jekyll locally, too.

### Use Docker

Note that you have to have *Docker* installed on your computer (e.g. *Docker for Windows*).

1. Pull the Jekyll's default image: `docker pull jekyll/jekyll`

1. Build the site: `docker run --rm -v C:\folder-of-your-site:/srv/jekyll jekyll/jekyll jekyll build`. Note that you have to replace *C:\folder-of-your-site* with the folder where your site is stored locally.

1. Examine the folder *_site*. It contains the built files. You can copy these files to any static file hosting server including GitHub Pages.

1. Run the site: `docker run --rm -v C:\folder-of-your-site:/srv/jekyll -p 8080:8080 jekyll/jekyll jekyll serve --port 8080`

1. Open [http://localhost:8080/GitHubEduWorkshop-Jekyll/](http://localhost:8080/GitHubEduWorkshop-Jekyll/) and test the site locally

### Installing Jekyll Locally

1. Follow the guide in the [Jekyll docs](https://jekyllrb.com/docs/installation/)

1. Use the [Jekyll command line](https://jekyllrb.com/docs/usage/) to build the website

## Build and Run Site in GitHub

1. Stage, commit, and push the site's files you created above.

1. GitHub will run Jekyll for you behind the scenes.

1. Open [https://your-github-user.github.io/your-github-repo/index.html](https://your-github-user.github.io/your-github-repo/index.html) and see your site in action
