Feature: Google main page
  Scenario: Opening a search engine page
    Given I open google page
    Then I see "Google" in the title


  Scenario: Google DataTable
    When I add all following numbers:
      | number | another number |
      | 1      | 2              |
      | 4      | 3              |
    Then I verify the datatable result is equal to 10