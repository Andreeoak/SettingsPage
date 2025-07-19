import GeneralSettings from "@/components/GeneralSettings.vue";
import { ref } from "vue";

interface GeneralSettings{
  username: string,
  email: string,
  about: string,
  gender: string,
  country: string,
}

const general = ref<GeneralSettings>({
  username: '',
  email: '',
  about: '',
  gender: 'male',
  country: 'USA',
});

export function useSettings(){
  return{
    general
  };
}
