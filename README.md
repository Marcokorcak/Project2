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
  * / – homepage, list out the existing blog posts
  * /blog/{ID} – individual blog post
* CREATE/UPDATE:
   * /create – a form to add a blog post
   * /blog/{ID}/edit
* Ability to perform all 4 CRUD operations for blog posts: create, read, update, delete
* When viewing a blog post, display the last updated, originally published dates along with the blog post’s content
* A loading state for when the app is retrieving the content
* Unit tests for each component
* Use ESLint along with Prettier for code quality and consistency.


## Extra Features

* Made a unique logo for the blog and company name called "SLK"
* Edited Back End code so that the author would also be included when posts are laoded 

## Screenshots

<img src="https://user-images.githubusercontent.com/77298953/232967165-f254581f-829b-472a-a8e4-fa6a156dfc67.png" width=60% height=60%>

The image above shows the home page of the website where all of the posts are listed

<img src="https://user-images.githubusercontent.com/77298953/232967248-51777150-1fab-4f8b-8ee0-998a643e96ce.png" width=60% height=60%>

The image above shows a example of what a post looks like which includes the title, author, content, date published and date updated

<img src="https://user-images.githubusercontent.com/77298953/232967305-a146f7f4-9a40-4e66-9386-3b1a1686172a.png" width=60% height=60%>

The image above whos the "Create a Post" page where users can create their own posts

<img src="https://user-images.githubusercontent.com/77298953/232967378-639cb4dc-0790-4b35-87dc-e764aabb42af.png" width=60% height=60%>

The image above shows the "Delete Post" page where user can confirm or cancel to delete a post

<img src="https://user-images.githubusercontent.com/77298953/232967467-ccb56f18-a8d4-4f1d-a452-b25b7cff5b05.png" width=60% height=60%>

The image above shows the "Edit Post" page where user can alter already existing posts


