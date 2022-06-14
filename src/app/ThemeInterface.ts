export interface Theme {
    name: string;
    properties: any;
}

export const defaultTheme: Theme = {
    name: "defaultTheme",
    properties: {
        "--color-left-nav-background":"hsl(252,30%,100%)",
        "--color-sub-title":"hsl(252,75%,60%)",
        "--color-nav-link":"hsl(252,30%,17%)",
        "--color-active-nav":"hsl(252,75%,60%)",
        "--color-active-nav-background":"#f2f2fc",
        "--color-hover":"#f2f2fc",
        "--color-image-background":"hsl(252,75%,60%)",
        "--color-image-div-background":"hsl(252,30%,100%)",
        "--color-icon":"hsl(252,75%,60%)",

        "--color-right-nav-background": "#f2f2fc",
        // home
        "--color-text":"hsl(252,30%,17%)",
        "--color-text2":"hsl(252,30%,17%)",
        "--color-text2-animation":"hsl(252,75%,60%)",
        "--color-text-span":"hsl(252,75%,60%)",
        //about
        "--color-image-border":"hsl(252,75%,60%)",
        "--color-button-background":"hsl(252,75%,60%)",
        "--color-button-textcolor":"hsl(252,30%,100%)",
        //project
        "--color-card":"hsl(252,30%,100%)",
        //skill
        "--color-progress-bar":"hsl(252,75%,60%)",
        //popup
        "--color-overlay-background":"#11141aa7",
        "--color-button-close": "hsl(0, 100%, 50%)",
        "--color-popup-close-background" : "hsl(252,30%,100%)",
        "--color":"hsl(252,75%,60%)",
        "--color1":"#f9004d",
        "--color2":"#647bff",
        "--color3":"#fa5b0f",
        "--color4":"#07693e",
        "--color5":"#f9ca24",
        "--color-popup-button":"hsl(252,30%,100%)",
        "--color-btn":"hsl(252,30%,100%)",
        "--color-border":"#222222",
        "--color-popup-button-background1":"hsl(252,30%,15%)",
        "--color-popup-button-background2":"#222222"
    }
};

export const light: Theme = {
    name: "light",
    properties: {
        "--color-left-nav-background":"#090a1a",
        "--color-sub-title":"hsl(252,75%,60%)",
        "--color-nav-link":"hsl(252,30%,100%)",
        "--color-active-nav":"hsl(252,75%,60%)",
        "--color-active-nav-background":"hsl(252,30%,15%)",
        "--color-hover":"hsl(252,30%,15%)",
        "--color-image-background":"hsl(252,75%,60%)",
        "--color-image-div-background":"hsl(252,30%,100%)",
        "--color-icon":"hsl(252,75%,60%)",

        "--color-right-nav-background": "hsl(252,30%,15%)",
        // home
        "--color-text":"hsl(252,30%,100%)",
        "--color-text2":"hsl(252,30%,100%)",
        "--color-text2-animation":"hsl(252,75%,60%)",
        "--color-text-span":"hsl(252,75%,60%)",
        //about
        "--color-image-border":"hsl(252,75%,60%)",
        "--color-button-background":"hsl(252,75%,60%)",
        "--color-button-textcolor":"hsl(252,30%,100%)",
        //project
        "--color-card":"#090a1a",
        //skill
        "--color-progress-bar":"hsl(252,75%,60%)",
        //popup
        "--color-overlay-background":"#11141aa7",
        "--color-button-close": "hsl(0, 100%, 50%)",
        "--color-popup-close-background" : "hsl(252,30%,100%)",
        "--color":"hsl(252,75%,60%)",
        "--color1":"#f9004d",
        "--color2":"#647bff",
        "--color3":"#fa5b0f",
        "--color4":"#07693e",
        "--color5":"#f9ca24",
        "--color-btn":"hsl(252,30%,100%)",
        "--color-border":"#222222",
        "--color-popup-button":"hsl(252,30%,100%)",
        "--color-popup-button-background1":"hsl(252,30%,15%)",
        "--color-popup-button-background2":"#222222"
    }
};

