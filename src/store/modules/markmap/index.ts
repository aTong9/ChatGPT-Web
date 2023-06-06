import { defineStore } from 'pinia'
import { store } from '@/store'

export const useMarkMapStore = defineStore('markmap-store', {
  state: () => ({
    markmapVisible: false,
  }),

  getters: {
  },

  actions: {
    setMarkMapVisible(context: boolean) {
      this.markmapVisible = context
    },
  },
})

export function useMarkMapStoreWithout() {
  return useMarkMapStore(store)
}
