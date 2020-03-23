<div align="center">
    <img src="App/Assets/Images/TOM-Legend.png" alt="Logo" width="100%">
</div>

![GitHub Release Date](https://img.shields.io/github/release-date/thecodingmachine/react-native-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/react-native-boilerplate)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/thecodingmachine/react-native-boilerplate)
![GitHub commits since latest release](https://img.shields.io/github/commits-since/thecodingmachine/react-native-boilerplate/latest)
![GitHub top language](https://img.shields.io/github/languages/top/thecodingmachine/react-native-boilerplate)

# TheCodingMachine React Native boilerplate

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an architecture optimized for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic. It is extremely documented so that each piece of code that lands in your application can be understood and used.

```
If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :)
```

## Content

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.61.5**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.11.2) with a [`NavigationService`](App/Services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to facilitate using Redux
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The boilerplate includes an example (displaying fake user data) from UI components to the saga. The example is easy to remove so that it doesn't get in the way.

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Config`](App/Config): configuration of the application (I used react-native-dotenv)
- [`App/Screens`](App/Screens): the application's screens
- [`App/Containers`](App/Containers): container components
- [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/Navigators`](App/Navigators): react navigation navigators 
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Services`](App/Services): application services, e.g. API clients
- [`App/Redux`](App/Redux): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- run the following steps for your platform

### Android
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS
- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)