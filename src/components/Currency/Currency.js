import React, { useEffect, useState } from "react";
import "./Currency.css";

// const currencies = {
//   ADA: { code: "ADA", value: 2.609413 },
//   AED: { code: "AED", value: 3.673104 },
//   AFN: { code: "AFN", value: 90.500127 },
//   ALL: { code: "ALL", value: 108.250188 },
//   AMD: { code: "AMD", value: 396.62057 },
//   ANG: { code: "ANG", value: 1.801582 },
//   AOA: { code: "AOA", value: 503.73556 },
//   ARS: { code: "ARS", value: 189.119038 },
//   AUD: { code: "AUD", value: 1.451866 },
//   AVAX: { code: "AVAX", value: 0.050972 },
//   AWG: { code: "AWG", value: 1.800002 },
//   AZN: { code: "AZN", value: 1.700002 },
//   BAM: { code: "BAM", value: 1.816001 },
//   BBD: { code: "BBD", value: 2.018388 },
//   BDT: { code: "BDT", value: 106.674529 },
//   BGN: { code: "BGN", value: 1.823503 },
//   BHD: { code: "BHD", value: 0.377046 },
//   BIF: { code: "BIF", value: 2068.00356 },
//   BMD: { code: "BMD", value: 1.000002 },
//   BNB: { code: "BNB", value: 0.00307 },
//   BND: { code: "BND", value: 1.324422 },
//   BOB: { code: "BOB", value: 6.907622 },
//   BRL: { code: "BRL", value: 5.147205 },
//   BSD: { code: "BSD", value: 0.99963 },
//   BTC: { code: "BTC", value: 4.4e-5 },
//   BTN: { code: "BTN", value: 82.663108 },
//   BWP: { code: "BWP", value: 12.965721 },
//   BYN: { code: "BYN", value: 2.523217 },
//   BYR: { code: "BYR", value: 19600 },
//   BZD: { code: "BZD", value: 2.015046 },
//   CAD: { code: "CAD", value: 1.344352 },
//   CDF: { code: "CDF", value: 2045.003644 },
//   CHF: { code: "CHF", value: 0.927922 },
//   CLF: { code: "CLF", value: 0.029152 },
//   CLP: { code: "CLP", value: 804.401163 },
//   CNY: { code: "CNY", value: 6.795013 },
//   COP: { code: "COP", value: 4741.078019 },
//   CRC: { code: "CRC", value: 566.862517 },
//   CUC: { code: "CUC", value: 1.004955 },
//   CUP: { code: "CUP", value: 23.991673 },
//   CVE: { code: "CVE", value: 103.300204 },
//   CZK: { code: "CZK", value: 22.247524 },
//   DJF: { code: "DJF", value: 177.720266 },
//   DKK: { code: "DKK", value: 6.93621 },
//   DOP: { code: "DOP", value: 56.450088 },
//   DOT: { code: "DOT", value: 0.15339 },
//   DZD: { code: "DZD", value: 136.367234 },
//   EGP: { code: "EGP", value: 30.193431 },
//   ERN: { code: "ERN", value: 15.000029 },
//   ETB: { code: "ETB", value: 53.520084 },
//   ETH: { code: "ETH", value: 0.000617 },
//   EUR: { code: "EUR", value: 0.932001 },
//   FJD: { code: "FJD", value: 2.188753 },
//   FKP: { code: "FKP", value: 0.831481 },
//   GBP: { code: "GBP", value: 0.831541 },
//   GEL: { code: "GEL", value: 2.640005 },
//   GGP: { code: "GGP", value: 0.831481 },
//   GHS: { code: "GHS", value: 12.300023 },
//   GIP: { code: "GIP", value: 0.831481 },
//   GMD: { code: "GMD", value: 61.000075 },
//   GNF: { code: "GNF", value: 8815.0122 },
//   GTQ: { code: "GTQ", value: 7.84738 },
//   GYD: { code: "GYD", value: 210.931853 },
//   HKD: { code: "HKD", value: 7.846899 },
//   HNL: { code: "HNL", value: 24.620041 },
//   HTG: { code: "HTG", value: 150.188748 },
//   HUF: { code: "HUF", value: 367.935727 },
//   IDR: { code: "IDR", value: 15207.020158 },
//   ILS: { code: "ILS", value: 3.474761 },
//   IMP: { code: "IMP", value: 0.831481 },
//   INR: { code: "INR", value: 82.755395 },
//   IQD: { code: "IQD", value: 1460.002605 },
//   IRR: { code: "IRR", value: 42225.042514 },
//   ISK: { code: "ISK", value: 142.520269 },
//   JEP: { code: "JEP", value: 0.83148 },
//   JMD: { code: "JMD", value: 153.921245 },
//   JOD: { code: "JOD", value: 0.709401 },
//   JPY: { code: "JPY", value: 132.626755 },
//   KES: { code: "KES", value: 124.900135 },
//   KGS: { code: "KGS", value: 86.25011 },
//   KHR: { code: "KHR", value: 4100.005851 },
//   KMF: { code: "KMF", value: 459.150876 },
//   KPW: { code: "KPW", value: 899.998467 },
//   KRW: { code: "KRW", value: 1261.557188 },
//   KWD: { code: "KWD", value: 0.30575 },
//   KYD: { code: "KYD", value: 0.833056 },
//   KZT: { code: "KZT", value: 457.242894 },
//   LAK: { code: "LAK", value: 16921.029204 },
//   LBP: { code: "LBP", value: 15453.995291 },
//   LKR: { code: "LKR", value: 365.123358 },
//   LRD: { code: "LRD", value: 157.100231 },
//   LSL: { code: "LSL", value: 17.050022 },
//   LTC: { code: "LTC", value: 0.010372 },
//   LTL: { code: "LTL", value: 2.95274 },
//   LVL: { code: "LVL", value: 0.60489 },
//   LYD: { code: "LYD", value: 4.780008 },
//   MAD: { code: "MAD", value: 10.272511 },
//   MATIC: { code: "MATIC", value: 0.838957 },
//   MDL: { code: "MDL", value: 18.748758 },
//   MGA: { code: "MGA", value: 4295.008124 },
//   MKD: { code: "MKD", value: 57.441228 },
//   MMK: { code: "MMK", value: 2099.2438 },
//   MNT: { code: "MNT", value: 3503.956703 },
//   MOP: { code: "MOP", value: 8.079403 },
//   MRO: { code: "MRO", value: 356.999828 },
//   MUR: { code: "MUR", value: 45.350048 },
//   MVR: { code: "MVR", value: 15.355025 },
//   MWK: { code: "MWK", value: 1023.001277 },
//   MXN: { code: "MXN", value: 19.17152 },
//   MYR: { code: "MYR", value: 4.265006 },
//   MZN: { code: "MZN", value: 63.830077 },
//   NAD: { code: "NAD", value: 17.05003 },
//   NGN: { code: "NGN", value: 459.700544 },
//   NIO: { code: "NIO", value: 36.400045 },
//   NOK: { code: "NOK", value: 10.340561 },
//   NPR: { code: "NPR", value: 132.258384 },
//   NZD: { code: "NZD", value: 1.585278 },
//   OMR: { code: "OMR", value: 0.384964 },
//   PAB: { code: "PAB", value: 0.99963 },
//   PEN: { code: "PEN", value: 3.894255 },
//   PGK: { code: "PGK", value: 3.520006 },
//   PHP: { code: "PHP", value: 54.840099 },
//   PKR: { code: "PKR", value: 275.175299 },
//   PLN: { code: "PLN", value: 4.421157 },
//   PYG: { code: "PYG", value: 7322.572624 },
//   QAR: { code: "QAR", value: 3.641004 },
//   RON: { code: "RON", value: 4.564408 },
//   RSD: { code: "RSD", value: 109.415124 },
//   RUB: { code: "RUB", value: 71.510096 },
//   RWF: { code: "RWF", value: 1092.001537 },
//   SAR: { code: "SAR", value: 3.751586 },
//   SBD: { code: "SBD", value: 8.231026 },
//   SCR: { code: "SCR", value: 13.245412 },
//   SDG: { code: "SDG", value: 585.001104 },
//   SEK: { code: "SEK", value: 10.615853 },
//   SGD: { code: "SGD", value: 1.327702 },
//   SHP: { code: "SHP", value: 1.377402 },
//   SLL: { code: "SLL", value: 19595.035484 },
//   SOL: { code: "SOL", value: 0.043962 },
//   SOS: { code: "SOS", value: 568.500642 },
//   SRD: { code: "SRD", value: 32.307533 },
//   STD: { code: "STD", value: 20697.981008 },
//   SVC: { code: "SVC", value: 8.746652 },
//   SYP: { code: "SYP", value: 2512.535203 },
//   SZL: { code: "SZL", value: 17.050024 },
//   THB: { code: "THB", value: 33.76004 },
//   TJS: { code: "TJS", value: 10.296396 },
//   TMT: { code: "TMT", value: 3.500004 },
//   TND: { code: "TND", value: 3.101005 },
//   TOP: { code: "TOP", value: 2.334103 },
//   TRY: { code: "TRY", value: 18.835686 },
//   TTD: { code: "TTD", value: 6.784874 },
//   TWD: { code: "TWD", value: 30.013333 },
//   TZS: { code: "TZS", value: 2332.00333 },
//   UAH: { code: "UAH", value: 36.739203 },
//   UGX: { code: "UGX", value: 3673.746357 },
//   USD: { code: "USD", value: 1 },
//   UYU: { code: "UYU", value: 38.572025 },
//   UZS: { code: "UZS", value: 11345.022689 },
//   VEF: { code: "VEF", value: 2311980.08009 },
//   VND: { code: "VND", value: 23482.531796 },
//   VUV: { code: "VUV", value: 117.481794 },
//   WST: { code: "WST", value: 2.697562 },
//   XAF: { code: "XAF", value: 609.060346 },
//   XAG: { code: "XAG", value: 0.044886 },
//   XAU: { code: "XAU", value: 0.000535 },
//   XCD: { code: "XCD", value: 2.702553 },
//   XDR: { code: "XDR", value: 0.738534 },
//   XOF: { code: "XOF", value: 607.500684 },
//   XPF: { code: "XPF", value: 111.500184 },
//   XRP: { code: "XRP", value: 2.537267 },
//   YER: { code: "YER", value: 250.375337 },
//   ZAR: { code: "ZAR", value: 17.669533 },
//   ZMK: { code: "ZMK", value: 9001.2 },
//   ZMW: { code: "ZMW", value: 19.118408 },
//   ZWL: { code: "ZWL", value: 321.999592 },
// };


