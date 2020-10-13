import http from "./httpService.js";

const apiEndPoint = `${window.apiEndPoint}/api/Products`;

export function PostProduct(Product) {
  return http.post(`${apiEndPoint}/Products`, Product);
}

export function DeleteProduct(Id) {
  try {
    const endPoint = `${apiEndPoint}/DeleteProduct?Id=${Id}`;
     return http.post(endPoint);
    
  } catch (error) {
    return {};
  }
}

export async function GetProducts() {
  try {
    const response = await http.get(`${apiEndPoint}/Products`);
    return response.data;
  } catch (error) {
    return {};
  }
}

export async function GetProduct(Id) {
  try {
    const endPoint = `${apiEndPoint}/Products?Id=${Id}`;
    const response = await http.get(endPoint);
    return response.data;
  } catch (error) {
    return {};
  }
}

export async function GetCategories() {
  try {
    const endPoint = `${apiEndPoint}/Categories`;
    const response = await http.get(endPoint);
    return response.data;
  } catch (error) {
    return {};
  }
}
