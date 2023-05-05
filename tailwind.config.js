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
                "color-dark-1": "var(--color-dark-1)",
                "color-dark-2": "var(--color-dark-2)",
                "color-light-1": "var(--color-light-1)",
                "color-light-2": "var(--color-light-2)",
                "color-gray-1": "var(--color-gray-1)",
                "color-gray-2": "var(--color-gray-2)",
                "color-pink-1": "var(--color-pink-1)",
                "color-pink-2": "var(--color-pink-2)",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
