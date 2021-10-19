import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../constants/url";

export const useRequestData = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${base_url}?limit=20`)
      .then(response => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      })
  }, [url]);

  return [data, isLoading, error];
}