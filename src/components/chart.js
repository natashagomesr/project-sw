import { Chart } from "react-google-charts";

function FilmsChart() {
  const data = [
    ["Film", "Ticket office"],
    ["A New Hope", 775.8],
    ["The Empire Strikes Back", 547.9],
    ["Return of the Jedi", 475.3],
    ["The Phantom Menace", 1003.0],
    ["Attack of the Clones", 649.4],
    ["Revenge of the Sith", 850.0],
  ];

  const options = {
    title: "Highest grossing",
    legend: "none",
    pieSliceText: "label",
    pieStartAngle: 200,
  };

  return (
    <div className="flex flex-col justify-center h-[496px] border-2 rounded-2xl shadow-xl ml-8">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"450px"}
        height={"360px"}
      />
    </div>
  );
}

export default FilmsChart;
