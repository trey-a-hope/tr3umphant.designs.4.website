# Tr3umphant.Designs 4.0 Website

Version 4 of Trey Hope's portfolio and freelance site for Tr3umphant.Designs, a web and mobile app development service, from 2017. It covers the service and how to hire Trey, past projects, skills, graphic design work, a photo portfolio, client reviews, a blog and a contact form. Page text is loaded from Firebase so it can be changed without a redeploy. It's an AngularJS 1.4 app written in TypeScript on top of Material Design for Bootstrap (MDB Pro 4.3.2).

## Pages

UI Router states are in `app/Routing/`:

| URL | Page |
| --- | --- |
| `/` | Home: intro to the service |
| `/about` | About Tr3umphant.Designs and pricing approach, plus skills (web, mobile, design) and a resume link |
| `/service` | the step-by-step process for starting a project |
| `/projects` | past work such as Tr3umPHant-Designs 2.0 and Rightway Traffic Solutions |
| `/reviews` | client reviews |
| `/blogs`, `/blog/{path}` | blog list and single post |
| `/contact` | contact form |

There are also graphic design and photo portfolio sections (`app/Pages/GraphicDesign/`, `app/Pages/Portfolio/`).

## How it works

- Page content is read from the Firebase Realtime Database (Firebase JS SDK 4.0 from the CDN) under nodes named after each page, such as `Home`, `About`, `Service`, `Projects`, `Reviews`, `Blog` and `Contact`. `json/Blogs.json` and `json/Quotes.json` hold sample data.
- The contact form posts to `php/sendEmail.php`, so the site needs a PHP host that can send mail.
- TypeScript in `app/` compiles to the `.js` files the page loads (`tsconfig.json`). Styles are Sass/CSS from MDB in `sass/` and `css/`, with MDB add-ons (lightbox, preloader) in `mdb-addons/`.
- Every page template includes a Google Analytics snippet.

## Tech stack

- AngularJS 1.4.8 + Angular UI Router, TypeScript
- Material Design for Bootstrap Pro 4.3.2 (license in `License.pdf`, MDB's own notes in `README.txt`)
- Firebase Realtime Database, PHP mail script, Google Analytics

## Running it

It's a static site plus one PHP script:

```sh
php -S localhost:8000      # serves the site and runs php/sendEmail.php
```

Recompile TypeScript changes with `tsc`.

## Note

MDB Pro is a paid theme. The repo includes its full source under `templates/`, `sass/` and `js/`, so keep the repo's visibility in line with the MDB license.
