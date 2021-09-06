<template>
  <apexchart
    type="radialBar"
    height="240"
    :options="multiRadialOptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'MultiRadialChart',

  props: {
    series: {
      type: Array,
      default: () => [75, 80, 85],
    },
  },

  data: () => ({
    multiRadialOptions: {
      colors: ['#6485ff', '#ff4757', '#ffba00'],
      plotOptions: {
        radialBar: {
          offsetY: -10,
          hollow: {
            size: '40%',
          },
          track: {
            margin: 10,
            background: '#fff',
          },
          dataLabels: {
            name: {
              fontSize: '15px',
              color: ['#718096'],
              fontFamily: 'IBM Plex Sans',
              offsetY: 25,
            },
            value: {
              fontSize: '30px',
              fontFamily: 'Rubik',
              offsetY: -15,
            },
            total: {
              show: true,
              label: '总浏览量',
              color: '#718096',
            },
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['天猫', '京东', '拼多多'],
    },
  }),
}
</script>
