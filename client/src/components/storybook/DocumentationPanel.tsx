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

        <h2 className="text-xl font-semibold text-foreground mb-3">Code Roadmap</h2>
        <div className="bg-muted rounded-lg p-4 mb-6">
          <p className="text-muted-foreground mb-4">Find the source code and related files for this component:</p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">📁 Story Configuration</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs">
                <code className="text-green-400">client/src/stories/{component}.stories.tsx</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Contains interactive story definitions and component examples</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">🎛️ Controls Configuration</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs">
                <code className="text-blue-400">client/src/components/storybook/ControlsPanel.tsx</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Interactive controls and prop configurations for this component</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">👁️ Preview Implementation</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs">
                <code className="text-purple-400">client/src/components/storybook/ComponentPreview.tsx</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Live preview rendering and component mounting logic</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">🎨 Theme Integration</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs">
                <code className="text-yellow-400">client/src/components/theme/DynamicThemeProvider.tsx</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Dynamic theme application and Material-UI theme configuration</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">📚 Material-UI Source</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs">
                <code className="text-orange-400">@mui/material/{component}</code>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Official Material-UI component source and documentation</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">🏗️ Project Structure</h3>
              <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300">
                <div>client/</div>
                <div>&nbsp;&nbsp;├── src/</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;├── components/</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── storybook/        # Storybook interface components</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── theme/            # Theme management system</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── ui/               # Custom UI components</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;├── stories/              # Component story definitions</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;└── pages/                # Application pages</div>
                <div>server/                       # Express backend</div>
                <div>shared/                       # Shared types and schemas</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
            <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Quick Navigation Tips</h4>
            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
              <li>• Use <strong>Copy Code</strong> for simple JSX snippets</li>
              <li>• Use <strong>Export Component</strong> for complete TypeScript files</li>
              <li>• Check story files for comprehensive usage examples</li>
              <li>• Explore ControlsPanel.tsx to understand prop configurations</li>
              <li>• Modify themes in DynamicThemeProvider.tsx for custom styling</li>
            </ul>
          </div>

          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
            <h4 className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">🚀 Development Setup</h4>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-green-700 dark:text-green-300 font-medium">Start Development Server:</p>
                <div className="bg-gray-900 rounded p-2 font-mono text-xs mt-1">
                  <code className="text-gray-300">npm run dev</code>
                </div>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300 font-medium">Add New Component Story:</p>
                <div className="bg-gray-900 rounded p-2 font-mono text-xs mt-1">
                  <code className="text-gray-300">client/src/stories/NewComponent.stories.tsx</code>
                </div>
              </div>
              <div>
                <p className="text-xs text-green-700 dark:text-green-300 font-medium">Test Theme Changes:</p>
                <div className="bg-gray-900 rounded p-2 font-mono text-xs mt-1">
                  <code className="text-gray-300">Upload JSON theme via Showcase page</code>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800">
            <h4 className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">📋 Component Integration Checklist</h4>
            <ul className="text-xs text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>✅ Story file created in <code>/stories/</code></li>
              <li>✅ Controls added to <code>ControlsPanel.tsx</code></li>
              <li>✅ Preview rendering in <code>ComponentPreview.tsx</code></li>
              <li>✅ Documentation updated in <code>DocumentationPanel.tsx</code></li>
              <li>✅ Import mapping in export code generation</li>
              <li>✅ Theme compatibility tested</li>
            </ul>
          </div>
        </div>

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
