import axios from "axios";

const BASE_URI =
  process.env.BASE_URI || "https://delivery-register-back.herokuapp.com";

const request = async ({ method, path, body, headers, baseURL, params }) => {
  try {
    const apiURL = baseURL || BASE_URI;

    const { status, data } = await axios.request({
      baseURL: apiURL,
      headers,
      method,
      url: path,
      data: body,
      params,
    });

    return {
      status,
      error: data.error,
      data: data.data ? data.data : data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export default request;
