<template>
    <form @submit.prevent="onSubmit">
        <label for="new-todo-input"> What needs to be done? </label>
        <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model="label" />
        <button type="submit">Add</button>
    </form>
</template>
<script>
export default {
    methods: {
        onSubmit() {
            if(this.label == "") return
            this.$emit('todo-added', this.label)
            this.label = ""
        }
    },
    data() {
        return {
            label: this.plabel,
        }
    },
    props: {
        plabel: { required: true, type: String },
    },
};
</script>