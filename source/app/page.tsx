import WolfScene from './wolf-scene';
const papers = [
  [
    '2508.03101',
    'Using the NANDA Index Architecture in Practice: An Enterprise Perspective',
    'Discovery, capability verification and zero-trust collaboration for enterprise agents.',
    'Aug 2025',
  ],
  [
    '2508.03113',
    'NANDA Adaptive Resolver: Architecture for Dynamic Resolution of AI Agent Names',
    'The infrastructure behind a globally addressable internet of agents.',
    'Aug 2025',
  ],
  [
    '2507.14263',
    'Beyond DNS: Unlocking the Internet of AI Agents via the NANDA Index and Verified AgentFacts',
    'An agent index built around verifiable identity and signed AgentFacts.',
    'Jul 2025',
  ],
  [
    '2506.12003',
    'Upgrade or Switch: Do We Need a Next-Gen Trusted Architecture for the Internet of AI Agents?',
    'A foundational question about the architecture autonomous agents need.',
    'Jun 2025',
  ],
];
const essays = [
  [
    'Weaving the Quilt',
    'How Project NANDA could become the DNS of an agentic internet.',
    'https://medium.com/@maheshlambe/weaving-the-quilt-how-project-nanda-could-become-the-dns-of-an-agentic-internet-ba49107974b7',
  ],
  [
    'Under the Hood of the NANDA Index',
    'A technical deep dive into naming and discovery.',
    'https://medium.com/@maheshlambe/deep-dive-series-on-project-nanda-4c1d0eb3b332',
  ],
  [
    'Engineering AgentFacts',
    'Giving every agent a verifiable capability record.',
    'https://medium.com/@maheshlambe/deep-dive-project-nanda-building-the-agentic-web-part-2-engineering-agent-facts-ea5874d09572',
  ],
];
const publicWork = [
  [
    'SovereignAI',
    'Platform',
    'User-owned models, data and runtime for a more sovereign AI stack.',
    'https://github.com/mlmrx/SovereignAI',
    'JavaScript',
  ],
  [
    'FreeCRM',
    'Platform',
    'A free CRM built to stay useful, open and available to everyone.',
    'https://github.com/mlmrx/FreeCRM',
    'TypeScript',
  ],
  [
    'Enterprise Agent Simulation Assurance',
    'Platform',
    'Deterministic simulation, evidence and release assurance for enterprise agents.',
    'https://github.com/mlmrx/enterprise-agent-simulation-assurance-platform',
    'TypeScript',
  ],
  [
    'iswebmcp',
    'Web platform',
    'A public home for asking whether a site is ready for WebMCP.',
    'https://iswebmcp.com',
    'TypeScript',
  ],
  [
    'Lego Claw',
    'Platform',
    'Composable building blocks for agentic systems and workflows.',
    'https://github.com/mlmrx/lego-claw-platform',
    'TypeScript',
  ],
  [
    'Sovereign Suite',
    'Tool suite',
    'Local-first, self-hostable tools designed with privacy in mind.',
    'https://github.com/mlmrx/sovereign-suite',
    'TypeScript',
  ],
  [
    'OpenWood',
    'Creative platform',
    'An open-source agentic micro-drama production studio with evidence-gated releases.',
    'https://github.com/mlmrx/OpenWood',
    'TypeScript',
  ],
  [
    'Truthseek Eval Harness',
    'Tool',
    'An evaluation harness for testing the claims made by agents.',
    'https://github.com/mlmrx/truthseek-eval-harness',
    'Python',
  ],
  [
    'Truthseek VS Code',
    'Tool',
    'A companion for bringing claim evaluation into the editor.',
    'https://github.com/mlmrx/truthseek-vscode',
    'JavaScript',
  ],
  [
    'AgentHalo',
    'Trust layer',
    'Identity, memory, permissions and consent for an agent across devices.',
    'https://github.com/mlmrx/AgentHalo',
    'JavaScript',
  ],
  [
    'Laudable Proof',
    'Evidence tool',
    'A public experiment in verifiable proof and recognition.',
    'https://github.com/mlmrx/laudable-proof',
    'TypeScript',
  ],
  [
    'Awesome Skills Library',
    'Library',
    'A curated library for discovering reusable AI skills.',
    'https://github.com/mlmrx/awesome-skills-library',
    'Python',
  ],
  [
    'Google AI Studio Builds',
    'Experiments',
    'A working notebook of experiments built with Google AI Studio.',
    'https://github.com/mlmrx/GoogleAIStudioBuilds',
    'TypeScript',
  ],
  [
    'My Experiments',
    'Experiments',
    'An open record of prototypes, ideas and working explorations.',
    'https://github.com/mlmrx/MyExperiments',
    'Open work',
  ],
  [
    'BD',
    'Tool',
    'A small public software experiment from the wider lab.',
    'https://github.com/mlmrx/BD',
    'JavaScript',
  ],
];
const publicWorkSection = (
  <section id="library" className="section library">
    <div className="section-heading">
      <p className="eyebrow">Public work index</p>
      <h2>
        Everything in the
        <br />
        <em>open.</em>
      </h2>
      <p>
          Platforms, tools and experiments built in public.
          <br />
          Every entry links directly to the work.
      </p>
    </div>
    <div className="work-index">
      {publicWork.map(([name, type, description, url, language], i) => (
        <a className="work-row" key={url} href={url}>
          <span className="index">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <span className="paper-meta">
              {type} · {language}
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <Arrow />
        </a>
      ))}
    </div>
  </section>
);
const privateWork = [
  [
    'Verified revenue infrastructure',
    'Private systems for making revenue operations more trustworthy, traceable and easier to verify.',
  ],
  [
    'Sovereign AI systems',
    'Private product work around user-owned models, data and runtime infrastructure.',
  ],
  [
    'Enterprise agent control planes',
    'Private infrastructure for agent policy, permissions, deployment and operational control.',
  ],
  [
    'Evidence systems',
    'Private tools for testing claims, preserving provenance and creating audit-ready records.',
  ],
  [
    'Agentic commerce',
    'Private protocol and product work for safer transactions between people, agents and businesses.',
  ],
];
const privateWorkSection = (
  <section className="section private-work">
    <div className="section-heading">
      <p className="eyebrow">Private work</p>
      <h2>
        Some work stays
        <br />
        <em>under seal.</em>
      </h2>
      <p>
        Titles and direction only. The details remain private until the work is
        ready to ship.
      </p>
    </div>
    <div className="private-index">
      {privateWork.map(([title, description], i) => (
        <div className="private-row" key={title}>
          <span className="index">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <span className="private-mark" aria-label="Private work">
            Private
          </span>
        </div>
      ))}
    </div>
  </section>
);
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}
export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="masthead" id="top">
        <a href="#top" className="wordmark" aria-label="Mahesh Lambe home">
          ml<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#connect">
            Connect <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="intro">
          <div className="hero-content">
            <p className="eyebrow">Mahesh Lambe · Builder & founder</p>
            <h1 id="intro">
              Intelligence is everywhere.
              <br />
              <em>Trust is what we build.</em>
            </h1>
            <p className="intro">
              I build the systems that help AI agents earn our trust.
              <br className="desktop-break" /> Founder of Unify Dynamics.
              Contributor to MIT Project NANDA.
            </p>
            <a className="text-link" href="#work">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
            <WolfScene />
          </div>
          <div className="hero-bottom">
            <span>Palo Alto, California</span>
            <span>Independent spirit. Shared progress.</span>
            <a href="#work" aria-label="Scroll to selected work">
              ↓
            </a>
          </div>
        </section>
        <section id="work" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 / Selected work</p>
            <h2>Ideas, made real.</h2>
            <p>
              Identity, consent and evidence.
              <br />
              The foundations for agents we can depend on.
            </p>
          </div>
          <div className="projects">
            <article className="project">
              <div className="project-top">
                <span className="eyebrow">Trust & identity</span>
                <span className="project-number">01</span>
              </div>
              <h3>
                AgentHalo<span className="dot">.</span>
              </h3>
              <p>
                A personal trust field for AI agents. Memory, identity,
                permissions and consent that travel with you, across your
                devices.
              </p>
              <ul>
                <li>Purpose-bound delegation and consent receipts</li>
                <li>An append-only record of agent actions</li>
                <li>Signed proofs with HaloProof</li>
              </ul>
              <a
                href="https://github.com/mlmrx/AgentHalo"
                className="text-link"
              >
                Explore AgentHalo <Arrow />
              </a>
            </article>
            <article className="project">
              <div className="project-top">
                <span className="eyebrow">Evaluation & evidence</span>
                <span className="project-number">02</span>
              </div>
              <h3>
                Truthseek<span className="dot">.</span>
              </h3>
              <p>
                If an agent makes a claim, the claim gets tested. An evaluation
                harness and editor companion for putting agent output under
                scrutiny.
              </p>
              <div className="project-quote">
                From plausible answers
                <br />
                <em>to tested claims.</em>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/mlmrx/truthseek-eval-harness"
                  className="text-link"
                >
                  Explore Truthseek <Arrow />
                </a>
                <a
                  href="https://github.com/mlmrx/truthseek-vscode"
                  className="small-link"
                >
                  VS Code companion <Arrow />
                </a>
              </div>
            </article>
          </div>
          <a className="section-end" href="https://github.com/mlmrx">
            More work on GitHub <Arrow />
          </a>
        </section>
        {publicWorkSection}
        {privateWorkSection}
        <section id="research" className="section research">
          <div className="section-heading">
            <p className="eyebrow">02 / Research & standards</p>
            <h2>
              A foundation worth
              <br />
              <em>building on.</em>
            </h2>
            <p>
              Co-authored research on naming, discovery and trust for the
              internet of AI agents.
            </p>
          </div>
          <div className="paper-list">
            {papers.map(([id, title, description, date], i) => (
              <a
                className="paper"
                key={id}
                href={'https://arxiv.org/abs/' + id}
              >
                <span className="index">0{i + 1}</span>
                <div>
                  <span className="paper-meta">
                    {date} · arXiv {id}
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Arrow />
              </a>
            ))}
            <a className="paper" href="https://aivss.owasp.org/">
              <span className="index">05</span>
              <div>
                <span className="paper-meta">
                  Standard · Reviewer & contributor
                </span>
                <h3>OWASP AI Vulnerability Scoring System</h3>
                <p>
                  A framework for assessing vulnerabilities in AI and agentic
                  systems.
                </p>
              </div>
              <Arrow />
            </a>
          </div>
        </section>
        <section id="about" className="section about">
          <p className="eyebrow">03 / A little context</p>
          <div className="about-content">
            <h2>
              Two decades of building.
              <br />
              <em>Still asking what’s next.</em>
            </h2>
            <p>
              I’m Mahesh, founder and CEO of Unify Dynamics. For more than
              twenty years, I’ve worked on AI and CRM platforms for governments
              and global enterprises, including Microsoft, PIMCO and the NYPD.
            </p>
            <p>
              Today, my work centres on the trust layer for the internet of AI
              agents: how they identify themselves, receive permission and
              remain accountable. I contribute to MIT’s Project NANDA and OWASP
              AIVSS, and have invested in more than 100 startups across AI,
              automation and enterprise software.
            </p>
            <div className="focus">
              <span>Trust & identity</span>
              <span>Agentic commerce</span>
              <span>Standards & security</span>
            </div>
            <blockquote>
              “Your agent should live where your trust lives, not where your
              screen lives.”<cite>— AgentHalo</cite>
            </blockquote>
          </div>
        </section>
        <section className="section writing" id="writing">
          <div className="section-heading">
            <p className="eyebrow">04 / Writing & talks</p>
            <h2>Thinking in the open.</h2>
          </div>
          <div className="writing-list">
            <a
              href="https://www.youtube.com/watch?v=RD9ANgSvSZE"
              className="writing-item"
            >
              <span className="paper-meta">Watch / Talk</span>
              <h3>Why a different DNS model for the agentic registry?</h3>
              <Arrow />
            </a>
            {essays.map(([title, desc, url]) => (
              <a className="writing-item" href={url} key={url}>
                <span className="paper-meta">Read / Essay</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Arrow />
              </a>
            ))}
          </div>
        </section>
        <section className="contact" id="connect">
          <p className="eyebrow">Good work begins with a conversation.</p>
          <h2>
            Let’s build
            <br />
            <em>something that matters.</em>
          </h2>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/maheshlambe"
          >
            Connect on LinkedIn <Arrow />
          </a>
        </section>
      </main>
      <footer>
        <a href="#top" className="footer-name">
          Mahesh Lambe
        </a>
        <p>Palo Alto, California</p>
        <div>
          <a href="https://github.com/mlmrx">
            GitHub <Arrow />
          </a>
          <a href="https://medium.com/@maheshlambe">
            Medium <Arrow />
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
