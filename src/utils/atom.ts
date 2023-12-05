import { atom } from 'jotai'

export const firstLoading = atom<boolean>(true)
export const notifContent = atom<Record<string, string | null>>({
  title: null,
  message: null,
})