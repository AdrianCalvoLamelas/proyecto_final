import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { locales } from "../../locales";

export default function LanguageSelector() {
  const [language, setLanguage] = useState(
    localStorage.getItem("locale") ?? "en"
  );

  const handleChange = (event: SelectChangeEvent) => {
    localStorage.setItem("locale", event.target.value);
    setLanguage(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          sx={{ backgroundColor: "white" }}
          value={language}
          label="Language"
          size="small"
          onChange={handleChange}
        >
          {locales.map((locale) => (
            <MenuItem key={locale} value={locale}>
              {locale}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
