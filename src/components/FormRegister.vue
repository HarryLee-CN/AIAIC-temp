<script>
import {defineComponent} from 'vue'
import areaJSON from '@/utils/areaJSON'
import countryCode from '@/utils/countryCode'
import {activityGnsmsCheckCode, activityGnsmsSendSmsCode} from "../api/api";
import {timeCountdown} from "../utils/common";
import {useBaseStore} from "../store/base";

export default defineComponent({
  name: "FormRegister",
  props: ["query"],
  data() {
    return {
      isShowAreaPicker: false,
      areaSelectedLabel: ['请选择省份', '请选择城市'],
      areaSelectedValue: [],

      isShowCountryCodePicker: false,
      btnGetCodeText: "获取验证码",
      btnGetCodeDisabled: true,
      countryCode: "86",
      phone: "",
      code: "",
      isLoading: false
    }
  },
  computed: {
    btnSignDisabled() {
      return this.areaSelectedLabel[0] === "请选择省份" || this.phone === "" || this.code === ""
    },
    labelColumnsArea() {
      const provinces = areaJSON.list.map((province, k) => {
        return province.label
      })
      const citiesOfFirstProvince = areaJSON.list[0].children.map((city, k) => {
        return city.label
      })
      return [provinces, citiesOfFirstProvince]
    },
    labelColumnData() {
      return areaJSON.list.map((province, k) => {
        return province.children.map((city, index) => {
          return city.label
        })
      })
    },
    labelColumnsCountryCode() {
      return [countryCode.list.map((v, k) => {
        return `${v.value}`
      })]
    }
  },
  watch: {
    phone: {
      handler(phone) {
        this.btnGetCodeDisabled = !(phone && !this.btnGetCodeText.includes("重新发送"));
      },
      immediate: true
    }
  },
  methods: {
    handleAreaPickerClick() {
      console.log(areaJSON)
      console.log('labelColumnsArea', this.labelColumnsArea)
      console.log('labelColumnData', this.labelColumnData)
      this.isShowAreaPicker = true
    },
    handleAreaChange(e) {
      console.log('handleAreaChange', e)
      const {
        columnIndex,
        value,
        values, // values为当前变化列的数组内容
        index,
        // 微信小程序无法将picker实例传出来，只能通过ref操作
        picker = this.$refs.uPickerArea
      } = e
      // 当第一列值发生变化时，变化第二列(后一列)对应的选项
      if (columnIndex === 0) {
        // picker为选择器this实例，变化第二列对应的选项
        picker.setColumnValues(1, this.labelColumnData[index])
      }
    },
    // 回调参数为包含columnIndex、value、values
    confirmArea(e) {
      console.log('confirmArea', e)
      this.areaSelectedLabel = e.value
      if (!this.areaSelectedLabel[1]) {
        this.areaSelectedLabel[1] = this.areaSelectedLabel[0]
      }
      console.log(this.areaSelectedLabel)
      this.isShowAreaPicker = false
    },
    cancelArea() {
      this.isShowAreaPicker = false
    },

    handleCountryCodePickerClick() {
      console.log(countryCode)
      this.isShowCountryCodePicker = true
    },
    confirmCountryCode(e) {
      console.log('confirmCountryCode', e)
      this.countryCode = e.value[0]
      this.isShowCountryCodePicker = false
    },
    cancelCountryCode() {
      this.isShowCountryCodePicker = false
    },
    handleCountryCodeChange() {},

    async handleGetCode() {
      if (!this.phone) return
      if (this.isLoading) return
      try {
        uni.showLoading()
        this.isLoading = true
        const res = await activityGnsmsSendSmsCode({
          mobile: this.phone,
          country_code: this.countryCode
        })
        uni.hideLoading()
        this.isLoading = false
        console.log(res)
        uni.showToast({
          title: "验证码发送成功",
          icon: "none"
        })
        this.btnGetCodeDisabled = true
        timeCountdown(60, (time) => {
          this.btnGetCodeText = `(${time})重新发送`;
          if (time === 0) {
            this.btnGetCodeText = "获取验证码";
            this.btnGetCodeDisabled = false;
          }
        });
      } catch (e) {
        uni.hideLoading()
        this.isLoading = false
        if (e.data.code === "40010") {
          /** 重复报名的用户 **/
          const {city, content, nick, province} = e.data.result
          useBaseStore().updateRegisterInfo({
            province,
            city,
            nick,
            content,
          })
          uni.navigateTo({
            url: "/pages/poster/index?__s=" + (this.query.__s || ""),
          });
        } else {
          uni.showToast({
            title: e.data.message.text || `网络错误，请稍后重试(${e.errMsg})`,
            icon: "none"
          })
        }
      }
    },
    async handleSignUp() {
      if (this.areaSelectedLabel[0] === "请选择省份") return
      if (this.phone === "") return;
      if (this.code === "") return;
      try {
        uni.showLoading()
        const res = await activityGnsmsCheckCode({
          mobile: this.phone,
          country_code: this.countryCode,
          sms_code: this.code
        })
        uni.hideLoading()
        const token = res.data.result.token
        useBaseStore().updateRegisterInfo({
          mobile: this.phone,
          country_code: this.countryCode,
          token,
          province: this.areaSelectedLabel[0],
          city: this.areaSelectedLabel[1],
        })
        uni.navigateTo({
          url: "/pages/message/index?__s=" + (this.query.__s || ""),
        });
      } catch (e) {
        uni.hideLoading()
        uni.showToast({
          title: e.data.message.text || `网络错误，请稍后重试(${e.errMsg})`,
          icon: "none"
        })
      }
    }
  }
})
</script>

