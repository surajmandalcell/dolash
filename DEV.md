### Steps to publish a new version to npm

1. Update the version in `package.json` to the new version number.

2. Update the `DEV.md` with the new version number and the changes.

3. Commit the changes to git.

4. Use `npm version minor` to update the version number in `package.json` and create a git tag. Use `npm version major` or `npm version patch` if necessary.

5. Run `npm publish` to publish the new version to npm.

#### Changelog

##### 0.4.0

- Added `params` to `be/express` to get the parameters from the request regardless of the method.

##### 0.3.0

- Added `asyncExec` function to run a command asynchronously.
- Added `DEV.md` to keep track of development steps.

- Updated `README.md`

##### Before 0.3.0

I forgot to keep a changelog before this version. Sorry!
