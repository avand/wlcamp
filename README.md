# wlcamp.org

## Stack

The site is set up as follows:

* We use [Middleman][middleman] to generate HTML pages.
* We use [GitHub][github] to store the source code.
* We use [Heroku][heroku] to host the site.

The site was set up with this way because:

* Avand wanted pages to be able to share templates and include partials;
* Avand wanted to write pages in Haml and style them in Sass;
* Avand wanted the site to be checked into source control (i.e. git)
  to manage changes;
* Avand wanted the site to only ever be static HTML.

With just HTML, you end up with a ton of duplicate code. For example,
changing one navigation element means doing a "find and replace" and
updating every file on the site. With the code checked into GitHub
we're sure not to clobber each other's changes. This happened all
the time when the site was behind FTP. Previously, the site was 95%
static HTML but that remaining 5% was a nightmare to maintain. That
was the code that did our contact forms and things like that. We've
committed to 3rd party tools like Wufoo and Google Calendar instead.
This has made things substantially simpler.

## Setup

To get set up, you'll need a few things:

* A computer with [Ruby][ruby] installed on it.
* A GitHub account with access to the code.

To work on the site:

* Get the latest code from GitHub.
* Create a branch. For example, `git branch new-homepage` for a
  branch called "new-homepage."
* Run `bundle install` once. This basically installs Middleman.
* Run `bundle exec middleman server` and point your browser to
  `http://localhost:4567`.
* Make changes to the files in the "source" directory. Reload your
  browser to see the changes. Middleman will automatically update
  the static files.
* When you're ready to compile the static HTML for production, run
  `MIDDLEMAN_ENV=production bundle exec middleman build`. That
  environmental variable changes a few important things for the
  production build.
* Commit your changes and push to branch on GitHub.
* Make a pull request.

That's not so bad, right?! OK, I agree, it's a bit complex but you've
got to trust me that it's worth the learning curve. This site is such
a breeze to maintain.

## Help

If you need help, add [email][avand] or call (312-399-6025) Avand.

[middleman]: http://middlemanapp.com/
[github]: http://github.com/
[heroku]: http://heroku.com/
[avand]: avand@avandamiri.com
[ruby]: http://www.ruby-lang.org/en/
