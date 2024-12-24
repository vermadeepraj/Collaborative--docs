# Collaborative Docs

Collaborative Docs is a real-time document editing application that allows multiple users to create, edit, and manage documents simultaneously. The project aims to facilitate seamless collaboration with features like live updates, user-specific editing permissions, and robust version control.

## Features

### 1. **Real-Time Collaboration**
   - Multiple users can work on the same document at the same time.
   - Changes are synchronized instantly, ensuring all collaborators view the latest version.

### 2. **User Authentication**
   - Secure login and registration system.
   - Ensures only authorized users can access and edit documents.

### 3. **Document Management**
   - Create, edit, and delete documents.
   - Organize documents in a user-friendly dashboard.

### 4. **Editing Permissions**
   - Role-based access control for documents (e.g., read-only, edit).
   - Manage who can view or edit specific documents.

### 5. **Version Control**
   - Maintain a history of document changes.
   - Option to restore previous versions.

### 6. **Rich Text Editor**
   - Fully-featured editor with options like bold, italics, lists, headings, etc.
   - Supports markdown for easy formatting.

## Tech Stack

### Frontend:
- **Next.js** for building the user interface.
- **TypeScript** for type-safe development.
- **Permit.io** for access control management.
- **Liveblocks** for real-time collaboration.
- **Shadcn UI** for pre-built and customizable UI components.
- **Zustand** for state management.
- **CSS Frameworks** like Bootstrap or Tailwind CSS for styling.

### Backend:
- **Appwrite** for backend services and database management.
- **Liveblocks** for real-time synchronization.

## How It Works

1. **User Login/Signup**: Users log in or create an account to access their documents.
2. **Dashboard**: Users can view a list of their documents and create new ones.
3. **Collaboration**: Users can invite others to collaborate on a document.
4. **Editing**: Real-time changes are visible to all collaborators instantly.
5. **Version Control**: Users can track changes and restore older versions as needed.

## Project Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/vermadeepraj/Collaborative--docs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Collaborative--docs
   ```

3. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

4. Run the development server:
   ```bash
   pnpm run dev
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Why This Project Stands Out

- **Practical Use Case**: Solves real-world collaboration challenges.
- **Scalable Design**: Built with modern technologies for seamless performance.
- **Hands-On Experience**: Demonstrates proficiency in full-stack development, real-time systems, and user-centric design.


---