export const dark: Theme = {
    name: "dark",
    properties: {
        "--color-left-nav-background":"#393939",
        "--color-sub-title":"hsl(252,75%,60%)",
        "--color-nav-link":"#fff",
        "--color-active-nav":"hsl(252,75%,60%)",
        "--color-active-nav-background":"#222222",
        "--color-hover":"#222222",
        "--color-image-background":"hsl(252,75%,60%)",
        "--color-image-div-background":"hsl(252,30%,100%)",
        "--color-icon":"hsl(252,75%,60%)",

        "--color-right-nav-background": "#222222",
        // home
        "--color-text":"hsl(252,30%,100%)",
        "--color-text2":"hsl(252,30%,100%)",
        "--color-text2-animation":"hsl(252,75%,60%)",
        "--color-text-span":"hsl(252,75%,60%)",
        //about
        "--color-image-border":"hsl(252,75%,60%)",
        "--color-button-background":"hsl(252,75%,60%)",
        "--color-button-textcolor":"hsl(252,30%,100%)",
        //project
        "--color-card":"#393939",
        //skill
        "--color-progress-bar":"hsl(252,75%,60%)",
        //popup
        "--color-overlay-background":"#11141aa7",
        "--color-button-close": "hsl(0, 100%, 50%)",
        "--color-popup-close-background" : "hsl(252,30%,100%)",
        "--color":"hsl(252,75%,60%)",
        "--color1":"#f9004d",
        "--color2":"#647bff",
        "--color3":"#fa5b0f",
        "--color4":"#07693e",
        "--color5":"#f9ca24",
        "--color-btn":"hsl(252,30%,100%)",
        "--color-border":"#222222",
        "--color-popup-button":"hsl(252,30%,100%)",
        "--color-popup-button-background1":"hsl(252,30%,15%)",
        "--color-popup-button-background2":"#222222"
        
    },
};

export const purple: Theme = {
    name: "purple",
    properties: {
        "--color-image-background":"hsl(252,75%,60%)",
        "--color-sub-title":"hsl(252,75%,60%)",
        "--color-active-nav":"hsl(252,75%,60%)",
        "--color-icon":"hsl(252,75%,60%)",

        "--color-text2-animation":"hsl(252,75%,60%)",
        "--color-text-span":"hsl(252,75%,60%)",

        "--color-image-border":"hsl(252,75%,60%)",
        "--color-button-background":"hsl(252,75%,60%)",

        "--color-progress-bar":"hsl(252,75%,60%)",
    }
};
export const red: Theme = {
    name: "red",
    properties: {
        "--color-image-background":"#f9004d",
        "--color-sub-title":"#f9004d",
        "--color-active-nav":"#f9004d",
        "--color-icon":"#f9004d",

        "--color-text2-animation":"#f9004d",
        "--color-text-span":"#f9004d",

        "--color-image-border":"#f9004d",
        "--color-button-background":"#f9004d",

        "--color-progress-bar":"#f9004d",
    }
};
export const blue: Theme = {
    name: "blue",
    properties: {
        "--color-image-background":"#647bff",
        "--color-sub-title":"#647bff",
        "--color-active-nav":"#647bff",
        "--color-icon":"#647bff",

        "--color-text2-animation":"#647bff",
        "--color-text-span":"#647bff",

        "--color-image-border":"#647bff",
        "--color-button-background":"#647bff",

        "--color-progress-bar":"#647bff",
    }
};
export const orange: Theme = {
    name: "orange",
    properties: {
        "--color-image-background":"#fa5b0f",
        "--color-sub-title":"#fa5b0f",
        "--color-active-nav":"#fa5b0f",
        "--color-icon":"#fa5b0f",

        "--color-text2-animation":"#fa5b0f",
        "--color-text-span":"#fa5b0f",

        "--color-image-border":"#fa5b0f",
        "--color-button-background":"#fa5b0f",

        "--color-progress-bar":"#fa5b0f",
    }
};
export const green: Theme = {
    name: "green",
    properties: {
        "--color-image-background":"#07693e",
        "--color-sub-title":"#07693e",
        "--color-active-nav":"#07693e",
        "--color-icon":"#07693e",

        "--color-text2-animation":"#07693e",
        "--color-text-span":"#07693e",

        "--color-image-border":"#07693e",
        "--color-button-background":"#07693e",

        "--color-progress-bar":"#07693e",
    }
};
export const yellow: Theme = {
    name: "yellow",
    properties: {
        "--color-image-background":"#f9ca24",
        "--color-sub-title":"#f9ca24",
        "--color-active-nav":"#f9ca24",
        "--color-icon":"#f9ca24",

        "--color-text2-animation":"#f9ca24",
        "--color-text-span":"#f9ca24",

        "--color-image-border":"#f9ca24",
        "--color-button-background":"#f9ca24",

        "--color-progress-bar":"#f9ca24",
    }
}