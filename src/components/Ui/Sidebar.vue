<template>
  <div class="q-ma-none q-pa-none">
    <q-list separator>
      <q-separator />
      <q-item class="q-ma-none q-pa-none" bordered>
        <q-item-section>
          <q-expansion-item icon="settings" :label="$t('uiSettings')">
            <language />
          </q-expansion-item>
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Language from './Uitlities/Language.vue';

export default defineComponent({
  name: 'Sidebar',

  components: {
    Language,
  },

  setup() {
    return {};
  },
});
</script>
