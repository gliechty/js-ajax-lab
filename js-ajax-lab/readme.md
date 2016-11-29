<!---
title: Practicing AJAX
type: Lab
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
competencies: Front-end intro
--->

# Practicing AJAX

## Introduction

<!--Differentiate by fist-to-five -->

> ***Note:*** _This will be a pair programming activity._

You're about to write a lot of AJAX-backed JavaScript – using jQuery – that will complete our little Cat Rescue app.

Make use of the fantastic and altruistic https://ga-cat-rescue.herokuapp.com/api/cats.  Your task is to use your JS skills to list out all the cats in our database and get our form working so we can add more.

## Exercise

#### Requirements

- Implement a jQuery AJAX client for a simple REST service
- Build an application that uses AJAX to update a client
- Use form submission and AJAX to interact with an API on the web.

#### Starter Code

You'll find the same starter code you had in the last lesson in the `starter-code` folder. It's a basic index and some styling, along with an empty `js/jquery.app.js`.

> Note: If you are having trouble getting started, look back at your work on the [jQuery MadLib Lab](https://github.com/den-wdi-2/css-html-forms-lab).

#### Deliverable

1. Make a list of existing cats appear underneath the form.
2. Make the form work (i.e. it will add a cat, and you can verify the cat was added by refreshing).
3. Get your app to add to the list of cats without refreshing the page, using the information from the newly created cat.

<img width="752" src="assets/catRescueList.png">

## Additional Resources

- [http://youmightnotneedjquery.com](http://youmightnotneedjquery.com/)
- [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)
- [Some useful jQuery DOM Manipulation Docs](http://api.jquery.com/prepend/)
- [The Official Cat API](https://ga-cat-rescue.herokuapp.com/api/cats)
