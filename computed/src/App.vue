<template>
    <div>
        <h1>{{message}}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                firstName: 'Sherwin',
                lastName: 'Wu'
            }
        },
        computed: {
            fullName: {
                get() {
                    return this.firstName + ' ' + this.lastName;
                },
                set(newValue) {
                    [this.firstName, this.lastName] = newValue.split(' ')
                }
            }
        }
    }
</script>

<style scoped>
</style>
