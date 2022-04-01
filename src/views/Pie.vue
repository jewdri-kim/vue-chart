<template>
  <transition name="slide" appear disappear>
  <div class="about content">
    <h1>This is an about page</h1>

    <pie-chart :data="DoughnetChart.data" :options="DoughnetChart.options"
              css-classes="pie-chart" style="border:0;"/>

    <h2>옵션  : legend Click X </h2>

    <pie-chart :data="DoughnetChart.data" :options="DoughnetChart.options2"
              css-classes="pie-chart" style="border:0;"/>          
  </div>
  </transition>
</template>
<script>
import PieChart from "@/components/chart/PieChart.vue"


export default {
  name: "Pie",
  components: {
    PieChart
  },
  data() {
    return {
      DoughnetChart: {
        data: {
          labels : ["Books", "Magazines", "Newspapers"], 
          datasets: [
            {
              backgroundColor: ["rgba(255, 0,0, 0.5)", "#00FF00", "#00D8FF"],
              borderWidth: ['10px', '10px', '10px'],
              data: [40, 20, 10],
              hoverBackgroundColor: ['red','green','blue'],
              hoverBorderWidth: "10px"
            }
          ]
        },
        options: { 
          responsive: true,
          legend: { 
              position: 'right',
              //display: false,
              //onClick: this.newLegendClickHandler
          },        
          title: {
            display: true,
            text: '도넛그래프',
          },
          tooltip: {
              enabled: false
          }
        
        },
        options2: {          
          responsive: true,
          legend: { 
              onClick: this.newLegendClickHandler
          }
        }
      }
    };
  },
  methods: {
    newLegendClickHandler(){
      
    }
  }
};
</script>
<style lang="scss" scoped>
  h1{color:#4229bc;}
  .content{min-height:720px;}
  .column-chart svg{width:100% !important;}
  .column-chart rect+g{width:100% !important;}
</style>
