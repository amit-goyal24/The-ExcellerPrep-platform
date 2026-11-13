"use client";
import Link from "next/link";
import {
  Layers,
  Target,
  Code2,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Cpu,
  FileCode,
  Layout,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      member: "Member 1",
      role: "Application Shell & Sidebar Lead",
      tasks: "Authored layout.tsx, implemented sidebar navigation, ExcellerPrep branding, cohort badge, and global styling tokens.",
    },
    {
      member: "Member 2",
      role: "Dashboard Hero & Welcome Section Lead",
      tasks: "Designed the welcome hero banner, dynamic readiness progress gauge (78/100), and quick action CTA buttons.",
    },
    {
      member: "Member 3",
      role: "Dashboard Information Metrics Architect",
      tasks: "Implemented the 4 primary stat cards (Readiness, Grammar questions, Streak, Placement track) and quick navigation cards.",
    },
    {
      member: "Member 4",
      role: "Communication Grammar Assessment Lead",
      tasks: "Engineered communication/page.tsx, authored the 5 placement grammar MCQs, options state, and question rendering.",
    },
    {
      member: "Member 5",
      role: "Evaluation Engine & About Page Lead",
      tasks: "Implemented the interactive quiz scoring algorithm, correct/incorrect feedback badges, and authored about/page.tsx.",
    },
  ];

  return (
    <>
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <div className="eyebrow">PROJECT DOCUMENTATION</div>
          <h1>About ExcellerPrep</h1>
          <p>
            Capgemini 2027 Campus Recruitment Assessment & Preparation Simulation Suite
          </p>
        </div>
        <Link href="/" className="button outline small">
          Back to Dashboard
        </Link>
      </div>

      {/* Project Introduction */}
      <section className="panel" style={{ marginBottom: "20px" }}>
        <div className="panel-heading">
          <div>
            <span className="tag blue" style={{ marginBottom: "8px", display: "inline-block" }}>
              PROJECT OVERVIEW
            </span>
            <h2>Project Introduction</h2>
          </div>
        </div>
        <p style={{ lineHeight: 1.7, color: "var(--text)" }}>
          <strong>ExcellerPrep</strong> is an independent preparation and assessment simulation platform engineered for engineering undergraduates preparing for the <strong>Capgemini Exceller 2027</strong> nationwide placement drive. 
        </p>
        <p style={{ lineHeight: 1.7, color: "var(--muted)" }}>
          Campus recruitment evaluations test multi-disciplinary competencies: Verbal Communication & Grammar, Technical Domain MCQs, Code Debugging, Algorithmic Coding, and Behavioral Interviews. ExcellerPrep unifies these disparate preparation tracks into an integrated, accessible web application.
        </p>
      </section>

      {/* Objectives */}
      <section className="panel" style={{ marginBottom: "20px" }}>
        <div className="panel-heading">
          <div>
            <span className="tag green" style={{ marginBottom: "8px", display: "inline-block" }}>
              PROJECT OBJECTIVES
            </span>
            <h2>Key Platform Objectives</h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginTop: "14px" }}>
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", padding: "16px" }}>
            <Target size={22} style={{ color: "var(--blue)", marginBottom: "8px" }} />
            <strong style={{ display: "block", marginBottom: "6px", fontSize: "var(--font-ui)" }}>
              1. Responsive Frontend Architecture
            </strong>
            <p style={{ margin: 0, fontSize: "var(--font-small)", color: "var(--muted)", lineHeight: 1.6 }}>
              Deliver a lightweight, zero-latency user interface adhering to clean component separation, accessible typography, and consistent brand tokens.
            </p>
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", padding: "16px" }}>
            <CheckCircle size={22} style={{ color: "var(--green)", marginBottom: "8px" }} />
            <strong style={{ display: "block", marginBottom: "6px", fontSize: "var(--font-ui)" }}>
              2. Interactive Grammar Assessment
            </strong>
            <p style={{ margin: 0, fontSize: "var(--font-small)", color: "var(--muted)", lineHeight: 1.6 }}>
              Provide real-time evaluation of 5 core business grammar MCQs with immediate scoring, rationale reveal, and retake capabilities.
            </p>
          </div>

          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", padding: "16px" }}>
            <Users size={22} style={{ color: "var(--blue)", marginBottom: "8px" }} />
            <strong style={{ display: "block", marginBottom: "6px", fontSize: "var(--font-ui)" }}>
              3. Beginner-Friendly 5-Member Team Division
            </strong>
            <p style={{ margin: 0, fontSize: "var(--font-small)", color: "var(--muted)", lineHeight: 1.6 }}>
              Ensure every team member has a dedicated, easy-to-explain frontend component without merge conflicts or complex backend dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="panel" style={{ marginBottom: "20px" }}>
        <div className="panel-heading">
          <div>
            <span className="tag blue" style={{ marginBottom: "8px", display: "inline-block" }}>
              TECH STACK
            </span>
            <h2>Technologies Used</h2>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginTop: "12px" }}>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "14px", background: "var(--bg)" }}>
            <strong style={{ display: "block", color: "var(--blue)" }}>Next.js 16.4 (App Router)</strong>
            <small style={{ color: "var(--muted)" }}>Modern React SSR/CSR framework with Turbopack compilation</small>
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "14px", background: "var(--bg)" }}>
            <strong style={{ display: "block", color: "var(--blue)" }}>React 19 & TypeScript</strong>
            <small style={{ color: "var(--muted)" }}>Strict type-safe interfaces, state hooks, and component lifecycle</small>
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "14px", background: "var(--bg)" }}>
            <strong style={{ display: "block", color: "var(--blue)" }}>Tailwind CSS 4</strong>
            <small style={{ color: "var(--muted)" }}>Modern utility styling and CSS variables for the Exceller theme</small>
          </div>
          <div style={{ border: "1px solid var(--border)", borderRadius: "8px", padding: "14px", background: "var(--bg)" }}>
            <strong style={{ display: "block", color: "var(--blue)" }}>Lucide React</strong>
            <small style={{ color: "var(--muted)" }}>Crisp vector iconography aligned with the desktop design scale</small>
          </div>
        </div>
      </section>

      {/* Team Distribution Table */}
      <section className="panel">
        <div className="panel-heading">
          <div>
            <span className="tag amber" style={{ marginBottom: "8px", display: "inline-block" }}>
              COLLABORATIVE EFFORT
            </span>
            <h2>5-Member Work Distribution</h2>
            <p>Component-level breakdown designed for beginner team members</p>
          </div>
        </div>

        <div style={{ overflowX: "auto", marginTop: "12px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "var(--font-small)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--border)", color: "var(--text)" }}>
                <th style={{ padding: "10px 12px" }}>Member</th>
                <th style={{ padding: "10px 12px" }}>Assigned Responsibility</th>
                <th style={{ padding: "10px 12px" }}>Component & Deliverables</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((m, idx) => (
                <tr key={idx} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "12px", fontWeight: "bold", color: "var(--blue)" }}>
                    {m.member}
                  </td>
                  <td style={{ padding: "12px", fontWeight: 600, color: "var(--text)" }}>
                    {m.role}
                  </td>
                  <td style={{ padding: "12px", color: "var(--muted)", lineHeight: 1.5 }}>
                    {m.tasks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

