# TalentSage Frontend

**Live Demo:** [https://superlative-twilight-942760.netlify.app/](https://superlative-twilight-942760.netlify.app/)

## Overview

TalentSage is a recruiter-focused frontend application designed to demonstrate modern hiring workflows enhanced with AI-assisted features. The project emphasizes clean architecture, predictable state management, and scalable frontend design.

This repository represents the frontend engineering submission and showcases best practices in React application development.

## Goals of the Project

* Simulate a real-world recruiter workflow
* Demonstrate scalable frontend architecture
* Maintain trust and transparency in AI-assisted actions
* Ensure predictable UI state transitions
* Provide clean documentation and test coverage

## Key Features

* Job pipeline with candidate stage management
* Candidate profile including:

  * Skills overview
  * Resume preview
  * Video screening workflow
  * AI screening summary
* Evaluation rubric editor
* Full audit log for recruiter and AI actions
* AI assistant (UI + state simulation)
* Smooth UI animations with performance awareness

## Tech Stack

* React (Create React App)
* Redux Toolkit – state management
* React Router DOM – routing
* Tailwind CSS – styling
* Framer Motion – animations
* Jest + React Testing Library – testing
* GitHub – version control
* Netlify – deployment

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Saadabbasi12/talentsage-frontend.git
cd talentsage-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application locally

```bash
npm start
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### 5. Deploy

The project is deployed on **Netlify**. You can drag and drop the `build/` folder to Netlify dashboard or use Netlify CLI for continuous deployment.

**Live URL:** [https://superlative-twilight-942760.netlify.app/](https://superlative-twilight-942760.netlify.app/)

## Testing

* Run all tests:

```bash
npm test
```

* Press `a` to run all tests
* Press `q` to quit

### Covered Scenarios

* Core workflow behavior
* Candidate stage updates reflected in UI state
* Rubric logic updates correctly with video screenings
* AI assistant open/close state toggles correctly

**Note:** One test may fail due to version incompatibility; it does not impact app functionality.

---

**Author:** Saad Ali Abbasi
