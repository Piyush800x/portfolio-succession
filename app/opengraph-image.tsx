import { ImageResponse } from "next/og";


export const alt = "Piyush Paul — Full-Stack Developer & Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f9f8f6 0%, #f2f0ed 50%, #f9f8f6 100%)",
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
            width: "80px",
            height: "80px",
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
            width: "80px",
            height: "80px",
            borderBottom: "3px solid #b49350",
            borderRight: "3px solid #b49350",
            display: "flex",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontFamily: '"Playfair Display"',
            fontSize: "72px",
            fontWeight: 700,
            color: "#141413",
            letterSpacing: "-1px",
            display: "flex",
          }}
        >
          Piyush Paul
        </div>

        {/* Gold accent divider */}
        <div
          style={{
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, #9a7e42, #b49350, #9a7e42)",
            margin: "24px 0",
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontFamily: '"Inter"',
            fontSize: "28px",
            fontWeight: 400,
            color: "#5c5a54",
            letterSpacing: "4px",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Full-Stack Developer & Engineer
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            fontFamily: '"Inter"',
            fontSize: "18px",
            fontWeight: 300,
            color: "#9c9a94",
            letterSpacing: "2px",
            display: "flex",
          }}
        >
          piyushpaul.com
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
