let colors = {
    transparent: 'transparent',
    overlay: 'rgba(245, 245, 245, .8)',
    primary: '#383d5a',
    'primary-dark': '#2a2e44',
    'primary-light': '#60647b',
    secondary: '#54e0e4',
    'secondary-light': '#76e6e9',
    'secondary-dark': '#3fa8ab',
    black: '#22292f',
    'grey-darkest': '#4b4d52',
    'grey-darker': '#71767b',
    'grey-dark': '#9a9ca1',
    grey: '#c7c5cc',
    'grey-light': '#e5e5e7',
    'grey-lighter': '#f7f7f7',
    'grey-lightest': '#fcf8fa',
    white: '#fff',
    red: '#cc1f1a',
    green: '#1f9d55',
    blue: '#3490dc',
};

module.exports = {
    colors: colors,
    screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
    fonts: {
        sans: ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Menlo', 'Courier New', 'monospace'],
    },
    textSizes: {
        0: '0', // 0
        xxs: '.625rem', // 10px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    leading: {
        none: 1,
        tight: 1.25,
        normal: 1.5,
        loose: 2,
    },
    tracking: {
        tight: '-0.05em',
        normal: '0',
        wide: '0.05em',
    },
    textColors: colors,
    backgroundColors: colors,
    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
    },
    borderWidths: {
        default: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px',
    },
    borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
    borderRadius: {
        none: '0',
        sm: '.125rem',
        default: '.25rem',
        lg: '.5rem',
        full: '9999px',
    },
    width: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.66667%',
        '5/6': '83.33333%',
        full: '100%',
        screen: '100vw',
    },
    height: {
        auto: 'auto',
        px: '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',
        full: '100%',
        screen: '100vh',
    },
    minWidth: {
        0: '0',
        5: '1.25rem',
        '1/2': '50%',
        10: '2.5rem',
        full: '100%',
    },
    minHeight: {
        0: '0',
        5: '1.25rem',
        10: '2.5rem',
        11: '2.75rem',
        full: '100%',
        screen: '100vh',
    },
    maxWidth: {
        32: '8rem',
        xs: '20rem',
        sm: '30rem',
        md: '40rem',
        lg: '50rem',
        xl: '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        full: '100%',
    },
    maxHeight: {
        full: '100%',
        screen: '100vh',
    },
    padding: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
    },
    margin: {
        auto: 'auto',
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
    },
    negativeMargin: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
    },
    shadows: {
        default: '0 3px 6px 0 rgba(0,0,0,0.08)',
        md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
        lg: '0 15px 30px 0 rgba(0,0,0,0.1), 0 5px 15px 0 rgba(0,0,0,0.075)',
        '-lg': '0 -15px 30px 0 rgba(0,0,0,0.1), 0 5px 15px 0 rgba(0,0,0,0.075)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        outline: '0 0 0 3px rgba(52,144,220,0.5)',
        none: 'none',
    },
    zIndex: {
        auto: 'auto',
        0: 0,
        1: 1,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
    },
    opacity: {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        100: '1',
    },
    svgFill: {
        current: 'currentColor',
        white: colors.white,
        primary: colors.primary,
        secondary: colors.secondary,
    },
    svgStroke: {
        current: 'currentColor',
    },
    modules: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColors: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: [],
        borderColors: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidths: ['responsive', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
        flexbox: ['responsive'],
        float: ['responsive'],
        fonts: ['responsive'],
        fontWeights: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        leading: ['responsive'],
        lists: ['responsive'],
        margin: ['responsive', 'hover', 'focus'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        negativeMargin: ['responsive'],
        opacity: ['responsive'],
        outline: ['focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        shadows: ['responsive', 'hover', 'focus'],
        svgFill: [],
        svgStroke: [],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColors: ['responsive', 'hover', 'focus', 'group-hover'],
        textSizes: ['responsive'],
        textStyle: ['responsive', 'hover', 'focus', 'group-hover'],
        tracking: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        zIndex: ['responsive'],
    },
    plugins: [
        require('tailwindcss/plugins/container')({
            // center: true,
            // padding: '1rem',
        }),
    ],
    options: {
        prefix: '',
        important: false,
        separator: ':',
    },
};