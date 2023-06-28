import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface Props {
    src: string;
    fallback: string;
    className?: string;
}

const UserAvatar = ({ src, fallback, className }: Props) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
