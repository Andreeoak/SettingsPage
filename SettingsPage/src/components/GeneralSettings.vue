<template>
  <div>
    <h2 class="text-2xl mb-4">
    General
  </h2>
    <form class="space-y-4 mx-auto" @submit.prevent="save">
      <div>
        <label>
          Username
        </label>
        <input type="text" v-model="general.username"/>
      </div>
      <div>
        <label>
          Email
        </label>
        <input type="email" v-model="general.email"/>
      </div>

      <div>
        <label>
          About Me
        </label>
        <textarea v-model="general.about"></textarea>
      </div>

      <div>
        <label>Gender</label>
        <div class="flex gap-4">
          <label><input type="radio" name="gender" value="male" v-model="general.gender"/> Male</label>
          <label><input type="radio" name="gender" value="female" v-model="general.gender"/> Female</label>
          <label><input type="radio" name="gender" value="other" v-model="general.gender" /> Other</label>
        </div>
      </div>

      <div>
        <label>
          Country
        </label>
        <select v-model="general.country">
          <option>UK</option>
          <option>USA</option>
          <option>Canada</option>
          <option>Brazil</option>
        </select>
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
const{general} = useSettings();

const save = ()=>{
  addNotifications('General settings were changed successfully!')
}
</script>