const currencyData = {
  base: "USD",
  results: {
    AED: 3.67314,
    AFN: 89.75012,
    ALL: 108.86646,
    AMD: 396.53524,
    ANG: 1.7868,
    AOA: 506.91624,
    ARS: 190.58664,
    AUD: 1.44561,
    AWG: 1.79981,
    AZN: 1.70621,
    BAM: 1.83706,
    BBD: 1.99968,
    BDT: 103.65148,
    BGN: 1.82996,
    BHD: 0.37612,
    BIF: 2075.92594,
    BMD: 0.99944,
    BND: 1.32975,
    BOB: 6.92685,
    BRL: 5.25206,
    BSD: 1.00189,
    BTN: 82.79986,
    BWP: 13.08949,
    BZD: 2.01488,
    CAD: 1.33606,
    CDF: 2000.36515,
    CHF: 0.92487,
    CLF: 0.02222,
    CLP: 799.70041,
    CNH: 6.82363,
    CNY: 6.80964,
    COP: 4797.20164,
    CUP: 24.00136,
    CVE: 103.83987,
    CZK: 22.2206,
    DJF: 177.98571,
    DKK: 6.98046,
    DOP: 56.15615,
    DZD: 137.19035,
    EGP: 30.51212,
    ERN: 15.15382,
    ETB: 53.74211,
    EUR: 0.93738,
    FJD: 2.18684,
    FKP: 0.82988,
    GBP: 0.82988,
    GEL: 2.68346,
    GHS: 11.95545,
    GIP: 0.82988,
    GMD: 63.27887,
    GNF: 8581.73097,
    GTQ: 7.83176,
    GYD: 210.15527,
    HKD: 7.84906,
    HNL: 24.57025,
    HRK: 7.02536,
    HTG: 151.52325,
    HUF: 362.70094,
    IDR: 15120.12548,
    ILS: 3.53386,
    INR: 82.45014,
    IQD: 1458.0204,
    IRR: 42020.84665,
    ISK: 142.42442,
    JMD: 154.54983,
    JOD: 0.70845,
    JPY: 131.43844,
    KES: 124.7222,
    KGS: 87.20404,
    KHR: 4095.22901,
    KMF: 460.46855,
    KPW: 900.28963,
    KRW: 1266.55823,
    KWD: 0.3058,
    KYD: 0.81915,
    KZT: 450.65519,
    LAK: 16921.46823,
    LBP: 15015.39432,
    LKR: 366.86031,
    LRD: 158.21957,
    LSL: 17.88189,
    LYD: 4.78826,
    MAD: 10.26523,
    MDL: 18.74837,
    MGA: 4339.10655,
    MKD: 57.54986,
    MMK: 2095.56926,
    MNT: 3511.30715,
    MOP: 8.12315,
    MRU: 36.40951,
    MUR: 45.45946,
    MVR: 15.45357,
    MWK: 1019.85079,
    MXN: 18.69435,
    MYR: 4.33081,
    MZN: 63.70725,
    NAD: 17.83343,
    NGN: 459.59303,
    NOK: 10.16764,
    NPR: 132.64674,
    NZD: 1.58629,
    OMR: 0.38418,
    PAB: 0.99944,
    PEN: 3.83246,
    PGK: 3.51534,
    PHP: 54.4802,
    PKR: 271.39063,
    PLN: 4.47368,
    PYG: 7306.31789,
    QAR: 3.64102,
    RON: 4.59313,
    RSD: 109.55444,
    RUB: 74.08418,
    RWF: 1085.4198,
    SAR: 3.75538,
    SCR: 14.15323,
    SDG: 565.59391,
    SEK: 10.46291,
    SGD: 1.32997,
    SHP: 0.82988,
    SLL: 19679.83137,
    SOS: 568.55244,
    SRD: 32.2684,
    SYP: 2513.49804,
    SZL: 17.8843,
    THB: 33.74277,
    TJS: 10.41478,
    TMT: 3.49532,
    TND: 3.11642,
    TOP: 2.36698,
    TRY: 18.8292,
    TTD: 6.79251,
    TWD: 30.21428,
    TZS: 2337.10653,
    UAH: 36.69981,
    UGX: 3670.95992,
    USD: 1,
    UYU: 39.16323,
    UZS: 11395.28129,
    VND: 23566.83458,
    VUV: 116.06486,
    WST: 2.68113,
    XAF: 615.07232,
    XCD: 2.7004,
    XDR: 0.74992,
    XOF: 615.07232,
    XPF: 111.80342,
    YER: 249.87261,
    ZAR: 17.88812,
    ZMW: 19.34522,
  },
};

