import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function Home() {
  return (
    <div>
      <h1>Interview AI</h1>
      <p>Welcome to the AI-powered interview assistant.</p>
    </div>
  );
}
