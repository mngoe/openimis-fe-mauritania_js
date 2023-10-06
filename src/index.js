import messages_en from "./translations/en.json";
import MauritaniaCardReport from "./reports/MauritaniaCardReport";
import MauritaniaInvoiceReport from "./reports/MauritaniaInvoiceReport";


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
    {
      key: "invoice_mauritania",
      component: MauritaniaInvoiceReport,
      isValid: () => true,
      getParams: (values) => ({
        locationId: decodeId(values.location.id),
        hflocation: values.hflocation?.code ? values.hflocation.code : 0,
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
      })
    },
  ],
}

export const MauritaniaModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}