<template>
  <div class="form-register">
    <div class="cell" @click="handleAreaPickerClick">
      <div class="province">
        <span>{{ areaSelectedLabel[0] }}</span>
        <img src="@/static/img/icon-arrow-down.png" alt="icon">
      </div>
      <div class="divider"/>
      <div class="city">
        <span>{{ areaSelectedLabel[1] }}</span>
        <img src="@/static/img/icon-arrow-down.png" alt="icon">
      </div>
    </div>
    <div class="cell" style="margin-top: 22px">
      <div class="country-code" @click="handleCountryCodePickerClick">
        <span>+{{ countryCode }}</span>
        <img src="@/static/img/icon-arrow-down.png" alt="icon">
      </div>
      <div class="divider"/>
      <div class="phone">
        <input class="phone-input" type="tel" placeholder="每个手机号仅限领取一次" v-model="phone">
      </div>
    </div>
    <div class="get-code-container" style="margin-top: 22px">
      <div class="cell">
        <input class="code-input" type="number" placeholder="请输入验证码" v-model="code" maxlength="4">
      </div>
      <div class="btn-get-code">
        <div v-if="btnGetCodeDisabled" class="disabled">
          {{btnGetCodeText}}
        </div>
        <img v-else class="able" src="@/static/img/btn-get-code.png" alt="btn-get-code" @click="handleGetCode">
      </div>
    </div>
    <div class="btn-sign">
      <img v-if="btnSignDisabled" class="disabled" src="@/static/img/btn-sign-disabled.png" alt="btn-sign">
      <img v-else class="able" src="@/static/img/btn-sign.png" alt="btn-sign" @click="handleSignUp">
    </div>

    <!-- 地区选择器 -->
    <u-picker
      :show="isShowAreaPicker"
      ref="uPickerArea"
      :columns="labelColumnsArea"
      @confirm="confirmArea"
      @cancel="cancelArea"
      @change="handleAreaChange"
    />

    <!-- 国家码选择器 -->
    <u-picker
      :show="isShowCountryCodePicker"
      ref="uPickerCountryCode"
      :columns="labelColumnsCountryCode"
      @confirm="confirmCountryCode"
      @cancel="cancelCountryCode"
      @change="handleCountryCodeChange"
    />
  </div>
</template>

<style scoped lang="scss">
.form-register {
  width: 330px;
  color: white;
  font-family: Alibaba PuHuiTi Regular;

  .cell {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px rgb(186, 60, 93) solid;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    padding: 8px 0;

    font-weight: 400;
    font-size: 14px;

    .province {
      width: 125px;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 17px 0 10px;

      span {
        //单行
        word-break: break-all;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }

      img {
        width: 12px;
        height: 6px;
      }
    }

    .divider {
      width: 1px;
      height: 24px;
      background-color: rgba(255, 255, 255, 60%);
      flex-shrink: 0;
    }

    .city {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 17px 0 10px;

      img {
        width: 12px;
        height: 6px;
      }
    }


    .country-code {
      width: 125px;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 17px 0 10px;

      span {
        //单行
        word-break: break-all;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }

      img {
        width: 12px;
        height: 6px;
      }
    }

    .phone-input {
      width: 204px;
      padding: 0 17px 0 10px;
      caret-color: rgba(255, 255, 255, 0.6);

      .input-placeholder {
        font-weight: 400;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
    }

    .code-input {
      width: 100%;
      padding: 0 17px 0 10px;
      caret-color: rgba(255, 255, 255, 0.6);

      .input-placeholder {
        font-weight: 400;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }

  .get-code-container {
    display: flex;

    .btn-get-code {
      margin-top: -4px;
      margin-left: 10px;
      flex-shrink: 0;
      display: flex;

      .able {
        width: 118px;
        height: 48px;
        transform-origin: center center;
        transition: all 100ms ease-in-out;

        &:active {
          transform: scale(95%, 95%);
        }
      }

      .disabled {
        width: 118px;
        height: 48px;
        background: url("@/static/img/btn-get-code-disabled.png") center center no-repeat;
        background-size: contain;

        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Alibaba PuHuiTi Regular;
        font-size: 14px;
        line-height: 14px;
        font-weight: 700;
        text-shadow: 0 2px 0 black;
      }
    }
  }

  .btn-sign {
    margin-left: -4px;
    margin-top: 22px;

    .able {
      width: 338px;
      height: 48px;
      transform-origin: center center;
      transition: all 100ms ease-in-out;

      &:active {
        transform: scale(95%, 95%);
      }
    }

    .disabled {
      width: 338px;
      height: 48px;
    }
  }

}
</style>
