import { useUpdateProducts } from "../api/misc/miscHooks";
import { useStore } from "../store";

const UpdateProducts = () => {
  const { mutate, isLoading, isSuccess } = useUpdateProducts();
  const count = useStore((state) => state.count);
  const add = useStore((state) => state.add);
  const remove = useStore((state) => state.remove);

  const handleClick = () => {
    mutate({
      title: "BMW Pencil",
      /* other product data */
    });
  };
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        On thi section whenever you will update the Products An API will be made
        on Sucess that will refetch the Products above but as because we have
        sliced the products upto 10 hence you can check the network call to
        revalidate it{" "}
      </div>
      <button onClick={handleClick} disabled={isSuccess}>
        {isLoading ? "Loading..." : isSuccess ? "Have been updated" : "Update"}
      </button>
      <div style={{ marginTop: "20px" }}>
        Zustand section
        <div>{count}</div>
        <button onClick={() => add()}>Add</button>
        <button onClick={() => remove()}>Remove</button>
      </div>
    </>
  );
};

export default UpdateProducts;
