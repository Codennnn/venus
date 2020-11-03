<template>
  <apexchart
    type="line"
    height="40"
    :options="warningLineChartOption"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  name: 'WarningLineChart',

  props: {
    series: {
      type: Array,
      default: () => [{
        data: [30, 60, 30, 80, 20, 70],
      }],
    },
  },

  data: () => ({
    warningLineChartOption: {
      chart: {
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        show: false,
        padding: {
          bottom: 5,
          top: 5,
          left: 10,
          right: 0,
        },
      },
      colors: ['#ffba00'],
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          gradientToColors: ['#ffba00'],
          opacityFrom: 0,
          opacityTo: 0.9,
          stops: [0, 30, 70, 100],
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    },
  }),
}
</script>
