Code 4 HK
====

Mission
----
We are a bunch of people who are pushing improvements in social aspect through technology. We are not just some geek with a utopian view of society, but a group of doers who like to make real things that people use to change their life and inspiring them to contribute to the society.

Installation Guide
----

### Install Node Version Manager

[NVM Website](https://github.com/creationix/nvm)

   * 2014/01/16 see [issue #334](https://github.com/creationix/nvm/issues/334) if you cannot login in Ubuntu

    nvm install v0.10.24
    nvm use 0.10.24

### Install gulp

[gulp website](https://github.com/gulpjs/gulp)

    git clone git@github.com:code4hk/site.git
    cd site
    npm install
    bower install

Start local dev server
------

   * Start an HTTP server:
      1. `scripts/web-server.js`
      2. `python -mSimpleHTTPServer 8001`
      3. Any other HTTP server to host app folder
   * Start `gulp`
   * Install [livereload browser extensions](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

Then you can visit the dev website at `http://localhost:8001`.
