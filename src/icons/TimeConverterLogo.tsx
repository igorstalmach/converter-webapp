import React from "react";
import IProps from "./assets/IconProps";

export default function TimeConverterLogo(props: IProps) {
    const width = props.width ?? 705;
    const height = props.height ?? 129;

    return(
        <svg width={width} height={height} viewBox="0 0 705 129" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M163.43 99.5474L155.874 29.1981H169.623L173.5 73.6061L177.458 29.1981H190.566L194.324 73.6061L198.08 29.1981H211.988L204.315 99.5474H187.449L183.931 65.6917L180.575 99.5474H163.43Z"
                fill="#22331B"
              />
              <path
                d="M215.944 99.5474V29.1981H230.653V45.5462C231.426 43.3077 232.61 41.6489 234.211 40.5697C235.809 39.4905 237.674 38.9509 239.804 38.9509C243.963 38.9509 246.987 40.2566 248.878 42.8682C250.77 45.4796 251.716 48.9837 251.716 53.3805V99.5474H237.246V54.2999C237.246 52.9942 236.973 51.9284 236.428 51.1023C235.882 50.2762 235.023 49.863 233.849 49.863C232.865 49.863 232.085 50.2893 231.512 51.1421C230.939 51.9948 230.653 53.0076 230.653 54.18V99.5474H215.944Z"
                fill="#22331B"
              />
              <path
                d="M268.22 100.187C264.892 100.187 262.352 99.4141 260.608 97.8686C258.862 96.323 257.67 94.2044 257.032 91.5132C256.39 88.8218 256.072 85.7706 256.072 82.3598C256.072 78.709 256.431 75.7179 257.15 73.3862C257.871 71.0545 259.103 69.1426 260.847 67.6502C262.593 66.1581 264.998 64.8922 268.061 63.853L276.935 60.8153V54.6596C276.935 51.4354 275.882 49.8232 273.777 49.8232C271.858 49.8232 270.899 51.1289 270.899 53.7402V57.3378H256.991C256.963 57.1245 256.95 56.8514 256.95 56.5183C256.95 56.1851 256.95 55.8054 256.95 55.379C256.95 49.41 258.357 45.1799 261.167 42.6883C263.978 40.1968 268.434 38.9509 274.536 38.9509C277.733 38.9509 280.598 39.5171 283.129 40.6498C285.659 41.7822 287.665 43.4544 289.145 45.666C290.623 47.8779 291.361 50.6093 291.361 53.8603V99.5474H277.133V92.4325C276.442 94.9372 275.296 96.856 273.697 98.1883C272.099 99.5205 270.273 100.187 268.22 100.187ZM273.857 89.0749C275.03 89.0749 275.828 88.5819 276.255 87.5959C276.68 86.6099 276.894 85.5441 276.894 84.3981V67.6903C274.923 68.4898 273.391 69.4955 272.297 70.708C271.206 71.9204 270.66 73.6993 270.66 76.0442V83.7587C270.66 87.3028 271.726 89.0749 273.857 89.0749Z"
                fill="#22331B"
              />
              <path
                d="M309.187 100.187C305.324 100.187 302.718 99.3675 301.375 97.7287C300.029 96.0899 299.356 93.5784 299.356 90.1941V52.8209H295.318V41.9088H299.356V29.1981H313.264V41.9088H317.299V52.8209H313.264V86.8364C313.264 87.8224 313.423 88.5153 313.743 88.915C314.064 89.3148 314.675 89.5144 315.583 89.5144C316.222 89.5144 316.795 89.4612 317.299 89.3545V99.1076C316.981 99.2143 315.981 99.4207 314.303 99.7272C312.625 100.034 310.919 100.187 309.187 100.187Z"
                fill="#22331B"
              />
              <path
                d="M547.675 99.5474V29.1981H561.262V99.5474H547.675Z"
                fill="#22331B"
              />
              <path
                d="M583.044 100.187C571.214 100.187 565.3 94.1912 565.3 82.1999V77.4433H579.688V84.4781C579.688 85.8373 579.954 86.903 580.486 87.6759C581.02 88.4486 581.873 88.835 583.044 88.835C585.122 88.835 586.161 87.2762 586.161 84.1584C586.161 81.5468 585.615 79.5949 584.524 78.3026C583.43 77.0101 582.098 75.7645 580.527 74.5652L572.892 68.6894C570.496 66.8241 568.67 64.8522 567.417 62.7738C566.164 60.6952 565.539 57.804 565.539 54.1C565.539 50.6625 566.358 47.8246 567.997 45.5862C569.636 43.3478 571.808 41.6823 574.511 40.5897C577.217 39.4973 580.14 38.9509 583.285 38.9509C594.901 38.9509 600.71 44.7467 600.71 56.3384V57.4576H585.922V55.1792C585.922 53.9801 585.715 52.8209 585.302 51.7017C584.89 50.5827 584.083 50.0231 582.885 50.0231C580.859 50.0231 579.847 51.0889 579.847 53.2206C579.847 55.379 580.7 57.0713 582.405 58.2969L591.277 64.7724C594.048 66.7709 596.372 69.1426 598.252 71.8872C600.13 74.6318 601.069 78.2826 601.069 82.8393C601.069 88.4886 599.464 92.7923 596.254 95.7499C593.043 98.7078 588.639 100.187 583.044 100.187Z"
                fill="#22331B"
              />
              <path
                d="M624.249 99.5474V29.1981H637.839V99.5474H624.249Z"
                fill="#22331B"
              />
              <path
                d="M655.503 100.187C651.64 100.187 649.037 99.3675 647.691 97.7287C646.345 96.0899 645.672 93.5784 645.672 90.1941V52.8209H641.636V41.9088H645.672V29.1981H659.58V41.9088H663.618V52.8209H659.58V86.8364C659.58 87.8224 659.741 88.5153 660.059 88.915C660.38 89.3148 660.992 89.5144 661.899 89.5144C662.538 89.5144 663.111 89.4612 663.618 89.3545V99.1076C663.297 99.2143 662.299 99.4207 660.619 99.7272C658.941 100.034 657.235 100.187 655.503 100.187Z"
                fill="#22331B"
              />
              <path
                d="M670.37 81.3604V64.7323C673.701 64.7323 676.559 64.5591 678.944 64.2128C681.329 63.8664 683.287 63.1336 684.819 62.0143C686.352 60.8951 687.484 59.2031 688.216 56.938C688.948 54.673 689.314 51.6351 689.314 47.8246C689.314 46.0924 689.096 44.5736 688.655 43.2679C688.216 41.962 687.198 41.3092 685.599 41.3092C684.453 41.3092 683.614 41.6758 683.08 42.4084C682.548 43.1413 682.207 44.074 682.061 45.2065C681.916 46.3389 681.841 47.5181 681.841 48.744V54.5798H667.214V44.427C667.214 39.0441 668.927 35.0539 672.351 32.4557C675.773 29.8575 680.19 28.5584 685.599 28.5584C690.342 28.5584 694.078 29.4112 696.808 31.1166C699.539 32.822 701.485 35.307 702.645 38.5712C703.802 41.8356 704.382 45.8261 704.382 50.5427C704.382 55.1526 703.629 59.2697 702.124 62.8937C700.619 66.5178 698.334 69.3691 695.271 71.4475C692.206 73.526 688.344 74.5652 683.68 74.5652V81.3604H670.37ZM669.932 99.5074V87.5959H684.24V99.5074H669.932Z"
                fill="#22331B"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.8465 9.39455C34.2661 9.39455 9.39369 34.2698 9.39369 64.8538C9.39369 95.4377 34.2661 120.313 64.8465 120.313C95.4269 120.313 120.299 95.4377 120.299 64.8538C120.299 34.2698 95.4269 9.39455 64.8465 9.39455ZM64.8465 127.708C30.1922 127.708 2 99.5119 2 64.8538C2 30.1954 30.1922 2 64.8465 2C99.5006 2 127.693 30.1954 127.693 64.8538C127.693 99.5119 99.5006 127.708 64.8465 127.708ZM92.2047 89.9981L61.1511 66.7052V27.884H68.5448V63.008L96.6408 84.0752L92.2047 89.9981Z"
              fill="#22331B"
              stroke="#22331B"
              strokeWidth={2.5}
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <g>
              <path
                d="M372.72 38.2942C374.545 37.7605 376.737 37.2762 379.295 36.8412C385.447 35.7943 390.584 35.3215 394.704 35.4234C397.039 35.5168 399.96 35.9116 403.466 36.6083C406.974 37.3048 409.248 37.9656 410.292 38.5909C411.233 39.1442 411.788 39.9194 411.958 40.9163C412.12 41.8697 411.87 42.8932 411.208 43.9867C410.821 44.5879 410.219 45.0471 409.403 45.3643C408.589 45.6813 407.184 46.0094 405.19 46.3486C402.807 46.7541 399.121 47.6266 394.131 48.9659C389.142 50.3053 386.218 51.2039 385.361 51.6623C385.116 51.7931 385.034 52.0969 385.113 52.5737C385.238 53.3105 385.816 54.7287 386.841 56.8284C388.412 60.0394 390.418 64.6257 392.86 70.5872C395.301 76.549 397.057 81.1109 398.13 84.2728C399.226 87.565 399.999 90.5327 400.447 93.1765C401.856 101.454 399.981 106.032 394.824 106.909C392.007 107.389 389.645 106.074 387.732 102.965C387.05 101.833 385.618 94.8524 383.435 82.0239L382.66 77.4731L378.843 53.8414L371.692 55.4591C367.267 56.4353 363.589 57.4847 360.658 58.6075C359.314 59.1035 357.777 59.4989 356.045 59.7939C352.057 60.4722 348.128 60.6388 344.258 60.2941C340.386 59.9494 338.337 59.1053 338.108 57.7617C338.012 57.1982 338.292 56.6156 338.947 56.0135C339.604 55.4113 340.959 54.4672 343.014 53.1811C343.821 52.687 346.288 51.1971 350.413 48.7115C351.85 47.9768 352.746 47.3558 353.107 46.8487C353.603 46.3627 356.402 44.9945 361.504 42.744C366.606 40.4938 370.344 39.0105 372.72 38.2942Z"
                fill="#979747"
              />
              <path
                d="M419.636 42.018C421.228 40.632 422.349 39.8839 422.999 39.7734C423.52 39.6849 424.316 39.9062 425.386 40.4374C426.553 40.9972 427.274 42.1007 427.556 43.7475C427.783 45.0912 427.672 46.5369 427.224 48.0852C426.773 49.6333 426.021 50.9874 424.97 52.1474C424 53.2491 422.949 53.8958 421.824 54.0875C420.61 54.2939 419.343 53.9297 418.024 52.9944C416.715 52.1028 415.942 50.9633 415.705 49.5765C415.291 47.1495 416.603 44.63 419.636 42.018ZM423.634 76.9237C424.461 75.7574 425.177 75.1226 425.784 75.0193C426.348 74.9234 427.121 75.0148 428.106 75.2933C431.555 76.1781 433.992 80.0219 435.418 86.8255C435.593 87.5982 435.782 88.5696 435.979 89.74C436.357 91.9502 436.225 94.0682 435.588 96.094C434.538 99.0826 433.167 100.72 431.475 101.008C430.002 101.259 428.385 100.531 426.623 98.8236C425.507 97.7649 424.654 95.5021 424.063 92.0348C423.938 91.2981 423.572 88.6178 422.963 83.9945C422.647 81.8634 422.542 80.3423 422.656 79.4314C422.767 78.5203 423.095 77.6844 423.634 76.9237Z"
                fill="#979747"
              />
              <path
                d="M470.448 63.1395C471.724 61.9859 473.163 61.2728 474.766 60.9999C476.325 60.7346 477.858 60.8974 479.363 61.4886C480.868 62.0798 482.114 63.0497 483.103 64.3979C484.438 66.222 485.686 68.7745 486.846 72.0553C488.005 75.3363 488.86 78.5805 489.404 81.7876C490.083 85.7747 490.124 88.6439 489.531 90.3949C488.515 93.3328 486.989 94.9748 484.952 95.3213C484.474 95.4025 484.099 95.4218 483.824 95.3793C482.921 95.3102 482.194 94.9657 481.641 94.346C481.091 93.7262 480.6 92.6726 480.168 91.1853C479.736 89.6979 479.238 87.4192 478.672 84.3494C477.567 78.1159 476.71 75.0507 476.103 75.1539C475.541 75.2499 474.813 77.0013 473.92 80.4085C472.701 85.2983 472.06 87.9493 471.996 88.3615C471.849 89.3232 471.196 90.5379 470.041 92.0052C468.886 93.4726 467.94 94.2689 467.204 94.3945C466.119 94.5786 464.909 94.3388 463.57 93.6748C462.231 93.0108 461.274 92.1701 460.699 91.153C459.898 89.5947 459.348 87.927 459.046 86.1499C458.796 84.6764 458.091 83.1574 456.933 81.593C455.776 80.0285 454.714 79.1719 453.755 79.0235C453.659 78.9948 453.548 78.9916 453.418 79.0137C451.902 79.2718 451.345 82.5549 451.75 88.8629C452.013 92.5192 451.993 95.02 451.688 96.3653C451.381 97.7105 450.576 98.7397 449.269 99.4523C448.569 99.7943 447.982 100.006 447.505 100.087C444.124 100.662 441.307 97.1952 439.047 89.6863C437.96 86.1701 437.23 83.3287 436.862 81.1616C436.036 76.3075 436.707 73.5624 438.872 72.9264L439.197 72.8712C440.193 72.7015 441.091 72.8612 441.886 73.35C442.496 73.7816 442.973 73.9679 443.319 73.909C443.71 73.8426 444.412 73.2548 445.426 72.1455C447.207 70.2821 449.31 69.144 451.736 68.731C454.855 68.2003 458.1 68.9193 461.467 70.8883C463.493 72.0596 464.616 72.6269 464.832 72.5899L464.898 72.579C464.889 72.5355 464.978 72.3311 465.162 71.9655C465.344 71.5998 465.592 71.0895 465.903 70.4344C466.217 69.7793 466.496 69.1406 466.749 68.5182C467.867 66.1872 469.102 64.3942 470.448 63.1395Z"
                fill="#979747"
              />
              <path
                d="M501.756 57.6789C503.141 56.908 504.485 56.4121 505.785 56.1908C507.952 55.8222 509.814 56.1629 511.376 57.213C512.936 58.2628 513.898 59.8496 514.259 61.9734C514.4 62.7968 514.445 63.5915 514.398 64.3578C514.305 66.6927 513.918 68.2967 513.243 69.1699C512.565 70.0431 511.062 70.9677 508.732 71.9441C506.156 73.0512 503.914 73.7671 502.006 74.0913C499.753 74.4747 498.764 75.4682 499.037 77.0718C499.067 77.2453 499.169 77.5845 499.344 78.0898C499.787 79.3966 500.585 80.2195 501.736 80.559C502.886 80.8985 504.826 80.836 507.556 80.3714C509.594 80.0249 512.322 79.4269 515.746 78.5769C518.524 77.8811 520.261 77.474 520.955 77.356C522.342 77.1202 523.217 77.2835 523.581 77.846C523.645 77.9686 523.697 78.1382 523.733 78.3549C523.963 79.6986 522.958 81.5305 520.723 83.8508C518.486 86.1711 516.051 87.8451 513.418 88.8729C511.829 89.4999 510.298 89.9387 508.825 90.1893C506.094 90.6539 503.493 90.5613 501.02 89.9119C498.546 89.2625 496.475 88.0987 494.808 86.4203C493.894 85.5055 493.219 84.6168 492.782 83.7548C492.346 82.8925 491.952 81.6887 491.6 80.1431C491.57 79.9699 491.513 79.7009 491.429 79.3361C491.345 78.9714 491.284 78.6808 491.247 78.4641C490.9 76.4271 490.804 74.8156 490.961 73.6297C491.441 70.4265 492.687 67.338 494.701 64.3644C496.716 61.3908 499.066 59.1622 501.756 57.6789Z"
                fill="#979747"
              />
            </g>
      </svg>
    );
}