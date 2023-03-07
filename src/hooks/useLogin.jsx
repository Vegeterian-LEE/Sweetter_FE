import { useState, useCallback } from "react";

const useLogin = (value, initial, reject, success, Reg, samePw) => {
  const [inputvalue, setValue] = useState(value);
  const [message, setMessage] = useState(initial);
  const [checkReg, setCheckReg] = useState(false);

  const setInputHandler = useCallback(
    (e) => {
      setValue(e.target.value);
      if (!Reg.test(e.target.value)) {
        setMessage(reject);
        setCheckReg(false);
      } else {
        setMessage(success);
        setCheckReg(true);
      }
    },
    [Reg, reject, success]
  );

  const checkSame = (e) => {
    setValue(e.target.value);
    if (e.target.value !== samePw) {
      setMessage(reject);
      setCheckReg(false);
    } else {
      setMessage(success);
      setCheckReg(true);
    }
  };

  const reset = () => {
    setValue(initial);
  };

  return [inputvalue, setInputHandler, message, checkReg, reset, checkSame];
};

export default useLogin;
