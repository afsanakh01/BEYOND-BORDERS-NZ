import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Team | Beyond Borders NZ",
  description: "The people behind your journey at Beyond Borders NZ.",
};

const team = [
  {
    emoji: "🎖️",
    name: "Ayyub Khan",
    role: "Founder & Education Consultant",
    location: "India",
    bio: [
      "Some people spend their lives in service — and Ayyub Khan is one of them. A proud Indian Air Force Officer, Ayyub dedicated decades of his life to protecting and serving his nation with discipline, honour, and unwavering commitment. But his desire to serve didn't stop when he stepped off the tarmac.",
      "Today, he channels that same dedication into something deeply personal — shaping the futures of young students and guiding them toward life-changing opportunities abroad. With a calm presence that instantly puts students and parents at ease, and a gentle, kind-hearted nature that makes every conversation feel like one with a trusted mentor, Ayyub brings a rare combination of structure and warmth to the world of overseas education consultancy.",
      "He doesn't just place students — he invests in their potential, walks with them through every step of the process, and celebrates their success as his own. If you're looking for someone who truly cares, you've found him.",
    ],
  },
  {
    emoji: "💻",
    name: "Apsana Khan",
    role: "Web Developer & Documentation Specialist",
    location: "New Zealand",
    bio: [
      "Behind every smooth application process is someone making sure every detail is perfectly in place — and that's Apsana Khan. A highly educated, career-driven professional based in New Zealand, Apsana brings both technical expertise and meticulous attention to detail to the Beyond Borders NZ team.",
      "As a skilled Web Developer, she understands the digital landscape that today's students navigate — and uses that knowledge to ensure our students are well-supported from the moment they land in NZ. But Apsana's role goes far beyond code. She is the backbone of our documentation process — handling everything from paperwork and verifications to ensuring that no student ever feels lost in the administrative maze of studying abroad.",
      "Her career-oriented mindset, combined with her on-ground presence in New Zealand, makes her an invaluable bridge between our students' dreams and their reality. When our students arrive in New Zealand, they don't just find a new country — they find Apsana in their corner.",
    ],
  },
];

export default function TeamPage() {
  return (
    <main style={{ background: "#0c0c0c", minHeight: "100vh" }}>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.5rem 4rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(12,12,12,0.92)",
        borderBottom: "1px solid rgba(200,169,110,0.1)",
        backdropFilter: "blur(12px)",
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            border: "1px solid #C8A96E",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
            color: "#C8A96E", fontWeight: 600,
          }}>B</div>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
            fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#FAFAF8",
          }}>Beyond Borders NZ</span>
        </Link>
        <Link href="/" style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.68rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#C8A96E", textDecoration: "none",
          border: "1px solid rgba(200,169,110,0.4)",
          padding: "0.55rem 1.4rem",
        }}>← Back to Home</Link>
      </nav>

      <div style={{
        paddingTop: "12rem", paddingBottom: "6rem",
        paddingLeft: "4rem", paddingRight: "4rem",
        maxWidth: 900, margin: "0 auto", textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
          letterSpacing: "0.4em", textTransform: "uppercase",
          color: "#C8A96E", marginBottom: "1.2rem",
        }}>Beyond Borders NZ</p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem,6vw,6rem)", fontWeight: 300,
          lineHeight: 1.05, color: "#FAFAF8", marginBottom: "2rem",
        }}>
          Meet Our <em style={{ color: "#C8A96E" }}>Team</em>
        </h1>

        <div style={{ width: 40, height: 1, background: "#C8A96E", margin: "0 auto 2.5rem" }} />

        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "1.05rem",
          fontWeight: 300, lineHeight: 1.9,
          color: "rgba(250,250,248,0.6)", maxWidth: 680, margin: "0 auto",
        }}>
          The People Behind Your Journey. At Beyond Borders NZ, we believe that the right guidance
          can change a life. Our team is built on trust, experience, and a genuine passion for
          helping students find their place in the world.
        </p>
      </div>

      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "0 4rem 10rem",
        display: "flex", flexDirection: "column", gap: "4rem",
      }}>
        {team.map((member, i) => (
          <div key={i} style={{
            border: "1px solid rgba(200,169,110,0.15)",
            padding: "4rem", position: "relative",
            background: "rgba(200,169,110,0.02)",
          }}>
            <div style={{
              position: "absolute", top: 0, left: "4rem",
              width: 60, height: 2, background: "#C8A96E",
            }} />
            <div style={{ marginBottom: "2.5rem" }}>
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>{member.emoji}</span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400,
                color: "#FAFAF8", marginBottom: "0.4rem", lineHeight: 1.1,
              }}>{member.name}</h2>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
                letterSpacing: "0.25em", textTransform: "uppercase",
                color: "#C8A96E", marginBottom: "0.3rem",
              }}>{member.role}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: "0.65rem",
                letterSpacing: "0.15em", color: "rgba(250,250,248,0.35)",
              }}>📍 {member.location}</p>
            </div>
            <div style={{
              borderTop: "1px solid rgba(200,169,110,0.1)",
              paddingTop: "2rem",
              display: "flex", flexDirection: "column", gap: "1.4rem",
            }}>
              {member.bio.map((para, j) => (
                <p key={j} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem", fontWeight: 300,
                  lineHeight: 1.9, color: "rgba(250,250,248,0.65)", maxWidth: 820,
                }}>{para}</p>
              ))}
            </div>
          </div>
        ))}

        <div style={{
          textAlign: "center", padding: "4rem",
          border: "1px solid rgba(200,169,110,0.15)",
          background: "rgba(200,169,110,0.03)",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 300,
            lineHeight: 1.6, color: "#FAFAF8", fontStyle: "italic",
            maxWidth: 700, margin: "0 auto 2rem",
          }}>
            "Together, this team brings military discipline, technical excellence, and heartfelt
            commitment to every student's journey."
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
            letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8A96E",
          }}>At Beyond Borders NZ — you're not just a client, you're family.</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/#contact" style={{
            fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#0c0c0c", background: "#C8A96E",
            padding: "1rem 2.8rem", textDecoration: "none",
            display: "inline-block", border: "1px solid #C8A96E",
          }}>Book a Free Consultation</Link>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(200,169,110,0.1)",
        padding: "2rem 4rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem",
          color: "rgba(250,250,248,0.3)", letterSpacing: "0.1em",
        }}>© 2025 Beyond Borders NZ</span>
        <Link href="/" style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.62rem",
          letterSpacing: "0.2em", color: "#C8A96E",
          textDecoration: "none", textTransform: "uppercase",
        }}>← Return Home</Link>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap');
      `}</style>
    </main>
  );
}