import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

function Search(searchData) {
	// searchData = Array.from(searchData);
 //  return (
 //    <Stack spacing={2} sx={{ width: 300 }}>
 //      <Autocomplete
 //        freeSolo
 //        id="free-solo-2-demo"
 //        disableClearable
 //        options={searchData.map((option) => option.name)}
 //        renderInput={(params) => (
 //          <TextField
 //            {...params}
 //            label="Search input"
 //            InputProps={{
 //        //     	endAdornment: (
 //       	// 		<InputAdornment>
 //        //  			<IconButton>
 //        //    				<SearchIcon />
 //        //  			</IconButton>
 //       	// 		</InputAdornment>
 //     			// ),	
 //              ...params.InputProps,
 //              type: 'search',
 //            }}
 //          />
 //        )}
 //      />
 //    </Stack>
 //  //);

// 		onChange = e => {
//     const { value } = e.target;
//     this.setState({
//       query: value
//     });

//     this.search(value);
//   };

// 	  return (
//       <TextField
//        id="outlined-basic" 
//        label="Outlined"
//         variant="outlined"
//   		InputProps={{
//     		endAdornment: (
//       			<InputAdornment type="text" onChange={this.onChange}>
//         			<IconButton>
//           				<SearchIcon />
//         			</IconButton>
//       			</InputAdornment>
//     		)
//   		}} 
//       />
//     )
 }

export default Search;