/**
 * reference: http://passportjs.org/docs
 *            http://idlelife.org/archives/808
 * @type {app|exports}
 */

const app = require('./app');
const port = 3000;

app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log("server is listening on", port, "...");
});
