import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './api/baseApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware()
    
    // Check if baseApi.middleware exists and is a function
    if (baseApi.middleware && typeof baseApi.middleware === 'function') {
      return defaultMiddleware.concat(baseApi.middleware)
    }
    
    // If middleware is not available, return default middleware
    return defaultMiddleware
  },
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch