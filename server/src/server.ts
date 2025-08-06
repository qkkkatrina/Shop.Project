import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Test: http://localhost:3000/api/test`);
  console.log(`Products API: http://localhost:3000/api/products`);
  console.log(`Admin Test: http://localhost:3000/admin/test`);
  console.log(`Client Test: http://localhost:3000/`);
});