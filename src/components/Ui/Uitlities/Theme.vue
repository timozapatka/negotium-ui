<template>
  <q-item class="q-ma-sm q-pa-sm" clickable>
    <q-item-section avatar>
      <q-avatar icon="invert_colors" />
    </q-item-section>
    <q-item-section>
      <q-toggle v-model="dark" @click="toggle()" />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'Theme',
  setup() {
    const $q = useQuasar();
    const dark = $q.dark.isActive;

    function toggle() {
      $q.dark.toggle();
      dark = $q.dark.isActive;
    }

    return {
      dark,
      toggle,
    };
  },
});
</script>
