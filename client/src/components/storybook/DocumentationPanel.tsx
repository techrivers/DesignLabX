interface DocumentationPanelProps {
  component: string;
}

export function DocumentationPanel({ component }: DocumentationPanelProps) {
  const getDocumentation = () => {
    switch (component) {
      case "Button":
        return {
          title: "Button",
          description: "Buttons allow users to take actions, and make choices, with a single tap.",
          import: "import { Button } from '@mui/material';",
          props: [
            {
              name: "variant",
              type: "'contained' | 'outlined' | 'text'",
              default: "'text'",
              description: "The variant of the button."
            },
            {
              name: "color",
              type: "'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'",
              default: "'primary'",
              description: "The color of the component."
            },
            {
              name: "size",
              type: "'small' | 'medium' | 'large'",
              default: "'medium'",
              description: "The size of the component."
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "If true, the component is disabled."
            }
          ],
          accessibility: [
            "Use semantic button elements for proper keyboard navigation",
            "Provide meaningful button text or aria-label for screen readers",
            "Ensure sufficient color contrast for visibility",
            "Include focus indicators for keyboard users"
          ]
        };

      case "TextField":
        return {
          title: "TextField",
          description: "Text fields let users enter and edit text.",
          import: "import { TextField } from '@mui/material';",
          props: [
            {
              name: "variant",
              type: "'outlined' | 'filled' | 'standard'",
              default: "'outlined'",
              description: "The variant to use."
            },
            {
              name: "size",
              type: "'small' | 'medium'",
              default: "'medium'",
              description: "The size of the component."
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "If true, the component is disabled."
            },
            {
              name: "error",
              type: "boolean",
              default: "false",
              description: "If true, the label is displayed in an error state."
            }
          ],
          accessibility: [
            "Always provide a label for screen readers",
            "Use helper text to provide additional context",
            "Ensure error states are clearly communicated",
            "Support keyboard navigation"
          ]
        };

      default:
        return {
          title: component,
          description: `Documentation for ${component} component.`,
          import: `import { ${component} } from '@mui/material';`,
          props: [],
          accessibility: []
        };
    }
  };

  const doc = getDocumentation();

  return (
    <div className="flex-1 overflow-y-auto p-6 bg-background">
      <div className="max-w-4xl mx-auto prose prose-sm">
        <h1 className="text-3xl font-bold text-foreground mb-4">{doc.title}</h1>
        <p className="text-muted-foreground mb-6">{doc.description}</p>

        <h2 className="text-xl font-semibold text-foreground mb-3">Import</h2>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-6">
          <code className="text-gray-300">{doc.import}</code>
        </div>

        {doc.props.length > 0 && (
          <>
            <h2 className="text-xl font-semibold text-foreground mb-3">Props</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Default</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {doc.props.map((prop, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm font-mono">{prop.name}</td>
                      <td className="px-4 py-3 text-sm">{prop.type}</td>
                      <td className="px-4 py-3 text-sm font-mono">{prop.default}</td>
                      <td className="px-4 py-3 text-sm">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {doc.accessibility.length > 0 && (
          <>
            <h2 className="text-xl font-semibold text-foreground mb-3">Accessibility</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
              {doc.accessibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        <h2 className="text-xl font-semibold text-foreground mb-3">Examples</h2>
        <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm syntax-highlight mb-6">
          <div className="text-gray-300">
            <span className="comment">// Basic usage</span><br />
            <span className="tag">&lt;{doc.title}</span> <span className="attr">variant</span>=<span className="string">"contained"</span> <span className="attr">color</span>=<span className="string">"primary"</span><span className="tag">&gt;</span><br />
            &nbsp;&nbsp;{doc.title} Text<br />
            <span className="tag">&lt;/{doc.title}&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
