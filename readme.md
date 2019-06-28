# O'Reilly Personalization Team
## Javascript Engineer Take home

This is a fairly simple project.

In this repository in the file `index.html` is a simple example page from
semantic ui kit. [Example Page](https://semantic-ui.com/examples/grid.html)

You will notice on this page are a bunch of `div`s with the class `column`. In this task,
you are to write javascript code that will print events to the console whenever the top of
one of these `column`s becomes visible on the screen, when the `column` becomes more than 
50% visible on the screen, and when the `column` becomes completely visible on the screen.
Messages that are printed to the console should look like:

"Column with id:`id-10` started to become visible on the page."

"Column with id:`id-50` is now more than 50% visible on the page."

"Column with id:`id-40` is now fully visible on the page."

Once a column is visible on the screen all 3 events should have fired. All events for a
given column should fire once, and fire once only.

For this exercise you may use any javascript feature that is available on all modern
desktop browsers (including ecma6 + a polyfill/compiler if necessary) except for the IntersectionObserver. 
You may not use any libraries, or receive help from another person in completing this exercise. You may however 
use any other resource that is available to you in completing this 
exercise (e.g. O'Reilly books, Stack Overflow).

Your code will be tested on a desktop browser with a 1200px wide by 605px tall window. While
ideally your code will work in a responsive environment, this will not be tested.

Your code for this exercise should reside within the `yourcode.js` file within the repository.
You will notice that there is a script tag at the bottom of the `index.html` already including
`yourcode.js`.

This take home exercise should take less than one day to complete. Please contact us, if you
have questions, or run into any problems.

To submit your response to this exercise please make a pull request on the github project. Please ensure
you have implemented all of the requirements for this project before submitting.
