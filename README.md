# Script for internet connection test from internet.nl

## With node.js:

Automatically opens the browser and redirect to the internet.nl connection test page.

1. Install node.js
    > `sudo apt install nodejs`
2. Install node.js package manager
    > `sudo apt install npm`

3. Download additional component to work with prefered browser (recommended geckodriver)
    > https://github.com/mozilla/geckodriver/releases/
4. Add to PATH the location of component downloaded in **3**
    > `export PATH=$PATH:/location/of/component`
5. Create npm package 
    > `npm init`
6.  Install selenium webdriver package
    > `npm install selenium-webdriver`
7. Save [script.js](https://github.com/saraferreirascf/Automatic-connection-test/blob/main/script.js) in the same location of npm package created in **5**
8. Run script
    > `node index`

## With phantom.js:

On command line, it prints the test result and an image with the connection test results page is created (result.png).

1. Download phantom.js 
    > https://phantomjs.org/download.html
    or
    > sudo apt install phantomjs

2. Run [script2.js](https://github.com/saraferreirascf/Automatic-connection-test/blob/main/script2.js) in the path of phantomjs.exe
    > `phantomjs script2.js`
    





