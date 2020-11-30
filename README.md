# Test exercise

## Install

* `npm install`
* `npm start`

## Possible improvements

* Migrate to strore data in Database like MySQL / MongoDB - Here we achieve better performance on large scale
* Move code about getting Products, Vendors from routes/controllers to back-end services/models (new layer of abstraction) - we separate code to use it without Http webserver (for example to read DB from CLI or from Job Worker)
* Move code about filtering Products from routes/controllers to back-end service for filtering Products - We could test this code separately - without mock Http Webserver
* Improve Search on front-end - do not send requests to frequently - let's use debounce to deal with that - It's just decrease about of requests - better for server and database
* Move endpoints URL's to centralized place (better - move it generation to back-end) - Front-end application could be used with different endpoints - no need to re-build Front-end

## Challenges (most time-eaters tasks)

* `Deploy to Heroku` - I'm using Heroku first time and thatwhy I waste time to deal with building Client application on Heroku - my quick solution is to put built files to Git (I know that I should't do that, sorry)
* `Deal with AndDesign` - If I had more time with this UI Components library - task could be done quicker

## Testing

* `npm test` - Run unit tests
* `npm run test-client` - Run https://github.com/smooth-code/jest-puppeteer (E2E test)
