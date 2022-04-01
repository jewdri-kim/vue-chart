<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
    this.renderChart(
      {
          labels: this.data.labels,
          datasets: this.data.datasets
      },
      this.options
    );
  }
};
</script>
