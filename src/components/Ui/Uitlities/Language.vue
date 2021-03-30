<template>
  <q-item class="q-ma-none q-pa-sm" clickable>
    <q-item-section avatar>
      <q-avatar icon="language" />
    </q-item-section>
    <q-item-section>
      <q-select
        v-model="language"
        :options="languageOptions"
        :label="$t('language')"
        dense
        borderless
        emit-value
        map-options
        options-dense
      />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Language',

  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const language = ref(locale);

    watch(language, (val) => {
      locale.value = val;
    });

    return {
      language,
      languageOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'de-DE', label: 'German' },
      ],
    };
  },
});
</script>
