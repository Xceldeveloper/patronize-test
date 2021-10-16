<template>
  <div class="stepper">
    <div
      @click="clickedTab(index)"
      v-for="(tab, index) in tabs"
      :key="index"
      :class="genClasses(tab).stepperStep"
      class="stepper__step"
    >
      <p-button class="step__btn" :class="genClasses(tab).stepperBtn">
        <p-icon
          v-if="tab.completed"
          class="step__btn step__btn--completed__marker"
          icon="mdi-check"
        />
        <span v-else>{{ tab.step }}</span>
      </p-button>
      <p-text class="step__text" :class="genClasses(tab).stepperText">{{
        tab.header
      }}</p-text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editable: { type: Boolean, default: false },
    value: { default: 0 },
    completed: { default: null },
    canceled: { default: null },
    disabled: { default: null },
  },
  data() {
    return {
      tabs: [
        {
          step: "1",
          header: "Verify Account",
          active: false,
          completed: false,
          disabled: false,
        },
        {
          step: "2",
          header: "Social Handles",
          active: false,
          completed: false,
          disabled: false,
        },
        {
          step: "3",
          header: "Business Categories",
          active: false,
          completed: false,
          disabled: false,
        },
      ],
    };
  },
  mounted() {
    this.tabs[this.value].active = true;
  },
  methods: {
    clickedTab(tabIndex) {
      if (Array.isArray(this.disabldied)) {
        if (this.disabled.includes(tabIndex)) {
          //tab is disabled
          this.tabs[tabIndex].disabled = true;
          return;
        }
      } else {
        //if it is not array
        if (this.disabled === tabIndex) {
          this.tabs[this.disabled].disabled = true;
          return;
        }
      }

      if (this.editable) {
        this.tabs[tabIndex].active = true;
        this.tabs.map((tab, index) => {
          if (index !== tabIndex) {
            this.tabs[index].active = false;
          }
        });

        this.$emit("input", tabIndex);
      }
    },
    genClasses(val) {
      return {
        stepperStep: {
          "stepper__step--selected": val.active,
          "stepper__step--completed": val.completed,
          "stepper__step--disabled": val.disabled,
        },
        stepperBtn: {
          "step__btn--selected": val.active,
          "step__btn--completed": val.completed,
          "step__btn--disabled": val.disabled,
        },
        stepperText: {
          "step__text--selected": val.active,
          "step__text-completed": val.completed,
          "step__text-disabled": val.disabled,
        },
      };
    },
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.tabs[val].active = true;
        this.$emit("input", val);
      },
    },
    completed: {
      immediate: true,
      handler(val) {
        if (val != null) {
          this.tabs[val].completed = true;
        }
      },
    },
    canceled: {
      immediate: true,
      handler(val) {
        if (val != null) {
          this.tabs[val].completed = false;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper {
  display: flex;
  gap: 40px;
  padding: 15px 0px 20px 0px;
  border-bottom: 1px solid #e9eef4;

  &__step {
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 10px;

    &--selected {
      cursor: default;
    }
    &--completed {
      cursor: pointer;
    }
    &--disabled {
      cursor: not-allowed;
    }

    .step__btn {
      height: 31px;
      width: 31px;
      padding: 0px;
      border-radius: 3.1px;
      font-size: 13.64px;
      font-weight: normal;
      color: #a5b4cb;
      background-color: #e4e9ef;
      cursor: pointer;
      &--selected {
        background-color: #006aff;
        color: #fff;
        cursor: default;
      }
      &--completed {
        color: #a5b4cb;
        cursor: pointer;
        background-color: #e4e9ef;

        &__marker {
          visibility: visible;
          font-size: 16px;
          color: #006aff;
        }
      }
      &--disabled {
        cursor: not-allowed;
      }
    }
    .step__text {
      font-size: 18px;
      color: #a5b4cb;
      &--selected {
        color: #141737;
      }

      &--completed {
        color: #a5b4cb;
      }
      &--disabled {
        cursor: not-allowed;
      }
    }
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .stepper {
    display: flex;
    gap: 40px;
    padding: 15px 0px 20px 0px;
    border-bottom: 1px solid #e9eef4;

    &__step {
      display: flex;
      cursor: pointer;
      align-items: center;
      gap: 10px;
      display: none;

      &--selected {
        cursor: default;
        display: block;
      }
      &--completed {
        cursor: pointer;
        display: none;
      }
      &--disabled {
        cursor: not-allowed;
      }

      .step__btn {
        height: 31px;
        width: 31px;
        padding: 0px;
        border-radius: 3.1px;
        font-size: 13.64px;
        font-weight: normal;
        color: #a5b4cb;
        background-color: #e4e9ef;
        cursor: pointer;
        &--selected {
          background-color: #006aff;
          color: #fff;
          cursor: default;
        }
        &--completed {
          color: #a5b4cb;
          cursor: pointer;
          background-color: #e4e9ef;

          &__marker {
            visibility: visible;
            font-size: 16px;
            color: #006aff;
          }
        }
        &--disabled {
          cursor: not-allowed;
        }
      }
      .step__text {
        display: none;
      }
    }
  }
}
</style>