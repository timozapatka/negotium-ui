<template>
  <div v-if="type === 'application'">
    <q-list>
      <q-item
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
        clickable
        @click="push(route)"
      >
        <q-item-section avatar>
          <q-avatar
            :icon="route?.meta?.icon"
            :text-color="isRouteId === route.name ? 'primary' : 'white'"
          >
            <q-tooltip :offset="[0, 0]">
              {{ $t(route?.meta?.title) }}
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ $t(route?.meta?.title) }}</q-item-label>
          <q-item-label
            v-if="route?.meta?.description"
            caption
            class="text-grey"
          >
            {{ $t(route?.meta?.description) }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div v-if="type === 'footer'">
    <ul class="float-right q-ma-sm">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
        class="float-right q-ma-sm"
      >
        <router-link v-if="route.meta.title" :to="route.path" replace>
          {{ $t(route.meta.title) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Navigation',

  props: {
    type: {
      type: String,
      default: 'application',
    },
  },

  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const routes = router.getRoutes().filter(function (element) {
      return element?.meta?.type === props.type;
    });

    function push(child) {
      void router.push(child);
    }

    return {
      isRouteId: route.name,
      routes,
      push,
    };
  },
});
</script>
