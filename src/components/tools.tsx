const tools = [
  "React",
  "TypeScript",
  "TanStack Query",
  "Material-UI",
  "Node.js",
  "Express",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Azure AD",
  "GitHub Actions",
  "Vite",
];

const cardColors = [
  "var(--lavender)",
  "var(--pink)",
  "var(--blue)",
  "var(--green)",
];

function Tools() {
  return (
    <section className="section tools-section">
      <p className="tools-title">Tools:</p>
      <div className="tools-wrapper">
        <div className="tools">
          {[...tools, ...tools].map((t, i) => (
            <div className="toolContainer" key={i}>
              <div
                className="tool"
                // style={
                //   {
                //     "--hover-color": cardColors[i % cardColors.length],
                //   } as React.CSSProperties
                // }
              >
                <span className="toolUsed">{t}</span>
              </div>
              <span> &#10036;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Tools;
