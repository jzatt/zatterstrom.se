import React, { useEffect } from "react";
import NTyped from "native-typed";

const App = () => {
  const connect = [
    {
      name: "LinkedIn",
      url: "https://se.linkedin.com/in/zatterstrom",
      icon: "fab fa-linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/jzatt",
      icon: "fab fa-github-square",
    },
  ];

  const initTyped = () => {
    new NTyped(document.querySelector("#typed"), {
      strings: [
        "Frontend",
        "*.{js, ts}",
        "React, Vue, WordPress",
        "*.{css, scss}",
        "*.{sketch, psd, ai, indd}",
      ],
      typeSpeed: 50,
      backDelay: 1000,
      deleteSpeed: 15,
      classes: {
        cursor: "typed-cursor",
      },
    });
  };

  useEffect(() => {
    initTyped();
  }, []);

  return (
    <main className="container">
      <div className="scene">
        <div className="scene-text">
          <h1 className="title">Johan Zätterström</h1>
          <h3 className="subtitle">
            <span id="typed" />
          </h3>
        </div>
      </div>
      <div className="footer">
        {connect.map((social) => (
          <a key={social.name} title={social.name} href={social.url}>
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </main>
  );
};

export default App;
