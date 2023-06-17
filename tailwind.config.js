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
                "dark-3": "var(--color-dark-3)",
                "light-1": "var(--color-light-1)",
                "light-2": "var(--color-light-2)",
                "gray-1": "var(--color-gray-1)",
                "gray-2": "var(--color-gray-2)",
                "gray-3": "var(--color-gray-3)",
                "gray-4": "var(--color-gray-4)",
                "pink-1": "var(--color-pink-1)",
                "pink-2": "var(--color-pink-2)",
                "blue-1": "var(--color-blue-1)",
                "blue-2": "var(--color-blue-2)",
                "green-1": "var(--color-green-1)",
                "green-2": "var(--color-green-2)",
                "green-3": "var(--color-green-3)",
                "focus-1": "var(--color-focus-1)",
                "focus-2": "var(--color-focus-2)",
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
            gridTemplateColumns: {
                plan: "repeat(auto-fit, minmax(20rem, 1fr))",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
