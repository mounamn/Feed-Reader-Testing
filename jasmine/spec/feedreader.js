/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Has URL defined and not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                // check if url is defined
                expect(allFeeds[i].url).toBeDefined();
                // check if url length is not empty
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Has name defined and not empty', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                // check if name is defined
                expect(allFeeds[i].name).toBeDefined();
                // check if name length is not empty
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });


    /* Test suite named "The menu" */

    describe('The menu', function() {

        var $bodyClass = $('body').hasClass('menu-hidden');
        var $clickedClass = $('.menu-icon-link');

        /* This test ensures the menu element is
         * hidden by default. I analyzed the HTML and
         * the CSS to determine how the hiding/showing
         * of the menu element is performing.
         */
        it('Element is hidden by default', function() {
            expect($bodyClass).toBeTruthy();
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: the menu displays when
         * clicked and it hides when clicked again.
         */
        it('Changes visibility when the menu icon is clicked', function() {
            $clickedClass.click();
            $bodyClass = $('body').hasClass('menu-hidden');
            // Test the menu display when clicked
            expect($bodyClass).toBeFalsy();
            $clickedClass.click();
            $bodyClass = $('body').hasClass('menu-hidden');
            // Test the menu hiding when clicked
            expect($bodyClass).toBeTruthy();
        });
    });

    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        var $feed;

        /* use of Jasmine's beforeEach and asynchronous done() function
         * because LoadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, done);  
        });
        /* This test ensures when the loadFeed function is called
         * and completes its work, there is at least a single
         * .entry element within the .feed container.
         */
        it('Has at least a single element', function() {
			$feed = $('.feed').find('.entry');
            expect($feed.length).not.toBe(0);
        });

    });

    /* Test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        var newContent, oldContent;
        /* use of Jasmine's beforeEach and asynchronous done() function
         * because LoadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $('.feed').html();
                loadFeed(1, done);
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('Changes when a new feed is loaded', function(done) {
            newContent = $('.feed').html();
            expect(newContent).not.toEqual(oldContent);
            done();
        });

        // Define done
        afterAll(function(done) {
            loadFeed(0, done);
        });

    });
}());