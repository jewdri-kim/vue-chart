<script>
import { Doughnut } from "vue-chartjs";  //Pie

export default {
  extends: Doughnut, //Pie,
  props: {
    data: {
      type: Object,
      required: true
    },
    
    options: {
      type: Object,
      required: true
    }
  },
  mounted() {

    //this.$emit('pieMount', this);
    this.renderChart(
      {
        labels: this.data.labels,
        datasets: this.data.datasets
      },
      this.options
    );
  },
  methods: {
    newLegendClickHandler(){
      console.log('click');
    }
  }
};
</script>