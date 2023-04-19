# Project 2 Front End

## Table of contents  
* [Task Description](#Task-description)
* [Extra Features](#Extra-Features)
* [Screenshots](#Screenshots)


## Task Description

* Overview: The purpose of this project is to create a blog application using React, Redux, Redux Toolkit, Vitest, and React Router. The blog server will be provided, and be a barebones implementation of RESTful HTTP routes to CRUD (create, read, update, delete) blog posts that persist in a data.json file. The server will provide routes for blog post creation, reading, updating, and deleting. The blog posts will consist of two properties: title and content, both of which should be treated as strings. In addition, the server will also provide properties for id, last updated, and originally published.

Requirements:

* Clone and start up the blog server from https://github.com/matgargano/dummy-blog-server.
* Use the latest React, Redux, Redux Toolkit, Vitest, and React Router versions to create a React application with the following features:
* A consistent header and footer on each page with navigation links for HOME, CREATE, etc. The navigation item for the current page should be bold.
The following routes at a minimum:
* VIEW:
/ – homepage, list out the existing blog posts
/blog/{ID} – individual blog post
* CREATE/UPDATE:
   * /create – a form to add a blog post
   * /blog/{ID}/edit
* Ability to perform all 4 CRUD operations for blog posts: create, read, update, delete
* When viewing a blog post, display the last updated, originally published dates along with the blog post’s content
* A loading state for when the app is retrieving the content
* Unit tests for each component
* Use ESLint along with Prettier for code quality and consistency.


## Extra Features



## Screenshots

<img src="https://user-images.githubusercontent.com/77298953/225203170-b1aecb90-cc68-4346-892f-850e85a5ad0a.png" width=60% height=60%>

The image above shows the books tab on the website where it also shows the directory in the top left using breadcrumbs

<img src="https://user-images.githubusercontent.com/77298953/225203292-c6f9c3e5-b000-42bf-8f98-9b2e7d520857.png" width=60% height=60%>

The image above shows all of the infromation displayed when clicking on a book title




