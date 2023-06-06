<script lang="ts" setup>
import { onMounted, onUpdated, ref } from 'vue'
import { Transformer } from 'markmap-lib'
import { Markmap } from 'markmap-view/dist/index.esm'

const props = defineProps({
  initValue: {
    type: String,
    default: '',
  },
  // showSystem: {
  //   type: Boolean,
  //   default: false,
  // },
  // shareInfo: {
  //   type: Object,
  //   required: true,
  // },
})
const transformer = new Transformer()
// const initValue = `# markmap

// - beautiful
// - useful
// - easy
// - interactive
// `
const svgRef = ref()
const value = ref(props.initValue)
let mm: any = null

const update = () => {
  const { root } = transformer.transform(value.value)
  mm.setData(root)
  mm.fit()
}

onMounted(() => {
  mm = Markmap.create(svgRef.value)
  update()
})
onUpdated(update)

defineExpose({
  svgRef,
  value,
})

// export default {
//   name: 'App',
//   setup() {
//     const svgRef = ref()
//     const value = ref(initValue)
//     let mm: any = null

//     const update = () => {
//       const { root } = transformer.transform(value.value)
//       mm.setData(root)
//       mm.fit()
//     }

//     onMounted(() => {
//       mm = Markmap.create(svgRef.value)
//       update()
//     })
//     onUpdated(update)
//     return {
//       svgRef,
//       value,
//     }
//   },
// }
</script>

<template>
  <template v-if="props.initValue">
    <div class="flex">
      <div class="markmap-left">
        <textarea v-model="value" class="w-full h-full border border-gray-400" />
      </div>
      <svg ref="svgRef" class="markmap-right" />
    </div>
  </template>
</template>

<style lang="less" scoped>
.markmap-left {
  width: 30%;
  height: 80vh;
}

.markmap-right {
  height: 80vh;
  width: 68%;
  margin-left: 2%;

}
</style>
