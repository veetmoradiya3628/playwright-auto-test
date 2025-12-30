# playwright-auto-test

## Overview
This project is designed to automate testing for web applications using Playwright. It includes various test scenarios to ensure the functionality and reliability of the application.

## Folder Structure
- `tests/`: Contains the test specifications.
  - `login.spec.js`: Tests related to user login functionality.
- `tests-login-Empty-Credentials-Test/`: Tests for scenarios where no credentials are provided.
- `tests-login-Invalid-Login-Test/`: Tests for scenarios with invalid login credentials.
- `tests-login-Valid-Login-Test/`: Tests for scenarios with valid login credentials.
- `test-results/`: Directory where test results are stored.

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the tests using `npx playwright test`.
4. With UI `npx playwright test --ui`
5. With browser open `npx playwright test --headed`

## Contributing
Contributions are welcome! Please submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
