# Passport


Passport is middleware for Node.js that makes it easy to implement authentication and authorization. Whether you are building your first login page or are an expert in all things identity, the documentation will help you understand Passport and use it in your applications.

## Features

- Extensibility: Passport.js is highly extensible and supports a wide range of authentication strategies, including OAuth, OpenID, SAML, JWT, and more. You can also create custom 
- Middleware-based: Passport.js is designed as a middleware for Express.js, making it easy to integrate with existing Express applications. It can be seamlessly integrated into the request processing pipeline, allowing for authentication checks to be performed on specific routes or resources.
- Session Management: Passport.js provides built-in session support, allowing user authentication state to be maintained across multiple requests. It handles session serialization and deserialization, storing user information in the session and retrieving it when needed.
- Authentication Providers: Passport.js supports a wide range of authentication providers out of the box, including popular social media platforms like Google, Facebook, Twitter, GitHub, and more. This allows users to authenticate using their existing accounts on these platforms.
- Security:Passport.js includes built-in security features to help prevent common security vulnerabilities, such as CSRF (Cross-Site Request Forgery) protection and session fixation prevention.

## Local Strategy

- Installation: First, you need to install Passport.js and the Passport Local Strategy package. You can install them using npm:
```
  npm install passport passport-local

```


- Configuration: In your application, configure Passport.js to use the Local Strategy. This typically involves requiring Passport.js, requiring the Local Strategy, and configuring Passport.js to use the Local Strategy.

```
import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import User from "../models/user.models.js";
passport.use(
  new localStrategy(async (userName, password, done) => {
    try {
      const user = await User.findOne({ username: userName });
      const matchPassword = await user.matchPassword({ password: password });

      if (!user || !matchPassword) {
        return done(null, false, { message: "Invalid Username or Password" });
      }
      return done(null, user);
    } catch (error) {
      return done(error, false, { message: "Error Signing up User" });
    }
  })
);

```
## done();
In Passport.js, the done callback is a function that you invoke to indicate the outcome of the authentication process. It's a crucial part of the authentication flow and is used to communicate the result of attempting to authenticate a user.

The done callback typically has the following signature:

```
done(error, user, info);
```
- error: An error object if an error occurred during the authentication process. If there are no errors, this parameter should be null.

- user: The authenticated user object. If authentication was successful, this should be the user object representing the authenticated user. If authentication failed, this parameter should be false or null.

- info: Additional information about the authentication process, such as a message or details about the failure reason. This parameter is optional and is often used to provide feedback to the user about why authentication failed.