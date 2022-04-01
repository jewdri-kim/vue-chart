<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    labelList: {
      type: Array,
      required: true
    },
    dataList: {
      type: Array, 
      required: true
    },
    responsive: {
      default: true
    }, 
    maintainAspectRatio: {
      default: false
    },
    titleShow:{
      default: true
    },
    titleName:{
      default:"Graph"
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labelList,
        datasets: this.dataList,
      },
      {
        responsive: this.responsive,
        maintainAspectRatio: this.maintainAspectRatio,
        title: {
          display: this.titleShow,
          text: this.titleName
        },
        plugins: {
              legend: {
                  position: 'right'
              }
          }
      },
      
       
    );
  }
};
</script>