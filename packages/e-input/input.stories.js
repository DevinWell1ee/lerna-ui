
import EInput from './src/index.vue';

export default {
  title: 'input',
  component: EInput,
};

export const Base = () => ({
  components: { EInput },
  template: '<e-input title="测试输入框" />',
});