<template>
  <q-page class="flex flex-center">
    <div>
      <h1 class="text-primary">{{ $t('error.404') }}</h1>
      <div class="text-h2 text-secondary">
        {{ $t('error.404.description') }}
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error404',
});
</script>
