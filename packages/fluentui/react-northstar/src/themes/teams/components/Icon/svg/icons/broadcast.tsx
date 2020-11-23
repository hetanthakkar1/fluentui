import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M4.35281 4.33358C4.53936 4.14767 4.83968 4.15776 5.02591 4.344C5.22983 4.54791 5.21706 4.88086 5.01461 5.08624C3.76882 6.35005 3 8.08528 3 10.0001C3 11.9902 3.83047 13.7863 5.16377 15.0608C5.37638 15.2641 5.39483 15.6053 5.18685 15.8132C5.00478 15.9953 4.71256 16.0093 4.52487 15.833C2.97073 14.3737 2 12.3002 2 10.0001C2 7.78604 2.89942 5.78206 4.35281 4.33358Z" />
        <path d="M14.9854 5.08624C14.7829 4.88086 14.7702 4.54791 14.9741 4.344C15.1603 4.15776 15.4606 4.14767 15.6472 4.33358C17.1006 5.78206 18 7.78604 18 10.0001C18 12.3002 17.0293 14.3737 15.4751 15.833C15.2874 16.0093 14.9952 15.9953 14.8132 15.8132C14.6052 15.6053 14.6236 15.2641 14.8362 15.0608C16.1695 13.7863 17 11.9902 17 10.0001C17 8.08528 16.2312 6.35005 14.9854 5.08624Z" />
        <path d="M6.13159 6.0903C6.31407 5.90973 6.60608 5.92403 6.78761 6.10556C6.99573 6.31368 6.97537 6.6551 6.7704 6.86631C5.98409 7.67655 5.5 8.78172 5.5 9.99995C5.5 11.2905 6.04324 12.4541 6.91351 13.2747C7.13387 13.4824 7.16356 13.8364 6.9494 14.0505C6.77419 14.2258 6.49437 14.2453 6.31064 14.0791C5.19861 13.0727 4.5 11.6179 4.5 9.99995C4.5 8.47068 5.12414 7.08719 6.13159 6.0903Z" />
        <path d="M13.2296 6.86631C13.0246 6.6551 13.0043 6.31368 13.2124 6.10556C13.3939 5.92403 13.6859 5.90973 13.8684 6.0903C14.8759 7.08718 15.5 8.47068 15.5 9.99995C15.5 11.6179 14.8014 13.0727 13.6894 14.0791C13.5056 14.2453 13.2258 14.2258 13.0506 14.0505C12.8364 13.8364 12.8661 13.4824 13.0865 13.2747C13.9568 12.4541 14.5 11.2905 14.5 9.99995C14.5 8.78172 14.0159 7.67655 13.2296 6.86631Z" />
        <path d="M10 8.75C9.30964 8.75 8.75 9.30964 8.75 10C8.75 10.6904 9.30964 11.25 10 11.25C10.6904 11.25 11.25 10.6904 11.25 10C11.25 9.30964 10.6904 8.75 10 8.75Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M5.45269 4.16722C5.17574 3.89027 4.71724 3.86659 4.42633 4.15651C2.9278 5.64997 2 7.71692 2 10.0001C2 12.3721 3.00138 14.5106 4.60373 16.0153C4.89644 16.2901 5.34261 16.261 5.61363 15.99C5.92967 15.674 5.89122 15.1714 5.58652 14.8801C4.30051 13.6508 3.5 11.9191 3.5 10.0001C3.5 8.15359 4.2411 6.48068 5.44265 5.26174C5.73286 4.96734 5.76226 4.47679 5.45269 4.16722Z" />
        <path d="M7.21439 5.92879C6.94521 5.65961 6.4954 5.62598 6.20574 5.9126C5.15279 6.95452 4.5 8.40124 4.5 9.99996C4.5 11.6915 5.2307 13.2126 6.39289 14.2644C6.6846 14.5284 7.11579 14.4877 7.37618 14.2273C7.70433 13.8992 7.64255 13.3827 7.33502 13.0928C6.51275 12.3175 6 11.2188 6 9.99996C6 8.84931 6.45694 7.8059 7.1998 7.04043C7.48609 6.74543 7.53257 6.24697 7.21439 5.92879Z" />
        <path d="M12.7856 5.92879C13.0548 5.65961 13.5046 5.62598 13.7943 5.9126C14.8472 6.95452 15.5 8.40124 15.5 9.99996C15.5 11.6915 14.7693 13.2126 13.6071 14.2644C13.3154 14.5284 12.8842 14.4877 12.6238 14.2273C12.2957 13.8992 12.3574 13.3827 12.665 13.0928C13.4873 12.3175 14 11.2188 14 9.99996C14 8.84931 13.5431 7.8059 12.8002 7.04043C12.5139 6.74543 12.4674 6.24697 12.7856 5.92879Z" />
        <path d="M14.5473 4.16722C14.8243 3.89027 15.2828 3.86659 15.5737 4.15651C17.0722 5.64997 18 7.71692 18 10.0001C18 12.3721 16.9986 14.5106 15.3963 16.0153C15.1036 16.2901 14.6574 16.261 14.3864 15.99C14.0703 15.674 14.1088 15.1714 14.4135 14.8801C15.6995 13.6508 16.5 11.9191 16.5 10.0001C16.5 8.15359 15.7589 6.48068 14.5573 5.26174C14.2671 4.96734 14.2377 4.47679 14.5473 4.16722Z" />
        <path d="M10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;