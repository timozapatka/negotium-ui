<template>
  <q-item tag="label" v-ripple class="q-ma-none q-pa-sm" clickable>
    <q-item-section avatar>
      <q-avatar icon="invert_colors" />
    </q-item-section>
    <q-item-section>
      <q-item-label captionKDCLNUI-7>{{ $t('appearanceMode') }}</q-item-label>
      <q-item-label v-if="dark">{{ $t('appearanceDarkMode') }}</q-item-label>
      <q-item-label v-if="!dark">{{ $t('appearanceLightMode') }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-toggle
        @click="toggle()"
        v-model="dark"
        checked-icon="check"
        unchecked-icon="clear"
      />
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
