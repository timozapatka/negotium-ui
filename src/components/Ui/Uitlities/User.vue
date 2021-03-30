<template>
  <q-item
    v-if="scope === 'top'"
    class="q-mx-none"
    clickable
    @click="authentification()"
  >
    <q-item-section side>
      <q-icon
        name="account_box"
        size="30px"
        color="primary"
        class="q-ma-none q-pa-none"
      />
    </q-item-section>
    <q-item-section class="q-ma-none q-pa-none">
      <q-item-label side class="text-primary">
        <div v-if="!authenticated">{{ $t('Welcome') }}</div>
        <div v-if="authenticated">{{ fullname }}</div>
      </q-item-label>
      <q-item-label caption>
        <div v-if="!authenticated">{{ $t('SignIn') }}</div>
        <div v-if="authenticated">{{ $t('SignOut') }}</div>
      </q-item-label>
    </q-item-section>
  </q-item>

  <div v-if="scope == 'side'">side</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { StateInterface } from '../../../store/index';

export default defineComponent({
  name: 'User',

  props: {
    scope: {
      type: String,
      default: 'top',
    },
  },

  setup() {
    const store = useStore();

    function authentification() {
      if (authenticated.value) {
        void store.dispatch('User/logout');
      } else {
        void store.dispatch('User/login');
      }
    }
    let authenticated = computed(() => {
      return (<StateInterface>store.state).User.authenticated;
    });

    let fullname = computed(() => {
      return (<StateInterface>store.state).User.fullname;
    });

    return {
      authentification,
      authenticated,
      fullname,
    };
  },
});
</script>
