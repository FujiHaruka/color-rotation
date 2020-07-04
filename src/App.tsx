import React, { useState, FC } from "react";
import Container from "@material-ui/core/Container";
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import * as convert from "@csstools/convert-colors";

const DEFAULT_COLOR = "#f28561";
const DEFAULT_COUNT = 12;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(6),
  },
  form: {
    marginBottom: theme.spacing(12),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  colors: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  ball: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
}));

const ColorInput: FC<{
  color: string;
  onChangeColor: (color: string) => void;
}> = ({ color, onChangeColor }) => {
  const [value, setValue] = useState(DEFAULT_COLOR);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setValue(next);
    if (convert.hex2rgb(next)) {
      onChangeColor(next);
    }
  };
  return (
    <TextField
      label="Standard color (hex)"
      error={value !== color}
      value={value}
      onChange={onChange}
    />
  );
};

const CountInput: FC<{ count: number, onChangeCount: (count: number) => void }> = ({ count, onChangeCount }) => {
  const [ value, setValue ] = useState(String(DEFAULT_COUNT))
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setValue(next);
    if (Number.isInteger(Number(next))) {
      onChangeCount(Number(next));
    }
  };
  return (
    <TextField
      label="Count"
      type="number"
      value={value}
      onChange={onChange}
    />
  );
}

const ColorBall: FC<{ color: string }> = ({ color }) => {
  const classes = useStyles();
  return (
    <Avatar className={classes.ball} style={{ backgroundColor: color }}>
      {" "}
    </Avatar>
  );
};

const App: FC = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <header className={classes.header}>
          <h1>Hue rotation of LCH color</h1>
        </header>
        <form className={classes.form} noValidate autoComplete="off">
          <ColorInput color={color} onChangeColor={setColor} />
          <CountInput count={count} onChangeCount={setCount} />
        </form>
        <div className={classes.colors}>
          {Array.from({ length: count }).map((_, i) => (
            <ColorBall color={color} key={i} />
          ))}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
