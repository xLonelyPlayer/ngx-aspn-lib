# ngx-aspn-lib

This project was generated with
[Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

Simple component library for Angular.

## How to develop

Run `ng serve` and you should be able to change

## Project structure

Running `ng serve` will start a development server to modify components
and see results immediately by default on `http://localhost:4200`.

Library components are located on `projects/`.

The `projects/app/` folder is the project with the `projectType: "application"`
used to test the components in development mode.

The `projects/common/` folder is used to share code between libraries.

Add any needed path inside the `app/tsconfig.app.json` file if you add any
libraries to get the reload behavior to test it while running `ng serve`. This
paths will not be used when build for production.

## Testing components

Lets say you want to test the `@ngx-aspn-lib/input` component, all you need to
do is run `ng test input` and it will execute
[Karma](https://karma-runner.github.io) displaying the tests results.
Remeber that it behaves like the `ng serve` command and will reload any save
you do on the `.spec.ts` file.

## Components documentation

Use the README.md inside each component folder, such as `projects/input` as it
will be used to be shown on the npm page, if you ever publish it to the registry.
