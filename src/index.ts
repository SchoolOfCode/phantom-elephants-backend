import app from './app';

const port = process.env.PGPORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
  return;
});
