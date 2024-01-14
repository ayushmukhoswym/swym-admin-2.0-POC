import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import API from "./miscApi";

export const useGetProducts = () => {
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
    error: productsErrorMessage,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const api = new API();
      const res = await api.getProducts();
      return res.data;
    },
  });
  return { products, productsLoading, productsError, productsErrorMessage };
};

export const useUpdateProducts = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationFn: async (values) => {
      const api = new API();
      await api.updateProduct(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return { mutate, isLoading, isSuccess, error };
};
