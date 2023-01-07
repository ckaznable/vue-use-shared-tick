# Vue useSharedTick

Vue 3 hook run function in same `setInterval`

## Installation

use npm
```
npm install vue-use-shared-tick --save
```

use yarn
```
yarn add vue-use-shared-tick
```

use pnpm
```
pnpm install vue-use-shared-tick
```

## Usage

run function per second

```vue
<script setup>
import { ref } from "vue"
import useSharedTick from "vue-use-shared-tick"

const time = ref(Date.now())
const onTick = (t) => {
  time.value = t
}

useSharedTick(onTick)
</script>

<template>
  <div>Current Timestamp: {{ time }}</div>
</template>
```

run function per 3 second

```js
useSharedTick(onTick, {tick: 3000})
```

## API

### useSharedTick

```js
useSharedTick(handler: (t: number)=>void, param)
```

### Handler

| Param | Type | Description |
|---|---|---|
|timestamp|`number`|current timestamp|


### Parameter

| Field | Type | Default | Requirement |Description |
|---|:---:|:---:|:---:|:---:|
| tick | `number` | `1000` | `No` | Running interval time |
| runOnTabVisible | `boolean` | `false` | `No` | when true will pause/start interval if `visibilitychange` event dispatched |

## License
The files included in this repository are licensed under the MIT license.