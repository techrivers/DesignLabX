import { useState } from "react";

interface SidebarProps {
  categories: Array<{
    name: string;
    components: string[];
  }>;
  selectedComponent: string;
  onSelectComponent: (component: string) => void;
}

export function Sidebar({ categories, selectedComponent, onSelectComponent }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "Input Components"
  ]);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    components: category.components.filter(component =>
      component.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.components.length > 0);

  return (
    <div className="w-80 bg-surface border-r border-border flex flex-col storybook-sidebar">
      {/* Header */}
      <div className="h-16 border-b border-border flex items-center px-4 bg-surface">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-icons text-white text-lg">auto_stories</span>
          </div>
          <div>
            <h1 className="text-lg font-medium text-foreground">Storybook</h1>
            <p className="text-xs text-muted-foreground">Material-UI Components</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b border-border">
        <div className="relative">
          <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
          />
        </div>
      </div>

      {/* Component Tree */}
      <div className="flex-1 overflow-y-auto p-2">
        {filteredCategories.map((category) => (
          <div key={category.name} className="mb-4">
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full flex items-center px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <span className="material-icons text-xs mr-2">
                {expandedCategories.includes(category.name) ? "folder_open" : "folder"}
              </span>
              <span>{category.name}</span>
            </button>
            
            {expandedCategories.includes(category.name) && (
              <div className="ml-4 space-y-1">
                {category.components.map((component) => (
                  <button
                    key={component}
                    onClick={() => onSelectComponent(component)}
                    className={`w-full flex items-center px-2 py-1.5 rounded hover:bg-muted cursor-pointer ${
                      selectedComponent === component
                        ? "bg-blue-50 border-l-2 border-primary"
                        : ""
                    }`}
                  >
                    <span className={`material-icons text-xs mr-2 ${
                      selectedComponent === component ? "text-primary" : "text-muted-foreground"
                    }`}>
                      widgets
                    </span>
                    <span className={`text-sm ${
                      selectedComponent === component 
                        ? "text-primary font-medium" 
                        : "text-foreground"
                    }`}>
                      {component}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
