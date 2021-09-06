<template>
  <apexchart
    type="bar"
    height="100"
    :options="salesChartOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'SalesChart',

  props: {
    series: {
      type: Array,
      default: () => [{
        name: '2020',
        data: [80, 40, 30, 90, 20, 50, 90],
      }, {
        name: '2019',
        data: [20, 60, 70, 10, 80, 50, 10],
      }],
    },
  },

  data: () => ({
    salesChartOptions: {
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
      colors: ['#6485ff', '#e2ecff'],
      xaxis: {
        categories: ['一', '二', '三', '四', '五', '六', '日'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#828d99',
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
