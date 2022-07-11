Feature: How to Define and use data table concepts

  Being a plugin handling DataTable scenario

  Scenario: DataTable
    When I add all following numbers:
      | number | another number |
      | 1      | 2              |
      | 4      | 3              |
    Then I verify the datatable result is equal to 10
