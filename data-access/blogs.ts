type BlogSection = {
  subtitle: string;
  paragraphs: string[];
};

type PictureBlog = {
  main_picture: string;
  additional_picture?: string[];
};
export type Blog = {
  id_blog: string;
  title: string;
  sections: BlogSection[];
  created_at: string;
  author_name: string;
  badge_techno: string[];
  pictures: PictureBlog;
  github_link: string;
};

const getBlogs: Blog[] = [
  {
    id_blog: "k8s-aws-ansible-deployment",
    title: "Deploying a Kubernetes Cluster on AWS Using Ansible: A Quick Guide",
    sections: [
      {
        subtitle: "Introduction",
        paragraphs: [
          "In today's rapidly evolving tech landscape, Kubernetes (K8s) has become the go-to orchestration platform for managing containerized applications. In this guide, I'll walk you through deploying a basic Kubernetes cluster on AWS using Ansible. The focus will be on setting up a single-node master without any worker nodes, leveraging AWS EC2 for the infrastructure.",
          "An Ansible playbook written in Python will automate the entire process, including the installation of necessary command-line tools to establish a valid Kubernetes cluster.",
          "To demonstrate the setup, we'll deploy a simple Python server as a pod within the cluster. This setup is ideal for testing purposes, and its simplicity makes it a great candidate for inclusion in a Continuous Integration (CI) pipeline.",
        ],
      },
      {
        subtitle: "Setting Up the Kubernetes Cluster",
        paragraphs: [
          "We'll start by using Ansible to automate the creation of our Kubernetes cluster on AWS. The playbook will:",
          "Provision an EC2 Instance: Using Ansible, we'll create a single EC2 instance that will act as our Kubernetes master node. This will be our one-node cluster, with no additional worker nodes.",
          "Install Kubernetes and Dependencies: Once the EC2 instance is up, Ansible will handle the installation of Kubernetes, Docker, and other necessary tools. We'll also install kubectl for managing the cluster and kubeadm for initializing it.",
          "Initialize the Cluster: After installation, the playbook will initialize the Kubernetes cluster using kubeadm, setting up the master node. Since this is a single-node cluster, we'll configure it to allow scheduling on the master node itself, bypassing the need for worker nodes.",
        ],
      },
      {
        subtitle: "Deploying the Application",
        paragraphs: [
          "With the cluster up and running, the next step is to deploy our application. The application in this case is a simple Python HTTP server that will be containerized and run as a pod in the cluster. To achieve this, we'll create the following Kubernetes objects:",
          "Pod: This is the smallest deployable unit in Kubernetes, and it will run our Python server.",
          "Service: To expose the Python server to the outside world, we'll create a Kubernetes service. This service will ensure that our application is accessible via a stable IP address and port.",
          "Namespace (Optional): For better organization and isolation, we could deploy our resources into a dedicated namespace.",
          "Secret: Store sensitive information like authentication tokens, keys in kubernetes secrets.",
          "Each of these objects will be defined in YAML files, which the Ansible playbook will apply to the cluster using kubectl.",
        ],
      },
      {
        subtitle: "Verifying the Deployment and Cleanup",
        paragraphs: [
          "Once the deployment is complete, we'll verify that the Python server is running correctly by checking the pod's status and accessing the application via the service's endpoint. This step ensures that our Ansible playbook and Kubernetes setup are functioning as expected.",
          "After confirming that everything works, we'll clean up the entire stack. This involves terminating the EC2 instance and deleting the Kubernetes resources. The Ansible playbook will handle this cleanup process, ensuring that no resources are left behind.",
        ],
      },
      {
        subtitle: "Final Thoughts",
        paragraphs: [
          "This setup, while simple, is incredibly useful for testing purposes. It provides a quick and easy way to deploy a Kubernetes cluster on AWS, which can be integrated into a CI pipeline for automated testing of containerized applications.",
          "Moreover, this setup can be expanded upon by creating a Helm chart, which would further automate the deployment process and make it easier to manage complex Kubernetes applications.",
        ],
      },
    ],
    created_at: "2023-10-12",
    author_name: "Julien",
    badge_techno: ["Ansible", "AWS EC2", "K8s"],
    pictures: {
      main_picture: "/testhighlvl.png",
    },
    github_link: "https://github.com/JulienC-Dev/my-website-app",
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
    pictures: {
      main_picture: "/testhighlvl.png",
    },
    github_link: "",
  },
];

export function getBlogById(id: string): Blog {
  return getBlogs.find((blog) => blog.id_blog === id) as Blog;
}
