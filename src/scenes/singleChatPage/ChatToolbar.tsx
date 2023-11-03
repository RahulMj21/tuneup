"use client";

import { type Editor } from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Code,
} from "lucide-react";
import { Toggle } from "@/components/ui/Toggle";

interface Props {
    editor: Editor | null;
}

const ChatToolbar = ({ editor }: Props) => {
    if (!editor) return null;

    return (
        <div className="flex items-center gap-1 p-1">
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("strike")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("orderedList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                }
            >
                <ListOrdered className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <List className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
            <Toggle
                size="sm"
                className="p-[0.375rem]"
                pressed={editor.isActive("codeBlock")}
                onPressedChange={() =>
                    editor.chain().focus().toggleCodeBlock().run()
                }
            >
                <Code className="h-[0.875rem] w-[0.875rem]" />
            </Toggle>
        </div>
    );
};

export default ChatToolbar;
