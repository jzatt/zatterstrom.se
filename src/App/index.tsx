import { Linkedin, Github } from 'lucide-react';

const App = () => {
  const connect = [
    {
      name: 'LinkedIn',
      url: 'https://se.linkedin.com/in/zatterstrom',
      Icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jzatt',
      Icon: Github,
    },
  ];

  return (
    <main className="App">
      <h1>Johan Zätterström</h1>
      <div>
        {connect.map((social) => (
          <a key={social.name} title={social.name} href={social.url}>
            <social.Icon />
          </a>
        ))}
      </div>
    </main>
  );
};

export { App };
