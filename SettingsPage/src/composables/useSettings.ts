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

interface NotificationsSettings{
  email:boolean,
  sms: boolean,
}

const notifications = ref<NotificationsSettings>({
  email:false,
  sms:false,
});


type Visibility ='public'|'private';

interface PrivacySettings{
  visibility: Visibility,
  searchEngineIndexing: boolean,
}

const privacy = ref<PrivacySettings>({
  visibility:'public',
  searchEngineIndexing:true,
})


export function useSettings(){
  return{
    general,
    notifications,
    privacy,
  };
}
