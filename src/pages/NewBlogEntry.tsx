import React, { useRef } from 'react';

const NewBlogEntry: React.FC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const readTimeRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    const entry = {
      title: titleRef.current?.value || '',
      tag: tagRef.current?.value || '',
      readTime: readTimeRef.current?.value || '',
      image: imageRef.current?.value || '',
      content: contentRef.current?.value || '',
    };
    const markdown = `---\ntitle: ${entry.title}\ntag: ${entry.tag}\nreadTime: ${entry.readTime}\nimage: ${entry.image}\n---\n\n${entry.content}`;
    navigator.clipboard.writeText(markdown);
    alert('Blog entry copied to clipboard! Paste it into your static blog files.');
  };

  return (
    <section className="new-blog-entry" id="new-blog-entry">
      <h2>New Blog Entry Tool</h2>
      <p>Fill out the fields, then click <b>Copy Blog Entry</b> to copy the markdown. Paste it into your static blog files. You can embed images by providing a direct image URL.</p>
      <form onSubmit={e => e.preventDefault()}>
        <input ref={titleRef} type="text" placeholder="Title" required style={{marginBottom: '0.7em'}} />
        <input ref={tagRef} type="text" placeholder="Tag (e.g. AI, Project Mgmt)" style={{marginBottom: '0.7em'}} />
        <input ref={readTimeRef} type="text" placeholder="Read Time (e.g. 5 min read)" style={{marginBottom: '0.7em'}} />
        <input ref={imageRef} type="text" placeholder="Image URL (for cover)" style={{marginBottom: '0.7em'}} />
        <textarea ref={contentRef} placeholder="Blog content (Markdown supported, you can embed images with ![alt](url))" rows={8} style={{marginBottom: '0.7em', width: '100%'}} />
        <button type="button" onClick={handleCopy}>Copy Blog Entry</button>
      </form>
    </section>
  );
};

export default NewBlogEntry;
