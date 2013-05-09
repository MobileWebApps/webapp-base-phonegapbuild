
PROJECT DESCRIPTION
====================================
Built on top of Ember.js and Twitter Bootstrap

Requirements
-------
    Ruby is not required for production mode 
    
    However, Ruby is required in the development environment to 
    simplify the development process and for the project build tools and SASS pre-processor
    
    Some of the Ruby developemnt tools we use are RubyGems, Bundler, Rake and Rake-Pipeline

Installing the Development Environment
-------
	# Install Ruby. An easy way to do it is to use either railsinstaller.org or rubyinstaller.org
	
	# Use the Ruby package installer (GEM) to install Bundler
	$ gem install bundler
	
	# Use Bundler to install all project dependencies
    $ bundle install

Running
-------
	# Start Rake Pipeline Server
    $ start bundle exec rackup
    
    # Point your browser to localhost:9292

Building and deploying HTML project
----------------------------------------------
	# Uses rake pipeline to merge all css and javacript files
    $ bundle exec rake build
    
    # Deploys the HTML project into ../webapp-base-phonegapbuild folder
    $ bundle exec rake deploy


App Structure
-------------

    ember-skeleton
    ├── Assetfile - App build file
    ├── Gemfile - Package dependencies for rakep/rack
    ├── Gemfile.lock - Here be dragons: don't touch, always include
    ├── app - App specific code
    │   ├── css - App CSS or SCSS (.scss)
    │   ├── lib - App code, *modularized during build*
    │   ├── modules - Module code, *already modularized*
    │   ├── plugins - Plugins (e.g. jquery.jsonrpc.js)
    │   │   └── loader.js - JS module loader
    │   ├── static - Static files, never touched, copied over during build
    │   ├── templates - Handlebars templates, *modularized during build*
    │   ├── tests - QUnit application tests
    │   └── vendor - Vendor code, *modularized during build*
    ├── assets - Built out asset files, minified in production
    │   ├── app.css - Built out app CSS/SCSS
    │   ├── app.js - Built out app JS
    │   └── loader.js - Built out JS module loader
    ├── config.ru - Rack development web server configuration
    ├── index.html - The app entry point
    ├── tests - QUnit testing files
    │   ├── index.html - The testing entry point
    │   ├── qunit - Testing support files
    │   └── run-tests.js - The PhantomJS QUnit test runner
    └── tmp - Temporary build files used by rakep

Testing
-------

You can test the app by invoking:

    $ bundle exec rake test

This executes the tests by using [PhantomJS](http://www.phantomjs.org/),
which you need to have installed.

Or you can run the tests via:

    $ bundle exec rackup
    $ open http://localhost:9292/tests/index.html

If you want to continuously run the tests every time a file changes, invoke:

    $ bundle exec guard


Other Useful Info
-------
Git Tutorial
http://gitimmersion.com

How to GitHub: Fork, Branch, Track, Squash and Pull Reques
http://gun.io/blog/how-to-github-fork-branch-and-pull-request


Ruby Gems
http://rubygems.org

Ruby Bundler
http://gembundler.com
 
Rake
http://rake.rubyforge.org

Rake-Pipeline
https://github.com/livingsocial/rake-pipeline/blob/master/GETTING_STARTED.md

Rake-Pipeline is based on Ruby Asset Pipeline. More information on...
http://coderberry.me/blog/2012/04/24/asset-pipeline-for-dummies
http://guides.rubyonrails.org/asset_pipeline.html

SASS
http://thesassway.com

Clean out your Sass junk-drawer
http://gist.io/4436524

SASS vs LESS
http://css-tricks.com/sass-vs-less



TECHNOLOGY USED:
==================

EMBER
	Ember
	http://emberjs.com
	

TWITTER BOOTSTRAP + RESPONSIVE DESIGN

	20 Awesome Resources for Twitter Bootstrap Lovers
	http://designshack.net/articles/css/20-awesome-resources-for-twitter-bootstrap-lovers/
	
	How to use Twitter Bootstrap to Create a Responsive Website Design
	http://www.onextrapixel.com/2012/11/12/how-to-use-twitter-bootstrap-to-create-a-responsive-website-design/

	http://twitter.github.com/bootstrap/javascript.html

	Ember Bootstrap
	http://jzajpt.github.com/ember-bootstrap/
	https://github.com/emberjs-addons/ember-bootstrap


GLYPHICONS
http://glyphicons.com/

PHONEGAP
	Developing with Phonegap
	http://www.slideshare.net/ryanstewart/phone-gap-preso
	
	Phonegap Android Background Service Plugin - Explained
	http://red-folder.blogspot.com.br/2012/09/phonegap-android-background-service_11.html
	

OTHER STUFF
========================
EMBLEM indent templating
http://emblemjs.com/

Battery-friendly background location updates for Android
https://code.google.com/p/little-fluffy-location-library/
http://stackoverflow.com/questions/12081964/android-location-aware-notifications
http://stackoverflow.com/questions/3232208/sample-code-for-iphone-location-based-push-notifications

Google Clould Messaging - GCM Architectural Overview
http://developer.android.com/google/gcm/gcm.html

appMobi
http://dev.appmobi.com

DOJO TOOLKIT
http://dojotoolkit.org

IRIDIUM
http://www.thesoftwaresimpleton.com/blog/2012/08/10/iridium/


APPLICATION CRAFT
	http://www.applicationcraft.com

DHTMLX Touch	
http://dhtmlx.com/touch/

TIGGZI
http://tiggzi.com

