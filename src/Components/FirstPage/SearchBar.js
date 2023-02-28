// import * as react from 'react';
import { Grid,Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Bar from './SearchBar-v2';

export default function SearchBar(){
    return(
        <Grid container>
        {/* <TextField id="outlined-search" label="Search field" type="search" size='small'/> */}
        <Grid item xs={6}><Bar /></Grid>
        <Grid item xs={1}><Button size="large" variant='outlined'>
            <SearchIcon/>
        </Button></Grid>

        
        </Grid>
    )
}