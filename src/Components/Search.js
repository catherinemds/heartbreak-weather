import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <FormControl sx={{ m: 1, width: 620 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-search">Search city</InputLabel>
      <Input
        id="standard-adornment-search"
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default Search;
