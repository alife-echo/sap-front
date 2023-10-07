import * as React from 'react';
import Stack from '@mui/joy/Stack';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/joy/Button';
import '../globals.css';


export default function ButtonLoadingPosition() {
  return (
    <Stack spacing={2} direction="row">
      <Button  loading loadingPosition="end"  className="sb-style" endDecorator={<SendIcon />}>
        Carregando
      </Button>
    </Stack>
  );
}