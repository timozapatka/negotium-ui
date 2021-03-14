<template>
  <div v-if="type === 'application'">
    <q-list>
      <q-item
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
        :class="activeRoute.name === route.name ? 'bg-active' : ''"
        clickable
        @click="pushRoute(route)"
      >
        <q-item-section avatar>
          <q-avatar
            :icon="route?.meta?.icon"
            :text-color="activeRoute.name === route.name ? 'white' : ''"
          >
            <q-tooltip :offset="[0, 0]">
              {{ $t(route?.meta?.title) }}
            </q-tooltip>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-white">
            <strong>{{ $t(route?.meta?.title) }}</strong>
          </q-item-label>
          <q-item-label
            v-if="route?.meta?.description"
            caption
            class="text-white"
          >
            {{ $t(route?.meta?.description) }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <div v-if="type === 'footer'">
    <ul class="row q-ma-none q-pa-none justify-center">
      <li
        v-for="(route, index) in routes"
        :key="index"
        :route="route"
        class="q-ma-sm text-caption"
      >
        <router-link
          v-if="route.meta.title"
          :to="route.path"
          replace
          :class="activeRoute.name === route.name ? 'text-primary' : ''"
        >
          {{ $t(route.meta.title) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar, Screen } from 'quasar';
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
    const $q = useQuasar();
    const router = useRouter();
    const activeRoute = useRoute();
    const routes = router.getRoutes().filter(function (element) {
      return element?.meta?.type === props.type;
    });

    function pushRoute(child) {
      console.log('child:', child);
      router.push(child).catch(function (error) {
        $q.notify(error);
      });
    }

    return {
      routes,
      activeRoute,
      pushRoute,
      Screen,
    };
  },
});
</script>
<style lang="sass" scoped>
.bg-active
  background: $primary
  background: -moz-linear-gradient(45deg, darken($primary,5%) 0%, darken($primary,10%) 47%, darken($primary, 15%) 100%)
  background: -webkit-gradient(left top, right bottom, color-stop(0%, $primary), color-stop(47%, darken($primary,15%)), color-stop(100%, darken($primary, 10%)))
  background: -webkit-linear-gradient(45deg, darken($primary,5%) 0%, darken($primary,10%) 47%, darken($primary, 15%) 100%)
  background: -o-linear-gradient(45deg,darken($primary,5%) 0%, darken($primary,10%) 47%, darken($primary, 15%) 100%)
  background: -ms-linear-gradient(45deg, darken($primary,5%) 0%, darken($primary,10%) 47%,darken($primary, 15%) 100%)
  background: linear-gradient(45deg, darken($primary,5%) 0%,darken($primary,10%) 47%, darken($primary, 15%) 100%)
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='darken($primary,5%)', endColorstr='darken($primary, 15%)', GradientType=1 )
</style>
