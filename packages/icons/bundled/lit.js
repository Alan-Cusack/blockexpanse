"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const lit = require("lit");
const Account = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M12 14.75a6.25 6.25 0 0 0-5.998 4.488.67.67 0 0 0 .162.666c.182.2.486.346.836.346h10c.35 0 .654-.146.837-.346a.67.67 0 0 0 .161-.666A6.25 6.25 0 0 0 12 14.75m-7.438 4.065a7.753 7.753 0 0 1 14.876 0 2.16 2.16 0 0 1-.495 2.102A2.64 2.64 0 0 1 17 21.75H7a2.64 2.64 0 0 1-1.943-.833 2.16 2.16 0 0 1-.495-2.102" clip-rule="evenodd"/>
  </svg>
`;
const AddCollection = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M8.25 4A.75.75 0 0 1 9 3.25h6a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 4M7 6.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM7 9.25A2.75 2.75 0 0 0 4.25 12v5A2.75 2.75 0 0 0 7 19.75h5.25a.75.75 0 0 0 0-1.5H7c-.69 0-1.25-.56-1.25-1.25v-5c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v.14a.75.75 0 0 0 1.5 0V12A2.75 2.75 0 0 0 17 9.25zM19.5 15.75a.75.75 0 0 0-1.5 0V18h-2.25a.75.75 0 0 0 0 1.5H18v2.25a.75.75 0 0 0 1.5 0V19.5h2.25a.75.75 0 0 0 0-1.5H19.5z"/>
  </svg>
`;
const AddComment = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18.829 4.08a.655.655 0 1 0-1.31 0v1.964h-1.964a.655.655 0 0 0 0 1.31h1.965v1.964a.655.655 0 1 0 1.309 0V7.353h1.964a.655.655 0 1 0 0-1.31H18.83zm1.436 15.397c.192-.12.31-.33.31-.557v-8.075a.655.655 0 1 0-1.31 0v7.016l-1.954-.977-.032-.017c-.19-.094-.338-.169-.497-.222a2.4 2.4 0 0 0-.433-.102c-.166-.024-.333-.023-.544-.023H8.397c-.744 0-1.263 0-1.667-.034-.396-.032-.624-.093-.796-.18a1.96 1.96 0 0 1-.858-.859c-.088-.172-.149-.4-.181-.796-.033-.404-.034-.923-.034-1.667V9.143c0-.744.001-1.263.034-1.667.032-.396.093-.624.18-.796.189-.37.49-.67.859-.858.172-.088.4-.149.796-.181.404-.033.923-.034 1.667-.034h4.758a.655.655 0 0 0 0-1.309H8.369c-.71 0-1.282 0-1.745.038-.478.039-.897.121-1.285.319a3.27 3.27 0 0 0-1.43 1.43c-.198.388-.28.807-.32 1.285-.037.463-.037 1.035-.037 1.745v3.897c0 .71 0 1.282.038 1.745.039.478.121.897.319 1.285a3.27 3.27 0 0 0 1.43 1.43c.388.198.807.28 1.285.32.463.037 1.035.037 1.745.037h7.4c.263 0 .333.002.399.01q.1.015.196.047c.062.02.126.051.361.169l2.903 1.45c.202.102.443.091.637-.028M7.699 8.663a.655.655 0 1 0 0 1.31h6.983a.655.655 0 1 0 0-1.31zm-.655 4.146c0-.361.293-.654.655-.654h4.365a.655.655 0 0 1 0 1.31H7.698a.655.655 0 0 1-.655-.656" clip-rule="evenodd"/>
  </svg>
`;
const AddCursor = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path stroke='currentColor' stroke-linecap="round" stroke-linejoin="round" d="M6 12h12m-6-6v12"/>
  </svg>
`;
const AddOrganize = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M5 5.25c-.69 0-1.25.56-1.25 1.25V17c0 .69.56 1.25 1.25 1.25h8.25a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 17V6.5A2.75 2.75 0 0 1 5 3.75h4.672c.729 0 1.428.29 1.944.805l1.195 1.195H19a2.75 2.75 0 0 1 2.75 2.75v2.75a.75.75 0 0 1-1.5 0V8.5c0-.69-.56-1.25-1.25-1.25h-6.5a.75.75 0 0 1-.53-.22l-1.415-1.414a1.25 1.25 0 0 0-.883-.366zM20 14.25a.75.75 0 0 1 .75.75v2.25H23a.75.75 0 0 1 0 1.5h-2.25V21a.75.75 0 0 1-1.5 0v-2.25H17a.75.75 0 0 1 0-1.5h2.25V15a.75.75 0 0 1 .75-.75"/>
  </svg>
`;
const AddTag = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M4.564 7.467a3.017 3.017 0 0 1 2.903-2.903l4.606-.17c.323-.013.636.11.864.338L14.5 6.296a.696.696 0 1 0 .984-.984l-1.564-1.564a2.55 2.55 0 0 0-1.9-.746l-4.606.17a4.41 4.41 0 0 0-4.243 4.243l-.17 4.607c-.027.71.244 1.397.746 1.9l6.647 6.647a2.553 2.553 0 0 0 3.61 0l.88-.88a.696.696 0 1 0-.984-.985l-.88.88a1.16 1.16 0 0 1-1.641 0l-6.648-6.647a1.16 1.16 0 0 1-.339-.864z"/><path fill='currentColor' d="M8.262 8.262A.928.928 0 1 0 6.95 6.95a.928.928 0 0 0 1.313 1.313M17.75 9a.75.75 0 0 1 .75.75V12h2.25a.75.75 0 0 1 0 1.5H18.5v2.25a.75.75 0 0 1-1.5 0V13.5h-2.25a.75.75 0 0 1 0-1.5H17V9.75a.75.75 0 0 1 .75-.75"/>
  </svg>
`;
const AddText = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.25 5A.75.75 0 0 1 7 4.25h14a.75.75 0 0 1 .75.75v2.333a.75.75 0 0 1-1.5 0V5.75h-5.5v12.5h2.75a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h2.75V5.75h-5.5v1.583a.75.75 0 1 1-1.5 0z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M1.25 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M4.5 16.25a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75" clip-rule="evenodd"/>
  </svg>
`;
const AfFiNe = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.893 2.293c-.717-.538-1.769-.31-2.207.48-.35.624-1.413 2.504-2.697 4.775l-.001.001C5.493 11.96 2.166 17.843 1.61 18.865c-.341.838.135 1.831.99 2.075.251.068.512.063.758.059q.152-.005.295 0c2.243.002 5.182 0 8.153 0 3.255-.002 6.55-.004 9.016 0 .137.002.375 0 .576-.059.62-.176 1.082-.78 1.1-1.436a1.6 1.6 0 0 0-.11-.638c-.07-.156-.128-.257-.186-.357l-.066-.117-.476-.844-3.831-6.78-.232-.412L14.03 4.04l-.716-1.267a1.7 1.7 0 0 0-.421-.48m-2.331 3.026 1.11-1.965a.377.377 0 0 1 .656 0c.068.118.199.352.333.592.15.268.305.544.382.675l3.686 6.525 1.834 3.245zM8.826 8.39c-2.458 4.35-5.633 9.971-6.16 10.917-.095.23.078.52.324.524.048.005.335.005.52.004h1.682zm4.007 11.446h8.015c.07 0 .158 0 .162-.005a.2.2 0 0 0 .048-.005q.015-.005.032-.006a.396.396 0 0 0 .245-.513q-.011-.016-.016-.03a1 1 0 0 0-.049-.092l-1.043-1.847-11.472 2.498zm5.932-4.338a12 12 0 0 0-.68-.561l-7.748 3.825-.057.041 9.365-2.371zm-6.711 1.671 5.139-2.836a8 8 0 0 0-.924-.473zm.778-1.433 2.487-2.207a7 7 0 0 0-.406-.097 6 6 0 0 0-.728-.092zm-1.24.749L10.24 14.09l.627 3.301q.145-.15.283-.31.239-.286.442-.597m-1.369-3.866a6 6 0 0 1-.285-.691 7 7 0 0 1-.121-.405l3.11 1.096zm-.599-4.227 7.001 4.866.05.023-6.612-7.02-.145.514a13 13 0 0 0-.294 1.617m.484 9.678-.73-5.662-.044-.118-.179 6.413q.498-.281.953-.633m-1.91 1.108.612-8.473-2.572 9.122.003-.001.09-.023c.639-.163 1.267-.367 1.868-.625m6.24-6.63L9.56 9.48q-.001.518.061 1.032zm-3.65 1.095 1.035 1.83c.08.14.277.14.355 0l1.035-1.83c.079-.14-.02-.315-.177-.315h-2.07c-.158 0-.257.175-.178.315" clip-rule="evenodd"/>
  </svg>
`;
const Ai = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M11.281 5.491a.714.714 0 0 0-1.42-.001c-.27 2.345-.971 3.994-2.102 5.126-1.132 1.131-2.781 1.832-5.127 2.103a.714.714 0 0 0 .002 1.42c2.307.26 3.991.962 5.15 2.099 1.153 1.133 1.87 2.782 2.076 5.11a.714.714 0 0 0 1.423 0c.198-2.291.914-3.975 2.073-5.135 1.16-1.16 2.843-1.875 5.134-2.073a.714.714 0 0 0 .002-1.423c-2.33-.207-3.978-.923-5.111-2.077-1.138-1.158-1.838-2.842-2.1-5.149M18.943 2.247a.278.278 0 0 0-.552-.001c-.105.912-.378 1.554-.818 1.993s-1.082.713-1.994.818a.278.278 0 0 0 0 .552c.898.102 1.553.375 2.003.817.45.44.727 1.082.808 1.987a.278.278 0 0 0 .553 0c.077-.891.356-1.546.807-1.997.45-.45 1.105-.729 1.996-.806a.278.278 0 0 0 0-.553c-.905-.08-1.546-.36-1.987-.808-.442-.45-.715-1.105-.816-2.002"/>
  </svg>
`;
const Alias = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.574 3.313a.75.75 0 0 1 .81.136l8.125 7.5a.75.75 0 0 1 0 1.102l-8.126 7.5A.75.75 0 0 1 12.125 19v-4.012c-3.68.112-5.78 1.038-6.948 1.89-.626.457-1 .904-1.213 1.22a3 3 0 0 0-.25.45l-.004.012a.75.75 0 0 1-1.46-.242c0-3.999 1.713-6.61 3.934-8.195 1.906-1.361 4.153-1.946 5.94-2.073V4a.75.75 0 0 1 .45-.687m-8.551 12.56q.128-.104.27-.206c1.556-1.136 4.19-2.19 8.581-2.19a.75.75 0 0 1 .75.75v3.06l6.27-5.787-6.27-5.787v3.06a.75.75 0 0 1-.75.75c-1.638 0-3.944.482-5.819 1.82-1.364.975-2.525 2.418-3.032 4.53" clip-rule="evenodd"/>
  </svg>
`;
const AlignBottom = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15 4a1 1 0 0 1 1 1v12a1 1 0 0 1-.031.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h4.031A1 1 0 0 1 8 17v-6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6a1 1 0 0 1-.031.25h2.063A1 1 0 0 1 13 17V5a1 1 0 0 1 1-1z" clip-rule="evenodd"/>
  </svg>
`;
const AlignHorizontalCenter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v4H18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5.25v2H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2.25v4a.75.75 0 0 1-1.5 0v-4H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2.25v-2H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5.25V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const AlignLeft = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.75 3.25A.75.75 0 0 1 6.5 4v4.031q.12-.03.25-.031h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-12a1 1 0 0 1-.25-.031v2.063A1 1 0 0 1 6.75 13h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-.25-.031V20A.75.75 0 0 1 5 20V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const AlignRight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0v-4.031A1 1 0 0 1 18 16h-6a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 .25.031V10.97A1 1 0 0 1 18 11H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h12q.13 0 .25.031V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const AlignTop = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3 5.75A.75.75 0 0 1 3.75 5h16a.75.75 0 0 1 0 1.5h-4.031a1 1 0 0 1 .031.25v12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-12a1 1 0 0 1 .031-.25H10.72a1 1 0 0 1 .031.25v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-6q0-.13.032-.25H3.75A.75.75 0 0 1 3 5.75" clip-rule="evenodd"/>
  </svg>
`;
const AlignVerticalCenter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15 5a1 1 0 0 1 1 1v5.25h4a.75.75 0 0 1 0 1.5h-4V18a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-5.25h-2V15a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.25H4a.75.75 0 0 1 0-1.5h4V9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.25h2V6a1 1 0 0 1 1-1z" clip-rule="evenodd"/>
  </svg>
`;
const AllDocs = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.167 3.25c-.783 0-1.417.634-1.417 1.417V15.5c0 .782.634 1.417 1.417 1.417h8.666c.783 0 1.417-.635 1.417-1.417V8.125h-2.5a1.833 1.833 0 0 1-1.833-1.833V3.25zm7.25 1.223 1.913 2.152h-1.58a.333.333 0 0 1-.333-.333zM7.25 4.667a2.917 2.917 0 0 1 2.917-2.917h6.5a.75.75 0 0 1 .56.252l4.334 4.875a.75.75 0 0 1 .189.498V15.5a2.917 2.917 0 0 1-2.917 2.917H16.75v.916a2.917 2.917 0 0 1-2.917 2.917H5.708a3.46 3.46 0 0 1-3.458-3.458V8.5a2.917 2.917 0 0 1 2.917-2.917H7.25zm0 2.416H5.167c-.783 0-1.417.635-1.417 1.417v10.292c0 1.081.877 1.958 1.958 1.958h8.125c.783 0 1.417-.634 1.417-1.417v-.916h-5.083A2.917 2.917 0 0 1 7.25 15.5zm4.333-.25a.75.75 0 0 1 .75-.75h1.409a.75.75 0 0 1 0 1.5h-1.409a.75.75 0 0 1-.75-.75m0 3.25a.75.75 0 0 1 .75-.75h4.334a.75.75 0 0 1 0 1.5h-4.334a.75.75 0 0 1-.75-.75m0 3.25a.75.75 0 0 1 .75-.75h3.25a.75.75 0 0 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Appearance = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5A2.25 2.25 0 0 0 14.25 18v-.659c0-.314 0-.556.034-.771a2.75 2.75 0 0 1 2.286-2.286c.215-.034.457-.034.771-.034H18A2.25 2.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75A3.75 3.75 0 0 1 18 15.75h-.6c-.4 0-.513.002-.595.015a1.25 1.25 0 0 0-1.04 1.04c-.013.082-.015.195-.015.595v.6A3.75 3.75 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75m7-4.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m5 1a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m-8 3a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowDownBig = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.507 13.003a.75.75 0 0 0-1.06.045l-3.697 4.027V5a.75.75 0 0 0-1.5 0v12.075l-3.698-4.027a.75.75 0 1 0-1.104 1.015l5 5.444a.75.75 0 0 0 1.104 0l5-5.444a.75.75 0 0 0-.045-1.06" clip-rule="evenodd"/>
  </svg>
`;
const ArrowDownBigBottom = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.75 4a.75.75 0 0 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72zM5 19.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const ArrowDownSmall = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.58 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowLeftBig = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.997 6.493a.75.75 0 0 1-.045 1.06L6.925 11.25H19a.75.75 0 0 1 0 1.5H6.925l4.027 3.698a.75.75 0 1 1-1.015 1.104l-5.444-5a.75.75 0 0 1 0-1.104l5.444-5a.75.75 0 0 1 1.06.045" clip-rule="evenodd"/>
  </svg>
`;
const ArrowLeftSmall = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.53 6.47a.75.75 0 0 1 0 1.06L10.06 12l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowLeftSmallPlus = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.707 6.293a1 1 0 0 1 0 1.414L10.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowRightBig = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.003 6.493a.75.75 0 0 0 .045 1.06l4.027 3.697H5a.75.75 0 0 0 0 1.5h12.075l-4.027 3.698a.75.75 0 1 0 1.015 1.104l5.444-5a.75.75 0 0 0 0-1.104l-5.444-5a.75.75 0 0 0-1.06.045" clip-rule="evenodd"/>
  </svg>
`;
const ArrowRightSmall = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.47 6.47a.75.75 0 0 0 0 1.06L12.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowRightSmallPlus = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.293 6.293a1 1 0 0 0 0 1.414L12.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 0" clip-rule="evenodd"/>
  </svg>
`;
const ArrowUpBig = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.507 10.997a.75.75 0 0 1-1.06-.045L12.75 6.925V19a.75.75 0 0 1-1.5 0V6.925l-3.698 4.027a.75.75 0 1 1-1.104-1.015l5-5.444a.75.75 0 0 1 1.104 0l5 5.444a.75.75 0 0 1-.045 1.06" clip-rule="evenodd"/>
  </svg>
`;
const ArrowUpBigTop = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 3.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zM12.75 20a.75.75 0 0 1-1.5 0V9.81l-2.72 2.72a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72z" clip-rule="evenodd"/>
  </svg>
`;
const ArrowUpSmall = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.58 15.03a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 1 0 1.06 1.06l4.47-4.47 4.47 4.47a.75.75 0 0 0 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const At = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 4.125 15.395.75.75 0 0 1 .75 1.299 9.7 9.7 0 0 1-4.925 1.306c-5.362-.027-9.7-4.382-9.7-9.75 0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v1.5a3.25 3.25 0 0 1-6.108 1.55A4.75 4.75 0 1 1 16.75 12v1.5a1.75 1.75 0 1 0 3.5 0V12A8.25 8.25 0 0 0 12 3.75M15.25 12a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0" clip-rule="evenodd"/>
  </svg>
`;
const Attachment = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m12.218 5.608-6.04 6.04a4.65 4.65 0 0 0 0 6.704c1.913 1.864 5.025 1.864 6.939 0l5.89-5.723a.75.75 0 1 1 1.045 1.076l-5.889 5.721c-2.496 2.432-6.536 2.432-9.032 0a6.15 6.15 0 0 1-.004-8.849l6.04-6.04c1.762-1.716 4.61-1.716 6.371 0a4.35 4.35 0 0 1 .004 6.256l-6.04 6.04c-1.027 1-2.683 1-3.71 0a2.55 2.55 0 0 1 0-3.667l6.2-6.037a.75.75 0 0 1 1.046 1.075l-6.199 6.037a1.05 1.05 0 0 0 0 1.518 1.17 1.17 0 0 0 1.613.003l6.04-6.04a2.85 2.85 0 0 0 0-4.11 3.086 3.086 0 0 0-4.275-.004" clip-rule="evenodd"/>
  </svg>
`;
const AutoHeight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 4M3.25 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M11.47 5.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L12 7.06 9.53 9.53a.75.75 0 0 1-1.06-1.06zM8.47 14.47a.75.75 0 0 1 1.06 0L12 16.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const AutoSize = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h2.5a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v2.5a.75.75 0 0 1-1.5 0zm11.5-2a.75.75 0 0 1 .75-.75H18A2.75 2.75 0 0 1 20.75 6v2.5a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 0 1-.75-.75M4 14.75a.75.75 0 0 1 .75.75V18c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 18v-2.5a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75V18A2.75 2.75 0 0 1 18 20.75h-3a.75.75 0 0 1 0-1.5h3c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const AutoTidyUp = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.368 5.55c0-.856.694-1.55 1.55-1.55h5.314c.856 0 1.55.694 1.55 1.55v2.657a1.55 1.55 0 0 1-1.55 1.55H5.918a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v2.657c0 .122.099.222.221.222h5.314c.123 0 .222-.1.222-.222V5.55c0-.122-.1-.221-.222-.221zm9.079.221c0-.856.694-1.55 1.55-1.55h1.771c.856 0 1.55.694 1.55 1.55v4.429a1.55 1.55 0 0 1-1.55 1.55h-1.771a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.123 0-.222.099-.222.221v4.429c0 .122.1.221.222.221h1.771c.122 0 .221-.1.221-.221V5.55c0-.122-.099-.221-.221-.221zM4.368 14.407c0-.856.694-1.55 1.55-1.55h2.657c.856 0 1.55.694 1.55 1.55v3.543a1.55 1.55 0 0 1-1.55 1.55H5.918a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v3.543c0 .122.099.221.221.221h2.657c.122 0 .222-.099.222-.221v-3.543c0-.122-.1-.221-.222-.221zm6.421.221c0-.856.694-1.55 1.55-1.55h4.429c.856 0 1.55.694 1.55 1.55v2.657a1.55 1.55 0 0 1-1.55 1.55h-4.429a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v2.657c0 .123.1.222.222.222h4.428c.122 0 .221-.1.221-.222v-2.657c0-.122-.099-.221-.221-.221z" clip-rule="evenodd"/>
  </svg>
`;
const Ban = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.28 5.66 5.66 17.28A8.25 8.25 0 0 1 17.28 5.66M6.72 18.34 18.34 6.72A8.25 8.25 0 0 1 6.72 18.34M18.894 5.106c-3.807-3.808-9.98-3.808-13.788 0s-3.808 9.98 0 13.788 9.98 3.808 13.788 0 3.808-9.98 0-13.788" clip-rule="evenodd"/>
  </svg>
`;
const Block = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.7 2.813a.75.75 0 0 1 .6 0l8 3.5c.274.12.45.389.45.687v10a.75.75 0 0 1-.45.687l-8 3.5a.75.75 0 0 1-.6 0l-8-3.5A.75.75 0 0 1 3.25 17V7a.75.75 0 0 1 .45-.687zM4.75 8.147v8.362l6.5 2.844v-8.362zm8 2.844v8.362l6.5-2.844V8.147zM18.129 7 12 9.681 5.871 7 12 4.319z" clip-rule="evenodd"/>
  </svg>
`;
const BlockLink = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h2.5A2.75 2.75 0 0 1 11.25 6v2.5a2.75 2.75 0 0 1-2.75 2.75H6A2.75 2.75 0 0 1 3.25 8.5zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM12.75 6a2.75 2.75 0 0 1 2.75-2.75H18A2.75 2.75 0 0 1 20.75 6v2.5A2.75 2.75 0 0 1 18 11.25h-2.5a2.75 2.75 0 0 1-2.75-2.75zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25H18c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zM3.25 15.5A2.75 2.75 0 0 1 6 12.75h2.5a2.75 2.75 0 0 1 2.75 2.75V18a2.75 2.75 0 0 1-2.75 2.75H6A2.75 2.75 0 0 1 3.25 18zM6 14.25c-.69 0-1.25.56-1.25 1.25V18c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zm8.25-.75a.75.75 0 0 1 .75-.75h4.9a.85.85 0 0 1 .85.85v4.9a.75.75 0 0 1-1.5 0v-3.19l-5.22 5.22a.75.75 0 1 1-1.06-1.06l5.22-5.22H15a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Blockexpanse = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M20 8.182 14.703 4 4 6.121v9.696L9.298 20 20 17.88zm-6.356-2.65v2.754l1.62-.32v-1.71l2.34 1.846-7.81 1.548-3.398-2.682zM5.62 8.167l3.116 2.459v2.887l1.62-.32V10.86l8.024-1.59v6.564l-3.116-2.46v-2.886l-1.62.32v2.332L5.62 14.73zm4.736 10.301v-2.754l-1.62.321v1.71L6.396 15.9l7.811-1.548 3.397 2.681z"/>
  </svg>
`;
const Bold = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.25 4A.75.75 0 0 1 7 3.25h5.958c2.67 0 4.875 2.105 4.875 4.75 0 1.515-.723 2.853-1.843 3.72 1.626.764 2.76 2.383 2.76 4.28 0 2.645-2.204 4.75-4.875 4.75H7a.75.75 0 0 1-.75-.75zm1.5 8.75v6.5h6.125c1.886 0 3.375-1.477 3.375-3.25s-1.49-3.25-3.375-3.25zm0-1.5h5.208c1.886 0 3.375-1.477 3.375-3.25s-1.489-3.25-3.375-3.25H7.75z" clip-rule="evenodd"/>
  </svg>
`;
const Bookmark = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v7a.75.75 0 0 0 1.5 0V6c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25h-7a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 21.75 18V6A2.75 2.75 0 0 0 19 3.25zm4.116 9.866a1.25 1.25 0 0 1 1.768 1.768l-2 2a1.25 1.25 0 0 1-1.768 0 .75.75 0 0 0-1.06 1.06 2.75 2.75 0 0 0 3.889 0l2-2a2.75 2.75 0 1 0-3.89-3.889l-.55.55a.75.75 0 1 0 1.061 1.06zm-3 3a1.25 1.25 0 0 1 1.768 0 .75.75 0 0 0 1.06-1.06 2.75 2.75 0 0 0-3.889 0l-2 2a2.75 2.75 0 1 0 3.89 3.889l.55-.551a.75.75 0 0 0-1.06-1.06l-.551.55a1.25 1.25 0 0 1-1.768-1.768z" clip-rule="evenodd"/>
  </svg>
`;
const BrokenImage = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v5a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8.19l3.305-3.306a2.75 2.75 0 0 1 3.89 0l.585.586a.75.75 0 1 1-1.06 1.06l-.586-.585a1.25 1.25 0 0 0-1.768 0L4.75 16.31V18c0 .69.56 1.25 1.25 1.25h5a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 18z" clip-rule="evenodd"/><path fill='currentColor' d="M15 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/><path fill='currentColor' fill-rule="evenodd" d="M13.47 13.47a.75.75 0 0 1 1.06 0L17 15.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L18.06 17l2.47 2.47a.75.75 0 1 1-1.06 1.06L17 18.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L15.94 17l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const Broom = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.777 3.723a.76.76 0 0 1 0 1.075l-6.968 6.968a5.09 5.09 0 0 1 .068 5.946l-2.881 4.1a.663.663 0 0 1-.92.164 29.9 29.9 0 0 1-7.552-7.552.663.663 0 0 1 .164-.92l4.1-2.88a5.09 5.09 0 0 1 5.946.067l6.968-6.968a.76.76 0 0 1 1.075 0M10.25 20.23l2.384-3.393.027-.04c-1.023-.4-2.056-1.083-2.965-1.993-.91-.91-1.592-1.942-1.993-2.965l-.04.027-3.393 2.384a28.3 28.3 0 0 0 5.98 5.98m-1.137-8.962c.313.808.87 1.674 1.658 2.461.787.788 1.653 1.345 2.46 1.658a3.567 3.567 0 0 0-4.118-4.119" clip-rule="evenodd"/>
  </svg>
`;
const Brush = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 4.968a.75.75 0 0 1 .782-.717 84 84 0 0 1 7.141.63c1.323.178 2.63.398 3.77.664 1.127.263 2.15.585 2.873.987.228.127.444.275.61.453.164.177.347.461.322.832s-.243.623-.417.766a2.2 2.2 0 0 1-.582.327c-.759.302-2.052.501-3.404.663-.818.098-1.716.187-2.593.275-.594.06-1.178.118-1.723.177q-.416.045-.797.091l.953.142c2.324.342 5.287.777 7.09 1.48.16.064.41.177.585.394a.88.88 0 0 1 .198.551.9.9 0 0 1-.18.532 1.4 1.4 0 0 1-.513.393 4 4 0 0 1-.543.208c-.767.242-1.994.482-3.266.725l-.406.078c-1.175.223-2.39.454-3.412.701a14 14 0 0 0-1.443.413 5 5 0 0 0-.37.15c.295.23.799.507 1.466.801 1.43.631 3.34 1.232 4.669 1.592a.75.75 0 0 1-.393 1.448c-1.361-.37-3.352-.993-4.88-1.668-.75-.33-1.46-.703-1.921-1.102-.222-.192-.478-.467-.58-.828a1.13 1.13 0 0 1 .002-.636c.065-.217.188-.391.327-.527.293-.286.746-.487 1.17-.64a16 16 0 0 1 1.602-.461c1.06-.256 2.312-.494 3.48-.716l.408-.078a75 75 0 0 0 1.951-.392c-1.57-.39-3.545-.681-5.299-.94l-.605-.09c-1.197-.178-2.29-.35-2.908-.545a2.2 2.2 0 0 1-.483-.206c-.098-.06-.459-.292-.473-.755-.015-.48.35-.732.46-.802.159-.102.352-.177.54-.239.76-.247 2.049-.417 3.408-.565.577-.063 1.172-.122 1.767-.182.86-.086 1.722-.171 2.534-.269 1.066-.127 1.954-.264 2.556-.42-.527-.231-1.248-.453-2.12-.657-1.08-.252-2.335-.464-3.63-.64a82 82 0 0 0-7.005-.617.75.75 0 0 1-.717-.78m13.543 8.197-.006-.004zm-.035-.931" clip-rule="evenodd"/>
  </svg>
`;
const BulletedList = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.3 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4.033-1.75a.75.75 0 0 0 0 1.5l11.917.001a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 1 0 0 1.5l11.917.002a.75.75 0 0 0 0-1.5zm0 5.5a.75.75 0 1 0 0 1.5l11.917.002a.75.75 0 1 0 0-1.5zM5.3 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
  </svg>
`;
const CalendarXmark = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.75a.75.75 0 0 1 .75.75v.75h6.5V3.5a.75.75 0 0 1 1.5 0v.75H19A2.75 2.75 0 0 1 21.75 7v6a.75.75 0 0 1-1.5 0v-2.75H3.75V19c0 .69.56 1.25 1.25 1.25h6.5a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19V7A2.75 2.75 0 0 1 5 4.25h2.25V3.5A.75.75 0 0 1 8 2.75m-.75 3H5c-.69 0-1.25.56-1.25 1.25v1.75h16.5V7c0-.69-.56-1.25-1.25-1.25h-2.25v.75a.75.75 0 0 1-1.5 0v-.75h-6.5v.75a.75.75 0 0 1-1.5 0zm7.341 10.72a.75.75 0 0 1 1.06 0l1.592 1.59 1.59-1.59a.75.75 0 0 1 1.061 1.06l-1.59 1.591 1.59 1.591a.75.75 0 0 1-1.06 1.061l-1.591-1.591-1.591 1.591a.75.75 0 0 1-1.061-1.06l1.591-1.592-1.591-1.59a.75.75 0 0 1 0-1.061" clip-rule="evenodd"/>
  </svg>
`;
const Camera = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.285 5.75c-.35 0-.67.172-.858.45l-.723 1.066a2.54 2.54 0 0 1-2.1 1.109h-.826c-.579 0-1.028.459-1.028 1v7.875c0 .541.449 1 1.028 1h12.444c.579 0 1.028-.459 1.028-1V9.375c0-.541-.449-1-1.028-1h-.826c-.84 0-1.63-.413-2.1-1.109L14.573 6.2a1.03 1.03 0 0 0-.858-.45zm-2.1-.391a2.54 2.54 0 0 1 2.1-1.109h3.43c.84 0 1.63.413 2.1 1.109l.723 1.066c.188.278.509.45.858.45h.826c1.385 0 2.528 1.108 2.528 2.5v7.875c0 1.392-1.143 2.5-2.528 2.5H5.778c-1.385 0-2.528-1.108-2.528-2.5V9.375c0-1.392 1.143-2.5 2.528-2.5h.826c.349 0 .67-.172.858-.45zM12 11c-1.07 0-1.917.85-1.917 1.875S10.93 14.75 12 14.75s1.917-.85 1.917-1.875S13.07 11 12 11m-3.417 1.875C8.583 11 10.124 9.5 12 9.5s3.417 1.5 3.417 3.375S13.876 16.25 12 16.25s-3.417-1.5-3.417-3.375" clip-rule="evenodd"/>
  </svg>
`;
const CancelWrap = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M16.53 2.47a.75.75 0 1 0-1.06 1.06l2.72 2.72H8a.75.75 0 0 0 0 1.5h10.19l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06zm-5 9a.75.75 0 1 0-1.06 1.06l2.72 2.72H4.5a.75.75 0 0 0 0 1.5h8.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06z" clip-rule="evenodd"/>
  </svg>
`;
const Caption = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 7A2.75 2.75 0 0 1 7 4.25h5A2.75 2.75 0 0 1 14.75 7v3A2.75 2.75 0 0 1 12 12.75H7A2.75 2.75 0 0 1 4.25 10zM7 5.75c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zM4.25 15.5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M5 18.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const CenterPeek = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 4.75a.25.25 0 0 0-.25.25v2a.75.75 0 0 1-1.5 0V5c0-.966.784-1.75 1.75-1.75h2a.75.75 0 0 1 0 1.5zM16.25 4a.75.75 0 0 1 .75-.75h2c.966 0 1.75.784 1.75 1.75v2a.75.75 0 0 1-1.5 0V5a.25.25 0 0 0-.25-.25h-2a.75.75 0 0 1-.75-.75m-9 5.1c0-.47.38-.85.85-.85h7.8c.47 0 .85.38.85.85v5.8c0 .47-.38.85-.85.85H8.1a.85.85 0 0 1-.85-.85zm1.5.65v4.5h6.5v-4.5zM4 16.25a.75.75 0 0 1 .75.75v2c0 .138.112.25.25.25h2a.75.75 0 0 1 0 1.5H5A1.75 1.75 0 0 1 3.25 19v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2A1.75 1.75 0 0 1 19 20.75h-2a.75.75 0 0 1 0-1.5h2a.25.25 0 0 0 .25-.25v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const ChatWithAi = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.755 7.913C2.74 6.996 3.35 5.25 4.765 5.25h14.237c1.18 0 1.878 1.279 1.317 2.278l-6.982 12.447c-.686 1.221-2.484.937-2.792-.408l-1.595-6.96zm6.728 4.667 1.524 6.652.005.016.01.002.006-.009L18.312 8.04zm7.063-5.83H4.761l-.007.013a.1.1 0 0 0-.004.025l.01.012 4.965 4.486z" clip-rule="evenodd"/>
  </svg>
`;
const CheckBoxCheckLinear = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zM4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25zm11.78 3.53a.75.75 0 0 0-1.06-1.06l-4.97 4.97-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"/>
  </svg>
`;
const CheckBoxCkeckSolid = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v12A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18zm13.28 3.53a.75.75 0 0 0-1.06-1.06l-4.97 4.97-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"/>
  </svg>
`;
const CheckBoxUn = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zM4.75 6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const Client = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.25 5.5H5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h2.25zm1.5 0v2.75H19.5V6a.5.5 0 0 0-.5-.5zm0 4.25v8.75H19a.5.5 0 0 0 .5-.5V9.75zm0 10.25H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" clip-rule="evenodd"/>
  </svg>
`;
const Close = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const CloudWorkspace = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11 5.75a4.25 4.25 0 0 0-4.147 5.183.75.75 0 0 1-.568.896A3.252 3.252 0 0 0 7 18.25h9a4.25 4.25 0 1 0-.085-8.5.75.75 0 0 1-.75-.6A4.25 4.25 0 0 0 11 5.75M5.25 10a5.75 5.75 0 0 1 11.235-1.73A5.75 5.75 0 0 1 16 19.75H7a4.75 4.75 0 0 1-1.722-9.178A6 6 0 0 1 5.25 10" clip-rule="evenodd"/>
  </svg>
`;
const Code = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.982 4.272a.75.75 0 0 1 .546.91l-3.6 14.4a.75.75 0 1 1-1.456-.364l3.6-14.4a.75.75 0 0 1 .91-.546M7.13 8.07a.75.75 0 0 1 0 1.06L4.06 12.2l3.07 3.07a.75.75 0 0 1-1.06 1.06l-3.6-3.6a.75.75 0 0 1 0-1.06l3.6-3.6a.75.75 0 0 1 1.06 0m9.74 0a.75.75 0 0 1 1.06 0l3.6 3.6a.75.75 0 0 1 0 1.06l-3.6 3.6a.75.75 0 1 1-1.06-1.06l3.07-3.07-3.07-3.07a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const CodeBlock = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 6A2.75 2.75 0 0 1 5 3.25h14A2.75 2.75 0 0 1 21.75 6v12A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18zM5 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25zm5.53 4.62a.75.75 0 0 1 0 1.06l-1.59 1.591 1.59 1.591a.75.75 0 0 1-1.06 1.06l-2.122-2.12a.75.75 0 0 1 0-1.061L9.47 9.37a.75.75 0 0 1 1.06 0m2.94 1.06a.75.75 0 1 1 1.06-1.06l2.122 2.12a.75.75 0 0 1 0 1.062l-2.122 2.12a.75.75 0 1 1-1.06-1.06l1.59-1.59z" clip-rule="evenodd"/>
  </svg>
`;
const Collaboration = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 5.55a1.95 1.95 0 1 0 0 3.9 1.95 1.95 0 0 0 0-3.9M8.55 7.5a3.45 3.45 0 1 1 6.9 0 3.45 3.45 0 0 1-6.9 0M5.7 9.15a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1M3.15 10.2a2.55 2.55 0 1 1 5.1 0 2.55 2.55 0 0 1-5.1 0M18.3 9.15a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1m-2.55 1.05a2.55 2.55 0 1 1 5.1 0 2.55 2.55 0 0 1-5.1 0M12 13.65a3.75 3.75 0 0 0-3.75 3.75v1.05h7.5V17.4A3.752 3.752 0 0 0 12 13.65m5.25 4.8h2.85a.15.15 0 0 0 .15-.15v-.9a1.95 1.95 0 0 0-3.213-1.485c.139.471.213.97.213 1.485zm-.857-3.925A5.25 5.25 0 0 0 12 12.15a5.25 5.25 0 0 0-4.393 2.375A3.45 3.45 0 0 0 2.25 17.4v.9c0 .911.739 1.65 1.65 1.65h16.2a1.65 1.65 0 0 0 1.65-1.65v-.9a3.45 3.45 0 0 0-5.357-2.875m-9.43 1.39A1.95 1.95 0 0 0 3.75 17.4v.9c0 .083.067.15.15.15h2.85V17.4c0-.515.074-1.014.213-1.485" clip-rule="evenodd"/>
  </svg>
`;
const Collapse = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.53 3.47a.75.75 0 0 0-1.06 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0-1.06-1.06L12 7.94zm0 17.06a.75.75 0 0 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06L12 16.06z" clip-rule="evenodd"/>
  </svg>
`;
const CollapseTab = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M14.91 5.884a.75.75 0 0 0-.75-.75H4.014a.75.75 0 0 0 0 1.5H14.16a.75.75 0 0 0 .75-.75M14.91 10.196a.75.75 0 0 0-.75-.75H4.014a.75.75 0 0 0 0 1.5H14.16a.75.75 0 0 0 .75-.75M14.16 13.758a.75.75 0 0 1 0 1.5H4.014a.75.75 0 0 1 0-1.5zM9.91 18.82a.75.75 0 0 0-.75-.75H4.061a.75.75 0 0 0 0 1.5H9.16a.75.75 0 0 0 .75-.75M21 10.514v3.597c0 .441-.486.71-.86.476l-2.877-1.798a.562.562 0 0 1 0-.953l2.877-1.798a.562.562 0 0 1 .86.476"/>
  </svg>
`;
const ColorPicker = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.607 3.637a2.57 2.57 0 0 0-3.636 0l-1.667 1.666a2.57 2.57 0 0 1-3.251.318c-.23-.154-.544-.16-.74.036l-.656.656a.5.5 0 0 0 0 .708l1.394 1.393-7.39 7.39a2.75 2.75 0 0 0-.456 3.285l-1.043 1.043a.75.75 0 0 0 1.06 1.06l1.043-1.043a2.75 2.75 0 0 0 3.286-.457l7.389-7.389 1.283 1.284a.5.5 0 0 0 .707 0l.657-.657c.195-.195.19-.51.036-.739-.672-1-.567-2.367.317-3.251l1.667-1.667a2.57 2.57 0 0 0 0-3.636M5.722 16.864l7.39-7.389 1.767 1.768-7.389 7.389a1.25 1.25 0 1 1-1.768-1.768" clip-rule="evenodd"/>
  </svg>
`;
const Comment = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.5 3.75a7.75 7.75 0 0 0-7.022 11.033.85.85 0 0 1 .068.5l-.634 3.805 3.804-.634a.85.85 0 0 1 .5.068A7.75 7.75 0 1 0 12.5 3.75M3.25 11.5a9.25 9.25 0 1 1 5.517 8.466l-4.506.75a.85.85 0 0 1-.978-.977l.751-4.506A9.2 9.2 0 0 1 3.25 11.5" clip-rule="evenodd"/>
  </svg>
`;
const CommentDuodone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M21.302 8.649A9.25 9.25 0 0 1 8.767 19.966l-4.506.75a.85.85 0 0 1-.978-.977l.751-4.506A9.25 9.25 0 0 1 15.351 2.698a4.2 4.2 0 0 0-.682 1.36 7.75 7.75 0 0 0-9.192 10.725.85.85 0 0 1 .07.5l-.635 3.805 3.804-.634a.85.85 0 0 1 .5.068A7.75 7.75 0 0 0 19.942 9.33a4.2 4.2 0 0 0 1.361-.681" clip-rule="evenodd"/><path fill='currentColor' d="M21.75 5.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  </svg>
`;
const CommentsAvatar = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g filter="url(#a)"><path fill='currentColor' fill-rule="evenodd" d="M13.374 2.271a9.336 9.336 0 0 0-8.545 13.104l-.758 4.548a.858.858 0 0 0 .987.987l4.548-.758a9.336 9.336 0 1 0 3.767-17.881" clip-rule="evenodd"/></g><rect width="16.14" height="16.14" x="5.304" y="3.537" fill="url(#b)" rx="8"/><rect width="16.14" height="16.14" x="5.304" y="3.537" stroke='currentColor' rx="8"/><defs><filter id="a" width="26.748" height="26.748" x="0" y=".252" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_18870_71976"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_18870_71976" result="shape"/></filter><pattern id="b" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#c" transform="scale(.00424)"/></pattern></defs>
  </svg>
`;
const Compress = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.989 9.742a.75.75 0 0 1-.75-.75V4.978a.75.75 0 0 1 1.5 0v2.203l3.736-3.736a.75.75 0 1 1 1.06 1.06L16.8 8.242h2.203a.75.75 0 1 1 0 1.5zm0 4.491a.75.75 0 0 0-.75.75v4.014a.75.75 0 1 0 1.5 0v-2.203l3.736 3.736a.75.75 0 1 0 1.06-1.06L16.8 15.733h2.203a.75.75 0 1 0 0-1.5zm-5.328.75a.75.75 0 0 0-.75-.75H4.898a.75.75 0 0 0 0 1.5H7.1L3.364 19.47a.75.75 0 1 0 1.06 1.06l3.737-3.736v2.203a.75.75 0 1 0 1.5 0zm-.75-5.241a.75.75 0 0 0 .75-.75V4.978a.75.75 0 1 0-1.5 0v2.203L4.425 3.445a.75.75 0 1 0-1.06 1.06L7.1 8.242H4.898a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Connector = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.25 6.5a3.25 3.25 0 1 1 1.582 2.79L9.29 15.832a3.25 3.25 0 1 1-1.046-1.075l6.513-6.514A3.24 3.24 0 0 1 14.25 6.5m3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-11 11a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clip-rule="evenodd"/>
  </svg>
`;
const ConnectorC = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15.97 2.02a.75.75 0 0 1 1.06 0l4.88 4.879a.85.85 0 0 1 0 1.202l-4.88 4.88a.75.75 0 1 1-1.06-1.062l3.67-3.669H18c-3.151 0-4.552.758-5.25 1.662-.745.963-.873 2.28-1.002 3.898l-.008.101c-.119 1.486-.259 3.245-1.303 4.595C9.323 19.946 7.349 20.75 4 20.75a.75.75 0 1 1 0-1.5c3.151 0 4.552-.758 5.25-1.662.745-.963.873-2.28 1.002-3.898l.008-.1c.119-1.487.259-3.246 1.303-4.596C12.677 7.554 14.651 6.75 18 6.75h1.64l-3.67-3.67a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const ConnectorE = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M17.03 2.02a.75.75 0 1 0-1.06 1.06l3.67 3.67H14a2.75 2.75 0 0 0-2.75 2.75V18c0 .69-.56 1.25-1.25 1.25H3a.75.75 0 0 0 0 1.5h7A2.75 2.75 0 0 0 12.75 18V9.5c0-.69.56-1.25 1.25-1.25h5.64l-3.67 3.67a.75.75 0 1 0 1.06 1.06l4.88-4.879a.85.85 0 0 0 0-1.202z"/>
  </svg>
`;
const ConnectorL = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M13 3.25a.75.75 0 0 0 0 1.5h5.19L3.47 19.47a.75.75 0 1 0 1.06 1.06L19.25 5.81V11a.75.75 0 0 0 1.5 0V4.1a.85.85 0 0 0-.85-.85z"/>
  </svg>
`;
const ContactWithUs = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.286 2.964A3.036 3.036 0 0 0 3.25 6v7.5a3.036 3.036 0 0 0 3.036 3.036H7.82v3.821a.75.75 0 0 0 1.28.53l4.352-4.351h4.261A3.036 3.036 0 0 0 20.75 13.5V6a3.036 3.036 0 0 0-3.036-3.036zM4.75 6c0-.848.688-1.536 1.536-1.536h11.428c.848 0 1.536.688 1.536 1.536v7.5c0 .848-.688 1.536-1.536 1.536h-4.571a.75.75 0 0 0-.53.22l-3.292 3.29v-2.76a.75.75 0 0 0-.75-.75H6.286A1.536 1.536 0 0 1 4.75 13.5zm3.75 4.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4.5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
  </svg>
`;
const Convert = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.192 4.25a.75.75 0 1 0 0 1.5h8.539c.69 0 1.25.56 1.25 1.25v7.728l-1.605-1.604a.75.75 0 0 0-1.06 1.06L18.2 17.07a.75.75 0 0 0 1.06 0l2.885-2.885a.75.75 0 0 0-1.06-1.06l-1.605 1.604V7a2.75 2.75 0 0 0-2.75-2.75zm7.231 15.5a.75.75 0 0 0 0-1.5H6.885c-.69 0-1.25-.56-1.25-1.25V9.272l1.604 1.604a.75.75 0 1 0 1.06-1.06L5.416 6.93a.75.75 0 0 0-1.06 0L1.47 9.816a.75.75 0 0 0 1.06 1.06l1.605-1.604V17a2.75 2.75 0 0 0 2.75 2.75z" clip-rule="evenodd"/>
  </svg>
`;
const Copy = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h8A2.75 2.75 0 0 1 16.75 6v1.25H18A2.75 2.75 0 0 1 20.75 10v8A2.75 2.75 0 0 1 18 20.75h-8A2.75 2.75 0 0 1 7.25 18v-1.25H6A2.75 2.75 0 0 1 3.25 14zm5.5 12c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25zm6.5-10.75H10A2.75 2.75 0 0 0 7.25 10v5.25H6c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z" clip-rule="evenodd"/>
  </svg>
`;
const CopyAsImgae = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.75 5A2.25 2.25 0 0 1 5 2.75h9A2.25 2.25 0 0 1 16.25 5v2.75H19A2.25 2.25 0 0 1 21.25 10v9A2.25 2.25 0 0 1 19 21.25h-9A2.25 2.25 0 0 1 7.75 19v-2.75H5A2.25 2.25 0 0 1 2.75 14zm12 0v2.75H10A2.25 2.25 0 0 0 7.75 10v4.75H5a.75.75 0 0 1-.75-.75V5A.75.75 0 0 1 5 4.25h9a.75.75 0 0 1 .75.75m-5.5 12.81V19c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-2.69l-.97-.969a.75.75 0 0 0-1.06 0l-.66.659.97.97a.75.75 0 1 1-1.06 1.06l-1.5-1.5-1.94-1.939a.75.75 0 0 0-1.06 0zM16 14.94l-1.409-1.41a2.25 2.25 0 0 0-3.182 0L9.25 15.69V10a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v4.194a2.25 2.25 0 0 0-3.091.086zm-.15-2.74a.85.85 0 1 0 0-1.7.85.85 0 0 0 0 1.7" clip-rule="evenodd"/>
  </svg>
`;
const Corner = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M4.8 3.25H3.25V4.8h1.5v-.05h.05zM8 3.25H6.4v1.5H8zM9.6 3.25v1.5H16A3.25 3.25 0 0 1 19.25 8v6.4h1.5V8A4.75 4.75 0 0 0 16 3.25zM3.25 6.4V8h1.5V6.4zM3.25 9.6v1.6h1.5V9.6zM3.25 12.8v1.6h1.5v-1.6zM20.75 17.6V16h-1.5v1.6zM3.25 16v1.6h1.5V16zM20.75 20.75V19.2h-1.5v.05h-.05v1.5zM4.75 19.2h-1.5v1.55H4.8v-1.5h-.05zM6.4 20.75H8v-1.5H6.4zM9.6 20.75h1.6v-1.5H9.6zM12.8 20.75h1.6v-1.5h-1.6zM16 20.75h1.6v-1.5H16z"/>
  </svg>
`;
const Created = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.75 3.5a.75.75 0 0 0-1.5 0v.75H5A2.75 2.75 0 0 0 2.25 7v12A2.75 2.75 0 0 0 5 21.75h6.5a.75.75 0 0 0 0-1.5H5c-.69 0-1.25-.56-1.25-1.25v-8.75h16.5v1.25a.75.75 0 0 0 1.5 0V7A2.75 2.75 0 0 0 19 4.25h-2.25V3.5a.75.75 0 0 0-1.5 0v.75h-6.5zm6.5 3v-.75h-6.5v.75a.75.75 0 0 1-1.5 0v-.75H5c-.69 0-1.25.56-1.25 1.25v1.75h16.5V7c0-.69-.56-1.25-1.25-1.25h-2.25v.75a.75.75 0 0 1-1.5 0m4.78 6.97a.75.75 0 0 0-1.06 0l-5.098 5.098a.75.75 0 0 0-.22.531l.004 2.224a.75.75 0 0 0 .749.75l2.224.003c.2 0 .39-.079.531-.22l5.098-5.098a.75.75 0 0 0 0-1.06zm-4.878 5.938 4.348-4.347 1.167 1.167-4.347 4.347-1.165-.002z" clip-rule="evenodd"/>
  </svg>
`;
const CreatedEdited = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M16.402 19.06a8.2 8.2 0 0 1-4.352 1.24 8.2 8.2 0 0 1-4.315-1.217 4.73 4.73 0 0 1 4.338-2.807 4.73 4.73 0 0 1 4.329 2.784m1.218-.924a6.24 6.24 0 0 0-5.547-3.36 6.24 6.24 0 0 0-5.561 3.389 8.25 8.25 0 1 1 11.109-.03m4.18-6.086c0 5.385-4.365 9.75-9.75 9.75S2.3 17.435 2.3 12.05 6.665 2.3 12.05 2.3s9.75 4.365 9.75 9.75M9.692 10.1c0-1.29 1.059-2.35 2.381-2.35 1.323 0 2.382 1.06 2.382 2.35s-1.059 2.35-2.382 2.35c-1.322 0-2.381-1.059-2.381-2.35m2.381-3.85c-2.136 0-3.881 1.717-3.881 3.85s1.745 3.85 3.881 3.85c2.137 0 3.882-1.716 3.882-3.85 0-2.133-1.745-3.85-3.882-3.85" clip-rule="evenodd"/>
  </svg>
`;
const Crop = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.667 3.25a.75.75 0 0 1 .75.75v10.489c0 .51 0 .848.021 1.106.02.25.057.36.09.427.1.194.256.35.45.45.067.033.176.07.427.09.258.02.596.021 1.106.021h5.156a.75.75 0 0 1 0 1.5H9.48c-.472 0-.871 0-1.199-.026-.342-.028-.672-.09-.985-.25a2.53 2.53 0 0 1-1.105-1.104c-.16-.313-.22-.643-.249-.985a16 16 0 0 1-.026-1.2V7.418H4a.75.75 0 0 1 0-1.5h1.917V4a.75.75 0 0 1 .75-.75m8.929 4.188a15 15 0 0 0-1.107-.021H9.333a.75.75 0 0 1 0-1.5h5.186c.472 0 .871 0 1.199.026.342.028.672.09.985.25.476.242.863.628 1.105 1.104.16.313.22.643.249.985.026.328.026.727.026 1.2v7.101H20a.75.75 0 0 1 0 1.5h-1.917V20a.75.75 0 0 1-1.5 0V9.511c0-.51 0-.848-.021-1.106-.02-.25-.057-.36-.09-.427a1.03 1.03 0 0 0-.45-.45c-.067-.033-.176-.07-.426-.09" clip-rule="evenodd"/>
  </svg>
`;
const CurveLine = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.95 6.066C14.2 4.301 16.353 3.25 20 3.25a.75.75 0 0 1 0 1.5c-3.352 0-4.95.949-5.825 2.184-.933 1.317-1.175 3.11-1.43 5.159l-.013.098c-.24 1.927-.51 4.088-1.682 5.742C9.8 19.7 7.648 20.75 4 20.75a.75.75 0 0 1 0-1.5c3.352 0 4.95-.949 5.825-2.183.933-1.318 1.175-3.11 1.43-5.16l.013-.098c.24-1.927.51-4.088 1.682-5.743" clip-rule="evenodd"/>
  </svg>
`;
const CustomSize = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h2.5a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v2.5a.75.75 0 0 1-1.5 0zm11.5-2a.75.75 0 0 1 .75-.75H18A2.75 2.75 0 0 1 20.75 6v2.5a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 0 1-.75-.75M4 14.75a.75.75 0 0 1 .75.75V18c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 18v-2.5a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75V18A2.75 2.75 0 0 1 18 20.75h-3a.75.75 0 0 1 0-1.5h3c.69 0 1.25-.56 1.25-1.25v-2.5a.75.75 0 0 1 .75-.75M7.25 9c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 15 16.75H9A1.75 1.75 0 0 1 7.25 15zM9 8.75a.25.25 0 0 0-.25.25v6c0 .138.112.25.25.25h6a.25.25 0 0 0 .25-.25V9a.25.25 0 0 0-.25-.25z" clip-rule="evenodd"/>
  </svg>
`;
const CustomizedHeight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M12.53 10.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L12 8.94l2.47-2.47a.75.75 0 1 1 1.06 1.06zM15.53 17.53a.75.75 0 0 1-1.06 0L12 15.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M11.25 21v-7h1.5v7a.75.75 0 0 1-1.5 0" clip-rule="evenodd"/>
  </svg>
`;
const DarkMode = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.33 3.47a.75.75 0 0 1 .187.748 7.425 7.425 0 0 0 9.265 9.265.75.75 0 0 1 .936.934A8.925 8.925 0 1 1 9.582 3.282a.75.75 0 0 1 .747.188M8.772 5.223a7.425 7.425 0 1 0 10.005 10.004A8.925 8.925 0 0 1 8.772 5.223" clip-rule="evenodd"/>
  </svg>
`;
const DashLine = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.53 3.53a.75.75 0 0 1 0 1.061l-3.189 3.19a.75.75 0 0 1-1.06-1.061l3.189-3.19a.75.75 0 0 1 1.06 0m-6.375 6.375a.75.75 0 0 1 0 1.061l-3.189 3.19a.75.75 0 0 1-1.06-1.061l3.189-3.19a.75.75 0 0 1 1.06 0M7.78 17.341a.75.75 0 0 0-1.06-1.06L3.53 19.47a.75.75 0 1 0 1.061 1.06z" clip-rule="evenodd"/>
  </svg>
`;
const DatabaseKanbanView = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.5 3.75A1.75 1.75 0 0 0 3.75 5.5V18c0 .966.784 1.75 1.75 1.75h4A1.75 1.75 0 0 0 11.25 18V5.5A1.75 1.75 0 0 0 9.5 3.75zM5.25 5.5a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25V18a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25zm9.25-1.75a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75zm-.25 1.75a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25z" clip-rule="evenodd"/>
  </svg>
`;
const DatabaseListView = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V6A2.75 2.75 0 0 0 19 3.25zM3.75 6c0-.69.56-1.25 1.25-1.25h2.25v3.5h-3.5zm3.5 3.75h-3.5v3.5h3.5zm1.5 3.5v-3.5h11.5v3.5zm-1.5 1.5h-3.5V18c0 .69.56 1.25 1.25 1.25h2.25zm1.5 4.5v-4.5h11.5V18c0 .69-.56 1.25-1.25 1.25zm0-11v-3.5H19c.69 0 1.25.56 1.25 1.25v2.25z" clip-rule="evenodd"/>
  </svg>
`;
const DatabaseTableView = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h12A2.75 2.75 0 0 1 20.75 6v12A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18zM6 4.75c-.69 0-1.25.56-1.25 1.25v2.25h14.5V6c0-.69-.56-1.25-1.25-1.25zM4.75 18V9.75h3v9.5H6c-.69 0-1.25-.56-1.25-1.25m4.5 1.25H18c.69 0 1.25-.56 1.25-1.25V9.75h-10z" clip-rule="evenodd"/>
  </svg>
`;
const DateTime = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.205 2.787c.393 0 .712.319.712.712v.711h6.166V3.5a.712.712 0 0 1 1.423 0v.711h2.135a2.61 2.61 0 0 1 2.609 2.61v11.384a2.61 2.61 0 0 1-2.609 2.609H5.359a2.61 2.61 0 0 1-2.609-2.61V6.82A2.61 2.61 0 0 1 5.359 4.21h2.135V3.5c0-.393.318-.712.711-.712m6.878 2.846v.712a.712.712 0 0 0 1.423 0v-.712h2.135c.655 0 1.186.531 1.186 1.186v1.66H4.173V6.82c0-.655.531-1.186 1.186-1.186h2.135v.712a.712.712 0 1 0 1.423 0v-.712zm-10.91 4.27h15.654v8.3c0 .656-.531 1.187-1.186 1.187H5.359c-.655 0-1.186-.531-1.186-1.186z" clip-rule="evenodd"/>
  </svg>
`;
const Delete = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11 2.25A2.75 2.75 0 0 0 8.25 5v1.15H4a.85.85 0 0 0 0 1.7h.309l.81 11.346a2.75 2.75 0 0 0 2.743 2.554h8.276a2.75 2.75 0 0 0 2.743-2.554l.81-11.346H20a.85.85 0 0 0 0-1.7h-4.25V5A2.75 2.75 0 0 0 13 2.25zm3.25 3.9V5c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v1.15zm3.937 1.7H5.813l.802 11.24a1.25 1.25 0 0 0 1.247 1.16h8.276c.656 0 1.2-.507 1.247-1.16zM10.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm3.25-.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const DeletePermanently = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.25 5A2.75 2.75 0 0 1 11 2.25h2A2.75 2.75 0 0 1 15.75 5v1.25H20a.75.75 0 0 1 0 1.5h-.302l-.817 11.446a2.75 2.75 0 0 1-2.743 2.554H7.862a2.75 2.75 0 0 1-2.743-2.554L4.302 7.75H4a.75.75 0 0 1 0-1.5h4.25zm6 0v1.25h-4.5V5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25M5.805 7.75h12.39l-.81 11.34a1.25 1.25 0 0 1-1.247 1.16H7.862a1.25 1.25 0 0 1-1.247-1.16zm4.725 3.22a.75.75 0 1 0-1.06 1.06l1.47 1.47-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 14.56l1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47 1.47-1.47a.75.75 0 1 0-1.06-1.06L12 12.44z" clip-rule="evenodd"/>
  </svg>
`;
const DeleteTemporarily = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11 2.25A2.75 2.75 0 0 0 8.25 5v1.25H4a.75.75 0 0 0 0 1.5h.302l.817 11.446a2.75 2.75 0 0 0 2.743 2.554H10.5a.75.75 0 0 0 0-1.5H7.862a1.25 1.25 0 0 1-1.247-1.16l-.81-11.34h12.39l-.229 3.197a.75.75 0 1 0 1.496.106l.236-3.303H20a.75.75 0 0 0 0-1.5h-4.25V5A2.75 2.75 0 0 0 13 2.25zm3.25 4V5c0-.69-.56-1.25-1.25-1.25h-2c-.69 0-1.25.56-1.25 1.25v1.25zM10.75 11a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm3.25-.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m3 4.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5M12.25 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m5.5-1.5a.75.75 0 0 0-1.5 0V18c0 .199.079.39.22.53l1 1a.75.75 0 1 0 1.06-1.06l-.78-.78z" clip-rule="evenodd"/>
  </svg>
`;
const Diagonally_2Lines = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.707 17.435a1 1 0 1 0 1.414 1.414L18.85 6.121a1 1 0 1 0-1.414-1.414zm7.071 1.414a1 1 0 0 0 1.414 1.414l7.072-7.07a1 1 0 0 0-1.415-1.415z" clip-rule="evenodd"/>
  </svg>
`;
const Diamond = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 1.94 22.06 12 12 22.06 1.94 12zM4.06 12 12 19.94 19.94 12 12 4.06z" clip-rule="evenodd"/>
  </svg>
`;
const Discord = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M18.923 5.647a16.2 16.2 0 0 0-4.067-1.267.09.09 0 0 0-.067.029c-.171.314-.371.723-.505 1.038a15.3 15.3 0 0 0-4.571 0 10 10 0 0 0-.515-1.038c-.01-.02-.038-.029-.066-.029-1.429.248-2.79.676-4.067 1.267-.01 0-.02.01-.029.019-2.59 3.876-3.304 7.648-2.952 11.381q0 .032.029.048a16.6 16.6 0 0 0 4.99 2.524c.029.01.057 0 .067-.02.38-.523.724-1.076 1.019-1.657.019-.038 0-.076-.038-.085a12 12 0 0 1-1.562-.743c-.038-.02-.038-.076-.01-.105.105-.076.21-.162.315-.238.019-.02.047-.02.066-.01 3.277 1.496 6.81 1.496 10.048 0a.06.06 0 0 1 .067.01c.105.086.21.162.314.247.038.03.038.086-.01.105a10 10 0 0 1-1.561.743c-.038.01-.048.057-.038.086.304.58.647 1.133 1.019 1.657.028.01.057.02.085.01a16.5 16.5 0 0 0 5-2.524.05.05 0 0 0 .03-.048c.418-4.314-.696-8.057-2.953-11.381-.01-.01-.02-.02-.038-.02M8.683 14.77c-.98 0-1.8-.905-1.8-2.02s.8-2.018 1.8-2.018c1.01 0 1.81.914 1.8 2.019 0 1.114-.8 2.019-1.8 2.019m6.638 0c-.98 0-1.8-.905-1.8-2.02s.8-2.018 1.8-2.018c1.01 0 1.81.914 1.8 2.019 0 1.114-.79 2.019-1.8 2.019"/>
  </svg>
`;
const DistributeHorizontal = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 5 3.25m14 0a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75M10.5 16a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1z" clip-rule="evenodd"/>
  </svg>
`;
const DistributeVertical = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.75 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75m0 14a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75M7.5 10.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" clip-rule="evenodd"/>
  </svg>
`;
const Divider = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4 4.25a.75.75 0 0 1 .75.75v1c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V5a.75.75 0 0 1 1.5 0v1A2.75 2.75 0 0 1 18 8.75H6A2.75 2.75 0 0 1 3.25 6V5A.75.75 0 0 1 4 4.25m0 15.5a.75.75 0 0 0 .75-.75v-1c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v1a.75.75 0 0 0 1.5 0v-1A2.75 2.75 0 0 0 18 15.25H6A2.75 2.75 0 0 0 3.25 18v1c0 .414.336.75.75.75m-1-8.5a.75.75 0 0 0 0 1.5h1.2a.75.75 0 0 0 0-1.5H3m3.45.75a.75.75 0 0 1 .75-.75h1.2a.75.75 0 0 1 0 1.5H7.2a.75.75 0 0 1-.75-.75m4.95-.75a.75.75 0 0 0 0 1.5h1.2a.75.75 0 0 0 0-1.5h-1.2m3.45.75a.75.75 0 0 1 .75-.75h1.2a.75.75 0 0 1 0 1.5h-1.2a.75.75 0 0 1-.75-.75m4.95-.75a.75.75 0 0 0 0 1.5H21a.75.75 0 0 0 0-1.5h-1.2" clip-rule="evenodd"/>
  </svg>
`;
const Docs = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4 17.593V6.407c0-.903.353-1.77.98-2.409A3.32 3.32 0 0 1 7.35 3h9.302c.448 0 .812.37.812.826v11.186l-.003.075a.83.83 0 0 1-.253.527.8.8 0 0 1-.556.223H7.35q-.241 0-.469.066a1.75 1.75 0 0 0-1.256 1.69c0 .465.181.912.505 1.24.324.33.762.515 1.22.515h11.027V4.686c0-.456.364-.826.812-.826s.812.37.812.826v15.488a.82.82 0 0 1-.812.826H7.348a3.32 3.32 0 0 1-2.367-.998A3.44 3.44 0 0 1 4 17.592m3.772-.826a.82.82 0 0 0-.812.826c0 .456.363.826.812.826h8.456c.449 0 .812-.37.812-.826a.82.82 0 0 0-.812-.826z" clip-rule="evenodd"/>
  </svg>
`;
const Done = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19.53 6.47a.75.75 0 0 1 0 1.06l-10 10a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L9 15.94l9.47-9.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const Download = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.75 4.75a.75.75 0 0 0-1.5 0v8.69l-2.22-2.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22zm-8 6A.25.25 0 0 1 5 10.5h1A.75.75 0 0 0 6 9H5a1.75 1.75 0 0 0-1.75 1.75v7A2.75 2.75 0 0 0 6 20.5h12a2.75 2.75 0 0 0 2.75-2.75v-7A1.75 1.75 0 0 0 19 9h-1a.75.75 0 0 0 0 1.5h1a.25.25 0 0 1 .25.25v7c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const DragCursor = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.694 3.62c.271-.661.934-1.12 1.693-1.12.993 0 1.823.786 1.823 1.786v.12c.248-.123.528-.192.822-.192.993 0 1.823.786 1.823 1.786v.978c.248-.123.528-.192.822-.192.994 0 1.823.786 1.823 1.785v6c0 3.84-3.198 6.929-7.113 6.929-.96 0-1.884-.131-2.777-.547-.893-.415-1.717-1.098-2.505-2.146l-3.208-4.001a1.755 1.755 0 0 1 .14-2.376 1.845 1.845 0 0 1 2.592.031l.563.653c.308.376.54.631.714.795v-.01c.015-.235.014-.525.013-.875V5.142c0-.999.83-1.785 1.823-1.785.347 0 .674.096.952.264m.87 7.523a.5.5 0 1 1-1 0v-6c0-.42-.354-.786-.822-.786s-.823.365-.823.786v7.865c.001.352.002.683-.015.952-.01.164-.027.329-.062.475a1 1 0 0 1-.236.467.69.69 0 0 1-.64.196 1.2 1.2 0 0 1-.497-.246c-.28-.214-.623-.582-1.046-1.099l-.535-.62a.845.845 0 0 0-1.153.014.756.756 0 0 0-.062 1.028l.003.003 3.214 4.01.01.012c.71.948 1.415 1.513 2.132 1.847.719.334 1.488.453 2.355.453 3.39 0 6.113-2.668 6.113-5.929v-6c0-.42-.355-.785-.823-.785s-.822.365-.822.785V12a.5.5 0 0 1-1 0V6c0-.42-.355-.786-.823-.786s-.822.365-.822.786v5.143a.5.5 0 0 1-1 0V4.286c0-.421-.355-.786-.823-.786s-.823.365-.823.786z" clip-rule="evenodd"/><path fill='currentColor' d="M11.064 11.643a.5.5 0 0 0 .5-.5V4.286c0-.421.355-.786.823-.786s.823.365.823.786v6.857a.5.5 0 1 0 1 0V6c0-.42.354-.786.822-.786s.823.365.823.786v6a.5.5 0 1 0 1 0V8.571c0-.42.355-.785.822-.785.468 0 .823.365.823.785v6c0 3.261-2.724 5.929-6.113 5.929-.867 0-1.636-.119-2.355-.453-.717-.334-1.421-.9-2.132-1.847l-.01-.013-3.214-4.009-.003-.003a.756.756 0 0 1 .062-1.028.845.845 0 0 1 1.153-.014l.535.62c.423.517.766.885 1.046 1.099.138.104.306.209.496.246a.69.69 0 0 0 .641-.196 1 1 0 0 0 .236-.467c.035-.146.052-.31.062-.475.017-.27.016-.6.015-.952V5.143c0-.42.355-.785.823-.785s.822.365.822.786v6a.5.5 0 0 0 .5.5"/>
  </svg>
`;
const DropCursor = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.694 8.335c.271-.662.934-1.12 1.693-1.12.748 0 1.402.445 1.68 1.091.282-.172.613-.27.965-.27.993 0 1.823.786 1.823 1.785v.086c.248-.124.528-.193.822-.193.994 0 1.823.786 1.823 1.786v3.071c0 3.84-3.198 6.929-7.113 6.929-.96 0-1.884-.131-2.777-.547s-1.72-1.1-2.509-2.151l-2.015-2.634a1.755 1.755 0 0 1 .144-2.371 1.845 1.845 0 0 1 2.561 0l.009.008.118.122a84 84 0 0 0 .001-1.145V9.857c0-1 .83-1.786 1.823-1.786.347 0 .674.096.952.264m-.13 1.522c0-.42-.354-.786-.822-.786s-.823.365-.823.786v3.334q.003.706-.007 1.116c-.006.174-.015.33-.035.457a.9.9 0 0 1-.176.442.58.58 0 0 1-.359.2.6.6 0 0 1-.337-.048 1.2 1.2 0 0 1-.317-.228 10 10 0 0 1-.31-.32c-.093-.097-.19-.201-.287-.3a.845.845 0 0 0-1.164.004.756.756 0 0 0-.061 1.028l.01.013L7.9 18.2c.71.948 1.415 1.513 2.132 1.847.719.334 1.488.453 2.355.453 3.39 0 6.113-2.668 6.113-5.929V11.5c0-.42-.355-.786-.823-.786s-.822.365-.822.786v.5a.5.5 0 0 1-1 0V9.821c0-.42-.355-.785-.823-.785s-.822.365-.822.785v1.322a.5.5 0 1 1-1 0V9c0-.42-.355-.786-.823-.786s-.823.365-.823.786v2.143a.5.5 0 1 1-1 0z" clip-rule="evenodd"/><path fill='currentColor' d="M9.742 9.071c.467 0 .822.365.822.786v1.286a.5.5 0 1 0 1 0V9c0-.42.355-.786.823-.786s.822.365.822.786v2.143a.5.5 0 1 0 1 0V9.82c0-.42.355-.785.823-.785s.823.365.823.785V12a.5.5 0 1 0 1 0v-.5c0-.42.355-.786.822-.786.468 0 .823.365.823.786v3.071c0 3.261-2.724 5.929-6.113 5.929-.867 0-1.636-.119-2.355-.453-.717-.334-1.421-.9-2.132-1.847l-2.025-2.645-.01-.013a.756.756 0 0 1 .062-1.028.845.845 0 0 1 1.164-.003c.096.098.194.202.286.299.121.128.23.244.31.32.072.067.184.169.318.228.075.033.194.07.337.049a.58.58 0 0 0 .359-.2.9.9 0 0 0 .176-.443q.029-.194.035-.457.01-.41.007-1.116V9.857c0-.42.355-.786.823-.786"/>
  </svg>
`;
const DualLink = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.667 6.2a.75.75 0 0 1 0-1.5H19a.75.75 0 0 1 .75.75v8.333a.75.75 0 0 1-1.5 0V7.261L6.53 18.98a.75.75 0 1 1-1.06-1.061L17.19 6.2z" clip-rule="evenodd"/>
  </svg>
`;
const Duplicate = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v8A2.75 2.75 0 0 0 6 16.75h1.25V18A2.75 2.75 0 0 0 10 20.75h8A2.75 2.75 0 0 0 20.75 18v-8A2.75 2.75 0 0 0 18 7.25h-1.25V6A2.75 2.75 0 0 0 14 3.25zm4 4h5.25V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2a.75.75 0 0 1 .75.75v2c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25h-8a1.25 1.25 0 0 0-1.17.81.75.75 0 0 1-1.405-.528A2.75 2.75 0 0 1 10 7.25m2.887 3.239a.75.75 0 1 0-1.098 1.022l.688.739H7.8a.75.75 0 0 0 0 1.5h4.677l-.688.739a.75.75 0 0 0 1.098 1.022l1.862-2a.75.75 0 0 0 0-1.022z" clip-rule="evenodd"/>
  </svg>
`;
const Edgeless = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.168 4.75a1.868 1.868 0 1 0 0 3.736 1.868 1.868 0 0 0 0-3.736M3.8 6.618a3.368 3.368 0 0 1 6.729-.226c.842 0 1.651.014 2.493.217.933.226 1.865.672 2.975 1.504l.02.015.02.017c1.566 1.35 2.35 3.533 2.354 5.578h1.66a.75.75 0 0 1 .75.75v4.713a.75.75 0 0 1-.75.75h-4.714a.75.75 0 0 1-.75-.75v-4.713a.75.75 0 0 1 .75-.75h1.554c-.004-1.705-.663-3.42-1.815-4.426-.975-.728-1.719-1.064-2.406-1.23-.712-.172-1.407-.175-2.36-.175v-.057a3.38 3.38 0 0 1-2.392 2.068v3.904a3.37 3.37 0 0 1-.75 6.652 3.368 3.368 0 0 1-.75-6.652V9.903A3.37 3.37 0 0 1 3.8 6.618m3.368 8.605a1.868 1.868 0 1 0 0 3.736 1.868 1.868 0 0 0 0-3.736m8.92 3.213v-3.213H19.3v3.213z" clip-rule="evenodd"/>
  </svg>
`;
const Edit = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18.303 4.498a.85.85 0 0 1 1.2 0c.33.33.33.863 0 1.192l-.43.428-1.196-1.195zm-1.488 1.485 1.197 1.195-7.086 7.072H9.75v-1.216zm3.747-2.547a2.35 2.35 0 0 0-3.318 0L8.47 12.192a.75.75 0 0 0-.22.531V15c0 .414.336.75.75.75h2.236a.75.75 0 0 0 .53-.22l8.796-8.778c.917-.915.917-2.4 0-3.316M4.75 6c0-.69.56-1.25 1.25-1.25h6a.75.75 0 0 0 0-1.5H6A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18v-6a.75.75 0 0 0-1.5 0v6c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const ElbowedLine = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.25 7A2.75 2.75 0 0 1 14 4.25h7a.75.75 0 0 1 0 1.5h-7c-.69 0-1.25.56-1.25 1.25v10A2.75 2.75 0 0 1 10 19.75H3a.75.75 0 0 1 0-1.5h7c.69 0 1.25-.56 1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const Ellipse = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/>
  </svg>
`;
const Ellipsis = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <circle cx="6" cy="20" r="1" fill='currentColor'/><circle cx="12" cy="20" r="1" fill='currentColor'/><circle cx="18" cy="20" r="1" fill='currentColor'/>
  </svg>
`;
const Email = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17V7m1.5 2.401V17c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V9.401l-6.725 4.483a2.75 2.75 0 0 1-3.05 0zM20.25 7.6l-7.557 5.037c-.42.28-.966.28-1.386 0L3.75 7.6V7c0-.69.56-1.25 1.25-1.25h14c.69 0 1.25.56 1.25 1.25z" clip-rule="evenodd"/>
  </svg>
`;
const EmbedWeb = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V6A2.75 2.75 0 0 0 19 3.25zm15.25 5V6c0-.69-.56-1.25-1.25-1.25H5c-.69 0-1.25.56-1.25 1.25v2.25zm-16.5 1.5h16.5V18c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25zm6.78 3.28a.75.75 0 1 0-1.06-1.06L7.348 14.09a.75.75 0 0 0 0 1.06l2.122 2.122a.75.75 0 1 0 1.06-1.06L8.94 14.62zm2.94-1.06a.75.75 0 0 0 0 1.06l1.59 1.591-1.59 1.591a.75.75 0 0 0 1.06 1.061l2.122-2.121a.75.75 0 0 0 0-1.06L14.53 11.97a.75.75 0 0 0-1.06 0M6.5 6.55a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clip-rule="evenodd"/>
  </svg>
`;
const Empty = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.016-10.995a.75.75 0 0 1 0 1.06L13.07 12.01l1.945 1.945a.75.75 0 1 1-1.061 1.06l-1.945-1.944-1.944 1.945a.75.75 0 1 1-1.06-1.061l1.944-1.945-1.945-1.944a.75.75 0 0 1 1.06-1.06l1.945 1.944 1.945-1.945a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const EndPointArrow = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M16.47 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H3a.75.75 0 0 1 0-1.5h16.19l-2.72-2.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const EndPointCircle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M18 8.25a3.75 3.75 0 0 0-3.675 3H3a.75.75 0 0 0 0 1.5h11.325A3.751 3.751 0 0 0 21.75 12 3.75 3.75 0 0 0 18 8.25"/>
  </svg>
`;
const EndPointDiamond = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M17.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-2.78-2.78H3a.75.75 0 0 1 0-1.5h11.69z"/>
  </svg>
`;
const EndPointTriangle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M17.53 7.47a.75.75 0 0 0-1.28.53v3.25H3a.75.75 0 0 0 0 1.5h13.25V16a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0 0-1.06z"/>
  </svg>
`;
const Enter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.5 5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-.75.75H6.547l3.352 3.39a.75.75 0 1 1-1.067 1.054l-4.615-4.667a.75.75 0 0 1 0-1.054l4.615-4.667A.75.75 0 0 1 9.9 9.36L6.547 12.75H18v-7h-3.75A.75.75 0 0 1 13.5 5" clip-rule="evenodd"/>
  </svg>
`;
const Eq = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.5 10.25h11v-1.5h-11zm0 5.5h11v-1.5h-11z" clip-rule="evenodd"/>
  </svg>
`;
const Eraser = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.806 4.95a1.23 1.23 0 0 0-.873.362L12.36 6.885l5.954 5.956 1.575-1.575a1.234 1.234 0 0 0 0-1.745l-4.21-4.209a1.24 1.24 0 0 0-.873-.362m2.448 8.952-5.955-5.956-7.188 7.188a1.235 1.235 0 0 0 0 1.745l1.524 1.524c.231.23.546.36.873.36h5.883zm-2.741 4.862h5.113a.75.75 0 0 1 0 1.5H6.508c-.725 0-1.42-.288-1.933-.8L3.05 17.94a2.734 2.734 0 0 1 0-3.867l9.82-9.821a2.734 2.734 0 0 1 3.87 0l4.208 4.208a2.734 2.734 0 0 1 0 3.867z" clip-rule="evenodd"/>
  </svg>
`;
const Expand = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.53 9.53a.75.75 0 0 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1-1.06 1.06L12 5.06zm0 4.94a.75.75 0 0 0-1.06 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06L12 18.94z" clip-rule="evenodd"/>
  </svg>
`;
const ExpandClose = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.53 3.47a.75.75 0 0 1 0 1.06l-4.22 4.22h2.19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19l4.22-4.22a.75.75 0 0 1 1.06 0M5.5 15.25a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-2.19l-4.22 4.22a.75.75 0 0 1-1.06-1.06l4.22-4.22z" clip-rule="evenodd"/>
  </svg>
`;
const ExpandFull = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15.25 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V5.81l-4.22 4.22a.75.75 0 1 1-1.06-1.06l4.22-4.22H16a.75.75 0 0 1-.75-.75m-5.22 9.97a.75.75 0 0 1 0 1.06l-4.22 4.22H8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19l4.22-4.22a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const ExpandWide = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 5A.75.75 0 0 1 5 4.25h3.5a.75.75 0 0 1 0 1.5H6.81l3.095 3.095a.75.75 0 0 1-1.06 1.06L5.75 6.811V8.5a.75.75 0 0 1-1.5 0zm10.5 0a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V6.81l-3.095 3.095a.75.75 0 1 1-1.06-1.06l3.094-3.095H15.5a.75.75 0 0 1-.75-.75m-4.845 9.095a.75.75 0 0 1 0 1.06L6.811 18.25H8.5a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69l3.095-3.095a.75.75 0 0 1 1.06 0m4.19 0a.75.75 0 0 1 1.06 0l3.095 3.094V15.5a.75.75 0 0 1 1.5 0V19a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69l-3.095-3.095a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const Experiment = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.624 3.584a.75.75 0 0 1-.208 1.04l-.745.497a8.75 8.75 0 0 1-6.92 12.93v1.199h3.693a.75.75 0 0 1 0 1.5H7.556a.75.75 0 0 1 0-1.5h3.694v-1.198a8.74 8.74 0 0 1-6.088-3.259l-.746.498a.75.75 0 1 1-.832-1.248l1.333-.89a.75.75 0 0 1 .423-.125.75.75 0 0 1 .63.333 7.25 7.25 0 0 0 12.072-8.036.75.75 0 0 1-.125-.428.75.75 0 0 1 .334-.632l1.333-.889a.75.75 0 0 1 1.04.208M12 5.639a3.694 3.694 0 1 0 0 7.389 3.694 3.694 0 0 0 0-7.39M6.806 9.333a5.194 5.194 0 1 1 10.388 0 5.194 5.194 0 0 1-10.388 0" clip-rule="evenodd"/>
  </svg>
`;
const Explain = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 5.25a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75h2a.75.75 0 0 0 0-1.5H5.75V6.75H7a.75.75 0 0 0 0-1.5zm14 0a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h1.25V6.75H17a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Export = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.47 3.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V16a.75.75 0 0 1-1.5 0V5.81L8.53 8.53a.75.75 0 0 1-1.06-1.06zM4 15.25a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 1.5 0v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const ExportToHtml = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062zM2.769 13.771c0 .381.206.596.569.596.362 0 .57-.215.57-.596v-.97H5.27v.97c0 .381.207.596.57.596.362 0 .57-.215.57-.596v-2.817c0-.382-.208-.596-.57-.596-.363 0-.57.214-.57.596v.942H3.907v-.942c0-.382-.207-.596-.57-.596-.362 0-.568.214-.568.596zm5.051 0c0 .381.207.596.57.596.362 0 .569-.215.569-.596v-2.439h.572c.3 0 .502-.163.502-.453s-.196-.454-.502-.454H7.248c-.306 0-.502.164-.502.454s.201.454.502.454h.572zm3.046.596c-.317 0-.497-.19-.497-.526v-2.737c0-.478.263-.746.738-.746.4 0 .613.158.774.58l.671 1.748h.021l.67-1.748c.16-.422.373-.58.773-.58.475 0 .738.268.738.746v2.737c0 .336-.18.526-.497.526s-.496-.19-.496-.526v-1.786h-.022l-.77 1.942c-.079.196-.202.284-.404.284-.204 0-.335-.091-.41-.284l-.771-1.942h-.022v1.786c0 .336-.18.526-.496.526m4.428-.663c0 .381.207.596.57.596h1.64c.306 0 .502-.164.502-.454s-.201-.454-.502-.454h-1.071v-2.438c0-.382-.207-.596-.57-.596-.362 0-.57.214-.57.596z" clip-rule="evenodd"/>
  </svg>
`;
const ExportToMarkdown = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.769 13.84c0 .337.18.527.496.527.317 0 .497-.19.497-.526v-1.786h.022l.77 1.942c.076.193.207.284.411.284.202 0 .325-.088.403-.284l.77-1.942h.022v1.786c0 .336.18.526.497.526s.497-.19.497-.526v-2.737c0-.478-.263-.746-.738-.746-.4 0-.613.158-.774.58l-.669 1.748h-.021l-.671-1.748c-.162-.422-.374-.58-.774-.58-.475 0-.738.268-.738.746zm4.925-.136c0 .381.207.596.57.596H9.35c1.173 0 1.866-.725 1.866-1.966 0-1.24-.69-1.91-1.866-1.91H8.263c-.362 0-.57.216-.57.597zm1.496-.309h-.357V11.33h.357c.545 0 .867.352.867 1.004 0 .715-.298 1.061-.867 1.061" clip-rule="evenodd"/>
  </svg>
`;
const ExportToPdf = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.42c0 .417.226.651.621.651h1.187c1.28 0 2.036-.791 2.036-2.145 0-1.353-.753-2.082-2.036-2.082H7.357c-.395 0-.62.234-.62.65zm1.632-.336h-.39V11.26h.39c.595 0 .946.384.946 1.095 0 .78-.325 1.158-.946 1.158m2.698.41c0 .416.226.65.621.65.396 0 .622-.234.622-.65v-.92h1.113c.316 0 .51-.17.51-.466s-.2-.466-.51-.466h-1.113v-.808h1.239c.328 0 .548-.179.548-.495 0-.317-.214-.495-.548-.495h-1.86c-.396 0-.622.234-.622.65z" clip-rule="evenodd"/>
  </svg>
`;
const ExportToPng = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.793 13.923c0 .416.226.65.621.65.396 0 .621-.234.621-.65v-.577h.604c.987 0 1.658-.6 1.658-1.533 0-.94-.633-1.54-1.573-1.54h-1.31c-.395 0-.621.234-.621.65zm1.59-1.494h-.348v-1.222h.358c.404 0 .65.208.65.61 0 .404-.246.612-.66.612m2.353 1.529c0 .398.214.615.586.615.37 0 .586-.217.586-.615v-1.685h.024l1.444 1.96c.176.24.343.34.58.34.37 0 .571-.202.571-.574v-3.184c0-.399-.213-.616-.586-.616-.369 0-.586.217-.586.616v1.649h-.023l-1.433-1.925c-.178-.237-.351-.34-.577-.34-.38 0-.586.2-.586.574zm4.275-1.576c0 1.403.794 2.191 2.136 2.191 1.26 0 1.957-.773 1.957-1.778 0-.416-.226-.65-.622-.65h-.817c-.281 0-.46.146-.46.413 0 .266.182.413.46.413h.243l-.006.058c-.035.34-.322.566-.726.566-.545 0-.9-.46-.9-1.23 0-.754.31-1.187.838-1.187.3 0 .501.111.7.378a.68.68 0 0 0 .58.296c.317 0 .534-.214.534-.525a.65.65 0 0 0-.085-.32c-.25-.444-.888-.808-1.735-.808-1.303 0-2.097.797-2.097 2.183" clip-rule="evenodd"/>
  </svg>
`;
const ExportToSvg = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v3a.75.75 0 0 0 1.5 0V5c0-.69.56-1.25 1.25-1.25h7.522c.386 0 .75.178.987.483l2.478 3.186c.17.22.263.49.263.767V18c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 0 0-1.5 0V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V8.186a2.75 2.75 0 0 0-.58-1.688l-2.477-3.186a2.75 2.75 0 0 0-2.171-1.062H8M2.787 13.674c.167.379.672.693 1.545.693 1.068 0 1.691-.507 1.691-1.305 0-.628-.392-.97-1.224-1.12l-.39-.07c-.386-.07-.553-.153-.553-.327s.161-.315.478-.315c.245 0 .425.073.55.266.138.207.29.29.532.29.285-.002.473-.177.473-.435a.6.6 0 0 0-.048-.239c-.202-.483-.752-.754-1.52-.754-.921 0-1.593.491-1.593 1.27 0 .601.422.99 1.193 1.128l.39.07c.434.077.585.155.585.338 0 .19-.21.33-.551.33-.255 0-.48-.078-.615-.268-.153-.215-.298-.282-.513-.282-.282 0-.489.188-.489.462q0 .134.06.268m4.354-.024c.177.497.467.717.948.717.478 0 .773-.223.948-.717l.867-2.455a.9.9 0 0 0 .051-.3c0-.32-.236-.537-.588-.537-.309 0-.486.14-.572.448l-.663 2.414H8.11l-.671-2.398c-.089-.32-.274-.464-.596-.464-.363 0-.61.228-.61.558q.002.178.05.32zm3.015-1.292c0 1.287.728 2.01 1.958 2.01 1.155 0 1.794-.71 1.794-1.631 0-.381-.207-.596-.57-.596h-.748c-.258 0-.422.134-.422.379 0 .244.167.378.422.378h.223l-.006.054c-.032.311-.295.518-.666.518-.5 0-.824-.421-.824-1.128 0-.69.284-1.087.768-1.087.274 0 .459.102.642.346.14.185.308.271.531.271.29 0 .49-.196.49-.48a.6.6 0 0 0-.079-.293c-.228-.408-.814-.741-1.59-.741-1.195 0-1.923.73-1.923 2" clip-rule="evenodd"/>
  </svg>
`;
const Favorite = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.362 3.22c.57-1.51 2.707-1.51 3.276 0l1.56 4.144a.25.25 0 0 0 .223.162l4.423.203c1.613.075 2.273 2.107 1.012 3.115l-3.459 2.765a.25.25 0 0 0-.085.262l1.173 4.27c.428 1.556-1.3 2.812-2.65 1.924l-3.698-2.435a.25.25 0 0 0-.274 0l-3.699 2.435c-1.348.888-3.077-.368-2.65-1.925l1.174-4.27a.25.25 0 0 0-.085-.26l-3.459-2.766c-1.261-1.008-.6-3.04 1.012-3.115l4.423-.203a.25.25 0 0 0 .223-.162zm1.872.529a.25.25 0 0 0-.468 0l-1.56 4.144a1.75 1.75 0 0 1-1.558 1.131l-4.423.204a.25.25 0 0 0-.144.445l3.458 2.765a1.75 1.75 0 0 1 .595 1.83l-1.173 4.27a.25.25 0 0 0 .378.275l3.699-2.435a1.75 1.75 0 0 1 1.924 0l3.698 2.435a.25.25 0 0 0 .379-.275l-1.173-4.27a1.75 1.75 0 0 1 .595-1.83l3.458-2.765a.25.25 0 0 0-.144-.445l-4.423-.204a1.75 1.75 0 0 1-1.558-1.131z" clip-rule="evenodd"/>
  </svg>
`;
const Favorited = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.638 3.22c-.57-1.51-2.707-1.51-3.276 0l-1.56 4.144a.25.25 0 0 1-.223.162l-4.423.203c-1.613.075-2.273 2.107-1.012 3.115l3.459 2.765a.25.25 0 0 1 .085.262l-1.173 4.27c-.428 1.556 1.3 2.812 2.65 1.924l3.698-2.435a.25.25 0 0 1 .274 0l3.699 2.435c1.348.888 3.077-.368 2.65-1.925l-1.174-4.27a.25.25 0 0 1 .085-.26l3.459-2.766c1.261-1.008.6-3.04-1.012-3.115l-4.423-.203a.25.25 0 0 1-.223-.162z" clip-rule="evenodd"/>
  </svg>
`;
const FigmaDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M8.418 22.503a3.42 3.42 0 0 0 3.418-3.417v-3.417H8.418a3.418 3.418 0 0 0 0 6.834"/><path fill='currentColor' d="M5.001 12.251a3.42 3.42 0 0 1 3.417-3.417h3.418v6.835H8.418a3.42 3.42 0 0 1-3.417-3.418"/><path fill='currentColor' d="M5.001 5.417A3.42 3.42 0 0 1 8.42 2h3.417v6.834H8.419A3.42 3.42 0 0 1 5 5.417"/><path fill='currentColor' d="M11.836 2h3.417a3.418 3.418 0 0 1 0 6.834h-3.417z"/><path fill='currentColor' d="M18.67 12.251a3.418 3.418 0 0 1-6.834 0 3.418 3.418 0 0 1 6.834 0"/>
  </svg>
`;
const File = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.17 2.25H13a.75.75 0 0 1 .53.22l6 6c.141.14.22.331.22.53v8.83c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27A2.75 2.75 0 0 1 4.55 20.25c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345V6.17c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 2.55c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03M6.947 3.775c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v11.6c0 .572 0 .957.025 1.252.023.288.065.425.111.515.12.236.311.427.547.547.09.046.227.088.514.111.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515.024-.295.025-.68.025-1.252V9.75H14A1.75 1.75 0 0 1 12.25 8V3.75H8.2c-.572 0-.957 0-1.253.025M13.75 4.81l3.44 3.439H14a.25.25 0 0 1-.25-.25z" clip-rule="evenodd"/>
  </svg>
`;
const Filter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-4 6.5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm.25 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M11 14.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const FilterMinus = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 11.526a7.776 7.776 0 0 1 15.553 0 .75.75 0 0 0 1.5 0q0-.522-.057-1.03c-.513-4.638-4.444-8.246-9.22-8.246a9.276 9.276 0 0 0-9.276 9.276c0 4.776 3.608 8.707 8.247 9.22q.507.057 1.03.057a.75.75 0 0 0 0-1.5 7.778 7.778 0 0 1-7.776-7.776m3.987-3.118a.75.75 0 1 0 0 1.5h6.847a.75.75 0 0 0 0-1.5zM7.934 12a.75.75 0 0 1 .75-.75H13.5a.75.75 0 0 1 0 1.5H8.684a.75.75 0 0 1-.75-.75m2.645 2.092a.75.75 0 1 0 0 1.5h.826a.75.75 0 0 0 0-1.5zM15.85 17.5a.65.65 0 0 1 .65-.65h1.979a.65.65 0 1 1 0 1.3H16.5a.65.65 0 0 1-.65-.65m-1.7 0a3.35 3.35 0 1 1 6.7 0 3.35 3.35 0 0 1-6.7 0m3.35-4.65a4.65 4.65 0 1 0 0 9.3 4.65 4.65 0 0 0 0-9.3" clip-rule="evenodd"/>
  </svg>
`;
const FilterUndo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.575 2.018a.75.75 0 0 0-1.15.964l15.5 18.5a.75.75 0 0 0 1.15-.964zM21.75 12a9.7 9.7 0 0 1-1.634 5.404L19.11 16.19a8.25 8.25 0 0 0-9.91-11.951L8.189 3.023A9.7 9.7 0 0 1 12 2.25c5.385 0 9.75 4.365 9.75 9.75m-8.1 3.874-.931-1.124H11a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .65-.377M9 13.25h2.475l-1.244-1.5H9a.75.75 0 0 0 0 1.5m7-3h-1.816l-1.244-1.5H16a.75.75 0 0 1 0 1.5m-7.013 0L7.772 8.785A.75.75 0 0 0 8 10.25zM3.75 12c0-2.12.8-4.054 2.115-5.515l-.967-1.166A9.72 9.72 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75a9.7 9.7 0 0 0 5.252-1.534l-.966-1.165A8.25 8.25 0 0 1 3.75 12" clip-rule="evenodd"/>
  </svg>
`;
const Filtered = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8 8.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm1 3a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm1.25 3.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const FlipDirection = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m5.208 11.106.694-.617a.75.75 0 0 1 .996 1.122l-1.96 1.74a.75.75 0 0 1-1.012-.014L2.08 11.596a.75.75 0 1 1 1.03-1.091l.592.558a8.351 8.351 0 0 1 14.203-4.967.75.75 0 1 1-1.06 1.06 6.851 6.851 0 0 0-11.636 3.95m14.397-.525a.75.75 0 0 1 .531.257l1.826 2.094a.75.75 0 0 1-1.13.986l-.576-.66A8.352 8.352 0 0 1 5.97 17.776a.75.75 0 0 1 1.083-1.038 6.852 6.852 0 0 0 11.702-3.593l-.863.823a.75.75 0 0 1-1.035-1.086l2.196-2.094a.75.75 0 0 1 .552-.207" clip-rule="evenodd"/>
  </svg>
`;
const Folder = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 5.25c-.69 0-1.25.56-1.25 1.25V17c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V8.5c0-.69-.56-1.25-1.25-1.25h-6.5a.75.75 0 0 1-.53-.22l-1.415-1.414a1.25 1.25 0 0 0-.883-.366zM2.25 6.5A2.75 2.75 0 0 1 5 3.75h4.672c.729 0 1.428.29 1.944.805l1.195 1.195H19a2.75 2.75 0 0 1 2.75 2.75V17A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17z" clip-rule="evenodd"/>
  </svg>
`;
const Font = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M1 18.161c0 .468.387.804.916.804.457 0 .722-.214.895-.702l1.292-3.642h5.809l1.302 3.642c.173.488.437.702.895.702.53 0 .916-.336.916-.804 0-.132-.03-.285-.112-.509L8.183 4.875c-.225-.6-.59-.875-1.15-.875-.6 0-.977.285-1.2.885L1.111 17.652c-.081.224-.112.377-.112.509m8.393-5.097H4.632l2.35-6.694h.06zm4.26 2.767c0 1.903 1.414 3.174 3.52 3.174 1.425 0 2.778-.793 3.408-2.004h.04v1.11c0 .528.347.894.845.894.489 0 .834-.366.834-.895v-6.602c0-2.106-1.566-3.449-4.048-3.449-1.72 0-3.266.763-3.866 1.923a1.53 1.53 0 0 0-.214.732c0 .478.326.794.784.794.335 0 .57-.132.732-.427.59-1.048 1.373-1.465 2.523-1.465 1.465 0 2.32.773 2.32 2.065v.885l-3.042.173c-2.442.142-3.836 1.281-3.836 3.092m6.877-1.027c0 1.526-1.292 2.696-2.96 2.696-1.272 0-2.116-.662-2.116-1.669 0-.997.814-1.627 2.238-1.719l2.838-.173z" clip-rule="evenodd"/>
  </svg>
`;
const Frame = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7 20.75a.75.75 0 0 1-.75-.75v-2.25H4a.75.75 0 0 1 0-1.5h2.25v-8.5H4a.75.75 0 0 1 0-1.5h2.25V4a.75.75 0 0 1 1.5 0v2.25h8.5V4a.75.75 0 0 1 1.5 0v2.25H20a.75.75 0 0 1 0 1.5h-2.25v8.5H20a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25h-8.5V20a.75.75 0 0 1-.75.75m9.25-4.5v-8.5h-8.5v8.5z" clip-rule="evenodd"/>
  </svg>
`;
const Github = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.863 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346s1.7.115 2.5.346c1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.04 10.04 0 0 0 4.932-3.74A10.45 10.45 0 0 0 22 12.253C22 6.588 17.525 2 12 2" clip-rule="evenodd"/>
  </svg>
`;
const Gitlab = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="m11.856 20.423 3.367-10.363H8.488z"/><path fill='currentColor' d="M11.856 20.423 8.488 10.06H3.77z"/><path fill='currentColor' d="m3.77 10.06-1.024 3.149a.7.7 0 0 0 .253.78l8.857 6.434z"/><path fill='currentColor' d="M3.77 10.06h4.718L6.46 3.818a.349.349 0 0 0-.663 0z"/><path fill='currentColor' d="m11.856 20.423 3.367-10.363h4.72z"/><path fill='currentColor' d="m19.943 10.06 1.023 3.149a.7.7 0 0 1-.253.78l-8.857 6.434z"/><path fill='currentColor' d="M19.943 10.06h-4.72l2.028-6.242a.349.349 0 0 1 .663 0z"/>
  </svg>
`;
const Good = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.473 3.104c.24-.527.768-.854 1.337-.854 1.584 0 2.9 1.257 2.9 2.846V8.1c0 .038.036.1.121.1h3.054c2.04 0 3.644 1.783 3.325 3.805l-.939 5.95c-.256 1.622-1.68 2.795-3.325 2.795H5.243c-1.359 0-2.493-1.08-2.493-2.45v-5.95c0-1.37 1.134-2.45 2.493-2.45h2.049c.058 0 .099-.033.114-.066zM8.608 19.25h8.338c.935 0 1.707-.663 1.843-1.53l.94-5.95c.168-1.067-.68-2.07-1.844-2.07H14.83c-.878 0-1.621-.699-1.621-1.6V5.096c0-.72-.6-1.337-1.383-1.346l-3.056 6.706q-.069.15-.163.279zm-1.5-7.85v7.85H5.243c-.566 0-.993-.443-.993-.95v-5.95c0-.507.427-.95.993-.95z" clip-rule="evenodd"/>
  </svg>
`;
const Google = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M21.56 10.05H12v3.9h5.51A5.848 5.848 0 0 1 6.15 12 5.85 5.85 0 0 1 12 6.15c1.491 0 2.848.563 3.881 1.482l2.758-2.758A9.7 9.7 0 0 0 12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75c0-.654-.067-1.332-.19-1.95"/>
  </svg>
`;
const GoogleDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M21.56 10.05H12v3.9h5.51A5.848 5.848 0 0 1 6.15 12 5.85 5.85 0 0 1 12 6.15c1.491 0 2.848.563 3.881 1.482l2.758-2.758A9.7 9.7 0 0 0 12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75 9.75-4.366 9.75-9.75c0-.654-.067-1.332-.19-1.95"/><path fill='currentColor' d="m3.374 7.462 3.203 2.35A5.85 5.85 0 0 1 12 6.15c1.491 0 2.848.563 3.881 1.482l2.758-2.758A9.7 9.7 0 0 0 12 2.25a9.74 9.74 0 0 0-8.626 5.212"/><path fill='currentColor' d="M12 21.75a9.7 9.7 0 0 0 6.537-2.531l-3.018-2.554A5.8 5.8 0 0 1 12 17.85a5.85 5.85 0 0 1-5.5-3.874l-3.18 2.45C4.934 19.584 8.21 21.75 12 21.75"/><path fill='currentColor' d="M21.56 10.05H12v3.9h5.51a5.87 5.87 0 0 1-1.992 2.716h.001l3.018 2.553c-.213.194 3.213-2.344 3.213-7.219 0-.654-.067-1.332-.19-1.95"/>
  </svg>
`;
const GoogleMapDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="m10 15 5-3-5-3z"/><path fill='currentColor' d="M9.084 17.075q.81 1.052 1.469 2.207c.374.724.53 1.215.804 2.087.168.482.32.626.646.626.355 0 .516-.245.64-.623.26-.824.462-1.452.782-2.046.629-1.147 1.41-2.166 2.177-3.145.208-.278 1.55-1.892 2.155-3.167 0 0 .743-1.4.743-3.354 0-1.828-.733-3.096-.733-3.096l-2.11.576-1.28 3.44-.318.474-.063.086-.084.108-.148.172-.212.215-1.14.948-2.853 1.679z"/><path fill='currentColor' d="M6.14 12.78c.697 1.62 2.04 3.045 2.948 4.296l4.824-5.826s-.68.906-1.913.906c-1.373 0-2.482-1.118-2.482-2.528 0-.966.57-1.63.57-1.63l-3.275.894z"/><path fill='currentColor' d="M13.966 3.3a6.5 6.5 0 0 1 3.803 3.262l-3.856 4.684s.57-.676.57-1.636c0-1.443-1.19-2.52-2.478-2.52-1.217 0-1.916.904-1.916.904v-2.95z"/><path fill='currentColor' d="M7.024 5.37C7.981 4.201 9.665 3 11.987 3c1.126 0 1.975.301 1.975.301l-3.877 4.696H7.34z"/><path fill='currentColor' d="M6.14 12.78S5.5 11.5 5.5 9.647c0-1.75.668-3.28 1.524-4.279l3.063 2.628z"/>
  </svg>
`;
const Grid = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.5 5.5a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1zm0 12a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1zm7-1a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1zm-6-12a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1zm5 1a1 1 0 0 1 1-1H19a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1zm-11 5a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1H7a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1zm5 1a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1zm7-1a1 1 0 0 0-1 1V13a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1v-1.5a1 1 0 0 0-1-1z" clip-rule="evenodd"/>
  </svg>
`;
const Group = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M5.778 4.75c-.564 0-1.028.464-1.028 1.028v1.778a.75.75 0 0 1-1.5 0V5.778A2.533 2.533 0 0 1 5.778 3.25h1.778a.75.75 0 0 1 0 1.5zM15.694 4a.75.75 0 0 1 .75-.75h1.778a2.533 2.533 0 0 1 2.528 2.528v1.778a.75.75 0 0 1-1.5 0V5.778c0-.564-.464-1.028-1.028-1.028h-1.778a.75.75 0 0 1-.75-.75M4 15.694a.75.75 0 0 1 .75.75v1.778c0 .564.464 1.028 1.028 1.028h1.778a.75.75 0 0 1 0 1.5H5.778a2.533 2.533 0 0 1-2.528-2.528v-1.778a.75.75 0 0 1 .75-.75M20 15.694a.75.75 0 0 1 .75.75v1.778a2.533 2.533 0 0 1-2.528 2.528h-1.778a.75.75 0 0 1 0-1.5h1.778c.564 0 1.028-.464 1.028-1.028v-1.778a.75.75 0 0 1 .75-.75"/><path fill='currentColor' fill-rule="evenodd" d="M14.75 11.25V8.8c0-.904-.77-1.55-1.607-1.55H8.857c-.838 0-1.607.646-1.607 1.55v2.4c0 .904.77 1.55 1.607 1.55h.394l-.001.05v2.4c0 .904.77 1.55 1.607 1.55h4.286c.838 0 1.607-.646 1.607-1.55v-2.4c0-.904-.77-1.55-1.607-1.55zm-6-2.45v2.402q.001.004.013.015a.14.14 0 0 0 .094.033h4.286a.14.14 0 0 0 .094-.033l.012-.015.001-.002V8.798l-.013-.015a.14.14 0 0 0-.094-.033H8.857a.14.14 0 0 0-.094.033l-.013.015zm2.107 3.95a.14.14 0 0 0-.094.033l-.012.015-.001.002v2.402l.013.015a.14.14 0 0 0 .094.033h4.286a.14.14 0 0 0 .094-.033l.012-.015.001-.002v-2.402l-.013-.015a.14.14 0 0 0-.094-.033z" clip-rule="evenodd"/>
  </svg>
`;
const Group_276 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M3.99 3.116 1.33 5.302 0 3.725 4.2.342h2.07v13.454H3.99zM481.948 13.796l3.458-4.998-.019-.019a2.5 2.5 0 0 1-.703.19 5 5 0 0 1-.741.057 4.3 4.3 0 0 1-1.672-.323 4.6 4.6 0 0 1-1.368-.912 4.4 4.4 0 0 1-.931-1.368 4.5 4.5 0 0 1-.324-1.71 4.8 4.8 0 0 1 .381-1.939 4.4 4.4 0 0 1 1.026-1.482 4.4 4.4 0 0 1 1.558-.95A5.5 5.5 0 0 1 484.551 0q1.046 0 1.938.361a4.7 4.7 0 0 1 1.578.97q.664.626 1.026 1.481.38.837.38 1.806 0 .57-.095 1.083-.096.494-.285.969-.171.456-.437.931-.248.475-.57.988l-3.364 5.207zm5.207-9.235q0-.532-.191-1.008a2.4 2.4 0 0 0-.513-.836q-.342-.38-.817-.589a2.4 2.4 0 0 0-1.064-.228q-1.16 0-1.881.76-.703.74-.703 1.939 0 .57.171 1.064.19.474.532.817t.798.551q.475.19 1.045.19t1.045-.19q.495-.19.836-.532a2.4 2.4 0 0 0 .551-.855q.19-.494.191-1.083M1134.16 11.706l5.18-5.093q.63-.607.99-1.216c.26-.418.38-.893.38-1.425 0-.634-.21-1.134-.62-1.502-.41-.38-.92-.57-1.52-.57q-.975 0-1.56.665-.6.647-.72 1.635l-2.23-.342c.07-.558.22-1.071.48-1.54.25-.468.57-.874.97-1.216.39-.342.84-.608 1.36-.798A4.9 4.9 0 0 1 1138.6 0c.59 0 1.14.082 1.68.247q.81.247 1.44.76.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216q-.18.55-.48 1.045c-.19.33-.42.646-.68.95-.26.291-.53.576-.84.855l-3.87 3.706h6.06v2.09h-8.95zM1154.99 7.069c0 1.09-.11 2.071-.32 2.945-.21.875-.51 1.616-.91 2.224s-.89 1.077-1.49 1.406q-.87.494-2.01.494c-.76 0-1.44-.165-2.03-.494-.6-.33-1.1-.798-1.51-1.406q-.6-.913-.93-2.224-.3-1.311-.3-2.945t.3-2.945q.33-1.312.93-2.224c.41-.608.91-1.077 1.51-1.406.59-.33 1.27-.494 2.03-.494q1.14 0 2.01.494c.6.33 1.09.798 1.49 1.406s.7 1.35.91 2.224.32 1.855.32 2.945m-2.34 0q0-.703-.09-1.596a7.7 7.7 0 0 0-.34-1.691c-.17-.533-.41-.976-.73-1.33q-.465-.552-1.23-.552-.78 0-1.26.551c-.31.355-.56.798-.74 1.33a9 9 0 0 0-.34 1.692q-.09.892-.09 1.596 0 .703.09 1.596c.06.596.18 1.153.34 1.672.18.52.43.963.74 1.33q.48.533 1.26.533.765 0 1.23-.532c.32-.368.56-.811.73-1.33.17-.52.29-1.077.34-1.673q.09-.893.09-1.596M248.318 2.394h-5.491l-.133 2.908q.322-.096.76-.133a10 10 0 0 1 .817-.038q.988 0 1.824.285.855.285 1.482.836.627.532.969 1.33.362.78.362 1.805 0 1.122-.4 2.015a4.3 4.3 0 0 1-1.045 1.482 4.6 4.6 0 0 1-1.558.931 5.5 5.5 0 0 1-1.9.323q-1.692 0-2.851-.78-1.158-.797-1.691-2.165l2.072-.76q.285.797.95 1.292.665.475 1.577.475.513 0 .969-.171a2.35 2.35 0 0 0 .798-.494q.342-.324.532-.799.21-.493.209-1.102 0-.779-.266-1.292a2.2 2.2 0 0 0-.703-.817 2.3 2.3 0 0 0-.95-.437 4.5 4.5 0 0 0-1.083-.133 6.3 6.3 0 0 0-1.653.228q-.4.095-.799.228a6 6 0 0 0-.684.285l.228-7.354h7.658zM718.089 3.116l-2.66 2.186-1.33-1.577 4.199-3.383h2.072v13.454h-2.281zM728.415 5.872h.608q.513 0 1.007-.076.513-.096.931-.323.418-.228.665-.608.266-.399.266-1.026 0-.457-.171-.818a1.7 1.7 0 0 0-.475-.608 2 2 0 0 0-.684-.38 2.4 2.4 0 0 0-.798-.133q-.837 0-1.387.475-.552.475-.761 1.255l-2.147-.552q.171-.683.57-1.235.418-.57.988-.969.59-.418 1.312-.646a5 5 0 0 1 1.52-.228q.875 0 1.653.247a3.9 3.9 0 0 1 1.387.703q.608.456.95 1.14t.342 1.597a3.07 3.07 0 0 1-.665 1.938q-.645.836-1.748 1.102v.038q1.235.247 1.995 1.121.78.855.779 2.11 0 1.044-.418 1.824-.399.779-1.083 1.292a4.5 4.5 0 0 1-1.501.76 5.5 5.5 0 0 1-1.691.266q-.856 0-1.615-.19a4.9 4.9 0 0 1-1.407-.551 4.4 4.4 0 0 1-1.121-.988 4.6 4.6 0 0 1-.741-1.445l2.128-.665q.247.799.913 1.35.684.55 1.767.55.436 0 .874-.113.456-.133.798-.4.362-.265.57-.684.228-.417.228-1.026 0-.645-.323-1.083a2.1 2.1 0 0 0-.779-.703 3.5 3.5 0 0 0-1.064-.38 5.6 5.6 0 0 0-1.102-.114h-.57zM1374.19 11.706l5.19-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.41-.38-.91-.57-1.52-.57q-.975 0-1.56.665-.585.647-.72 1.635l-2.22-.342c.06-.558.22-1.071.47-1.54.25-.468.58-.874.97-1.216s.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247.54.165 1.03.418 1.44.76q.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216a4.5 4.5 0 0 1-.47 1.045q-.285.495-.69.95c-.25.291-.53.576-.83.855l-3.88 3.706h6.06v2.09h-8.95zM1391.09 11.003h-6.21V8.987l5.72-8.646h2.73v8.703h1.88v1.957h-1.88v2.794h-2.24zm0-7.982h-.04l-3.82 6.024h3.86zM1434.2 11.706l5.19-5.093c.41-.405.74-.81.98-1.216.26-.418.38-.893.38-1.425 0-.634-.2-1.134-.62-1.502-.41-.38-.91-.57-1.52-.57q-.975 0-1.56.665-.585.647-.72 1.635l-2.23-.342q.105-.837.48-1.54c.25-.468.58-.874.97-1.216s.85-.608 1.37-.798c.53-.203 1.1-.304 1.73-.304.58 0 1.14.082 1.67.247q.81.247 1.44.76.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216-.12.367-.27.715-.48 1.045-.19.33-.41.646-.68.95q-.375.436-.84.855l-3.87 3.706h6.06v2.09h-8.95zM1454.08 2.394h-5.49l-.13 2.908c.21-.064.47-.108.76-.133q.45-.038.81-.038.99 0 1.83.285c.57.19 1.06.468 1.48.836.42.355.74.798.97 1.33q.36.78.36 1.805c0 .748-.13 1.42-.4 2.015-.25.582-.6 1.076-1.04 1.482q-.675.608-1.56.93c-.6.216-1.23.324-1.9.324q-1.695 0-2.85-.78a4.56 4.56 0 0 1-1.69-2.165l2.07-.76c.19.531.5.962.95 1.292.44.316.97.475 1.58.475q.51 0 .96-.171c.31-.114.57-.279.8-.494.23-.216.41-.482.53-.799q.21-.493.21-1.102c0-.52-.08-.95-.26-1.292a2.2 2.2 0 0 0-.71-.817 2.25 2.25 0 0 0-.95-.437 4.4 4.4 0 0 0-1.08-.133c-.25 0-.52.019-.82.057-.27.038-.55.095-.83.171-.27.063-.53.14-.8.228-.25.089-.48.184-.68.285l.22-7.354h7.66zM1494.21 11.706l5.18-5.093q.63-.607.99-1.216c.26-.418.38-.893.38-1.425 0-.634-.21-1.134-.62-1.502-.41-.38-.92-.57-1.52-.57q-.975 0-1.56.665-.6.647-.72 1.635l-2.23-.342c.07-.558.22-1.071.48-1.54.25-.468.57-.874.97-1.216.39-.342.84-.608 1.36-.798a4.9 4.9 0 0 1 1.73-.304c.59 0 1.14.082 1.68.247q.81.247 1.44.76.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216q-.18.55-.48 1.045c-.19.33-.42.646-.68.95-.26.291-.53.576-.84.855l-3.87 3.706h6.06v2.09h-8.95zM1512.87.342l-3.44 4.979.02.019c.18-.076.4-.133.67-.171.28-.038.53-.057.76-.057.59 0 1.15.114 1.67.342.52.215.98.52 1.37.912.39.38.7.836.91 1.368.23.52.34 1.083.34 1.691 0 .71-.12 1.356-.38 1.939-.25.582-.6 1.083-1.04 1.5q-.645.609-1.56.932a5.4 5.4 0 0 1-1.92.342 5.5 5.5 0 0 1-1.96-.342c-.59-.24-1.11-.57-1.55-.988q-.675-.627-1.05-1.463a4.7 4.7 0 0 1-.36-1.825q0-.57.09-1.064.105-.513.27-.969c.13-.317.27-.633.44-.95s.37-.646.59-.988l3.36-5.207zm-5.2 9.235c0 .355.05.69.17 1.008.13.316.3.595.53.836.23.24.5.43.82.57.31.139.67.209 1.06.209.77 0 1.4-.241 1.86-.722.49-.495.73-1.14.73-1.939 0-.38-.07-.728-.19-1.045-.12-.33-.29-.608-.52-.836q-.345-.342-.81-.532c-.31-.14-.65-.209-1.03-.209s-.74.063-1.06.19q-.48.19-.84.551c-.23.228-.41.507-.53.836-.13.33-.19.69-.19 1.083M60.008 11.706l5.188-5.093q.628-.607.988-1.216.38-.627.38-1.425 0-.95-.627-1.502-.608-.57-1.52-.57-.97 0-1.558.665-.59.647-.722 1.635l-2.224-.342q.096-.837.475-1.54.38-.702.97-1.216a4.3 4.3 0 0 1 1.368-.798A4.8 4.8 0 0 1 64.455 0q.874 0 1.672.247a4.2 4.2 0 0 1 1.444.76 3.5 3.5 0 0 1 .989 1.235q.38.722.38 1.692 0 .645-.171 1.216a4.6 4.6 0 0 1-.476 1.045q-.285.495-.684.95-.38.436-.836.855l-3.876 3.706h6.062v2.09h-8.95zM538.065 3.116l-2.661 2.186-1.33-1.577 4.2-3.383h2.071v13.454h-2.28zM554.908 7.069q0 1.634-.324 2.945-.303 1.312-.912 2.224a4.1 4.1 0 0 1-1.482 1.406q-.874.494-2.014.494t-2.033-.494a4.3 4.3 0 0 1-1.502-1.406q-.607-.913-.931-2.224-.303-1.311-.304-2.945 0-1.634.304-2.945.324-1.312.931-2.224a4.3 4.3 0 0 1 1.502-1.406Q549.036 0 550.176 0t2.014.494q.894.495 1.482 1.406.609.912.912 2.224.324 1.31.324 2.945m-2.338 0q0-.703-.095-1.596a7.2 7.2 0 0 0-.342-1.691q-.247-.8-.722-1.33-.475-.552-1.235-.552-.78 0-1.254.551-.476.532-.741 1.33a9 9 0 0 0-.342 1.692 15 15 0 0 0-.095 1.596q0 .703.095 1.596t.342 1.672q.265.78.741 1.33.474.533 1.254.533.76 0 1.235-.532a3.7 3.7 0 0 0 .722-1.33q.267-.78.342-1.673.095-.893.095-1.596M1194.17 11.706l5.18-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57-.64 0-1.16.222-1.55.665-.4.431-.64.976-.73 1.635l-2.22-.342q.09-.837.48-1.54.375-.702.96-1.216c.4-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247.55.165 1.03.418 1.45.76q.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216q-.18.55-.48 1.045c-.19.33-.42.646-.68.95q-.39.436-.84.855l-3.88 3.706h6.07v2.09h-8.95zM1209.75 3.116l-2.66 2.186-1.33-1.577 4.2-3.383h2.07v13.454h-2.28zM1554.22 11.706l5.18-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57-.64 0-1.16.222-1.55.665-.4.431-.64.976-.73 1.635l-2.22-.342q.09-.837.48-1.54.375-.702.96-1.216c.4-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247.55.165 1.03.418 1.45.76q.63.495.99 1.235c.25.482.38 1.045.38 1.692 0 .43-.06.836-.17 1.216q-.18.55-.48 1.045c-.19.33-.42.646-.68.95q-.39.436-.84.855l-3.88 3.706h6.07v2.09h-8.95zM1565.47.342h9.14v2.09l-5.38 11.364h-2.68l5.67-11.402h-6.75zM307.111.342l-3.44 4.979.019.019q.266-.114.665-.171a6 6 0 0 1 .76-.057q.894 0 1.673.342.779.323 1.368.912.589.57.912 1.368a4.2 4.2 0 0 1 .342 1.691q0 1.065-.38 1.939a4.5 4.5 0 0 1-1.045 1.5 4.4 4.4 0 0 1-1.558.932 5.3 5.3 0 0 1-1.92.342 5.4 5.4 0 0 1-1.957-.342 5 5 0 0 1-1.558-.988 4.6 4.6 0 0 1-1.045-1.463 4.6 4.6 0 0 1-.361-1.825q0-.57.095-1.064.095-.513.266-.969.19-.475.437-.95.265-.475.589-.988l3.363-5.207zm-5.207 9.235q0 .532.171 1.008.19.474.532.836.342.36.817.57.476.21 1.064.209 1.16 0 1.862-.722.723-.74.723-1.939 0-.57-.19-1.045a2.15 2.15 0 0 0-.514-.836 2.4 2.4 0 0 0-.817-.532 2.4 2.4 0 0 0-1.026-.209q-.57 0-1.064.19-.475.19-.836.551a2.4 2.4 0 0 0-.532.836q-.19.494-.19 1.083M778.098 3.116l-2.661 2.186-1.33-1.577 4.2-3.383h2.071v13.454h-2.28zM791.007 11.003h-6.214V8.988l5.72-8.646h2.737v8.703h1.881v1.958h-1.881v2.793h-2.243zm0-7.982h-.038l-3.819 6.024h3.857zM122.734 5.872h.608q.513 0 1.007-.076.514-.096.931-.323.419-.228.665-.608.266-.399.266-1.026 0-.457-.171-.818a1.7 1.7 0 0 0-.475-.608 2 2 0 0 0-.684-.38 2.4 2.4 0 0 0-.798-.133q-.836 0-1.387.475t-.76 1.255l-2.147-.552q.171-.683.57-1.235.418-.57.988-.969.589-.418 1.311-.646a5 5 0 0 1 1.52-.228q.874 0 1.653.247.798.228 1.388.703.608.456.95 1.14t.342 1.597q0 1.083-.665 1.938-.647.836-1.749 1.102v.038q1.236.247 1.996 1.121.779.855.779 2.11 0 1.044-.418 1.824-.399.779-1.083 1.292a4.5 4.5 0 0 1-1.502.76 5.5 5.5 0 0 1-1.691.266 6.6 6.6 0 0 1-1.615-.19 4.9 4.9 0 0 1-1.406-.551 4.3 4.3 0 0 1-1.121-.988 4.6 4.6 0 0 1-.742-1.445l2.129-.665q.247.799.912 1.35.684.55 1.767.55.438 0 .874-.113.456-.133.798-.4.362-.265.57-.684.228-.417.228-1.026 0-.645-.323-1.083a2.07 2.07 0 0 0-.779-.703 3.5 3.5 0 0 0-1.064-.38 5.6 5.6 0 0 0-1.102-.114h-.57zM598.073 3.116l-2.661 2.186-1.33-1.577 4.2-3.383h2.071v13.454h-2.28zM609.671 3.116l-2.66 2.186-1.33-1.577L609.88.342h2.071v13.454h-2.28zM1254.17 11.706l5.19-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57q-.96 0-1.56.665-.585.647-.72 1.635l-2.22-.342c.06-.558.22-1.071.47-1.54a4.5 4.5 0 0 1 .97-1.216c.4-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247.55.165 1.03.418 1.45.76.41.33.74.741.98 1.235.26.482.38 1.045.38 1.692 0 .43-.05.836-.17 1.216a4.5 4.5 0 0 1-.47 1.045q-.285.495-.69.95c-.25.291-.53.576-.83.855l-3.88 3.706h6.06v2.09h-8.95zM1265.77 11.706l5.19-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57-.65 0-1.16.222-1.56.665q-.585.647-.72 1.635l-2.22-.342c.06-.558.22-1.071.47-1.54a4.5 4.5 0 0 1 .97-1.216c.39-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247q.825.247 1.44.76.63.495.99 1.235c.26.482.38 1.045.38 1.692 0 .43-.05.836-.17 1.216a4.5 4.5 0 0 1-.47 1.045q-.285.495-.69.95c-.25.291-.53.576-.83.855l-3.88 3.706h6.06v2.09h-8.95zM1614.22 11.706l5.19-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57q-.96 0-1.56.665-.585.647-.72 1.635l-2.22-.342c.06-.558.22-1.071.47-1.54a4.5 4.5 0 0 1 .97-1.216c.4-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247.55.165 1.03.418 1.45.76.41.33.74.741.98 1.235.26.482.38 1.045.38 1.692 0 .43-.05.836-.17 1.216a4.5 4.5 0 0 1-.47 1.045q-.285.495-.69.95c-.25.291-.53.576-.83.855l-3.88 3.706h6.06v2.09h-8.95zM1630.31 0q.87 0 1.65.247t1.35.722c.39.317.7.703.91 1.16.23.443.34.95.34 1.52 0 .785-.19 1.437-.59 1.957q-.585.78-1.5 1.083v.038q.54.133.99.437c.3.19.57.43.8.722.23.279.4.596.53.95q.21.532.21 1.16c0 .67-.13 1.266-.38 1.786a3.7 3.7 0 0 1-1.01 1.292c-.42.354-.91.62-1.48.798-.57.177-1.18.266-1.82.266q-.975 0-1.83-.266a4.4 4.4 0 0 1-1.5-.798 4.1 4.1 0 0 1-1.01-1.292q-.36-.78-.36-1.787 0-.646.21-1.197c.14-.367.32-.69.55-.969.24-.279.52-.507.82-.684.3-.19.62-.33.95-.418v-.038a3.3 3.3 0 0 1-1.5-1.045c-.39-.482-.59-1.115-.59-1.9 0-.57.11-1.084.32-1.54.23-.468.53-.861.91-1.178q.6-.495 1.35-.76a5.2 5.2 0 0 1 1.68-.266m0 1.881q-.855 0-1.41.513c-.35.342-.53.805-.53 1.388q0 .817.51 1.387c.36.38.83.57 1.43.57.26 0 .52-.05.76-.152s.45-.24.62-.418q.27-.267.42-.627.15-.361.15-.76c0-.292-.05-.552-.17-.78-.1-.24-.24-.443-.43-.608a1.9 1.9 0 0 0-.63-.38 2 2 0 0 0-.72-.133m0 5.796q-.495 0-.93.171-.42.17-.75.475c-.2.19-.36.43-.49.722-.11.279-.17.59-.17.931q0 1.064.66 1.654c.45.392 1 .589 1.68.589q.99 0 1.65-.59.66-.588.66-1.653c0-.329-.06-.633-.19-.912a1.9 1.9 0 0 0-.49-.74c-.2-.204-.45-.362-.74-.476a2.4 2.4 0 0 0-.89-.17M359.708.342h9.14v2.09l-5.378 11.364h-2.679l5.663-11.402h-6.746zM838.106 3.116l-2.66 2.186-1.33-1.577 4.199-3.383h2.071v13.454h-2.28zM853.999 2.394h-5.492l-.133 2.908q.324-.096.76-.133a10 10 0 0 1 .817-.038q.988 0 1.825.285.855.285 1.482.836.627.532.969 1.33.361.78.361 1.805 0 1.122-.399 2.015a4.3 4.3 0 0 1-1.045 1.482 4.6 4.6 0 0 1-1.558.931 5.6 5.6 0 0 1-1.901.323q-1.69 0-2.85-.78-1.16-.797-1.691-2.165l2.071-.76q.285.797.95 1.292.666.475 1.577.475.513 0 .969-.171.457-.171.799-.494.342-.324.532-.799.209-.493.209-1.102 0-.779-.266-1.292a2.2 2.2 0 0 0-.703-.817 2.3 2.3 0 0 0-.951-.437 4.4 4.4 0 0 0-1.083-.133 6.4 6.4 0 0 0-1.653.228q-.399.095-.798.228a6 6 0 0 0-.684.285l.228-7.354h7.658zM185.327 11.003h-6.214V8.988l5.72-8.646h2.736v8.703h1.881v1.958h-1.881v2.793h-2.242zm0-7.982h-.038l-3.82 6.024h3.858zM658.081 3.116l-2.66 2.186-1.33-1.577L658.29.342h2.071v13.454h-2.28zM665.689 11.706l5.188-5.093q.627-.607.988-1.216.38-.627.38-1.425 0-.95-.627-1.502-.608-.57-1.521-.57-.969 0-1.558.665-.588.647-.722 1.635l-2.223-.342q.095-.837.475-1.54.38-.702.969-1.216a4.3 4.3 0 0 1 1.368-.798A4.8 4.8 0 0 1 670.135 0q.875 0 1.673.247a4.2 4.2 0 0 1 1.444.76q.627.495.988 1.235.38.722.38 1.692 0 .645-.171 1.216a4.6 4.6 0 0 1-.475 1.045q-.285.495-.684.95-.38.436-.836.855l-3.877 3.706h6.062v2.09h-8.95zM1314.18 11.706l5.19-5.093q.63-.607.99-1.216c.25-.418.38-.893.38-1.425q0-.95-.63-1.502c-.4-.38-.91-.57-1.52-.57-.65 0-1.16.222-1.56.665q-.585.647-.72 1.635l-2.22-.342c.06-.558.22-1.071.47-1.54a4.5 4.5 0 0 1 .97-1.216c.39-.342.85-.608 1.37-.798a4.8 4.8 0 0 1 1.73-.304c.58 0 1.14.082 1.67.247q.825.247 1.44.76.63.495.99 1.235c.26.482.38 1.045.38 1.692 0 .43-.05.836-.17 1.216a4.5 4.5 0 0 1-.47 1.045q-.285.495-.69.95c-.25.291-.53.576-.83.855l-3.88 3.706h6.06v2.09h-8.95zM1328.5 5.872h.61c.34 0 .67-.026 1-.076.34-.064.66-.171.93-.323.28-.152.5-.355.67-.608q.27-.399.27-1.026 0-.457-.18-.818c-.11-.24-.27-.443-.47-.608a2 2 0 0 0-.69-.38 2.3 2.3 0 0 0-.79-.133c-.56 0-1.02.159-1.39.475-.37.317-.62.735-.76 1.255l-2.15-.552q.18-.683.57-1.235.42-.57.99-.969c.39-.279.83-.494 1.31-.646a5 5 0 0 1 1.52-.228c.58 0 1.14.082 1.66.247q.795.228 1.38.703c.41.304.72.684.95 1.14s.34.988.34 1.597a3.1 3.1 0 0 1-.66 1.938c-.43.557-1.01.925-1.75 1.102v.038c.82.165 1.49.538 2 1.121q.78.855.78 2.11 0 1.044-.42 1.824c-.27.519-.63.95-1.09 1.292q-.66.513-1.5.76c-.55.177-1.12.266-1.69.266s-1.11-.063-1.61-.19a4.8 4.8 0 0 1-1.41-.551 4.3 4.3 0 0 1-1.12-.988c-.32-.406-.56-.887-.74-1.445l2.13-.665c.16.533.47.982.91 1.35q.675.55 1.77.55.435 0 .87-.113c.3-.089.57-.222.8-.4q.36-.265.57-.684c.15-.278.23-.62.23-1.026q0-.645-.33-1.083-.3-.456-.78-.703a3.5 3.5 0 0 0-1.06-.38 5.6 5.6 0 0 0-1.1-.114h-.57zM424.543 0q.875 0 1.653.247.779.247 1.349.722.59.475.912 1.16.342.665.342 1.52 0 1.177-.589 1.957t-1.501 1.083v.038q.532.133.988.437.456.285.798.722.342.419.532.95.21.532.209 1.16 0 1.005-.38 1.786a3.7 3.7 0 0 1-1.007 1.292q-.627.531-1.482.798a6.1 6.1 0 0 1-1.824.266 6.1 6.1 0 0 1-1.824-.266 4.4 4.4 0 0 1-1.502-.798 4.1 4.1 0 0 1-1.007-1.292q-.36-.78-.361-1.787 0-.646.209-1.197.21-.55.551-.969.361-.418.817-.684.456-.286.951-.418v-.038a3.33 3.33 0 0 1-1.502-1.045q-.589-.723-.589-1.9 0-.856.323-1.54a3.5 3.5 0 0 1 .912-1.178q.59-.495 1.35-.76A5.1 5.1 0 0 1 424.543 0m0 1.881q-.855 0-1.406.513-.532.513-.532 1.388 0 .817.513 1.387.531.57 1.425.57.399 0 .76-.152a1.935 1.935 0 0 0 1.197-1.805q0-.438-.171-.78a1.6 1.6 0 0 0-.437-.608 1.8 1.8 0 0 0-.627-.38 2 2 0 0 0-.722-.133m0 5.796q-.495 0-.931.171a2.4 2.4 0 0 0-.741.475q-.305.284-.494.722a2.4 2.4 0 0 0-.172.931q0 1.064.666 1.654.664.588 1.672.589.988 0 1.653-.59.665-.588.665-1.653 0-.493-.19-.912a2 2 0 0 0-.494-.74 2.1 2.1 0 0 0-.741-.476 2.3 2.3 0 0 0-.893-.17M1078.14 3.116l-2.66 2.186-1.33-1.577 4.2-3.383h2.07v13.454h-2.28zM1087.63 13.796l3.46-4.998-.02-.019c-.19.089-.43.152-.71.19a5 5 0 0 1-.74.057c-.59 0-1.15-.107-1.67-.323a4.7 4.7 0 0 1-1.37-.912 4.5 4.5 0 0 1-.93-1.368 4.6 4.6 0 0 1-.32-1.71c0-.71.13-1.356.38-1.939.25-.582.59-1.076 1.03-1.482.44-.418.96-.735 1.55-.95a5.5 5.5 0 0 1 1.94-.342c.7 0 1.34.12 1.94.361.61.228 1.13.551 1.58.97q.66.626 1.02 1.481c.26.558.38 1.16.38 1.806q0 .57-.09 1.083c-.07.33-.16.652-.29.969-.11.304-.26.614-.43.931q-.255.475-.57.988l-3.37 5.207zm5.21-9.235c0-.355-.07-.69-.19-1.008a2.4 2.4 0 0 0-.52-.836c-.23-.253-.5-.45-.82-.589a2.4 2.4 0 0 0-1.06-.228c-.77 0-1.4.254-1.88.76-.47.494-.7 1.14-.7 1.939 0 .38.05.734.17 1.064.12.316.3.589.53.817s.49.412.8.551c.31.127.66.19 1.04.19q.57 0 1.05-.19c.33-.127.61-.304.83-.532.24-.24.43-.526.56-.855.12-.33.19-.69.19-1.083M898.114 3.116l-2.66 2.186-1.33-1.577 4.199-3.383h2.072v13.454h-2.281zM912.791.342l-3.439 4.979.019.019q.266-.114.665-.171.418-.057.76-.057.893 0 1.672.342.78.323 1.368.912.59.57.912 1.368a4.2 4.2 0 0 1 .342 1.691q0 1.065-.38 1.939a4.5 4.5 0 0 1-1.045 1.5 4.4 4.4 0 0 1-1.558.932 5.3 5.3 0 0 1-1.919.342q-1.065 0-1.958-.342a5 5 0 0 1-1.558-.988 4.6 4.6 0 0 1-1.045-1.463 4.6 4.6 0 0 1-.361-1.825q0-.57.095-1.064.095-.513.266-.969.19-.475.437-.95.267-.475.589-.988l3.364-5.207zm-5.207 9.235q0 .532.171 1.008.19.474.532.836.343.36.818.57t1.064.209q1.159 0 1.862-.722.722-.74.722-1.939 0-.57-.19-1.045a2.2 2.2 0 0 0-.513-.836 2.4 2.4 0 0 0-.817-.532 2.4 2.4 0 0 0-1.026-.209q-.57 0-1.064.19-.476.19-.837.551a2.4 2.4 0 0 0-.532.836q-.19.494-.19 1.083M958.123 3.116l-2.661 2.186-1.33-1.577 4.2-3.383h2.071v13.454h-2.28zM965.388.342h9.141v2.09l-5.378 11.364h-2.679l5.662-11.402h-6.746zM1018.13 3.116l-2.66 2.186-1.33-1.577 4.2-3.383h2.07v13.454h-2.28zM1030.22 0c.59 0 1.14.082 1.66.247q.78.247 1.35.722c.39.317.69.703.91 1.16.23.443.34.95.34 1.52 0 .785-.2 1.437-.59 1.957q-.585.78-1.5 1.083v.038q.525.133.99.437c.3.19.57.43.8.722.22.279.4.596.53.95q.21.532.21 1.16c0 .67-.13 1.266-.38 1.786a3.7 3.7 0 0 1-1.01 1.292c-.42.354-.91.62-1.48.798q-.855.266-1.83.266c-.64 0-1.25-.089-1.82-.266a4.4 4.4 0 0 1-1.5-.798 4 4 0 0 1-1.01-1.292q-.36-.78-.36-1.787 0-.646.21-1.197c.14-.367.32-.69.55-.969.24-.279.51-.507.82-.684.3-.19.62-.33.95-.418v-.038a3.3 3.3 0 0 1-1.5-1.045c-.4-.482-.59-1.115-.59-1.9 0-.57.1-1.084.32-1.54.23-.468.53-.861.91-1.178q.585-.495 1.35-.76a5.2 5.2 0 0 1 1.67-.266m0 1.881c-.57 0-1.04.171-1.4.513s-.53.805-.53 1.388q0 .817.51 1.387c.35.38.83.57 1.42.57a1.992 1.992 0 0 0 1.39-.57q.27-.267.42-.627.15-.361.15-.76c0-.292-.06-.552-.17-.78a1.6 1.6 0 0 0-.44-.608 1.8 1.8 0 0 0-.62-.38 2 2 0 0 0-.73-.133m0 5.796q-.495 0-.93.171c-.28.114-.52.272-.74.475-.2.19-.37.43-.49.722-.12.279-.17.59-.17.931q0 1.064.66 1.654c.44.392 1 .589 1.67.589.66 0 1.21-.197 1.66-.59q.66-.588.66-1.653c0-.329-.06-.633-.19-.912a2 2 0 0 0-.49-.74 2.2 2.2 0 0 0-.74-.476 2.4 2.4 0 0 0-.9-.17"/>
  </svg>
`;
const Group_277 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M8.662 8.227h-.057q-.342.609-1.102 1.008-.76.38-1.729.38-.55 0-1.159-.152a3.5 3.5 0 0 1-1.102-.456 3.1 3.1 0 0 1-.836-.875q-.323-.55-.323-1.349 0-1.025.57-1.634.59-.608 1.501-.93A8 8 0 0 1 6.44 3.8a22 22 0 0 1 2.185-.114v-.228q0-.855-.627-1.254-.608-.418-1.463-.418a3.3 3.3 0 0 0-1.387.304q-.664.305-1.102.741L2.867 1.444A5.2 5.2 0 0 1 4.653.361 6.2 6.2 0 0 1 6.724 0Q7.94 0 8.72.342q.798.342 1.255.893T10.6 2.47q.19.684.19 1.368v5.549H8.662zm-.038-3.002h-.513q-.55 0-1.159.057a4.4 4.4 0 0 0-1.12.21 2.2 2.2 0 0 0-.856.455q-.342.285-.342.798 0 .324.133.551.152.21.38.342.228.134.513.19.285.057.57.057 1.179 0 1.786-.627.608-.627.608-1.71zM5.038 480.293h2.28v9.12h-2.28zm-.323-3.098q0-.55.4-.95a1.42 1.42 0 0 1 1.044-.418q.627 0 1.045.399.437.381.437.969 0 .589-.437.989-.417.38-1.045.38t-1.045-.399a1.36 1.36 0 0 1-.399-.97M9.423 243.928a2.6 2.6 0 0 0-.133-.837 1.8 1.8 0 0 0-.38-.703 1.8 1.8 0 0 0-.685-.475 2.2 2.2 0 0 0-.95-.19q-1.025 0-1.748.627-.702.608-.779 1.578zm2.28 1.026v.304q0 .151-.02.304H4.749q.039.493.247.912.228.399.59.703.36.285.816.456t.95.171q.855 0 1.445-.304.588-.324.969-.874l1.52 1.216q-1.35 1.824-3.915 1.824-1.063 0-1.957-.323a4.9 4.9 0 0 1-1.558-.95q-.645-.609-1.026-1.482-.36-.894-.36-2.014 0-1.102.36-1.996a4.6 4.6 0 0 1 1.026-1.539q.646-.645 1.52-.988a5.1 5.1 0 0 1 1.92-.361q.949 0 1.748.323a3.65 3.65 0 0 1 1.406.931q.588.609.912 1.539.342.912.342 2.148M10.888 720.04q.893 0 1.52.323.646.304 1.045.817.417.513.608 1.178.19.664.19 1.368v5.7h-2.28v-5.054q0-.4-.057-.836a2.2 2.2 0 0 0-.247-.779 1.6 1.6 0 0 0-.532-.589q-.324-.228-.874-.228-.533 0-.912.228a2 2 0 0 0-.628.589 2.5 2.5 0 0 0-.36.817 3.5 3.5 0 0 0-.115.874v4.978h-2.28v-5.51q0-.855-.418-1.406-.399-.57-1.273-.57-.513 0-.893.228a1.9 1.9 0 0 0-.627.551 2.9 2.9 0 0 0-.36.798 3.5 3.5 0 0 0-.115.893v5.016H0v-9.12h2.166v1.463h.038a2.9 2.9 0 0 1 .4-.646 3.6 3.6 0 0 1 .607-.551q.36-.247.817-.38a3.2 3.2 0 0 1 1.007-.152q1.065 0 1.767.475.704.476 1.083 1.254.456-.836 1.217-1.273.76-.456 1.786-.456M11.273 974h-2.28v-5.776h-.039q-.436.684-1.254 1.083a3.9 3.9 0 0 1-1.767.399q-1.044 0-1.88-.38a4.6 4.6 0 0 1-1.407-1.045 5 5 0 0 1-.893-1.539 5.9 5.9 0 0 1-.304-1.901q0-1.007.323-1.881a4.6 4.6 0 0 1 .912-1.52q.589-.645 1.406-1.007a4.2 4.2 0 0 1 1.786-.38q.627 0 1.121.152.513.133.912.361.4.21.665.494.285.267.456.532h.057v-1.273h2.186zm-7.506-9.159q0 .533.152 1.065.171.531.494.95.324.417.817.684.494.266 1.16.266.626 0 1.12-.247.494-.267.836-.684a2.7 2.7 0 0 0 .532-.931q.19-.533.19-1.065a3.2 3.2 0 0 0-.19-1.064 2.7 2.7 0 0 0-.532-.95 2.8 2.8 0 0 0-.836-.684 2.3 2.3 0 0 0-1.12-.266q-.665 0-1.16.266-.494.248-.817.665-.323.419-.494.95a3.7 3.7 0 0 0-.152 1.045M4.318 55.025v6.403h.057q.171-.228.437-.475.267-.246.627-.456.38-.209.874-.342.495-.152 1.121-.152.97 0 1.786.38a4.15 4.15 0 0 1 1.407 1.007q.588.647.912 1.52.323.874.323 1.882 0 1.006-.323 1.9a4.6 4.6 0 0 1-.893 1.539q-.57.646-1.407 1.045-.816.38-1.862.38-.969 0-1.824-.418a3.1 3.1 0 0 1-1.31-1.216h-.039v1.368H2.038V55.025zm5.225 9.767q0-.533-.17-1.046a2.8 2.8 0 0 0-.476-.95 2.3 2.3 0 0 0-.817-.665q-.493-.266-1.159-.266-.627.001-1.12.266-.495.267-.856.684a3.2 3.2 0 0 0-.532.95 3.5 3.5 0 0 0-.17 1.065q0 .531.17 1.064.19.513.532.93.36.419.855.685.495.246 1.121.247.665 0 1.16-.266.493-.267.816-.684.324-.419.475-.95a3.5 3.5 0 0 0 .171-1.064M7.318 540.296v9.671q0 .817-.133 1.54-.133.74-.513 1.273-.36.55-1.007.874-.627.323-1.653.323-.285 0-.57-.038a6 6 0 0 1-.456-.076l.19-1.938q.152.037.323.057.171.018.304.019.4 0 .646-.152.248-.153.38-.418.134-.267.171-.628.038-.342.038-.741v-9.766zm-2.603-3.097q0-.551.4-.95a1.42 1.42 0 0 1 1.044-.418q.627 0 1.045.399.438.38.437.969 0 .589-.437.988-.417.38-1.045.38t-1.045-.399a1.36 1.36 0 0 1-.399-.969M5.361 302.107H3.632v-1.824h1.73v-1.349q0-.818.17-1.559.19-.76.608-1.33.438-.57 1.14-.893.704-.342 1.767-.342.381 0 .627.038.267.02.533.095l-.152 1.938a4 4 0 0 0-.419-.095 2.6 2.6 0 0 0-.456-.038q-.494 0-.798.19a1.4 1.4 0 0 0-.475.494 2.3 2.3 0 0 0-.209.665 4.5 4.5 0 0 0-.057.703v1.483h2.11v1.824H7.64v7.296h-2.28zM2 780.309h2.166v1.463h.038q.304-.684 1.045-1.197.76-.532 1.786-.532.894 0 1.52.323.647.304 1.046.817.417.513.608 1.178.19.666.19 1.368v5.701h-2.28v-5.055q0-.399-.058-.836a2.2 2.2 0 0 0-.247-.779 1.6 1.6 0 0 0-.532-.589q-.322-.228-.874-.228-.55 0-.95.228-.398.21-.665.551a2.6 2.6 0 0 0-.38.798 3 3 0 0 0-.133.893v5.017H2zM9.233 122.8q-.267-.381-.799-.627a2.4 2.4 0 0 0-1.083-.266 2.2 2.2 0 0 0-1.102.266 2.4 2.4 0 0 0-.798.665 3 3 0 0 0-.456.95q-.152.513-.152 1.045t.152 1.064q.171.513.494.931.324.418.798.684.495.247 1.14.247.533 0 1.064-.209.532-.209.856-.608l1.425 1.444q-.57.608-1.463.95a5.4 5.4 0 0 1-1.9.323 5.7 5.7 0 0 1-1.92-.323 4.6 4.6 0 0 1-1.577-.95 4.7 4.7 0 0 1-1.064-1.52q-.38-.893-.38-2.033 0-1.103.38-1.995a4.7 4.7 0 0 1 1.064-1.52 4.7 4.7 0 0 1 1.54-.969 5.3 5.3 0 0 1 1.9-.342q1.006 0 1.938.38.95.38 1.5 1.045zM3.038 595.055h2.28v9.082h.057l3.458-3.838h2.927l-3.953 4.123 4.2 4.998H8.985l-3.61-4.675h-.057v4.675h-2.28zM1.468 844.835q0-1.084.38-1.957a4.7 4.7 0 0 1 1.064-1.52 4.65 4.65 0 0 1 1.577-.969 5.5 5.5 0 0 1 1.938-.342q1.026 0 1.938.342a4.65 4.65 0 0 1 1.578.969q.664.626 1.045 1.52.399.873.399 1.957 0 1.083-.4 1.976a4.7 4.7 0 0 1-1.044 1.539 4.9 4.9 0 0 1-1.578.988 5.2 5.2 0 0 1-1.938.361q-1.026 0-1.938-.361a4.9 4.9 0 0 1-1.577-.988 4.9 4.9 0 0 1-1.064-1.539 5 5 0 0 1-.38-1.976m2.318 0q0 .531.152 1.064.171.532.494.95.324.418.817.684.494.266 1.178.266.685 0 1.178-.266.495-.265.817-.684.323-.418.476-.95.17-.533.17-1.064 0-.532-.17-1.045a2.8 2.8 0 0 0-.476-.95 2.3 2.3 0 0 0-.817-.665q-.494-.266-1.178-.266t-1.178.266q-.493.246-.817.665a3.1 3.1 0 0 0-.494.95q-.152.513-.152 1.045M11.273 360.286v8.303q0 1.236-.304 2.224-.305 1.007-.95 1.691-.627.702-1.597 1.083-.969.38-2.299.38a8 8 0 0 1-1.178-.095 9 9 0 0 1-1.216-.285 7.5 7.5 0 0 1-1.14-.475 5.6 5.6 0 0 1-.988-.646l1.311-1.767q.666.627 1.501.95a4.4 4.4 0 0 0 1.691.342q.817 0 1.368-.247.57-.228.893-.646.342-.418.476-.988.151-.571.152-1.255v-.665h-.038q-.495.666-1.274 1.026-.759.342-1.71.342-1.025 0-1.862-.38a4.3 4.3 0 0 1-1.425-1.026 4.8 4.8 0 0 1-.893-1.501 5.3 5.3 0 0 1-.323-1.843q0-.987.304-1.862a4.8 4.8 0 0 1 .893-1.52 4.4 4.4 0 0 1 1.406-1.026 4.45 4.45 0 0 1 1.862-.38q.97 0 1.805.399.837.4 1.33 1.235h.039v-1.368zm-4.865 1.596q-.627 0-1.12.228a2.5 2.5 0 0 0-.818.627 2.9 2.9 0 0 0-.513.912 3.7 3.7 0 0 0-.17 1.14q0 .551.17 1.064.19.513.513.931.342.4.817.646.495.247 1.102.247.627 0 1.121-.228.513-.247.855-.646.362-.399.552-.912a3.3 3.3 0 0 0 .19-1.102q0-.588-.19-1.121a2.75 2.75 0 0 0-.552-.931 2.4 2.4 0 0 0-.836-.627 2.65 2.65 0 0 0-1.12-.228M11.273 189.396H9.106v-1.368h-.038q-.475.798-1.33 1.216a4 4 0 0 1-1.805.418q-1.044 0-1.88-.38a4.6 4.6 0 0 1-1.407-1.045 5 5 0 0 1-.893-1.539 5.9 5.9 0 0 1-.304-1.9q0-1.006.323-1.881a4.6 4.6 0 0 1 .912-1.52 4.15 4.15 0 0 1 1.406-1.007 4.2 4.2 0 0 1 1.786-.38q.627 0 1.121.152.495.133.855.342.382.208.646.456.267.247.437.475h.057v-6.403h2.28zm-7.506-4.598q0 .533.152 1.064.171.533.494.95.324.419.817.684.494.267 1.16.266.626 0 1.12-.247.494-.266.836-.684a2.7 2.7 0 0 0 .532-.931q.19-.531.19-1.064a3.2 3.2 0 0 0-.19-1.064 2.7 2.7 0 0 0-.532-.95 2.7 2.7 0 0 0-.836-.684 2.3 2.3 0 0 0-1.12-.266q-.665 0-1.16.266-.494.247-.817.665a3.1 3.1 0 0 0-.494.95 3.7 3.7 0 0 0-.152 1.045M5.038 655.058h2.28v14.365h-2.28zM4.185 900.316v1.273h.057q.171-.266.437-.532.285-.285.684-.494.4-.228.893-.361a4 4 0 0 1 1.14-.152q.97 0 1.787.38a4.15 4.15 0 0 1 1.406 1.007q.588.646.912 1.52.323.875.323 1.881t-.323 1.9a4.5 4.5 0 0 1-.893 1.539q-.571.646-1.406 1.045-.818.38-1.863.38a4 4 0 0 1-1.786-.399q-.797-.399-1.235-1.083H4.28v5.777H2v-13.681zm5.32 4.522q0-.532-.17-1.045a2.8 2.8 0 0 0-.476-.95 2.3 2.3 0 0 0-.817-.665q-.493-.266-1.159-.266a2.3 2.3 0 0 0-1.12.266q-.495.265-.856.684a3.2 3.2 0 0 0-.532.95 3.5 3.5 0 0 0-.17 1.064q0 .532.17 1.064.19.514.532.931.36.418.855.684.495.247 1.121.247.666 0 1.16-.266.493-.265.816-.684.324-.417.476-.95a3.5 3.5 0 0 0 .17-1.064M7.073 420.023q.893 0 1.52.323.647.304 1.046.817.417.513.607 1.178.19.666.19 1.368v5.701h-2.28v-5.017q0-.399-.057-.817a2.2 2.2 0 0 0-.247-.779 1.44 1.44 0 0 0-.513-.589q-.322-.228-.874-.228-.55 0-.95.209-.398.21-.665.57-.265.342-.399.779a3 3 0 0 0-.133.893v4.979h-2.28v-14.365h2.28v6.517h.038q.134-.284.38-.551.266-.284.608-.494.342-.228.78-.361.435-.132.95-.133"/>
  </svg>
`;
const Grouping = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.75 6A2.75 2.75 0 0 1 5.5 3.25h13A2.75 2.75 0 0 1 21.25 6v12a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 18zm11.5-1.25h-4.5v14.5h4.5zm1.5 14.5V4.75h2.75c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25zM5.5 4.75h2.75v14.5H5.5c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25" clip-rule="evenodd"/>
  </svg>
`;
const Gt = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.25 12a.75.75 0 0 1-.442.684l-10 4.5-.616-1.368L14.672 12l-8.48-3.816.616-1.368 10 4.5a.75.75 0 0 1 .442.684" clip-rule="evenodd"/>
  </svg>
`;
const Hand = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M14.733 20.75a11.3 11.3 0 0 1-4.415-.993l-5.44-2.56a2.238 2.238 0 0 1-1.06-2.967c.251-.533.703-.944 1.256-1.144a2.2 2.2 0 0 1 1.694.081l1.016.479c-.477-1.621-1.431-4.305-2.862-5.873l-.883-.717a2.145 2.145 0 0 1 1.014-3.78 2.14 2.14 0 0 1 1.565.36A12.1 12.1 0 0 1 9.39 6.4c.26-.389.637-.684 1.077-.841a2.15 2.15 0 0 1 1.687.08c.235.11.45.26.636.442.238-.27.542-.475.883-.593a2.02 2.02 0 0 1 1.572.08c.279.126.524.318.715.558q.148-.097.318-.15a1.55 1.55 0 0 1 1.987.938l2.11 5.881a6.5 6.5 0 0 1 0 4.35 5.32 5.32 0 0 1-3.223 3.232c-.78.26-1.598.385-2.42.372m-8.802-6.414c-.128-.027-.32-.035-.417 0a.88.88 0 0 0-.512.461.89.89 0 0 0 .433 1.196l5.404 2.613s3.197 1.488 5.828.54a3.9 3.9 0 0 0 2.438-2.41 5.13 5.13 0 0 0 0-3.445l-2.12-5.881a.22.22 0 0 0-.202-.157.23.23 0 0 0-.222.307l.3.886a.664.664 0 0 1-.397.886.66.66 0 0 1-.883-.399l-.583-1.63a.8.8 0 0 0-.38-.416.71.71 0 0 0-.556 0 .725.725 0 0 0-.468.886l.247.93a.657.657 0 0 1-.45.797.65.65 0 0 1-.812-.407l-.583-1.612a.885.885 0 0 0-1.122-.523.884.884 0 0 0-.52 1.125l.423 1.187a.67.67 0 0 1-.397.886.66.66 0 0 1-.883-.399A10.23 10.23 0 0 0 5.77 4.921a.793.793 0 0 0-1.104.177c-.127.168-.116.326-.091.536.024.21.13.402.293.536l.883.744.061.062C8.223 9.57 9.345 14.637 9.39 14.85a.67.67 0 0 1-.239.664.67.67 0 0 1-.688.08l-1.54-.797c-.385-.21-.466-.282-.991-.46"/>
  </svg>
`;
const Heading1 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.926 6.578v10.898c0 .602.33.963.862.963.541 0 .862-.351.862-.963V5.726c0-.682-.451-1.153-1.093-1.153-.39 0-.742.15-1.373.622l-2.026 1.504c-.4.29-.591.561-.591.852 0 .38.3.692.672.692.22 0 .43-.08.721-.291l1.885-1.374zM4.42 4.903a.77.77 0 0 1 .77.77v5.35h6.168v-5.35a.77.77 0 1 1 1.54 0v12.242a.77.77 0 1 1-1.54 0v-5.351H5.19v5.351a.77.77 0 0 1-1.54 0V5.673a.77.77 0 0 1 .77-.77" clip-rule="evenodd"/>
  </svg>
`;
const Heading2 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.159 16c-.562.638-.724.905-.724 1.248 0 .553.438.886 1.134.886h6.289c.524 0 .829-.276.829-.724 0-.457-.324-.734-.83-.734H15.57v-.114l3.526-4.031c1.715-1.953 2.201-2.859 2.201-4.098 0-2.096-1.648-3.583-3.992-3.583-2.516 0-4.089 1.697-4.089 3.317 0 .514.305.867.772.867.391 0 .658-.258.791-.763.286-1.238 1.191-1.972 2.42-1.972 1.45 0 2.412.896 2.412 2.24 0 .895-.41 1.696-1.487 2.925zM3.419 5.364c.404 0 .732.327.732.731v5.087h5.862V6.095a.732.732 0 1 1 1.464 0v11.637a.732.732 0 0 1-1.464 0v-5.087H4.151v5.087a.732.732 0 1 1-1.464 0V6.095c0-.404.328-.731.732-.731" clip-rule="evenodd"/>
  </svg>
`;
const Heading3 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.05 5.856a.75.75 0 1 0-1.5 0v11.922a.75.75 0 1 0 1.5 0v-5.211h6.006v5.21a.75.75 0 0 0 1.5 0V5.857a.75.75 0 0 0-1.5 0v5.21H4.05zm9.479 9.234c-.418 0-.713.304-.713.732 0 1.454 1.796 2.937 4.248 2.937 2.642 0 4.486-1.56 4.486-3.783 0-1.635-1.226-3.041-2.832-3.222v-.095c1.32-.228 2.395-1.596 2.395-3.031 0-1.977-1.692-3.393-4.068-3.393-2.338 0-3.925 1.425-3.925 2.898 0 .476.285.79.723.79.37 0 .608-.2.798-.723.38-.979 1.235-1.54 2.366-1.54 1.454 0 2.433.875 2.433 2.177s-1.007 2.242-2.395 2.242h-1.121c-.456 0-.76.295-.76.713 0 .409.323.723.76.723h1.188c1.653 0 2.765.978 2.765 2.432 0 1.455-1.083 2.386-2.784 2.386-1.293 0-2.281-.57-2.775-1.587-.247-.485-.456-.656-.79-.656" clip-rule="evenodd"/>
  </svg>
`;
const Heading4 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18.793 15.755v1.931c0 .552.286.866.79.866.514 0 .8-.314.8-.866v-1.931h.989c.542 0 .847-.267.847-.723 0-.467-.314-.733-.847-.733h-.99V6.696c0-.885-.485-1.38-1.35-1.38-.657 0-1.095.286-1.657 1.114-2.16 3.235-3.016 4.605-4.377 7.013-.333.609-.447.942-.447 1.294 0 .628.495 1.018 1.237 1.018zm0-1.456H14.15v-.095c1.246-2.16 2.94-4.882 4.558-7.27h.085zM2.95 5.705a.73.73 0 0 1 .73.731v5.079h5.855V6.436a.73.73 0 1 1 1.461 0v11.62a.73.73 0 0 1-1.461 0v-5.08H3.68v5.08a.73.73 0 0 1-1.461 0V6.435a.73.73 0 0 1 .73-.73" clip-rule="evenodd"/>
  </svg>
`;
const Heading5 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.615 15.053c-.409 0-.678.316-.678.78 0 1.302 1.534 2.799 3.988 2.799 2.593 0 4.443-1.822 4.443-4.388 0-2.408-1.664-4.1-4.025-4.1-1.07 0-2.157.447-2.575 1.07h-.093l.353-4.137h5.01c.55 0 .856-.251.856-.698 0-.455-.316-.725-.855-.725h-5.215c-.8 0-1.2.326-1.255 1.014l-.41 5.205c-.046.716.224 1.135.754 1.135.297 0 .483-.112 1.162-.744a2.77 2.77 0 0 1 1.905-.725c1.609 0 2.752 1.152 2.752 2.789 0 1.71-1.18 2.9-2.872 2.9-1.116 0-1.971-.54-2.482-1.534-.242-.474-.447-.641-.763-.641M3.082 5.903c.394 0 .714.32.714.715v4.962h5.72V6.618a.714.714 0 1 1 1.427 0V17.97a.714.714 0 1 1-1.428 0v-4.962H3.796v4.962a.714.714 0 0 1-1.428 0V6.618c0-.394.32-.714.714-.714" clip-rule="evenodd"/>
  </svg>
`;
const Heading6 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.65 5.517c-3.098 0-4.825 2.492-4.825 6.98 0 1.932.318 3.379.962 4.406.765 1.203 2.025 1.857 3.602 1.857 2.594 0 4.349-1.745 4.349-4.312 0-2.436-1.661-4.144-4.032-4.144-1.456 0-2.79.803-3.22 1.941h-.074c.028-3.49 1.13-5.319 3.21-5.319.83 0 1.53.299 2.203.961.336.327.532.43.793.43.401 0 .69-.3.69-.7 0-.43-.373-.943-.989-1.344-.709-.486-1.67-.756-2.669-.756m-.196 11.843c-1.652 0-2.809-1.185-2.809-2.856 0-1.652 1.13-2.81 2.744-2.81 1.661 0 2.744 1.12 2.744 2.82 0 1.717-1.074 2.846-2.679 2.846m-14-11.369c.396 0 .717.321.717.717v4.981h5.742V6.708a.717.717 0 0 1 1.434 0v11.396a.717.717 0 1 1-1.434 0v-4.981H4.171v4.981a.717.717 0 0 1-1.433 0V6.708c0-.396.32-.717.717-.717" clip-rule="evenodd"/>
  </svg>
`;
const Headings = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.416 4c.506 0 .916.4.916.894v6.212h7.336V4.894c0-.494.41-.894.916-.894s.916.4.916.894v14.212c0 .494-.41.894-.916.894a.905.905 0 0 1-.916-.894v-6.212H8.332v6.212c0 .494-.41.894-.916.894a.905.905 0 0 1-.916-.894V4.894C6.5 4.4 6.91 4 7.416 4" clip-rule="evenodd"/>
  </svg>
`;
const Heartbreak = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 4.924c-2.048-1.87-5.144-2.367-7.547-.32-2.557 2.178-2.927 5.843-.907 8.434.777.997 2.302 2.503 3.776 3.89a166 166 0 0 0 3.706 3.371l.013.012c.07.061.152.134.23.191.09.069.215.15.38.198.223.067.463.067.685 0 .165-.049.29-.13.381-.198.078-.057.16-.13.23-.191l.012-.012c.733-.647 2.218-1.97 3.707-3.371 1.474-1.387 2.998-2.893 3.775-3.89 2.014-2.583 1.7-6.275-.914-8.44-2.433-2.016-5.484-1.545-7.527.326m1.053 1.068L14.53 7.47a.75.75 0 0 1-.195 1.2l-3.069 1.536 2.264 2.264a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 .195-1.2l3.069-1.535L11.47 6.53l-.04-.042c-1.593-1.857-4.134-2.335-6.004-.742-1.953 1.663-2.217 4.42-.697 6.37.695.891 2.134 2.321 3.62 3.72a165 165 0 0 0 3.645 3.314c.736-.65 2.19-1.947 3.644-3.314 1.486-1.399 2.926-2.829 3.62-3.72 1.528-1.96 1.285-4.728-.688-6.363-1.732-1.435-3.936-1.188-5.517.239" clip-rule="evenodd"/>
  </svg>
`;
const Help = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m.239 8.733c-.923.725-1.245 1.183-1.245 1.99 0 .437.274.765.773.765.478 0 .656-.273.827-.676.157-.575.383-.814 1.046-1.32.875-.65 1.456-1.23 1.456-2.29 0-1.524-1.251-2.46-3.049-2.46-.97 0-1.716.252-2.215.676-.41.362-.676.84-.676 1.292 0 .376.239.684.67.684.287 0 .45-.13.662-.41.329-.561.78-.814 1.436-.814.752 0 1.347.444 1.347 1.114 0 .602-.37.93-1.033 1.45m-.472 3.726c-.567 0-1.032.396-1.032.964 0 .567.465.964 1.032.964s1.039-.397 1.039-.964c0-.568-.472-.964-1.04-.964" clip-rule="evenodd"/>
  </svg>
`;
const HelpCenter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.004 3.8a8.2 8.2 0 0 0-7.348 11.845c.265.533.257 1.202.196 1.755-.065.59-.215 1.224-.376 1.79-.104.363-.215.708-.319 1.01h7.847a8.2 8.2 0 0 0 0-16.4M2.266 20.692l.003-.007.012-.029a14 14 0 0 0 .207-.537c.132-.358.3-.846.449-1.367.15-.526.273-1.064.325-1.529.055-.502.009-.771-.039-.866A9.76 9.76 0 0 1 2.203 12c0-5.412 4.389-9.8 9.8-9.8 5.413 0 9.8 4.388 9.8 9.8s-4.387 9.8-9.8 9.8H3.006a.8.8 0 0 1-.739-1.108M11.967 9.05a1.2 1.2 0 0 0-1.162.9.8.8 0 0 1-1.55-.4 2.8 2.8 0 0 1 5.512.7c0 .855-.414 1.425-.87 1.865-.186.18-.4.357-.597.521l-.087.072a10 10 0 0 0-.68.608.8.8 0 1 1-1.132-1.132c.278-.277.551-.509.789-.706l.091-.076c.204-.17.365-.303.505-.438.295-.284.381-.465.381-.714a1.2 1.2 0 0 0-1.2-1.2m.01 7.5h-.01a.8.8 0 0 1 0-1.6h.01a.8.8 0 1 1 0 1.6" clip-rule="evenodd"/>
  </svg>
`;
const HighLightDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="m5.83 16.441 2.088 2.089-1.34 1.339a.2.2 0 0 1-.18.055L3.37 19.34a.2.2 0 0 1-.103-.338z"/><path fill='currentColor' fill-rule="evenodd" d="M19.01 3.638a2.86 2.86 0 0 0-3.884-.149L7.32 10.184a2.86 2.86 0 0 0-.74 3.357l.154.336-1.058 1.058a.96.96 0 0 0 0 1.36l2.387 2.386a.96.96 0 0 0 1.359 0l1.058-1.058.336.154a2.86 2.86 0 0 0 3.358-.74l6.694-7.804a2.86 2.86 0 0 0-.148-3.884zm-2.908.99a1.36 1.36 0 0 1 1.847.07L19.66 6.41a1.36 1.36 0 0 1 .07 1.846l-5.087 5.932-4.472-4.472zM9.03 10.695l-.731.627a1.36 1.36 0 0 0-.352 1.597l.352.77c.137.3.082.665-.164.911l-1.015 1.015 1.624 1.625 1.015-1.015a.81.81 0 0 1 .911-.164l.77.351a1.36 1.36 0 0 0 1.597-.352l.627-.73z" clip-rule="evenodd"/>
  </svg>
`;
const HighLightLinear = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18.336 5.522a.917.917 0 0 0-1.297 0l-1.062 1.062 1.296 1.296 1.063-1.062a.917.917 0 0 0 0-1.296m1.06 2.357A2.417 2.417 0 1 0 15.98 4.46l-1.592 1.592-8.115 8.115-.056.056c-.646.646-1.044 1.044-1.356 1.506a5.8 5.8 0 0 0-.66 1.32c-.183.527-.263 1.084-.392 1.989l-.05.355a.75.75 0 0 0 .89.841l.477-.096c.813-.164 1.314-.265 1.786-.45a5.8 5.8 0 0 0 1.186-.636c.416-.291.777-.652 1.364-1.239zM16.213 8.94l-1.297-1.296-7.583 7.583c-.72.72-1.008 1.012-1.228 1.34a4.3 4.3 0 0 0-.488.976c-.09.258-.147.531-.221 1.009.467-.099.724-.165.966-.26q.466-.184.876-.47c.295-.206.56-.467 1.213-1.12zM12.083 19.5a.75.75 0 0 1 .75-.75H19.5a.75.75 0 0 1 0 1.5h-6.667a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const History = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.168 6.595h-.001l-1.217 1.1H7.5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v1.757l1.416-1.279a8.75 8.75 0 1 1-2.7 8.466.75.75 0 1 1 1.464-.332 7.25 7.25 0 1 0 2.238-7.017" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M12 6.75a.75.75 0 0 1 .75.75v4.19l2.78 2.78a.75.75 0 1 1-1.06 1.06l-2.971-2.97a.85.85 0 0 1-.249-.601V7.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Image = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zM4.75 18v-1.69l4.366-4.365a1.25 1.25 0 0 1 1.768 0l2.586 2.585 2 2a.75.75 0 1 0 1.06-1.06L15.06 14l1.056-1.056a1.25 1.25 0 0 1 1.768 0l1.366 1.367V18c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25m7.195-7.116L14 12.939l1.056-1.055a2.75 2.75 0 0 1 3.889 0l.305.305V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v8.19l3.305-3.306a2.75 2.75 0 0 1 3.89 0M14 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/>
  </svg>
`;
const Import = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v10.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4a.75.75 0 0 1 .75-.75m-8 12a.75.75 0 0 1 .75.75v1A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17v-1a.75.75 0 0 1 1.5 0v1A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const ImproveWriting = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.25 3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm0 10a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zm-3.5-3.5a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75m9.25.75a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zM7.555 7.555a.75.75 0 0 1-1.06 0l-2.121-2.12a.75.75 0 1 1 1.06-1.061l2.121 2.12a.75.75 0 0 1 0 1.061M18.97 20.03a.75.75 0 1 0 1.06-1.06l-7.525-7.525a.75.75 0 0 0-1.06 1.06zM7.555 11.444a.75.75 0 0 1 0 1.061l-2.12 2.121a.75.75 0 1 1-1.061-1.06l2.12-2.122a.75.75 0 0 1 1.061 0m7.072-6.01a.75.75 0 0 0-1.061-1.06l-2.122 2.12a.75.75 0 1 0 1.061 1.061z" clip-rule="evenodd"/>
  </svg>
`;
const Inbox = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25zm13.25 9V6c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v6.25h1.836c.464 0 .909.184 1.237.513l2.414 2.414a.25.25 0 0 0 .177.073h3.172a.25.25 0 0 0 .177-.073l2.414-2.414a1.75 1.75 0 0 1 1.237-.513zm-14.5 1.5h1.836a.25.25 0 0 1 .177.073l2.414 2.414a1.75 1.75 0 0 0 1.237.513h3.172c.464 0 .909-.184 1.237-.513l2.414-2.414a.25.25 0 0 1 .177-.073h1.836V18c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const Info = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.75 6a.75.75 0 0 1-.75.75h-9.353a2.751 2.751 0 0 1-5.293 0H4a.75.75 0 0 1 0-1.5h1.354a2.751 2.751 0 0 1 5.292 0H20a.75.75 0 0 1 .75.75m0 6a.75.75 0 0 1-.75.75h-1.354a2.751 2.751 0 0 1-5.292 0H4a.75.75 0 0 1 0-1.5h9.354a2.751 2.751 0 0 1 5.293 0H20a.75.75 0 0 1 .75.75m0 6a.75.75 0 0 1-.75.75h-9.353a2.751 2.751 0 0 1-5.293 0H4a.75.75 0 0 1 0-1.5h1.354a2.751 2.751 0 0 1 5.292 0H20a.75.75 0 0 1 .75.75m-3.5-6a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m-8-6a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m0 12a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"/>
  </svg>
`;
const Information = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const InformationFillDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const InsertBleow = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 6.5A.75.75 0 0 1 5 5.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m0 3.5A.75.75 0 0 1 5 9.25h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M13 12.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m-6-4a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h2.75v.75a.75.75 0 0 0 1.28.53l1.5-1.5a.75.75 0 0 0 0-1.06l-1.5-1.5a.75.75 0 0 0-1.28.53v.75h-2z" clip-rule="evenodd"/>
  </svg>
`;
const InsertBlocks = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.333 4A2.833 2.833 0 0 0 3.5 6.833v2.06a2.833 2.833 0 0 0 2.833 2.834h2.06a2.833 2.833 0 0 0 2.834-2.833v-2.06A2.833 2.833 0 0 0 8.394 4zM5.045 6.833c0-.71.577-1.288 1.288-1.288h2.06c.712 0 1.289.577 1.289 1.288v2.06c0 .712-.577 1.289-1.288 1.289h-2.06a1.29 1.29 0 0 1-1.289-1.288zm1.288 6.44A2.833 2.833 0 0 0 3.5 16.106v2.06A2.833 2.833 0 0 0 6.333 21h2.06a2.833 2.833 0 0 0 2.834-2.833v-2.06a2.833 2.833 0 0 0-2.833-2.834zm-1.288 2.833c0-.711.577-1.288 1.288-1.288h2.06c.712 0 1.289.577 1.289 1.288v2.06c0 .712-.577 1.288-1.288 1.288h-2.06a1.29 1.29 0 0 1-1.289-1.287zm7.728-9.273A2.833 2.833 0 0 1 15.606 4h2.06A2.833 2.833 0 0 1 20.5 6.833v2.06a2.833 2.833 0 0 1-2.833 2.834h-2.06a2.833 2.833 0 0 1-2.834-2.833zm2.833-1.288c-.711 0-1.288.577-1.288 1.288v2.06c0 .712.577 1.289 1.288 1.289h2.06c.712 0 1.288-.577 1.288-1.288v-2.06c0-.712-.576-1.289-1.287-1.289zm1.803 8.5a.773.773 0 1 0-1.545 0v2.319h-2.318a.773.773 0 0 0 0 1.545h2.318v2.318a.773.773 0 0 0 1.545 0V17.91h2.318a.773.773 0 0 0 0-1.545H17.41z" clip-rule="evenodd"/>
  </svg>
`;
const InsertLeft = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14 3.75a1.75 1.75 0 0 0-1.75 1.75v13c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-13A1.75 1.75 0 0 0 18 3.75zm-.25 1.75a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25h-4a.25.25 0 0 1-.25-.25zm-5.5 4a.75.75 0 0 0-1.5 0v1.75H5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75H10a.75.75 0 0 0 0-1.5H8.25z" clip-rule="evenodd"/>
  </svg>
`;
const InsertRight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.75A1.75 1.75 0 0 0 4.25 5.5v13c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 0 0 1.75-1.75v-13A1.75 1.75 0 0 0 10 3.75zM5.75 5.5A.25.25 0 0 1 6 5.25h4a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25H6a.25.25 0 0 1-.25-.25zm11.5 4a.75.75 0 0 0-1.5 0v1.75H14a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75H19a.75.75 0 0 0 0-1.5h-1.75z" clip-rule="evenodd"/>
  </svg>
`;
const InsertTop = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.25 11a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75h2.75V6.5a.75.75 0 0 1 1.28-.53l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.28-.53v-.75h-2zm6-4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M5 13.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const InstagramDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill="url(#a)" d="M16.648 3.25H7.352A4.1 4.1 0 0 0 3.25 7.352v9.296a4.1 4.1 0 0 0 4.102 4.102h9.296a4.1 4.1 0 0 0 4.102-4.102V7.352a4.1 4.1 0 0 0-4.102-4.102"/><path fill="url(#b)" d="M16.648 3.25H7.352A4.1 4.1 0 0 0 3.25 7.352v9.296a4.1 4.1 0 0 0 4.102 4.102h9.296a4.1 4.1 0 0 0 4.102-4.102V7.352a4.1 4.1 0 0 0-4.102-4.102"/><path fill='currentColor' d="M11.837 5c-1.857 0-2.09.008-2.82.041-.727.034-1.224.149-1.658.318-.45.174-.831.408-1.211.788s-.614.762-.79 1.211c-.169.435-.284.932-.317 1.66C5.01 9.745 5 9.978 5 11.835s.008 2.089.041 2.818c.034.728.149 1.225.318 1.66.175.449.408.83.788 1.21s.762.614 1.21.79c.436.168.933.283 1.66.317.73.033.962.041 2.819.041s2.089-.008 2.818-.041c.728-.034 1.225-.149 1.66-.318.45-.174.83-.409 1.21-.789s.614-.761.789-1.21c.168-.435.283-.932.318-1.66.032-.729.04-.961.04-2.818s-.008-2.09-.04-2.819c-.035-.727-.15-1.224-.318-1.659a3.36 3.36 0 0 0-.789-1.21 3.3 3.3 0 0 0-1.21-.789c-.436-.17-.933-.284-1.661-.318-.73-.033-.961-.041-2.819-.041zm-.614 1.232h.614c1.825 0 2.041.006 2.762.04.666.03 1.028.141 1.27.235.318.124.546.272.785.511.239.24.387.467.511.786.094.24.205.602.236 1.269.032.72.04.937.04 2.761s-.008 2.041-.04 2.762c-.03.666-.142 1.028-.236 1.269-.124.319-.272.546-.511.785-.24.24-.467.388-.786.511-.24.094-.603.205-1.27.236-.72.033-.936.04-2.761.04s-2.042-.007-2.763-.04c-.666-.03-1.028-.142-1.27-.236a2.1 2.1 0 0 1-.785-.511 2.1 2.1 0 0 1-.512-.786c-.093-.24-.205-.602-.235-1.269-.033-.72-.04-.937-.04-2.762 0-1.826.007-2.041.04-2.762.03-.666.142-1.028.235-1.269.124-.319.272-.547.512-.786.239-.24.467-.387.786-.512.24-.094.603-.205 1.27-.235.63-.029.874-.037 2.148-.039zm4.263 1.135a.82.82 0 1 0 0 1.64.82.82 0 0 0 0-1.64m-3.65.958a3.51 3.51 0 1 0 .001 7.022 3.51 3.51 0 0 0 0-7.022m0 1.232a2.279 2.279 0 1 1 0 4.557 2.279 2.279 0 0 1 0-4.557"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="matrix(0 -17.3438 16.1311 0 7.898 22.098)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="rotate(78.681 -2.592 2.45)scale(7.75277 31.9572)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs>
  </svg>
`;
const Insync = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11 4.75a4.25 4.25 0 0 0-4.147 5.183.75.75 0 0 1-.568.896 3.252 3.252 0 0 0-1.435 5.609.75.75 0 1 1-.992 1.124 4.751 4.751 0 0 1 1.42-7.99A5.75 5.75 0 0 1 16.485 7.27a5.75 5.75 0 0 1 2.966 10.33.75.75 0 1 1-.901-1.2 4.25 4.25 0 0 0-2.635-7.65.75.75 0 0 1-.75-.6A4.25 4.25 0 0 0 11 4.75m-1.29 8.311a2.978 2.978 0 0 1 5.161 1.17.75.75 0 1 0 1.453-.373 4.478 4.478 0 0 0-8.036-1.4l-.57-.242a.3.3 0 0 0-.411.338l.474 2.283a.3.3 0 0 0 .454.192l1.971-1.246a.3.3 0 0 0-.043-.53zm2.063 5.327a2.97 2.97 0 0 0 2.278-1.062l-.453-.191a.3.3 0 0 1-.043-.53l1.971-1.247a.3.3 0 0 1 .454.193l.475 2.283a.3.3 0 0 1-.41.337l-.571-.241a4.47 4.47 0 0 1-3.701 1.958 4.47 4.47 0 0 1-4.336-3.358.75.75 0 1 1 1.453-.374 2.973 2.973 0 0 0 2.883 2.232" clip-rule="evenodd"/>
  </svg>
`;
const Invisible = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.6 7.55a.75.75 0 1 0-1.2.9 10.8 10.8 0 0 0 2.939 2.69l-1.963 2.944a.75.75 0 0 0 1.248.832l2-3a1 1 0 0 0 .044-.075c1.108.489 2.315.796 3.582.883V17.5a.75.75 0 1 0 1.5 0v-4.776a10.7 10.7 0 0 0 3.582-.883q.02.038.044.075l2 3a.75.75 0 0 0 1.248-.832l-1.962-2.944A10.8 10.8 0 0 0 20.6 8.45a.75.75 0 0 0-1.2-.9 9.24 9.24 0 0 1-7.4 3.7 9.24 9.24 0 0 1-7.402-3.7" clip-rule="evenodd"/>
  </svg>
`;
const Issue = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/><path fill='currentColor' d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </svg>
`;
const Italic = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.608 3.25H10.25a.75.75 0 0 0 0 1.5h3.34l-4.758 14.5H5a.75.75 0 1 0 0 1.5h8.75a.75.75 0 0 0 0-1.5h-3.34l4.758-14.5H19a.75.75 0 0 0 0-1.5h-4.392" clip-rule="evenodd"/>
  </svg>
`;
const Journal = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M16.25 4.5H18a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4.25V11a.75.75 0 0 0 1.166.624l1.834-1.223 1.834 1.223A.75.75 0 0 0 16.25 11zM4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm7.75 4.599V4.75h3v4.849l-1.084-.723a.75.75 0 0 0-.832 0z" clip-rule="evenodd"/>
  </svg>
`;
const Keyboard = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.997 8.92a1 1 0 1 0-1.993.16 1 1 0 0 0 1.993-.16m8.508 3.16a1 1 0 1 0 1.993-.16 1 1 0 0 0-1.993.16m-1.001-.16a1 1 0 1 0-1.993.16 1 1 0 0 0 1.993-.16M7.999 9.08a1 1 0 1 0 1.993-.16 1 1 0 0 0-1.993.16M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17zM5 5.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zm1 9.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75m5.213-3.958A1 1 0 1 0 9.8 12.708a1 1 0 0 0 1.414-1.416m-3 0a1 1 0 1 0-1.415 1.415 1 1 0 0 0 1.415-1.415m4.49-3a1 1 0 1 0-1.414 1.416 1 1 0 0 0 1.415-1.415m3.001 0a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.414m3.001 0a1 1 0 1 0-1.415 1.416 1 1 0 0 0 1.415-1.415" clip-rule="evenodd"/>
  </svg>
`;
const Language = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 1 1 0 1.5h-1.625a18.7 18.7 0 0 1-3.511 7.68c.341.356.704.684 1.086.97a.75.75 0 1 1-.9 1.2c-.405-.304-.79-.645-1.153-1.012A18.8 18.8 0 0 1 3.334 18.8a.75.75 0 0 1-.668-1.344 17.3 17.3 0 0 0 5.238-4.01c-1.05-1.36-1.819-2.9-2.212-4.235a.75.75 0 0 1 1.44-.424c.318 1.085.93 2.332 1.747 3.458A17.2 17.2 0 0 0 11.84 5.75H3.5a.75.75 0 0 1 0-1.5h4.75V3A.75.75 0 0 1 9 2.25m7 8a.75.75 0 0 1 .67.415l3.494 6.986.014.028 1.493 2.986a.75.75 0 0 1-1.342.67l-1.293-2.585h-6.072l-1.293 2.585a.75.75 0 0 1-1.342-.67l1.493-2.986.014-.028 3.493-6.986A.75.75 0 0 1 16 10.25m-2.286 7h4.573L16 12.677z" clip-rule="evenodd"/>
  </svg>
`;
const Layer = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.754 3.802a.75.75 0 0 1 .631-.01l7.92 3.523a.75.75 0 0 1 .021 1.36l-8.08 3.904a.75.75 0 0 1-.631.01l-7.92-3.522a.75.75 0 0 1-.021-1.36zm.34 1.502-6.312 3.05 6.124 2.723 6.312-3.049zm8.581 6.56a.75.75 0 0 1-.349 1.002l-8.08 3.904a.75.75 0 0 1-.631.01l-7.92-3.523a.75.75 0 0 1 .61-1.37l7.601 3.38 7.768-3.752a.75.75 0 0 1 1.001.35m0 4.31a.75.75 0 0 1-.349 1.001l-8.08 3.904a.75.75 0 0 1-.631.01l-7.92-3.522a.75.75 0 0 1 .61-1.371l7.601 3.381 7.768-3.752a.75.75 0 0 1 1.001.349" clip-rule="evenodd"/>
  </svg>
`;
const Layout = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 5.74a2.49 2.49 0 0 1 2.49-2.49h3.52a2.49 2.49 0 0 1 2.49 2.49v12.52a2.49 2.49 0 0 1-2.49 2.49H5.74a2.49 2.49 0 0 1-2.49-2.49zm2.49-.99a.99.99 0 0 0-.99.99v12.52c0 .547.443.99.99.99h3.52a.99.99 0 0 0 .99-.99V5.74a.99.99 0 0 0-.99-.99zm7.51.99a2.49 2.49 0 0 1 2.49-2.49h2.52a2.49 2.49 0 0 1 2.49 2.49v3.52a2.49 2.49 0 0 1-2.49 2.49h-2.52a2.49 2.49 0 0 1-2.49-2.49zm2.49-.99a.99.99 0 0 0-.99.99v3.52c0 .547.443.99.99.99h2.52a.99.99 0 0 0 .99-.99V5.74a.99.99 0 0 0-.99-.99zm0 8.5a2.49 2.49 0 0 0-2.49 2.49v2.52a2.49 2.49 0 0 0 2.49 2.49h2.52a2.49 2.49 0 0 0 2.49-2.49v-2.52a2.49 2.49 0 0 0-2.49-2.49zm-.99 2.49a.99.99 0 0 1 .99-.99h2.52a.99.99 0 0 1 .99.99v2.52a.99.99 0 0 1-.99.99h-2.52a.99.99 0 0 1-.99-.99z" clip-rule="evenodd"/>
  </svg>
`;
const Level = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9.371 17.75H17a.75.75 0 0 0 0-1.5H9.4c-.432 0-.712 0-.924-.018-.204-.017-.28-.045-.316-.064a.75.75 0 0 1-.328-.327c-.02-.038-.047-.113-.064-.317a13 13 0 0 1-.018-.924V7a.75.75 0 1 0-1.5 0v7.629c0 .395 0 .736.023 1.017.024.297.078.592.222.875.216.424.56.768.984.984.283.144.578.198.875.222.28.023.622.023 1.017.023" clip-rule="evenodd"/>
  </svg>
`;
const LightMode = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.75 2.698a.75.75 0 0 0-1.5 0V3.73a.75.75 0 1 0 1.5 0zM5.812 4.75a.75.75 0 0 0-1.06 1.061l.84.842a.75.75 0 0 0 1.061-1.061zm13.437 1.061a.75.75 0 1 0-1.061-1.06l-.841.84a.75.75 0 1 0 1.06 1.062zM2.698 11.25a.75.75 0 0 0 0 1.5H3.73a.75.75 0 0 0 0-1.5zm17.57 0a.75.75 0 0 0 0 1.5h1.034a.75.75 0 0 0 0-1.5zM6.653 18.413a.75.75 0 0 0-1.058-1.063l-.841.837A.75.75 0 0 0 5.81 19.25zm11.754-1.063a.75.75 0 0 0-1.058 1.063l.841.837a.75.75 0 1 0 1.058-1.063zm-5.656 2.919a.75.75 0 0 0-1.5 0v1.033a.75.75 0 1 0 1.5 0zM16.081 12a4.081 4.081 0 1 1-8.162 0 4.081 4.081 0 0 1 8.162 0m1.5 0A5.581 5.581 0 1 1 6.42 12a5.581 5.581 0 0 1 11.162 0" clip-rule="evenodd"/>
  </svg>
`;
const LineStyle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.65 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 3.65 5m6.1 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 9.75 5m7.05-.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM3.245 12c0-.47.38-.85.85-.85h15.79a.85.85 0 0 1 0 1.7H4.094a.85.85 0 0 1-.85-.85M4.5 17.75a1.25 1.25 0 1 0 0 2.5h15a1.25 1.25 0 0 0 0-2.5z" clip-rule="evenodd"/>
  </svg>
`;
const LinearLogo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill="url(#b)" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"/><g filter="url(#c)"><path fill="url(#d)" d="M6.147 13.383c-.027-.114.109-.186.192-.103l4.381 4.381c.083.083.011.219-.103.192a6.02 6.02 0 0 1-4.47-4.47"/><path fill="url(#e)" d="M6 11.627a.12.12 0 0 0 .035.091l6.247 6.247a.12.12 0 0 0 .091.035q.428-.027.836-.111a.117.117 0 0 0 .057-.198L6.31 10.734a.117.117 0 0 0-.198.057 6 6 0 0 0-.11.836"/><path fill="url(#f)" d="M6.505 9.565a.12.12 0 0 0 .025.132l7.773 7.773a.12.12 0 0 0 .132.025q.322-.144.623-.322a.118.118 0 0 0 .022-.185L7.012 8.92a.118.118 0 0 0-.185.022q-.178.3-.322.623"/><path fill="url(#g)" d="M7.519 8.169a.12.12 0 0 1-.005-.163 6.006 6.006 0 1 1 8.48 8.48.12.12 0 0 1-.163-.005z"/></g></g><defs><filter id="c" width="154.574" height="154.574" x="-65.287" y="-54.148" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="11.139"/><feGaussianBlur stdDeviation="35.644"/><feColorMatrix values="0 0 0 0 0.118924 0 0 0 0 0.158031 0 0 0 0 0.570833 0 0 0 0.7 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_13632_16479"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="3.899"/><feGaussianBlur stdDeviation="15"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"/><feBlend in2="effect1_dropShadow_13632_16479" result="effect2_dropShadow_13632_16479"/><feBlend in="SourceGraphic" in2="effect2_dropShadow_13632_16479" result="shape"/></filter><linearGradient id="b" x1="12" x2="12" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#5C6BF1"/><stop offset="1" stop-color="#283188"/></linearGradient><linearGradient id="d" x1="6.429" x2="12.686" y1="7.114" y2="16.286" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".65"/></linearGradient><linearGradient id="e" x1="6.429" x2="12.686" y1="7.114" y2="16.286" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".65"/></linearGradient><linearGradient id="f" x1="6.429" x2="12.686" y1="7.114" y2="16.286" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".65"/></linearGradient><linearGradient id="g" x1="6.429" x2="12.686" y1="7.114" y2="16.286" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".65"/></linearGradient><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const Link = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18.428 5.572a2.806 2.806 0 0 0-3.967 0l-.978.977a.75.75 0 0 1-1.06-1.06l.977-.978a4.305 4.305 0 1 1 6.089 6.089l-3.556 3.556a4.306 4.306 0 0 1-6.089 0 .75.75 0 0 1 1.061-1.061 2.805 2.805 0 0 0 3.968 0l3.555-3.556a2.806 2.806 0 0 0 0-3.967m-5.333 5.333a2.805 2.805 0 0 0-3.968 0l-3.555 3.556a2.806 2.806 0 0 0 3.967 3.967l.98-.979a.75.75 0 0 1 1.06 1.06l-.979.98A4.305 4.305 0 1 1 4.511 13.4l3.556-3.556a4.306 4.306 0 0 1 6.089 0 .75.75 0 0 1-1.061 1.061" clip-rule="evenodd"/>
  </svg>
`;
const LinkedEdgeless = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.5 4.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M3.25 6.5a3.25 3.25 0 0 1 6.49-.25c.794.001 1.56.016 2.357.208.897.217 1.79.645 2.853 1.442l.02.015.02.017c.864.745 1.475 1.75 1.841 2.826a.75.75 0 0 1-1.42.484c-.294-.865-.766-1.62-1.382-2.158-.928-.692-1.633-1.01-2.284-1.167-.675-.163-1.334-.167-2.244-.167A3.26 3.26 0 0 1 7.25 9.663v3.674a3.251 3.251 0 1 1-1.5 0V9.663A3.25 3.25 0 0 1 3.25 6.5m3.25 8.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m8-1.5a.75.75 0 0 0 0 1.5h2.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v2.69a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"/>
  </svg>
`;
const LinkedPage = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 6A2.75 2.75 0 0 1 7 3.25h10A2.75 2.75 0 0 1 19.75 6v6a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h5a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 18zm4 2A.75.75 0 0 1 9 7.25h3a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 8M9 10.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 15a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m7.25-.75a.75.75 0 0 0 0 1.5h2.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v2.69a.75.75 0 0 0 1.5 0V15a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"/>
  </svg>
`;
const LocalData = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 6.5c0-.69.56-1.25 1.25-1.25h4.672c.331 0 .649.132.883.366L11.97 7.03c.14.141.331.22.53.22H19c.69 0 1.25.56 1.25 1.25V17c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25zM5 3.75A2.75 2.75 0 0 0 2.25 6.5V17A2.75 2.75 0 0 0 5 19.75h14A2.75 2.75 0 0 0 21.75 17V8.5A2.75 2.75 0 0 0 19 5.75h-6.19l-1.194-1.195a2.75 2.75 0 0 0-1.944-.805zm10.48 10.026-3 2.5a.75.75 0 0 1-.96 0l-3-2.5a.75.75 0 1 1 .96-1.152l1.77 1.475v-4.4a.75.75 0 0 1 1.5 0v4.4l1.77-1.475a.75.75 0 1 1 .96 1.152" clip-rule="evenodd"/>
  </svg>
`;
const LocalWorkspace = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.75 5.389A2.64 2.64 0 0 1 5.389 2.75H18.61a2.64 2.64 0 0 1 2.639 2.639v9.444a2.64 2.64 0 0 1-2.639 2.64h-3.525l.425 1.7.797.797a.75.75 0 0 1-.53 1.28H8.222a.75.75 0 0 1-.53-1.28l.797-.798.425-1.7H5.39a2.64 2.64 0 0 1-2.639-2.639zm1.5 8.305v1.14c0 .628.51 1.138 1.139 1.138h13.223c.628 0 1.138-.51 1.138-1.139v-1.139zm15.5-1.5H4.25V5.39c0-.63.51-1.139 1.139-1.139H18.61c.63 0 1.139.51 1.139 1.139zm-6.21 5.278h-3.08l-.566 2.265-.003.013h4.218l-.003-.012z" clip-rule="evenodd"/>
  </svg>
`;
const Locate = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v1.286a7.75 7.75 0 0 1 6.964 6.964H21a.75.75 0 0 1 0 1.5h-1.286a7.75 7.75 0 0 1-6.964 6.964V21a.75.75 0 0 1-1.5 0v-1.286a7.75 7.75 0 0 1-6.964-6.964H3a.75.75 0 0 1 0-1.5h1.286a7.75 7.75 0 0 1 6.964-6.964V3a.75.75 0 0 1 .75-.75m-.75 3.545a6.25 6.25 0 0 0-5.455 5.455H7a.75.75 0 0 1 0 1.5H5.795a6.25 6.25 0 0 0 5.455 5.456V17a.75.75 0 0 1 1.5 0v1.206a6.25 6.25 0 0 0 5.456-5.456H17a.75.75 0 0 1 0-1.5h1.206a6.25 6.25 0 0 0-5.456-5.455V7a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"/><path fill='currentColor' d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </svg>
`;
const Lock = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.25 8a5.75 5.75 0 1 1 11.5 0v1.356c.34.058.655.151.953.303a3.75 3.75 0 0 1 1.638 1.638c.227.445.321.925.366 1.471.043.531.043 1.187.043 2v1.464c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043H8.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.464c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.297-.15.612-.244.952-.302zm1.5 1.254q.465-.005 1.027-.004h6.446q.562-.001 1.027.004V8a4.25 4.25 0 0 0-8.5 0zM8.8 10.75c-.756 0-1.31 0-1.754.027-.551.034-.847.106-1.067.218a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.056-.038 1.909v1.4c0 .852 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h6.4c.852 0 1.447 0 1.91-.038.453-.038.714-.107.912-.207.423-.216.767-.56.983-.983.1-.198.17-.459.207-.913.037-.462.038-1.057.038-1.909v-1.4c0-.853 0-1.447-.038-1.91-.038-.453-.107-.714-.207-.912a2.25 2.25 0 0 0-.983-.983c-.22-.112-.517-.184-1.068-.218a32 32 0 0 0-1.754-.027zm3.2 3a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Logo1 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="m21.602 18.535-1.456-2.523-.497-.86-.846-1.466c-1.49-2.574-4.421-7.67-5.886-10.189-.451-.702-1.497-.647-1.885.08L9.594 6.069l-.496.859-6.409 11.1c-.09.165-.26.434-.345.611-.148.321-.119.72.068 1.017.21.351.605.543 1.007.524h3.832c4.618 0 11.672.003 13.403 0 .84.001 1.368-.92.95-1.645zm-9.94-3.273-.85-1.472a.388.388 0 0 1 .337-.583h1.7c.299 0 .485.324.335.583l-.85 1.472a.388.388 0 0 1-.672 0m-1.424-2.742a5 5 0 0 1-.18-.546l2.811.546zm1.285 3.874q-.18.226-.383.43l-.933-2.708zm2.712-3.05q.287.044.564.117l-1.88 2.162zm-4.35-2.293a7 7 0 0 1-.043-.827l3.714 1.811-3.672-.983zm-.441 2.712.983 3.67a7 7 0 0 1-.696.45zm6.24.01q.38.167.738.377l-3.425 2.311zM9.928 9.055a12 12 0 0 1 .3-1.474l5.642 4.905zm-1.25 9.34c-.47.193-.95.35-1.426.477l1.426-7.337zm8.715-3.587c.4.31.778.65 1.126.997l-7.068 2.433zm-5.147-9.984c1.04 1.805 2.55 4.422 3.99 6.913l-5.372-5.371.89-1.543c.11-.19.383-.19.492 0m-8.39 13.678c.297-.51.703-1.21.793-1.372l3.2-5.542-1.966 7.34h-1.78a.284.284 0 0 1-.246-.425m16.042.428h-7.986l7.341-1.968.89 1.542a.283.283 0 0 1-.244.426z"/>
  </svg>
`;
const Logo2 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M3.462 20.18c-.427 0-.824-.22-1.036-.573a1.19 1.19 0 0 1-.073-1.108c.057-.118.147-.272.227-.407q.069-.114.117-.203l8.249-14.263A1.2 1.2 0 0 1 12.003 3c.407 0 .78.203.998.542.88 1.508 2.255 3.89 3.586 6.194l2.235 3.866 1.483 2.564 1.284 2.221c.215.37.215.817-.002 1.193a1.18 1.18 0 0 1-1.03.598H3.515zm14.477-1.458h1.868c.06 0 .116-.031.146-.084a.17.17 0 0 0 0-.168l-1.565-2.705c-1.116-1.243-2.297-2.08-3.513-2.493a1.44 1.44 0 0 1-.194.692l-1.418 2.452a1.4 1.4 0 0 1-.2.267c-.056.083-.176.26-.19.284l-.005.01-.007.008c-.334.41-.702.763-1.122 1.083q-.468.355-1.01.653zM4.83 17.114c-.072.129-.344.598-.607 1.051l-.176.304a.17.17 0 0 0 0 .168c.03.052.084.084.146.084H7.32c1.636-.342 2.953-.945 3.918-1.79a1.44 1.44 0 0 1-.503-.514l-1.418-2.452a1.5 1.5 0 0 1-.132-.305c-.044-.09-.138-.282-.152-.306l-.006-.01-.003-.01a6.5 6.5 0 0 1-.378-1.512c-.05-.387-.07-.79-.062-1.2zm6.975-1.314a.222.222 0 0 0 .355.043l.068-.102 1.383-2.392a.224.224 0 0 0-.14-.329l-.123-.009v.001h-2.766a.224.224 0 0 0-.215.286q.037.072.054.11zm2.306-3.958a6.6 6.6 0 0 1 1.5.43q.542.226 1.07.545c-1.429-2.47-3.296-5.7-4.536-7.848A.17.17 0 0 0 12 4.885a.17.17 0 0 0-.145.084l-1.563 2.703c-.521 1.587-.658 3.028-.407 4.286a1.45 1.45 0 0 1 .698-.178h2.835q.164 0 .33.039c.115.008.313.022.342.022h.013z"/>
  </svg>
`;
const Logo3 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' d="M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z"/><path fill='currentColor' d="M4.557 18.977c-.373 0-.719-.191-.904-.499a1.04 1.04 0 0 1-.063-.966c.05-.103.128-.237.198-.355q.06-.1.102-.177l7.19-12.434c.18-.336.534-.546.923-.546.354 0 .68.177.87.472.766 1.315 1.966 3.392 3.126 5.4.74 1.282 1.442 2.496 1.949 3.37.303.526.804 1.393 1.293 2.236l1.119 1.936c.187.324.187.713-.002 1.04a1.03 1.03 0 0 1-.899.521l-2.74.002-5.453-.001H6.469zm12.62-1.27h1.629c.053 0 .1-.028.127-.074a.14.14 0 0 0 0-.146l-1.364-2.359c-.973-1.083-2.002-1.814-3.063-2.173a1.25 1.25 0 0 1-.17.604l-1.235 2.137q-.072.124-.174.232l-.166.248-.004.01-.006.006a5.7 5.7 0 0 1-.978.944 7 7 0 0 1-.88.57zM5.75 16.304c-.062.112-.3.52-.529.916l-.154.265a.14.14 0 0 0 0 .146.14.14 0 0 0 .128.073H7.92c1.426-.298 2.574-.823 3.415-1.56a1.26 1.26 0 0 1-.438-.448L9.662 13.56a1.3 1.3 0 0 1-.115-.267c-.039-.079-.12-.246-.132-.267l-.006-.009-.003-.007a5.7 5.7 0 0 1-.33-1.319 7 7 0 0 1-.053-1.046zm6.08-1.146a.194.194 0 0 0 .31.038l.06-.09 1.206-2.085a.196.196 0 0 0-.122-.287l-.108-.007h-2.411a.196.196 0 0 0-.187.25l.047.096zm2.011-3.45c.456.074.884.196 1.309.374q.472.197.932.475c-1.246-2.153-2.874-4.97-3.954-6.841a.14.14 0 0 0-.128-.074c-.053 0-.1.028-.126.074L10.51 8.073c-.454 1.384-.574 2.64-.355 3.737.187-.102.395-.155.609-.155h2.471q.143 0 .289.033c.099.007.272.02.298.02h.018"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const Logo4 = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' d="M0 5a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5z"/><path fill='currentColor' d="m20.371 17.543-1.27-2.199-.433-.75-.737-1.278c-1.299-2.244-3.855-6.686-5.132-8.883-.393-.612-1.305-.563-1.643.07L9.902 6.676l-.432.748-5.587 9.678c-.08.143-.227.378-.3.532a.95.95 0 0 0 .058.887.97.97 0 0 0 .878.456H7.86c4.026 0 10.175.003 11.684 0a.958.958 0 0 0 .828-1.434zm-8.665-2.853-.741-1.283a.34.34 0 0 1 .293-.508h1.482c.26 0 .423.282.293.508l-.741 1.283a.34.34 0 0 1-.587 0m-1.242-2.39a5 5 0 0 1-.158-.477l2.452.477zm1.12 3.376a5 5 0 0 1-.334.376l-.813-2.361zm2.365-2.658q.25.038.491.102l-1.638 1.885zm-3.794-2a6 6 0 0 1-.036-.72l3.237 1.579-3.201-.858m-.384 2.365.858 3.2a6 6 0 0 1-.607.393zm5.442.009q.33.145.642.329l-2.986 2.014zm-5.02-4.113c.06-.439.151-.87.262-1.285l4.918 4.276zm-1.09 8.143c-.41.167-.829.304-1.243.415l1.243-6.396zm7.597-3.128c.35.27.679.566.982.87l-6.161 2.12zM12.214 5.59c.907 1.574 2.223 3.855 3.478 6.027l-4.683-4.683.776-1.345a.248.248 0 0 1 .429 0zM4.9 17.515c.258-.445.612-1.056.69-1.196l2.791-4.832-1.715 6.4H5.114a.247.247 0 0 1-.214-.372m13.985.372h-6.963l6.4-1.715.777 1.345a.247.247 0 0 1-.214.37"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const Longer = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 5.75a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M5 16.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const LoomLogo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M22 10.888h-5.848l5.065-2.924-1.113-1.927L15.04 8.96l2.924-5.065-1.927-1.113-2.924 5.065V2h-2.224v5.848L7.963 2.783 6.036 3.896 8.961 8.96 3.896 6.037 2.783 7.963l5.065 2.924H2v2.225h5.848l-5.065 2.924 1.113 1.927L8.96 15.04l-2.924 5.064 1.927 1.113 2.924-5.065V22h2.225v-5.848l2.923 5.065 1.927-1.113-2.924-5.065 5.065 2.924 1.113-1.927-5.065-2.923H22v-2.225zm-10 4.138a3.037 3.037 0 1 1 0-6.074 3.037 3.037 0 0 1 0 6.074"/>
  </svg>
`;
const Lt = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m7.192 11.316 10-4.5.616 1.368L9.328 12l8.48 3.816-.616 1.368-10-4.5a.75.75 0 0 1 0-1.368" clip-rule="evenodd"/>
  </svg>
`;
const MakeItReal = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.274 10.907c-.641.776-.047 1.943.958 1.88l3.617-.225 1.944 3.059c.54.85 1.834.644 2.085-.33l.686-2.666 7.406 7.405a.75.75 0 1 0 1.06-1.06l-7.405-7.406 2.666-.687c.975-.25 1.18-1.544.33-2.084l-3.058-1.944.225-3.618c.062-1.004-1.105-1.599-1.88-.958L8.113 4.581 4.743 3.25c-.937-.37-1.862.556-1.493 1.492l1.332 3.37zm4.688.145-3.018.188L5.87 8.909a1.15 1.15 0 0 0 .183-1.155L4.942 4.94l2.812 1.111c.39.154.832.084 1.155-.182l2.332-1.926-.188 3.018a1.15 1.15 0 0 0 .53 1.042l2.553 1.622-2.929.754a1.15 1.15 0 0 0-.826.827l-.755 2.928-1.622-2.552a1.15 1.15 0 0 0-1.042-.53" clip-rule="evenodd"/>
  </svg>
`;
const Mindmap = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.458 5.95H8.5c-.69 0-1.25.56-1.25 1.25V10c0 .45-.108.875-.3 1.25h3.467a2.5 2.5 0 0 1 2.333-1.6h5.5a2.5 2.5 0 0 1 0 5h-5.5a2.5 2.5 0 0 1-2.427-1.9H6.95c.192.375.3.8.3 1.25v2.809c0 .69.56 1.25 1.25 1.25h1.914a2.5 2.5 0 0 1 2.336-1.609h5.5a2.5 2.5 0 0 1 0 5h-5.5a2.5 2.5 0 0 1-2.425-1.891H8.5a2.75 2.75 0 0 1-2.75-2.75V14c0-.69-.56-1.25-1.25-1.25H2v-1.5h2.512A1.25 1.25 0 0 0 5.75 10V7.2A2.75 2.75 0 0 1 8.5 4.45h1.8a2.5 2.5 0 0 1 2.45-2h5.5a2.5 2.5 0 0 1 0 5h-5.5a2.5 2.5 0 0 1-2.292-1.5m1.292-1a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1m0 7.2a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1m1 5.8a1 1 0 1 0 0 2h5.5a1 1 0 1 0 0-2z" clip-rule="evenodd"/>
  </svg>
`;
const MindmapNode = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.75 4.5c-1.138 0-2.098.76-2.4 1.8H8.764a2.75 2.75 0 0 0-2.75 2.75v1c0 .69-.56 1.25-1.25 1.25H2v1.5h2.765c.69 0 1.25.56 1.25 1.25v1a2.75 2.75 0 0 0 2.75 2.75h1.616a2.5 2.5 0 0 0 2.369 1.7h5.5a2.5 2.5 0 0 0 0-5h-5.5c-1.138 0-2.098.76-2.4 1.8H8.764c-.69 0-1.25-.56-1.25-1.25v-1c0-.788-.332-1.499-.863-2a2.74 2.74 0 0 0 .863-2v-1c0-.69.56-1.25 1.25-1.25h1.616a2.5 2.5 0 0 0 2.369 1.7h5.5a2.5 2.5 0 0 0 0-5zm-1 2.5a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1m0 10a1 1 0 0 1 1-1h5.5a1 1 0 1 1 0 2h-5.5a1 1 0 0 1-1-1" clip-rule="evenodd"/>
  </svg>
`;
const Minus = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.5 12c0-.46.373-.833.833-.833h13.334a.833.833 0 0 1 0 1.666H5.333A.833.833 0 0 1 4.5 12" clip-rule="evenodd"/>
  </svg>
`;
const MobileDocuments = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.167 3.25c-.783 0-1.417.634-1.417 1.417V15.5c0 .782.634 1.417 1.417 1.417h8.666c.783 0 1.417-.635 1.417-1.417V8.125h-2.5a1.833 1.833 0 0 1-1.833-1.833V3.25zm7.25 1.223 1.913 2.152h-1.58a.333.333 0 0 1-.333-.333zM7.25 4.667a2.917 2.917 0 0 1 2.917-2.917h6.5a.75.75 0 0 1 .56.252l4.334 4.875a.75.75 0 0 1 .189.498V15.5a2.917 2.917 0 0 1-2.917 2.917H16.75v.916a2.917 2.917 0 0 1-2.917 2.917H5.708a3.46 3.46 0 0 1-3.458-3.458V8.5a2.917 2.917 0 0 1 2.917-2.917H7.25zm0 2.416H5.167c-.783 0-1.417.635-1.417 1.417v10.292c0 1.081.877 1.958 1.958 1.958h8.125c.783 0 1.417-.634 1.417-1.417v-.916h-5.083A2.917 2.917 0 0 1 7.25 15.5zm4.333-.25a.75.75 0 0 1 .75-.75h1.409a.75.75 0 0 1 0 1.5h-1.409a.75.75 0 0 1-.75-.75m0 3.25a.75.75 0 0 1 .75-.75h4.334a.75.75 0 0 1 0 1.5h-4.334a.75.75 0 0 1-.75-.75m0 3.25a.75.75 0 0 1 .75-.75h3.25a.75.75 0 0 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const MobileHome = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19.5 19.5v-9.022a.5.5 0 0 0-.193-.394l-7-5.445a.5.5 0 0 0-.614 0l-7 5.445a.5.5 0 0 0-.193.394V19.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5M3.772 8.9A2 2 0 0 0 3 10.477V19.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9.022a2 2 0 0 0-.772-1.579l-7-5.444a2 2 0 0 0-2.456 0z" clip-rule="evenodd"/>
  </svg>
`;
const MobileSearch = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25" clip-rule="evenodd"/>
  </svg>
`;
const MoreHorizontal = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.5 12a1.73 1.73 0 1 0 3.462 0A1.73 1.73 0 0 0 4.5 12m7.5 1.73a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46m5.77 0a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46" clip-rule="evenodd"/>
  </svg>
`;
const MoreVertical = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.5 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" clip-rule="evenodd"/>
  </svg>
`;
const MoveLeft = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0zm8.405 4.57a.75.75 0 1 0-.976-1.14l-4.667 4a.75.75 0 0 0 0 1.14l4.667 4a.75.75 0 1 0 .976-1.14l-3.128-2.68H20a.75.75 0 0 0 0-1.5h-9.973z" clip-rule="evenodd"/>
  </svg>
`;
const MoveRight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.75 4a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0zm-9.905 4.57a.75.75 0 1 1 .976-1.14l4.667 4a.75.75 0 0 1 0 1.14l-4.667 4a.75.75 0 1 1-.976-1.14l3.128-2.68H4a.75.75 0 0 1 0-1.5h9.973z" clip-rule="evenodd"/>
  </svg>
`;
const MoveTo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 4A.75.75 0 0 1 5 3.25h14a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v2.25h12.5V4.75H5.75V7.5a.75.75 0 0 1-1.5 0zm8 4a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H13a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM12.25 15a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M8.03 8.47a.75.75 0 0 0-1.06 1.06l1.72 1.72H2.5a.75.75 0 0 0 0 1.5h6.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z" clip-rule="evenodd"/>
  </svg>
`;
const MoveToLeftDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-opacity=".6" fill-rule="evenodd" d="M13 5.75c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v13a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 13 18.75V16a.75.75 0 0 1 1.5 0v2.75c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-13a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25V8.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M6.75 4a.75.75 0 0 1 0 1.5h-1a.25.25 0 0 0-.25.25v13c0 .138.112.25.25.25h1a.75.75 0 0 1 0 1.5h-1A1.75 1.75 0 0 1 4 18.75v-13C4 4.784 4.784 4 5.75 4zm3.243 6.73a.75.75 0 1 0-1.152-.96l-1.667 2a.75.75 0 0 0 0 .96l1.667 2a.75.75 0 0 0 1.152-.96L9.35 13h3.399a.75.75 0 0 0 0-1.5H9.351z" clip-rule="evenodd"/>
  </svg>
`;
const MoveToRightDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-opacity=".6" fill-rule="evenodd" d="M10.5 5.75A1.75 1.75 0 0 0 8.75 4h-3A1.75 1.75 0 0 0 4 5.75v13c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V16A.75.75 0 0 0 9 16v2.75a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25V8.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M16.75 4a.75.75 0 0 0 0 1.5h1a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25h-1a.75.75 0 0 0 0 1.5h1a1.75 1.75 0 0 0 1.75-1.75v-13A1.75 1.75 0 0 0 17.75 4zm-3.243 6.73a.75.75 0 1 1 1.152-.96l1.667 2a.75.75 0 0 1 0 .96l-1.667 2a.75.75 0 0 1-1.152-.96l.642-.77H10.75a.75.75 0 0 1 0-1.5h3.399z" clip-rule="evenodd"/>
  </svg>
`;
const MultiCursorDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M3.03 5.302c-.278-1.606 1.41-2.832 2.851-2.07l13.518 7.14c1.542.815 1.336 3.086-.328 3.609l-5.526 1.736a1.96 1.96 0 0 0-1.01.734L9.17 21.174c-1.012 1.421-3.236.915-3.534-.804z"/><path stroke='currentColor' stroke-opacity=".2" d="M3.523 5.217c-.207-1.197 1.05-2.11 2.125-1.543l13.518 7.14c1.149.607.995 2.3-.245 2.69l-5.526 1.736c-.512.16-.957.484-1.268.921l-3.364 4.723c-.754 1.06-2.411.682-2.633-.6z"/>
  </svg>
`;
const MultiSelect = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.53 6.03a.75.75 0 0 0-1.06-1.06l-1.5 1.5-.406-.464a.75.75 0 1 0-1.128.988l.933 1.067a.75.75 0 0 0 1.095.036zm0 5.5a.75.75 0 1 0-1.06-1.06l-1.5 1.5-.406-.464a.75.75 0 0 0-1.128.988l.933 1.066a.75.75 0 0 0 1.095.037zm0 4.44a.75.75 0 0 1 0 1.06l-2.066 2.067a.75.75 0 0 1-1.095-.037l-.933-1.066a.75.75 0 0 1 1.128-.988l.406.463 1.5-1.5a.75.75 0 0 1 1.06 0M10.5 5.25a.75.75 0 0 0 0 1.5h9.6a.75.75 0 0 0 0-1.5zM9.75 12a.75.75 0 0 1 .75-.75h9.6a.75.75 0 0 1 0 1.5h-9.6a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h9.6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const MyConnections = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M16.19 6.16a2.133 2.133 0 1 1 4.267 0 2.133 2.133 0 0 1-4.266 0m-1.286 1.353L9.22 8.546a3.66 3.66 0 0 1-.866 2.308l3.346 3.824a3.66 3.66 0 0 1 2.596-.525l1.977-4.942a3.7 3.7 0 0 1-1.368-1.698m-5.982-.481A3.677 3.677 0 1 0 7.13 11.8l3.47 3.965a3.676 3.676 0 1 0 5.129-1.038l1.976-4.943q.302.052.619.052A3.676 3.676 0 1 0 14.65 5.99zM3.41 8.483a2.133 2.133 0 1 1 4.266 0 2.133 2.133 0 0 1-4.266 0m10.266 7.162a2.133 2.133 0 1 0 0 4.266 2.133 2.133 0 0 0 0-4.266" clip-rule="evenodd"/>
  </svg>
`;
const Ne = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m9.488 15.75-1.164 2.425 1.352.65 1.476-3.075H17.5v-1.5h-5.628l1.92-4H17.5v-1.5h-2.988l1.164-2.425-1.352-.65-1.476 3.075H6.5v1.5h5.628l-1.92 4H6.5v1.5z" clip-rule="evenodd"/>
  </svg>
`;
const New = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.435 5.118a2.868 2.868 0 0 1 4.986-1.934 2.868 2.868 0 0 1 4.639 3.301h2.831c.967 0 1.75.784 1.75 1.75v2.236a1.75 1.75 0 0 1-1.059 1.608V19a2.75 2.75 0 0 1-2.75 2.75H7.01A2.75 2.75 0 0 1 4.259 19v-6.921A1.75 1.75 0 0 1 3.2 10.47V8.235c0-.966.784-1.75 1.75-1.75h2.832a2.86 2.86 0 0 1-.347-1.367m2.868 1.367h1.368V5.118a1.368 1.368 0 1 0-1.368 1.367m2.868-1.367v1.367h1.367a1.368 1.368 0 1 0-1.367-1.367M4.95 7.985a.25.25 0 0 0-.25.25v2.236c0 .138.112.25.25.25h14.941a.25.25 0 0 0 .25-.25V8.235a.25.25 0 0 0-.25-.25zm.809 4.236V19c0 .69.56 1.25 1.25 1.25h4.662v-8.03zm7.412 0v8.029h4.661c.69 0 1.25-.56 1.25-1.25v-6.78z" clip-rule="evenodd"/>
  </svg>
`;
const NewPage = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 4.75a.75.75 0 0 1 .75.75v5.75h5.75a.75.75 0 0 1 0 1.5h-5.75v5.75a.75.75 0 0 1-1.5 0v-5.75H5.5a.75.75 0 0 1 0-1.5h5.75V5.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const NewXxxEdgeless = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.5 4.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5M3.25 6.5a3.25 3.25 0 0 1 6.49-.25c.794.001 1.56.016 2.357.208.897.217 1.79.645 2.853 1.442l.02.015.02.017c.864.745 1.475 1.75 1.841 2.826a.75.75 0 0 1-1.42.484c-.294-.865-.766-1.62-1.382-2.158-.928-.692-1.633-1.01-2.284-1.168-.675-.162-1.334-.166-2.244-.166A3.26 3.26 0 0 1 7.25 9.663v3.674a3.251 3.251 0 1 1-1.5 0V9.663A3.25 3.25 0 0 1 3.25 6.5m3.25 8.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m11-1a.75.75 0 0 0-1.5 0V16h-2.25a.75.75 0 0 0 0 1.5H16v2.25a.75.75 0 0 0 1.5 0V17.5h2.25a.75.75 0 0 0 0-1.5H17.5z" clip-rule="evenodd"/>
  </svg>
`;
const NewXxxPage = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 6A2.75 2.75 0 0 1 7 3.25h10A2.75 2.75 0 0 1 19.75 6v6a.75.75 0 0 1-1.5 0V6c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h5a.75.75 0 0 1 0 1.5H7A2.75 2.75 0 0 1 4.25 18zm4 2A.75.75 0 0 1 9 7.25h3a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 8M9 10.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 15a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m11.25 0a.75.75 0 0 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5H18V21a.75.75 0 0 0 1.5 0v-2.25h2.25a.75.75 0 0 0 0-1.5H19.5z" clip-rule="evenodd"/>
  </svg>
`;
const NoNetwork = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.06 4.185A.75.75 0 0 0 4 5.246l1.398 1.399a14.1 14.1 0 0 0-3.212 2.41.75.75 0 0 0 1.06 1.06 12.6 12.6 0 0 1 3.263-2.36l2.24 2.242a9.6 9.6 0 0 0-3.414 2.207.75.75 0 1 0 1.061 1.06 8.1 8.1 0 0 1 3.54-2.08l2.467 2.466A5.64 5.64 0 0 0 8.17 15.3a.75.75 0 1 0 1.06 1.06 4.15 4.15 0 0 1 5.87 0q.044.044.092.08l2.744 2.742a.75.75 0 1 0 1.06-1.06zm4.492 2.507c4.035-.85 8.402.292 11.533 3.423a.75.75 0 0 0 1.06-1.06 14.1 14.1 0 0 0-12.902-3.83.75.75 0 1 0 .31 1.467m3.752 2.75a.75.75 0 1 0-.176 1.49 8.12 8.12 0 0 1 4.807 2.333.75.75 0 0 0 1.06-1.06 9.62 9.62 0 0 0-5.691-2.763m-1.139 8.842a.75.75 0 1 0 0 1.5h.01a.75.75 0 1 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const NoteShadowDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 5A2.75 2.75 0 0 1 6 2.25h9A2.75 2.75 0 0 1 17.75 5v10.857a2.75 2.75 0 0 1-2.75 2.75H6a2.75 2.75 0 0 1-2.75-2.75zM6 3.75c-.69 0-1.25.56-1.25 1.25v10.857c0 .69.56 1.25 1.25 1.25h9c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z" clip-rule="evenodd"/><path fill='currentColor' fill-opacity=".6" d="M6.25 18.607H15a2.75 2.75 0 0 0 2.75-2.75V5.25H18A2.75 2.75 0 0 1 20.75 8v10.857a2.75 2.75 0 0 1-2.75 2.75H9a2.75 2.75 0 0 1-2.75-2.75z"/>
  </svg>
`;
const Notification = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9.255 4.832a2.75 2.75 0 0 1 5.49 0A6.75 6.75 0 0 1 18.75 11v3.159c0 .34.135.665.375.906l1.064 1.063c.598.599.174 1.622-.672 1.622H15.75V18a3.75 3.75 0 1 1-7.5 0v-.25H4.483c-.847 0-1.27-1.023-.672-1.622l1.064-1.063c.24-.24.375-.567.375-.906V11a6.75 6.75 0 0 1 4.005-6.168M9.75 17.75V18a2.25 2.25 0 0 0 4.5 0v-.25zm2.25-14c-.69 0-1.25.56-1.25 1.25v.341a.75.75 0 0 1-.5.708A5.25 5.25 0 0 0 6.75 11v3.159c0 .737-.293 1.445-.815 1.966l-.124.125h12.378l-.124-.125a2.78 2.78 0 0 1-.815-1.966V11c0-2.285-1.46-4.23-3.5-4.951a.75.75 0 0 1-.5-.708V5c0-.69-.56-1.25-1.25-1.25" clip-rule="evenodd"/>
  </svg>
`;
const Notion = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M6.268 6.199c.568.46.78.426 1.845.355L18.16 5.95c.214 0 .036-.214-.035-.25l-1.668-1.205c-.32-.248-.746-.533-1.562-.462l-9.728.71c-.354.035-.425.213-.284.355zM6.87 8.54v10.569c0 .568.284.78.923.745l11.04-.638c.638-.035.71-.426.71-.887V7.83c0-.46-.178-.71-.568-.674L7.439 7.83c-.426.035-.568.248-.568.71m10.899.567c.07.319 0 .639-.32.675l-.533.106v7.802c-.462.249-.887.39-1.242.39-.568 0-.71-.177-1.136-.709l-3.48-5.462v5.285l1.102.248s0 .639-.889.639l-2.449.142c-.07-.142 0-.496.249-.568l.639-.177V10.49l-.888-.07c-.07-.32.107-.781.604-.817l2.627-.176 3.62 5.532v-4.893l-.923-.107c-.07-.39.214-.673.569-.71zM4.35 3.787l10.117-.745c1.242-.107 1.562-.035 2.343.532l3.23 2.27c.532.39.71.496.71.922v12.45c0 .78-.284 1.241-1.278 1.312l-11.75.71c-.745.035-1.1-.071-1.491-.568l-2.378-3.086c-.426-.568-.603-.993-.603-1.49V5.028c0-.639.283-1.17 1.1-1.241"/>
  </svg>
`;
const Now = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.114 3.678a.75.75 0 0 1 0 1.06L4.28 6.573a.75.75 0 0 1-1.06-1.06l1.833-1.834a.75.75 0 0 1 1.06 0m11.772 0a.75.75 0 0 1 1.061 0l1.833 1.833a.75.75 0 0 1-1.06 1.061l-1.834-1.833a.75.75 0 0 1 0-1.061M12 5.875a6.583 6.583 0 1 0 0 13.167 6.583 6.583 0 0 0 0-13.167m-8.083 6.583a8.083 8.083 0 1 1 16.166 0 8.083 8.083 0 0 1-16.166 0" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M15.197 10.359a.75.75 0 0 1 0 1.06l-3.555 3.556a.75.75 0 0 1-1.061 0l-1.778-1.778a.75.75 0 0 1 1.06-1.06l1.248 1.247 3.025-3.025a.75.75 0 0 1 1.061 0" clip-rule="evenodd"/>
  </svg>
`;
const Number = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.182 3.272a.75.75 0 0 1 .546.91L10.71 8.25h4.453l1.108-4.432a.75.75 0 0 1 1.456.364L16.71 8.25H20a.75.75 0 0 1 0 1.5h-3.664l-1.125 4.5H18a.75.75 0 1 1 0 1.5h-3.164l-1.108 4.432a.75.75 0 0 1-1.456-.364l1.017-4.068H8.836l-1.108 4.432a.75.75 0 0 1-1.456-.364L7.29 15.75H4a.75.75 0 0 1 0-1.5h3.664l1.125-4.5H6a.75.75 0 0 1 0-1.5h3.164l1.108-4.432a.75.75 0 0 1 .91-.546m-.846 6.478-1.125 4.5h4.453l1.125-4.5z" clip-rule="evenodd"/>
  </svg>
`;
const NumberedList = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.129 5.762a.6.6 0 0 0 .15-.08l.255-.177V7.64c0 .188.063.35.181.466a.66.66 0 0 0 .47.177c.186 0 .35-.061.468-.177a.64.64 0 0 0 .182-.466V4.934a.7.7 0 0 0-.197-.52c-.13-.13-.316-.195-.534-.195-.221 0-.434.022-.675.183l-.677.452a.53.53 0 0 0-.252.46c0 .273.203.472.464.472a.5.5 0 0 0 .165-.024m5.277-.16a.768.768 0 0 0 0 1.536h10.326a.768.768 0 1 0 0-1.536zm0 5.632a.768.768 0 0 0 0 1.536h10.326a.768.768 0 1 0 0-1.535zm0 5.633a.768.768 0 1 0 0 1.536h10.326a.768.768 0 1 0 0-1.536zm-2.782-5.753q.018-.099.018-.21c0-.678-.58-1.136-1.486-1.136-.652 0-1.176.277-1.373.721.197-.444.721-.72 1.373-.72.907 0 1.486.457 1.486 1.134q0 .112-.018.211m-1.5 1.64v.02h1.184c.274 0 .43.163.43.414 0-.25-.156-.414-.43-.414H5.126zm-1.384.237c.035-.14.126-.26.284-.393l1.026-.878c.338-.29.48-.453.523-.622-.042.17-.185.331-.523.622l-1.026.879c-.158.131-.25.253-.284.392m.763-1.81a.8.8 0 0 0 .251-.254.7.7 0 0 1 .184-.193.36.36 0 0 1 .202-.054c.113 0 .199.034.255.085.056.05.09.12.09.21 0 .17-.079.304-.502.667l-1.026.878c-.219.184-.336.365-.336.608 0 .156.045.303.152.412.108.108.265.164.463.164h2.073a.54.54 0 0 0 .389-.145.51.51 0 0 0 .142-.371.5.5 0 0 0-.142-.374.54.54 0 0 0-.39-.142h-.932l.496-.428c.287-.25.506-.447.651-.65.15-.207.221-.419.221-.691 0-.37-.16-.684-.442-.902-.281-.217-.677-.335-1.146-.335-.676 0-1.248.288-1.467.783a.7.7 0 0 0-.057.283c0 .155.05.29.152.387.1.095.24.142.4.142a.6.6 0 0 0 .32-.08m-.832 4.897c.152-.414.67-.853 1.557-.853.457 0 .865.096 1.16.29a1 1 0 0 1 .478.865c0 .483-.308.804-.692.941.234.05.43.143.576.279.184.17.285.404.285.687 0 .405-.174.737-.49.966-.313.228-.762.352-1.311.352-.96 0-1.495-.458-1.641-.868a.7.7 0 0 1-.04-.228.5.5 0 0 1 .155-.387.6.6 0 0 1 .413-.142q.174-.001.305.064.13.066.223.203a.8.8 0 0 0 .236.245c.09.055.206.087.377.087.278 0 .46-.165.46-.379a.33.33 0 0 0-.14-.288c-.096-.066-.242-.104-.444-.104H5.11a.48.48 0 0 1-.35-.122.44.44 0 0 1-.12-.323c0-.124.039-.236.12-.317.082-.08.2-.125.35-.125h.028c.178 0 .311-.038.399-.102a.32.32 0 0 0 .131-.268.32.32 0 0 0-.112-.258.5.5 0 0 0-.322-.098.57.57 0 0 0-.286.068.53.53 0 0 0-.198.207.7.7 0 0 1-.241.27.64.64 0 0 1-.343.082.55.55 0 0 1-.401-.144.5.5 0 0 1-.136-.363c0-.085.012-.153.042-.237" clip-rule="evenodd"/>
  </svg>
`;
const Octobase = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19.552 5.67c.25-.25.654-.25.904 0l-.001.002c.25.25.25.654 0 .904a3.52 3.52 0 0 1-2.524 1.036q-.233 0-.472-.028c-1.155-.137-2.32-.762-3.364-1.807l-1.808 1.808 3.127 3.127a.64.64 0 1 1-.904.905L11.383 8.49l-1.809 1.808 3.127 3.127a.64.64 0 1 1-.904.904L8.67 11.202 6.862 13.01l3.127 3.127a.64.64 0 1 1-.904.904l-3.127-3.127-.004-.004A6.394 6.394 0 0 1 15 4.872c1.6 1.6 3.43 1.921 4.552.799M6.132 9.643a.986.986 0 1 0 1.394-1.395.986.986 0 0 0-1.393 1.395M9.336 6.44a.986.986 0 1 0 1.393-1.395.986.986 0 0 0-1.393 1.395m5.223.709 3.138 3.138a6.393 6.393 0 0 1-9.053 9.03c-1.6-1.6-3.429-1.92-4.551-.798a.64.64 0 1 1-.905-.904c.786-.786 1.85-1.144 2.996-1.008 1.156.136 2.32.761 3.364 1.806l1.808-1.808-3.126-3.127a.639.639 0 1 1 .904-.904L12.26 15.7l1.808-1.809-3.127-3.126a.639.639 0 1 1 .904-.905l3.127 3.127 1.808-1.808-3.127-3.127a.64.64 0 1 1 .905-.904m-1.643 11.995a.986.986 0 1 0 1.394-1.395.986.986 0 0 0-1.394 1.395m3.202-3.202a.986.986 0 1 0 1.394-1.395.986.986 0 0 0-1.394 1.395" clip-rule="evenodd"/>
  </svg>
`;
const OpenInNew = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.25 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V5.81l-8.72 8.72a.75.75 0 1 1-1.06-1.06l8.72-8.72H14a.75.75 0 0 1-.75-.75M6 6.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 1.5 0v4A2.75 2.75 0 0 1 16 20.75H6A2.75 2.75 0 0 1 3.25 18V8A2.75 2.75 0 0 1 6 5.25h4a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Other = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.665 2.33a.75.75 0 0 1 .67 0l8 4a.75.75 0 0 1 .415.67v10a.75.75 0 0 1-.415.67l-8 4a.75.75 0 0 1-.67 0l-8-4A.75.75 0 0 1 3.25 17V7a.75.75 0 0 1 .415-.67zM4.75 8.213l6.5 3.25v8.323l-6.5-3.25zm8 11.573 6.5-3.25V8.214l-6.5 3.25zM12 10.162 18.323 7 12 3.839 5.677 7z" clip-rule="evenodd"/>
  </svg>
`;
const Page = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7 3.25A2.75 2.75 0 0 0 4.25 6v12A2.75 2.75 0 0 0 7 20.75h10A2.75 2.75 0 0 0 19.75 18V6A2.75 2.75 0 0 0 17 3.25zM5.75 6c0-.69.56-1.25 1.25-1.25h10c.69 0 1.25.56 1.25 1.25v12c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25zM9 7.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 14.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Palette = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a3.9 3.9 0 0 0 3.9-3.9v-.585c0-.4.003-.486.012-.543a.975.975 0 0 1 .81-.81c.057-.009.143-.012.543-.012h.585a3.9 3.9 0 0 0 3.9-3.9c0-5.385-4.365-9.75-9.75-9.75M9.075 7.613a1.462 1.462 0 1 1 2.925 0 1.462 1.462 0 0 1-2.925 0m4.875.974a1.463 1.463 0 1 1 2.925 0 1.463 1.463 0 0 1-2.925 0M7.613 10.05a1.463 1.463 0 1 0 0 2.925 1.463 1.463 0 0 0 0-2.925" clip-rule="evenodd"/>
  </svg>
`;
const Paste = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.8 2.489a.75.75 0 0 0-.75.75V4.25H7A2.75 2.75 0 0 0 4.25 7v12A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7A2.75 2.75 0 0 0 17 4.25h-.95V3.239a.75.75 0 0 0-.75-.75zm7.25 3.261v.928a.75.75 0 0 1-.75.75H8.8a.75.75 0 0 1-.75-.75V5.75H7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zm-6.5.178v-1.94h5v1.94z" clip-rule="evenodd"/>
  </svg>
`;
const Payment = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17zM5 5.75c-.69 0-1.25.56-1.25 1.25v1.25h16.5V7c0-.69-.56-1.25-1.25-1.25zm15.25 4H3.75V17c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25zm-6 5.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Pen = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19.279 4.721a1.614 1.614 0 0 0-2.28 0l-.885.883 2.278 2.273.887-.885a1.603 1.603 0 0 0 0-2.271M17.33 8.937l-2.277-2.273L4.25 17.445v2.305h2.245zm-1.39-5.278a3.114 3.114 0 0 1 4.398 0 3.103 3.103 0 0 1 0 4.395L7.335 21.03a.75.75 0 0 1-.53.22H3.5a.75.75 0 0 1-.75-.75v-3.367c0-.2.08-.39.22-.53z" clip-rule="evenodd"/>
  </svg>
`;
const PenThick = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>
  </svg>
`;
const PenThin = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  </svg>
`;
const Pin = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.59 3.692a2.75 2.75 0 0 1 3.89 0l2.828 2.828a2.75 2.75 0 0 1 0 3.889l-5.328 5.329.884.884a.75.75 0 1 1-1.06 1.06L11.09 13.97l-4.925 4.924a.75.75 0 0 1-1.06-1.06l4.924-4.925-3.712-3.712a.75.75 0 0 1 1.06-1.06l.884.883zM9.324 10.08l4.596 4.596 5.329-5.329a1.25 1.25 0 0 0 0-1.767l-2.829-2.829a1.25 1.25 0 0 0-1.767 0z" clip-rule="evenodd"/>
  </svg>
`;
const Pinboard = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 2.25a.75.75 0 0 1 .75.75v7.25h5.5V10c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 18 13.75h-5A1.75 1.75 0 0 1 11.25 12v-.25h-5.5V17c0 .69.56 1.25 1.25 1.25h4.25V18c0-.966.784-1.75 1.75-1.75h5c.966 0 1.75.784 1.75 1.75v2A1.75 1.75 0 0 1 18 21.75h-5A1.75 1.75 0 0 1 11.25 20v-.25H7A2.75 2.75 0 0 1 4.25 17V3A.75.75 0 0 1 5 2.25M12.75 20c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25zm0-8c0 .138.112.25.25.25h5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z" clip-rule="evenodd"/>
  </svg>
`;
const Pined = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.48 3.692a2.75 2.75 0 0 0-3.89 0L8.263 9.02l-.883-.884a.75.75 0 0 0-1.061 1.06l1.414 1.415 2.298 2.298-4.924 4.925a.75.75 0 1 0 1.06 1.06l4.925-4.924 2.298 2.298 1.414 1.414a.75.75 0 0 0 1.06-1.06l-.883-.884 5.328-5.329a2.75 2.75 0 0 0 0-3.89z" clip-rule="evenodd"/>
  </svg>
`;
const Play = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m10.104 5.01 6.339 3.566c.782.44 1.415.796 1.883 1.119.47.324.88.684 1.102 1.175a2.75 2.75 0 0 1 0 2.26c-.222.491-.633.851-1.102 1.175-.468.323-1.1.679-1.883 1.119l-6.34 3.566c-.755.425-1.368.77-1.872.995-.508.227-1.015.387-1.54.328a2.75 2.75 0 0 1-1.921-1.124c-.31-.428-.419-.949-.47-1.503-.05-.55-.05-1.253-.05-2.12V8.435c0-.867 0-1.57.05-2.12.051-.554.16-1.075.47-1.503A2.75 2.75 0 0 1 6.69 3.687c.525-.06 1.032.1 1.54.328.504.226 1.117.57 1.873.995m-2.485.374c-.437-.195-.642-.22-.76-.206a1.25 1.25 0 0 0-.873.51c-.069.096-.148.287-.192.763-.043.473-.044 1.106-.044 2.02v7.057c0 .915 0 1.548.044 2.021.044.476.123.667.192.763.206.285.524.47.874.51.117.014.322-.01.759-.206.433-.194.985-.504 1.782-.952l6.273-3.529c.824-.463 1.396-.785 1.8-1.064.408-.282.538-.45.586-.557a1.25 1.25 0 0 0 0-1.027c-.048-.108-.178-.276-.586-.558-.404-.278-.976-.601-1.8-1.064L9.401 6.336c-.797-.448-1.35-.758-1.782-.952" clip-rule="evenodd"/>
  </svg>
`;
const PlayFill = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' fill-rule="evenodd" d="m10.217 4.787 6.358 3.577c.774.435 1.415.796 1.893 1.125.48.331.938.723 1.188 1.278a3 3 0 0 1 0 2.466c-.25.555-.708.947-1.188 1.278-.478.33-1.119.69-1.893 1.126l-6.358 3.576c-.748.42-1.37.77-1.883 1-.52.233-1.079.415-1.671.348a3 3 0 0 1-2.096-1.226c-.349-.483-.464-1.059-.516-1.626C4 17.148 4 16.435 4 15.577V8.423c0-.858 0-1.57.051-2.132.052-.567.167-1.143.516-1.626a3 3 0 0 1 2.096-1.226c.592-.067 1.15.115 1.67.348.515.23 1.136.58 1.884 1" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const Plugin = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9.902 5.384q.027.116.074.226l.003.006c.276.666-.151 1.534-1.004 1.534H6.55a1.8 1.8 0 0 0-1.8 1.8v1.124q.017 0 .035-.003h.003a2.714 2.714 0 1 1 0 5.408h-.003l-.035-.003v1.974a1.8 1.8 0 0 0 1.8 1.8h1.974l-.003-.035v-.003a2.713 2.713 0 1 1 5.408 0v.003l-.003.035h1.124a1.8 1.8 0 0 0 1.8-1.8v-2.425c0-.85.866-1.284 1.536-1.003l.004.002q.11.047.226.074a1.353 1.353 0 1 0-.003-2.645c-.067.015-.141.04-.23.076-.666.276-1.533-.152-1.533-1.004V8.95a1.8 1.8 0 0 0-1.8-1.8h-1.575c-.85 0-1.284-.866-1.003-1.536l.002-.004q.047-.11.074-.226a1.353 1.353 0 1 0-2.646 0m-1.477.266c-.337-1.695.945-3.4 2.8-3.4 1.856 0 3.137 1.705 2.8 3.4h1.025a3.3 3.3 0 0 1 3.3 3.3v1.025c1.695-.337 3.4.944 3.4 2.8s-1.705 3.137-3.4 2.8v1.875a3.3 3.3 0 0 1-3.3 3.3h-1.609c-.825 0-1.24-.807-1.05-1.444q.035-.122.043-.22a1.214 1.214 0 1 0-2.418 0q.008.098.044.217v.002c.19.633-.223 1.445-1.05 1.445H6.55a3.3 3.3 0 0 1-3.3-3.3v-2.459c0-.825.807-1.24 1.444-1.05q.122.035.22.043a1.214 1.214 0 1 0 0-2.418q-.098.008-.217.044h-.002c-.633.19-1.445-.223-1.445-1.05V8.95a3.3 3.3 0 0 1 3.3-3.3z" clip-rule="evenodd"/>
  </svg>
`;
const Plus = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 4.5c.46 0 .833.373.833.833v5.834h5.834a.833.833 0 0 1 0 1.666h-5.834v5.834a.833.833 0 0 1-1.666 0v-5.834H5.333a.833.833 0 0 1 0-1.666h5.834V5.333c0-.46.373-.833.833-.833" clip-rule="evenodd"/>
  </svg>
`;
const PlusThick = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1" clip-rule="evenodd"/>
  </svg>
`;
const Ppt = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 6.5A2.25 2.25 0 0 1 4.5 4.25h15a2.25 2.25 0 0 1 2.25 2.25v11a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75v-11a.75.75 0 0 0-.75-.75zM5.75 8.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5H13a.75.75 0 0 0 0-1.5zm8.25.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M6.5 14.75a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Presentation = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.174 3.952c0-.426.346-.772.772-.772h15.956a.772.772 0 1 1 0 1.544h-.367v9.853h.367a.772.772 0 0 1 0 1.545h-7.206v1.661l3.942 2.252a.772.772 0 0 1-.766 1.341l-3.176-1.815v1.487a.772.772 0 1 1-1.544 0v-1.421l-3.062 1.75a.772.772 0 1 1-.766-1.341l3.828-2.188v-1.726H3.946a.772.772 0 1 1 0-1.545h.368V4.724h-.368a.77.77 0 0 1-.772-.772m2.684.772H17.99v9.853H5.858zm3.42 4.357a.772.772 0 0 0-1.545 0v2.28a.772.772 0 0 0 1.544 0zm2.646-2.482c.427 0 .772.346.772.772v3.99a.772.772 0 1 1-1.544 0V7.37c0-.426.346-.772.772-.772m4.191 3.622a.772.772 0 1 0-1.544 0v1.14a.772.772 0 0 0 1.544 0z" clip-rule="evenodd"/>
  </svg>
`;
const Printer = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.574 2.25h6.852c.258 0 .494 0 .692.016.213.018.446.057.677.175.329.168.596.435.764.765.118.23.157.463.175.676.016.198.016.434.016.692V6.25h.08c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v4.66c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.344.03h-.081v.676c0 .258 0 .494-.016.692a1.8 1.8 0 0 1-.175.677 1.75 1.75 0 0 1-.765.764c-.23.118-.463.157-.676.175-.198.016-.434.016-.692.016H8.574c-.258 0-.494 0-.692-.016a1.8 1.8 0 0 1-.676-.175 1.75 1.75 0 0 1-.765-.765 1.8 1.8 0 0 1-.175-.676c-.016-.198-.016-.434-.016-.692v-.676h-.08c-.535 0-.98 0-1.345-.03-.38-.03-.736-.098-1.073-.27A2.75 2.75 0 0 1 2.55 17.25c-.172-.338-.24-.694-.27-1.074-.03-.365-.03-.81-.03-1.345v-4.66c0-.535 0-.98.03-1.345.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 6.55c.337-.172.693-.24 1.073-.27.365-.03.81-.03 1.345-.03h.08V4.574c0-.258 0-.494.016-.692.018-.213.057-.446.175-.676a1.75 1.75 0 0 1 .765-.765c.23-.118.463-.157.676-.175.198-.016.434-.016.692-.016m-.824 4h8.5V4.6c0-.292 0-.467-.011-.596a.6.6 0 0 0-.018-.12.25.25 0 0 0-.105-.105.6.6 0 0 0-.12-.018 8 8 0 0 0-.596-.011H8.6c-.292 0-.467 0-.596.011a.6.6 0 0 0-.12.018.25.25 0 0 0-.105.104.6.6 0 0 0-.018.121c-.01.13-.011.304-.011.596zm.03-2.37v.002zm.1-.1h.002zm8.24 0h-.002zm.1.1v.002zM7.75 19.4c0 .292 0 .467.011.596a.6.6 0 0 0 .018.12.25.25 0 0 0 .104.105.6.6 0 0 0 .121.018c.13.01.304.011.596.011h6.8c.292 0 .467 0 .596-.011a.6.6 0 0 0 .12-.018.25.25 0 0 0 .105-.105.6.6 0 0 0 .018-.12c.01-.13.011-.304.011-.596v-2.8c0-.292 0-.467-.011-.596a.6.6 0 0 0-.018-.12.25.25 0 0 0-.105-.105.6.6 0 0 0-.12-.018 8 8 0 0 0-.596-.011H8.6c-.292 0-.467 0-.596.011a.6.6 0 0 0-.12.018.25.25 0 0 0-.105.104.6.6 0 0 0-.018.121c-.01.13-.011.304-.011.596zm.03-3.52v.002zm.1-.1h.002zm8.24 0h-.002zm.1.1v.002zm1.53 1.37v-.676c0-.258 0-.494-.016-.692a1.8 1.8 0 0 0-.175-.676 1.75 1.75 0 0 0-.765-.765 1.8 1.8 0 0 0-.676-.175c-.198-.016-.434-.016-.692-.016H8.574c-.258 0-.494 0-.692.016a1.8 1.8 0 0 0-.676.175 1.75 1.75 0 0 0-.765.765c-.118.23-.157.463-.175.676-.016.198-.016.434-.016.692v.676H6.2c-.572 0-.957 0-1.253-.025-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515-.024-.295-.025-.68-.025-1.252v-4.6c0-.572 0-.957.025-1.253.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111.296-.024.68-.025 1.253-.025h11.6c.572 0 .957 0 1.252.025.288.023.425.065.515.111.236.12.427.311.547.547.046.09.088.227.111.514.024.296.025.68.025 1.253v4.6c0 .572 0 .957-.025 1.252-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111-.295.024-.68.025-1.252.025zm-1.63 2.97h-.002zm-8.24 0h.002zm-.1-.1v-.002zM6.25 11a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const ProductHunt = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' d="M24.003 12c0 6.63-5.37 12-12 12s-12-5.37-12-12 5.37-12 12-12 12 5.37 12 12"/><path fill='currentColor' d="M13.603 12h-3.4V8.41h3.4c.99 0 1.8.81 1.8 1.8 0 .991-.81 1.801-1.8 1.801m0-6h-5.8v12h2.4v-3.6h3.4a4.2 4.2 0 1 0 0-8.4"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const Progress = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15 4.25a.75.75 0 0 1 .75.75v1.25H19A2.75 2.75 0 0 1 21.75 9v6A2.75 2.75 0 0 1 19 17.75h-3.25V19a.75.75 0 0 1-1.5 0v-1.25H5A2.75 2.75 0 0 1 2.25 15V9A2.75 2.75 0 0 1 5 6.25h9.25V5a.75.75 0 0 1 .75-.75M5 7.75h9.25v8.5H5c-.69 0-1.25-.56-1.25-1.25V9c0-.69.56-1.25 1.25-1.25m10.75 0v8.5H19c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25zm-3 2.25a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM9 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 9 9.25M6.75 10a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
  </svg>
`;
const Property = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.5 6.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2.75 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M9 6.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zM8.25 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 16.25a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Publish = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.035 11.25h3.209c.083-2.207.529-4.22 1.232-5.75q.215-.471.478-.9a8.01 8.01 0 0 0-4.92 6.65M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19M12 4c-.64 0-1.459.596-2.161 2.126-.6 1.306-1.012 3.097-1.094 5.124h6.51c-.082-2.027-.494-3.818-1.094-5.124C13.46 4.596 12.64 4 12 4m4.756 7.25c-.083-2.207-.529-4.22-1.232-5.75a9 9 0 0 0-.478-.9 8.01 8.01 0 0 1 4.92 6.65zm-1.5 1.5H8.744c.082 2.027.494 3.818 1.094 5.124C10.54 19.404 11.36 20 12 20s1.459-.596 2.161-2.126c.6-1.306 1.012-3.097 1.094-5.124m-.21 6.65a9 9 0 0 0 .478-.9c.704-1.53 1.15-3.543 1.232-5.75h3.21a8.01 8.01 0 0 1-4.92 6.65m-6.092 0a9 9 0 0 1-.478-.9c-.703-1.53-1.15-3.543-1.232-5.75h-3.21a8.01 8.01 0 0 0 4.92 6.65" clip-rule="evenodd"/>
  </svg>
`;
const Quote = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 10.966v4.095c0 .565.458 1.024 1.024 1.024h4.095c.566 0 1.024-.459 1.024-1.024v-4.095c0-.566-.459-1.024-1.024-1.024H6.704A3.35 3.35 0 0 1 9.845 7.75v-1.5A4.845 4.845 0 0 0 5 10.966m8 0v4.095c0 .565.458 1.024 1.024 1.024h4.095c.566 0 1.024-.459 1.024-1.024v-4.095c0-.566-.459-1.024-1.024-1.024h-3.415a3.35 3.35 0 0 1 3.141-2.192v-1.5A4.845 4.845 0 0 0 13 10.966" clip-rule="evenodd"/>
  </svg>
`;
const Radiant = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h1A4.25 4.25 0 0 1 8.25 8.5 2.75 2.75 0 0 0 11 11.25h2a2.75 2.75 0 0 0 2.75-2.75A4.25 4.25 0 0 1 20 4.25h1a.75.75 0 0 1 0 1.5h-1a2.75 2.75 0 0 0-2.75 2.75c0 1.049-.38 2.009-1.01 2.75H21a.75.75 0 0 1 0 1.5h-4.76a4.23 4.23 0 0 1 1.01 2.75A2.75 2.75 0 0 0 20 18.25h1a.75.75 0 0 1 0 1.5h-1a4.25 4.25 0 0 1-4.25-4.25A2.75 2.75 0 0 0 13 12.75h-2a2.75 2.75 0 0 0-2.75 2.75A4.25 4.25 0 0 1 4 19.75H3a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75c0-1.049.38-2.009 1.01-2.75H3a.75.75 0 0 1 0-1.5h4.76A4.23 4.23 0 0 1 6.75 8.5 2.75 2.75 0 0 0 4 5.75H3A.75.75 0 0 1 2.25 5" clip-rule="evenodd"/>
  </svg>
`;
const RedditDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/><path fill='currentColor' d="M18.652 12.095c0-.81-.655-1.454-1.454-1.454-.378 0-.74.145-1.013.405-1.002-.715-2.373-1.18-3.899-1.24l.668-3.123 2.17.465a1.037 1.037 0 1 0 1.037-1.085c-.406 0-.763.238-.93.584l-2.42-.513a.25.25 0 0 0-.191.036.23.23 0 0 0-.107.167l-.74 3.481c-1.55.048-2.944.513-3.958 1.24a1.46 1.46 0 0 0-1.013-.405 1.452 1.452 0 0 0-.596 2.778 2.6 2.6 0 0 0-.036.44c0 2.242 2.611 4.066 5.83 4.066s5.83-1.812 5.83-4.065a3 3 0 0 0-.036-.441c.5-.227.858-.74.858-1.336m-9.99 1.037a1.038 1.038 0 1 1 1.037 1.038c-.572.011-1.037-.465-1.037-1.038m5.806 2.754c-.715.716-2.075.764-2.468.764-.405 0-1.764-.06-2.468-.764a.267.267 0 0 1 0-.381.267.267 0 0 1 .382 0c.453.453 1.406.608 2.086.608s1.645-.155 2.086-.608a.267.267 0 0 1 .382 0 .29.29 0 0 1 0 .381m-.191-1.704a1.038 1.038 0 1 1 1.037-1.037c0 .56-.464 1.037-1.037 1.037"/>
  </svg>
`;
const Redo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M15.47 4.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H13.6c-1.692 0-2.917 0-3.88.08-.954.077-1.585.228-2.103.492a5.25 5.25 0 0 0-2.295 2.295c-.264.518-.415 1.15-.493 2.103-.078.963-.079 2.187-.079 3.88a.75.75 0 0 1-1.5 0v-.034c0-1.651 0-2.937.084-3.968.086-1.047.262-1.897.652-2.662a6.75 6.75 0 0 1 2.95-2.95c.765-.39 1.615-.566 2.662-.652 1.031-.084 2.317-.084 3.968-.084h4.623l-2.72-2.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const ReleaseFromGroup = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.778 4.75c-.564 0-1.028.464-1.028 1.028v1.778a.75.75 0 0 1-1.5 0V5.778A2.533 2.533 0 0 1 5.778 3.25h1.778a.75.75 0 0 1 0 1.5zM15.694 4a.75.75 0 0 1 .75-.75h1.778a2.533 2.533 0 0 1 2.528 2.528v1.778a.75.75 0 0 1-1.5 0V5.778c0-.564-.464-1.028-1.028-1.028h-1.778a.75.75 0 0 1-.75-.75M4 15.694a.75.75 0 0 1 .75.75v1.778c0 .564.464 1.028 1.028 1.028h1.778a.75.75 0 0 1 0 1.5H5.778a2.533 2.533 0 0 1-2.528-2.528v-1.778a.75.75 0 0 1 .75-.75M8.75 8.8v2.4019999999999997q.001.004.013.015a.14.14 0 0 0 .094.033h4.286a.14.14 0 0 0 .094-.033l.012-.015.001-.002V8.798l-.013-.015a.14.14 0 0 0-.094-.033H8.857a.14.14 0 0 0-.094.033l-.013.015zm-1.5 0c0-.904.77-1.55 1.607-1.55h4.286c.838 0 1.607.646 1.607 1.55v2.4c0 .904-.77 1.55-1.607 1.55H8.857c-.838 0-1.607-.646-1.607-1.55zM15.75 15.8v2.4019999999999997l.013.015a.14.14 0 0 0 .094.033h4.286a.14.14 0 0 0 .094-.033l.013-.015v-2.4039999999999995l-.013-.015a.14.14 0 0 0-.094-.033h-4.286a.14.14 0 0 0-.094.033l-.012.015zm-1.5 0c0-.904.77-1.55 1.607-1.55h4.286c.838 0 1.607.646 1.607 1.55v2.4c0 .904-.77 1.55-1.607 1.55h-4.286c-.838 0-1.607-.646-1.607-1.55z" clip-rule="evenodd"/>
  </svg>
`;
const Remove = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m6 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const RemoveFolder = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 5.25c-.69 0-1.25.56-1.25 1.25V17c0 .69.56 1.25 1.25 1.25h7a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 17V6.5A2.75 2.75 0 0 1 5 3.75h4.672c.729 0 1.428.29 1.944.805l1.195 1.195H19a2.75 2.75 0 0 1 2.75 2.75V11a.75.75 0 0 1-1.5 0V8.5c0-.69-.56-1.25-1.25-1.25h-6.5a.75.75 0 0 1-.53-.22l-1.415-1.414a1.25 1.25 0 0 0-.883-.366zm9.47 8.22a.75.75 0 0 1 1.06 0L18 15.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L19.06 17l2.47 2.47a.75.75 0 1 1-1.06 1.06L18 18.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L16.94 17l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/>
  </svg>
`;
const Replace = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.777 13.505a.75.75 0 0 1-1.115-.007l-2.223-2.5a.75.75 0 0 1 1.122-.996l.911 1.025V6a.25.25 0 0 0-.25-.25H10a.75.75 0 0 1 0-1.5h6.222c.967 0 1.75.784 1.75 1.75v5.063l.974-1.068a.75.75 0 0 1 1.108 1.01zm-11.054-3.01a.75.75 0 0 1 1.115.007l2.223 2.5a.75.75 0 0 1-1.122.996l-.911-1.025V18c0 .138.112.25.25.25H14.5a.75.75 0 0 1 0 1.5H8.278A1.75 1.75 0 0 1 6.528 18v-5.063l-.974 1.068a.75.75 0 1 1-1.108-1.01z" clip-rule="evenodd"/>
  </svg>
`;
const Reset = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 12a8.75 8.75 0 0 1 14.584-6.522l.002.002 1.414 1.277V4a.75.75 0 0 1 1.5 0v4.444a.75.75 0 0 1-.75.75h-4.444a.75.75 0 1 1 0-1.5h2.494l-1.217-1.098-.001-.001a7.25 7.25 0 1 0 2.238 7.017.75.75 0 1 1 1.463.332A8.75 8.75 0 0 1 3.25 12" clip-rule="evenodd"/>
  </svg>
`;
const ResizeTidyUp = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.368 5.55c0-.856.694-1.55 1.55-1.55h3.543c.856 0 1.55.694 1.55 1.55v3.543a1.55 1.55 0 0 1-1.55 1.55H5.918a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v3.543c0 .122.099.221.221.221h3.543c.122 0 .221-.099.221-.221V5.55c0-.122-.099-.221-.221-.221zm7.307.221c0-.856.694-1.55 1.55-1.55h3.543c.856 0 1.55.694 1.55 1.55v3.543a1.55 1.55 0 0 1-1.55 1.55h-3.543a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v3.543c0 .122.099.221.221.221h3.543c.122 0 .221-.099.221-.221V5.55c0-.122-.099-.221-.221-.221zM4.368 14.407c0-.856.694-1.55 1.55-1.55h3.543c.856 0 1.55.694 1.55 1.55v3.543a1.55 1.55 0 0 1-1.55 1.55H5.918a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v3.543c0 .122.099.221.221.221h3.543c.122 0 .221-.099.221-.221v-3.543c0-.122-.099-.221-.221-.221zm7.307.221c0-.856.694-1.55 1.55-1.55h3.543c.856 0 1.55.694 1.55 1.55v3.543a1.55 1.55 0 0 1-1.55 1.55h-3.543a1.55 1.55 0 0 1-1.55-1.55zm1.55-.221c-.122 0-.221.099-.221.221v3.543c0 .122.099.221.221.221h3.543c.122 0 .221-.099.221-.221v-3.543c0-.122-.099-.221-.221-.221z" clip-rule="evenodd"/>
  </svg>
`;
const RightLayout = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.25 8.5a4.25 4.25 0 0 1 4.25-4.25H21a.75.75 0 0 1 0 1.5h-5.5a2.75 2.75 0 0 0-2.75 2.75c0 1.049-.38 2.009-1.01 2.75H21a.75.75 0 0 1 0 1.5h-9.26a4.23 4.23 0 0 1 1.01 2.75 2.75 2.75 0 0 0 2.75 2.75H21a.75.75 0 0 1 0 1.5h-5.5a4.25 4.25 0 0 1-4.25-4.25 2.75 2.75 0 0 0-2.75-2.75H3a.75.75 0 0 1 0-1.5h5.5a2.75 2.75 0 0 0 2.75-2.75" clip-rule="evenodd"/>
  </svg>
`;
const RightSidebar = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17zM5 5.75h7.25v12.5H5c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25m8.75 0v12.5H19c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zm2.05 1.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm-.75 3.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75 1.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const RightTab = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M9.09 5.884a.75.75 0 0 1 .75-.75h10.146a.75.75 0 0 1 0 1.5H9.84a.75.75 0 0 1-.75-.75M9.09 10.196a.75.75 0 0 1 .75-.75h10.146a.75.75 0 0 1 0 1.5H9.84a.75.75 0 0 1-.75-.75M9.84 13.758a.75.75 0 0 0 0 1.5h10.146a.75.75 0 0 0 0-1.5zM9.09 18.82a.75.75 0 0 1 .75-.75h5.099a.75.75 0 1 1 0 1.5H9.84a.75.75 0 0 1-.75-.75M3 10.515v3.596c0 .441.486.71.86.476l2.877-1.798a.562.562 0 0 0 0-.953L3.86 10.038a.562.562 0 0 0-.86.476"/>
  </svg>
`;
const Rotate = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M5.235 21.318C3.748 21.318 3 20.612 3 19.087v-8.62c0-1.525.748-2.24 2.235-2.24h8.62c1.488 0 2.236.715 2.236 2.24v8.62c0 1.525-.748 2.231-2.236 2.231zm.027-1.403h8.567c.6 0 .861-.244.861-.854v-8.576c0-.61-.26-.854-.86-.854H5.261c-.592 0-.862.244-.862.854v8.576c0 .61.27.854.862.854M20.424 10.682a.57.57 0 0 1-.567-.571V8.73c0-1.962-1.252-3.343-3.236-3.343h-.183v1.179c0 .663-.512.82-1.024.442L13.11 5.313c-.394-.285-.384-.617 0-.902l2.304-1.704c.512-.386 1.024-.23 1.024.452v1.16h.192c2.624 0 4.37 1.777 4.37 4.41v1.382a.58.58 0 0 1-.576.57"/>
  </svg>
`;
const RotateAnticlockwise = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12.631 5.357a7.012 7.012 0 0 0-6.57 9.467l.794-2.327a.679.679 0 1 1 1.284.438l-1.225 3.592a.68.68 0 0 1-.861.424L2.46 15.725a.679.679 0 0 1 .438-1.284l1.805.616a8.369 8.369 0 1 1 7.928 5.681.679.679 0 0 1 0-1.357 7.012 7.012 0 1 0 0-14.024" clip-rule="evenodd"/>
  </svg>
`;
const RoundedRectangle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17zM5 5.75c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const Save = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25V7.828c0-.331-.132-.649-.366-.883l-1.829-1.829a1.25 1.25 0 0 0-.883-.366h-.422V7A1.75 1.75 0 0 1 14 8.75h-4A1.75 1.75 0 0 1 8.25 7V4.75zm6 0h2.25V7a.25.25 0 0 1-.25.25h-4A.25.25 0 0 1 9.75 7V4.75zm4.172-1.5H6A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V7.828c0-.729-.29-1.428-.805-1.944l-1.829-1.829a2.75 2.75 0 0 0-1.944-.805M9.75 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0M12 10.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"/>
  </svg>
`;
const Scale = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 6A2.75 2.75 0 0 1 6 3.25h5a.75.75 0 0 1 0 1.5H6c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-5a.75.75 0 0 1 1.5 0v5A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M15 4.75a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.81l-7.44 7.44H15a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v3.19l7.44-7.44z" clip-rule="evenodd"/>
  </svg>
`;
const ScaleAlt = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M13.25 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.75H14a.75.75 0 0 1-.75-.75M10.75 20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v5.25H10a.75.75 0 0 1 .75.75" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="m3.47 19.47 16-16 1.06 1.06-16 16z" clip-rule="evenodd"/>
  </svg>
`;
const Scissors = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.667 4.75a1.917 1.917 0 1 0 0 3.833 1.917 1.917 0 0 0 0-3.833M3.25 6.667A3.417 3.417 0 1 1 9.568 8.47l2.721 2.51 7.202-6.643A.75.75 0 0 1 20.51 5.44L9.569 15.53a3.417 3.417 0 1 1-1.053-1.07L11.183 12 8.515 9.54A3.417 3.417 0 0 1 3.25 6.666m10.865 7.017a.75.75 0 0 1 1.06-.042l5.333 4.918a.75.75 0 1 1-1.016 1.103l-5.334-4.919a.75.75 0 0 1-.043-1.06m-7.448 1.733a1.917 1.917 0 1 0 0 3.833 1.917 1.917 0 0 0 0-3.833" clip-rule="evenodd"/>
  </svg>
`;
const Search = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 9.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0M9.5 2.25a7.25 7.25 0 1 0 4.569 12.88l5.4 5.4a.75.75 0 1 0 1.061-1.06l-5.4-5.401A7.25 7.25 0 0 0 9.5 2.25" clip-rule="evenodd"/>
  </svg>
`;
const Select = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.012 4.35c-.17-1.5 1.514-2.496 2.748-1.625l13.222 9.336c1.383.976.712 3.15-.98 3.179l-6.661.11a.25.25 0 0 0-.213.127L9.066 20.88c-.836 1.475-3.071 1.019-3.261-.666zm1.883-.4a.25.25 0 0 0-.393.232l1.793 15.863a.25.25 0 0 0 .466.095l3.061-5.403a1.75 1.75 0 0 1 1.494-.887l6.66-.11a.25.25 0 0 0 .141-.454z" clip-rule="evenodd"/>
  </svg>
`;
const SelectArea = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3 6a3 3 0 0 1 5.92-.692h6.16a3.001 3.001 0 1 1 3.612 3.612v6.16a3.001 3.001 0 1 1-3.612 3.612H8.92a3.001 3.001 0 1 1-3.612-3.612V8.92A3 3 0 0 1 3 6m3.692 2.92v6.16a3 3 0 0 1 2.228 2.228h6.16a3 3 0 0 1 2.228-2.228V8.92a3 3 0 0 1-2.228-2.228H8.92A3 3 0 0 1 6.692 8.92M6 4.385a1.615 1.615 0 1 0 0 3.23 1.615 1.615 0 0 0 0-3.23m12 0a1.615 1.615 0 1 0 0 3.23 1.615 1.615 0 0 0 0-3.23m-12 12a1.615 1.615 0 1 0 0 3.23 1.615 1.615 0 0 0 0-3.23m12 0a1.615 1.615 0 1 0 0 3.23 1.615 1.615 0 0 0 0-3.23" clip-rule="evenodd"/>
  </svg>
`;
const SelectText = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3a.657.657 0 0 0 0 1.317h2.625v15.366H12A.657.657 0 0 0 12 21h6.563a.657.657 0 0 0 0-1.317h-2.625V4.317h2.624a.657.657 0 0 0 0-1.317zM5 7.39a.44.44 0 0 0-.437.44v8.78c0 .242.195.439.437.439h7.656a.657.657 0 0 1 0 1.317H5c-.966 0-1.75-.786-1.75-1.756V7.83c0-.97.784-1.757 1.75-1.757h7.656a.657.657 0 0 1 0 1.317zm14 9.659a.44.44 0 0 0 .438-.44V7.83A.44.44 0 0 0 19 7.39h-1.094a.657.657 0 0 1 0-1.317H19c.966 0 1.75.786 1.75 1.756v8.78c0 .97-.784 1.757-1.75 1.757h-1.094a.657.657 0 0 1 0-1.317z" clip-rule="evenodd"/>
  </svg>
`;
const Selection = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6 3.25A2.75 2.75 0 0 0 3.25 6v12A2.75 2.75 0 0 0 6 20.75h5a.75.75 0 0 0 0-1.5H6c-.69 0-1.25-.56-1.25-1.25V6c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v5a.75.75 0 0 0 1.5 0V6A2.75 2.75 0 0 0 18 3.25zm7.939 10.041a.5.5 0 0 0-.648.648l2.957 7.556a.5.5 0 0 0 .936-.012l1.061-2.937a.5.5 0 0 1 .3-.3l2.938-1.062a.5.5 0 0 0 .012-.936z" clip-rule="evenodd"/>
  </svg>
`;
const Send = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M20.088 4.143s1.804-.703 1.653 1.005c-.05.704-.5 3.166-.851 5.828l-1.203 7.888s-.1 1.156-1.002 1.357c-.902.2-2.255-.703-2.506-.904-.2-.151-3.757-2.412-5.01-3.517-.351-.302-.752-.905.05-1.608l5.26-5.025c.602-.602 1.203-2.009-1.302-.3l-7.015 4.772s-.802.503-2.305.05L2.6 12.685s-1.203-.753.852-1.507c5.01-2.361 11.174-4.772 16.635-7.034z"/>
  </svg>
`;
const Settings = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9.596 4.14c.612-2.52 4.196-2.52 4.808 0a.974.974 0 0 0 1.454.602c2.215-1.35 4.75 1.186 3.4 3.4a.974.974 0 0 0 .602 1.454c2.52.612 2.52 4.196 0 4.808a.974.974 0 0 0-.602 1.454c1.35 2.215-1.185 4.75-3.4 3.4a.974.974 0 0 0-1.454.602c-.612 2.52-4.196 2.52-4.808 0a.974.974 0 0 0-1.454-.602c-2.214 1.35-4.75-1.185-3.4-3.4a.974.974 0 0 0-.602-1.454c-2.52-.612-2.52-4.196 0-4.808a.974.974 0 0 0 .602-1.454c-1.35-2.214 1.186-4.75 3.4-3.4a.974.974 0 0 0 1.454-.602m3.35.354c-.24-.992-1.652-.992-1.892 0a2.474 2.474 0 0 1-3.692 1.53c-.872-.532-1.87.466-1.339 1.338.872 1.43.1 3.296-1.529 3.691-.992.241-.992 1.653 0 1.893a2.474 2.474 0 0 1 1.53 3.692c-.532.872.466 1.87 1.338 1.339a2.474 2.474 0 0 1 3.691 1.529c.241.992 1.653.992 1.893 0a2.474 2.474 0 0 1 3.692-1.53c.872.532 1.87-.466 1.339-1.338a2.474 2.474 0 0 1 1.529-3.692c.992-.24.992-1.652 0-1.892a2.474 2.474 0 0 1-1.53-3.692c.532-.872-.466-1.87-1.338-1.339-1.43.872-3.296.1-3.692-1.529M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/>
  </svg>
`;
const Shape = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .651.378l3.556 6.222a.75.75 0 0 1-.651 1.122H8.444a.75.75 0 0 1-.65-1.122l3.555-6.222A.75.75 0 0 1 12 3.25M9.737 9.472h4.526L12 5.512zM7.11 14.528a2.361 2.361 0 1 0 0 4.722 2.361 2.361 0 0 0 0-4.722m-3.861 2.36a3.861 3.861 0 1 1 7.722 0 3.861 3.861 0 0 1-7.722 0m9.778-3.11a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-.75.75h-6.222a.75.75 0 0 1-.75-.75zm1.5.75v4.722h4.722v-4.722z" clip-rule="evenodd"/>
  </svg>
`;
const Share = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M18 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 6a3.75 3.75 0 1 1 .799 2.314l-5.427 2.713a3.75 3.75 0 0 1 0 1.946l5.427 2.713a3.75 3.75 0 1 1-.671 1.341L8.95 14.314a3.75 3.75 0 1 1 0-4.628l5.427-2.713A3.8 3.8 0 0 1 14.25 6M6 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5m12 6a2.25 2.25 0 1 0-.002 4.5 2.25 2.25 0 0 0 .002-4.5" clip-rule="evenodd"/>
  </svg>
`;
const Shared = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.601 3.315a.75.75 0 0 1 .807.128l6.095 5.5a.75.75 0 0 1 0 1.114l-6.095 5.5A.75.75 0 0 1 14.156 15v-2.735c-2.614.106-4.1.76-4.92 1.345-.45.322-.715.633-.862.847a2 2 0 0 0-.166.29v.002A.75.75 0 0 1 6.75 14.5c0-3.006 1.322-4.981 3.035-6.177 1.4-.978 3.035-1.42 4.37-1.539V4a.75.75 0 0 1 .446-.685m-5.996 8.911c1.227-.793 3.191-1.476 6.3-1.476a.75.75 0 0 1 .75.75v1.813L19.882 9.5l-4.225-3.813V7.5a.75.75 0 0 1-.75.75c-1.202 0-2.894.347-4.262 1.302-.866.605-1.619 1.462-2.039 2.675" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M6 5.75c-.69 0-1.25.56-1.25 1.25v11c0 .69.56 1.25 1.25 1.25h11c.69 0 1.25-.56 1.25-1.25v-2a.75.75 0 0 1 1.5 0v2A2.75 2.75 0 0 1 17 20.75H6A2.75 2.75 0 0 1 3.25 18V7A2.75 2.75 0 0 1 6 4.25h4a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"/>
  </svg>
`;
const ShareiOs = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.47 1.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V15a.75.75 0 0 1-1.5 0V3.81L8.53 6.53a.75.75 0 0 1-1.06-1.06zM4 11.25a.75.75 0 0 1 .75.75v8A1.25 1.25 0 0 0 6 21.25h12A1.25 1.25 0 0 0 19.25 20v-8a.75.75 0 0 1 1.5 0v8A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20v-8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Shorter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 5.75a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const SiblingNode = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.35 7.25a2.5 2.5 0 0 1 2.4-1.8h5.5a2.5 2.5 0 0 1 0 5h-5.5c-1.1 0-2.036-.712-2.37-1.7H7.237c.47.627.75 1.406.75 2.25v2a2.25 2.25 0 0 0 2.25 2.25h.113a2.5 2.5 0 0 1 2.401-1.8h5.5a2.5 2.5 0 1 1 0 5h-5.5c-1.1 0-2.036-.712-2.37-1.7h-.145A3.75 3.75 0 0 1 6.485 13v-2a2.25 2.25 0 0 0-2.25-2.25H2v-1.5zm2.4-.3a1 1 0 1 0 0 2h5.5a1 1 0 1 0 0-2zm0 8a1 1 0 1 0 0 2h5.5a1 1 0 0 0 0-2z" clip-rule="evenodd"/>
  </svg>
`;
const Sidebar = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 7A2.75 2.75 0 0 1 5 4.25h14A2.75 2.75 0 0 1 21.75 7v10A2.75 2.75 0 0 1 19 19.75H5A2.75 2.75 0 0 1 2.25 17zM5 5.75h5.25v12.5H5c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25m6.75 0v12.5H19c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25zM6 7.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm-.75 3.25A.75.75 0 0 1 6 9.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 12.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const SignOut = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.25A2.75 2.75 0 0 0 5.25 5v14A2.75 2.75 0 0 0 8 21.75h5A2.75 2.75 0 0 0 15.75 19v-1.5a.75.75 0 0 0-1.5 0V19c0 .69-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 0 1.5 0V5A2.75 2.75 0 0 0 13 2.25zm10.03 6.22a.75.75 0 1 0-1.06 1.06l1 1 .72.72H11a.75.75 0 0 0 0 1.5h7.69l-.72.72-1 1a.75.75 0 1 0 1.06 1.06l1-1 2-2a.75.75 0 0 0 0-1.06l-2-2z" clip-rule="evenodd"/>
  </svg>
`;
const SingleSelect = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-2.47 8.22a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 12.94z" clip-rule="evenodd"/>
  </svg>
`;
const SingleSelectSelectLinear = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M16.53 9.53a.75.75 0 0 0-1.06-1.06l-4.97 4.97-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"/>
  </svg>
`;
const SingleSelectSelectSolid = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m4.225-12.136a.75.75 0 1 0-1.061-1.061l-5.275 5.275-1.581-1.58a.75.75 0 1 0-1.06 1.06l2.11 2.111a.75.75 0 0 0 1.061 0z" clip-rule="evenodd"/>
  </svg>
`;
const SingleSelectUn = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12" clip-rule="evenodd"/>
  </svg>
`;
const Smile = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75A8.213 8.213 0 0 0 3.75 12 8.213 8.213 0 0 0 12 20.25 8.213 8.213 0 0 0 20.25 12 8.213 8.213 0 0 0 12 3.75M2.25 12A9.713 9.713 0 0 1 12 2.25 9.713 9.713 0 0 1 21.75 12 9.713 9.713 0 0 1 12 21.75 9.713 9.713 0 0 1 2.25 12M8.5 7.75a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75m7 0a.75.75 0 0 1 .75.75V10a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75m-8.682 5.522a.75.75 0 0 1 .91.546C8.134 15.443 9.683 16.75 12 16.75s3.866-1.307 4.272-2.932a.75.75 0 0 1 1.456.364c-.594 2.376-2.812 4.068-5.728 4.068s-5.134-1.692-5.728-4.068a.75.75 0 0 1 .546-.91" clip-rule="evenodd"/>
  </svg>
`;
const SoloView = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.75 4.25A.75.75 0 0 0 5 5v3a.75.75 0 0 0 1.5 0V5.75h2.25a.75.75 0 0 0 0-1.5zm0 15.5A.75.75 0 0 1 5 19v-3a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5zM19.5 5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5H18V8a.75.75 0 0 0 1.5 0zm-.75 14.75a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v2.25h-2.25a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Sort = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M17.75 16.688a.75.75 0 0 1-1.5 0V6.123l-3.22 3.22a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22zm-10-9.375a.75.75 0 0 0-1.5 0v10.564l-3.22-3.22a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.22 3.22z" clip-rule="evenodd"/>
  </svg>
`;
const SortDown = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9.05 6a.75.75 0 1 0-1.5 0v10.19l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06l-2.72 2.72zm4.95.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5m1 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm5 7h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5" clip-rule="evenodd"/>
  </svg>
`;
const SortUp = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14 6.75h6a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5m1 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm5 7h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5M9.05 18a.75.75 0 0 1-1.5 0V7.81l-2.72 2.72a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L9.05 7.81z" clip-rule="evenodd"/>
  </svg>
`;
const SplitView = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.75 4A1.75 1.75 0 0 0 4 5.75v12c0 .966.784 1.75 1.75 1.75h12a1.75 1.75 0 0 0 1.75-1.75v-12A1.75 1.75 0 0 0 17.75 4h-12M11 5.5H5.75a.25.25 0 0 0-.25.25v12c0 .138.112.25.25.25H11zM12.5 18V5.5h5.25a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25z" clip-rule="evenodd"/>
  </svg>
`;
const Square = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 3.25h17.5v17.5H3.25zm1.5 1.5v14.5h14.5V4.75z" clip-rule="evenodd"/>
  </svg>
`;
const StartNumbering = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M19.218 12.75a.75.75 0 0 0 .559-.245l2.277-2.5a.75.75 0 1 0-1.108-1.01l-.974 1.068V5a1.75 1.75 0 0 0-1.75-1.75H12a.75.75 0 0 0 0 1.5h6.222a.25.25 0 0 1 .25.25v5.027l-.911-1.025a.75.75 0 0 0-1.122.996l2.223 2.5a.75.75 0 0 0 .556.252m-14.936-1.5a.75.75 0 0 0-.559.245l-2.277 2.5a.75.75 0 1 0 1.108 1.01l.974-1.068V19c0 .966.783 1.75 1.75 1.75H11.5a.75.75 0 0 0 0-1.5H5.278a.25.25 0 0 1-.25-.25v-5.027l.911 1.025a.75.75 0 0 0 1.122-.996l-2.223-2.5a.75.75 0 0 0-.556-.252M13.25 9a.75.75 0 0 0-.987-.712l-1.5.5a.75.75 0 0 0 .474 1.423l.513-.17v4.209H10.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const StartPoint = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const StartPointArrow = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.53 7.47a.75.75 0 0 1 0 1.06l-2.72 2.72H21a.75.75 0 0 1 0 1.5H4.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const StartPointCircle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M6 8.25a3.75 3.75 0 1 0 3.675 4.5H21a.75.75 0 0 0 0-1.5H9.675A3.75 3.75 0 0 0 6 8.25"/>
  </svg>
`;
const StartPointDiamond = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.47 8.47a.75.75 0 0 1 1.06 0l2.78 2.78H21a.75.75 0 0 1 0 1.5H9.31l-2.78 2.78a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z" clip-rule="evenodd"/>
  </svg>
`;
const StartPointTriangle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M7.75 8a.75.75 0 0 0-1.28-.53l-4 4a.75.75 0 0 0 0 1.06l4 4A.75.75 0 0 0 7.75 16v-3.25H21a.75.75 0 0 0 0-1.5H7.75z"/>
  </svg>
`;
const Stop = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M10 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
  </svg>
`;
const StopAi = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0m1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z" clip-rule="evenodd"/>
  </svg>
`;
const StraightLine = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.53 3.47a.75.75 0 0 1 0 1.06l-16 16a.75.75 0 0 1-1.06-1.06l16-16a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const StrikeThrough = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.406 7.464a3.468 3.468 0 0 1 6.59-1.513.77.77 0 0 0 1.385-.673 5.009 5.009 0 0 0-9.05 4.3h1.793a3.45 3.45 0 0 1-.718-2.114m6.512 8.476c0-.795-.268-1.528-.718-2.113h1.792a5.008 5.008 0 0 1-9.05 4.299.77.77 0 1 1 1.387-.673 3.468 3.468 0 0 0 6.589-1.513M4.297 10.905a.797.797 0 0 0 0 1.594h15.406a.797.797 0 0 0 0-1.594z" clip-rule="evenodd"/>
  </svg>
`;
const Style = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 5.45c0-1.204.964-2.2 2.178-2.2h11.144c1.214 0 2.178.996 2.178 2.2v5.394c0 1.478-.84 2.83-2.166 3.468l-1.842.884a1.274 1.274 0 0 0-.683 1.41l.054.26c.414 1.987-1.077 3.884-3.113 3.884s-3.527-1.897-3.113-3.884l.054-.26a1.27 1.27 0 0 0-.683-1.41l-1.842-.884a3.84 3.84 0 0 1-2.166-3.468zm1.503 5.522a2.34 2.34 0 0 0 1.313 1.988l1.841.883a2.77 2.77 0 0 1 1.503 3.068l-.055.26c-.226 1.085.59 2.079 1.645 2.079s1.87-.994 1.645-2.079l-.055-.26a2.77 2.77 0 0 1 1.503-3.068l1.842-.883a2.34 2.34 0 0 0 1.312-1.988zm12.497-1.5H5.75V5.45c0-.398.314-.7.678-.7h2.197v2.806a.75.75 0 0 0 1.5 0V4.75h3.75v1.917a.75.75 0 0 0 1.5 0V4.75h2.197a.69.69 0 0 1 .678.7z" clip-rule="evenodd"/>
  </svg>
`;
const StyleGeneral = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.47 3.47a.75.75 0 0 0 0 1.06l16 16a.75.75 0 1 0 1.06-1.06l-16-16a.75.75 0 0 0-1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const StyleScribble = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.27 3.831a.75.75 0 0 1 .899-.562c6.615 1.527 12.546 4.893 15.306 7.15.361.296.66.6.846.919.195.335.305.77.11 1.21-.176.393-.523.617-.807.75-.3.142-.659.242-1.032.319-.75.155-1.715.25-2.739.336l-.756.063c-.817.066-1.667.135-2.514.23-2.243.249-4.034.569-5.13.952-.443.155-.694.295-.82.39.41.486 1.095.97 1.966 1.428.891.468 1.915.875 2.895 1.212a36 36 0 0 0 3.59 1.023l.056.012.014.003h.003a.75.75 0 0 1-.314 1.467L15 20l-.157.733h-.002l-.005-.001-.017-.004-.062-.014a29 29 0 0 1-1.072-.262c-.7-.183-1.656-.454-2.679-.805-1.02-.35-2.121-.787-3.105-1.303-.97-.51-1.89-1.13-2.487-1.876-.188-.235-.339-.535-.343-.888a1.34 1.34 0 0 1 .337-.889c.352-.414.94-.696 1.55-.909 1.266-.443 3.202-.777 5.46-1.027a88 88 0 0 1 2.572-.236l.737-.06c1.034-.088 1.913-.177 2.56-.31.288-.06.5-.123.645-.184a3 3 0 0 0-.407-.384c-2.587-2.117-8.31-5.377-14.694-6.85a.75.75 0 0 1-.562-.9" clip-rule="evenodd"/>
  </svg>
`;
const SubNode = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.354 11.25a2.75 2.75 0 0 1 2.646-2h5a2.75 2.75 0 1 1 0 5.5h-5a2.75 2.75 0 0 1-2.646-2H2a.75.75 0 0 1 0-1.5zm2.646-.5a1.25 1.25 0 1 0 0 2.5h5a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"/>
  </svg>
`;
const SucessfulDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" opacity=".14"/><path fill='currentColor' fill-rule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.678-3.735a1 1 0 0 1 .057 1.413l-5.539 6a1 1 0 0 1-1.47 0l-2.46-2.666a1 1 0 1 1 1.469-1.357l1.726 1.87 4.804-5.203a1 1 0 0 1 1.413-.057" clip-rule="evenodd"/>
  </svg>
`;
const Summarize = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.5 5c.064 0 .117.048.124.11.046.405.169.7.368.902s.486.327.894.363a.125.125 0 0 1 0 .25c-.401.034-.696.16-.899.362-.203.203-.328.498-.363.899a.125.125 0 0 1-.248 0c-.037-.408-.162-.696-.364-.894-.203-.2-.497-.322-.901-.368a.125.125 0 0 1 0-.248c.41-.048.699-.17.897-.368s.32-.487.368-.897A.125.125 0 0 1 11.5 5M8.073 6.244a.275.275 0 0 0-.546 0c-.104.903-.374 1.538-.81 1.973-.435.436-1.07.706-1.974.81a.275.275 0 0 0 .001.546c.888.1 1.537.37 1.983.809.444.436.72 1.07.8 1.967a.275.275 0 0 0 .547 0c.076-.882.352-1.53.798-1.977.447-.446 1.095-.722 1.977-.798a.275.275 0 0 0 0-.548c-.896-.08-1.531-.355-1.967-.8-.438-.445-.708-1.094-.809-1.982m6.427.506a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5zm-1.5 3.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM4.25 14.5a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M5 17.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Tag = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.564 7.467a3.017 3.017 0 0 1 2.903-2.903l4.606-.17c.323-.013.636.11.864.338l6.647 6.648a1.16 1.16 0 0 1 0 1.64l-6.563 6.564a1.16 1.16 0 0 1-1.641 0l-6.648-6.647a1.16 1.16 0 0 1-.339-.864zm2.851-4.295a4.41 4.41 0 0 0-4.243 4.243l-.17 4.607c-.027.71.244 1.397.746 1.9l6.647 6.647a2.553 2.553 0 0 0 3.61 0l6.564-6.564a2.553 2.553 0 0 0 0-3.61L13.92 3.748a2.55 2.55 0 0 0-1.9-.746zm.847 5.09A.928.928 0 1 0 6.95 6.95a.928.928 0 0 0 1.313 1.313" clip-rule="evenodd"/>
  </svg>
`;
const Tags = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.263 2.48a.735.735 0 0 0 .054 1.47l4.276-.159c.34-.012.67.117.911.358l6.307 6.307a.735.735 0 1 0 1.039-1.04L14.543 3.11a2.7 2.7 0 0 0-2.005-.788zm-.536 4.242a3.185 3.185 0 0 0-3.065 3.065l-.126 3.41c-.013.34.117.67.358.91l5.618 5.619a1.225 1.225 0 0 0 1.732 0l5.422-5.422a1.225 1.225 0 0 0 0-1.732l-5.618-5.618c-.241-.241-.572-.37-.912-.358zm-4.534 3.01a4.654 4.654 0 0 1 4.48-4.479l3.409-.126a2.7 2.7 0 0 1 2.005.788l5.618 5.617a2.695 2.695 0 0 1 0 3.811l-5.422 5.422a2.695 2.695 0 0 1-3.81 0l-5.619-5.618a2.7 2.7 0 0 1-.787-2.005zm4.673-.976a.828.828 0 1 1-1.17 1.17.828.828 0 0 1 1.17-1.17" clip-rule="evenodd"/>
  </svg>
`;
const TeX = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' fill-rule="evenodd" d="m21.63 7.299-2.115 3.107 3.142 4.671c.284.41.428.481 1.343.481v.351c-.347-.028-1.061-.028-1.43-.028-.472 0-1.17 0-1.628.028v-.35c.5-.03.628-.28.628-.395 0-.043 0-.087-.112-.247l-2.486-3.714-2.286 3.39a.62.62 0 0 0-.142.395c0 .234.128.524.57.568v.35c-.356-.027-1.027-.027-1.413-.027h-.106l-.446 3.187H7.713v-.35c1.014 0 1.174 0 1.174-.654v-7.837c0-.653-.162-.653-1.174-.653v-.4h.752c-.183-2.354-.412-2.766-2.58-2.766h-.784c-.257.06-.257.234-.257.554v7.906c0 .525.042.685 1.228.685h.399v.35h-.015c-.68-.013-1.392-.027-2.085-.027s-1.4.014-2.079.027H2.27v-.35h.405c1.204 0 1.247-.16 1.247-.685V6.96c0-.334 0-.51-.273-.554H2.86c-2.216 0-2.418.421-2.603 2.827H0L.241 6.02h8.251l.23 3.152h6.226l.343 3.212h-.257c-.2-1.92-.458-2.813-2.67-2.813h-1.953c-.57 0-.598.073-.598.563v3.6h1.349c1.347 0 1.476-.493 1.476-1.698h.23v3.778h-.23c0-1.226-.128-1.728-1.476-1.728H9.814v4.06c0 .5.026.573.597.573h1.984c2.318 0 2.655-.996 2.939-2.84-.294.002-.621.008-.846.027v-.351c.273 0 1.202-.016 1.815-.919l2.486-3.69-2.757-4.115c-.315-.451-.572-.481-1.357-.481V6c.345.028 1.06.028 1.43.028.47 0 1.17 0 1.627-.028v.35c-.473.014-.63.262-.63.392 0 .044.015.09.114.248l2.114 3.145 1.887-2.78c.1-.145.17-.262.17-.436 0-.234-.112-.525-.57-.568V6c.357.028.943.028 1.414.028.343 0 .886 0 1.213-.028v.35c-1.168.016-1.6.639-1.812.945z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const TeamWorkspace = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.397 3.25h7.873c.227 0 .44 0 .62.015.194.015.413.052.632.164.308.157.559.407.716.716.111.218.148.438.164.632.015.18.015.393.015.62v3.936a.75.75 0 0 1-1.5 0v-3.91c0-.262 0-.413-.01-.524a1 1 0 0 0-.01-.082.14.14 0 0 0-.047-.047 1 1 0 0 0-.083-.01 7 7 0 0 0-.523-.01H5.422c-.261 0-.412 0-.523.01a1 1 0 0 0-.082.01.14.14 0 0 0-.047.047 1 1 0 0 0-.01.082c-.01.111-.01.262-.01.523V19.25h2.056v-1.917a2.528 2.528 0 0 1 5.055 0V20a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V5.397c0-.227 0-.44.015-.62a1.7 1.7 0 0 1 .164-.632c.157-.309.407-.56.716-.716a1.7 1.7 0 0 1 .632-.164c.18-.015.393-.015.62-.015m2.909 16h2.055v-1.917a1.028 1.028 0 0 0-2.055 0zM5.916 7.556a.75.75 0 0 1 .75-.75h.89a.75.75 0 0 1 0 1.5h-.89a.75.75 0 0 1-.75-.75m4.445 0a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5h-.889a.75.75 0 0 1-.75-.75m-4.444 2.666a.75.75 0 0 1 .75-.75h.889a.75.75 0 1 1 0 1.5h-.89a.75.75 0 0 1-.75-.75m4.444 0a.75.75 0 0 1 .75-.75H12a.75.75 0 1 1 0 1.5h-.889a.75.75 0 0 1-.75-.75m7.15 2.528a.583.583 0 1 0 0 1.167.583.583 0 0 0 0-1.167m-2.083.583a2.083 2.083 0 1 1 4.166 0 2.083 2.083 0 0 1-4.166 0m-9.511-.444a.75.75 0 0 1 .75-.75h.889a.75.75 0 0 1 0 1.5h-.89a.75.75 0 0 1-.75-.75m4.444 0a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5h-.889a.75.75 0 0 1-.75-.75m5.087 6.361h4.215a1.47 1.47 0 0 0-1.44-1.167h-1.334c-.708 0-1.3.5-1.44 1.167m-1.531.306a2.97 2.97 0 0 1 2.972-2.973h1.333a2.97 2.97 0 0 1 2.972 2.973V20a.75.75 0 0 1-.75.75h-5.777a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"/>
  </svg>
`;
const TelegramDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M12 2a9.999 9.999 0 0 0-7.07 17.071A9.999 9.999 0 1 0 19.07 4.93 10 10 0 0 0 12 2"/><path fill='currentColor' d="M6.527 11.894q4.374-1.905 5.83-2.511c2.78-1.156 3.356-1.356 3.732-1.363.083-.001.267.02.388.116a.43.43 0 0 1 .142.271c.012.078.03.255.015.394-.15 1.581-.801 5.418-1.132 7.19-.14.749-.416 1-.683 1.024-.581.054-1.022-.383-1.585-.752-.88-.577-1.376-.936-2.23-1.499-.988-.65-.348-1.008.215-1.593.147-.153 2.706-2.48 2.755-2.691.006-.026.012-.125-.047-.177s-.144-.034-.207-.02q-.132.03-4.218 2.788-.598.411-1.085.4c-.356-.007-1.043-.201-1.554-.367-.625-.204-1.124-.311-1.08-.657q.033-.27.744-.553"/>
  </svg>
`;
const Text = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v2.667a.75.75 0 0 1-1.5 0V4.75h-6.5v14.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25V4.75h-6.5v1.917a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"/>
  </svg>
`;
const TextAlignCenter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15A.75.75 0 0 1 3.75 6m3.5 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M6 17.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const TextAlignLeft = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M20.75 6a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 .75-.75m-7 6a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 .75-.75m3 6a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const TextAlignRight = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M4.25 6A.75.75 0 0 1 5 5.25h15a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 6m7 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m-3 6a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const TextBackgroundDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.15 5.5A2.35 2.35 0 0 1 5.5 3.15h13a2.35 2.35 0 0 1 2.35 2.35v13a2.35 2.35 0 0 1-2.35 2.35h-13a2.35 2.35 0 0 1-2.35-2.35z" clip-rule="evenodd"/><path fill='currentColor' fill-opacity=".3" fill-rule="evenodd" d="M3.15 5.5A2.35 2.35 0 0 1 5.5 3.15h13a2.35 2.35 0 0 1 2.35 2.35v13a2.35 2.35 0 0 1-2.35 2.35h-13a2.35 2.35 0 0 1-2.35-2.35zM5.5 3.85A1.65 1.65 0 0 0 3.85 5.5v13c0 .911.739 1.65 1.65 1.65h13a1.65 1.65 0 0 0 1.65-1.65v-13a1.65 1.65 0 0 0-1.65-1.65z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M10.622 7.505a1.471 1.471 0 0 1 2.756 0l3.324 8.865a.75.75 0 0 1-1.404.527l-.94-2.505H9.642l-.94 2.505a.75.75 0 0 1-1.404-.527zm-.418 5.387h3.592L12 8.102z" clip-rule="evenodd"/>
  </svg>
`;
const TextColor = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M10.453 4.622a1.652 1.652 0 0 1 3.094 0l4.155 11.081a.75.75 0 0 1-1.404.527l-1.22-3.253H8.922l-1.22 3.253a.75.75 0 0 1-1.404-.527zm-.969 6.855h5.031L12.142 5.15a.152.152 0 0 0-.284 0z" clip-rule="evenodd"/><rect width="16" height="2.5" x="4" y="18" fill='currentColor' rx="1"/>
  </svg>
`;
const TextType = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.667 4.707c-.73 0-1.381.461-1.622 1.15l-2.286 6.531-.329.94-1.325 3.786a.886.886 0 0 0 1.673.585l1.117-3.193h5.543l1.118 3.193a.886.886 0 0 0 1.672-.585l-1.325-3.787-.328-.939-2.286-6.53a1.72 1.72 0 0 0-1.622-1.151m0 1.88 2.151 6.147H6.515zm4.363-1.67a.805.805 0 1 0 0 1.61h7.22a.805.805 0 0 0 0-1.61zm1.805 5.887a.806.806 0 0 0 0 1.61h5.415a.806.806 0 0 0 0-1.61zm.398 6.692c0-.445.36-.805.805-.805h4.212a.805.805 0 1 1 0 1.61h-4.212a.805.805 0 0 1-.805-.805" clip-rule="evenodd"/>
  </svg>
`;
const Timeline = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.25 7A2.75 2.75 0 0 1 10 4.25h3a.75.75 0 0 1 0 1.5h-3c-.69 0-1.25.56-1.25 1.25v4.25h6.5V7A2.75 2.75 0 0 1 18 4.25h3a.75.75 0 0 1 0 1.5h-3c-.69 0-1.25.56-1.25 1.25v4.25H21a.75.75 0 0 1 0 1.5h-7.25V17c0 .69.56 1.25 1.25 1.25h3a.75.75 0 0 1 0 1.5h-3A2.75 2.75 0 0 1 12.25 17v-4.25H3a.75.75 0 0 1 0-1.5h4.25z" clip-rule="evenodd"/>
  </svg>
`;
const Title = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.84 5.25a.75.75 0 0 0-.75.75v2a.75.75 0 0 0 1.5 0V6.75H7v10.5H5.023a.75.75 0 0 0 0 1.5h5.454a.75.75 0 1 0 0-1.5H8.5V6.75h3.41V8a.75.75 0 0 0 1.5 0V6a.75.75 0 0 0-.75-.75H2.84m12.765 0a.75.75 0 0 0 0 1.5h5.454a.75.75 0 1 0 0-1.5zm-.75 6.75a.75.75 0 0 1 .75-.75h5.454a.75.75 0 1 1 0 1.5h-5.455a.75.75 0 0 1-.75-.75m.75 5.25a.75.75 0 0 0 0 1.5h5.454a.75.75 0 1 0 0-1.5z" clip-rule="evenodd"/>
  </svg>
`;
const Toc = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M4 5.25a.75.75 0 0 0 0 1.5h15.023a.75.75 0 0 0 0-1.5zM9 9.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM4.25 14a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M9 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"/>
  </svg>
`;
const Today = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.205 2.787c.393 0 .712.319.712.712v.711h6.166V3.5a.712.712 0 0 1 1.423 0v.711h2.135a2.61 2.61 0 0 1 2.609 2.61v11.384a2.61 2.61 0 0 1-2.609 2.609H5.359a2.61 2.61 0 0 1-2.609-2.61V6.82A2.61 2.61 0 0 1 5.359 4.21h2.135V3.5c0-.393.318-.712.711-.712m6.878 2.846v.712a.712.712 0 0 0 1.423 0v-.712h2.135c.655 0 1.186.531 1.186 1.186v1.66H4.173V6.82c0-.655.531-1.186 1.186-1.186h2.135v.712a.712.712 0 1 0 1.423 0v-.712zm4.744 4.27H4.173v8.3c0 .656.531 1.187 1.186 1.187h13.282c.655 0 1.186-.531 1.186-1.186zm-12.57 1.47a.474.474 0 0 0-.475.475v1.423c0 .262.212.474.474.474H8.68a.474.474 0 0 0 .475-.474v-1.424a.474.474 0 0 0-.475-.474zm-.475 4.174c0-.261.212-.474.474-.474H8.68c.262 0 .475.213.475.474v1.424a.474.474 0 0 1-.475.474H7.256a.474.474 0 0 1-.474-.474zm4.459-4.174a.474.474 0 0 0-.474.475v1.423c0 .262.212.474.474.474h1.423a.474.474 0 0 0 .475-.474v-1.424a.474.474 0 0 0-.475-.474zm-.474 4.174c0-.261.212-.474.474-.474h1.423c.262 0 .475.213.475.474v1.424a.474.474 0 0 1-.475.474h-1.423a.474.474 0 0 1-.474-.474zm4.554-4.174a.474.474 0 0 0-.475.475v1.423c0 .262.213.474.474.474h1.424a.474.474 0 0 0 .474-.474v-1.424a.474.474 0 0 0-.474-.474z" clip-rule="evenodd"/>
  </svg>
`;
const ToggleCollapse = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M15.632 11.35a.757.757 0 0 1 0 1.3l-5.527 3.248c-.491.29-1.105-.072-1.105-.65V8.752c0-.577.614-.938 1.105-.65z"/>
  </svg>
`;
const ToggleExpand = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M13.15 15.132a.757.757 0 0 1-1.3 0L8.602 9.605c-.29-.491.072-1.105.65-1.105h6.497c.577 0 .938.614.65 1.105z"/>
  </svg>
`;
const Tomorrow = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.42 3.205a.68.68 0 0 1 .68.68v.68h5.888v-.68a.68.68 0 1 1 1.358 0v.68h2.039a2.49 2.49 0 0 1 2.491 2.49v5.435a.68.68 0 1 1-1.359 0V10H4.57v7.926c0 .626.507 1.133 1.132 1.133h5.888a.68.68 0 0 1 0 1.359H5.702a2.49 2.49 0 0 1-2.491-2.492V7.055a2.49 2.49 0 0 1 2.49-2.49h2.04v-.68a.68.68 0 0 1 .679-.68m6.568 2.718v.68a.68.68 0 1 0 1.358 0v-.68h2.039c.625 0 1.132.507 1.132 1.132v1.586H4.57V7.055c0-.625.507-1.132 1.132-1.132H7.74v.68a.68.68 0 1 0 1.36 0v-.68zm3.641 10.672a.68.68 0 1 1 .96-.96l1.923 1.92a.68.68 0 0 1 0 .962l-1.922 1.921a.68.68 0 1 1-.96-.96l1.44-1.442zm-4.238-.96a.68.68 0 0 0 0 .96l1.44 1.441-1.44 1.442a.68.68 0 1 0 .96.96l1.922-1.921a.68.68 0 0 0 0-.961l-1.921-1.922a.68.68 0 0 0-.961 0" clip-rule="evenodd"/>
  </svg>
`;
const Tone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m9.17 8.506-1.112 2.877a.85.85 0 0 1-.793.544H4a.75.75 0 0 1 0-1.5h2.82l1.699-4.4c.3-.776 1.422-.703 1.618.107l1.96 8.08 1.797-5.67a.85.85 0 0 1 1.483-.263l1.658 2.146H20a.75.75 0 0 1 0 1.5h-3.284a.85.85 0 0 1-.673-.33L14.95 10.18l-2.126 6.705c-.26.82-1.434.78-1.636-.056z" clip-rule="evenodd"/>
  </svg>
`;
const Triangle = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="m12 2.5 9.96 17.25H2.04zm0 3L4.639 18.25H19.36z" clip-rule="evenodd"/>
  </svg>
`;
const Twitter = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M17.463 3.4h2.914l-6.365 7.275 7.488 9.899h-5.863l-4.592-6.004-5.255 6.004H2.875l6.809-7.783L2.5 3.401h6.012l4.15 5.488zm-1.022 15.43h1.614L7.635 5.052H5.903z"/>
  </svg>
`;
const UnderLine = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M7.744 3.968a.808.808 0 1 0-1.616 0v7.003a5.656 5.656 0 0 0 11.313 0V3.968a.808.808 0 1 0-1.616 0v7.003a4.04 4.04 0 1 1-8.08 0zM4.458 19.32a.808.808 0 1 0 0 1.616h15.084a.808.808 0 0 0 0-1.616z" clip-rule="evenodd"/>
  </svg>
`;
const Undo = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.53 4.47a.75.75 0 0 1 0 1.06L5.81 8.25h4.624c1.651 0 2.937 0 3.968.084 1.047.086 1.897.262 2.662.652a6.75 6.75 0 0 1 2.95 2.95c.39.765.566 1.615.652 2.662.084 1.031.084 2.317.084 3.968v.034a.75.75 0 0 1-1.5 0c0-1.693 0-2.917-.08-3.88-.077-.954-.228-1.585-.492-2.104a5.25 5.25 0 0 0-2.295-2.294c-.518-.264-1.15-.415-2.103-.493-.963-.078-2.187-.079-3.88-.079H5.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0" clip-rule="evenodd"/>
  </svg>
`;
const Ungroup = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5.286 4.75c-.346 0-.536.25-.536.45v3.6c0 .2.19.45.536.45h6.428c.346 0 .536-.25.536-.45V5.2c0-.2-.19-.45-.536-.45zM3.25 5.2c0-1.125.961-1.95 2.036-1.95h6.428c1.075 0 2.036.825 2.036 1.95v3.6c0 1.125-.961 1.95-2.036 1.95H5.286c-1.075 0-2.036-.825-2.036-1.95zM12.286 14.75c-.346 0-.536.25-.536.45v3.6c0 .2.19.45.536.45h6.428c.346 0 .536-.25.536-.45v-3.6c0-.2-.19-.45-.536-.45zm-2.036.45c0-1.125.961-1.95 2.036-1.95h6.428c1.075 0 2.036.825 2.036 1.95v3.6c0 1.125-.961 1.95-2.036 1.95h-6.428c-1.075 0-2.036-.825-2.036-1.95z" clip-rule="evenodd"/>
  </svg>
`;
const Unlink = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M14.522 5.35a2.919 2.919 0 1 1 4.128 4.128l-3.669 3.669a.75.75 0 1 0 1.06 1.06l3.67-3.669a4.419 4.419 0 1 0-6.25-6.249l-1.008 1.009a.75.75 0 1 0 1.06 1.06zm-5.503 5.503a.75.75 0 0 0-1.061-1.06L4.289 13.46a4.419 4.419 0 1 0 6.25 6.25l1.01-1.01a.75.75 0 1 0-1.06-1.061l-1.011 1.01a2.919 2.919 0 0 1-4.128-4.128zm.376-6.36a.75.75 0 1 0-1.461.338l.4 1.734a.75.75 0 1 0 1.462-.337zm-4.564 3.44a.75.75 0 1 0-.337 1.462l1.734.4a.75.75 0 1 0 .337-1.46zm12.941 6.271a.75.75 0 0 0-.337 1.462l1.734.4a.75.75 0 1 0 .337-1.461zm-2.106 3.23a.75.75 0 1 0-1.462.338l.4 1.734a.75.75 0 0 0 1.462-.337z" clip-rule="evenodd"/>
  </svg>
`;
const Unlock = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M6.25 8a5.75 5.75 0 0 1 11.021-2.3.75.75 0 1 1-1.374.6A4.251 4.251 0 0 0 7.75 8v1.254q.465-.005 1.027-.004h6.446c.728 0 1.328 0 1.823.03.626.038 1.164.128 1.657.379a3.75 3.75 0 0 1 1.638 1.638c.227.445.321.925.366 1.471.043.531.043 1.187.043 2v1.464c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043H8.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.464c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.297-.15.612-.244.952-.302zm2.55 2.75c-.756 0-1.31 0-1.754.027-.551.034-.847.106-1.067.218a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.056-.038 1.909v1.4c0 .852 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.037 1.057.038 1.909.038h6.4c.852 0 1.447 0 1.91-.038.453-.038.714-.107.912-.207.423-.216.767-.56.983-.983.1-.198.17-.459.207-.913.037-.462.038-1.057.038-1.909v-1.4c0-.853 0-1.447-.038-1.91-.038-.453-.107-.714-.207-.912a2.25 2.25 0 0 0-.983-.983c-.22-.112-.517-.184-1.068-.218a32 32 0 0 0-1.754-.027zm3.2 3a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Unpin = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <g clip-path="url(#a)"><path fill='currentColor' fill-rule="evenodd" d="M13.591 3.692a2.75 2.75 0 0 1 3.89 0l2.827 2.828a2.75 2.75 0 0 1 0 3.889l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a1.25 1.25 0 0 0 0-1.768l-2.829-2.829a1.25 1.25 0 0 0-1.767 0l-1.061 1.06a.75.75 0 0 1-1.06-1.06zm-6.364-.708a.75.75 0 0 1 1.06 0l12.729 12.728a.75.75 0 0 1-1.061 1.061l-3.005-3.005-1.97 1.97.884.884a.75.75 0 1 1-1.06 1.06L11.09 13.97l-4.925 4.924a.75.75 0 1 1-1.06-1.06l4.924-4.925-3.712-3.712a.75.75 0 0 1 1.06-1.06l.884.883 1.97-1.97-3.005-3.005a.75.75 0 0 1 0-1.06m4.066 5.127-1.97 1.97 4.596 4.596 1.97-1.97z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill='currentColor' d="M0 0H24V24H0z"/></clipPath></defs>
  </svg>
`;
const UnsucessfulDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M2 12a5 5 0 0 1 5-5h2a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5" opacity=".14"/><path fill='currentColor' fill-rule="evenodd" d="M2.293 2.293a1 1 0 0 1 1.414 0l4 4 14 14a1 1 0 0 1-1.414 1.414L16.586 18H16.5a1 1 0 0 1-.997-1.082l-1.542-1.543A6 6 0 0 1 9 18H7A6 6 0 0 1 4.946 6.36L2.293 3.708a1 1 0 0 1 0-1.414m4.312 5.726A4 4 0 0 0 7 16h2a4 4 0 0 0 3.509-2.077l-1.572-1.572A1 1 0 0 1 9 12q.001-.732.169-1.417zM15 8c-.556 0-1.084.113-1.562.316a1 1 0 1 1-.783-1.84A6 6 0 0 1 15 6h2a6 6 0 0 1 4.615 9.835 1 1 0 0 1-1.538-1.279A4 4 0 0 0 17 8z" clip-rule="evenodd"/>
  </svg>
`;
const Unsync = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11 5.75a4.25 4.25 0 0 0-4.147 5.183.75.75 0 0 1-.568.896A3.252 3.252 0 0 0 7 18.25h9a4.25 4.25 0 1 0-.085-8.5.75.75 0 0 1-.75-.6A4.25 4.25 0 0 0 11 5.75M5.25 10a5.75 5.75 0 0 1 11.235-1.73A5.75 5.75 0 0 1 16 19.75H7a4.75 4.75 0 0 1-1.722-9.178A6 6 0 0 1 5.25 10m6.45-.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m.05 7.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clip-rule="evenodd"/>
  </svg>
`;
const Updated = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8 2.75a.75.75 0 0 1 .75.75v.75h6.5V3.5a.75.75 0 0 1 1.5 0v.75H19A2.75 2.75 0 0 1 21.75 7v5a.75.75 0 0 1-1.5 0v-1.75H3.75V19c0 .69.56 1.25 1.25 1.25h7a.75.75 0 0 1 0 1.5H5A2.75 2.75 0 0 1 2.25 19V7A2.75 2.75 0 0 1 5 4.25h2.25V3.5A.75.75 0 0 1 8 2.75m7.25 3v.75a.75.75 0 0 0 1.5 0v-.75H19c.69 0 1.25.56 1.25 1.25v1.75H3.75V7c0-.69.56-1.25 1.25-1.25h2.25v.75a.75.75 0 0 0 1.5 0v-.75zm.184 9.843a3.03 3.03 0 0 1 5.253 1.188.75.75 0 0 0 1.453-.374 4.53 4.53 0 0 0-8.128-1.418l-.596-.252a.3.3 0 0 0-.41.337l.483 2.329a.3.3 0 0 0 .454.193l2.01-1.272a.3.3 0 0 0-.043-.53zm2.1 5.415c.931 0 1.765-.42 2.32-1.082l-.476-.202a.3.3 0 0 1-.043-.53l2.01-1.272a.3.3 0 0 1 .454.193l.485 2.329a.3.3 0 0 1-.411.337l-.596-.252a4.52 4.52 0 0 1-3.743 1.979 4.525 4.525 0 0 1-4.385-3.397.75.75 0 0 1 1.453-.374 3.025 3.025 0 0 0 2.933 2.27" clip-rule="evenodd"/>
  </svg>
`;
const Upgrade = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-4.621 7.72 4.09-4.091a.75.75 0 0 1 1.061 0l4.091 4.09a.75.75 0 1 1-1.06 1.061L12.75 9.72v6.78a.75.75 0 0 1-1.5 0V9.72l-2.81 2.81a.75.75 0 0 1-1.061-1.06" clip-rule="evenodd"/>
  </svg>
`;
const Upload = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M5 10.75a.25.25 0 0 0-.25.25v7c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-7a.25.25 0 0 0-.25-.25h-1a.75.75 0 0 1 0-1.5h1c.966 0 1.75.784 1.75 1.75v7A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-7c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"/><path fill='currentColor' fill-rule="evenodd" d="M12 2.75a.75.75 0 0 1 .53.22l4 4a.75.75 0 0 1-1.06 1.06l-2.72-2.72V15.5a.75.75 0 0 1-1.5 0V5.31L8.53 8.03a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 .53-.22" clip-rule="evenodd"/>
  </svg>
`;
const UserGuide = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 6.672v11.326c1.102-.479 2.388-.748 3.75-.748s2.648.27 3.75.748V6.672c-.997-.567-2.302-.922-3.75-.922s-2.753.355-3.75.922m9 0v11.326c1.102-.479 2.388-.748 3.75-.748s2.648.27 3.75.748V6.672c-.997-.567-2.302-.922-3.75-.922s-2.753.355-3.75.922m-.75-1.3c-1.247-.71-2.816-1.122-4.5-1.122-1.877 0-3.61.511-4.915 1.378a.75.75 0 0 0-.335.625v13a.75.75 0 0 0 1.165.625c1.031-.686 2.469-1.128 4.085-1.128s3.054.442 4.085 1.128a.75.75 0 0 0 .83 0c1.031-.686 2.469-1.128 4.085-1.128s3.054.442 4.085 1.128a.75.75 0 0 0 1.165-.625v-13a.75.75 0 0 0-.335-.625C20.11 4.761 18.377 4.25 16.5 4.25c-1.684 0-3.253.412-4.5 1.123" clip-rule="evenodd"/>
  </svg>
`;
const View = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 5.75a9.25 9.25 0 0 0-8.635 5.926.9.9 0 0 0 0 .648 9.254 9.254 0 0 0 17.27 0 .9.9 0 0 0 0-.648A9.25 9.25 0 0 0 12 5.75M1.966 11.137C3.516 7.11 7.424 4.25 12 4.25s8.484 2.86 10.035 6.887c.214.555.214 1.17 0 1.726-1.55 4.027-5.458 6.887-10.034 6.887s-8.484-2.86-10.035-6.887a2.4 2.4 0 0 1 0-1.726M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"/>
  </svg>
`;
const ViewBar = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.25 20a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-.75.75M9.665 8.44a.75.75 0 0 1 .062 1.058L8.17 11.25h7.66l-1.557-1.752a.75.75 0 0 1 1.12-.996l2.668 3a.75.75 0 0 1 0 .996l-2.667 3a.75.75 0 1 1-1.121-.996l1.557-1.752H8.17l1.557 1.752a.75.75 0 0 1-1.12.996l-2.668-3a.75.75 0 0 1 0-.996l2.667-3a.75.75 0 0 1 1.059-.063M21.5 4.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"/>
  </svg>
`;
const ViewLayers = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM6.25 8A.75.75 0 0 1 7 7.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 8m-2 5A2.75 2.75 0 0 1 7 10.25h10A2.75 2.75 0 0 1 19.75 13v5A2.75 2.75 0 0 1 17 20.75H7A2.75 2.75 0 0 1 4.25 18zM7 11.75c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25z" clip-rule="evenodd"/>
  </svg>
`;
const Warning = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M12 4.75a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0M12 7.694a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V8.444a.75.75 0 0 1 .75-.75m-.75 7.862a.75.75 0 0 1 .75-.75h.009a.75.75 0 1 1 0 1.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Web = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.784 11.25H8.26c.06-2.25.39-4.298.907-5.851.161-.483.345-.932.552-1.33a8.26 8.26 0 0 0-5.935 7.181m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.086 0-.287.052-.579.421-.285.362-.574.932-.83 1.702-.459 1.374-.77 3.255-.83 5.377h4.478c-.06-2.122-.371-4.003-.83-5.377-.256-.77-.545-1.34-.83-1.702-.292-.37-.493-.421-.579-.421m3.74 7.5c-.06-2.25-.39-4.298-.907-5.851a9 9 0 0 0-.552-1.33 8.26 8.26 0 0 1 5.935 7.181zm-1.5 1.5H9.76c.06 2.122.372 4.003.83 5.377.257.77.546 1.34.831 1.701.292.37.493.422.579.422s.287-.052.579-.422c.285-.361.574-.93.83-1.701.459-1.374.77-3.255.83-5.377m.041 7.18c.207-.397.39-.846.552-1.329.518-1.553.847-3.6.907-5.851h4.476a8.26 8.26 0 0 1-5.935 7.18m-4.562 0a9 9 0 0 1-.552-1.329c-.517-1.553-.847-3.6-.907-5.851H3.784a8.26 8.26 0 0 0 5.935 7.18" clip-rule="evenodd"/>
  </svg>
`;
const Wrap = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.046 5a.75.75 0 0 1 .75-.75h2.882a6.072 6.072 0 1 1 0 12.144h-8.89l3.027 3.08a.75.75 0 0 1-1.07 1.052l-4.28-4.356a.75.75 0 0 1 0-1.051l4.28-4.356a.75.75 0 1 1 1.07 1.052l-3.026 3.08h8.889a4.572 4.572 0 1 0 0-9.145h-2.882a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/>
  </svg>
`;
const Yesterday = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M8.336 3.095c.38 0 .688.308.688.688v.688h5.963v-.688a.688.688 0 1 1 1.376 0v.688h2.064a2.523 2.523 0 0 1 2.522 2.523v5.504a.688.688 0 0 1-1.376 0v-2.43H4.437v7.934c0 .634.513 1.147 1.146 1.147h5.963a.688.688 0 0 1 0 1.376H5.583a2.523 2.523 0 0 1-2.522-2.523V6.994A2.523 2.523 0 0 1 5.583 4.47h2.065v-.688c0-.38.308-.688.688-.688m6.65 2.752v.688a.688.688 0 1 0 1.377 0v-.688h2.064c.633 0 1.146.514 1.146 1.147v1.514H4.437V6.994c0-.633.513-1.147 1.146-1.147h2.065v.688a.688.688 0 0 0 1.376 0v-.688zm1.68 9.834a.69.69 0 0 1 0 .973l-1.46 1.46 1.46 1.46a.688.688 0 0 1-.973.972L13.746 18.6a.69.69 0 0 1 0-.973l1.947-1.946a.69.69 0 0 1 .973 0m4.193.973a.688.688 0 0 0-.973-.973l-1.946 1.946a.69.69 0 0 0 0 .973l1.946 1.946a.688.688 0 0 0 .973-.973l-1.46-1.46z" clip-rule="evenodd"/>
  </svg>
`;
const YoutubeDuotone = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill="red" d="M21.08 7.192a2.55 2.55 0 0 0-.616-1.12 2.36 2.36 0 0 0-1.065-.649C17.925 5 11.991 5 11.991 5s-5.935.013-7.41.436c-.402.115-.77.338-1.064.649-.295.31-.508.696-.617 1.12-.446 2.757-.619 6.957.012 9.603.11.423.322.81.617 1.12s.662.534 1.065.649C6.068 19 12.003 19 12.003 19s5.934 0 7.408-.423c.403-.115.77-.338 1.065-.649.295-.31.508-.697.617-1.12.47-2.76.615-6.958-.012-9.616"/><path fill='currentColor' d="m10 15 5-3-5-3z"/>
  </svg>
`;
const Zendesk = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' d="M12.546 5v10l8.272-10zM7.136 9.455c2.263 0 4.137-2.281 4.137-4.455H3c0 2.174 1.873 4.455 4.136 4.455M12.546 19c0-2.174 1.873-4.454 4.136-4.454s4.136 2.28 4.136 4.454zM11.273 19V9L3 19z"/>
  </svg>
`;
const Zip = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M3.75 6.5c0-.69.56-1.25 1.25-1.25h4.672c.331 0 .649.132.883.366L11.97 7.03c.14.141.331.22.53.22h1.868v1.956h2v2h-2v2h2v2h-2v2h2v1.044H5c-.69 0-1.25-.56-1.25-1.25zm14.618 11.75v-1.044h-2v-2h2v-2h-2v-2h2v-2h-2V7.25H19c.69 0 1.25.56 1.25 1.25V17c0 .69-.56 1.25-1.25 1.25zM5 3.75A2.75 2.75 0 0 0 2.25 6.5V17A2.75 2.75 0 0 0 5 19.75h14A2.75 2.75 0 0 0 21.75 17V8.5A2.75 2.75 0 0 0 19 5.75h-6.19l-1.194-1.195a2.75 2.75 0 0 0-1.944-.805z" clip-rule="evenodd"/>
  </svg>
`;
const ZoomDown = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.115 4.885a6.23 6.23 0 1 0 0 12.461 6.23 6.23 0 0 0 0-12.461M3.5 11.115a7.615 7.615 0 1 1 13.468 4.874l4.33 4.33a.692.692 0 1 1-.98.978l-4.33-4.33A7.615 7.615 0 0 1 3.5 11.116m4.154 0c0-.382.31-.692.692-.692h5.539a.692.692 0 1 1 0 1.385H8.346a.69.69 0 0 1-.692-.693" clip-rule="evenodd"/>
  </svg>
`;
const ZoomUp = ({ width = "1em", height = "1em", style = "" } = {}) => lit.html`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width=${width}
    height=${height}
    fill="none"
    style=${"user-select:none;flex-shrink:0;" + style}
  >
    <path fill='currentColor' fill-rule="evenodd" d="M11.115 4.885a6.23 6.23 0 1 0 4.408 10.634 6.23 6.23 0 0 0-4.408-10.634m5.854 11.102a7.615 7.615 0 1 0-.979.98l4.328 4.33a.692.692 0 1 0 .98-.979zm-5.854-8.333c.383 0 .693.31.693.692v2.077h2.077a.692.692 0 1 1 0 1.385h-2.077v2.077a.692.692 0 1 1-1.385 0v-2.077H8.346a.692.692 0 0 1 0-1.385h2.077V8.346c0-.382.31-.692.692-.692" clip-rule="evenodd"/>
  </svg>
`;
exports.AccountIcon = Account;
exports.AddCollectionIcon = AddCollection;
exports.AddCommentIcon = AddComment;
exports.AddCursorIcon = AddCursor;
exports.AddOrganizeIcon = AddOrganize;
exports.AddTagIcon = AddTag;
exports.AddTextIcon = AddText;
exports.AfFiNeIcon = AfFiNe;
exports.AiIcon = Ai;
exports.AliasIcon = Alias;
exports.AlignBottomIcon = AlignBottom;
exports.AlignHorizontalCenterIcon = AlignHorizontalCenter;
exports.AlignLeftIcon = AlignLeft;
exports.AlignRightIcon = AlignRight;
exports.AlignTopIcon = AlignTop;
exports.AlignVerticalCenterIcon = AlignVerticalCenter;
exports.AllDocsIcon = AllDocs;
exports.AppearanceIcon = Appearance;
exports.ArrowDownBigBottomIcon = ArrowDownBigBottom;
exports.ArrowDownBigIcon = ArrowDownBig;
exports.ArrowDownSmallIcon = ArrowDownSmall;
exports.ArrowLeftBigIcon = ArrowLeftBig;
exports.ArrowLeftSmallIcon = ArrowLeftSmall;
exports.ArrowLeftSmallPlusIcon = ArrowLeftSmallPlus;
exports.ArrowRightBigIcon = ArrowRightBig;
exports.ArrowRightSmallIcon = ArrowRightSmall;
exports.ArrowRightSmallPlusIcon = ArrowRightSmallPlus;
exports.ArrowUpBigIcon = ArrowUpBig;
exports.ArrowUpBigTopIcon = ArrowUpBigTop;
exports.ArrowUpSmallIcon = ArrowUpSmall;
exports.AtIcon = At;
exports.AttachmentIcon = Attachment;
exports.AutoHeightIcon = AutoHeight;
exports.AutoSizeIcon = AutoSize;
exports.AutoTidyUpIcon = AutoTidyUp;
exports.BanIcon = Ban;
exports.BlockIcon = Block;
exports.BlockLinkIcon = BlockLink;
exports.BlockexpanseIcon = Blockexpanse;
exports.BoldIcon = Bold;
exports.BookmarkIcon = Bookmark;
exports.BrokenImageIcon = BrokenImage;
exports.BroomIcon = Broom;
exports.BrushIcon = Brush;
exports.BulletedListIcon = BulletedList;
exports.CalendarXmarkIcon = CalendarXmark;
exports.CameraIcon = Camera;
exports.CancelWrapIcon = CancelWrap;
exports.CaptionIcon = Caption;
exports.CenterPeekIcon = CenterPeek;
exports.ChatWithAiIcon = ChatWithAi;
exports.CheckBoxCheckLinearIcon = CheckBoxCheckLinear;
exports.CheckBoxCkeckSolidIcon = CheckBoxCkeckSolid;
exports.CheckBoxUnIcon = CheckBoxUn;
exports.ClientIcon = Client;
exports.CloseIcon = Close;
exports.CloudWorkspaceIcon = CloudWorkspace;
exports.CodeBlockIcon = CodeBlock;
exports.CodeIcon = Code;
exports.CollaborationIcon = Collaboration;
exports.CollapseIcon = Collapse;
exports.CollapseTabIcon = CollapseTab;
exports.ColorPickerIcon = ColorPicker;
exports.CommentDuodoneIcon = CommentDuodone;
exports.CommentIcon = Comment;
exports.CommentsAvatarIcon = CommentsAvatar;
exports.CompressIcon = Compress;
exports.ConnectorCIcon = ConnectorC;
exports.ConnectorEIcon = ConnectorE;
exports.ConnectorIcon = Connector;
exports.ConnectorLIcon = ConnectorL;
exports.ContactWithUsIcon = ContactWithUs;
exports.ConvertIcon = Convert;
exports.CopyAsImgaeIcon = CopyAsImgae;
exports.CopyIcon = Copy;
exports.CornerIcon = Corner;
exports.CreatedEditedIcon = CreatedEdited;
exports.CreatedIcon = Created;
exports.CropIcon = Crop;
exports.CurveLineIcon = CurveLine;
exports.CustomSizeIcon = CustomSize;
exports.CustomizedHeightIcon = CustomizedHeight;
exports.DarkModeIcon = DarkMode;
exports.DashLineIcon = DashLine;
exports.DatabaseKanbanViewIcon = DatabaseKanbanView;
exports.DatabaseListViewIcon = DatabaseListView;
exports.DatabaseTableViewIcon = DatabaseTableView;
exports.DateTimeIcon = DateTime;
exports.DeleteIcon = Delete;
exports.DeletePermanentlyIcon = DeletePermanently;
exports.DeleteTemporarilyIcon = DeleteTemporarily;
exports.Diagonally_2LinesIcon = Diagonally_2Lines;
exports.DiamondIcon = Diamond;
exports.DiscordIcon = Discord;
exports.DistributeHorizontalIcon = DistributeHorizontal;
exports.DistributeVerticalIcon = DistributeVertical;
exports.DividerIcon = Divider;
exports.DocsIcon = Docs;
exports.DoneIcon = Done;
exports.DownloadIcon = Download;
exports.DragCursorIcon = DragCursor;
exports.DropCursorIcon = DropCursor;
exports.DualLinkIcon = DualLink;
exports.DuplicateIcon = Duplicate;
exports.EdgelessIcon = Edgeless;
exports.EditIcon = Edit;
exports.ElbowedLineIcon = ElbowedLine;
exports.EllipseIcon = Ellipse;
exports.EllipsisIcon = Ellipsis;
exports.EmailIcon = Email;
exports.EmbedWebIcon = EmbedWeb;
exports.EmptyIcon = Empty;
exports.EndPointArrowIcon = EndPointArrow;
exports.EndPointCircleIcon = EndPointCircle;
exports.EndPointDiamondIcon = EndPointDiamond;
exports.EndPointTriangleIcon = EndPointTriangle;
exports.EnterIcon = Enter;
exports.EqIcon = Eq;
exports.EraserIcon = Eraser;
exports.ExpandCloseIcon = ExpandClose;
exports.ExpandFullIcon = ExpandFull;
exports.ExpandIcon = Expand;
exports.ExpandWideIcon = ExpandWide;
exports.ExperimentIcon = Experiment;
exports.ExplainIcon = Explain;
exports.ExportIcon = Export;
exports.ExportToHtmlIcon = ExportToHtml;
exports.ExportToMarkdownIcon = ExportToMarkdown;
exports.ExportToPdfIcon = ExportToPdf;
exports.ExportToPngIcon = ExportToPng;
exports.ExportToSvgIcon = ExportToSvg;
exports.FavoriteIcon = Favorite;
exports.FavoritedIcon = Favorited;
exports.FigmaDuotoneIcon = FigmaDuotone;
exports.FileIcon = File;
exports.FilterIcon = Filter;
exports.FilterMinusIcon = FilterMinus;
exports.FilterUndoIcon = FilterUndo;
exports.FilteredIcon = Filtered;
exports.FlipDirectionIcon = FlipDirection;
exports.FolderIcon = Folder;
exports.FontIcon = Font;
exports.FrameIcon = Frame;
exports.GithubIcon = Github;
exports.GitlabIcon = Gitlab;
exports.GoodIcon = Good;
exports.GoogleDuotoneIcon = GoogleDuotone;
exports.GoogleIcon = Google;
exports.GoogleMapDuotoneIcon = GoogleMapDuotone;
exports.GridIcon = Grid;
exports.GroupIcon = Group;
exports.Group_276Icon = Group_276;
exports.Group_277Icon = Group_277;
exports.GroupingIcon = Grouping;
exports.GtIcon = Gt;
exports.HandIcon = Hand;
exports.Heading1Icon = Heading1;
exports.Heading2Icon = Heading2;
exports.Heading3Icon = Heading3;
exports.Heading4Icon = Heading4;
exports.Heading5Icon = Heading5;
exports.Heading6Icon = Heading6;
exports.HeadingsIcon = Headings;
exports.HeartbreakIcon = Heartbreak;
exports.HelpCenterIcon = HelpCenter;
exports.HelpIcon = Help;
exports.HighLightDuotoneIcon = HighLightDuotone;
exports.HighLightLinearIcon = HighLightLinear;
exports.HistoryIcon = History;
exports.ImageIcon = Image;
exports.ImportIcon = Import;
exports.ImproveWritingIcon = ImproveWriting;
exports.InboxIcon = Inbox;
exports.InfoIcon = Info;
exports.InformationFillDuotoneIcon = InformationFillDuotone;
exports.InformationIcon = Information;
exports.InsertBleowIcon = InsertBleow;
exports.InsertBlocksIcon = InsertBlocks;
exports.InsertLeftIcon = InsertLeft;
exports.InsertRightIcon = InsertRight;
exports.InsertTopIcon = InsertTop;
exports.InstagramDuotoneIcon = InstagramDuotone;
exports.InsyncIcon = Insync;
exports.InvisibleIcon = Invisible;
exports.IssueIcon = Issue;
exports.ItalicIcon = Italic;
exports.JournalIcon = Journal;
exports.KeyboardIcon = Keyboard;
exports.LanguageIcon = Language;
exports.LayerIcon = Layer;
exports.LayoutIcon = Layout;
exports.LevelIcon = Level;
exports.LightModeIcon = LightMode;
exports.LineStyleIcon = LineStyle;
exports.LinearLogoIcon = LinearLogo;
exports.LinkIcon = Link;
exports.LinkedEdgelessIcon = LinkedEdgeless;
exports.LinkedPageIcon = LinkedPage;
exports.LocalDataIcon = LocalData;
exports.LocalWorkspaceIcon = LocalWorkspace;
exports.LocateIcon = Locate;
exports.LockIcon = Lock;
exports.Logo1Icon = Logo1;
exports.Logo2Icon = Logo2;
exports.Logo3Icon = Logo3;
exports.Logo4Icon = Logo4;
exports.LongerIcon = Longer;
exports.LoomLogoIcon = LoomLogo;
exports.LtIcon = Lt;
exports.MakeItRealIcon = MakeItReal;
exports.MindmapIcon = Mindmap;
exports.MindmapNodeIcon = MindmapNode;
exports.MinusIcon = Minus;
exports.MobileDocumentsIcon = MobileDocuments;
exports.MobileHomeIcon = MobileHome;
exports.MobileSearchIcon = MobileSearch;
exports.MoreHorizontalIcon = MoreHorizontal;
exports.MoreVerticalIcon = MoreVertical;
exports.MoveLeftIcon = MoveLeft;
exports.MoveRightIcon = MoveRight;
exports.MoveToIcon = MoveTo;
exports.MoveToLeftDuotoneIcon = MoveToLeftDuotone;
exports.MoveToRightDuotoneIcon = MoveToRightDuotone;
exports.MultiCursorDuotoneIcon = MultiCursorDuotone;
exports.MultiSelectIcon = MultiSelect;
exports.MyConnectionsIcon = MyConnections;
exports.NeIcon = Ne;
exports.NewIcon = New;
exports.NewPageIcon = NewPage;
exports.NewXxxEdgelessIcon = NewXxxEdgeless;
exports.NewXxxPageIcon = NewXxxPage;
exports.NoNetworkIcon = NoNetwork;
exports.NoteShadowDuotoneIcon = NoteShadowDuotone;
exports.NotificationIcon = Notification;
exports.NotionIcon = Notion;
exports.NowIcon = Now;
exports.NumberIcon = Number;
exports.NumberedListIcon = NumberedList;
exports.OctobaseIcon = Octobase;
exports.OpenInNewIcon = OpenInNew;
exports.OtherIcon = Other;
exports.PageIcon = Page;
exports.PaletteIcon = Palette;
exports.PasteIcon = Paste;
exports.PaymentIcon = Payment;
exports.PenIcon = Pen;
exports.PenThickIcon = PenThick;
exports.PenThinIcon = PenThin;
exports.PinIcon = Pin;
exports.PinboardIcon = Pinboard;
exports.PinedIcon = Pined;
exports.PlayFillIcon = PlayFill;
exports.PlayIcon = Play;
exports.PluginIcon = Plugin;
exports.PlusIcon = Plus;
exports.PlusThickIcon = PlusThick;
exports.PptIcon = Ppt;
exports.PresentationIcon = Presentation;
exports.PrinterIcon = Printer;
exports.ProductHuntIcon = ProductHunt;
exports.ProgressIcon = Progress;
exports.PropertyIcon = Property;
exports.PublishIcon = Publish;
exports.QuoteIcon = Quote;
exports.RadiantIcon = Radiant;
exports.RedditDuotoneIcon = RedditDuotone;
exports.RedoIcon = Redo;
exports.ReleaseFromGroupIcon = ReleaseFromGroup;
exports.RemoveFolderIcon = RemoveFolder;
exports.RemoveIcon = Remove;
exports.ReplaceIcon = Replace;
exports.ResetIcon = Reset;
exports.ResizeTidyUpIcon = ResizeTidyUp;
exports.RightLayoutIcon = RightLayout;
exports.RightSidebarIcon = RightSidebar;
exports.RightTabIcon = RightTab;
exports.RotateAnticlockwiseIcon = RotateAnticlockwise;
exports.RotateIcon = Rotate;
exports.RoundedRectangleIcon = RoundedRectangle;
exports.SaveIcon = Save;
exports.ScaleAltIcon = ScaleAlt;
exports.ScaleIcon = Scale;
exports.ScissorsIcon = Scissors;
exports.SearchIcon = Search;
exports.SelectAreaIcon = SelectArea;
exports.SelectIcon = Select;
exports.SelectTextIcon = SelectText;
exports.SelectionIcon = Selection;
exports.SendIcon = Send;
exports.SettingsIcon = Settings;
exports.ShapeIcon = Shape;
exports.ShareIcon = Share;
exports.SharedIcon = Shared;
exports.ShareiOsIcon = ShareiOs;
exports.ShorterIcon = Shorter;
exports.SiblingNodeIcon = SiblingNode;
exports.SidebarIcon = Sidebar;
exports.SignOutIcon = SignOut;
exports.SingleSelectIcon = SingleSelect;
exports.SingleSelectSelectLinearIcon = SingleSelectSelectLinear;
exports.SingleSelectSelectSolidIcon = SingleSelectSelectSolid;
exports.SingleSelectUnIcon = SingleSelectUn;
exports.SmileIcon = Smile;
exports.SoloViewIcon = SoloView;
exports.SortDownIcon = SortDown;
exports.SortIcon = Sort;
exports.SortUpIcon = SortUp;
exports.SplitViewIcon = SplitView;
exports.SquareIcon = Square;
exports.StartNumberingIcon = StartNumbering;
exports.StartPointArrowIcon = StartPointArrow;
exports.StartPointCircleIcon = StartPointCircle;
exports.StartPointDiamondIcon = StartPointDiamond;
exports.StartPointIcon = StartPoint;
exports.StartPointTriangleIcon = StartPointTriangle;
exports.StopAiIcon = StopAi;
exports.StopIcon = Stop;
exports.StraightLineIcon = StraightLine;
exports.StrikeThroughIcon = StrikeThrough;
exports.StyleGeneralIcon = StyleGeneral;
exports.StyleIcon = Style;
exports.StyleScribbleIcon = StyleScribble;
exports.SubNodeIcon = SubNode;
exports.SucessfulDuotoneIcon = SucessfulDuotone;
exports.SummarizeIcon = Summarize;
exports.TagIcon = Tag;
exports.TagsIcon = Tags;
exports.TeXIcon = TeX;
exports.TeamWorkspaceIcon = TeamWorkspace;
exports.TelegramDuotoneIcon = TelegramDuotone;
exports.TextAlignCenterIcon = TextAlignCenter;
exports.TextAlignLeftIcon = TextAlignLeft;
exports.TextAlignRightIcon = TextAlignRight;
exports.TextBackgroundDuotoneIcon = TextBackgroundDuotone;
exports.TextColorIcon = TextColor;
exports.TextIcon = Text;
exports.TextTypeIcon = TextType;
exports.TimelineIcon = Timeline;
exports.TitleIcon = Title;
exports.TocIcon = Toc;
exports.TodayIcon = Today;
exports.ToggleCollapseIcon = ToggleCollapse;
exports.ToggleExpandIcon = ToggleExpand;
exports.TomorrowIcon = Tomorrow;
exports.ToneIcon = Tone;
exports.TriangleIcon = Triangle;
exports.TwitterIcon = Twitter;
exports.UnderLineIcon = UnderLine;
exports.UndoIcon = Undo;
exports.UngroupIcon = Ungroup;
exports.UnlinkIcon = Unlink;
exports.UnlockIcon = Unlock;
exports.UnpinIcon = Unpin;
exports.UnsucessfulDuotoneIcon = UnsucessfulDuotone;
exports.UnsyncIcon = Unsync;
exports.UpdatedIcon = Updated;
exports.UpgradeIcon = Upgrade;
exports.UploadIcon = Upload;
exports.UserGuideIcon = UserGuide;
exports.ViewBarIcon = ViewBar;
exports.ViewIcon = View;
exports.ViewLayersIcon = ViewLayers;
exports.WarningIcon = Warning;
exports.WebIcon = Web;
exports.WrapIcon = Wrap;
exports.YesterdayIcon = Yesterday;
exports.YoutubeDuotoneIcon = YoutubeDuotone;
exports.ZendeskIcon = Zendesk;
exports.ZipIcon = Zip;
exports.ZoomDownIcon = ZoomDown;
exports.ZoomUpIcon = ZoomUp;
//# sourceMappingURL=lit.js.map
