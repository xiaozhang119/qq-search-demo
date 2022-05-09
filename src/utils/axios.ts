import axios from "axios";

// 添加响应拦截器
axios.interceptors.response.use(
  ({ data }) => {
    const { code, msg } = data;
    if (String(code) !== "1") {
      window.confirm(msg);
    }
    return data;
  },
  function (error) {
    // 对响应错误做点什么
    console.log("对响应错误做点什么", error);
    return Promise.reject(error);
  }
);

export default axios;
