# Architecture

This project uses a modular architecture, with separate directories for each feature.

## Directory Structure

* `src/`: Source code directory
  + `app/`: Application code directory
    - `components/`: React components directory
    - `pages/`: Page components directory
  + `shared/`: Shared code directory
    - `services/`: API services directory
    - `ui/`: Shared UI components directory
* `public/`: Public assets directory
* `config/`: Configuration files directory
* `docs/`: Documentation directory

## Components

* `App.tsx`: Main application component
* `Header.tsx`: Header component
* `Main.tsx`: Main page component
* `RandomPost.tsx`: Random post page component

## Services

* `baseApi.tsx`: Base API service
* `postsApi.tsx`: Posts API service

## UI Components

* `Header.tsx`: Header component
* `Main.tsx`: Main page component
* `RandomPost.tsx`: Random post page component