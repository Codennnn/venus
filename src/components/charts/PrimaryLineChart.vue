<template>
  <apexchart type="line" height="40" :options="primaryLineChartOption" :series="series" />
</template>

<script>
export default {
  name: 'PrimaryLineChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          data: [50, 100, 0, 60, 20, 30],
        },
      ],
    },
  },

  data: () => ({
    primaryLineChartOption: {
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
      colors: ['#6485ff'],
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
          gradientToColors: ['#6485ff'],
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
