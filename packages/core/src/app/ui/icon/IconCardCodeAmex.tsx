import React, { FunctionComponent } from 'react';

import withIconContainer from './withIconContainer';

const IconCardCodeAmex: FunctionComponent = () => (
  <svg height="54" viewBox="0 0 88 54" width="88" xmlns="http://www.w3.org/2000/svg">
    <title>CVV amex</title>
    <g fill="none" fillRule="evenodd">
      <rect fill="#DEDEDE" height="54" rx="3" width="88" />
      <text
        fill="#979BA1"
        fontFamily="Avenir Next"
        fontSize="6"
        fontWeight="420"
        letterSpacing=".2"
      >
        <tspan x="11" y="35">
          3712 567890 374
        </tspan>
        <tspan x="70.21" y="35">
          5
        </tspan>
      </text>
      <path
        d="M69.182 26.767h-.55v-3.35l-.762.635-.324-.38 1.142-.926h.494v4.02zm4.19 0H70.75v-.528l1.6-1.59c.122-.126.226-.257.313-.393s.13-.29.13-.46c0-.106-.018-.202-.056-.287-.038-.085-.09-.158-.153-.22-.065-.06-.14-.106-.228-.138-.087-.032-.18-.048-.278-.048-.204 0-.373.065-.505.196-.133.13-.216.298-.25.503l-.54-.09c.023-.153.07-.294.145-.424.074-.132.168-.246.28-.342.115-.097.246-.17.396-.224.15-.053.31-.08.48-.08.166 0 .326.025.48.074.153.05.288.12.406.216.117.094.21.214.28.357.07.145.106.31.106.496 0 .128-.017.248-.05.357-.035.11-.082.214-.14.313-.06.098-.128.192-.208.28-.08.09-.162.178-.25.265l-1.306 1.273h1.97v.494zm1.625-2.328h.176c.114 0 .225-.012.333-.033.107-.02.203-.056.286-.107.084-.052.15-.12.202-.208.05-.087.077-.195.077-.323 0-.104-.018-.196-.056-.277-.038-.08-.09-.15-.156-.207-.067-.057-.142-.102-.227-.134-.085-.032-.175-.048-.27-.048-.17 0-.314.044-.434.13-.12.088-.21.21-.27.364l-.5-.176c.1-.242.257-.433.475-.57.22-.14.47-.208.753-.208.167 0 .325.024.475.07.15.048.28.117.394.208.114.09.204.205.27.34.066.137.1.294.1.472 0 .114-.018.22-.054.318-.036.1-.086.188-.148.267-.063.08-.137.147-.224.204-.087.057-.182.098-.284.125v.01c.117.023.226.063.326.12.1.056.187.127.26.212.07.086.127.183.17.293.04.11.06.23.06.358 0 .2-.036.377-.112.53-.076.154-.176.282-.3.384-.126.102-.27.18-.433.233-.163.053-.33.08-.5.08-.318 0-.598-.073-.84-.216-.242-.144-.418-.368-.528-.67l.51-.17c.06.173.165.315.31.425.146.11.325.164.537.164.102 0 .202-.016.298-.05.097-.03.183-.08.26-.143.074-.064.135-.143.18-.238.046-.095.07-.206.07-.335 0-.14-.032-.257-.092-.352-.06-.095-.14-.17-.236-.23-.097-.06-.205-.1-.327-.125-.12-.025-.24-.037-.357-.037h-.17v-.454zm4.73.953h.58v.47h-.58v.904h-.533v-.903h-1.85v-.5l1.708-2.618h.676v2.647zm-.533-2.016h-.01l-1.273 2.016h1.284v-2.016z"
        fill="#636363"
        opacity=".9"
      />
      <rect height="18" rx="40" stroke="#ED6A6A" strokeWidth="2" width="18" x="65" y="16" />
    </g>
  </svg>
);

export default withIconContainer(IconCardCodeAmex);
