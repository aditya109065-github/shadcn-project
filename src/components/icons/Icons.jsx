const iconStyle = {
  active: "var(--surface-darker-primary)",
  inactive: "var(--greyscale-text-tertiary)",
  hover: "stroke-[var(--greyscale-darker-primary)]",
};

export const DashboardIcon = ({ isActive, isHovered, className }) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M3.3335 6.66667H4.66683C6.00016 6.66667 6.66683 6 6.66683 4.66667V3.33333C6.66683 2 6.00016 1.33333 4.66683 1.33333H3.3335C2.00016 1.33333 1.3335 2 1.3335 3.33333V4.66667C1.3335 6 2.00016 6.66667 3.3335 6.66667Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors"`}
    />
    <path
      d="M11.3335 6.66667H12.6668C14.0002 6.66667 14.6668 6 14.6668 4.66667V3.33333C14.6668 2 14.0002 1.33333 12.6668 1.33333H11.3335C10.0002 1.33333 9.3335 2 9.3335 3.33333V4.66667C9.3335 6 10.0002 6.66667 11.3335 6.66667Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors"`}
    />
    <path
      d="M11.3335 14.6667H12.6668C14.0002 14.6667 14.6668 14 14.6668 12.6667V11.3333C14.6668 10 14.0002 9.33333 12.6668 9.33333H11.3335C10.0002 9.33333 9.3335 10 9.3335 11.3333V12.6667C9.3335 14 10.0002 14.6667 11.3335 14.6667Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors"`}
    />
    <path
      d="M3.3335 14.6667H4.66683C6.00016 14.6667 6.66683 14 6.66683 12.6667V11.3333C6.66683 10 6.00016 9.33333 4.66683 9.33333H3.3335C2.00016 9.33333 1.3335 10 1.3335 11.3333V12.6667C1.3335 14 2.00016 14.6667 3.3335 14.6667Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors"`}
    />
  </svg>
);

export const AssessmentIcon = ({ isActive, isHovered, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M5.66683 12.6467H5.3335C2.66683 12.6467 1.3335 11.98 1.3335 8.64665V5.31332C1.3335 2.64665 2.66683 1.31332 5.3335 1.31332H10.6668C13.3335 1.31332 14.6668 2.64665 14.6668 5.31332V8.64665C14.6668 11.3133 13.3335 12.6467 10.6668 12.6467H10.3335C10.1268 12.6467 9.92684 12.7467 9.80017 12.9133L8.80017 14.2467C8.36017 14.8333 7.64015 14.8333 7.20015 14.2467L6.20015 12.9133C6.09349 12.7667 5.8535 12.6467 5.66683 12.6467Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M5.33333 5.80001L4 7.13334L5.33333 8.46668"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M10.6665 5.80001L11.9998 7.13334L10.6665 8.46668"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M8.66683 5.57999L7.3335 8.68668"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
  </svg>
);

export const ReportsIcon = ({ isActive, isHovered, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M14 4.66667V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V4.66667C2 2.66667 3 1.33334 5.33333 1.33334H10.6667C13 1.33334 14 2.66667 14 4.66667Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M9.6665 3V4.33333C9.6665 5.06667 10.2665 5.66667 10.9998 5.66667H12.3332"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M5.3335 8.66667H8.00016"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M5.3335 11.3333H10.6668"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
  </svg>
);

export const QuestionsIcon = ({ isActive, isHovered, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M14.6668 11.16V3.11333C14.6668 2.31333 14.0135 1.71999 13.2202 1.78666H13.1802C11.7802 1.90666 9.6535 2.61999 8.46683 3.36666L8.3535 3.43999C8.16016 3.55999 7.84016 3.55999 7.64683 3.43999L7.48016 3.33999C6.2935 2.59999 4.1735 1.89333 2.7735 1.77999C1.98016 1.71333 1.3335 2.31333 1.3335 3.10666V11.16C1.3335 11.8 1.8535 12.4 2.4935 12.48L2.68683 12.5067C4.1335 12.7 6.36683 13.4333 7.64683 14.1333L7.6735 14.1467C7.8535 14.2467 8.14016 14.2467 8.3135 14.1467C9.5935 13.44 11.8335 12.7 13.2868 12.5067L13.5068 12.48C14.1468 12.4 14.6668 11.8 14.6668 11.16Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M8 3.66V13.66"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M5.1665 5.66H3.6665"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M5.6665 7.66H3.6665"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
  </svg>
);

export const NewsCentreIcon = ({ isActive, isHovered, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <path
      d="M2.5 7.83333C2.5 9.5643 3.06142 11.2486 4.1 12.6333C4.31217 12.9162 4.62804 13.1033 4.97811 13.1533C5.32817 13.2033 5.68377 13.1122 5.96667 12.9C6.24956 12.6878 6.43659 12.372 6.4866 12.0219C6.53661 11.6718 6.44551 11.3162 6.23333 11.0333C5.54095 10.1102 5.16667 8.98731 5.16667 7.83333M3.83333 2.5V7.83333M5.83333 2.5C7.86092 2.55223 9.8426 1.89167 11.4333 0.633334C11.5324 0.559049 11.6502 0.513813 11.7735 0.502694C11.8968 0.491575 12.0207 0.515014 12.1315 0.570382C12.2422 0.625751 12.3353 0.710862 12.4004 0.81618C12.4655 0.921497 12.5 1.04286 12.5 1.16667V9.16667C12.5 9.29047 12.4655 9.41184 12.4004 9.51715C12.3353 9.62247 12.2422 9.70758 12.1315 9.76295C12.0207 9.81832 11.8968 9.84176 11.7735 9.83064C11.6502 9.81952 11.5324 9.77428 11.4333 9.7C9.8426 8.44166 7.86092 7.7811 5.83333 7.83333H1.83333C1.47971 7.83333 1.14057 7.69286 0.890524 7.44281C0.640476 7.19276 0.5 6.85362 0.5 6.5V3.83333C0.5 3.47971 0.640476 3.14057 0.890524 2.89052C1.14057 2.64048 1.47971 2.5 1.83333 2.5H5.83333Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
  </svg>
);

export const HelpAndSupportIcon = ({ isActive, isHovered, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M11.3335 12.2867H8.66683L5.70015 14.26C5.26015 14.5533 4.66683 14.24 4.66683 13.7067V12.2867C2.66683 12.2867 1.3335 10.9534 1.3335 8.95337V4.95333C1.3335 2.95333 2.66683 1.62 4.66683 1.62H11.3335C13.3335 1.62 14.6668 2.95333 14.6668 4.95333V8.95337C14.6668 10.9534 13.3335 12.2867 11.3335 12.2867Z"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M8.0002 7.57332V7.43334C8.0002 6.98001 8.28022 6.74 8.56022 6.54667C8.83355 6.36 9.10685 6.12001 9.10685 5.68001C9.10685 5.06667 8.61354 4.57332 8.0002 4.57332C7.38687 4.57332 6.89355 5.06667 6.89355 5.68001"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
    <path
      d="M7.99684 9.16666H8.00284"
      stroke={isActive ? iconStyle.active : iconStyle.inactive}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${isHovered ? iconStyle.hover : ''} transition-colors`}
    />
  </svg>
);
