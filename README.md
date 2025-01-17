# CelDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular CLI
11.2.19

## Node versions
14.10.1 || 16.14.2

## .npmrc
@savvaslearning:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken="{yourAuthTokenHere}"

-----------------------------------------------------------------

## Linking Local Dependencies and Building a Custom Version of a Library for Use in Another Project

### 1. **Prepare the Local Dependency (cel-components)**

- Ensure you have the local version of the `cel-components` library.
- Make necessary fixes or changes to the library in the local version.

### 2. **Link the Local Dependency to Your Project**

In the `cel-components` project directory, run the following command to link the local project:

{`npm link`}

This creates a global symlink to the `cel-components` library.

### 3. **Link the Local Dependency to Your Target Project (accessibility-sandbox)**

In the `accessibility-sandbox` project directory, run:

{`npm link @savvaslearning/cel-components`}

This links the local version of `cel-components` to the `node_modules` of `accessibility-sandbox`.

### 4. **Update the Path to the Local Dependency in `accessibility-sandbox/package.json`**

In the `accessibility-sandbox` project, adjust the path to point to the local version of `cel-components` in the `package.json` file:

```json
{"@savvaslearning/cel-components": "file:/path/to/local/cel-components"}
```

This ensures that the local cel-components will be used instead of any version from the registry.

### 5. **Verify Linking**

Check that the `node_modules/@savvaslearning/cel-components/src` directory is now pointing to the local version. If it's linked correctly, you should see your custom changes reflected in the `node_modules` folder.

### 6. **Build and Serve**

In the `cel-components` directory, run the build command specific to your setup if you have not already done so (e.g., `stencil build` for Stencil projects). You will also want to `pnpm build` anytime there are changes, and it will hot-reload into `accessibility-sandbox`.In the `accessibility-sandbox` project, run `npm install` to resolve any dependencies. If using Angular, run:
{`npm install`}
{`npm run build`} || {`ng build`}
{`npm run start`} || {`ng serve`}

If you encounter issues with the Stencil loader, verify the paths in the import statements (for example, in `app.module.ts`).

### 7. **Update the Path to Custom Loader in `accessibility-sandbox`**

Ensure that the import statement in the target project (`accessibility-sandbox`) is pointing to the correct path for the local loader:
```typescript
import { defineCustomElements } from '@savvaslearning/cel-components/dist-stencil/loader';
```

### 8. **Test and Verify**

After linking and building, test the application to verify that the custom `cel-components` are working. If necessary, update the paths and ensure the build tools are aware of the local dependency.

### 9. **Maintain and Update**

As you continue to develop, you may need to run `npm link` again if changes are made to the local library. Make sure the build process for the linked version is correctly integrated into your project.