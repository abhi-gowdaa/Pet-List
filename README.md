
# Pet Finder

Pet Finder is a React application built with Vite that allows users to search for pets based on animal type and location. The app features a clean and intuitive interface for viewing pet information.

## Features

-  Search Functionality : Allows users to search for pets by specifying animal type and location.
-  Pet List : Displays a list of pets with images and names.
-  Pet Details : Shows detailed information about each selected pet.

## Technologies Used

-  React : A JavaScript library for building user interfaces.
-  Vite : A build tool that provides a faster development experience.
-  Material-UI : A React component library for styling and layout.
-  Axios : HTTP client for making API requests.
-  React Router : For handling routing and navigation within the app.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  Clone the repository or download zip: 
    https://github.com/abhi-gowdaa/Pet-List.git

2.  Navigate to the project directory: 
   cd Pet-List
   
3.  Install dependencies: 
   npm install
 

4.  Start the development server: 
   npm run dev
 

   The application will be available at `http://localhost:5173` in your web browser.

## Usage

1.  View Pet List : The list of pets will be displayed with images and names. Click on a pet’s name to view more details.

2.  View Pet Details : Detailed information about the selected pet will be shown, including breed, location, and description.

3.  Search for Pets : Enter the animal type and location in the search form and click "Search" to find pets.


## Project Structure
src/
├── assets/
├── components/
│   ├── DetailComponent.jsx
│   ├── MainNavigation.jsx
│   └── MainNavigation.module.css
├── pages/
│   ├── ErrorPage.jsx
│   ├── Home.jsx
│   ├── PetDetails.jsx
│   ├── PetList.jsx
│   ├── Root.jsx
│   └── Search.jsx
├── api.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx


## API Integration

The app interacts with the given assignment API at `https://pets-v2.dev-apis.com`  
