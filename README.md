# HTTP Status Checker - Frontend Developer Test

[Versión en Español](./README.es.md)

## Welcome!

Hello and welcome to the HTTP Status Checker Limbip code challenge! This test is designed to evaluate your skills as a junior frontend developer using React, TypeScript, and Vite.

## Project Overview

This application is a simple HTTP Status Code Checker with a traffic light visualization. The user can input an HTTP status code or status name (like "ok" or "not found"), and the app will display:

- A traffic light that changes color based on the status (green for success, red for errors)
- Status information with details about the code category and meaning
- On mobile devices, an info button that opens a modal with status details

## Your Tasks

The application has a few bugs and missing features that you need to fix and implement. We've included tests that will help you identify some of the issues.

### 1. Fix the Existing Bugs

There are several bugs in the application that need to be fixed:

- **Test Failures**: Run `npm test` to see the failing tests. You need to fix the code to make these tests pass.
- **Desktop Layout**: The app is currently aligned to the left side on desktop view. It should be centered on the screen.
- **Modal Display**: On mobile view, when clicking the info button, the modal should display the status information, but it currently doesn't show the content correctly.

### 2. Add New Functionality

Implement the following new features:

- **URL Validation and Status Check**:
  - Modify the text input to accept a URL
  - If the input is a valid URL, make a request to that URL and extract the response status code
  - Update the traffic light based on the response (green if reachable, red if an error occurs)
  - In the info modal/card, add a button to open the URL in a new tab if it's reachable

- **Status Code History with Chart Visualization**:
  - Implement a custom React hook (`useStatusHistory`) to track the history of checked status codes
  - Integrate a charting library (like Chart.js or Recharts) to display a visual representation of the status code history
  - Add a "History" button that opens a modal showing the chart
  - The chart should display at least the last 10 status codes checked, with different colors for different status categories (2xx, 4xx, 5xx)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Run tests
npm test
```

## Submission Guidelines

Please fork this repository and send us the URL to your fork when you're done. If you prefer, you can also send a zip file with your solution.

**Note**: Git knowledge will be valuable in our evaluation, so using a fork is recommended.

If you have any questions about the test, feel free to contact us via email.

## What We Value

- **React, TypeScript, and Vite Best Practices**: Clean code, proper component structure, and effective use of TypeScript
- **Testing**: Writing and fixing tests, test-driven development approach
- **Git Knowledge**: Proper commit messages, branching strategy
- **Problem-Solving Skills**: How you approach and solve the bugs and implement new features
- **Attention to Detail**: UI/UX considerations, responsive design
- **Communication**: Clear documentation, code comments (if are really needed)

## Task Checklist

- [ ] Fix the Enter key functionality in the InputSection component
- [ ] Add the correct CSS class to the Title component
- [ ] Fix the test for the HttpStatusChecker component
- [ ] Fix the modal content display issue
- [ ] Center the app on desktop view
- [ ] Implement URL validation and status checking
- [ ] Add a button to open valid URLs in a new tab
- [ ] Create a custom React hook for status history tracking
- [ ] Integrate a charting library and implement the history visualization
- [ ] Ensure all tests pass

**Note**: While we expect you to complete all tasks, we understand that some might be challenging. If you get stuck on a particular task, you can move on to the next one and come back later. What's important is that you demonstrate your problem-solving approach and coding skills. Do your best!
