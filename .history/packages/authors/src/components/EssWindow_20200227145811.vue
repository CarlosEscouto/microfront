<template>
  <div class="ess window shadow-dp-3" :class="[theme]" :id="ID" v-show="!isMinimized">

    <header class="ess window-header" :id="`header-${ID}`" @dblclick="maximize">
      <div class="ess item start">
        <ess-float-button
          theme="light" size="small" style="margin: 0 .2rem"
          :id="`back-${ID}`">
          <i class="fas fa-chevron-left"></i>
        </ess-float-button>
        <ess-tooltip :target="`back-${ID}`" theme="light"> Voltar </ess-tooltip>

        <span> {{ title }} </span>
      </div>

      <div class="ess item end">
        <ess-float-button
          theme="light" size="small" style="margin: 0 .2rem"
          :id="`minimize-${ID}`" @click.native="minimize">
          <i class="far fa-window-minimize"></i>
        </ess-float-button>
        <ess-tooltip :target="`minimize-${ID}`" theme="light"> Minimizar Janela </ess-tooltip>

        <ess-float-button
          theme="light" size="small" style="margin: 0 .2rem"
          :id="`expand-${ID}`" @click.native="maximize">
          <i class="fas fa-expand"></i>
        </ess-float-button>
        <ess-tooltip :target="`expand-${ID}`" theme="light">
          {{ (!isMaximized) ? "Expandir janela" : "Reduzir janela" }}
        </ess-tooltip>

        <ess-float-button
        theme="light" size="small" style="margin: 0 .2rem"
        :id="`close-${ID}`">
          <i class="fas fa-times"></i>
        </ess-float-button>
        <ess-tooltip :target="`close-${ID}`" theme="light"> Fechar Janela </ess-tooltip>
      </div>

      <ess-menu :target="`header-${ID}`" theme="light" trigger="context-menu">
        <ess-list theme="light">
          <ess-list-item> Fechar janela </ess-list-item>
          <ess-list-item> Minimizar janela </ess-list-item>
          <ess-list-item @click.native="maximize">
            {{ (!isMaximized) ? "Expandir janela" : "Reduzir janela" }}
          </ess-list-item>
          <ess-separator theme="light" />
          <ess-list-item @click.native="pinOn('left')">
            Posicionar a esquerda </ess-list-item>
          <ess-list-item @click.native="pinOn('right')">
            Posicionar a direita </ess-list-item>
          <ess-list-item @click.native="pinOn('top-left')">
            Posicionar a esquerda superior </ess-list-item>
          <ess-list-item @click.native="pinOn('top-right')">
            Posicionar a direita superior </ess-list-item>
          <ess-list-item @click.native="pinOn('bottom-left')">
            Posicionar a esquerda inferior </ess-list-item>
          <ess-list-item @click.native="pinOn('bottom-right')">
            Posicionar a direita inferior </ess-list-item>
        </ess-list>
      </ess-menu>
    </header>

    <div class="ess container">
      <!-- Cursor X {{ cursorPosX }}, Cursor Y {{ cursorPosY }} -->
      <!-- <slot></slot> -->
    </div>

    <div class="ess resizer" :id="`resizer-${ID}`"></div>
  </div>
</template>

<script lang="ts">
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable lines-between-class-members */

import Vue from 'vue';
// import { Component, Prop } from 'vue-property-decorator';

// UTILS
// import hash from 'random-hash';
// import Window from '@/components/windows/Window';

// COMPONENTS

// import EssList from '@/components/EssList.vue';
// import EssMenu from '@/components/EssMenu.vue';
// import EssTooltip from '@/components/EssTooltip.vue';
// import EssListItem from '@/components/EssListItem.vue';
// import EssSeparator from '@/components/EssSeparator.vue';
// import EssFloatButton from '@/components/buttons/EssFloatButton.vue';

@Component({
  name: 'EssWindow',
  components: {
  },
})
export default {
  @Prop()
  id!: string;

  @Prop({ default: 'light' })
  theme!: string;

  @Prop({ default: 640 })
  width!: number;

  @Prop({ default: 480 })
  height!: number;

  @Prop({ default: '' })
  title!: string;

  data() {
    return {
      window: null;
      isMinimized: false;
      isMaximized: false;
    }
  },

  methods: {
    ID() {
      return (!this.id)
        ? hash()
        : this.id;
    },

    mounted() {
      this.$nextTick(() => {
        this.window = new Window(this.ID);
        // this.window = new Window(this.ID, 300, 600, 300, 600);
        this.window.registryResizeListener();
        this.window.registryPlacementListener();
      });
    },

    beforeDestroy() {
      this.window.removeResizeListener();
      this.window.registryPlacementListener();
    },

    minimize() {
      this.isMinimized = !this.isMinimized;
      // this.window.minimize();
    },

    maximize() {
      this.isMaximized = !this.isMaximized;
      this.window.maximize();
    },

    pinOn(corner) {
      // this.isMaximized = !this.isMaximized;
      this.window.pinOn(corner);
    },
  },
  
}
</script>
