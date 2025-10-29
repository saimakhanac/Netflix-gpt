# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix GPT

- Create vite+React app (crete react app is deprecated now)
  . npm create vite@latest
  . npm create vite@latest netflix-gpt -- --template react
- Configured tailwind css
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploy our app to production
- create Sign up user account using firebase
- Implement Sign In user Api
- Created Redux store with userSlice
- Implemented Sign out 
- Update profile api call
- BugFix: Sign up user displayName and profile picture update
- Bugfix: if the user is not loggedin Redirect /browse to/ Login Page and vice versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom hook for now playing movies
- create movieSlice
- update store with movies  data
- planning for maincontainer and secondary container
- Fetch data for trailer video
- update store with traier video data
- embbeded the youtube video and make it autoplay and mute
- tailwind classes for main container


# Features

- Login/Sign Up
  -Sign In / SignUP Form

  - redirect to browse page

- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - Movie List \* N
  -NetflixGPT
    - Search Bar
    - Movie Suggestions
