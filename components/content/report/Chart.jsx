import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useWindowSize from '../../../hooks/useWindowSize'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 16, 60],
      backgroundColor: [
        '#990C55',
        '#FFB016',
        '#FDE3DF',
      ],
      borderColor: [
        '#990C55',
        '#FFB016',
        '#FDE3DF',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive: true,
    cutout:55,
    plugins: {
        legend: {
            display: false
        }
    }
}

export default function Chart() {
  const { width } = useWindowSize()
  return <Doughnut options={{...options, ...(width < 540 && { cutout: 80})}} data={data} />;
}
