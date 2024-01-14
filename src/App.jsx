import { useGetProducts } from "./api/misc/miscHooks";
import "./App.css";
import UpdateProducts from "./components/UpdateProducts";

function App() {
  const { products, productsLoading, productsError, productsErrorMessage } =
    useGetProducts();

  if (productsError) {
    return <span>Error: {productsErrorMessage.message}</span>;
  }

  return productsLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <div>API call here made to get all the products Dummy Products......</div>
      {products.products.slice(0, 10).map((p, idx) => (
        <div key={idx}>{p.title}</div>
      ))}
      <UpdateProducts />
    </div>
  );
}

export default App;
