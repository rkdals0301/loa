'use client';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => console.log('onClick Search');
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value, 'onChange Search');

    return (
        <>
            <OutlinedInput fullWidth placeholder="캐릭터명" size="small" onChange={handleOnChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleOnClick}
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                } />
        </>
    )
}
