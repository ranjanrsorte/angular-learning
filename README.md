# angular-learning
1. Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
2. Angular is a development platform, built on TypeScript.

# Command for Angular Version
` ng version `

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

# Install the Angular CLI
1. npm install -g @angular/cli
2. ng new [NAME-OF-APP]
    - This command will create a new angular project
    - ex: ng new my-app
3. cd [NAME-OF-APP]
    - For navigating to the created project directory
4. ng serve --open
    - The 'ng serve' command launches the server, watches the files, and rebuilds the app as we make changes.
    - The '--open or -o' option automatically opens browser to 'http://localhost:4200'

# Workspace configuration files
1. .editorconfig- Configuration for code editors
2. .gitignore- Specifies intentionally untracked files that Git should ignore.
3. README.md- Introductory documentation for the root application.
4. angular.json- CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses.
5. package.json- Configures npm package dependencies that are available to all projects in the workspaces
6. package-lock.json- Provides version information for all the packages installed into node_modules by nom client
7. src- src/ subfolder contains the source files(application logic, data & assests) for the root application.
8. node_modules- Provides npm packages to the entire workspace
9. tsconfig.json- The base TypeScript configuration for projects in the workspaces

# Application Source Files
1. app/ - Contains the component files in which your application logic and data are defined
2. assets/ - Contains image and other asset files to be copied as-is when you build your application.
3. environments/ - Contains build configuration options for particular target environments. By default there is an unnamed standard development environment and a production ("prod") environment.
4. favicon.ico - An icon to use for this application in the bookmark bar.
5. index.html - The main HTML page that is served when someone visits your site.
6. main.ts - The main entry point for your application.
7. polyfills.ts - Provides polyfill scripts for browser support.
8. styles.sass - Lists CSS files that supply styles for a project.
9. test.ts - The main entry point for your unit tests, with some Angular-specific configuration.

# Create Component Command
1. ng generate component [COMPONENT-NAME]
    OR
2. ng g c [COMPONENT-NAME]
3. ng generate component [COMPONENT-NAME] --inline-style
    - For Creating component without css file
4. ng generate component [COMPONENT-NAME] --inline-template
    - For Creating component withouy template (html) file
5. ng generate component [COMPONENT-NAME] --inline-style --inline-template
    - For Creating component without template and css file

# Create Module Command
1. ng generate module [MODULE-NAME]

# For Adding a form in the Angular
1. Import the 'FormsModule' from the '@angular/forms' library in the 'app.module.ts' file
`import { FormsModule } from '@angular/forms'`

2. Update the 'imports' array in the 'app.module.ts' file
`imports: [FormsModule]`

3. Import the 'NgForm' from the '@angular/forms' library in the '.ts' file of component
`import { NgForm } from '@angular/forms';`

# Commands for installing bootstrap
1. `ng add @ng-bootstrap/ng-bootstrap`

# Questions
1. How to install specific angular cli version?
    - We can directly update the version by updating @angular/cli and other dependency with @angular from package.json file.
    - We can install the specific version of angular by running below command-
        npm install -g @angular/cli@9.1.0

2. Can we use multiple node version in single OS?
    - Yes, for that we need nvm (Node Version Manager)

3. What will happen if we delete package.json file?
    - Build will fail and project will not run

4. What is difference between package.json & package-lock.json file?
    - package.json file contains scripts for running the project along with dependencies & dev-dependencies with their version
    - package-lock.json file only contains details about dependencies

5. What will happen if we delete package-lock.json file?
    - Nothing will be affected in the project.
    - Project will run as expected and if npm install command is runned then this file creats automatically.

6. Why we need inline-css or inline-html?
    - Some cases are there while developing the application that we need to write only one line of html or only one line of css & in that case we do not have to create a separate file for html or css and we can use inline css or inline html functionality.

7. Can we use multiple events over a single element?
    - Yes, we can use multiple events on a single element

8. Which CSS has the highest priority if classname is same?
    - Inline CSS has the highest priority, then Internal, then Component style, then Global Style

9. What is Property Binding?
    - This is the feature of Angular which is used to update the change in input element.

10. Interpolation does not work with boolean value

11. Always use Property Binding for binding the element instead of interpolation.

12. Why we have to use switch case?
    - If we have more conditions like 20-30 then using switch case is the best practice instead of using if-else

13. Can we use for loop in typescript file?
    - No we cannot use. We can use *ngFor in html