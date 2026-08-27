// src/store/useLanguageStore.ts
import { create } from 'zustand'

type Language = 'en' | 'am' | 'om'

interface LanguageState {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en', // Default language
  setLanguage: (lang) => set({ language: lang }),
}))
