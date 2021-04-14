# HR Catwalk
Front End Capstone: Project Catwalk

## Project Catwalk Overview
The user interface for a mock retail website. The website has three primary components: 
1. Product Overview 
2. Questions and Answers 
3. Ratings and Reviews 

---
### 1. Product Overview
For this application the Product Overview section is responsible for displaying a product and its styles as well as allowing a user to purchase a product. The core components of this page include an image gallery, checkout/information section, and an overview section.

In the checkout/information section the functionality this section was requested by the client include:

<ul>
    <li>Image gallery able to cycle through images via arrows or thumbnail</li>
    <li>Image taking up full screen on click maintaining collapsed functionality</li>
    <li>Image clicked on in expanded mode zooms in on image</li>
    <li>Sale indicator displaying sale price in red and the striking through the original price</li>
    <li>Style selector that will update image gallery component</li>
    <li>Only display sizes that are in stock</li>
    <li>Only allow quantity to be clicked on once size is selected</li>
    <li>Limit the quantity to be at most 15 in stock</li>
    <li>Adding to cart with no size selected will open size dropdown</li>
    <li>Overview section that displays description of the product</li>
</ul>

Below is a gif displaying the core functionality of the image gallery.

![Overview Image Gallery](https://github.com/FEC-Brontosaurus/Catwalk/blob/main/misc/overview/FECimagegallery.gif)

Below is a gif displaying the core functionality of the checkout/information section.

![Overview Checkout](https://github.com/FEC-Brontosaurus/Catwalk/blob/main/misc/overview/FECcheckout.gif)

Below is an image of the overview section.

![Overview Description](https://github.com/FEC-Brontosaurus/Catwalk/blob/main/misc/overview/FEC%20overview.png)

---
### 2. Questions and Answers
The Questions and Answers section is the portion of the front-end platform where users can ask questions about certain products, provide answers to questions about products, and receive answers to questions about specific products. 

The first component of the Q&A section is the search feature. This feature automatically filters questions after three or more characters have been entered into an input, and returns the questions list to the original state if less than three characters are entered into the input. 

![QandA Search Bar](https://github.com/FEC-Brontosaurus/Catwalk/blob/74d2311472dd3c893aa22fb3c4e3f21b57a145d9/misc/overview/searchBar.gif)

Associated with each question component is a helpful rating, a report button, and lastly an add an answer feature. Upon clicking the add an answer feature, a modal appears prompting the user to enter a username, an answer, and lastly an email address. All three are required fields before the user can submit their response. In addition, the user can exit the modal by clicking the grayed-out portion of screen.

![QandA Answer Modal](https://raw.githubusercontent.com/FEC-Brontosaurus/Catwalk/74d2311472dd3c893aa22fb3c4e3f21b57a145d9/misc/overview/addAnAnswer.gif)

The answer component likewise has a helpful rating, and a report button.

That last component is the add a question button, and the more questions button. These two buttons provide features that match their names, in that upon clicking the more questions button, more questions appear as the default number of questions rendered to the screen is four. Upon clicking the less questions button, the questions list returns to the default number. The add a question button opens a modal, where the user inputs a username, a question, and an email and submits the information which will be rendered at the bottom of the questions list due to the questions list being sorted by helpful rating.

![QandA Question Modal](https://github.com/FEC-Brontosaurus/Catwalk/blob/74d2311472dd3c893aa22fb3c4e3f21b57a145d9/misc/overview/addAQuestion.gif)

---
### 3. Ratings and Reviews
The Ratings and Reviews section displays individual customer reviews and the meta-data overview of the product. The features include: 
- A scrollable list of individual review tiles 
- Individual Review Tile (includes Username, Date Reviewed, Review Title, Review Body, Star Rating, Mark Review As Helpful Button, Photos)
- A button to sort the review tiles (Newest, Relevance, Rating)
- A button that would reveal two more reviews
- Meta-data overview (Star Ratings Distribution, Characteristics Breakdown)
- Add a new review modal 

![Ratings And Reviews Description]


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




