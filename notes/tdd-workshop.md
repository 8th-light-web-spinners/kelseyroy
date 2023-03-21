# TDD Fundamentals Workshop I

### TDD Cycle
- All software we write will be tested. Whether it's being tested as we write, or if it's being tested by end users.
- **Three simple rules of TDD Cycle:**
	1. Can't write any *production code* until you have first written a failing *unit test*
		- Production Code: Code that makes your application function, 
		- Unit tests: Tests written/performed on smallest unit of code (method, function, etc) for functionality
	2. You can't write more of a unit test than is sufficient to fail. Not compiling is failing.
	3. You can't write more production code than is sufficient to pass the currently failing unit test.
- **Red/Green/Refactor TDD Cycle**
	- Red Step: Writing a failing test
	- Green Step: Writing code to make it pass
	- Refactor: Improving our code, but not changing the functionality of the code.

### Structure of a Unit Test:
- **Four phase test:**
    1. Arrange
	    - Set up all the parts (can be a class, object, method etc) that you will need to successfully get your test to run.
    2. Act
	    - Move through the steps that your code needs to perform a test.
    3. Assert
	    - "Meat of test"
        - What we expect is verified against the result of the test.
    4. Tear down or clean up
		- System is reset to pre-setup state.
        - All unit tests should run independently of other unit tests. A unit test should not impact other unit tests.
		- EX: While testing within a db, if your db doesn't have uniqueness validation you might get duplicate records. You don't want that to remain in your db.
```
describe Converter do
    it "converts 1 to I" do
        converter = Converter.new # Arrange
        result = converter.convert(1) # Act
        expect(result).to eq("I") #Assert
    end
end
```
- Run our test to see it fails before writing code to pass.
- Take small, iterative steps
	- EX: roman numeral kata
		1. We wrote the test (see above), error returned said no method exists. So we define a method on Converter. 
        2. Next error returned says the method we wrote can't take a parameter, so you add number as a parameter. 
        3. Next error says what's returned does not match expected (in this case, nothing is being returned). So you return "I".
		4. Once your test passes, start refactoring your code or tests to remove duplications or redundancy.
- Note to self: It's easy to get ahead of yourself and write for functionality you are anticipating. Slow down and solve only for the test as it is written.

*Computer crashed here so I missed the TDD benefits portion of the presentation*

### Cost Benefit Analysis
#### Benefits of TDD
1. Fast feedback
2. Excellent documentation of code
3. Less time spent in the debugger
4. High test coverage
5. Confidence while writing new features and refactors
6. Reduces the probability of bugs and recurring issues
7. Encourages clean interfaces with the codebase

#### Costs of TDD
1. TDD requires discipline and focus
2. You write code slower in the short term
3. Design is difficult and poor technique might make things worse
4. The benefits of TDD might not be seen for a long time
5. There are many misconceptions and biases about TDD

### What should I test?
- **Z**ero
- **O**ne 
- **M**any 
- **B**oundaries
- **I**nterfaces
- **E**xceptions
- **S**implicity

Additional ZOMBIES resources:
    - [TDD Guided by ZOMBIES](https://blog.wingman-sw.com/tdd-guided-by-zombies)
    - [Test-Driven Development Guided by ZOMBIES](https://www.agilealliance.org/resources/sessions/test-driven-development-guided-by-zombies/)

### Testing Behavior vs. Testing Implementation?
- Testing Behavior: Testing the expected result, or what it does
- Testing Implementation: Testing how it is built/written
- Testing implementation makes unit tests brittle. If we want to change the implementation we have broken unit tests

### Other types of tests
1. Smoke testing: useful for identifying early failures, it tests whether a new build is ready for the next phase of testing.
2. Functional: testing whether a feature of software works as expected from beginning to end. Determines whether functions and methods work together in an application to meet clients functionality requirements.
3. Integration: tests whether the components of a systems work together as expected.
4. Performance: testing how a system performs in terms of responsiveness and stability under a given workload e.g. load testing
5. Acceptance: Manually running through scenarios/user journeys to ensure behavior is as expected to be for end users.
