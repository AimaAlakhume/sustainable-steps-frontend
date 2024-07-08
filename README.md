# Sustainable Steps

## Overview

Sustainable Steps is a mobile app designed to simplify and gamify sustainable living. It offers tools to help users sort waste, find local recycling resources, and track their eco-friendly progress through rewards.

### Problem

Many people find it difficult to adopt a sustainable lifestyle due to a lack of clear guidance, feeling overwhelmed, or not seeing the impact of their individual actions. Sustainable Steps addresses these challenges by providing easily accessible information, personalized goals, and a rewarding system that makes sustainability fun and engaging.

### User Profile

The target users for Sustainable Steps are individuals who are interested in living more sustainably but may not know where to start or how to maintain their efforts. The app caters to a wide range of users, from beginners who are just starting their journey to those who are already committed to sustainable living and want additional support. 

Key considerations:

*   **User-friendly interface:** The app should be intuitive and easy to navigate for users of all ages and technical backgrounds.
*   **Personalization:** The app should allow users to set their own goals and track their progress in a way that is meaningful to them.
*   **Community building:** The app should foster a sense of community and shared purpose among users, providing opportunities for interaction and support.

### Features

1.  **Waste Diary:**
    *   Users can log their daily waste to gain insights into their habits.
    *   Users can set goals for themselves and track their progress over time.

2.  **The Garden:**
    *   Users earn plants for completing goals and can "plant" them in their personal virtual garden.
    *   A community garden fosters a sense of shared responsibility and encourages users to interact with each other.

3.  **WasteWise:**
    *   A comprehensive guide that helps users sort waste correctly, indicating what is recyclable, compostable, or needs to be disposed of.
    *   The guide can be customized based on the user's location, ensuring accurate and relevant information.

4.  **GreenBot:**
    *   A live map powered by Google Maps API that shows recycling centers, environmental initiatives, and sustainable living resources in the user's area.
    *   Different colored markers are used for easy identification of different types of locations.
    *   Users can search for specific resources or browse the map for inspiration.

## Implementation

### Tech Stack

*   **Frontend:** ReactJS
*   **Backend:** NodeJS, ExpressJS
*   **Data exchange:** Axios
*   **Styling:** SASS

### APIs

*   Google Maps API: To display recycling locations and resources on the map.
*   Google's Gemini AI API: To generate locations relevant to sustainability in the user's area.

### Sitemap

1.  **Homepage:** Introduces the app, its features, and the benefits of sustainable living.
2.  **WasteWise:** Provides the waste sorting guide.
3.  **Waste Diary:** Allows users to log their waste, set goals, and track their progress.
4.  **GreenBot:** Displays the live map with recycling locations and resources.
5.  **The Garden:** Shows the user's virtual garden with their earned plants.
6.  **Community Garden:** A shared space for users to interact and support each other.
7.  **Profile (Optional):** User login/sign-up, settings, and additional personalized features.

### Mockups
https://excalidraw.com/#json=R8vDrsqZGr0hPflgLUfj9,UQQj3b_Dd6j_vnpUSw-wSw

### Data

*   **User Data:** Profile information, waste log, goals, progress, earned seeds/plants [NOT YET IMPLEMENTED].
*   **Waste Sorting Data**: 
*   **Resource Data:** Recycling centers, environmental initiatives, sustainable living resources (fetched from Google Maps API and other sources).
*   **Plant Data:** Information about different plant types and their growth stages [NOT YET IMPLEMENTED].

### Endpoints

*   **GET /entries:** Get waste log entries.
*   **POST /entries:** Log new waste item(s).
*   **GET /guide:** Get comprehensive waste sorting guide.

### Auth

[NOT YET IMPLEMENTED]

## Roadmap (Sprint 1)

*   **Week 1:** Set up project structure, create basic frontend components, and implement user authentication. Develop the WasteWise feature (waste sorting guide). Implement Waste Diary feature (log entries, goal setting, progress tracking).
*   **Week 2:** Integrate Google Maps API and display recycling locations and resources in GreenBot. Use Gemini AI API to pull a database of locations depending on the user's location. Complete styling of the Garden and connect it to the Waste Diary.

## Nice-to-haves

*   Provide articles, tips, and tutorials on sustainable living.
*   The user receives seeds instead of plants, which grow into plants over time, providing a visual representation of the user's progress and commitment.
*   The type of plant earned corresponds to the type of goal completed, adding an element of personalization and surprise.
*   Implement user login/sign-up using a secure authentication system.
*   Consider using JSON Web Tokens (JWT) for authorization.
