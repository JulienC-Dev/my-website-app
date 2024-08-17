export type BlogSection = {
  subtitle: string;
  paragraphs: string[];
};

export type Blog = {
  id_blog: string;
  title: string;
  sections: BlogSection[];
  created_at: string;
  author_name: string;
  badge_techno: string[];
  image: string;
};

const getBlogs: Blog[] = [
  {
    id_blog: "automate-deployment-ansible",
    title: "Automating Deployment with Ansible",
    sections: [
      {
        subtitle: "Introduction",
        paragraphs: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
        ],
      },
      {
        subtitle: "Setting Up Ansible",
        paragraphs: [
          "Curabitur sodales ligula in libero.",
          "Sed dignissim lacinia nunc. Curabitur tortor.",
        ],
      },
    ],
    created_at: "2021-09-01",
    author_name: "Julien",
    badge_techno: ["Ansible", "AWS API gateway", "AWS Lambda"],
    image: "/testhighlvl.png",
  },
  {
    id_blog: "websokets-python",
    title: "Websockets with Python",
    sections: [
      {
        subtitle: "Understanding Websockets",
        paragraphs: [
          "Websockets provide a full-duplex communication channel over a single TCP connection.",
          "This technology is particularly useful for applications requiring real-time data updates.",
        ],
      },
      {
        subtitle: "Implementing Websockets in Python",
        paragraphs: [
          "Python has several libraries that make working with Websockets easy.",
          "Among them are websockets and socket.io.",
        ],
      },
    ],
    created_at: "2022-09-02",
    author_name: "Julien",
    badge_techno: ["Python", "Terraform", "AWS"],
    image: "/another-image.png",
  },
];

export function getBlogById(id: string): Blog {
  return getBlogs.find((blog) => blog.id_blog === id) as Blog;
}
