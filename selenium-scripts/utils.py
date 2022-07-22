from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import pickle


def initiate_chrome_driver(executable_path="./chromedriver"):
    """
    Initiates a chrome driver.
    """
    service = Service(executable_path=executable_path)
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--headless")

    return webdriver.Chrome(service=service, options=chrome_options)


def save_cookie():
    """
    Saves the cookies of the driver.
    """
    driver = initiate_chrome_driver()
    driver.get("http://localhost:3000/")

    create_cookie_button = driver.find_element(By.ID, "createCookie")
    create_cookie_button.click()

    pickle.dump(driver.get_cookies(), open("cookies.pkl", "wb"))

    driver.quit()


def load_cookie(driver):
    """
    Loads the cookies of the driver.
    """
    with open("cookies.pkl", "rb") as f:
        cookie = pickle.load(f)[0]

    driver.add_cookie(
        {'expiry': cookie["expiry"], 'name': cookie["name"], 'value': cookie["value"]})


def check_for_cookies(driver):
    """
    Checks if the driver has cookies.
    """
    return len(driver.get_cookies()) > 0


save_cookie()
