import { vi, afterEach } from 'vitest';
import { enableAutoUnmount } from '@vue/test-utils'

enableAutoUnmount(afterEach)

// Mock Nuxt composables and functions
vi.mock('nuxt/app', () => ({
  useRoute: vi.fn(() => ({ path: '/', params: {}, query: {} })),
  useRouter: vi.fn(() => ({ push: vi.fn(), replace: vi.fn() })),
  useRuntimeConfig: vi.fn(() => ({ public: { BASE_URL: 'http://localhost:3000' } })),
  navigateTo: vi.fn(),
  defineNuxtLink: vi.fn(() => 'nuxt-link'),
  useHead: vi.fn(),
}));

vi.mock('#imports', () => ({
  useRoute: vi.fn(() => ({ path: '/', params: {}, query: {} })),
  useRouter: vi.fn(() => ({ push: vi.fn(), replace: vi.fn() })),
  useRuntimeConfig: vi.fn(() => ({ public: { BASE_URL: 'http://localhost:3000' } })),
  navigateTo: vi.fn(),
  defineNuxtLink: vi.fn(() => 'nuxt-link'),
  useHead: vi.fn(),
}));

afterEach(() => {
  vi.restoreAllMocks()
  vi.clearAllTimers()
})