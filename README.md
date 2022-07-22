# How to save and load cookies in Selenium WebDriver

## Available scripts for the app

Cd into the demo-app directory with `cd app`

Inside the directory, you can run:

### `npm install`

Installs all the dependencies needed for starting the demo-app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available scripts for selenium-scripts

Cd into the demo-app directory with `cd selenium-scripts`

Inside the directory, you can run:

### `pip install selenium`

Installs the latest version of selenium package

### `python/python3 utils.py`

Makes sure, that you have a cookie stored in the project, which is not expired yet. This is a prerequisite for successfully passing the tests in the test.py file.

### `python/python3 test.py`

Launches the Selenium tests for testing cookie realted topics. Please be aware, that you need to first start the demo-app with `npm start` in order to successfully pass the tests.

### `python/python3 basic_test.py`

Launches the Selenium tests for testing the components of the web app. Please be aware, that you need to first start the demo-app with `npm start` in order to successfully pass the tests.
