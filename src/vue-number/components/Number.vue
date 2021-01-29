<template>
    <div >
        <span class="act" @click="action(false)">-</span>
        <input v-model="num" type="text" @blur="quantityBlur" @input="quantityChange" >
        <span class="act" @click="action(true)">+</span>
    </div>

</template>

<script>
export default {
    name: "Number",
    props: {
        quantity: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            num: "1"
        }
    },
    created() {
        this.num = this.quantity
    },
    watch: {
        num() {
            if (this.num > 999) {
                this.num = '999';
                this.$emit("update:quantity", '999')
            }
            if (this.num < 1) {
                this.num = "1";
                this.$emit("update:quantity", "1")
            }
        }
    },
    methods: {
        quantityChange($event) {
            let val = $event.target.value;
            val = val.replace(/[^\d]/g, "");
            this.num = val;
            this.$emit("update:quantity", val);
            this.$emit('qc');
        },
        quantityBlur() {
            this.num = Number(this.num).toString();
            this.$emit("update:quantity", this.num)
        },
        action(b) {
            if (!b) {
                this.num = (this.num - 1).toString();
                this.$emit("update:quantity", this.num);
            } else {
                this.num = (Number(this.num) + 1).toString();
                this.$emit("update:quantity", this.num);
            }
            this.$emit('qc');
        }
    }
}
</script>

<style scoped>
input {
    border: 0;
    outline: 0;
    width: 30px;
    text-align: center;
}

.act {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    border-radius: 50% !important;
    border: none;
    background: #f2f2f2;
    width: 24px;
    height: 24px;
    user-select:none;
    line-height: normal;
}


</style>