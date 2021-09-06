<template>
  <apexchart
    type="donut"
    height="150"
    :options="donutChartOption"
    :series="series"
  />
</template>

<script>
export default {
  name: 'DonutChart',

  props: {
    series: {
      type: Array,
      default: () => [80, 30, 60],
    },
  },

  data: () => ({
    donutChartOption: {
      dataLabels: {
        enabled: false,
      },
      labels: ['社交', '邮件', '搜索'],
      stroke: {
        width: 0,
        lineCap: 'round',
      },
      colors: ['#6485ff', '#00cfdd', '#fdac41'],
      plotOptions: {
        pie: {
          donut: {
            size: '90%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '15px',
                colors: '#6485ff',
                offsetY: 20,
                fontFamily: 'IBM Plex Sans',
              },
              value: {
                show: true,
                fontSize: '26px',
                fontFamily: 'Rubik',
                color: '#718096',
                offsetY: -20,
                formatter(val) {
                  return val
                },
              },
              total: {
                show: true,
                label: '入站流量',
                color: '#475f7b',
                formatter(w) {
                  return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
                },
              },
            },
          },
        },
      },
      legend: {
        show: false,
      },
    },
  }),
}
</script>
