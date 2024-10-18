import * as React from 'react';
import { ResponsivePie } from '@nivo/pie';
import ChartData from './ChartData.json';

const Charts = () => (
  <div style={{
    height: '328px',
    width: '400px',
    flexGrow: '1',
    boxShadow: '2px 2px 100px 50px rgb(37, 150, 190, .2) inset',
    padding: '1em',
    bgcolor: 'rbg(232, 232, 232, 0.2)',
  }}>
    <ResponsivePie
      margin={{
        top: 20,
        bottom: 25,
        right: 0,
        left: 35
      }}
      data={ChartData}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="text.primary"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: { id: 'java' },
          id: 'dots',
        },
        {
          match: { id: 'scala' },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#000',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
      theme={{
        labels: {
          text: {
            fontSize: 12,
            fill: 'text.primary',
            fontFamily: 'Rubik, sans-serif',
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

export default Charts;
