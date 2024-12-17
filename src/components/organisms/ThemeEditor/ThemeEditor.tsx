import { Button } from "../../atoms/Button";
import { useSpreadsheet } from "../../../context/SpreadsheetContext";
import { ThemeConfig, ThemeValues } from "../../../types/theme";

import "./theme.scss";

const ThemeEditor: React.FC = () => {
  const { themeValues, handleChangeTheme, setShowThemeEditor } =
    useSpreadsheet();

  return (
    <div className="theme-editor">
      <h3>Change Table Theme</h3>
      {Object.entries(themeValues as ThemeValues).map(
        ([section, properties]) => (
          <div key={section} className="theme-row">
            <h5>{section.replace(/([A-Z])/g, " $1").trim()}:</h5>
            <div className="theme-box">
              {Object.entries(properties).map(([property, value]) => (
                <div key={property} className="theme-item">
                  <label>{property}:</label>
                  <input
                    type="color"
                    value={value}
                    onChange={(e) =>
                      handleChangeTheme(
                        section as keyof ThemeConfig,
                        property,
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        )
      )}
      <Button label="X" onClick={() => setShowThemeEditor(false)} />
    </div>
  );
};

export default ThemeEditor;
