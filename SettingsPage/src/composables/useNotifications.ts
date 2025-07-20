import { ref } from "vue";

interface Notification{
  id: number,
  message: string,
}

const notifications = ref<Notification[]>([]);

const removeNotification =(id:number)=>{
  notifications.value = notifications.value.filter((n)=>n.id!==id)
}


const addNotifications = (message:string)=>{
  const id = Date.now();
  notifications.value.push({
    id,
    message
  })

  setTimeout(()=>removeNotification(id), 2000);
}


export function useNotifications(){
  return {
    notifications,
    removeNotification,
    addNotifications,
  };
}

