import { useState, useRef, useCallback } from "react";
import { axios } from "../utils";

const validator = (value: string) => /^[1-9][0-9]{4,14}$/.test(value);

export const useSearch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [info, setInfo] = useState<any>(null);
  const [error, setError] = useState("");
  const ref = useRef<number | null>(null);
  const onChange = useCallback(
    (text = "") => {
      const { current } = ref;
      setValue(text);
      if (current) {
        clearTimeout(current);
      }
      ref.current = window.setTimeout(() => {
        if (validator(text)) {
          error && setError("");
          setLoading(true);
          axios
            .get(`https://api.uomg.com/api/qq.info?qq=${text}`)
            .then((res: any) => {
              setInfo(res);
              setLoading(false);
            })
            .catch(() => {
              setLoading(false);
            });
        } else {
          // 这里根据实际业务需求恶意增加更加细致的规则和人性化的提示信息，比如告诉用户错在哪里；
          setError("请输入正确的QQ号码");
          setInfo(null);
        }
      }, 300);
    },
    [error]
  );

  return {
    value,
    info,
    loading,
    error,
    onChange,
  };
};
