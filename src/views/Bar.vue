<template>
  <transition name="slide" appear disappear>
  <div class="about content">
    <h1>Bar page</h1>
    <bar-chart :data="barChart1.data" :options="barChart1.options"/>

    <h2>데이터 옵션 바꾸기 : legend : none</h2>
    <bar-chart :data="barChart2.data" :options="barChart2.options"/>
  </div>
  </transition>
</template>
<script>
import BarChart from "@/components/chart/BarChart.vue"

export default {
  name: "Bar",
  components: {
      BarChart
  },
  data() {
    return {
        barChart1: {
            data: {                
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"
                ],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            },
            options: { 
                responsive: true,
                maintainAspectRatio: false
            }
        },
        barChart2: {
            data: {
                labels: [
                    "2/3 (월)",                    
                    "2/3 (화)",                    
                    "2/3 (수)",
                    "2/3 (목)",
                    "2/3 (금)",
                    "2/3 (토)",
                    "2/3 (일)"
                ],
                datasets: [
                    {
                        label: "평균액",
                        backgroundColor: "#00D8FF",
                        data: [1000, 117, 660, 1030, 1000, 117, 39]
                    }
                ]
            },
            options: { 
                legend:{
                    display: false
                }
            }
        }
    };
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
  h1{color:#4229bc;}
  .content{min-height:720px;}
  .column-chart svg{width:100% !important;}
  .column-chart rect+g{width:100% !important;}
</style>
