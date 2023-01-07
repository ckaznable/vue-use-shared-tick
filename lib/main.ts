import { watchEffect } from "vue"
import { runTick, removeTickRunner, startAll, stopAll } from "shared-tick"

type Param = {
  runOnTabVisible?: boolean
  tick?: number
}

export default function useSharedTick(fn: (t: number) => void, { runOnTabVisible, tick = 1000 }: Param = {}) {
  let isVisibility = true

  watchEffect(onInvalidate => {
    const id = runTick({
      tick,
      onTick(t) {
        if (isVisibility || !runOnTabVisible) {
          fn(t)
        }
      }
    })

    onInvalidate(() => {
      removeTickRunner(id)
    })
  })

  watchEffect(onInvalidate => {
    if (!runOnTabVisible) {
      return
    }

    const handle = () => {
      isVisibility = !document.hidden

      if (runOnTabVisible) {
        isVisibility ? startAll() : stopAll()
      }
    }

    document.addEventListener("visibilitychange", handle)
    onInvalidate(() => {
      document.removeEventListener("visibilitychange", handle)
    })
  })
}