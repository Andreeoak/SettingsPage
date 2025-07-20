<template>
  <div>
    <h2 class="text-2xl mb-4">
        Privacy
    </h2>
    <div>
      <form class="space-y-4 mx-auto" @submit.prevent="save">
        <div>
          <label class="mb-2.5">Visibility</label>
          <select v-model="privacy.visibility">
            <option value="private">
              Private
            </option>
            <option value="public">
              Public
            </option>
          </select>
        </div>

        <div class="flex items-center space-x-2">
          <label>Search Engine Indexing</label>
            <input class="" type="checkbox" v-model="privacy.searchEngineIndexing"/>
        </div>

        <button  type="submit" class="btn-primary mt-8">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';

const {addNotifications} = useNotifications()

const save = ()=> {
  addNotifications("Privacy settings updated succesfully!")
}
const {privacy} = useSettings();

</script>
