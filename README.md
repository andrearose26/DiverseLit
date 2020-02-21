## Diverse Lit

Diverse Lit is a project that makes books by underrepresented authors easy to find.

This project was created using React and two APIs by Biblioshare. (Thanks Booknet Canada!) The Biblioshare Image API is used to pull in all of the initial cover images, and an internal JS object is used to store categories, book ISBNs, author name and titles.

When the user clicks submit after selecting a filter, only the books with the correct key are displayed. From there, the user can select any book to get additional information. Here, React Router is used to generate different url endings, based on each book ISBN.

As the user clicks into an individual book page, a final API call is made to the API, grabbing book cover images, descriptions, and publisher information. Using regular expressions, the data is formatted correctly and appended onto the page.
