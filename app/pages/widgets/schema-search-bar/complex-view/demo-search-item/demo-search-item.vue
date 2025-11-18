<template>
    <el-input
     v-model="dtoValue"
     v-bind="schema.option"
     placeholder="demodemo"
     class="input"></el-input>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const { schemaKey, schema } = defineProps({
    schemaKey: String,
    schema: Object
});

const emit = defineEmits(['loaded']);

const dtoValue = ref();
const getValue = () => {
    let res = {};
    if (dtoValue.value !== undefined) {
        res[`${schemaKey}`] = dtoValue.value;
    }
    return res;
}

const reset = () => {
    dtoValue.value = schema?.option?.default;
}

onMounted(() => {
    reset();
    emit('loaded');
})

defineExpose({
    getValue,
    reset
})
</script>
<style lang="less" scoped></style>