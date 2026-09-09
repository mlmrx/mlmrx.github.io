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

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function SectionHeading({
  number,
  title,
  note,
}: {
  number: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number" aria-hidden="true">
        {number}
      </span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <header className="masthead" id="top">
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#connect">Contact</a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="intro">
          <div className="hero-content">
            <h1 id="intro">
              <span>Love of</span> <span>Open Secure AI</span>
            </h1>
            <WolfScene />
          </div>
          <div className="hero-bottom">
            <span>Palo Alto, California</span>
            <a href="#work">
              A body of work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section
          id="work"
          className="section opening-note"
          aria-label="Introduction to the work"
        >
          <SectionHeading number="01" title="A note on the work" />
          <div className="section-content">
            <p>
              I build software, platforms and tools for a world in which people
              and intelligent agents work together.
            </p>
            <p>
              Much of that work begins with trust: who an agent is, what it may
              do, and how we know it did the right thing.
            </p>
          </div>
        </section>

        <section id="selected" className="section" aria-label="Selected work">
          <SectionHeading
            number="02"
            title="Selected work"
            note="Two explorations in trust and accountability."
          />
          <div className="projects">
            <article className="project">
              <div className="project-top">
                <span className="eyebrow">Identity & consent</span>
              </div>
              <h3>AgentHalo</h3>
              <p>
                Your agent should carry your trust with it. AgentHalo brings
                identity, memory, permissions and consent together across
                devices, with a record of what an agent was allowed to do—and
                what it did.
              </p>
              <div className="project-detail">
                <span>Purpose-bound permissions</span>
                <span>Consent receipts</span>
                <span>Signed proofs</span>
              </div>
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
              </div>
              <h3>Truthseek</h3>
              <p>
                A convincing answer is only a beginning. Truthseek puts an
                agent’s claims to the test, through an evaluation harness and a
                companion that brings that scrutiny into the editor.
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/mlmrx/truthseek-eval-harness"
                  className="text-link"
                >
                  Evaluation harness <Arrow />
                </a>
                <a
                  href="https://github.com/mlmrx/truthseek-vscode"
                  className="text-link"
                >
                  VS Code companion <Arrow />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section
          id="library"
          className="section library"
          aria-label="Public work catalogue"
        >
          <SectionHeading
            number="03"
            title="The full collection"
            note="Public platforms, tools and experiments."
          />
          <div className="work-index">
            {publicWork.map(([name, type, description, url]) => (
              <a className="work-row" key={url} href={url}>
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <span className="paper-meta">{type}</span>
                </div>
                <Arrow />
              </a>
            ))}
            <div className="collection-end">
              <a className="text-link" href="https://github.com/mlmrx">
                Follow the work on GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          id="private-work"
          className="section private-work"
          aria-label="Private work"
        >
          <SectionHeading
            number="04"
            title="Private work"
            note="A few words on work that remains private."
          />
          <div className="private-index">
            {privateWork.map(([title, description]) => (
              <article className="private-row" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="research"
          className="section research"
          aria-label="Research and standards"
        >
          <SectionHeading
            number="05"
            title="Research & standards"
            note="Co-authored papers and contributions to shared foundations."
          />
          <div className="paper-list">
            {papers.map(([id, title, description, date]) => (
              <a
                className="paper"
                key={id}
                href={'https://arxiv.org/abs/' + id}
              >
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
              <div>
                <span className="paper-meta">Reviewer & contributor</span>
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

        <section id="about" className="section about" aria-label="About Mahesh">
          <SectionHeading number="06" title="A little about me" />
          <div className="about-content">
            <p>
              I’m Mahesh. For more than twenty years, I’ve worked on AI and CRM
              platforms for governments and global enterprises, including
              Microsoft, PIMCO and the NYPD.
            </p>
            <p>
              Today, I lead Unify Dynamics and work on the foundations of a more
              trustworthy internet of AI agents. I contribute to MIT’s Project
              NANDA and OWASP AIVSS, and have invested in more than 100 startups
              across AI, automation and enterprise software.
            </p>
            <p>I live and work in Palo Alto, California.</p>
          </div>
        </section>

        <section
          id="writing"
          className="section writing"
          aria-label="Writing and talks"
        >
          <SectionHeading
            number="07"
            title="Writing & talks"
            note="Notes from the work."
          />
          <div className="writing-list">
            <a
              href="https://www.youtube.com/watch?v=RD9ANgSvSZE"
              className="writing-item"
            >
              <span className="paper-meta">Talk</span>
              <h3>Why a different DNS model for the agentic registry?</h3>
              <Arrow />
            </a>
            {essays.map(([title, description, url]) => (
              <a className="writing-item" href={url} key={url}>
                <span className="paper-meta">Essay</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section id="connect" className="section contact" aria-label="Contact">
          <SectionHeading number="08" title="Say hello" />
          <div className="section-content">
            <p>
              If our interests meet,
              <br />
              I’d be glad to hear from you.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/maheshlambe"
            >
              Connect on LinkedIn <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a href="#top" className="footer-name">
          Mahesh Lambe
        </a>
        <div>
          <a href="https://github.com/mlmrx">GitHub</a>
          <a href="https://medium.com/@maheshlambe">Medium</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
