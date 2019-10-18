# README
WikiArt is an online art encyclopedia that allows users browse artworks and artists by a multitude of different categories. Icky Art is a clone that strives to have the same functionality. A major focus for this project was building modular components that could be used to display a variety of different types of information in order to foster re-usability of components throughout the project.
[Link to live site](https://wikiartclone.herokuapp.com/)

## Rails & React
This website uses a rails back-end with a react front-end. The rails back-end allowed me to set up a fairly complex framework of tables very rapidly, which allowed me to spend the majority of my time working on setting up my, also fairly complex, front-end.  
I tried my best to utilize react hooks to their fullest extent throughout this project. I had read about hooks and had become very intrigued so I decided this project would be the perfect place to test out hooks and see how they can be used to simplify my react components and allowed me to write extremely modular code.

## Features:
### Artists / Artworks
#### Artist and Artwork selectors
Because IckyArt allows for artists and artworks to be selected and displayed through a variety of different attributes(e.g., styles, nationalities, schools of art, and art movements), I decided that the best way to structure my backend to allow for the easy retrieval of these objects would be through using tables to hold the possible values for the attributes that an artist/artwork could have, and then store the values of these attributes on the artist/artwork instance as a foreign key. This allowed me to restrict the possible values that could be given to these objects to a pre-selected group, that can be manipulated at any time. This also made it so that two different instances couldn't be given two very similar values that would be difficult to display at the same time without doing time consuming data manipulation. For example, if there was an artwork that was given the style of 'surrealism' by a user while another was given the style of 'surrealist art', these two artworks should rightfully both be displayed together with all the surrealist art in the database, but doing so would require matching a search term to the attributes value for every value in the artworks table. By using associated tables hold all the possible values for my selectors I made it incredibly easy to retrieve artists and artworks from any of their attributes by creating a database level association from the selector to the desired objects.

#### Artist and Artwork front-end
Although the logic was made much easier through the use of associations, it made the front end logic much harder to deal with, especially because I was did my best to write modular components that allowed for as much future expandability as possible. 
was Artworks and artists were challenging because their complex attributes, along with my desire to maintain a modular framework to allow for future expandability, necessitated some cleaver structuring of the database. Because the artists 
## Code snippets to highlight your best code


* Ruby version

* Database creation

* Database initialization

* Deployment instructions

