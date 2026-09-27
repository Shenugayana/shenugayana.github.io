import {
  ShieldCheck,
  Activity,
  ArrowRight,
  Fingerprint,
  Network,
} from "lucide-react";
export function ProjectVisual({ id }: { id: string }) {
  const security = id === "password-auditor";
  return (
    <div
      className={
        "project-visual " + (security ? "security-visual" : "ops-visual")
      }
    >
      <span className="visual-number" aria-hidden="true">{security ? "01" : "02"}</span>
      <div className="visual-top">
        <span>
          {security
            ? "SECUREPASS / ANALYSIS FLOW"
            : "INTELLIOPS / PLATFORM CONCEPT"}
        </span>
        {security ? <ShieldCheck size={19} /> : <Activity size={19} />}
      </div>
      {security ? (
        <div className="security-diagram">
          <div className="diagram-icon">
            <Fingerprint size={48} strokeWidth={1} />
          </div>
          <div className="flow-input">
            Password input <span aria-hidden="true">••••••••••••</span>
          </div>
          <div className="split-flow">
            <span>Strength analysis</span>
            <span>Breach lookup</span>
          </div>
          <div className="flow-output">
            Actionable feedback <ArrowRight size={16} />
          </div>
        </div>
      ) : (
        <div className="ops-diagram">
          <div className="resource-row">
            <span>Servers</span>
            <span>Databases</span>
            <span>Services</span>
          </div>
          <div className="ops-core">
            <Network size={29} strokeWidth={1.2} />
            <div>
              Incident intelligence<span>Metrics · Events · Alerts</span>
            </div>
          </div>
          <div className="resource-row outputs">
            <span>Investigate</span>
            <span>Prioritise</span>
            <span>Respond</span>
          </div>
        </div>
      )}
      <div className="visual-bottom">
        <span>
          {security
            ? "PRIVACY-AWARE BY DESIGN"
            : "FROM SIGNALS TO INVESTIGATION"}
        </span>
        <span>{security ? "01" : "02"}</span>
      </div>
    </div>
  );
}
