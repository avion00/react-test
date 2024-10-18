import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import ChartData from './GraphData.json';

const Graph = () => (
  <div style={{
    height: '328px',
    width: '700px',
    boxShadow: '2px 2px 150px 50px rgb(37, 150, 190, .2) inset',
    flexGrow: '1',
  }}>
    <ResponsiveLine
      data={ChartData}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
      }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: false,
        reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      enableSlices="x"
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: 'text.primary',
              fontSize: 12,
              fontFamily: 'Rubik, sans-serif',
            }
          },
          legend: {
            text: {
              fill: 'text.primary',
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Rubik, sans-serif',

            }
          }
        },
        legends: {
          text: {
            fill: 'text.primary',
            fontFamily: 'Rubik, sans-serif',
          }
        }
      }}
    />
  </div>
);

export default Graph;
