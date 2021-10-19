# How to Set Up

1. cd into the project directory:

   Run `cd jur_test`

## Backend

2. cd into the "Backend" folder:
   Run `cd Backend`

3. Copy .env.example file and rename as .env;
   Alternatively, run `cp .env.example .env`

4. Edit database credentials in your newly generated/created .env file

5. Run `composer install` to install all libraries and dependencies in the composer.lock file

6. Run `php artisan key:generate` to set the APP_KEY value in the .env file

7. Having created a database, and specifying the same with the right credentials in your .env file, run `php artisan migrate` to create the tables

8. Run `php artisan serve` to run the PHP development server. Alternatively, you can run your project with XAMPP or WAMP.

## Frontend

9. cd into the "Frontend" folder:
   Run `cd Frontend`

10. Run `npm install` to download all packages and dependencies needed for our client

11. While making sure that the API (Laravel) Server is up and running, run `npn start` to start your react application

12. Congratulations!!!
