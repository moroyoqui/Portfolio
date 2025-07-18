import React, { useRef, useState } from 'react';

const parseFrontMatter = (markdown: string) => {
  const match = markdown.match(/^---([\s\S]*?)---\n([\s\S]*)$/);
  if (!match) return null;
  const meta = Object.fromEntries(
    (match[1] || '').split('\n').filter(Boolean).map(line => {
      const [key, ...rest] = line.split(':');
      return [key.trim(), rest.join(':').trim()];
    })
  );
  return { ...meta, content: match[2] };
};

const EditBlogEntry: React.FC = () => {
  const [input, setInput] = useState('');
  const [fields, setFields] = useState<any>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const tagRef = useRef<HTMLInputElement>(null);
  const readTimeRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleParse = () => {
    const parsed = parseFrontMatter(input);
    if (parsed) setFields(parsed);
    else alert('Invalid markdown format.');
  };

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
    alert('Edited blog entry copied to clipboard! Paste it into your static blog files.');
  };

  return (
    <section className="new-blog-entry" id="edit-blog-entry">
      <h2>Edit Blog Entry Tool</h2>
      <p>Paste your blog post markdown below, click <b>Parse</b>, edit fields, then <b>Copy</b> to update your static file.</p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste blog post markdown here..."
        rows={6}
        style={{marginBottom: '0.7em', width: '100%'}}
      />
      <button type="button" onClick={handleParse} style={{marginBottom: '1em'}}>Parse</button>
      {fields && (
        <form onSubmit={e => e.preventDefault()}>
          <input ref={titleRef} defaultValue={fields.title} type="text" placeholder="Title" required style={{marginBottom: '0.7em'}} />
          <input ref={tagRef} defaultValue={fields.tag} type="text" placeholder="Tag" style={{marginBottom: '0.7em'}} />
          <input ref={readTimeRef} defaultValue={fields.readTime} type="text" placeholder="Read Time" style={{marginBottom: '0.7em'}} />
          <input ref={imageRef} defaultValue={fields.image} type="text" placeholder="Image URL" style={{marginBottom: '0.7em'}} />
          <textarea ref={contentRef} defaultValue={fields.content} placeholder="Blog content (Markdown supported)" rows={8} style={{marginBottom: '0.7em', width: '100%'}} />
          <button type="button" onClick={handleCopy}>Copy Edited Blog Entry</button>
        </form>
      )}
    </section>
  );
};

export default EditBlogEntry;
