Feature: Validate API

    Scenario: Validate the parameters of API
       When the API is hit
       Then verify that the response code is ok
       And verify that ID email first_name last_name from responses for all users matches with expected data