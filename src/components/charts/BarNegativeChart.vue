<template>
  <apexchart type="bar" height="110" :options="barNegativeChartoptions" :series="series" />
</template>

<script>
export default {
  name: 'BarNegativeChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          name: '新用户',
          data: [75, 150, 225, 200, 35, 50, 150, 180, 50, 150, 240, 140, 75, 35, 60, 120],
        },
        {
          name: '留存用户',
          data: [-100, -55, -40, -120, -70, -40, -60, -50, -70, -30, -60, -40, -50, -70, -40, -50],
        },
      ],
    },
  },

  data: () => ({
    barNegativeChartoptions: {
      chart: {
        stacked: true,
        toolbar: { show: false },
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
          endingShape: 'rounded',
        },
        distributed: true,
      },
      colors: ['#6485ff', '#ffba00'],
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        x: { show: false },
      },
    },
  }),
}
</script>
