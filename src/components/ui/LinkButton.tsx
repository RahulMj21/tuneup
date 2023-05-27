import { VariantProps } from "class-variance-authority";
import { LinkHTMLAttributes } from "react";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import cn from "@/libs/cn";

interface Props
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        VariantProps<typeof buttonVariants> {
    href: string;
}

const LinkButton = ({ className, variant, href, ...props }: Props) => {
    return (
        <Link
            role="button"
            href={href}
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        />
    );
};

export default LinkButton;
