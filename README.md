# Microservice Dockerization and Deployment on Google Cloud Platform

This repository contains a microservice containerized using Docker and deployed to Google Cloud Platform (GCP) via Google Container Registry (GCR) and Google Cloud Run.

---

## Prerequisites

- Google Cloud account
-	Git
-	Visual Studio Code
-	Node.js
- Docker installed

---

## Steps
# Step 1: Clone the Repository
git clone https://github.com/AkankshaNunakani/sit737-2025-prac5d.git
cd sit737-2025-prac5d

# Step 2: Authenticate with Google Cloud
gcloud auth login
gcloud config set project precise-ratio-456209-i1
gcloud auth configure-docker

# Step 3: Build the Docker Image
docker build -t microservice .

# Step 4: Tag the Docker Image
docker tag microservice gcr.io/precise-ratio-456209-i1/microservice:latest

# Step 5: Push the Image to Google Container Registry
docker push gcr.io/precise-ratio-456209-i1/microservice:latest

# Step 6: Run the Microservice from the Pushed Image
docker run -p 8081:3000 gcr.io/YOUR_PROJECT_ID/microservice:latest




