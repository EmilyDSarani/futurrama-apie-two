# Planning:
## Folders Needed
- services
- views
- components
- context?

## Files Needed
- Landing view
- Routes 
- Nav
- List 
- Detail 
- Storing Apis
- maybe create a character context

### Steps
1. first set up the fetch for the api
    - setup a services folder
    - check the https://futuramaapi.herokuapp.com/ to see how to get all characters and the search characters by name
2. set up the routes for the pages
    - look up how react does routes and navigation now
3. set up the home page
    - this will just be the landing page to call in the components. or, if we really want to, we can design it to be more
4. set up the character context to call it down into the the app
    - create a context folder
    - create the file
    - set the characters in state
    - set the error message
    - wrap it around App.js in index.js
5. set up the characterList component
    - call in the character
    - map through each of the characters
    - for each character put a link that goes to the detail page
6. set up the characterDetail component
    - call in the map
    - see what the object returns
    - call in each part of the object to render to the page

### Styling?
- download tailwindCSS