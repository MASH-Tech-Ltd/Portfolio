import { useState, useEffect } from "react";
import {
  Briefcase,
  ArrowRight,
  MapPin,
  Clock,
  X,
  CheckCircle2,
  DollarSign,
  Award,
  Users,
  Calendar,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";


const jobs = [
  {
    id: "692b4de5815e0587d630707a",
    title: "SEO Specialist",
    type: ["Full-Time", "Contract"  ],
    location: "Dhaka / Remote",
    shift: "Day Shift",
    officeTime: "10:00 AM - 6:00 PM",
    salary: "BDT ৳20,000 - ৳35,000 / Month",
    experience: "Fresher / 1+ Year",
    department: "Marketing",
    deadline: "2026-05-25",
    teamSize: "4-person marketing team",
    desc: "Drive organic growth for our clients through advanced SEO strategies and data-driven content optimization.",
    vision:
      '"Help brands grow to the top of Google and stay there — through research, strategy, and relentless optimization."',
    culture:
      "Join our marketing team and help shape the digital footprints of exciting brands. We value data-driven decisions and provide you with industry-leading tools. Freshers are welcome — we train you from scratch.",
    highlights: [
      "Manage multiple client accounts",
      "Direct mentorship from senior team",
      "Hands-on with Ahrefs & GSC from Day 1",
      "Grow into Senior SEO role within 1 year",
    ],
    techStack: [
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "Google Search Console",
      "GA4",
      "Yoast SEO",
    ],
    responsibilities: [
      "Conduct keyword research and deep SERP competitive analysis",
      "Perform technical SEO audits and implement on-page improvements",
      "Build quality backlinks and develop long-term content strategies",
      "Track rankings, traffic, and conversions using GA4 and GSC",
      "Coordinate with content writers to align SEO with content calendar",
      "Stay current with Google algorithm updates and core web vitals",
    ],
    requirements: [
      "Basic understanding of SEO principles (freshers encouraged to apply)",
      "Familiarity with Google Search Console and WordPress",
      "Willingness to learn Ahrefs, SEMrush, and Screaming Frog",
      "Strong analytical and communication skills in English",
    ],
    niceToHave: [
      "Any SEO certification (Google, HubSpot, etc.)",
      "Experience with local or e-commerce SEO",
      "Basic HTML/CSS knowledge",
    ],
    benefits: [
      "Health Insurance",
      "Remote Work",
      "Flexible Hours",
      "Annual Bonus",
      "Tool Subscriptions Provided",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d63070b",
    title: "Senior Frontend Engineer",
    type: "Full-Time",
    location: "Remote",
    shift: "Day Shift",
    officeTime: "10:00 AM - 6:00 PM",
    salary: "BDT ৳70,000 - ৳1,00,000 / Month",
    experience: "3+ Years",
    department: "Engineering",
    deadline: "2026-06-15",
    teamSize: "8-person engineering squad",
    desc: "Build highly interactive, performant web applications using React and Next.js for our global clients.",
    vision:
      '"Craft pixel-perfect, highly responsive, and accessible user interfaces that delight our clients and their users."',
    culture:
      "Be part of an engineering culture that prizes clean code, robust component architecture, and continuous learning. We empower engineers to own technical decisions and grow into leadership roles.",
    highlights: [
      "Own the frontend architecture end-to-end",
      "Ship features to production from week 1",
      "Mentor junior developers",
      "Work with modern Figma-to-code workflows",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Vitest",
    ],
    responsibilities: [
      "Develop complex, high-performance features using React.js and Next.js",
      "Build and maintain reusable component libraries and design systems",
      "Translate Figma designs into pixel-perfect, fully accessible code",
      "Lead code reviews and enforce quality standards across the team",
      "Optimize Core Web Vitals (LCP, CLS, FID) for high traffic applications",
      "Collaborate with backend engineers to design and consume REST/GraphQL APIs",
    ],
    requirements: [
      "3+ years hands-on experience with React.js in production",
      "Solid understanding of Next.js, SSR, and App Router",
      "Proficiency in TypeScript and modern JavaScript (ES2022+)",
      "Experience with Tailwind CSS and responsive/accessible design",
    ],
    niceToHave: [
      "Experience with React Native or Flutter",
      "Familiarity with real-time UIs (WebSockets)",
      "Open source contributions on GitHub",
    ],
    benefits: [
      "Performance Bonus",
      "Health & Dental",
      "Flexible Hours",
      "Home Office Stipend",
      "BDT ৳20k Annual Learning Budget",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d63070c",
    title: "Backend Node.js Developer",
    type: "Full-Time",
    location: "Dhaka / Remote",
    shift: "Day Shift",
    officeTime: "10:00 AM - 6:00 PM",
    salary: "BDT ৳45,000 - ৳80,000 / Month",
    experience: "Fresher / 1+ Year",
    department: "Engineering",
    deadline: "2026-06-15",
    teamSize: "8-person engineering squad",
    desc: "Design and implement scalable REST APIs and microservices for high-traffic web applications.",
    vision:
      '"Architect the invisible backbone of our applications, ensuring maximum speed, scalability, and security."',
    culture:
      "We believe in clean code, thorough code reviews, and building systems that stand the test of time. Freshers with strong fundamentals and a passion for backend systems are warmly welcomed.",
    highlights: [
      "Build APIs serving thousands of users",
      "Work with Stripe, Firebase, and AWS",
      "Direct code reviews from senior engineers",
      "Clear path to mid/senior level in 12 months",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Socket.io",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    responsibilities: [
      "Design and build scalable RESTful APIs and integrate with frontend clients",
      "Implement authentication systems: JWT, OAuth2, and social logins",
      "Architect and optimize MongoDB schemas, indexes, and aggregation pipelines",
      "Integrate third-party services: Stripe, SendGrid, Firebase, and AWS S3",
      "Write unit and integration tests maintaining 80%+ coverage",
      "Participate in code reviews and improve backend architecture decisions",
    ],
    requirements: [
      "Good understanding of Node.js, Express.js, and async JavaScript",
      "Familiarity with MongoDB and REST API concepts (freshers OK)",
      "Basic understanding of JWT authentication and HTTP protocols",
      "Eagerness to learn Docker, CI/CD, and cloud deployment",
    ],
    niceToHave: [
      "Experience with GraphQL or tRPC",
      "Knowledge of Redis for caching",
      "Any personal or academic projects on GitHub",
    ],
    benefits: [
      "Health & Dental",
      "Remote Work",
      "BDT ৳15k Learning Budget/Year",
      "Annual Retreat",
      "Tool Allowance",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d63070d",
    title: "Senior UI/UX Designer",
    type: "Full-Time",
    location: "Remote",
    shift: "Day Shift",
    officeTime: "10:00 AM - 6:00 PM",
    salary: "BDT ৳60,000 - ৳90,000 / Month",
    experience: "3+ Years",
    department: "Design",
    deadline: "2026-06-20",
    teamSize: "3-person design team",
    desc: "Create stunning, user-centric designs and intuitive interfaces for web and mobile applications.",
    vision:
      '"Transform complex problems into elegant, intuitive, and highly accessible user experiences that delight our customers."',
    culture:
      "Design is at the heart of everything we do. You will have a huge impact on product direction, working closely with founders and engineers to craft pixel-perfect user journeys.",
    highlights: [
      "Own the full design process end-to-end",
      "Build and maintain our design system",
      "Conduct real user research sessions",
      "Present work directly to clients",
    ],
    techStack: [
      "Figma",
      "FigJam",
      "Adobe Illustrator",
      "Lottie / After Effects",
      "Maze (User Testing)",
      "Zeroheight",
    ],
    responsibilities: [
      "Lead end-to-end design process: discovery, wireframing, prototyping, and delivery",
      "Conduct user research, moderated interviews, and usability testing sessions",
      "Build and maintain a comprehensive, accessible design system in Figma",
      "Create micro-interaction prototypes and motion design for developers",
      "Collaborate directly with clients to gather requirements and present design solutions",
      "Establish design quality standards and perform design reviews",
    ],
    requirements: [
      "3+ years of UI/UX design for commercial digital products (web & mobile)",
      "Expert-level Figma skills including Auto Layout, Variables, and Dev Mode",
      "Strong portfolio demonstrating end-to-end product thinking and visual craft",
      "Solid understanding of WCAG accessibility guidelines and responsive design",
    ],
    niceToHave: [
      "Motion design skills (Lottie, After Effects)",
      "Experience with design tokens",
      "Basic HTML/CSS/React knowledge",
    ],
    benefits: [
      "Health Insurance",
      "Remote Work",
      "BDT ৳10k Creative Tools Budget",
      "Flexible Hours",
      "Conference Allowance",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d63070e",
    title: "Flutter Mobile Developer",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    shift: "Day Shift",
    officeTime: "10:00 AM - 6:00 PM",
    salary: "BDT ৳50,000 - ৳80,000 / Month",
    experience: "2+ Years",
    department: "Engineering",
    deadline: "2026-06-20",
    teamSize: "4-person mobile team",
    desc: "Build high-performance, cross-platform mobile applications for iOS and Android using Flutter.",
    vision:
      '"Bridge the gap between ideas and reality by delivering seamless, performant mobile experiences directly to users\' hands."',
    culture:
      "Mobile is the future. Join our dedicated app team building native-feeling experiences used by thousands daily, in a relaxed and creative environment.",
    highlights: [
      "Ship apps to 50k+ active users",
      "Work across iOS and Android simultaneously",
      "Own app architecture decisions",
      "Integrate with Firebase and REST APIs",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase (Firestore, Auth, FCM)",
      "Riverpod / BLoC",
      "REST APIs",
      "Stripe SDK",
      "GitHub Actions",
      "Fastlane",
    ],
    responsibilities: [
      "Design and build advanced, production-ready Flutter applications for iOS and Android",
      "Implement complex state management patterns using Riverpod or BLoC",
      "Integrate Firebase services: Firestore, Cloud Messaging, Auth, and Remote Config",
      "Connect to REST/GraphQL APIs and manage offline-first data with local storage",
      "Write widget tests and integration tests to maintain code quality",
      "Manage app deployments to the App Store and Google Play with CI/CD automation",
    ],
    requirements: [
      "3+ years overall software development and 2+ years specifically with Flutter/Dart",
      "Deep experience with at least one production app published to both stores",
      "Solid command of state management (Provider, Riverpod, or BLoC)",
      "Experience with Firebase suite, REST API integration, and local persistence",
    ],
    niceToHave: [
      "Experience with Flutter Web or Flutter Desktop",
      "Knowledge of native Android/iOS SDKs",
      "Fastlane and CI/CD pipeline experience",
    ],
    benefits: [
      "Health Insurance",
      "Annual Bonus",
      "Full Tech Setup Provided",
      "Paid Time Off",
      "Career Growth Path",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d63070f",
    title: "DevOps & Cloud Engineer",
    type: ["Full-Time", "Contract"],
    location: "Remote",
    shift: "Day/Night Roster",
    officeTime: "Flexible / On-Call",
    salary: "BDT ৳70,000 - ৳1,20,000 / Month",
    experience: "5+ Years",
    department: "Infrastructure",
    deadline: "2026-06-30",
    teamSize: "2-person infrastructure team",
    desc: "Manage and optimize our cloud infrastructure, deployment pipelines, and server security.",
    vision:
      '"Ensure 99.99% uptime, uncompromising security, and zero-friction deployments through automation and best practices."',
    culture:
      "Infrastructure as code is our mantra. You'll have full autonomy over AWS and containerization strategies, building blazingly fast CI/CD pipelines for the whole engineering team.",
    highlights: [
      "Architect multi-region AWS infra",
      "Build zero-downtime pipelines",
      "Implement compliance measures",
      "Full autonomy — no micromanagement",
    ],
    techStack: [
      "AWS",
      "Docker",
      "Kubernetes (EKS)",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Prometheus / Grafana",
    ],
    responsibilities: [
      "Architect, provision, and maintain cloud infrastructure on AWS using Terraform",
      "Build and optimize CI/CD pipelines with GitHub Actions for all services",
      "Harden servers with firewall rules, intrusion detection, SSL, and patching",
      "Monitor system health with Prometheus and Grafana; configure alerting rules",
      "Containerize services with Docker and orchestrate using Kubernetes/EKS",
      "Perform disaster recovery drills and maintain 99.9%+ uptime SLAs",
    ],
    requirements: [
      "Strong Linux/Unix administration and shell scripting background",
      "Hands-on Docker, Kubernetes, and Terraform experience in production",
      "Deep knowledge of AWS (EC2, S3, RDS, Lambda, IAM, VPC, CloudFront)",
      "Proficiency with CI/CD tools and scripting in Python or Bash",
    ],
    niceToHave: [
      "AWS Solutions Architect or DevOps certification",
      "Vault for secrets management",
      "Service mesh experience (Istio)",
    ],
    benefits: [
      "Fully Remote",
      "Flexible Schedule",
      "Performance Bonuses",
      "Certifications Reimbursed",
      "Contract-to-Hire Option",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d630710",
    title: "Sales & International Client Comm.",
    type: "Full-Time",
    location: "Dhaka",
    shift: "Night Shift",
    officeTime: "8:00 PM - 4:00 AM",
    salary: "BDT ৳30,000 - ৳50,000 / Month + Commission",
    experience: "Fresher / 1+ Year",
    department: "Sales",
    deadline: "2026-06-30",
    teamSize: "5-person sales team",
    desc: "Communicate with international clients, understand their needs, and close high-ticket service deals.",
    vision:
      '"Be the voice of MASH Tech Ltd globally. Build trust, understand business needs, and drive our international expansion."',
    culture:
      "We thrive on communication and building lasting relationships. You will work directly with our global clients, mastering negotiation and business development.",
    highlights: [
      "Generous commission structure",
      "Work with US/UK clients",
      "Fast-paced growth",
      "Direct coaching from Founders",
    ],
    techStack: [
      "HubSpot CRM",
      "Slack",
      "Zoom",
      "Google Workspace",
      "LinkedIn Sales Navigator",
    ],
    responsibilities: [
      "Communicate with international clients via video calls, emails, and chat",
      "Understand client business requirements and propose tailored digital solutions",
      "Maintain CRM records and manage a pipeline of prospective clients",
      "Negotiate project scopes, timelines, and budgets to close deals",
      "Coordinate with the technical team to ensure feasible project delivery",
      "Build long-term relationships for recurring business and referrals",
    ],
    requirements: [
      "Excellent, near-native English speaking and writing skills",
      "Willingness to work night shifts to overlap with US/UK time zones",
      "Strong interpersonal and negotiation skills (freshers welcome if communication is flawless)",
      "Basic understanding of web and mobile app development concepts",
    ],
    niceToHave: [
      "Previous B2B sales or international call center experience",
      "Familiarity with IT services",
      "Understanding of CRM software",
    ],
    benefits: [
      "High Commission on Sales",
      "Night Shift Allowance",
      "Transport Support",
      "Health Insurance",
      "Fast Promotions",
    ],
    link: "#",
  },
  {
    id: "64a2b4de5815e0587d630711",
    title: "Marketplace Manager (Fiverr/Upwork)",
    type: "Full-Time",
    location: "Dhaka / Remote",
    shift: "Roster Shift",
    officeTime: "Flexible / Rotating",
    salary: "BDT ৳25,000 - ৳45,000 / Month + Incentives",
    experience: "1+ Year",
    department: "Sales",
    deadline: "2026-06-30",
    teamSize: "3-person bidding team",
    desc: "Manage and grow our agency profiles on Upwork and Fiverr by winning high-value projects.",
    vision:
      '"Maximize our footprint on global freelance marketplaces by consistently securing top-tier projects and maintaining perfect ratings."',
    culture:
      "This role requires agility and a deep understanding of marketplace dynamics. We provide the portfolio and technical backing; you provide the strategy to win.",
    highlights: [
      "Manage top-rated agency profiles",
      "Direct impact on company revenue",
      "Incentives based on won projects",
      "Flexible roster shifts",
    ],
    techStack: ["Upwork", "Fiverr", "Trello", "Slack", "Grammarly"],
    responsibilities: [
      "Monitor Upwork and Fiverr for relevant project postings 24/7 (via roster)",
      "Write highly customized, compelling proposals/cover letters to win bids",
      "Communicate with prospective clients to gather initial requirements",
      "Optimize profile visibility, gig rankings, and portfolio presentation",
      "Ensure 100% response rate and maintain Top Rated/Level 2 status",
      "Collaborate with developers to accurately estimate project costs and timeframes",
    ],
    requirements: [
      "Proven experience managing and winning jobs on Upwork or Fiverr",
      "Exceptional written English communication skills",
      "Ability to understand technical requirements for web/app development",
      "Flexibility to work rostered shifts to ensure 24/7 marketplace coverage",
    ],
    niceToHave: [
      "Existing successful Upwork/Fiverr profile",
      "Experience with other platforms like Freelancer or Toptal",
      "Basic technical background",
    ],
    benefits: [
      "Success Incentives",
      "Flexible Shifts",
      "Remote Work Options",
      "Career Growth",
      "Internet Allowance",
    ],
    link: "#",
  },
];

export default function Career({ minimal = false }) {
  const [selected, setSelected] = useState(null);
  const [typeFilter, setTypeFilter] = useState("All");
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // Check for deep link path on mount (e.g. /career/:id/:title)
    const parts = window.location.pathname.split('/').filter(Boolean);
    if (parts[0] === 'career' && parts[1]) {
      const jobId = parts[1];
      const jobFromPath = jobs.find(j => j.id === jobId);
      if (jobFromPath) {
        setSelected(jobFromPath);
      }
    }
  }, []);

  const getJobUrl = (job) => {
    const slug = job.title.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    return `/career/${job.id}/${slug}`;
  };

  const isExpired = (deadline) => new Date(deadline) < new Date();

  const typeColors = {
    "Full-Time": { bg: "rgba(59,130,246,0.12)", color: "#3b82f6", border: "rgba(59,130,246,0.3)" },
    "Contract":  { bg: "rgba(245,158,11,0.12)", color: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  };

  const allJobs = minimal ? jobs.slice(0, 3) : jobs;
  const displayJobs = typeFilter === "All"
    ? allJobs
    : allJobs.filter(job => {
        const types = Array.isArray(job.type) ? job.type : [job.type];
        return types.includes(typeFilter);
      });

  return (
    <section id="career" className="section-alt" style={{ padding: "5rem 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            className="section-chip"
            style={{ marginBottom: 16, display: "inline-flex" }}
          >
            Careers
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem,4vw,2.75rem)",
              fontWeight: 800,
              marginTop: 12,
            }}
          >
            Join Our <span className="gradient-text">Growing Team</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "1rem",
              maxWidth: 600,
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            We're always looking for passionate, talented individuals to join us
            in building innovative digital solutions. Check out our open
            positions below.
          </p>
        </div>

        {/* Type Filter Pills — hidden on minimal/home view */}
        {!minimal && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {["All", "Full-Time", "Contract"].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: 50,
                  border: typeFilter === t
                    ? '1px solid #3b82f6'
                    : '1px solid var(--input-border)',
                  background: typeFilter === t
                    ? 'rgba(59,130,246,0.15)'
                    : 'var(--input-bg)',
                  color: typeFilter === t ? '#3b82f6' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  letterSpacing: '0.02em',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}

        {/* Jobs Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {displayJobs.map((job, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "2rem",
                transition:
                  "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelected(job);
                window.history.pushState(null, '', getJobUrl(job));
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(59,130,246,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(59,130,246,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3b82f6",
                  }}
                >
                  <Briefcase size={24} />
                </div>
                {/* Type badge(s) */}
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {(Array.isArray(job.type) ? job.type : [job.type]).map((t, ti) => {
                    const c = typeColors[t] || { bg: 'var(--input-bg)', color: 'var(--text-secondary)', border: 'var(--input-border)' };
                    return (
                      <span key={ti} style={{ background: c.bg, color: c.color, border: `1px solid ${c.border}`, padding: '0.25rem 0.7rem', borderRadius: 50, fontSize: '0.75rem', fontWeight: 700 }}>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                {job.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  marginBottom: "1.25rem",
                }}
              >
                <MapPin size={16} />
                <span>{job.location}</span>
                <span style={{ margin: "0 0.5rem" }}>•</span>
                <Clock size={16} />
                <span>Actively Hiring</span>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {job.desc}
              </p>

              {isExpired(job.deadline) ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#ef4444",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  Position Expired <X size={18} />
                </span>
              ) : (
                <a
                  href={job.link}
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#3b82f6",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {minimal && (
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link
              to="/career"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              See All Openings
            </Link>
          </div>
        )}
      </div>

      {/* Premium Career Modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--nav-bg)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            animation: "modalFadeIn 0.3s ease",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: "var(--card-bg)",
              color: "var(--text-primary)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 24,
              width: "100%",
              maxWidth: 850,
              position: "relative",
              boxShadow: "0 30px 60px rgba(59,130,246,0.15)",
              animation: "modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              maxHeight: "92vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Banner Header */}
            <div
              style={{
                padding: "2.5rem",
                background: `linear-gradient(120deg, rgba(59,130,246,0.15), rgba(59,130,246,0.02), transparent)`,
                borderBottom: "1px solid var(--input-border)",
                position: "relative",
              }}
            >
              <button
                onClick={() => {
                  setSelected(null);
                  window.history.pushState(null, '', '/career');
                }}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "var(--card-bg)",
                  border: "1px solid var(--input-border)",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  zIndex: 10,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--input-bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--card-bg)")
                }
              >
                <X size={20} />
              </button>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, #3b82f6, #2563eb)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    flexShrink: 0,
                    boxShadow: `0 12px 24px rgba(59,130,246,0.4)`,
                  }}
                >
                  <Briefcase size={32} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        background: "rgba(59,130,246,0.15)",
                        color: "#3b82f6",
                        padding: "0.35rem 1rem",
                        borderRadius: 50,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        border: "1px solid rgba(59,130,246,0.3)",
                      }}
                    >
                      {selected.department}
                    </span>
                    <span
                      style={{
                        background: "rgba(22,163,74,0.15)",
                        color: "#4ade80",
                        padding: "0.35rem 1rem",
                        borderRadius: 50,
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        border: "1px solid rgba(22,163,74,0.3)",
                      }}
                    >
                      {selected.type}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {selected.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginTop: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <MapPin size={18} /> {selected.location}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Clock size={18} /> {selected.shift} (
                      {selected.officeTime})
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid var(--input-border)",
                background: "var(--glass-bg)",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "1.25rem 2.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  borderRight: "1px solid var(--input-border)",
                }}
              >
                <DollarSign size={24} color="#4ade80" />
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    Salary Range
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {selected.salary}
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "1.25rem 2.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  borderRight: "1px solid var(--input-border)",
                }}
              >
                <Award size={24} color="#f59e0b" />
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    Experience
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                    }}
                  >
                    {selected.experience}
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 200px",
                  padding: "1.25rem 2.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Calendar
                  size={24}
                  color={isExpired(selected.deadline) ? "#ef4444" : "#3b82f6"}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontWeight: 600,
                    }}
                  >
                    Deadline
                  </div>
                  <div
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: isExpired(selected.deadline)
                        ? "#ef4444"
                        : "var(--text-primary)",
                    }}
                  >
                    {new Date(selected.deadline).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content (Scrollable) */}
            <div style={{ padding: "2.5rem", overflowY: "auto", flex: 1 }}>
              {/* Vision Section */}
              <div style={{ marginBottom: "3rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                    color: "#3b82f6",
                  }}
                >
                  <Users size={24} />
                  <h4
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: 0,
                    }}
                  >
                    The Role
                  </h4>
                </div>
                <div
                  style={{
                    borderLeft: "4px solid rgba(59,130,246,0.3)",
                    paddingLeft: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.2rem",
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                      lineHeight: 1.7,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {selected.vision}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--text-secondary)",
                      marginTop: "1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {selected.culture}
                  </p>

                  {selected.techStack && (
                    <div style={{ marginTop: "1.5rem" }}>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--text-primary)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Tech Stack
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {selected.techStack.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              background: "var(--input-bg)",
                              border: "1px solid var(--input-border)",
                              padding: "0.3rem 0.8rem",
                              borderRadius: 50,
                              fontSize: "0.8rem",
                              color: "var(--text-secondary)",
                              fontWeight: 600,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Grid: Responsibilities & Requirements */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "3rem",
                }}
              >
                {/* Responsibilities */}
                <div>
                  {selected.highlights && (
                    <div style={{ marginBottom: "2.5rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "1.25rem",
                          color: "#f43f5e",
                        }}
                      >
                        <Award size={22} />
                        <h4
                          style={{
                            fontSize: "1rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            margin: 0,
                          }}
                        >
                          Role Highlights
                        </h4>
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        }}
                      >
                        {selected.highlights.map((high, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "1rem",
                              color: "var(--text-primary)",
                              fontSize: "0.95rem",
                              fontWeight: 500,
                              lineHeight: 1.5,
                            }}
                          >
                            <div
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#f43f5e",
                                flexShrink: 0,
                                marginTop: 6,
                              }}
                            />
                            {high}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.5rem",
                      color: "#3b82f6",
                    }}
                  >
                    <Briefcase size={22} />
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        margin: 0,
                      }}
                    >
                      Responsibilities
                    </h4>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    {selected.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "1rem",
                          color: "var(--text-secondary)",
                          fontSize: "1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <div
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#3b82f6",
                            flexShrink: 0,
                            marginTop: 8,
                          }}
                        />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.5rem",
                      color: "#4ade80",
                    }}
                  >
                    <CheckCircle2 size={22} />
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        margin: 0,
                      }}
                    >
                      Requirements
                    </h4>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.25rem",
                    }}
                  >
                    {selected.requirements.map((req, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "1rem",
                          color: "var(--text-secondary)",
                          fontSize: "1rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle2
                          size={20}
                          color="#4ade80"
                          style={{ flexShrink: 0, marginTop: 2 }}
                        />
                        {req}
                      </li>
                    ))}
                  </ul>

                  {selected.niceToHave && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        background: "var(--input-bg)",
                        padding: "1rem",
                        borderRadius: 12,
                        border: "1px dashed var(--input-border)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "var(--text-secondary)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Nice to Have
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                        }}
                      >
                        {selected.niceToHave.map((nice, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.75rem",
                              color: "var(--text-secondary)",
                              fontSize: "0.9rem",
                              lineHeight: 1.5,
                            }}
                          >
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: "var(--text-secondary)",
                                flexShrink: 0,
                                marginTop: 6,
                              }}
                            />
                            {nice}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Benefits */}
                  <div style={{ marginTop: "2.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        marginBottom: "1.25rem",
                        color: "#f59e0b",
                      }}
                    >
                      <Award size={22} />
                      <h4
                        style={{
                          fontSize: "1rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          margin: 0,
                        }}
                      >
                        Benefits
                      </h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                      }}
                    >
                      {selected.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          style={{
                            background: "var(--input-bg)",
                            border: "1px solid var(--input-border)",
                            padding: "0.5rem 1rem",
                            borderRadius: 8,
                            fontSize: "0.9rem",
                            color: "var(--text-primary)",
                            fontWeight: 500,
                          }}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer (Fixed) */}
            <div
              style={{
                padding: "1.5rem 2.5rem",
                borderTop: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                display: "flex",
                gap: "1rem",
              }}
            >
              <button
                onClick={async () => {
                  const url = window.location.origin + getJobUrl(selected);
                  try {
                    await navigator.clipboard.writeText(url);
                    setToast(true);
                    setTimeout(() => setToast(false), 3000);
                  } catch (err) {
                    console.error('Failed to copy', err);
                  }
                }}
                title="Share this job"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "65px",
                  backgroundColor: "transparent",
                  color: "var(--text-primary)",
                  border: "2px solid var(--input-border)",
                  borderRadius: 14,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(59,130,246,0.1)";
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "var(--input-border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
              >
                <Share2 size={24} />
              </button>

              <a
                href={isExpired(selected.deadline) ? "#" : selected.link}
                onClick={(e) => e.preventDefault()}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  backgroundColor: isExpired(selected.deadline)
                    ? "var(--input-border)"
                    : "#3b82f6",
                  color: isExpired(selected.deadline)
                    ? "var(--text-secondary)"
                    : "#ffffff",
                  padding: "1.25rem 2rem",
                  borderRadius: 14,
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s",
                  boxShadow: isExpired(selected.deadline)
                    ? "none"
                    : "0 10px 20px rgba(59,130,246,0.3)",
                  cursor: isExpired(selected.deadline)
                    ? "not-allowed"
                    : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isExpired(selected.deadline)) {
                    e.currentTarget.style.backgroundColor = "#2563eb";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isExpired(selected.deadline)) {
                    e.currentTarget.style.backgroundColor = "#3b82f6";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {isExpired(selected.deadline)
                  ? "Position Expired"
                  : "Apply for this Position"}
                {isExpired(selected.deadline) ? (
                  <X size={22} />
                ) : (
                  <ArrowRight size={22} />
                )}
              </a>
            </div>
          </div>
        </div>
      )}
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'max-content',
          background: 'var(--card-bg)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          padding: '1rem 2rem',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 10000,
          animation: 'modalSlideUp 0.3s ease-out'
        }}>
          <CheckCircle2 color="#10b981" size={20} />
          <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>Link copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
