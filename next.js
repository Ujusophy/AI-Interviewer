// Next.js project structure
// Paste this in your GitHub repository

// 1️⃣ package.json
{
  "name": "interview-ai",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "aws-amplify": "latest",
    "@aws-amplify/ui-react": "latest"
  }
}

// 2️⃣ pages/index.tsx
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default function Home() {
  return (
    <div>
      <h1>Interview AI</h1>
      <p>Welcome to the AI-powered interview assistant.</p>
    </div>
  );
}

// 3️⃣ aws-exports.js (Placeholder for now)
const awsconfig = {};
export default awsconfig;

// 4️⃣ .gitignore
node_modules
.next
out
