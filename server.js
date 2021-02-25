const app = require('./modules/app/app');
const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[petful-server] Listening on ${ port }.`);
});
