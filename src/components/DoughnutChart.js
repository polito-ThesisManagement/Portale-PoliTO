import React from 'react';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

class DoughnutChart extends React.Component {
  render() {
    const { values } = this.props;

    // Retrieve CSS variable values
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--medium-orange').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--navy').trim();

    const data = {
      datasets: [
        {
          data: values,
          backgroundColor: [primaryColor, secondaryColor],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Doughnut chart',
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

DoughnutChart.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
};
