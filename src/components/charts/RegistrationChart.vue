<template>
  <apexchart
    type="bar"
    height="60"
    :options="registrationChartoptions"
    :series="series"
  />
</template>

<script>
export default {
  name: 'RegistrationChart',

  props: {
    series: {
      type: Array,
      default: () => [{
        name: '人数',
        data: [300, 700, 500, 1500, 900, 800, 1200],
      }],
    },
  },

  data: () => ({
    registrationChartoptions: {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false },
      },
      states: {
        hover: {
          filter: 'none',
        },
      },
      colors: ['#ffeed9', '#ffeed9', '#ffeed9', '#ffeed9', '#fdac41', '#ffeed9'],
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },

      plotOptions: {
        bar: {
          columnWidth: '80%',
          distributed: true,
          endingShape: 'rounded',
        },
      },
      tooltip: {
        x: { show: false },
      },
      xaxis: {
        type: 'numeric',
      },
    },
  }),
}
</script>
