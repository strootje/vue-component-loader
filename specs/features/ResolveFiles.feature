@ignore
Feature: Resolve files based on conventions
	The loader should find the correct view, script and style files
	matching the request's path.

	Scenario: ksjdkhsfd
		Given a file on the file system
		And a valid option object
		And a valid basepath
		When the resolver searches for the file
		Then it finds the path
