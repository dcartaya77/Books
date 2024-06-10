import {
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";

interface Props {
    genreBook: string;
    handleChange: (genreBook: string) => void;
}

export const SelectFilter: React.FC<Props> = ({ genreBook, handleChange }) => {
    const genreSelect = ["Fantasía", "Ciencia ficción", "Terror", "Zombies"];
    const ALL_CATEGORIES = "Todos";
    return (
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ p: "30px", mb: "30px" }}
        >
            <Typography variant="h4" component="h1">
                <span className="writer-machine">Filtrar por género</span>
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Select
                    value={genreBook}
                    onChange={(e) => handleChange(e.target.value)}
                    displayEmpty
                    sx={{ backgroundColor: "#fff" }}
                >
                    <MenuItem value={ALL_CATEGORIES}>
                        <em>Todos</em>
                    </MenuItem>
                    {genreSelect.map((genre) => (
                        <MenuItem key={genre} value={genre}>
                            {genre}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    );
};
