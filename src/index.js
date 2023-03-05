import messages_en from "./translations/en.json";
import MauritaniaCardReport from "./reports/MauritaniaCardReport";


const DEFAULT_CONFIG = {
  "translations": [
    { key: "en", messages: messages_en },
  ],
  "reports": [
    {
      key: "beneficiary_card_mauritania",
      component: MauritaniaCardReport,
      isValid: () => true,
      getParams: (values) => ({
        hflocation: values.hflocation?.code ? values.hflocation.code : 0
      })
    },
  ],
}

export const MauritaniaModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}