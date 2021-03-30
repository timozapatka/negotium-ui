<template>
  <div class="q-ma-none q-pa-none">
    <q-list>
      <q-item class="q-ma-none q-pa-none">
        <q-item-section>
          <q-expansion-item
            icon="settings"
            :label="$t('uiSettings')"
            header-class="text-weight-bold"
            expand-separator
          >
            <language />
            <theme />
          </q-expansion-item>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Language from './Uitlities/Language.vue';
import Theme from './Uitlities/Theme.vue';

export default defineComponent({
  name: 'Sidebar',

  components: {
    Language,
    Theme,
  },

  setup() {
    return {};
  },
});
</script>
