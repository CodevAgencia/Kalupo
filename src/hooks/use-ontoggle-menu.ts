
export const useOntoggleMenu = (elementRef:any, changeToggle:any) => {
  return async (event:any) => {
    if (elementRef.current && !elementRef.current.contains(event.target)) {
      changeToggle(false);
    }
  };
};
