/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            container: {
                center: true,
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            colors: {
                "dark-1": "var(--color-dark-1)",
                "dark-2": "var(--color-dark-2)",
                "light-1": "var(--color-light-1)",
                "light-2": "var(--color-light-2)",
                "gray-1": "var(--color-gray-1)",
                "gray-2": "var(--color-gray-2)",
                "pink-1": "var(--color-pink-1)",
                "pink-2": "var(--color-pink-2)",
                "blue-1": "var(--color-blue-1)",
            },
            fontWeight: {
                light: "var(--light)",
                normal: "var(--normal)",
                medium: "var(--medium)",
                semibold: "var(--semibold)",
                bold: "var(--bold)",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
