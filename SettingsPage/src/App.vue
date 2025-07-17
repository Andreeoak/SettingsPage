<script setup lang="ts">
import type {Tab, TabKey} from '@/types';
import {ref} from 'vue';

  const tabs: Tab[] =[
    {
      key: "General",
      label: "General",
    },
    {
      key: "Notifications",
      label: "Notifications",
    },
    {
      key: "Privacy",
      label: "Privacy",
    }
  ];


  const currentTab = ref<TabKey>('General');
</script>

<template>
  <main>Hello</main>
</template>
