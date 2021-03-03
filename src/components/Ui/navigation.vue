<template>
  <div>
    <div v-for="(route, index) in routes" :key="index" :route="route">
      <q-list v-if="route.meta && route.meta.app">
        <q-item
          v-for="(child, indexChild) in route.children"
          :key="indexChild"
          :child="child"
          clickable
          @click="push(child)"
        >
          <q-item-section avatar>
            <q-avatar
              :icon="child?.meta?.icon"
              :text-color="$route.name === child.name ? 'primary' : 'white'"
            >
              <q-tooltip :offset="[0, 0]">
                {{ child?.meta?.title }}
              </q-tooltip>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ child?.meta?.title }}</q-item-label>
            <q-item-label
              v-if="child?.meta?.description"
              caption
              class="text-grey"
              >{{ child?.meta?.description }}</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { useRouter, RouteRecordRaw} from 'vue-router';

export default defineComponent({
  name: 'navigation',
  setup() {
    const router = useRouter()
    const routes = router.getRoutes();
    
    function push( child: RouteRecordRaw) {  
        console.log('Navigation Push: ', child);
        void router.push(child);
    }  
    return {
      routes,
      push
    }
  }
});