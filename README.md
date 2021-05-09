<!--
*** Thanks for checking out my project. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** Thanks again! Now go learn Express.js :D
-->



<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

-->

<!-- PROJECT LOGO -->
<!--
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

-->

  <h3 align="center">Blogging Website using Express.js and MongoDb</h3>

  <p  align="center">
    An awesome Project to withstart your learning with express. This project will help you to withstart your path of learning with express and connection of it with database more precisely mongodb. The best way to learn is by creating small projects which will help you learn and understand the concept of it.
    <br />
    <a href="https://github.com/abhi526691/Simple-Blogging-website-To-learn-using-express-and-mongodb/tree/main/blogExampleUsingExpress"><strong align="center">Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/abhi526691/Simple-Blogging-website-To-learn-using-express-and-mongodb.git" align="center">View Demo</a>
    
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
<!--     <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
<!--     <li><a href="#acknowledgements">Acknowledgements</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<h4>Add Blog: </h4>
<p>Add blog contain three field title, snippet and body so if you will add your blog it will be saved in our database in mongodb and displayed in our home page</p>
<br><img src="blogExampleUsingExpress/Screenshot (20).png" >
<br>


<h4>DataBase Updation</h4>
<p>After adding that blog it will get updated in database created in mongodb</p>
<br>
<img src="blogExampleUsingExpress/Screenshot (21).png" >
<br>


<h4>Home Page: </h4>
<p> The added blog will be displayed in here with title and snippet and on clicking on the title you will be redirected to description page</p>
<br>
<img src="blogExampleUsingExpress/Screenshot (17).png" >
<br>

<h4> Page Description: </h4>
<p>After clicking on the title it will redirect to a new page where the body of the blog will be displayed with a delete button and on clicking on delete button the blog will be deleted from database</p>
<br>
<img src="blogExampleUsingExpress/Screenshot (18).png" >
<br>

<h4> Home Page:</h4>
<p>After clicking on delete button that blog will be deleted and will be redirected to a home page with remaining blog will be shown</p>
<img src="blogExampleUsingExpress/Screenshot (19).png" >
<br>


This is a great way to start learning express.js by building small projects starting with a blog one where you can simply see the connection between database and your models.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Express.js](https://expressjs.com/)
* [mongodb](https://www.mongodb.com/)
* [Bootstrap](https://getbootstrap.com)





<!-- GETTING STARTED -->
## Getting Started

Basic Instruction of how to get started with the project

### Prerequisites

You can simply start working on the project by installing npm and using npm you can install all the required packages
* npm
  ```sh
  npm init
  ```
  
  Through this you can install all the node_modules required to run the necessary commands related to node 
* npm
  ```sh
  npm install
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install Express 
     ```sh
   npm install express
   ```
4. Install other remaining required package you can get it in package.json file 
    The packages are
     1. Mongoose: For connection with mongodb
     ```sh
   npm install mongoose
   ```
     2. EJS: To set the view engine to ejs where work will be done similar to html
     ```sh
   npm install ejs
   ```




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Abhishek Pandey - [linkedin](https://www.linkedin.com/in/abhishek-pandey-1515aa171/) - sauravpandey597@gmail.com

Project Link: [https://github.com/abhi526691/Simple-Blogging-website-To-learn-using-express-and-mongodb](https://github.com/abhi526691/Simple-Blogging-website-To-learn-using-express-and-mongodb)



<!-- ACKNOWLEDGEMENTS 
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)
-->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
