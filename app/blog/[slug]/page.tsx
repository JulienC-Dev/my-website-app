"use client";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/Icons";
import { getBlogById } from "@/data-access/blogs";
import Image from "next/image";
import { useState } from "react";

export default function Blog({ params }: { params: { slug: string } }) {
  const blog = getBlogById(params.slug);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <div>
          <p className="block text-sm text-muted-foreground">
            Published on {blog?.created_at}
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
          <div className="mt-4">
            {blog.github_link && (
              <a
                href={blog.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icons.gitHub className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
        {blog.pictures.main_picture && (
          <Image
            src={blog.pictures.main_picture}
            alt={blog.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors cursor-pointer"
            onClick={() => handleImageClick(blog.pictures.main_picture)}
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
        <div>
          {blog.pictures.additional_picture &&
            (blog.pictures.additional_picture ?? []).map((picture, index) => (
              <Image
                key={index}
                src={picture}
                alt={blog.title}
                width={720}
                height={405}
                className="my-8 rounded-md border bg-muted transition-colors cursor-pointer"
                onClick={() => handleImageClick(picture)}
                priority
              />
            ))}
        </div>
      </article>

      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 cursor-pointer"
          onClick={handleCloseFullScreen}
        >
          <Image
            src={fullScreenImage}
            alt="Full-screen image"
            layout="intrinsic"
            width={1920}
            height={1080}
            className="rounded-md max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
