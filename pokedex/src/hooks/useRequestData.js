import React, { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect((url) => {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
  }, [url]);

  return [data, isLoading, error];
}