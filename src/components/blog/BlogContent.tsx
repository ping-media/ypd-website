interface Props {
  content: string;
}

export default function BlogContent({ content }: Props) {
  return (
    <article
      className="max-w-3xl mx-auto px-6 py-12 font-lato text-gray-700 leading-relaxed
                 [&_h2]:font-red-rose [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4
                 [&_h3]:font-red-rose [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3
                 [&_p]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6
                 [&_li]:mt-2 [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300
                 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
