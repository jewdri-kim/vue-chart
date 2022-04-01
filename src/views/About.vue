<template>
  <transition name="slide" appear disappear>
  <div class="about content">
    <h1>This is an about page</h1>

    <line-chart :labelList="lineChart.labelList" :dataList="lineChart.dataList" />
    <div class="column-chart">
      <GChart type="ColumnChart" :data="barChart.chartData" :options="barChart.chartOptions" />
    </div>
    <GChart
      type="PieChart"
      :settings="{ packages: ['corechart'] }"
      :data="gChart.chartData"
      :options="gChart.chartOptions.chart"
    />


    <pie-chart :data="DoughnetChart.data" :options="DoughnetChart.options"
              css-classes="pie-chart" style="border:0;"/>
  </div>
  </transition>
</template>
<script>
import LineChart from "@/components/chart/LineChart.vue"
import PieChart from "@/components/chart/PieChart.vue"
import { GChart } from "vue-google-charts";


export default {
  name: "About",
  components: {
    LineChart, PieChart, GChart
  },
  data() {
    return {
      lineChart:{
        labelList: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        dataList: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
          
          {
            label: "Data 2",
            data: [21, 5, 3, 0, 9, 16, 2],
            backgroundColor: "transparent",
            borderColor: "#cfe49f",
            pointBackgroundColor: "#90c34d"
          }
        ],
      },
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
            text: '도넛'
          }
        
        }
        
      },
      gChart: {
        chartData: [
            ['Task', 'Hours per Day'],
            ['식료',    1280],
            ['음료',    498],
            ['소모품',  100],
            ['상품',    1080],
            ['비품',    300],
            ['비용',    576],
            ['그 외 품목 2건',  50]
        ],
        chartOptions: {
          chart: {
            title: "My Daily Activities",
            pieHole: 0.5,
            colors:['#5782FF','#1753FF','#9F66D2','#61D5AE','#FFE357','#F9B746','#BEBEBE'],
            enableInteractivity:false,
            pieSliceText: 'none',
            pieStartAngle: 100,
            pieSliceBorderColor: 'none',
            chartArea:{
                left:10,
                width:'100%',
                height:'100%'
            },
            legend: 'none'
            /*
            {
                alignment: 'center',
                position: 'right',
                textStyle:{color:'#5C5C5C',fontSize:15},
            }*/
          },
        }
      },
      barChart: {
        chartData: [
          ['요일','평균액'],
          ["2/3 (목)", 1000],
          ["2/3 (목)", 117],
          ["2/3 (목)", 660],
          ["2/3 (목)", 1030],
          ["2/3 (목)", 1000],
          ["2/3 (목)", 117],
          ["2/3 (목)", 117],
        ],
        chartOptions: {
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
            chartArea:{
                left:10,
                width:'100%',
                height:'100%'
            },
            legend: { position: 'none' },
            bar: { groupWidth: "90%" },
            axes: {
              y:{

              }
            }
          },
        },
      }

    };
  },
  methods: {
    newLegendClickHandler(){
      console.log('click');
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
