import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Heading</h1>Article{" "}
      <label htmlFor="input">I am a label for the input</label>
      <input id="input" placeholder="put your text here..."></input>
      <a href="https://create-react-app.dev" className="article__link">
        Link to Create React App
      </a>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Mexipedium_xerophyticum_Orchi_01.jpg"></img>
    </article>
  );
}

export default function App() {
  return (
    <>
      <Article />
    </>
  );
}

/*
- an `<article>` as a wrapper HTML element with the class `article`
- an `<h2>` with the class `article__title` and a text of your choice
- a `<label>` and `<input>` tag connected with `id` and `htmlFor` (!) attributes
- an `<a>` tag with the class `article__link` as well as text content and `href` attribute of your choice (What about a Wikipedia article?)

## Notes

- You rendered Article component does not have any styling? Remember that you need to use `className` instead of `class` in JSX.
- You only have to touch the [App.js](src/App.js) file.
*/
