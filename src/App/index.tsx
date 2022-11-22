import { Linkedin, Github } from 'lucide-react';
import * as classes from './index.module.scss';

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
    <main className={classes.app}>
      <div>
        <h1>
          Johan <span>Zätterström</span>
        </h1>
        <div className={classes.social}>
          {connect.map((social) => (
            <a key={social.name} title={social.name} href={social.url}>
              <social.Icon size={52} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export { App };
