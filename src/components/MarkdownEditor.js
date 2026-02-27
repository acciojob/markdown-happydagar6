import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
    const [markdownInput, setMarkdownInput] = useState("");
    const [previewContent, setPreviewContent] = useState("");
    
    const [isLoading, setIsLoading] = useState(true);

    // Initial load simulation to satisfy the loading class
    useEffect(() => {
        const initialLoadTimer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(initialLoadTimer);
    }, []);

    // Real time update using useEffect
    useEffect(() => {
        setPreviewContent(markdownInput);
    }, [markdownInput]);

    if (isLoading) {
        return <div className="loading">Loading Editor...</div>;
    }

    return (
        <>
            <textarea 
                className="textarea" 
                value={markdownInput}
                onChange={(event) => setMarkdownInput(event.target.value)}
                placeholder="Type your markdown here... (e.g., # Hello World)"
            />
            
            <div className="preview">
                <ReactMarkdown>{previewContent}</ReactMarkdown>
            </div>
        </>
    )
}

export default MarkdownEditor;