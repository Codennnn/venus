<template>
  <apexchart type="line" height="100" :options="multiRadialOptions" :series="series" />
</template>

<script>
export default {
  name: 'SuccessLineChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          data: [50, 0, 50, 40, 90, 0, 40, 25, 80, 40, 45],
        },
      ],
    },
  },

  data: () => ({
    multiRadialOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      colors: ['#57df9c'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 3,
        curve: 'smooth',
      },
      tooltip: {
        enabled: false,
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
