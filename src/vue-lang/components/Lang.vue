<template>
  <div
    :style="{ height: height + 'px', lineHeight: height + 'px' }"
    class="lang-room"
  >
    <div>{{ name }}<span class="arrow"></span></div>
    <div class="lang-box" :style="styleObject">
      <div
        v-for="(lang, key) of langList"
        :key="key"
        class="lang-item"
        :class="key === currentLang ? 'lang-active' : ''"
        @click="toggleLang(key)"
      >
        {{ lang }}  <svg class="icon" aria-hidden="true" v-if="key === currentLang">
                     <use xlink:href="#icon-gou"></use>
                    </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Lang",
    props: {
        height: {
            type: Number,
            default() {
                return 35;
            }
        },
        currentLang: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        list: {
            type: Object,
            default() {
                return {
                    "en": "English",
                    "zh": "简体中文"
                }
            }
        },
        hover: {
            type: String,
            default() {
                return "#ff7500";
            }
        }
    },
    computed: {
        langList() {
            // for (let key of Object.keys(this.list)) {
            //     if (key === this.currentLang) {
            //         obj[key] = this.list[key]
            //     }
            // }
            return this.list;
        },
        styleObject() {
            return {       
                "--color-hover": this.hover,
            }
        }
    },
    methods: {
        toggleLang(key) {
            if(key === this.currentLang) {
                return;
            }
            let pathname = location.pathname;
            const list = Object.keys(this.list);
            const isLang = location.pathname.match(/\/([a-z]+)/) && location.pathname.match(/\/([a-z]+)/)[1];
            if (list.includes(isLang)) {
                pathname = location.pathname.match(/\/([a-z]+)(.*)*/)[2] || "";
            }           
            let path = "/" + key + pathname + location.search;
            if (key === 'en') {
              path =  pathname + location.search;
            }
            location.href = location.origin + path;
        }
    }
}
</script>

<style scoped>
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.lang-room {
  display: inline-block;
  position: relative;
  padding: 0 5px 0 5px;
  width: auto;
  cursor: pointer;
}

.lang-room:hover .lang-box {
  display: block;
}

.lang-box {
  position: absolute;
  display: none;
  width: 180px;
  box-shadow: 0 8px 16px #333;
  z-index: 100;
  background: #fff;
}

.lang-item {
  padding: 8px 0 8px 12px;
  cursor: pointer;
}

.lang-item:hover {
  color: var(--color-hover);
}

.lang-active {
    cursor: not-allowed;
    color: #4f5959 !important;
}



.arrow {
  display: inline-block;
  vertical-align: middle;
  margin-top: -1px;
  margin-left: 6px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #4f5959;
}


</style>