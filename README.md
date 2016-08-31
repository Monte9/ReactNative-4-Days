# React Native 4 Days

This summer I got into React Native and absolutely loved it! Coming from an iOS background, it was not too difficult to learn and was hella fun. Although I could build a simple React Native app.. I wanted to dive deeper into React Native and be able to work on more complex apps with fancier UI's. Hence this repo.

This project is inspired by [30 Days of React Native](https://github.com/fangwei716/30-days-of-react-native). For the most part, I will be following the projects on the repo pretty closely.

## Getting started

You will need Xcode, node.js, the React Native command line tools, and Watchman.

1. Xcode: Get Xcode from the [App Store here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
2. node.js:

    - If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the Node.js [download page here](https://nodejs.org/en/download/).
    - Or install npm via homebrew like so: `brew install node`

3. React Native command line tool: `npm install -g react-native-cli`
4. Watchman: `brew install watchman`
5. Finally create a new React Native app: `react-native init ReactNative4Days`

[Refer to the React Native Getting Started documentation for more information](https://facebook.github.io/react-native/docs/getting-started.html)

## Using CocoaPods
1. Install CocoaPods: `gem install cocoapods`
2. Init the pod file:
    - `cd ios` (move into the ios directory within ReactNative4Days folder)
    - `pod init`
3. Add pod to the file:
    - `atom Podfile` (or use any other text editor of your choice)
    - add `pod 'JTSImageViewController'`
4. Install pod: `pod install`
5. Link Binaries:
    - Click on the `ReactNative4Days.xcodeproj` on the left and select the `ReactNative4Days` target
    - Go the `Build Phases` tab and search for `Link Binary with Libraries`
    - Here add the .a file of the cocoapod you just added which is: `libJTSImageViewController.a`

[Click here for a more detailed guide on how to use CocoaPods](https://shift.infinite.red/beginner-s-guide-to-using-cocoapods-with-react-native-46cb4d372995#.slozm6cn1)

### Compile error while using Cocoapods (react-native version >=0.26.0)

If you are using a `react-native` version `>=0.26.0`, you might encounter the following error while trying to run the project using CoacoPods:

```std::terminate(), referenced from: ___clang_call_terminate in libReact.a(RCTJSCExecutor.o)```

React Native introduced some C++ code so we need to tell **Xcode** to use those symbols for compile. First click **ReactNative4Days.xcodeproj** in the Project Navigator to show your project's target (you will have two targets.. app & tests). Then for each of the targets do the following:
    
    - Go the `Build Settings` tab, and make sure `All` is toggled on (instead of `Basic` or `Combined`)
    - Look for `Other Linker Flags` and add the flag `-lc++` for all configurations

([credit](https://github.com/auth0/react-native-lock#compile-error-react-native-0260))

## License

React Native 4 Days is under the MIT license.

## Contact me

Twitter: [@Mthakkar_](https://twitter.com/MThakkar_)

Website: http://montethakkar.com/

LinkedIn: https://www.linkedin.com/in/montethakkar

Email: mthakkar@mail.sfsu.edu
