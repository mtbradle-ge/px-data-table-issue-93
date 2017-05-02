To reproduce the error:

> bower install
> polymer test

WCT is configured to keep the browser open after the unit test runs.

The errors should appear in the console as well as the browser console in dev tools:

404 GET /components/font-awesome-error/public/bower_components/px-data-table/font-awesome/fonts/fontawesome-webfont.woff2?v=4.4.0
404 GET /components/font-awesome-error/public/bower_components/px-data-table/font-awesome/fonts/fontawesome-webfont.woff?v=4.4.0
404 GET /components/font-awesome-error/public/bower_components/px-data-table/font-awesome/fonts/fontawesome-webfont.ttf?v=4.4.0
