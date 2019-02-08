### This Repo

This is a study resource for interview prep.

Everything is in JavaScript. Most folders contain a `basics.js` file, which contains a class definition for data structures such as *binary search trees*, and/or some basic notes about this category of problems. The remaining files in that folder contain specific problems.

One notable exception to this structure is the `bingo` folder, which contains a first pass implementation at an OOP bingo game.

Almost every function has associated notes about time and space complexity, and often there are multiple implementations demonstrating different complexities.

### Next Steps

My goal is to make this a more comprehensive study resource. The following steps are a roadmap.


| task               | status      |
| -------------      |:-------------:|
| remove python files  | complete           |
| update ES5 syntax  | started           |
| better imports     | started           |
| add complexity info  | started      |
| add more problems  | always in progress      |
| add test files  | not started      |
| exam generator  | not started      |

- All ES5 syntax should be updated to ES6. Code style should conform to ES6 standards as well.

- Some classes are copied wholesale into other files for testing. This should be replaced with proper importing.

- All functions should have info regarding their time and space complexity.

- Add more problems, and variants of existing ones.

- In-file `console.log`s should be replaced with external test files, using one of mocha, jasmine, etc.

- Add a exam generator, which builds a exam and test files from the command line.
