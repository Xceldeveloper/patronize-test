<template>
  <div class="bvn-verification-block">
    <p-input
      class="bvn-verification-block__bvn"
      v-model="bvn"
      label="Bank Verification Number (11-digits)"
    />

    <div class="why-we-need">
      <div class="why-we-need__header">
        <div class="why-we-need__header__1">
          <img
            class="why-we-need__header__1_image"
            src="/images/onboarding/lock.svg"
            alt=""
          />
          <p-text class="why-we-need__header__1__text"
            >Why we need your BVN
          </p-text>
        </div>

        <p-button @click="showInfo = !showInfo" class="why-we-need__header__btn"
          ><span v-if="!showInfo">show</span>
          <span v-else>Hide</span>
          <p-icon
            v-if="!showInfo"
            class="why-we-need__header__btn__icon"
            icon="mdi-chevron-down"
          />
          <p-icon
            v-else
            class="why-we-need__header__btn__icon"
            icon="mdi-chevron-up"
          />
        </p-button>
      </div>

      <div class="why-we-need__content" :class="genClass(showInfo).info">
        <div class="why-we-need__content__details">
          <p-text class="why-we-need__content__details__header"
            >We only need access to your:</p-text
          >
          <p-text class="why-we-need__content__details__item">
            <p-icon color="#56F2C3" size="17px" icon="mdi-check" /> Full
            Name</p-text
          >
          <p-text class="why-we-need__content__details__item">
            <p-icon color="#56F2C3" size="17px" icon="mdi-check" /> Phone
            Number</p-text
          >
          <p-text class="why-we-need__content__details__item">
            <p-icon color="#56F2C3" size="17px" icon="mdi-check" /> Date of
            Birth</p-text
          >
        </div>
        <p-text class="why-we-need__content__bottom">
          <img
            class="why-we-need__content__bottom__safe"
            src="/images/onboarding/safe.png"
            alt=""
          />

          <span>
            Your BVN does not give us access to your bank accounts or
            transactions</span
          ></p-text
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: false,
      bvn: this.value,
    };
  },
  methods: {
    genClass(val) {
      return {
        info: { "why-we-need__content--show": val },
      };
    },
  },
  watch: {
    bvn(val) {
      this.$emit("input", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.bvn-verification-block {
  padding: 30px 0px 5px 0px;
  border-bottom: 1px solid #e9eef4;

  &__bvn {
    width: 100%;
  }
}

.why-we-need {
  background-color: #e9eef4;
  border-radius: 5px;
  margin: 30px 0px;

  &__header {
    height: 62px;
    padding: 0px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__1 {
      display: flex;
      align-items: center;
      gap: 14px;

      &__text {
        color: #141737;
        font-size: 13px;
        font-weight: 500;
      }
    }

    &__btn {
      background-color: transparent;
      color: #5257f5;
      font-size: 12px;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 10px 0px;
      font-weight: 500;

      &__icon {
        color: #5257f5;
        font-size: 15px;
      }
    }
  }

  &__content {
    height: 0px;

    overflow: auto;
    padding: 0px 45px 0px 50px;

    &--show {
      height: auto;
      transition: ease-in 5s all;
    }

    &__details {
      padding-bottom: 15px;
      border-bottom: 1px solid #a5b4cb;

      &__header {
        color: #141737;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 4px;
        display: block;
      }

      &__item {
        color: #141737;
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 400;
        margin: 10px 0px;
        font-size: 14px;
      }
    }

    &__bottom {
      padding: 15px 0px;
      color: #141737;
      font-weight: 400;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;

      &__safe {
        height: 18px;
        width: auto;
      }
    }
  }
}

//smal devices
@media screen and (max-width: 767px) {
  .why-we-need {
    background-color: #e9eef4;
    border-radius: 5px;
    margin: 30px 0px;

    &__header {
      height: 62px;
      padding: 0px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__1 {
        display: flex;
        align-items: center;
        gap: 14px;

        &__text {
          color: #141737;
          font-size: 13px;
          font-weight: 500;
        }
      }

      &__btn {
        background-color: transparent;
        color: #5257f5;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 10px 0px;
        font-weight: 500;

        &__icon {
          color: #5257f5;
          font-size: 15px;
        }
      }
    }

    &__content {
      height: 0px;

      overflow: auto;
      padding: 0px 45px 0px 50px;

      &--show {
        height: auto;
        transition: ease-in 5s all;
      }

      &__details {
        padding-bottom: 15px;
        border-bottom: 1px solid #a5b4cb;

        &__header {
          color: #141737;
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 4px;
          display: block;
        }

        &__item {
          color: #141737;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 400;
          margin: 10px 0px;
          font-size: 14px;
        }
      }

      &__bottom {
        padding: 15px 0px;
        color: #141737;
        font-weight: 400;
        font-size: 14px;
        display: flex;
        align-items: unset;
        gap: 10px;

        &__safe {
          height: 18px;
          width: auto;
        }
      }
    }
  }
}
</style>