import http from "./httpService.js";

const apiEndPoint = `${window.apiEndPoint}/api/Orders/Orders`;

export async function GetOrders() {
  try {
    const response = await http.get(apiEndPoint);
    return response.data;
  } catch (error) {
    return {};
  }
}

export async function GetOrder(orderNumber) {
  try {
    const endPoint = `${apiEndPoint}?orderNumber=${orderNumber}`;
    const response = await http.get(endPoint);
    return response.data;
  } catch (error) {
    return {};
  }
}

export function PostOrder(id, orderNumber, tracckingNumber, courier) {
  try {
    const endPoint = `${apiEndPoint}?Id=${id}&orderNumber=${orderNumber}&trackingNumber=${tracckingNumber}&courier=${courier}`;
    return http.post(endPoint);
  } catch (error) {
    return {};
  }
}

export async function GetCouriers() {
  try {
    const endPoint = `${window.apiEndPoint}/api/Orders/Couriers`;
    const response = await http.get(endPoint);
    return response.data;
  } catch (error) {
    return {};
  }
}
