# HR Catwalk
Front End Capstone: Project Catwalk

## Project Catwalk Overview
The user interface for a mock retail website. The website has three primary components: 
1. Product Overview 
2. Questions and Answers 
3. Ratings and Reviews 

---
### 1. Product Overview

---
### 2. Questions and Answers
The Questions and Answers section is the portion of the front-end platform where users can ask questions about certain products, provide answers to questions about products, and receive answers to questions about specific products. 

The first component of the Q&A section is the search feature. This feature automatically filters questions after three or more characters have been entered into an input, and returns the questions list to the original state if less than three characters are entered into the input. 

Associated with each question component is a helpful rating, a report button, and lastly an add an answer feature. Upon clicking the add an answer feature, a modal appears prompting the user to enter a username, an answer, and lastly an email address. All three are required fields before the user can submit their response. In addition, the user can exit the modal by clicking the grayed-out portion of screen.

The answer component likewise has a helpful rating, and a report button.

That last component is the add a question button, and the more questions button. These two buttons provide features that match their names, in that upon clicking the more questions button, more questions appear as the default number of questions rendered to the screen is four. Upon clicking the less questions button, the questions list returns to the default number. The add a question button opens a modal, where the user inputs a username, a question, and an email and submits the information which will be rendered at the bottom of the questions list due to the questions list being sorted by helpful rating.

---
### 3. Ratings and Reviews
The Ratings and Reviews section displayes individual customer reviews and the meta-data breakdown of the product.


Notes:
- Currently each individual has their own github API key to use when making requests

Code Review:
- Maintain ES6 where possible
- Must get code approved after any changes to code review
- Whoever writes code merges after getting approved

Package Consistency:
- Version: Transpile with Babel (via Webpack)
- Linting: eslint with the hackrector linter config that comes with your repo
- Front End Asset Comp/Loading: Webpack + Webpack-dev
- Front End MVC: ReactJS
- Data Store: TBD (if not given)
- MVC: ExpressJS (if not given)
- Database: Database chosen by HR
- Testing: Jest + Enzymes




