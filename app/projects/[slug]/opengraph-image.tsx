import { ImageResponse } from "next/og";
import { projects } from "@/app/lib/data";

export const alt = "Project — Piyush Paul";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.title ?? "Project";
  const tagline = project?.tagline ?? "";
  const category = project?.category ?? "";
  const stack = project?.stack ?? [];

  const playfairFont = fetch(
    new URL(
      "https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtY.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const interFont = fetch(
    new URL(
      "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const [playfairData, interData] = await Promise.all([
    playfairFont,
    interFont,
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
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Top-left decorative corner */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "60px",
            height: "60px",
            borderTop: "3px solid #b49350",
            borderLeft: "3px solid #b49350",
            display: "flex",
          }}
        />

        {/* Bottom-right decorative corner */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "60px",
            height: "60px",
            borderBottom: "3px solid #b49350",
            borderRight: "3px solid #b49350",
            display: "flex",
          }}
        />

        {/* Top section — category label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "16px",
              fontWeight: 500,
              color: "#b49350",
              letterSpacing: "3px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle section — title & tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontFamily: '"Playfair Display"',
              fontSize: "64px",
              fontWeight: 700,
              color: "#141413",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            {title}
          </div>

          {/* Gold accent divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #9a7e42, #b49350, #9a7e42)",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "20px",
              fontWeight: 400,
              color: "#5c5a54",
              lineHeight: 1.5,
              maxWidth: "700px",
              display: "flex",
            }}
          >
            {tagline.length > 120 ? tagline.slice(0, 117) + "..." : tagline}
          </div>
        </div>

        {/* Bottom section — stack & branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Tech stack pills */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {stack.slice(0, 5).map((tech) => (
              <div
                key={tech}
                style={{
                  fontFamily: '"Inter"',
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#5c5a54",
                  background: "rgba(180, 147, 80, 0.12)",
                  border: "1px solid rgba(180, 147, 80, 0.25)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Branding */}
          <div
            style={{
              fontFamily: '"Inter"',
              fontSize: "18px",
              fontWeight: 300,
              color: "#9c9a94",
              letterSpacing: "1px",
              display: "flex",
            }}
          >
            piyushpaul.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
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
