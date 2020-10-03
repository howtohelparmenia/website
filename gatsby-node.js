/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Rename "/public" to "/docs" once the build is done. This is necessary for
// Github pages to work. Github doesn't give an option to change this to a
// different directory and Gatsby hardcodes the "/public" path.
// https://github.com/gatsbyjs/gatsby/issues/14703
const path = require('path');
const fs = require('fs');
exports.onPostBuild = function() {
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'));
};