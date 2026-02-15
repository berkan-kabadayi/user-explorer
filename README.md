# 🚀 User Explorer

A modern, feature-rich React application for exploring users, managing favorites, and organizing content. Built with TypeScript, React Router, Zustand, and Bootstrap for a seamless user experience.

## ✨ Features

### 🔍 User Management

- Browse all users in a responsive card grid layout
- View detailed user profiles with tabbed navigation
- Access user's posts, albums, and todos from a single dashboard

### ⭐ Favorites System

- Add posts and photos to favorites with one click
- Persistent storage using localStorage via Zustand
- Separate sections for photos (grid) and posts (list)
- Remove individual favorites or clear all at once
- Favorite count displayed in navbar

### 📝 Posts & Comments

- View all user posts with excerpts
- Read full post details with comments section
- Interactive star button to mark posts as favorites
- Clean card-based layout with hover effects

### 📸 Albums & Photos

- Browse user albums in grid format
- View album photos (12 per album) with high-quality images
- Add photos to favorites directly from photo view
- Responsive grid layout (4 columns on desktop)

### ✅ Todos

- View user's todo list with completion status
- Visual indicators (checkmarks) for completed tasks
- Completed/Pending count badges
- Strikethrough styling for completed items

### 🏠 Dashboard Homepage

- Welcome message with project description
- Statistics cards showing total users and favorites count
- Featured favorites section (3 random items)
- Quick action buttons for navigation

### ⚠️ Error Handling

- Custom error page with user-friendly messages
- Centralized error boundary for all routes
- Automatic error catching in loaders

## 🛠️ Tech Stack

| Category             | Technology         | Description                                    |
| -------------------- | ------------------ | ---------------------------------------------- |
| **Framework**        | React 18           | Modern UI library with Hooks                   |
| **Language**         | TypeScript         | Type-safe development                          |
| **Routing**          | React Router v6    | Declarative routing with loaders               |
| **State Management** | Zustand            | Lightweight state management with persistence  |
| **Storage**          | localStorage       | Persistent data storage via Zustand middleware |
| **UI Library**       | React Bootstrap    | Pre-built responsive components                |
| **Styling**          | CSS3 + Bootstrap 5 | Custom styles with Bootstrap utilities         |
| **Build Tool**       | Vite               | Fast development and optimized builds          |
| **API**              | JSONPlaceholder    | Mock REST API for development                  |

## 📁 Project Structure

```
src/
├── components/
│   └── NavbarBS/
│       └── NavbarBS.tsx           # Navigation bar component
├── pages/
│   ├── HomePage/
│   │   └── HomePage.tsx           # Dashboard with stats and featured favorites
│   ├── Favorites/
│   │   └── Favorites.tsx          # Favorites management page
│   ├── Users/
│   │   ├── UsersPage.tsx          # User list with card grid
│   │   ├── UsersLoader.ts         # User data loader
│   │   ├── DetailPage/
│   │   │   ├── UserDetailPage.tsx # User profile with tabs
│   │   │   └── UserDetailLoader.ts
│   │   ├── Posts/
│   │   │   ├── UserPosts.tsx      # User's post list
│   │   │   ├── UserPostsDetail.tsx # Post detail with comments
│   │   │   ├── UserPostsLoader.ts
│   │   │   └── UserPostsDetailLoader.ts
│   │   ├── Album/
│   │   │   ├── UserAlbum.tsx      # Album list
│   │   │   ├── UserAlbumPhotos.tsx # Album photos grid
│   │   │   ├── UserAlbumLoader.ts
│   │   │   └── UserAlbumPhotosLoader.ts
│   │   └── Todos/
│   │       ├── UserTodos.tsx      # Todo list with status
│   │       └── UserTodosLoader.ts
│   └── root.tsx                   # Root layout with navbar
├── store/
│   └── store.ts                   # Zustand store with localStorage
├── types/
│   └── types.ts                   # TypeScript interfaces
├── App.css                        # Global styles with shadows and typography
├── index.css                      # Base CSS reset
├── ErrorPage.tsx                  # Error boundary component
├── Routes.tsx                     # Route configuration
└── main.tsx                       # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
   git clone https://github.com/berkan-kabadayi/user-explorer.git
   cd user-explorer
```

2. **Install dependencies:**

```bash
   npm install
```

3. **Start the development server:**

```bash
   npm run dev
```

4. **Open your browser:**

```
   http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 🎯 Key Features Explained

### React Router Loaders

This project extensively uses React Router v6's loader pattern for data fetching:

- Data is fetched before component render
- No loading states needed in components
- Automatic error handling with errorElement
- Better user experience with instant navigation

### Zustand + localStorage

Favorites are managed with Zustand and persisted to localStorage:

- Automatic synchronization across browser sessions
- Lightweight alternative to Redux
- Type-safe state management
- Built-in persistence middleware

### TypeScript Integration

Fully typed application for better development experience:

- Interfaces for all API responses
- Type-safe props and state
- IntelliSense support
- Compile-time error detection

## 🎨 Styling Approach

- **Bootstrap 5** for responsive layout and components
- **Custom CSS** for enhanced shadows, transitions, and hover effects
- **CSS Variables** for consistent theming
- **Font Weight Overrides** for better readability (headings: 700, body: 500)

## 📡 API

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock REST API:

- `/users` - User data
- `/posts` - User posts
- `/comments` - Post comments
- `/albums` - User albums
- `/photos` - Album photos
- `/todos` - User todos

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Berkan Kabadayı**

- GitHub: [@berkan-kabadayi](https://github.com/berkan-kabadayi)

---

Built with ❤️ using React, TypeScript, and Zustand
