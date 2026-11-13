"use client";
import Link from "next/link";
import {
  MessageSquare,
  Info,
  ArrowRight,
  Target,
  Flame,
  Award,
  BookOpen,
} from "lucide-react";

export default function Dashboard() {
  return (
    <>
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <div className="eyebrow">YOUR PREPARATION WORKSPACE</div>
          <h1>Ready for your next chapter?</h1>
          <p>ExcellerPrep – Capgemini 2027 Preparation Platform</p>
        </div>
      </div>

      {/* Hero Welcome Banner */}
      <section className="hero">
        <div className="hero-copy">
          <div className="hero-label">
            <span className="live-dot" />
            CAPGEMINI EXCELLER 2027
          </div>
          <h2>
            Preparation with purpose.
            <br />
            <span>Progress you can measure.</span>
          </h2>
          <p>
            Welcome to the comprehensive placement training suite of ExcellerPrep.
            <br />
            A focused platform demonstrating core technical modules, communication evaluation, and clean UI architecture.
          </p>
          <div className="button-row">
            <Link href="/communication" className="button secondary">
              Start Communication Practice
              <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="button outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>
              About Project
            </Link>
          </div>
          <span className="hero-foot">
            YOUR GOAL. YOUR PACE. YOUR NEXT OPPORTUNITY.
          </span>
        </div>

        {/* Circular Readiness Gauge */}
        <div className="readiness">
          <div
            className="readiness-ring"
            style={{
              background: "conic-gradient(#9fcbff 280deg, #335078 0deg)",
            }}
          >
            <div>
              <strong>
                78<span>/100</span>
              </strong>
              <small>READINESS SCORE</small>
            </div>
          </div>
          <div className="readiness-label">
            <span /> Assessment Ready
            <small>Internal preparation benchmark</small>
          </div>
        </div>
        <div className="hero-decoration" />
      </section>

      {/* 4 Basic Information Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-top">
            <span>Communication Mastery</span>
            <div><MessageSquare size={19} /></div>
          </div>
          <strong className="stat-number">5 MCQs</strong>
          <small>Grammar evaluation module active</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Readiness Benchmark</span>
            <div><Target size={19} /></div>
          </div>
          <strong className="stat-number">78%</strong>
          <small>Candidate qualification threshold: 70%</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Practice Streak</span>
            <div><Flame size={19} /></div>
          </div>
          <strong className="stat-number">5 Days</strong>
          <small>Daily consistency builds confidence</small>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <span>Placement Readiness</span>
            <div><Award size={19} /></div>
          </div>
          <strong className="stat-number">Active Track</strong>
          <small>Capgemini Exceller • 5 team members</small>
        </div>
      </div>

      {/* Quick Navigation Panel */}
      <section className="panel" style={{ marginTop: "24px" }}>
        <div className="panel-heading">
          <div>
            <h3>Quick Actions</h3>
            <p>Select a section to explore your preparation path</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px", marginTop: "12px" }}>
          <Link
            href="/communication"
            className="panel"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              background: "var(--bg)",
            }}
          >
            <div>
              <strong style={{ display: "block", fontSize: "var(--font-ui)", color: "var(--blue)" }}>
                Grammar Communication Practice &rarr;
              </strong>
              <small style={{ color: "var(--muted)" }}>5 Interactive MCQs with immediate score calculation</small>
            </div>
            <MessageSquare size={24} style={{ color: "var(--blue)" }} />
          </Link>

          <Link
            href="/about"
            className="panel"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              textDecoration: "none",
              color: "inherit",
              background: "var(--bg)",
            }}
          >
            <div>
              <strong style={{ display: "block", fontSize: "var(--font-ui)", color: "var(--text)" }}>
                About Project & Team &rarr;
              </strong>
              <small style={{ color: "var(--muted)" }}>Objectives, technologies used, and 5-member work distribution</small>
            </div>
            <Info size={24} style={{ color: "var(--muted)" }} />
          </Link>
        </div>
      </section>
    </>
  );
}

