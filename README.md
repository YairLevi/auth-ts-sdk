<div style="display: flex; flex-direction: column; align-items: center">
<h1>NPM Package Template</h1>
<img src="https://raw.githubusercontent.com/npm/logos/cc343d8c50139f645d165aedfe4d375240599fd1/npm%20logo/npm-logo-red.svg" alt="drawing" width="200"/>
</div>

This is a template for creating a typescript package and publishing it on NPM, utilizing GitHub Actions and changesets as an easy CI/CD pipeline.

## Prerequisites

**NPM Account and access token** - 
- Go to the NPM website and create an account. 
- Go to "Access Tokens" and create a Classic Token, with Automation permissions.
- Go to your package repository, and add that token as a secret, under the name "NPM_TOKEN"

**Git** - To use changesets during your development, you must have Git installed on your computer.

**NodeJS and NPM** - Don't forget to have Node installed with NPM. You can change the workflows in the `.github/workflows` folder if you have another package manager.

---

## Usage

After making any amount of changes, run `npx changeset` and create a changeset (This is just a markdown file describing the changes you made.)

When changes are being applied to the main branch, changeset will create a PR for versioning only! Approve that PR, and it will automatically publish to NPM.

For more information, go to the main changesets docs.
