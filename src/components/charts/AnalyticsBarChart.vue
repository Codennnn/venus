<template>
  <apexchart
    type="bar"
    height="260"
    :options="analyticsBarChartOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'AnalyticsBarChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          name: '2020',
          data: [80, 95, 150, 210, 140, 230, 300, 280, 130],
        },
        {
          name: '2019',
          data: [50, 70, 130, 180, 90, 180, 270, 220, 110],
        },
      ],
    },
  },

  data: () => ({
    analyticsBarChartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '20%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#6485ff', '#e2ecff'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 70, 100],
        },
      },
      xaxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
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
        },
      },
      yaxis: {
        min: 0,
        max: 300,
        tickAmount: 3,
        labels: {
          style: {
            color: '#718096',
          },
        },
      },
      legend: {
        show: false,
      },
      tooltip: {
        y: {
          formatter(val) {
            return `${val}k`
          },
        },
      },
    },
  }),
}
</script>
