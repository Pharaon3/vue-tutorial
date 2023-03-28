<template>
    <div>
        <input type="checkbox" :id="id" :checked="isDone" />
        <label :for="id">{{ label }}</label>
    </div>
</template>
<script>
export default {
    props: {
        label: { required: true, type: String },
        done: { default: false, type: Boolean },
        id: { required: true, type: String },
    },
    data() {
        return {
            isDone: this.done,
        }
    }
};
</script>
