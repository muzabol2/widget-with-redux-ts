# widget-with-redux-ts

The widget is created for recruitment purposes to a specific company.

## Table of contents
- [widget-with-redux-ts](#widget-with-redux-ts)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Deployment](#deployment)
  - [Screenshot](#screenshot)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Status](#status)

## General info
A widget to control a group of battery-powered lamps at the airport. The idea of ​​operation is that by pressing "+" and "–" we increase the intensity according to the set steps of 1%, 3%, 10%, 30%, 100%

Time left shows the time left on the battery.

3 options:
* Night vision
* Dusk till dawn
* Flashing
set special lighting modes as the name suggests

5 bars next to the name of the THR 08 group show which lighting level is selected 1 bar illuminated - 1%, 2 bars 3%.... 5 bars 100%

Of course, there are a lot of options and functionalities if something could not be set, or there was no confirmation, or we lost the connection, etc ... but we will not consider it now

Part 1:
"+", "-", NV, DtD, Flashing - send information to the backend.
The square between "+" and "–" is set to the given %.
The number of lighted bars comes as the preset value.

Part 2:
If there is no confirmation for 5 seconds, the answer option lights up red.

Part 3:
Writing a test for automatic validation, preferably in the TDD convention

An additional task is to save the state of the application in Redux and add Typescript.

## Deployment
I will probably deploy the app on GithubPages.

## Screenshot
It should look like this:


## Technologies

Main:
* React
* TypeScript, HTML, CSS

Libraries:
* Redux
* Material-UI

## Setup
Copy repository on your machine. To download all needed dependencies type in command line in the repo's location:
```bash
npm install
```
To run application on your local machine type: 
```bash
npm start
```

## Status
Work in progress.

