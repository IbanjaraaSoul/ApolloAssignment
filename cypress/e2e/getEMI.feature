Feature: Calculate EMI 

    Scenario: Validate the EMI pie chart in Home loan Section
       Given user navigates to the app URL
       When app loads successfully
       Then verify the EMI with below data
            | amount  | rate | tenure |
            | 2500000 | 10   | 10     |
            | 5000000 | 7.5  | 15     |
       And verify availability of pie chart
       And verify that pie char percentage is greater than zero  


     Scenario: Validate the EMI bar chart in the personal loan section
       Given user navigates to the app URL
       And app loads successfully
       When user navigates to the personal loan tab
       And set the personal loan slider with below data
           | amountPageX | ratePageX | tenurePageX |
           | 1000000:85  | 12:88     | 5:200       |
       And change the month from the calendar widget
       Then check the availability of bar chart
       And count the number of bars available
       And Read the values from any one bar tool tip     
           
