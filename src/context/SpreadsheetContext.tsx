import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import { ThemeConfig, ThemeValues } from "@/types/theme";

interface SpreadsheetProviderProps {
  children: ReactNode;
}

interface SpreadsheetContextType {
  spreadsheetData: Record<string, number[][]>;
  selectedSheets: string[];
  selectSheet: (sheet: string) => void;
  sheets: string[];
  themeValues: ThemeConfig;
  showThemeEditor: boolean;
  setShowThemeEditor: Dispatch<SetStateAction<boolean>>;
  handleChangeTheme: (
    section: keyof ThemeConfig,
    property: string,
    value: string
  ) => void;
}

const SpreadsheetContext = createContext<SpreadsheetContextType | undefined>(
  undefined
);

export const SpreadsheetProvider: React.FC<SpreadsheetProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<Record<string, number[][]>>({});
  const [selectedSheets, setSelectedSheet] = useState<string[]>([]);
  const [showThemeEditor, setShowThemeEditor] = useState(false);
  const [themeValues, setThemeValues] = useState<ThemeValues>({
    evenRows: { color: "", backgroundColor: "" },
    oddRows: { color: "", backgroundColor: "" },
    evenCellValues: { color: "", backgroundColor: "" },
    oddCellValues: { color: "", backgroundColor: "" },
  });

  useEffect(() => {
    const fetchSpreadsheet = async () => {
      try {
        const response = await axios.get(
          "https://clinch-public-documents.s3.amazonaws.com/clinch-recruitment/spreadsheet.json"
        );
        const parsedData: Record<string, number[][]> = JSON.parse(
          response.data
        );
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
        setData({});
      }
    };

    fetchSpreadsheet();
  }, []);

  const selectSheet = (sheet: string) => {
    setSelectedSheet((prev) => {
      const updatedSheets = prev.includes(sheet)
        ? prev.filter((item) => item !== sheet)
        : [...prev, sheet];
      return updatedSheets.sort((a, b) => a.localeCompare(b));
    });
  };

  const handleChangeTheme = (
    section: keyof ThemeConfig,
    property: string,
    value: string
  ) => {
    setThemeValues((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [property]: value,
      },
    }));
  };

  const sheets = useMemo(() => Object.keys(data), [data]);

  return (
    <SpreadsheetContext.Provider
      value={{
        spreadsheetData: data,
        selectedSheets,
        selectSheet,
        sheets,
        themeValues,
        handleChangeTheme,
        showThemeEditor,
        setShowThemeEditor,
      }}
    >
      {children}
    </SpreadsheetContext.Provider>
  );
};

export const useSpreadsheet = (): SpreadsheetContextType => {
  const context = useContext(SpreadsheetContext);
  if (!context) {
    throw new Error("useSpreadsheet must be used within a SpreadsheetProvider");
  }
  return context;
};
