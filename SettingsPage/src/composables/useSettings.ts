import { ref, watch } from "vue";

interface SettingsMap{
  general: GeneralSettings,
  notifications: NotificationsSettings,
  privacy: PrivacySettings,
}

type SettingsKey = keyof SettingsMap;


interface GeneralSettings{
  username: string,
  email: string,
  about: string,
  gender: string,
  country: string,
}

const init = <T extends SettingsKey>(key:T, defaults:SettingsMap[T]) =>{
  const stored = localStorage.getItem(key);

  return stored !== null? JSON.parse(stored):defaults;
};

const general = ref<GeneralSettings>( //transformed into IIFE
    init("general", {
      username: '',
      email: '',
      about: '',
      gender: 'male',
      country: 'USA',
    })
);

watch(general, (value)=> localStorage.setItem('general', JSON.stringify(value)), {deep: true});

interface NotificationsSettings{
  email:boolean,
  sms: boolean,
}

const notifications = ref<NotificationsSettings>(
  init('notifications', {
    email:false,
    sms:false,
  })
);


type Visibility ='public'|'private';

interface PrivacySettings{
  visibility: Visibility,
  searchEngineIndexing: boolean,
}

const privacy = ref<PrivacySettings>(
  init('privacy',{
    visibility:'public',
    searchEngineIndexing:true,
  })
);


export function useSettings(){
  return{
    general,
    notifications,
    privacy,
  };
}
