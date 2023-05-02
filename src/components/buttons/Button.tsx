import tw, { styled } from "twin.macro";

interface ButtonProps {
    variant?: "hollow";
}

export const Button = styled.button(({ variant }: ButtonProps) => [
    tw`flex items-center gap-2 px-4 py-2 transform duration-200 rounded bg-black text-white font-medium border-2 border-transparent whitespace-nowrap`,
    tw`focus-visible:(outline-none ring-2 ring-pink-500 ring-opacity-50)`,
    tw`hover:(shadow-lg)`,
    tw`active:scale-[0.98]`,
    variant === "hollow" &&
        tw`bg-transparent text-black border-current border-opacity-50`,
]);
