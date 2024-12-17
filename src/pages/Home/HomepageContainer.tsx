import SheetsList from "../../components/organisms/SheetComponents/SheetList";
import SheetView from "../../components/organisms/SheetComponents/SheetView";
import React from "react";
import "./homepage.scss";
import { useSpreadsheet } from "../../context/SpreadsheetContext";
import ThemeEditor from "../../components/organisms/ThemeEditor/ThemeEditor";

const HomepageContainer: React.FC = () => {
  const { showThemeEditor } = useSpreadsheet();

  return (
    <div className="homepage-container">
      <div className="sheet-col">
        <SheetsList />
        <SheetView />
      </div>
      {showThemeEditor && <ThemeEditor />}
    </div>
  );
};

export default HomepageContainer;
