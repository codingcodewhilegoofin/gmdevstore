<div display="flex" alignItems="center" alignSelf="center">
  <p display="flex" alignItems="center" alignSelf="center">
    <h1> giomoscato.com </h1>
  </p>
</div>


![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)
![standard-readme compliant](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
[![git](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)

https://twitter.com/_GmDev
[![Twitter](https://badgen.net/badge/icon/twitter?icon=twitter&label)](https://twitter.com)

## Welcome to my public website! 
This is a portfolio website to showcase projects as well as web dev skills. 

### This repository contains:

1. My website 
2. Endpoints to my own Cloudflare API and MongoDB database
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

- [ ] SEO optimization
- [X] Update Cards for monetization
- [X] Finish Website Design & Mobile resizability
- [X] Holiday Theme update
- [ ] Finish OpenAI api bot
- [ ] Finish Arduino api page
- [ ] Contact page update
- [ ] DSA page update
- [ ] Finish CRUD Table
- [ ] Final Code refactor , organization , documentation

**Date: 11/11/2022**

  Bug: Fix financial api issue with weekend's pulling Stock data from non-stock days ( disable functions when its a weekend)

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

- [X] Spotify API intergration is complete
**Date: 7/20/2022**

- [X] First load is really slow
- [X] Updated Menu UI 
**Date: 7/20/2022**

- [X]  Problem with mobile / desktop load time with 3D scene from Spline.com took 30,799 ms to load about 30sec.
- Light house rating for performance was terrible at 13,000ms blocking time and 20 s untill interactive 3D scene on mobile.
- Light house rating for perormance on desktop was slightly better at 5,740ms and took 7s to become interactive.

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
5. Gain a deeper understanding of react and its ecosystem
6. Learn the git process
7. Learn how to build and deploy a modern webapp

## Build
	npm install
	npm start

Special alias/script I wrote to speed up git and deploy cycle. Great for 1 developer but hinders git update standards.

Essentially just git cycle followed by "deploy": "npm run build && gh-pages -d build"

	alias GRG='git add . ; git commit -m "updated"; git push ; npm run deploy'

	GRG

Then deployed to github pages and routed through CloudFlare. 

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
# credits
Gifs From > https://giphy.com/ericaofanderson
> Erica Anderson @ericaofanderson

3D assets From > https://sketchfab.com
> Provence House 3D scan ZenFone AR by mano1creative, under CC. 

> Concrete trash bin 3D scan by matousekfoto, under CC. 

> Shrek by Lorran freires is licensed under Creative Commons Attribution
# public
Contains assests and main HTML needed for public facing web applications
# src
Standard entry point of application. Main function invoked here
## icons
Picure and Icon assests
## components
Contains all components for the webapp
# Pages
Contains entry point for each view or page
# extra
---
# packages
>"dependencies": {
    "@emotion/react": "^11.8.2",
    "@emotion/styled": "^11.8.1",
    "@mui/material": "^5.5.3",
    "@react-three/drei": "^9.1.2",
    "@react-three/fiber": "^8.0.8",
    "@splinetool/loader": "^0.9.69",
    "@splinetool/r3f-spline": "^1.0.1",
    "@splinetool/react-spline": "^2.2.1",
    "@splinetool/runtime": "^0.9.69",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/user-event": "^12.8.3",
    "antd": "^4.19.3",
    "gh-pages": "^3.2.3",
    "github-card": "^1.2.1",
    "openai": "^2.0.5",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^5.3.0",
    "react-scripts": "^5.0.0",
    "react-spring": "^9.4.4",
    "react-transition-group": "^4.4.2",
    "sass": "^1.49.11",
    "state-pool": "^0.7.1",
    "three": "^0.139.2",
    "three-stdlib": "^2.9.1",
    "web-vitals": "^0.2.4"
  }
---
# RelatedProjects
Team project 
> https://fullstackingdevelopment.com/

My api 
> https://gmdevapi.com/

My store 
> https://gmdevstore.com/

---
# Maintainers
**Giovanni Moscato**
[Yupimaperson101@protonmail.com](Yupimaperson101@protonmail.com)

> `  @_GMDev `

### Contributing
**NA**


## Contributors
**Giovanni J Moscato**

---

#### License
**Standard**

## Badge

If your README is compliant with Standard-Readme and you're on GitHub, it would be great if you could add the badge. This allows people to link back to this Spec, and helps adoption of the README. The badge is **not required**.

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

