
# Vue 3 Settings Panel with LocalStorage Persistence

This project is a **Vue 3 + TypeScript** single-page application (SPA) that implements a simple **user settings panel** with multiple tabs for General, Notifications, and Privacy settings. The application uses `ref`, `watch`, and composables to persist user preferences to `localStorage` and display temporary notifications.

## 🧱 Project Structure

```bash
├── src/
│   ├── components/
│   │   ├── GeneralSettings.vue
│   │   ├── NotificationsSettings.vue
│   │   ├── PrivacySettings.vue
│   │   ├── FadeTransition.vue
│   │   ├── NotificationList.vue
│   │   └── TabLink.vue
│   ├── composables/
│   │   ├── useSettings.ts
│   │   └── useNotifications.ts
│   ├── App.vue
│   ├── main.ts
│   └── types.ts
````

---

## ⚙️ Settings Management (`useSettings.ts`)

The `useSettings` composable manages the state of three settings sections:

* `general`: username, email, gender, country, about
* `notifications`: toggles for email and SMS
* `privacy`: visibility and indexing preferences

### Features:

* **Typed Settings Map**: Uses `SettingsMap` and `keyof` to associate string keys with specific interfaces.
* **Generic Initializer**: `init<T>()` loads values from `localStorage` or defaults.
* **Auto Persistence**: `watch()` triggers on deep changes and writes back to `localStorage`.
* **Reusability**: Could easily be extended to more settings sections.

### Example

```ts
const general = ref<GeneralSettings>(
  init("general", {
    username: '',
    email: '',
    about: '',
    gender: 'male',
    country: 'USA',
  })
);

watch(general, watcher("general"), { deep: true });
```

---

## 🔔 Notifications System (`useNotifications.ts`)

This composable implements a basic toast/notification system.

### Features:

* **Reactive Notification List**: Notifications are tracked in a `ref<Notification[]>`.
* **Auto-removal**: Each notification auto-dismisses after 2 seconds using `setTimeout`.
* **Composable API**: `addNotification()` and `removeNotification()` exposed to UI components.

### Example Usage

```ts
const { addNotifications } = useNotifications();
addNotifications("Settings saved successfully!");
```

---

## 🧩 Tabs System

The app uses a dynamic tabs structure based on a `tabs: Tab[]` array:

```ts
const tabs: Tab[] = [
  { key: "General", label: "General", component: GeneralSettings },
  { key: "Notifications", label: "Notifications", component: NotificationsSettings },
  { key: "Privacy", label: "Privacy", component: PrivacySettings },
];
```

The selected tab is reactive:

```ts
const currentTab = ref<TabKey>('General');
const currentTabComponent = computed(() =>
  tabs.find(tab => tab.key === currentTab.value)?.component
);
```

This allows seamless switching of component views via `<component :is="currentTabComponent" />`.

---

## 🧠 Key Concepts Used

* **Vue 3 Composition API** (`ref`, `watch`, `computed`, `script setup`)
* **TypeScript Generics** (`<T extends keyof SettingsMap>`)
* **Persistent Local Storage**: Load/save user settings across sessions
* **Modular Design**: Each concern is separated into its own composable (`useSettings`, `useNotifications`)
* **Reactivity**: All state is reactive; updates propagate to the UI automatically
* **Scoped Notifications**: Easy to trigger UI feedback from any component

---

## ✅ Example Workflow

1. User changes `notifications.email` toggle.
2. Vue updates the reactive `ref` bound to the checkbox.
3. The `watch()` on `notifications` triggers and saves the new value to `localStorage`.
4. When the "Save" button is pressed, a toast notification appears via `addNotifications()`.

---

## 📦 Extensibility

This setup makes it trivial to:

* Add new settings categories.
* Persist and restore additional types of user data.
* Swap `localStorage` for other persistence layers (e.g., `IndexedDB`, `Vuex`, or Pinia).
* Integrate with a backend for user-authenticated syncing.

---

## 🛡️ Type Safety

* `SettingsMap` defines a clear mapping between setting keys and their data structure.
* `init()` and `watcher()` use generic constraints to guarantee correct type usage.
* Each setting section (`general`, `notifications`, etc.) is typed and validated by the compiler.

---

## 🚀 Setup & Run

```bash
npm create vue@latest
npm install tailwindcss @tailwindcss/vite
npm run dev
```

Ensure your project is using:

* Vue 3
* TypeScript
* Vite (or another Vue-compatible bundler)

---

## 💡 Suggested Improvements

* Use `try/catch` inside `init()` to handle corrupted localStorage JSON.
* Add global error handling for watcher callbacks.
* Use Pinia for centralized state if project grows.
* Style notifications with transitions and animations.
* Save immediately on change (autosave), or add a "dirty state" indicator.

---

## 🧾 License

This project is provided as-is for educational purposes.

---



