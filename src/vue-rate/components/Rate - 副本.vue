<template>
    <div>
        <div v-for="(star, index) of nums" :key="star" style="display: inline-block; cursor: pointer;" @click="click(index)"
             @mouseenter="enter(index)"  @mouseleave="out(index)">
            <svg aria-hidden="true" class="icon">
                <use :xlink:href="starList[index] ? '#icon-star' : '#icon-star-o'"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rate",
    data() {
        return {
            starList: [],
        }
    },
    props: {
        nums: {
            default: 5,
            type: Number,
        },
        score: {
            default: 5,
            type: Number,
            require: true,
        },
        lock: {
            default: false,
            type: Boolean
        }
    },
    computed: {},
    created() {
        this.starList = new Array(this.nums).fill(false);
        for (let i = 0 ;i < this.starList.length; i++) {
            if (i < this.score) {
                this.$set(this.starList, i, true)
            }
        }
    },
    methods: {
        enter(index) {
            if (this.lock) return
            this.starList = new Array(this.nums).fill(false);
            for (let i = 0; i <= index; i++) {
                this.$set(this.starList, i, true)
            }
        },
        click(index) {
            if (this.lock) return
            this.$emit('update:score', index + 1)
        },
        out() {
            if (this.lock) return
            this.starList = new Array(this.nums).fill(false);
            for (let i = 0 ;i < this.starList.length; i++) {
                if (i < this.score) {
                    this.$set(this.starList, i, true)
                }
            }
        }
    }
}
</script>

<style scoped>
.icon {
    width: 1.5em;
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: black;
}


</style>