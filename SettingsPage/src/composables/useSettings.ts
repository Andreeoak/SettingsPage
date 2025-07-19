import { ref, watch } from "vue";

interface GeneralSettings{
  username: string,
  email: string,
  about: string,
  gender: string,
  country: string,
}

const general = ref<GeneralSettings>( //transformed into IIFE
  (()=>{
    const stored = localStorage.getItem('general');

    return stored !== null? JSON.parse(stored):{
      username: '',
      email: '',
      about: '',
      gender: 'male',
      country: 'USA',
    };
  })()
);

watch(general, (value)=> localStorage.setItem('general', JSON.stringify(value)), {deep: true});

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
