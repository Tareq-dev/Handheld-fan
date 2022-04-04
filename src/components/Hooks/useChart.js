import { useEffect, useState } from "react";

const useChart = (chart) => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, [chart]);

  return [charts, setCharts];
};

export default useChart;
