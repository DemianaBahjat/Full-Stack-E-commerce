import { request } from "../axios/axios";


export function getAllCategory() {
  return request.get("/api/categories");
}
