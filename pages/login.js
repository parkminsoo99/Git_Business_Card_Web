import { signIn } from 'next-auth/client';

export default function LoginPage() {
  const handleLogin = () => {
    signIn('github');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Sign in with GitHub</button>
    </div>
  );
}
