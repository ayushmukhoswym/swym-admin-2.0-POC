/* The set function merges state at only one level. 
   If you have a nested object, you need to merge them explicitly. 
   You will use the spread operator pattern like so

   normalInc: () =>
    set((state) => ({
      deep: {
        ...state.deep,
        nested: {
          ...state.deep.nested,
          obj: {
            ...state.deep.nested.obj,
            count: state.deep.nested.obj.count + 1
          }
        }
      }
    })),
*/
export const counterSlice = (set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  remove: () => set((state) => ({ count: state.count - 1 })),
});