const Currency = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [enterAmount, setEnterAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    // const enterAmountRate = currencyData[fromCurrency].value;
    // const convertedAmountRate = currencyData[toCurrency].value;
    setConvertedAmount((enterAmount * currencyData.results[toCurrency]) / currencyData.results[fromCurrency]);
  }, [enterAmount, toCurrency, fromCurrency]);

  const swapHandler = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="currency-container">
      <div>
        <h1>Currency Convertor</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "12px" }}>
            Enter Amount
          </label>
          <input
            style={{ height: "30px", marginBottom: "20px" }}
            type="text"
            value={enterAmount}
            onChange={(e) => setEnterAmount(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "12px" }}>From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              style={{ height: "30px", width: "120px" }}
            >
              {Object.keys(currencyData.results).map((eachCurrency) => {
                return (
                  <option key={eachCurrency} value={eachCurrency}>
                    {eachCurrency}
                  </option>
                );
              })}
            </select>
          </div>
       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ height: '30px', marginTop: '32px'}} onClick={swapHandler}>
              <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
            </svg>
     
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "12px" }}>To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              style={{ height: "30px", width: "120px" }}
            >
              {Object.keys(currencyData.results).map((eachCurrency) => {
                return (
                  <option key={eachCurrency} value={eachCurrency}>
                    {eachCurrency}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <h4>{enterAmount} {fromCurrency} = {convertedAmount.toFixed(3)} {toCurrency}</h4>
  
      </div>
    </div>
  );
};

export default Currency;
