**Mern Boilerplate**

🍳 This is a boilerplate for creating MERN apps quickly.

🤖 Currently, it holds a basic CRUD configuration where a user can add, update, view or delete a book.

🔑 Signup and Login have been provided. 

👮 Frontend Protected routes and authorisation on backend routes have been provided too.

⚙️ Conditional rendering based on if user is logged in or not.

**Checklist**

✅ React installed on frontend

✅ Backend node, express, mongoose setup, cloudinary

✅ Created routes, models, utils, index, package.json

✅ Dependancies installed on frontend

✅ Frontend Signup, Login, User, Books, CRUD created

✅ Template tested, some basic errors but it works

✅ Corrections of basic errors

✅ Ready to go!

**Instructions**

1. Before cloning and launching, please create a MongoDB account as well as a Cloudinary account to obtain your api keys.

2. Clone repo

3. Create .env files and populate them like so

.env in root of server folder

```
DATABASE_ACCESS=put-your-mongodb-access-url-here
CLOUDINARY_URL=put-your-cloudinary-access-url-here
CLOUD_NAME=put-your-cloudinary-name-here
CLOUD_API_KEY=put-your-cloudinary-api-key-here
CLOUD_API_SECRET=put-your-cloudinary-api-secret-here
```

.env in root of client folder

```
REACT_APP_CLOUDINARY_USERNAME=your-cloudinary-user-name-here
REACT_APP_CLOUDINARY_PRESET="your-preset-name-in-betwen-these-quotes"
``` 

4. cd server, <code>npm install</code> and then <code>npm start</code>

5. cd client, <code>npm install</code> and then <code>npm start</code>

**Working with MongoDB**

Make sure to include your IP address of your workplaces in the MongoDB dashboard. 

For development purposes, you can also set MongoDB to accept requests from any IP address to avoid confusion when working from different places.