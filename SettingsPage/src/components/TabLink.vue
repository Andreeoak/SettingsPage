<script setup lang="ts">
  import type {Tab} from '@/types';

  const props = defineProps<{
    currentTab: string;
    tab: Tab
  }>()

  defineEmits<{
    click:[];
  }>();
</script>
