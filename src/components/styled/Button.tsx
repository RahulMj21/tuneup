import tw, { styled } from "twin.macro";

interface ButtonProps {
    variant?: "hollow";
}

export const Button = styled.button(({ variant }: ButtonProps) => [
    tw`flex items-center gap-2 px-4 py-2 transform duration-200 rounded-3xl bg-color-light-2 text-color-dark-1 font-medium border-2 border-transparent whitespace-nowrap`,
    tw`focus-visible:(outline-none ring-2 ring-pink-500 ring-opacity-50)`,
    tw`hover:(shadow-lg)`,
    tw`active:scale-[0.98]`,
    variant === "hollow" &&
        tw`bg-transparent text-color-light-2 border-current border-[1.5px] border-opacity-50`,
]);

export const LinkButton = styled.a(({ variant }: ButtonProps) => [
    tw`cursor-pointer flex items-center gap-2 px-4 py-2 transform duration-200 rounded-3xl bg-color-light-2 text-color-dark-1 font-medium border-2 border-transparent whitespace-nowrap`,
    tw`focus-visible:(outline-none ring-2 ring-pink-500 ring-opacity-50)`,
    tw`hover:(shadow-lg)`,
    tw`active:scale-[0.98]`,
    variant === "hollow" &&
        tw`bg-transparent text-color-light-2 border-current border-[1.5px] border-opacity-50`,
]);
