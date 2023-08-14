# IPFS Project: Node.js Backend and React.js Frontend

Welcome to the IPFS Project repository! This project showcases a full-stack application with a Node.js backend and a React.js frontend, demonstrating the integration of IPFS (InterPlanetary File System) for decentralized file storage and sharing.

IPFS stands for InterPlanetary File System, revolutionizes storage by eliminating the need for centralized servers. It achieves all the functions of traditional central servers, but without depending on a single central entity. As a result, it remains robust against outages, censorship, and malicious attacks, all while establishing the groundwork for a truly decentralized internet.

This project is all about uploading NFTs and its metadata directly to the IPFS (InterPlanetary File System) server and retrieve their CIDs to view the data stored on ipfs using dynamic and interacting frontend using React.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
  - [Uploading Files](#uploading-files)
  - [Accessing Content](#accessing-content)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project combines the power of a Node.js backend and a React.js frontend to create a decentralized file storage and sharing application using IPFS.

## Features

- **Decentralized Storage:** Utilizes IPFS for distributed, peer-to-peer file storage.
- **Full-Stack Application:** Integrates a Node.js backend with a React.js frontend.
- **File Upload and Retrieval:** Users can upload and access files through the application.
- **Dynamic User Interface:** Provides an interactive and responsive frontend for a seamless user experience.

## Getting Started

Follow these steps to set up and run the IPFS Project locally on your machine.

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v19.8.1 version)

### Installation

1. Clone the repository:
   a. Open Terminal
    - git clone https://github.com/akankshaVish025/IPFS-PROJECT.git
      
2. Change to the project directory:
   - cd IPFS-PROJECT

3. Install backend dependencies:
   - cd backend
   - npm install

4. Install frontend dependencies:
   - cd ../frontend
   - npm install

### Running the Application

The project consists of two main components: the backend and the frontend. Follow these steps to run both components.

## Backend

1. Change to the backend directory:
   - cd backend

2. Start the Node.js server:
   - npm start

## Frontend

Open another new terminal in another tab:

1. Change to the frontend directory:
   - cd frontend

2. Start the React development server:
   - npm start

3. Open your web browser and go to http://localhost:3000 to access the React frontend.

### Usage

Explore and interact with the IPFS Project:

## Uploading Files

1. Use the "Upload File" feature on the frontend to upload a file.
2. The uploaded file will be stored on IPFS, and its hash will be displayed using two buttons "Open Metadata Url" & "Open Image Url" to view uploaded metadata and its image respectively.

## Accessing Content

1. Click on the 'Open Metadata Url' button from the frontend to view the metadata content uploaded on the IPFS.
2. Click on the 'Open Image Url' button from the frontend to view image file uploaded on the IPFS.

## Contributing

Contributions to the IPFS Project are welcome! If you find a bug, have an enhancement idea, or want to contribute in any way, follow these steps:

1. Fork the repository.
   
2. Create a new branch:
   - Open terminal (Command prompt for Windows)
   - git checkout -b feature/your-feature-name
     
3. Commit your changes:
   - git commit -m "Add your commit message here"
     
4. Push to your branch:
   - git push origin feature/your-feature-name

5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. Feel free to modify and distribute the code as needed.

For more details and documentation about IPFS, please refer to the https://ipfs.tech/ - official IPFS website.
     
  
   
