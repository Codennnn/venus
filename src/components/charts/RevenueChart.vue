<template>
  <apexchart
    type="bar"
    height="100"
    :options="revenueChartOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'RevenueChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          name: '2020',
          data: [50, 70, 100, 120, 140, 100, 70, 80, 90, 110, 50, 70, 35, 110, 100, 105, 125, 80],
        },
        {
          name: '2019',
          data: [70, 50, 20, 30, 20, 90, 90, 60, 50, 0, 50, 60, 140, 50, 20, 20, 10, 0],
        },
      ],
    },
  },

  data: () => ({
    revenueChartOptions: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
          top: -20,
          bottom: -15,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: 'rounded',
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#6485ff', '#cdcdcd'],
      xaxis: {
        categories: ['0', '', '', '', '', '10', '', '', '', '', '', '15', '', '', '', '', '', '20'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#718096',
          },
          offsetY: -5,
        },
      },
      yaxis: {
        show: false,
        floating: true,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  }),
}
</script>
