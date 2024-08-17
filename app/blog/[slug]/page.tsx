import { Badge } from "@/components/ui/badge";
import { getBlogById } from "@/data-access/blogs";
import Image from "next/image";

export default function Blog({ params }: { params: { slug: string } }) {
  const blog = getBlogById(params.slug);

  return (
    <div>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <div>
          <p className="block text-sm text-muted-foreground">
            Published on {new Date(blog?.created_at).toLocaleDateString()}
          </p>
          <h1 className="scroll-m-20 text-3xl font-bold pt-4 tracking-tight lg:text-3xl">
            {blog?.title}
          </h1>
          <div className="mt-4 flex items-center space-x-3">
            <div className="flex flex-col text-left leading-tight">
              <p className="font-medium">{blog.author_name}</p>
            </div>
          </div>
          <div className="mt-2">
            {blog.badge_techno.map((badge, index) => (
              <Badge key={index} className="mr-2 bg-amber-400">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <div className="prose max-w-none">
          {blog.sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                {section.subtitle}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
