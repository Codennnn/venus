<template>
  <apexchart
    type="radialBar"
    height="200"
    :options="growthChartOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'GrowthChart',

  props: {
    series: {
      type: Array,
      default: () => [78],
    },
  },

  data: () => ({
    growthChartOptions: {
      chart: {
        sparkline: {
          show: true,
        },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        radialBar: {
          size: 100,
          startAngle: -135,
          endAngle: 135,
          offsetY: 40,
          hollow: {
            size: '60%',
          },
          track: {
            strokeWidth: '90%',
            background: 'transparent',
          },
          dataLabels: {
            value: {
              offsetY: -10,
              color: '#475f7b',
              fontSize: '26px',
            },
            name: {
              fontSize: '15px',
              color: '#596778',
              offsetY: 30,
            },
          },
        },
      },
      colors: ['#ff5b5c'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#6485ff'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        dashArray: 3,
      },
      labels: ['增长趋势'],
    },
  }),
}
</script>
