import { IpSearchContext } from "../contexts/ip-search";
import { useContext } from "react";

export default function useSearch() {
  const context = useContext(IpSearchContext);

  if ( !context ) throw new Error("useSearch must be used within a IpSearchProvider");
  
  return context;
};
