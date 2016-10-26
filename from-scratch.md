# How to create an NCBI static site book from scratch

Our goal is to automate these steps; or to publish a template that
can be easily cloned to create the scaffolding for a new NCBI static
site.

### Initialize a new repo

```
mkdir my-static-site && my-static-site
npm init
npm install --save-dev gitbook-cli
gitbook init  # gives us README.md and SUMMARY.md

git init
echo '/node_modules/' >> .gitignore
git add .
git commit -am 'initial commit'
```

Next, using your own GitHub account, create a new GitHub repo; e.g. 
[Klorth/my-static-site](https://github.com/klortho/my-static-site).

Add that as a remote to your local clone, and push.

```
git remote add origin git@github.com:Klortho/my-static-site.git
git push -u origin master
```

[toolchain.gitbook.com](http://toolchain.gitbook.com/) - technical
  docs.

### Deploy to GitBook

Go to [GitBook.com](https://www.gitbook.com) and create an account
if you don't already have one. We suggest using your GitHub account
to authenticate yourself on GitBook.

Click the "New" button at the top, and create a new book that imports
and syncs with your GitHub repo (see the screen shot).

Set up the "Webhook" to enable the GitBook server to push commits to
the GitHub repo. [Details needed.]

When that's completed, check out some of these URLs, and familiarize 
yourself with these pages.

* [GitBook Help](https://help.gitbook.com/)

Specific to this new book we just created:

* [Dashboard](https://www.gitbook.com/book/klortho/my-static-site/details)
* [Updates](https://www.gitbook.com/book/klortho/my-static-site/activity) - 
  similar to a CI system, gives info about recent changes
* [Settings](https://www.gitbook.com/book/klortho/my-static-site/settings)
* [Editor](https://www.gitbook.com/book/klortho/my-static-site/edit)

Play around with the editor, and add some content to your book.

Note that every time you save, the editor generates a Git commit and
pushes it to GitHub. So, at any point, you can pull the latest changes
to your local clone, and edit the files there, if you prefer.

If you create new chapters or subsections, the editor automatically
maintains a Markdown file SUMMARY.md, that encapsulates the 
table-of-contents information.

### Applying a theme

From the editor, from the drop-down menu in the upper right, select
"Plugins Store", find the theme you want, 
"theme-faq".

