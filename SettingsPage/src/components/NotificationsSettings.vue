<template>
  <div>
    <h2 class="text-2xl mb-4">
      Notifications
    </h2>
    <form class="space-y-4" @submit.prevent="save">
      <div class="flex items-center gap-2">
        <label>Email notifications</label>
        <input type="checkbox" v-model="notifications.email">
      </div>
      <div class="flex items-center gap-2">
        <label>Search engine indexing</label>
        <input type="checkbox" v-model="notifications.sms">
      </div>

      <button  type="submit" class="btn-primary mt-8">
        Save
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';


const {addNotifications} = useNotifications();

const save = () => {
  addNotifications("Notifications settings updated successfully!")
}

const {notifications} = useSettings();
</script>
