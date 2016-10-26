# GitBook NCBI Theme

***Pre-alpha state. Do not use!***

## Prerequisites and initial setup

For *development* (as opposed to authoring) 

* Node.js version ?FIXME? or later (testing with 6.9.1)
* npm version ?FIXME? (testing with 3.10.9)
* Add the directory "./node_modules/.bin" to your `PATH`.
* A [GitHub](https://github.com) user account,
* A [GitBook](https://gitbook.com) user account that's integrated with 
  GitHub:
    * If you are creating a new GitBook account, choose "login with your 
      GitHub account" (or, just [click 
      here](https://www.gitbook.com/auth/github/user)). GitHub will ask you 
      to authorize the GitBook application -- please accept.
    * If you already have a GitBook account, and it isn't already 
      integrated with GitHub, then please go to the [GitHub Authorized 
      applications page](https://github.com/settings/applications), and 
      authorize GitBook.


## Starting a new static site

*** Creating the GitHub repo ***

[Create a new GitHub repository](https://github.com/new), under your own
account, to hold the static content. Enter a name and a description.
Do NOT check "Initialize this repository with a README".

On the next screen, click "Import code", and enter 
"https://github.com/Klortho/ncbi-static-template.git". Then click "Begin
import".

> In case you're wondering why we don't recommend using GitHub's "fork"
> feature to start your new repo, there are many reasons. The main reason
> is that you can only have one fork of a given repo on GitHub, whereas
> you might need to manage several static sites.

*** Creating the GitBook project ***

Create a new GitBook, and wire it up to this GitHub repo.

* From [GitBook.com](https://www.gitbook.com/), click the "New" button
* In the left-hand pane, scroll down until you find the "GitHub" option,
  and click that. Fill in the title and description. ***The title should
  exactly match the name of the repository***
* Click "Select a repository", and you should see a drop-down with a list
  of all of your GitHub repositories. If you don't, then you need to check
  your GitBook / GitHub integration.
* Select the repository you just created, and click "Create book".

What that finishes, various resources become available on GitBook.com to 
help you manage and author your content, at these URLs:

* Book dashboard: https://www.gitbook.com/book/{user}/{repo}/details
* Editor: https://www.gitbook.com/book/{user}/{repo}/edit#/edit/master/README.md
* Updates: https://www.gitbook.com/book/{user}/{repo}/activity

You should also be able to view the published site, with NCBI styling:

* Home page: https://{user}.gitbooks.io/{repo}/content/
* Child page: https://{user}.gitbooks.io/{repo}/content/{page}.html

*** Finish up ***

Next, update the metadata file package.json for your project. Change 
references to the ncbi-static-template repository/package to instead 
describe your static site.

Add collaborators, if needed, from the GitBook settings page. You'll need
to make sure each person has GitBook and GitHub accounts, correctly set up.




## Building locally

While you should be able to do most editing and administrative operations 
from the GitBook.com site, it can occasionally be useful to slip those 
surly bonds, and build your project locally.

To do so, clone your repo to your local machine, and install dependencies:

```
git clone git@github.com:{user}/{repo}.git
cd {repo}
npm install
gitbook install
```

To build your gitbook:

FIXME: not working at the moment.

```
gitbook build
```

If you have GitBook / GitHub integration set up correctly, then pushing
to GitHub will cause GitBook to rebuild the site.


## Customizing styles or behavior

FIXME: add description of how to change the styles and JavaScript, by 
overriding template constructs from within this single book's repo.


## Working on theme-ncbi or ncbi-static-template

FIXME: Add instructions on how to use `npm link`.



