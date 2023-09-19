import { useQuery } from "react-query";
import ApiServices from "../Apiservices";

export function useList() {
  return useQuery("list", () => {
    return ApiServices.getLstCarousel();
  });
}
