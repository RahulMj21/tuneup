"use client";

import ChatActions from "@/scenes/singleChatPage/ChatActions";
import Toolbar from "@/scenes/singleChatPage/ChatToolbar";
import CodeBlock from "@tiptap/extension-code-block";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const ChatInput = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            OrderedList.configure({ keepMarks: true }),
            ListItem,
            CodeBlock.configure({
                HTMLAttributes: {
                    class: "bg-gray-4 text-[0.875rem] p-2 text-light-2 rounded-md",
                },
            }),
            Placeholder.configure({
                placeholder: "Message Rahul...",
                includeChildren: true,
            }),
        ],

        editorProps: {
            attributes: {
                class: "text-[0.875rem] min-h-[2rem] max-h-[6rem] overflow-y-auto py-2 px-[0.875rem] outline-none",
            },
        },
        onUpdate: ({ editor }) => console.log(editor.getHTML()),
    });

    return (
        <div className="flex flex-col w-full gap-2 px-5 pb-2">
            <div className="rounded-lg border border-gray-5 bg-dark-1">
                <Toolbar editor={editor} />
                <EditorContent editor={editor} />
                <ChatActions />
            </div>
        </div>
    );
};

export default ChatInput;
