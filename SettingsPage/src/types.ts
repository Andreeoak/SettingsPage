export type TabKey ='General' | 'Notifications' | 'Privacy';
import type { Component } from 'vue';

export interface Tab {
  key: TabKey;
  label: string;
  component: Component;
}


