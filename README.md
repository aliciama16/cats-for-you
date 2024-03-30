# A Cat for You

This JavaScript project fetches a random cat image from the Cat API and displays it on a webpage.

## Description

This project is a simple JavaScript application that generates random cat images when the user clicks a button. It utilizes the Cat API, which provides access to a vast collection of cat images.

## How to Use

1. Open the `index.html` file in a web browser.
2. Click the "Generate Cat" button to fetch and display a random cat image.
3. Enjoy the cat!

## Code Overview

The JavaScript code in `script.js` performs the following tasks:

- Attaches an event listener to the "Generate Cat" button.
- Defines an `async` function `generateCat()` that fetches a random cat image from the Cat API.
- Creates an `<img>` element to display the fetched cat image.
- Appends the `<img>` element to the `<div>` with the id `catImages` in the HTML document.

## API Usage

This project uses the Cat API to fetch random cat images. For more information about the Cat API and available endpoints, refer to their documentation: [Cat API Documentation](https://thecatapi.com/docs.html)

