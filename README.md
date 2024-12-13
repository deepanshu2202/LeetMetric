# LeetMetric

LeetMetric is a web application that displays user statistics from LeetCode based on their username. It fetches data from external APIs to show user information and problem-solving statistics, such as total solved problems, and breakdowns for easy, medium, and hard difficulty levels.

## Features

- User can enter their LeetCode username.
- Fetches user information and problem-solving statistics.
- Displays statistics in a visual circle format, showing total solved problems and a breakdown by difficulty.
- Dynamic background color for each circle representing problem-solving progress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [APIs Used](#apis-used)
- [Technologies](#technologies)
- [License](#license)

## Installation

To run this project locally, follow the steps below:

1. Clone this repository:
    ```bash
    git clone https://github.com/deepanshu2202/LeetMetric.git
    ```

2. Navigate to the project directory:
    ```bash
    cd LeetMetric
    ```

3. Open `index.html` in your browser.

No server or complex setup is required as this project is a front-end application.

## Usage

1. Open the `index.html` file in any modern web browser.
2. Enter your LeetCode username in the input field and click the **Search** button.
3. The page will display your user information along with the progress for each difficulty (total, easy, medium, and hard).

## Folder Structure

LeetMetric/ <br>
│
├── index.html         # The main HTML file for the application <br>
├── style.css          # The CSS file for styling the page <br>
└── script.js          # The JavaScript file that handles the logic <br>


## APIs Used

This application uses two external APIs to fetch data:

1. **User Info API**: Fetches user information like name.
   - URL: `https://alfa-leetcode-api.onrender.com/{username}`

2. **LeetCode Stats API**: Fetches statistics like total problems solved and breakdown by difficulty.
   - URL: `https://leetcode-api-faisalshohag.vercel.app/{username}`

## Technologies

- **HTML5**: Structure of the page.
- **CSS3**: Styling and layout of the page.
- **JavaScript (ES6)**: Handling dynamic data fetching and user interactions.

