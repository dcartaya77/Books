import { Button, Card, CardMedia, Stack } from "@mui/material";
import { type InfoBook } from "../types";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props extends InfoBook {
    onBooks: (ISBN: string) => void;
    action: string;
}

export const SingleBook: React.FC<Props> = ({
    cover,
    ISBN,
    action,
    onBooks,
}) => {
    return (
        <Stack direction={{ sm: "column" }}>
            <Card
                key={ISBN}
                sx={{ width: 180, alignSelf: "center", marginBottom: "5px" }}
            >
                <CardMedia
                    component="img"
                    height="300"
                    image={cover}
                    alt={ISBN}
                />
            </Card>
            {action === "add" ? (
                <Button
                    onClick={() => onBooks(ISBN)}
                    variant="contained"
                    title="Añadir a la Lista de Lectura"
                    endIcon={<SendIcon />}
                >
                    {" "}
                    Agregar{" "}
                </Button>
            ) : (
                <Button
                    onClick={() => onBooks(ISBN)}
                    variant="contained"
                    title="Quitar de la Lista de Lectura"
                    startIcon={<DeleteIcon />}
                >
                    {" "}
                    Quitar
                </Button>
            )}
        </Stack>
    );
};
