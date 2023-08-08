import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage: NextPage = () => {

  const { push } = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      username,
      password
    }
    axios.post("/api/login/", user).then((e) => {
      push("/admin");
    })

  };

  return (
    <section className="bg-dark max-height">
      <div className='container bg-dark'>
        <h1>Page de connexion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nom utilisateur:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Mot de passe:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;