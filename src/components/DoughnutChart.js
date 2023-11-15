import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

class DoughnutChart extends React.Component {
  render() {

    const { values } = this.props;
    
    const data = {
      datasets: [{
        data: values,
        backgroundColor: ['#FF8F19', '#008EF1'],
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Douughnut chart',
      },
    };

    return (
      <div style={{}}>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}

export default DoughnutChart;