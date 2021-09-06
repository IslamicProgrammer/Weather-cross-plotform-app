import axios from "axios"

export const client: any = axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/current.json?key=463b24c56d3e4c5a993193937211601&",
  method: "GET",
})
