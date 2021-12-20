# angular-learning
1. Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
2. Angular is a development platform, built on TypeScript.

# Angular Essentials
1. Components
    - Components are the building blocks that compose an application.
    - A component includes a TypeScript class with a @Component() decorator, an HTML template, and styles.
    - The @Component() decorator specifies:
        - A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.
            - ex: @Component({ selector: 'hello-world' });
                    <hello-world></hello-world>
        - An HTML template that instructs Angular how to render the component.
        - An optional set of CSS styles that define the appearance of the template's HTML elements.
2. Templates
    - Every component has an HTML template that declares how that component renders. You define this template either inline or by file path.
    - Angular automatically updates the rendered DOM when your component’s state changes.
    - One application of this feature is inserting dynamic text
    - Double curly braces instruct Angular to interpolate the contents
    - Directives:
        - *ngIf and *ngFor
3. Dependency-Injection
    - Dependency injection lets you declare the dependencies of your TypeScript classes without taking care of their instantiation.
    - Instead, Angular handles the instantiation for you.

# Angular CLI
- The Angular CLI is the fastest, straightforward, and recommended way to develop Angular applications.
    1. ng build: Compiles an Angular app into an output directory.
    2. ng serve: Builds and serves your application, rebuilding on file changes.
    3. ng generate: Generates or modifies files based on a schematic.
    4. ng test: Runs unit tests on a given project.
    5. ng e2e: Builds and serves an Angular application, then runs end-to-end tests.

# Angular First-Party Library
1. Angular Router
2. Angular Forms
3. Angular HttpClient
4. Angular Animations
5. Angular PWA
6. Angular Schematics
