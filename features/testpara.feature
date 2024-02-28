Feature: As a parabank customer, I want to be able to Register and login  in parabank portal
  @testpara @paralanding
   Scenario: Customer is able to register their account in parabank.com
   Given I am on the Parabank portal
    When I enter inputs to Register
    |inputName| inputValue|
    |FirstName|Nithya|
    |LastName | Priya|
    |Address  | RobingSong|
    |City     |Clarksburg|
    |State    |Md|
    |ZipCode   |20871|
    |Phone    | 2408769345|
    |SSN|234567890|
    |username| Nithya1|
    |password|demo1234|
    |confirm| demo1234|
    And I click on "RegisterButton" Button
    Then I should see the "WelcomeMessage"
    And I should see the "AccountCreatedMessage"

  @testpara @paralogin
    Scenario Outline: Customer is able to login to parabank.com with validcredentials
    Given I am on the "Parabank" portal
    When I give "customerusername" as "<customerusername>"
    And I give "customerpassword" as "<customerpassword>"
    And I click on "Login" Button
    Then I should see the "AccountoverviewHeader"
    Examples:
        | customerusername | customerpassword |
        | Balaji          | demo1234 | 
        | Nithya1          | demo1234 | 

  @testpara @paraforgotpassword
  Scenario: Customer is able to access forgotpassword link 
  Given I am on the "Parabank" portal
  When I click on "Forgotlogininfo" Button
  Then I should see the "CustomerlookupHeader"


   