# VUE Chart



- google chart
  - https://www.npmjs.com/package/vue-google-charts
- chart.js
  - https://vue-chartjs.org/



### 설치

```bash
yarn add vue-chartjs chart.js
npm install vue-chartjs chart.js 
```

##### 버전이 안맞아 에러날 경우 

```bash
npm install chart.js@2
```



#### Goocle Chart

- chart.js 보다 사용이 간편 

```javascript
import { GChart } from "vue-google-charts";
```

```html
<GChart
        type="PieChart"
        :settings="{ packages: ['corechart'] }"
        :data="gChart.chartData"
        :options="gChart.chartOptions.chart"/>
```

- 옵션등 알아보기 위해선 vue 버전은 없으니 https://developers.google.com/chart 참고



#### Chart.js

- 가져와서 컴포넌트 형식으로 사용할 수 있음
- js 형태만 컴포넌트에 있다.
- https://www.chartjs.org/docs/master/ 참고해서 사용



```javascript
mounted() {
    this.renderChart(data,Option);
  }
```





