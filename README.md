# Clothing Misfits
Clothing Misfits is an image sharing and social media platform to discover personal fashion. Users have the ability to login and start browsing right away, liking and commenting on their favorite outfits. Having a profile allows users to have individual collections of posts that interest them. 

Click here to see the website! : https://clothingmisfits.up.railway.app/

<br>

![gif](https://user-images.githubusercontent.com/95257196/196064786-2e3d0b85-183e-4d56-bdc5-9a4787966e5a.gif)

# Client:
**Tech used**: HTML, CSS, JavaScript, TailwindCSS and DaisyUI

Tailwind CSS made it quicker to write and mantain the applications code with it also being responsive. 

DaisyUI made it easy to customize and create the theme of this website for user interface. 

# Server: 
**Tech Used**: Express, MongoDB Cloudinary
Why was this stack chosen?

Node is a lightweight server choice and can be run pretty easily. Using this for backend, it can be produced quickly and easily. 

MongoDB made storing data in JSON-like documents dynamic schema easy. 

Cloudinary is and end-end image-and video-management solution for this website. It Provides a secure and comprehensive API for easily uploading media files from server-side code, directly from the browser or from a mobile app. 

# Packages/Dependencies used
bcrypt, cloudinary, connect-mongo, daisyui, dotenv, ejs, express, express-flash, express-session, method-overide, mongodb, mongoose, morgan, multer, nodemon, passport, passport-local, tailwindcss, validator.

# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
