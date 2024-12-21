<div display="flex" alignItems="center" alignSelf="center">
  <p display="flex" alignItems="center" alignSelf="center">
    <h1> gmdevstore.com </h1>
  </p>
</div>


![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)
![standard-readme compliant](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
[![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)


## Welcome to my public portfolio website! 
This is a portfolio website to showcase projects as well as web dev skills. (also maybe plug some things)

### This repository contains:

1. My website 
2. Integration with a custom Cloudflare API & more 
3. Two 3D environments made with ReactThreeFiber ( Three.js)

---
## Table of Contents
- [recentUpdates](#recentupdates)
- [goals](#goals)
- [build](#build)
- [webresources](#webresources)
- [credits](#credits)
- [public](#public)
- [src](#src)
	- [icons](#icons)
	- [components](#components)
		- [Pages](#Pages)
- [extra](#extra)
- [packages](#packages)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)
---
## RecentUpdates

- [X] Spelling mistakes 
- [X] Migrate site & update look 
- [ ] SEO optimization
- [ ] Menu double click error (App.js)
- [X] Update Cards for monetization
- [X] Finish Website Design & Mobile resize-ability
- [X] Holiday Theme update
- [x] Finish Arduino api page
- [x] Contact page update
- [x] DSA page update
- [x] Finish CRUD Table
- [x] Final Code refactor , organization , documentation

**Date: 1/4/2023**
- Updated site look & feel. 
- Migrated site to cloudflare 

**Date: 1/4/2023**

- Major content finished. Bug Fixes & Content updates continue.

**Date: 11/11/2022**

- Bug: Fix financial api issue with weekend's pulling Stock data from non-stock days ( disable functions when its a weekend)

**Date: 8/24/2022**

- [X] Migrated all secrets and related API calls to CFW backend
- [X] Fixed menu bug
- [X] Updated homepage

Todo:
  - [X] Update website content
  - [X] Finish Financial api page
  - [X] Finish Spotify api page 

  
**Date: 8/24/2022**

- [X] UI updates
**Date: 7/22/2022**

- [X] Spotify API integration is complete
**Date: 7/20/2022**

- [X] First load is really slow
- [X] Updated Menu UI 
**Date: 7/20/2022**

- [X]  Problem with mobile / desktop load time with 3D scene from Spline.com took 30,799 ms to load about 30sec.
- Light house rating for performance was terrible at 13,000ms blocking time and 20 s until interactive 3D scene on mobile.
- Light house rating for performance on desktop was slightly better at 5,740ms and took 7s to become interactive.

Possible solutions: Service workers, reduce 3D elements, optimize code, skip if TTL is too long
**Date: 7/18/2022**

- [X] Massive update to UI, Contents, and navigation.
**Date: 7/15/2022**

- [X]  Integrated React-ThreeFiber and Spline
- [X] Updated 3D environments and UI
- [X]  Reorganizing website structure
- [X]  Readme documentation



## Goals:

1. Understand network & web dev concepts. HTTP, HTML , CSS, JS, JSX, webAPI's & more.
2. Create a web dev portfolio to showcase projects
3. Help others understand the web development and coding process
4. Document my work
5. Gain an understanding of complex concepts such as DSA, 3D rendering, IOT, and network calls.
5. Gain a deeper understanding of the react library 
6. Learn the git process
7. Learn how to build and deploy a modern webapp

## Build
Special alias/script I wrote to speed up git and deploy cycle. Great for 1 developer but hinders git update standards.


The application is built using the following steps:

1. **Install Dependencies**: First, ensure all dependencies are installed. This can be done by running:
    ```sh
    npm install
    ```

2. **Build the Application**: To build the application, run the following command:
    ```sh
    npm run build
    ```
    This will create a [build](http://_vscodecontentref_/0) directory containing the compiled files ready for deployment.

3. **Deployment**: The contents of the [build](http://_vscodecontentref_/1) directory can be deployed to a web server. The [build](http://_vscodecontentref_/2) directory includes:
    - `index.html`: The main HTML file.
    - `asset-manifest.json`: A manifest file for the assets.
    - `static/`: A directory containing static assets like JavaScript, CSS, and images.
    - Other files and directories necessary for the application to run.

The build process uses tools like Webpack or similar bundlers to compile and bundle the source code from the [src](http://_vscodecontentref_/3) directory into optimized files for production.

Make sure to configure the build scripts in the [package.json](http://_vscodecontentref_/4) file as needed.

## Web app structure

| Directory       | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `build/`        | Contains the built/compiled files for deployment.                           |
| `public/`       | Contains public assets and files that are served directly.                  |
| `src/`          | Contains the source code of the application.                                |
| `src/audio/`    | Contains audio files used in the application.                               |
| `src/components/` | Contains React components used in the application.                        |
| `src/icons/`    | Contains icon files used in the application.                                |



# webresources
>https://gmdevapi.com

>https://shields.io/

>https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

>https://reactjs.org/

>https://create-react-app.dev/

>https://spline.design/

>https://codesandbox.io/s/spline-r3f-dt1ldk

>https://threejs.org/

>https://developer.spotify.com/documentation/web-api/

>https://www.arduino.cc/reference/en/iot/api/

>https://openai.com/api/

>https://www.wombo.art/

>https://www.cloudflare.com/

>https://polygon.io/

>https://www.treasurydirect.gov/

>https://opensea.io/

>https://www.mongodb.com/

>https://ant.design/

>https://mui.com/core/
# credits
Gifs From > https://giphy.com/ericaofanderson
> Erica Anderson @ericaofanderson

3D assets From > https://sketchfab.com
> Provence House 3D scan ZenFone AR by mano1creative, under CC. 

> Concrete trash bin 3D scan by matousekfoto, under CC. 

> Shrek by Lorran freires is licensed under Creative Commons Attribution
# public
Contains assets and main HTML needed for public facing web applications
# src
Standard entry point of application. Main function invoked here
## icons
Picture and Icon assets
## components
Contains all components for the webapp
# Pages
Contains entry point for each view or page
# extra
---
# Packages
| Package                      | Version   | Description                                                                 |
|------------------------------|-----------|-----------------------------------------------------------------------------|
| `@emotion/react`             | `^11.8.2` | Library for writing CSS styles with JavaScript.                             |
| `@emotion/styled`            | `^11.8.1` | Styled components for Emotion.                                              |
| `@mui/material`              | `^5.5.3`  | Material-UI components for React.                                           |
| `@react-three/drei`          | `^9.1.2`  | Helper components for `react-three-fiber`.                                  |
| `@react-three/fiber`         | `^8.0.8`  | React renderer for Three.js.                                                |
| `@splinetool/loader`         | `^0.9.69` | Spline tool loader.                                                         |
| `@splinetool/r3f-spline`     | `^1.0.1`  | Spline integration with `react-three-fiber`.                                |
| `@splinetool/react-spline`   | `^2.2.1`  | React integration for Spline.                                               |
| `@splinetool/runtime`        | `^0.9.69` | Runtime for Spline.                                                         |
| `@testing-library/jest-dom`  | `^5.16.1` | Custom jest matchers for testing DOM nodes.                                 |
| `@testing-library/user-event`| `^12.8.3` | Simulates user events for testing.                                          |
| `antd`                       | `^4.19.3` | Ant Design components for React.                                            |
| `gh-pages`                   | `^6.1.1`  | Publish files to a `gh-pages` branch on GitHub.                             |
| `github-card`                | `^1.2.1`  | GitHub profile card component.                                              |
| `openai`                     | `^4.52.7` | OpenAI API client.                                                          |
| `react`                      | `^18.0.0` | React library.                                                              |
| `react-dom`                  | `^18.0.0` | React DOM library.                                                          |
| `react-router-dom`           | `^5.3.0`  | React router for DOM.                                                       |
| `react-scripts`              | `^3.0.1`  | Scripts and configuration for Create React App.                             |
| `react-spring`               | `^9.4.4`  | Spring-physics based animation library for React.                           |
| `react-transition-group`     | `^4.4.2`  | Animation library for React.                                                |
| `sass`                       | `^1.49.11`| CSS preprocessor.                                                           |
| `state-pool`                 | `^0.7.1`  | State management library.                                                   |
| `three`                      | `^0.139.2`| JavaScript 3D library.                                                      |
| `three-stdlib`               | `^2.9.1`  | Standard library for Three.js.                                              |
| `web-vitals`                 | `^0.2.4`  | Library for measuring web vitals.   

The highest version of Node.js needed to run these packages is `18.x.x`, as specified by the `react` and `react-dom` dependencies. Node.js is required to run these packages because it provides the runtime environment for executing JavaScript code outside of a browser, which is essential for building, testing, and deploying the application.

- Ensure all dependencies are up-to-date by running `npm outdated` and `npm update`.
- Check for compatibility issues between dependencies, especially major version changes.
---

# CI/CD
1. **Set Up GitHub Repository**
    - Create a GitHub repository for your project if you haven't already.
    - Push your local project to the GitHub repository.

2. **Configure GitHub Actions**
    - Create a `.github/workflows` directory in your project root.
    - Add a workflow file (e.g., `deploy.yml`) to define the CI/CD pipeline.

    3. **Set Up Cloudflare Pages**
    - Log in to your Cloudflare account and navigate to the Pages section.
    - Create a new project and connect it to your GitHub repository.
    - Configure the build settings:
        - **Build command**: `npm run build`
        - **Build output directory**: `build`

4. **Configure GitHub Secrets**
    - In your GitHub repository, go to `Settings` > `Secrets` > `Actions`.
    - Add the following secrets:
        - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token.
        - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID.
        - `CLOUDFLARE_PROJECT_NAME`: Your Cloudflare Pages project name.

5. **Push Changes to GitHub**
    - Commit and push any changes to the `main` branch of your GitHub repository.
    - The GitHub Actions workflow will automatically run, building and deploying your application to Cloudflare Pages.

6. **Monitor Deployment**
    - Monitor the GitHub Actions workflow for any build or deployment errors.
    - Verify that your application is successfully deployed to Cloudflare Pages.


---
# RelatedProjects

Custom API used in this project
> https://gmdevapi.com/



---
# Maintainers
>Github: [codedumpsterfire](https://github.com/gmdevgithub)

> Social: linktree - gmdevgithub

---

#### License
**Standard**

## Badge

If your README is compliant with Standard-Readme and you're on GitHub, it would be great if you could add the badge. This allows people to link back to this Spec, and helps adoption of the README. The badge is **not required**.

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)


