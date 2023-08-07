<template>
  <div class="controller">

    <IconPark :icon="GoStart" size="28" theme="filled" class=" pointer" @click="prev" />
    <IconPark :icon="isPause ? Play : PauseOne" size="40" theme="filled" class=" pointer" @click="togglePlay" />
    <IconPark :icon="GoEnd" size="28" class="pointer" @click="next" />
  </div>
</template>

<script setup lang="ts">
import { Play, PauseOne, LoopOnce, ShuffleOne, PlayOnce, GoEnd, GoStart, VolumeSmall } from "@icon-park/vue-next";
import { toRefs } from "vue";
import IconPark from "@/components/IconPark.vue";

import { usePlayerStore } from "@/stores/player";


const { toggleLoop, loopType, next, prev, isPause, togglePlay } = toRefs(usePlayerStore())

</script>


<style lang="scss">
.controller {

  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  position: relative;
  top: 5px;
}

.i-icon {
  transition: color .1s ease-in;

  &:hover {
    cursor: pointer;
    color: var(--brandColor);


  }

}
</style>
