export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce application with a React frontend and Node.js backend",
    description: "An end-to-end e-commerce solution that provides users with a seamless shopping experience. The platform includes product browsing, cart management, user authentication, payment processing, and order tracking.\n\nThe frontend is built with React and Redux for state management, while the backend uses Node.js with Express and MongoDB for data storage. The application implements secure user authentication with JWT tokens and integrates with Stripe for payment processing.",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout process with Stripe integration",
      "Order history and tracking",
      "Admin dashboard for product and order management"
    ],
    challenges: [
      {
        title: "State Management Complexity",
        description: "Managing the application state across multiple components and user flows proved challenging.",
        solution: "Implemented Redux with a well-structured store architecture, utilizing middleware for async operations and creating reusable selectors for derived data."
      },
      {
        title: "Payment Integration Security",
        description: "Ensuring secure payment processing while maintaining a smooth user experience.",
        solution: "Utilized Stripe Elements for frontend integration and implemented server-side validation and processing to prevent exposure of sensitive data."
      }
    ]
  },
  {
    id: "project-management-tool",
    title: "Project Management Tool",
    shortDescription: "A collaborative project management application with real-time updates",
    description: "A comprehensive project management tool designed for teams to collaborate effectively. The application features task boards, time tracking, file sharing, and team communication tools.\n\nThe application uses React with TypeScript for type safety, and implements WebSockets for real-time updates. The backend is built with Node.js and Express, with PostgreSQL for data storage and Redis for caching and pub/sub functionality.",
    liveUrl: "https://example.com/projectmanagement",
    githubUrl: "https://github.com/example/projectmanagement",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Redis"],
    features: [
      "Kanban-style task boards with drag-and-drop interface",
      "Real-time collaboration with presence indicators",
      "Time tracking and reporting",
      "File uploads and document management",
      "Team chat and notifications",
      "Role-based access control"
    ],
    challenges: [
      {
        title: "Real-time Synchronization",
        description: "Keeping multiple clients in sync with the latest data without performance issues.",
        solution: "Implemented a WebSocket architecture with optimistic UI updates, server validation, and conflict resolution strategies."
      },
      {
        title: "Complex UI Interactions",
        description: "Building an intuitive drag-and-drop interface with real-time updates.",
        solution: "Used React DnD library with custom hooks to manage the state and WebSocket events for synchronizing changes across clients."
      }
    ]
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    shortDescription: "A mobile-first fitness tracking application with data visualization",
    description: "A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress over time. The app provides personalized workout plans, nutritional guidance, and detailed analytics.\n\nBuilt with React Native for cross-platform compatibility, the app utilizes Firebase for authentication and real-time database, and integrates with health APIs for enhanced data collection. The backend is powered by Node.js with Express and MongoDB for data storage.",
    liveUrl: "https://example.com/fitnesstracker",
    githubUrl: "https://github.com/example/fitnesstracker",
    technologies: ["React", "Node.js", "Express", "Chart.js", "Firebase", "MongoDB"],
    features: [
      "Workout tracking with custom exercise creation",
      "Nutrition logging and macro tracking",
      "Progress visualization with interactive charts",
      "Personalized workout recommendations",
      "Social sharing and community features",
      "Integration with wearable devices"
    ],
    challenges: [
      {
        title: "Data Visualization Complexity",
        description: "Creating intuitive and performant visualizations for complex fitness data.",
        solution: "Utilized Chart.js with custom configurations and optimized data processing for smooth rendering of interactive charts and graphs."
      },
      {
        title: "Offline Functionality",
        description: "Ensuring the app remains functional without constant internet connection.",
        solution: "Implemented local storage strategies with background synchronization when connection is restored, providing seamless user experience in various network conditions."
      }
    ]
  },
  {
    id: "content-management-system",
    title: "Content Management System",
    shortDescription: "A headless CMS with a React admin interface and API-first architecture",
    description: "A modern, flexible content management system designed for developers and content creators. The system provides a headless architecture with a powerful API for content delivery and a user-friendly admin interface for content management.\n\nThe frontend is built with React and Material-UI, while the backend uses Node.js with Express and MongoDB. The system implements a flexible content model with custom fields, role-based access control, and comprehensive API documentation.",
    liveUrl: "https://example.com/cms",
    githubUrl: "https://github.com/example/cms",
    technologies: ["React", "Node.js", "GraphQL", "MongoDB", "Material-UI"],
    features: [
      "Flexible content modeling with custom fields",
      "Powerful content API with GraphQL",
      "Media library with image optimization",
      "Role-based user permissions",
      "Multi-language support",
      "Version history and content scheduling"
    ],
    challenges: [
      {
        title: "Content Model Flexibility",
        description: "Designing a system that can accommodate diverse content types and relationships.",
        solution: "Implemented a dynamic schema approach with MongoDB, allowing for flexible content models that can be defined and modified through the admin interface."
      },
      {
        title: "API Performance",
        description: "Ensuring API performance with complex queries and relationships.",
        solution: "Used GraphQL with efficient resolver patterns and implemented caching strategies to optimize query performance and reduce database load."
      }
    ]
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    shortDescription: "A property listing and management platform with interactive maps",
    description: "A comprehensive real estate platform that connects property sellers, buyers, and renters. The application features property listings, advanced search capabilities, map-based exploration, and communication tools.\n\nThe frontend is built with React and styled-components for custom styling, while the backend uses Node.js with Express and PostgreSQL with PostGIS for geospatial data. The platform integrates with mapping APIs for location-based features and implements a responsive design for all devices.",
    liveUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/example/realestate",
    technologies: ["React", "Node.js", "PostgreSQL", "MapBox API", "AWS S3"],
    features: [
      "Advanced property search with filters",
      "Interactive map interface for property exploration",
      "Virtual tours and image galleries",
      "Messaging system for inquiries",
      "User profiles for buyers, sellers, and agents",
      "Favorite properties and saved searches"
    ],
    challenges: [
      {
        title: "Geospatial Data Management",
        description: "Efficiently storing and querying location data for map-based features.",
        solution: "Utilized PostgreSQL with PostGIS extension for optimized geospatial queries and implemented client-side clustering for improved map performance."
      },
      {
        title: "Media Content Management",
        description: "Handling large volumes of high-quality images and virtual tour content.",
        solution: "Implemented a scalable media management system using AWS S3 for storage, with automatic optimization pipelines for different device requirements."
      }
    ]
  },
  {
    id: "social-networking-app",
    title: "Social Networking App",
    shortDescription: "A community platform with real-time messaging and content sharing",
    description: "A feature-rich social networking application designed to connect users with similar interests. The platform includes user profiles, content sharing, real-time messaging, and community features.\n\nBuilt with React and Socket.io for real-time communication, the application uses Node.js with Express for the backend API and MongoDB for data storage. The platform implements comprehensive notification systems and content moderation tools.",
    liveUrl: "https://example.com/socialapp",
    githubUrl: "https://github.com/example/socialapp",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "AWS"],
    features: [
      "User profiles with customization options",
      "Content creation and sharing",
      "Real-time messaging and group chats",
      "Activity feed with personalized content",
      "Notification system",
      "Community groups and events"
    ],
    challenges: [
      {
        title: "Scalable Real-time Communication",
        description: "Building a messaging system that can scale to handle thousands of concurrent connections.",
        solution: "Implemented a microservice architecture for the messaging system with Socket.io, Redis for pub/sub, and a sharding strategy for load distribution."
      },
      {
        title: "Content Moderation",
        description: "Ensuring user-generated content meets community guidelines.",
        solution: "Developed a hybrid moderation system combining automated filtering with AI for initial screening and a queue system for human review of flagged content."
      }
    ]
  }
];
