import SimpleResumeDownloadButton from "../components/SimpleResumeDownloadButton";

export const metadata = {
  title: "Simple Resume Download | Piyush Paul",
};

export default function SimpleResumePage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 max-w-md text-center">
        <h1
          className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Simple Resume
        </h1>
        <p className="text-gray-400 text-sm tracking-wide mb-8">
          Click the button below to complete a quick security check and download the simple version of my resume.
        </p>
        <SimpleResumeDownloadButton />
      </div>
    </main>
  );
}
