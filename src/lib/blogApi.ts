import { IBlog } from "@/types/blog";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

// Mock data for testing when API is not available
const mockBlogs: IBlog[] = [
  {
    _id: "1",
    title: "The Future of Software Development in 2024",
    subtitle:
      "Exploring the latest trends and technologies that are shaping the software development landscape",
    image: "/screenshots/custom-software.jpg",
    content: `
      <h2>The Evolution of Software Development</h2>
      <p>Software development has come a long way since its inception. From the early days of punch cards to modern cloud-native applications, the industry has continuously evolved to meet the changing needs of businesses and users.</p>
      
      <h3>Key Trends in 2024</h3>
      <ul>
        <li>Artificial Intelligence and Machine Learning integration</li>
        <li>Cloud-native development and microservices</li>
        <li>DevOps and CI/CD automation</li>
        <li>Low-code and no-code platforms</li>
        <li>Cybersecurity-first development</li>
      </ul>
      
      <p>As we move forward, developers need to stay updated with these trends to remain competitive in the market.</p>
    `,
    author: "John Doe",
    tags: ["Software Development", "Technology", "AI", "Cloud"],
    metaTitle: "The Future of Software Development in 2024 - Codexaa",
    metaDescription:
      "Discover the latest trends and technologies shaping software development in 2024. Learn about AI, cloud-native development, and more.",
    metaTags: ["software development", "technology", "AI", "cloud", "2024"],
    metaImageAlt: "Software development trends 2024",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    _id: "2",
    title: "Building Scalable Web Applications",
    subtitle:
      "Best practices and architectural patterns for creating web applications that can handle millions of users",
    image: "/screenshots/dashboard.png",
    content: `
      <h2>Scalability Challenges</h2>
      <p>Building web applications that can scale to handle millions of users requires careful planning and the right architectural decisions.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li>Horizontal scaling with load balancers</li>
        <li>Database optimization and caching</li>
        <li>Microservices architecture</li>
        <li>CDN implementation</li>
        <li>Monitoring and observability</li>
      </ul>
      
      <p>By following these principles, you can build applications that grow with your business needs.</p>
    `,
    author: "Jane Smith",
    tags: ["Web Development", "Scalability", "Architecture"],
    metaTitle: "Building Scalable Web Applications - Codexaa",
    metaDescription:
      "Learn the best practices for building scalable web applications that can handle millions of users.",
    metaTags: ["web development", "scalability", "architecture", "performance"],
    metaImageAlt: "Scalable web application architecture",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
  },
  {
    _id: "3",
    title: "Digital Transformation Success Stories",
    subtitle:
      "Real-world examples of how companies achieved digital transformation and improved their business outcomes",
    image: "/screenshots/digital.jpg",
    content: `
      <h2>What is Digital Transformation?</h2>
      <p>Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.</p>
      
      <h3>Success Factors</h3>
      <ul>
        <li>Strong leadership and vision</li>
        <li>Employee training and change management</li>
        <li>Technology selection and implementation</li>
        <li>Data-driven decision making</li>
        <li>Continuous improvement and iteration</li>
      </ul>
      
      <p>Companies that successfully implement digital transformation see significant improvements in efficiency, customer satisfaction, and revenue growth.</p>
    `,
    author: "Mike Johnson",
    tags: ["Digital Transformation", "Business", "Technology"],
    metaTitle: "Digital Transformation Success Stories - Codexaa",
    metaDescription:
      "Discover real-world examples of successful digital transformation and learn how to implement it in your organization.",
    metaTags: [
      "digital transformation",
      "business",
      "technology",
      "success stories",
    ],
    metaImageAlt: "Digital transformation success stories",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
  },
];

export async function getAllBlogs(): Promise<IBlog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // Return mock data for testing when API is not available
    return mockBlogs;
  }
}

export async function getBlogBySlug(slug: string): Promise<IBlog | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${slug}`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch blog: ${res.status}`);
    }

    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function getLatestBlogs(limit: number = 3): Promise<IBlog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch latest blogs: ${res.status}`);
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    // Return mock data for testing when API is not available
    return mockBlogs.slice(0, limit);
  }
}
