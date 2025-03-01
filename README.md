# HTML/CSS 3a Assessment - Browser, DOM, Events, And Storage

Welcome to the browser, DOM, events, and storage assessment!

This assessment consists of two coding projects:

1. Event-Handling-Storage Project (5 test specs)
2. Selection-Manipulation Project (8 test specs)

Each project exists in its own directory. Each project directory has an
additional __README__ with project-specific instructions.

Your objective is to complete both projects so that all test specs pass. Each
spec is worth 1 point.

* __Total Possible Points:__ 13 points  
* __Points Required to Pass:__ 10 points

You will have **2 hours** to complete the assessment.

## Resources

For this assessment, you are allowed to use the following resources:

* [a/A curriculum on Canvas][canvas]
* [MDN]
* A whiteboard or paper to work out problems/code, but it must be within camera
  range
* VS Code or a console for coding, testing, and experimentation
* Node
* Postman (when useful)
* Previously written code you wrote yourself
  * Except for code from previous assessment submissions
* Comments within code
  * If there are comments in your code about your specific code and about what
    your code is doing, that is appropriate. If your comments are about concepts
    and based on the readings, then that counts as notes. Those would not be
    appropriate.

You are **NOT** allowed to refer to any other resources, including--but not
limited to--other websites (e.g., StackOverflow), communication apps (e.g.,
Slack, Discord), search engines, notes, or code from previous assessment
submissions.

[canvas]: https://appacademy.instructure.com/

## Setup

1. Finish reading this __README__ in its entirety.
2. Clone this starter repo and open it in VS Code.
3. Run `npm install` in the root directory.
4. Read the project-specific __README__s to get started!

## Submission

When you are ready to submit:

1. Run `npm test` in the root directory to re-run all of the tests from the
   two projects. You can also test all of the projects with the following
   command:

   ```sh
   npm run test-for-failures -s
   ```

   The `test-for-failures` command will list the failing specs for each
   project, e.g.:

   ```sh
   Event-handling-storage failures:
   [
     {
       "fullTitle": "Event handling and local storage - Problem 2 - counts by one",
       "error": "AssertionError: Timed out retrying after 4000ms: Expected to find content: '1' within the element: <span#counter-value> but never did.\n    at Context.eval (webpack://event-handling-storage/./cypress/e2e/test.cy.js:31:9)"
     }
   ]
   ```

   The output for an assessment with everything correct will show no failures
   for any project:

   ```sh
   Event-handling-storage failures:
   []

   Selection-manipulation failures:
   []
   ```

  For more complete error messages that include stack traces, run the tests for
  the specific project from within that project's directory. See the
  project __README__s for more info.
  
2. Fix any syntax errors that cause the tests to crash. **If a test crashes or
   the tests fail to complete their run, you will receive a 0 for the coding
   portion of this assessment.** You can fail specs, but all the tests have to
   be able to finish running.

   **Tip:** If you run out of time to debug, just comment out any code that is
   causing your programs to crash.

3. Add, commit, and push your changed files:

   ```sh
   git add .
   git commit -m "Finish the assessment (or some such descriptive message)"
   git push
   ```

   **Note:** The first time you run `git push`, git will tell you to run a more
   complete version of the command:

   ```sh
   git push --set-upstream origin <your branch>
   ```

You can run tests, `add` files, and `commit` files as often as you wish, but
only your first **two pushes** will be graded. (If for some reason you need more
than two pushes, you must plead your case to an Instructor.)

Good luck!

**Copyright App Academy. Please do not share this repo or post any parts of it
online. App Academy will take violations very seriously.**

[MDN]: https://developer.mozilla.org/en-US/
