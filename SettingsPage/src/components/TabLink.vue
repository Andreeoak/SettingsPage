<script setup lang="ts">
  const props = defineProps<{
    currentTab: string;
    tab:{
      name: string;
      label: string;
    }
  }>()

  defineEmits<{
    click:[];
  }>();
</script>
