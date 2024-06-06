import { Typography, Stack } from "@mui/material"

interface Props {
   rate: number;
   onChange: (rate: number) => void;
 }
export const Rate: React.FC<Props> =({ rate, onChange })=>{
    
   return (
        <Stack direction="column" justifyContent="flex-start"
            alignItems="center" spacing={2} sx={{ p:'30px', mb:'30px'}}
          >
            <Typography variant="h5" component="h1">
                Filtrar por páginas
            </Typography>
            <input type="range" id="range-price" min={50} max={1200} step={10} value={rate} onChange={(e)=>onChange(parseInt(e.target.value))} />
            <label htmlFor="range-price">{rate}</label>
        </Stack>
   )
}