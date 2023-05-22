# Quarks Alchemist Test

<!-- ABOUT THE PROJECT -->

## About The Project

This is a monorepo, you will find a Next.js client and a Nest.js server

### Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Nest.js](https://nestjs.com/)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/TomasFalchini/Quarks-Test
   ```

   Intall all Dependencies and run both, client and server

   ```sh
   cd frontend/forms
   npm install
   npm run dev

   cd backend/forms
   npm install
   npm run start:dev
   ```

You will see in the application that there are two routes: "/" and "/formpage". The first one is a simple landing page. In the second one, you can find what was requested in the challenge. Within the "/formpage" route, the form schema is fetched from the backend and rendered (I created only one schema due to time constraints, but if I had more availability, I would have created more to demonstrate rendering multiple schemas through a single component).

There are two buttons, one for submitting the data and the other for searching (strict search, meaning one of the fields must exactly match the saved data).

It's quite simple but meets the requested requirements. It's also important to mention that it is responsive.

<!-- CONTACT -->

## Contact

Tomás Falchini

Project Link: [Quarks-test](https://github.com/TomasFalchini/Quarks-Test)
