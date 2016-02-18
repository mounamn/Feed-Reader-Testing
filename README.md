# About this project

This project is a web-based application that reads RSS feeds. it uses [Jasmine](http://jasmine.github.io/) 

# How to run this project

Download all files and open index.html.

# How did I complete this project?

7. I Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. I Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. I Wrote a new test suite named "The menu".
10. I Wrote a test that ensures the menu element is hidden by default.
11. I Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: the menu displays when clicked and it hides when clicked again.
12. I Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. LoadFeed() is asynchronous so this test uses Jasmine's beforeEach and asynchronous done() function.
13. I Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. 

# Tests

1. RSS Feeds
	
	* Feeds are defined
	* All URLs are defined and not empty
	* All names are defined and not empty
	
2. The menu

	* The menu is hidden by default
	* The menu changes visibility when the menu icon is clicked
	
3. Initial Entries

	* Feed has at least a single element entry

4. New Feed Selection

	* Feed content changes when a new feed is loaded