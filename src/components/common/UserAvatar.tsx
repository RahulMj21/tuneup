import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface Props {
    src: string;
    fallback: string;
}

const UserAvatar = ({ src, fallback }: Props) => {
    return (
        <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
