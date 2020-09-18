import React from 'react';
import {Line} from 'react-chartjs-2';

const Graph1 = ({data, label}) => {
  const state = {
    labels:label,
    datasets: [
      {
        label: 'BitCoin Historical Prices',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0.5,
        pointHitRadius: 10,
        data: data
      }
    ]
  }
  return (
    <div>
      <Line
        data={state}
        options={{
          animation: {
            duration: 3000
          },
        title: {
          display: true,
          text: 'BitCoin Prices',
          fontSize: 40
        },
        legend: {
          display: true,
          position: 'right'
        }
        }}
      />
    </div>
  );
}

export default Graph1;