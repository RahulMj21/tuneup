"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "@/scenes/singleChatPage/ChatToolbar";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

const ChatInput = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            OrderedList.configure({ keepMarks: true }),
            ListItem,
        ],

        editorProps: {
            attributes: {
                class: "min-h-[3.5rem] max-h-[6rem] overflow-y-auto rounded-md border border-gray-3 p-2 outline-none bg-dark-1",
            },
        },
        onUpdate: ({ editor }) => console.log(editor.getHTML()),
    });

    return (
        <div className="flex flex-col w-full gap-2 px-5 pb-2">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default ChatInput;
