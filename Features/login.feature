Feature: Login into Application

Scenario Outline: Positive test validating login
Given Initialize the Browser
And Navigate to "http://" website
When User enters correct <username> and <password>
And Clicks on login button
Then User is succesfully logged in
And Close the Browser

Examples:
    | username             | password    |
    | test1@gmail.com      | test.12389  |
    | test2_45@gmail.com   | testT!90    |
    | test.test@gmail.com  | test_12_ABC |

Scenario Outline: Negative test validating login
Given Initialize the Browser
And Navigate to "http://" website
When User enters wrong <username> and <password>
And Clicks on login button
Then User is succesfully logged in
And Close the Browser

Examples:
    | username         | password |
    | test7@gmail.com  | wrongPassword.1         |
    | test_78@gmail.com| more_letters_are_wrong  |
    | test.90@gmail.com| onlyOneLetterIsWron     |

