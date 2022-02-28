import * as React from 'react';

const Facebook = ({ fill = '#000', ...props }) => (
  <svg
    width={9}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.468 11.938V8.293c0-.343-.01-.353-.353-.353-.334 0-.668-.01-1.002 0-.162.005-.224-.063-.224-.23.005-.758.01-1.516 0-2.275-.005-.21.086-.27.267-.27.31.006.62 0 .93 0 .368-.004.377-.019.382-.4.005-.676-.02-1.351.048-2.026C2.668 1.124 3.517.243 5.1.067 6.01-.036 6.927.013 7.838.003c.148 0 .22.059.22.216-.005.797-.005 1.6 0 2.397 0 .201-.11.225-.263.225-.42 0-.844 0-1.263.005-.134 0-.272.005-.406.025-.215.034-.381.147-.415.377-.08.592-.043 1.189-.048 1.78 0 .162.13.138.23.143l1.716.03c.034 0 .062.004.096.004.243-.01.334.103.32.357-.044.71-.11 1.414-.187 2.114-.019.176-.095.23-.257.23-.534.005-1.064.025-1.598.044-.305.01-.32.02-.32.338 0 1.825 0 3.65-.004 5.48 0 .622 0 1.239-.005 1.86-.005.318-.038.357-.343.362-.85.01-1.698 0-2.552.01-.253 0-.296-.137-.296-.357.01-1.243.005-2.471.005-3.705Z'
      fill={fill}
    />
  </svg>
);
const Instagram = ({ fill = '#000', ...props }) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.642 0h8.234c.057.024.114.065.178.081 2.06.446 3.448 2.15 3.448 4.259 0 2.296.008 4.591 0 6.895a4.284 4.284 0 0 1-4.259 4.259c-2.328.008-4.648.008-6.976 0a4.27 4.27 0 0 1-4.024-2.872c-.089-.251-.162-.503-.243-.754V3.634c.024-.057.065-.113.081-.178C.487 1.72 1.558.616 3.261.114c.13-.033.284.008.381-.114Zm4.121 3.456a4.264 4.264 0 0 0-4.291 4.25c-.008 2.401 1.882 4.316 4.259 4.324a4.264 4.264 0 0 0 4.315-4.275 4.272 4.272 0 0 0-4.283-4.3Zm5.168-1.72a.842.842 0 0 0-.86.82.837.837 0 0 0 .81.867.836.836 0 0 0 .877-.843.83.83 0 0 0-.827-.844Z'
      fill={fill}
    />
    <path
      d='M7.739 5.167c1.452 0 2.596 1.128 2.596 2.564 0 1.452-1.128 2.596-2.564 2.596-1.452 0-2.595-1.128-2.595-2.564 0-1.452 1.127-2.596 2.563-2.596Z'
      fill={fill}
    />
  </svg>
);

const Linkedin = ({ fill = '#000', ...props }) => (
  <svg
    width={16}
    height={16}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M7.614 0h5.983C14.684 0 15.5.816 15.5 1.904v11.693c0 1.087-.816 1.903-1.903 1.903H1.632C.816 15.5 0 14.684 0 13.597V1.632C0 .816.816 0 1.904 0h5.71Zm1.088 6.526v-.544c0-.271 0-.271-.272-.271H7.07c-.272 0-.272 0-.272.271v5.983c0 .272 0 .272.272.272h1.36c.272 0 .272 0 .272-.272V8.43c0-.544.544-1.088 1.087-1.088.544 0 1.088.544 1.088 1.088V11.964c0 .273 0 .273.272.273h1.36c.272 0 .272 0 .272-.272V7.614c0-1.36-.816-2.175-1.904-2.175-.816 0-1.631.272-2.175 1.087ZM5.439 8.974V5.982c0-.271 0-.271-.272-.271h-1.36c-.272 0-.272 0-.272.271v5.983c0 .272 0 .272.272.272h1.36c.272 0 .272 0 .272-.272V8.974ZM4.35 4.894c.544 0 1.088-.543 1.088-1.087 0-.544-.544-1.088-1.088-1.088s-1.088.544-1.088 1.088.272 1.088 1.088 1.088Z'
      fill={fill}
    />
  </svg>
);

const Youtube = ({ fill = '#000', ...props }) => (
  <svg
    width={19}
    height={14}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M10.9 13.185H7.672c-.043-.006-.083-.017-.127-.02a80.67 80.67 0 0 1-2.363-.07c-.935-.043-1.871-.092-2.799-.23-.704-.107-1.273-.43-1.684-1.02-.265-.381-.363-.82-.436-1.268C.077 9.433.032 8.275.005 7.119c-.02-.962.02-1.92.09-2.88.046-.635.104-1.273.26-1.894.245-.98.858-1.6 1.851-1.814.705-.154 1.43-.18 2.146-.223A77.92 77.92 0 0 1 7.84.195a96.825 96.825 0 0 1 5.419.073c.979.04 1.958.083 2.926.237.941.147 1.606.65 1.944 1.548.139.37.182.762.242 1.152.032.214.03.43.087.639v5.62c-.023.044-.026.09-.032.14-.04.462-.098.924-.202 1.377-.234 1.017-.858 1.65-1.883 1.86-.708.145-1.427.177-2.146.217a70.245 70.245 0 0 1-3.022.101c-.09.006-.182-.006-.271.026Zm1.373-6.499-4.83-2.782v5.564l4.83-2.782Z'
      fill={fill}
    />
  </svg>
);

const Quote = ({fill = '#000', ...props }) => (
  <svg
    width={42}
    height={41}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <path fill='url(#a)' d='M0 .157h42v40H0z' />
    <defs>
      <pattern
        id='a'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}
      >
        <use xlinkHref='#b' transform='matrix(.02 0 0 .021 0 -.004)' />
      </pattern>
      <image
        id='b'
        width={50}
        height={48}
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);

export { Instagram, Facebook, Linkedin, Youtube };
