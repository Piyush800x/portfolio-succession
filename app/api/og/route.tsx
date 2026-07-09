import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const SITE_URL = "https://piyushpaul.com";

const skills = ["Gemini AI", "FastAPI", "DPDK", "Next.js", "Python"];
const achievements = ["🏆 MLH Hack Days Winner", "🥈 Synchronicity S2"];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Optional query param overrides for dynamic use
  const title = searchParams.get("title") ?? "Piyush Paul";
  const subtitle =
    searchParams.get("subtitle") ??
    "AI/ML Developer · Cybersecurity · Agentic AI";
  const url = searchParams.get("url") ?? SITE_URL;

  const [playfairData, interData] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf"
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf"
    ).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f9f8f6 0%, #f2f0ed 50%, #f9f8f6 100%)",
          padding: "56px 64px",
          position: "relative",
        }}
      >
        {/* Top-left decorative corner */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "36px",
            width: "72px",
            height: "72px",
            borderTop: "3px solid #b49350",
            borderLeft: "3px solid #b49350",
            display: "flex",
          }}
        />

        {/* Bottom-right decorative corner */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "36px",
            width: "72px",
            height: "72px",
            borderBottom: "3px solid #b49350",
            borderRight: "3px solid #b49350",
            display: "flex",
          }}
        />

        {/* Top — eyebrow label */}
        <div
          style={{
            fontFamily: '"Inter"',
            fontSize: "14px",
            fontWeight: 500,
            color: "#b49350",
            letterSpacing: "4px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Portfolio · {url.replace("https://", "")}
        </div>

        {/* Middle — name + subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: "80px",
              fontWeight: 700,
              color: "#141413",
              letterSpacing: "-2px",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            {title}
          </div>

          {/* Gold accent divider */}
          <div
            style={{
              width: "100px",
              height: "3px",
              background:
                "linear-gradient(90deg, #9a7e42, #b49350, #c8a96a, #b49350, #9a7e42)",
              marginTop: "20px",
              marginBottom: "20px",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          {/* Subtitle */}
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "26px",
              fontWeight: 400,
              color: "#5c5a54",
              letterSpacing: "2px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {subtitle}
          </div>

          {/* Skill chips */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "24px",
            }}
          >
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  fontFamily: '"Inter"',
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9a7e42",
                  background: "rgba(180, 147, 80, 0.10)",
                  border: "1px solid rgba(180, 147, 80, 0.30)",
                  padding: "6px 18px",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — achievements + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Achievement badges */}
          <div style={{ display: "flex", gap: "12px" }}>
            {achievements.map((a) => (
              <div
                key={a}
                style={{
                  fontFamily: '"Inter"',
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#5c5a54",
                  background: "rgba(180, 147, 80, 0.07)",
                  border: "1px solid rgba(180, 147, 80, 0.20)",
                  padding: "7px 18px",
                  borderRadius: "6px",
                  display: "flex",
                }}
              >
                {a}
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "16px",
              fontWeight: 300,
              color: "#9c9a94",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            piyushpaul.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairData,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: interData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
