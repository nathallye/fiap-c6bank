import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";

import { 
  Typography, 
  Container, 
  CssBaseline, 
  Box, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Stack,
  Snackbar
} from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type CopyProps = {
  site: string;
  sx?: object;
}

function Copyright(props: CopyProps) {
  // console.log("props", props);
  // console.log(props.site);

  return (
    <Typography>
      {"Copyright ©️ "}
      {/*inherit - hende a cor do elemento pai*/}
      <Link color="inherit" href="https://www.avanade.com.br/"> 
        {props.site}
      </Link>{" "}
      {new Date().getFullYear()} {/*Função para pegar o ano atual*/}
      {"."}
    </Typography>
  )
}

const theme = createTheme();

export default function LoginPage() {

  /* const [company, setCompany] = useState<string | undefined | null>("");
  const [name, setName] = useState<string | undefined | null>("");
  const [counter, setCounter] = useState<number>(0);
  */
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>("");
  const [password, setPassword] = useState<undefined | undefined | null | FormDataEntryValue>("");

  /* 
  useEffect(() => {
    if(counter == 0) {
      document.title = `Executando useEffect a primeira vez ${counter}`;
    } else {
      document.title = `Executando useEffect a cada alteração ${counter}`;
    }
    console.log(`Executando useEffect a cada alteração ${counter}`);
  }, [counter]);

  useEffect(() => {
    setName(name?.toUpperCase());
  }, [name]);
  */

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage("A senha deve ter no mínimo 6 caracteres.");
    } else if (password) {
      setError(false);
      setErrorMessage("");
      // enviar o formulário para o servidor...
      // deu certo... vamos cruar o snackbar...
      setOpen(true);
    }
  }, [password]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log(data.get("email"));
    console.log(data.get("password"));

    setEmail(data.get("email"));
    setPassword(data.get("password"));
  };

  return (
    <ThemeProvider theme={theme}> {/*ThemeProvider - faz o dark automáticamente*/}
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Usuário autenticado com sucesso... aguarde...
          </Alert>
        </Snackbar>

        <Box sx={{mt: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography component="h1" variant="h5"> {/*Para texto*/}
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>

            {/* 
            <button onClick={() => setCounter(counter + 1)}>Mudar o contador</button>
            {`O state counter vale: ${counter}`}<br />
            <button onClick={() => setName("Nathallye")}>Mudar o nome</button>
            {`O state name é: ${name}`} 
            */}
            
            <TextField margin="normal" required fullWidth id="email" label="Digite o e-mail" name="email" 
              autoComplete="email" autoFocus />
            <TextField margin="normal" required fullWidth id="password" label="Digite a senha" name="password" 
              autoComplete="current-password" autoFocus />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar de mim" />
            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Entrar</Button>
            {error && 
              <Typography color="error">{errorMessage}</Typography>
            }
          </Box>
        </Box>
        <Copyright site="www.avanade.com.br" sx={{mt:8, mb: 4}} />
      </Container>
    </ThemeProvider>
  )
}
