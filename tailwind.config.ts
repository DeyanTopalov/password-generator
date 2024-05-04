import type { Config } from "tailwindcss";

function withOpacity(variableName: string) {
  return ({ opacityValue }: { opacityValue?: number }): string => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsla(var(${variableName}))`;
  };
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-gray-900": withOpacity("--gray-900")({}),
        "clr-gray-700": withOpacity("--gray-700")({}),
        "clr-gray-500": withOpacity("--gray-500")({}),
        "clr-gray-200": withOpacity("--gray-200")({}),
        "clr-neon-green": withOpacity("--neon-green")({}),
        "clr-red": withOpacity("--red")({}),
        "clr-orange": withOpacity("--orange")({}),
        "clr-yellow": withOpacity("--yellow")({}),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
