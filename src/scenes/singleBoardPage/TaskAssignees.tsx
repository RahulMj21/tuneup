import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import cn from "@/libs/cn";
import { IUser } from "@/types";

interface Props {
    users: IUser[];
}

const TaskAssignees = ({ users }: Props) => {
    return (
        <div className="relative flex items-center h-10">
            {users.map((user, idx) => (
                <div
                    key={user.id}
                    className={cn(
                        `absolute right-0 cursor-pointer inline-block hover:z-[999] group`
                    )}
                    style={{
                        transform: `translateX(-${65 * idx}%)`,
                    }}
                >
                    <Avatar
                        className="group-hover:mb-2 transition-all h-8 w-8 border"
                        title={String(user.id)}
                    >
                        <AvatarImage src={idx === 0 ? "" : user.avatarUrl} />
                        <AvatarFallback className="text-[0.875rem]">
                            {idx === 0 ? "2+" : "RM"}
                        </AvatarFallback>
                    </Avatar>
                </div>
            ))}
        </div>
    );
};

export default TaskAssignees;
