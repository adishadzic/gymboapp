<template>
  <section>
    <h1>{{level}} and {{goal}}</h1>
  </section>
</template>

<script>
export default {
name: 'view',
data(){
    return {
        level: null,
        goal: null,
    }
},
created(){
    this.getRouterParams()
},
methods: {
    getRouterParams(){
        const params = this.$route.params
        this.level = params.level,
        this.goal = params.goal
    }
}
}
</script>

<style></style>
