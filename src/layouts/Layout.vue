<template>
  <q-layout view="lhh lpr lFf">
    <q-header class="transparent q-ma-none q-pa-none print-hide">
      <q-toolbar class="q-px-sm q-ma-none">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md print-hide"
          @click="menu = !menu"
        />

        <q-toolbar-title>
          <span
            style="letter-spacing: -1px"
            class="text-subtitle1 text-uppercase"
          >
            <span class="gt-xs">
              <span class="text-weight-bolder">KDC</span>
              LAB |
            </span>
            <span class="text-secondary text-weight-bold">{{
              productName
            }}</span>
          </span>
        </q-toolbar-title>

        <q-space />

        <q-btn
          flat
          dense
          round
          v-model="fullscreen.isActive"
          :icon="fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :aria-label="$t('menu.fullscreen')"
          @click="toggleFullscreen()"
          class="print-hide"
        />
        <q-btn
          flat
          dense
          round
          :icon="sidebar ? 'clear' : 'more_vert'"
          aria-label="details"
          @click="sidebar = !sidebar"
          class="print-hide"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="menu" :mini="mini" elevated dark class="print-hide">
      <q-list class="menu-list" elevated>
        <q-item clickable class="gt-sm" @click="mini = !mini">
          <q-item-section
            avatar
            :class="mini ? 'absolute-center' : 'absolute-right'"
          >
            <q-icon v-if="mini" name="menu" />
            <q-icon v-if="!mini" name="clear" />
          </q-item-section>
        </q-item>
      </q-list>

      <navigation type="application" />

      <div
        v-if="!mini"
        class="fixed-bottom self-center text-center q-pa-md q-gutter-sm"
      >
        <small>{{ $t('version') }} {{ version }}</small>
      </div>
    </q-drawer>

    <q-drawer
      v-model="sidebar"
      :width="300"
      side="right"
      overlay
      class="print-hide"
    >
      <sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="transparent print-hide">
      <Footer />
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { version, productName } from '../../package.json';
import { useQuasar, AppFullscreen } from 'quasar';
import Navigation from '../components/Ui/Navigation.vue';
import Sidebar from '../components/Ui/Sidebar.vue';
import Footer from '../components/Ui/Footer.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    Navigation,
    Sidebar,
    Footer,
  },

  setup() {
    const menu = ref(true);
    const mini = ref(true);
    const sidebar = ref(false);
    const $q = useQuasar();
    const fullscreen = AppFullscreen;

    function toggleFullscreen() {
      fullscreen.toggle().catch(function (error) {
        $q.notify(error);
      });
    }

    return {
      productName,
      version,
      mini,
      menu,
      sidebar,
      fullscreen,
      toggleFullscreen,
    };
  },
});
</script>
