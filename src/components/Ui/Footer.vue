<template>
  <navigation type="footer" />
</template>

<script>
import { defineComponent } from 'vue';
import Navigation from './Navigation.vue';

export default defineComponent({
  components: { Navigation },
  name: 'Footer',
  setup() {
    return { Navigation };
  },
});
</script>
