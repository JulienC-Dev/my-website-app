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
    badge_techno: ["Ansible", "AWS", "EC2", "K8s"],
    pictures: {
      main_picture: "/testhighlvl.png",
    },
    github_link: "https://github.com/JulienC-Dev/my-website-app",
  },
  {
    id_blog: "websokets-python-terraform-aws-services",
    title:
      "Building a Scalable WebSocket Architecture for Cryptocurrency Data with Terraform and AWS",
    sections: [
      {
        subtitle: "Introduction",
        paragraphs: [
          "In today's fast-paced world of cryptocurrency trading, having real-time access to data is crucial. To meet this demand, I developed a WebSocket server capable of receiving connections from multiple clients simultaneously. This setup not only allows us to handle a large number of client connections but also ensures low-latency data transfer, which is critical for performing price arbitrage between different exchanges.",
          "The architecture is deployed on AWS using Terraform, leveraging services like Amazon ECS and Fargate to manage the server and client infrastructure. All data collected from various cryptocurrency exchanges, such as Binance, is stored in DynamoDB, providing a robust and scalable solution. The entire infrastructure is designed to scale dynamically, ensuring that we can handle increasing loads as more clients and data sources are added.",
        ],
      },
      {
        subtitle: "Architecture Overview",
        paragraphs: [
          "The core of the architecture revolves around a WebSocket server that acts as a central hub for receiving and processing data from multiple clients. Here's a breakdown of the key components:",
          "WebSocket Server: The server is responsible for handling incoming WebSocket connections from clients. It receives real-time cryptocurrency data from multiple sources, processes it, and broadcasts it to connected clients.",
          "Clients: The clients connect to the WebSocket server to receive real-time data. These could be comsumed by trading bots, and front-end application.",
          "Amazon ECS and Fargate: The WebSocket server and clients are deployed using Amazon ECS and Fargate, which handle the orchestration and scaling of containers. This setup ensures that our architecture can scale automatically based on demand, providing a resilient and cost-effective solution.",
          "DynamoDB: All incoming data is stored in DynamoDB, a fully managed NoSQL database that offers fast and predictable performance. Storing the data in DynamoDB allows us to perform complex queries, such as price comparisons between exchanges, enabling real-time arbitrage opportunities. Redis can also be a good challenger for this use case :)",
          "Terraform: Terraform is used to manage the entire infrastructure as code. This includes provisioning resources like ECS clusters, Fargate tasks, DynamoDB tables, and API Gateway for the WebSocket endpoint. By managing infrastructure state with Terraform, we can ensure that deployments are repeatable and consistent.",
        ],
      },
      {
        subtitle: "Deployment Process",
        paragraphs: [
          "Let's dive into the deployment process, which involves setting up the WebSocket, deploying it to AWS, and configuring the infrastructure using Terraform.",
          "1. Setting Up the WebSocket Server and Websocket client: The WebSocket server and client are developed using the lightweight Python frameworks websockets-server and websockets-client. The server is responsible for listening to incoming connections and processing messages from clients.",
          "2. Containerizing the Server and Clients: Both the server and client applications are packaged into a single Docker container. This approach simplifies deployment and management on AWS ECS with Fargate.",
          "3. Terraform Configuration: The Terraform configuration files define all the AWS resources needed for the architecture. This includes: ECS Cluster and Fargate Task Definitions, API Gateway WebSocket Endpoint, DynamoDB Table, and IAM Roles and Policies.",
          "4. Deploying to AWS: With the Terraform configuration in place, deploying the architecture is as simple as running `terraform apply`. Terraform handles the provisioning of all resources, and within minutes, the WebSocket server is up and running on AWS.",
        ],
      },
      {
        subtitle: "Scalability and Performance",
        paragraphs: [
          "One of the key advantages of this architecture is its ability to scale automatically. As the number of clients or the volume of data increases, ECS and Fargate can scale the infrastructure to meet demand. This ensures that we maintain low latency, which is critical for real-time applications like cryptocurrency trading.",
          "The use of WebSockets provides a low-latency, bidirectional communication channel, making it ideal for scenarios where timely data delivery is essential. In the context of cryptocurrency trading, this enables price arbitrage opportunities by allowing traders to react quickly to price changes across different exchanges.",
        ],
      },
      {
        subtitle: "Conclusion",
        paragraphs: [
          "Deploying a WebSocket server architecture on AWS using Terraform offers a scalable, resilient, and low-latency solution for real-time data processing. Whether you're building a cryptocurrency trading platform or any other real-time application, this architecture can serve as a solid foundation.",
          "By leveraging AWS services like ECS, Fargate, and DynamoDB, and managing the infrastructure with Terraform, we can ensure that the system is both flexible and easy to maintain. This setup not only meets the demands of today but is also prepared to scale as the business grows.",
          "This blog serves as a starting point for deploying your own WebSocket server on AWS. With the information provided, you should be well-equipped to build a similar architecture tailored to your specific needs.",
          "* WARNING: I provide an open-source boilerplate, so some elements may be missing or incomplete. Please feel free to ask if you have any questions or need further details.",
          "* USING AT YOUR OWN RISK: This blog is for educational purposes only. I am not responsible for any misuse or damage caused by the information provided.",
        ],
      },
    ],
    created_at: "2024-03-14",
    author_name: "Julien",
    badge_techno: [
      "Python",
      "Terraform",
      "AWS",
      "API Gateway",
      "DynamoDB",
      "Lambda",
    ],
    pictures: {
      main_picture: "/testhighlvl.png",
    },
    github_link: "https://github.com/JulienC-Dev/my-website-app",
  },
];

export function getBlogById(id: string): Blog {
  return getBlogs.find((blog) => blog.id_blog === id) as Blog;
}
