<template>
  <apexchart
    type="line"
    height="270"
    :options="orderSummaryChartOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'OrderSummaryChart',

  props: {
    series: {
      type: Array,
      default: () => [
        {
          name: '周度',
          data: [165, 175, 162, 173, 160, 195, 160, 170, 160, 190, 180],
          type: 'area',
        },
        {
          name: '月度',
          data: [168, 168, 155, 178, 155, 170, 190, 160, 150, 170, 140],
          type: 'line',
        },
      ],
    },
  },

  data: () => ({
    orderSummaryChartOptions: {
      chart: {
        stacked: false,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      colors: ['#6485ff', '#6485ff'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
        dashArray: [0, 8],
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['rgba(100, 133, 255, .05)', '#6485ff'],
          opacityFrom: 0.7,
          opacityTo: 0.55,
          stops: [0, 100],
        },
      },
      xaxis: {
        offsetY: -50,
        categories: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, ''],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
          style: {
            colors: '#718096',
          },
        },
      },
      tooltip: {
        x: { show: false },
      },
    },
  }),
}
</script>
