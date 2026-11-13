"use client";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  LayoutDashboard,
  MessageSquare,
  Info,
  ChevronDown,
} from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>ExcellerPrep — Capgemini 2027 Preparation Platform</title>
        <meta
          name="description"
          content="ExcellerPrep - Capgemini 2027 Campus Placement Preparation Platform"
        />
      </head>
      <body>
        <div className="app-shell">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <Link className="brand" href="/">
              <span className="brand-mark">
                <Layers size={23} />
              </span>
              <span>
                exceller<span className="brand-light">prep</span>
                <small>YOUR NEXT CHAPTER</small>
              </span>
            </Link>

            <div className="cohort">
              <span className="cohort-icon">27</span>
              <div>
                Capgemini Exceller<small>Class of 2027</small>
              </div>
              <ChevronDown size={14} />
            </div>

            <div className="nav-label">WORKSPACE</div>
            <nav>
              <Link
                className={`nav-item ${pathname === "/" ? "active" : ""}`}
                href="/"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Link
                className={`nav-item ${pathname === "/communication" ? "active" : ""}`}
                href="/communication"
              >
                <MessageSquare size={18} />
                Communication
              </Link>
              <Link
                className={`nav-item ${pathname === "/about" ? "active" : ""}`}
                href="/about"
              >
                <Info size={18} />
                About Project
              </Link>
            </nav>

            <div className="sidebar-bottom">
              <div className="prep-note">
                <strong>Placement Edition</strong>
                <p>Major Project Evaluation • 5 Team Members</p>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="main-shell">
            <main className="content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

