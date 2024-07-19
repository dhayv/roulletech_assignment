# Recipe Meals App

Welcome to **Recipesmeal.site**!

## Table of Contents

- [Overview](#overview)
  - [Application Overview](#application-overview)
  - [Screenshot](#screenshot)
  - [Video](#video)
- [Technologies Used](#technologies-used)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Containerization and Deployment](#containerization-and-deployment)
    - [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Features](#features)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Author](#author)

## Overview

### Application Overview

The Recipe Meals App is your ultimate destination for exploring a diverse range of recipes. Leveraging the third-party themealdb API, our app offers an extensive collection of meal options for every taste and preference.

### Screenshot

![App Screenshot](link-to-screenshot)

### Video

[Watch the Demo](link-to-video)

## Technologies Used

### Backend

- **Language & Framework**: Python with Django
- **Hosting**: AWS EC2 (Ubuntu)
- **API Integration**: themealdb API
- **Proxy Server**: Nginx
- **CORS Middleware**: Ensures secure cross-origin requests, vital for integrating the React frontend with the Django backend.
- **Server**: Gunicorn

Our backend is robustly built with Django, featuring three primary routes connected to the themealdb API. It's hosted on an AWS EC2 instance running Ubuntu, with Nginx as a reverse proxy to efficiently handle requests. The EC2 instance employs two systemd services: one for a self-hosted GitHub Actions runner that pulls the latest Docker image, and another for managing the Docker container lifecycle.

### Frontend

- **Build Tool**: Vite for fast and efficient builds
- **Framework**: React
- **Storage**: AWS S3 for serving static files
- **HTTP Client**: Axios for seamless communication between frontend and backend
- **Styling**: React Bootstrap
- **Routing**: React Router DOM

Our frontend, built with React and Vite, is designed for speed and efficiency. The static files are served from an AWS S3 bucket, ensuring quick and reliable access for users.

### Containerization and Deployment

- **Docker**: Backend containerized using Docker, with images stored in Docker Hub
- **Static File Serving**: React static files hosted on AWS S3
- **Domain Routing**: AWS Route 53 for domain management

Our deployment process ensures that the Django app is containerized using Docker, and the static files for the React frontend are served via an AWS S3 bucket. AWS Route 53 is used for efficient domain routing.

### CI/CD with GitHub Actions

- **Frontend Workflow**: Builds and deploys the Vite React app, fetching files and deploying them to the AWS S3 bucket using an AWS IAM Role created with an OICDC policy, adhering to AWS best practices by not storing long-term secrets.

- **Backend Workflow**: Builds and pushes the backend Docker image to Docker Hub. A self-hosted runner on the EC2 instance pulls the image, removes the old container, and uses systemd services to restart the backend, ensuring a seamless update process.

Our CI/CD pipeline is meticulously crafted with GitHub Actions, featuring separate workflows for the frontend and backend. This setup ensures continuous integration and deployment, maintaining the application's reliability and performance.

## Features

- Responsive design for an optimal user experience on any device
- Extensive and diverse recipe database
- User-friendly interface for easy navigation and recipe discovery

## License

This project is licensed under the MIT License.

## Acknowledgements

A heartfelt thank you to the developers of the themealdb API, the Django community.

## Author

Developed by [David](https://github.com/dhayv). Connect with me for more exciting projects and collaborations!
