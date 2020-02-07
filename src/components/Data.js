import React, { useState, useEffect } from "react";

const Data = url => {
  const data = ([data, setData] = useState(null));
  const loading = ([loading, setLoading] = useState(true));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  return { data, loading };
};

export default Data;
