import React, { useState, FC } from "react";
import Container from "@material-ui/core/Container";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Tooltip from "@material-ui/core/Tooltip";
import WarningIcon from "@material-ui/icons/Warning";
import * as convert from "@csstools/convert-colors";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Color from "color";

type ColorArray = [number, number, number];

const css2rgb = (css: string) =>
  Color(css)
    .rgb()
    .array()
    .map((c) => (c / 255) * 100) as ColorArray;
const rgbValue = (c: number) => Math.ceil((c / 100) * 255);
const rgbString = ([r, g, b]: number[]) =>
  `rgb(${rgbValue(r)},${rgbValue(g)},${rgbValue(b)})`;

const DEFAULT_COLOR_STRING = "rgb(241,133,96)";
const DEFAULT_COLOR = css2rgb(DEFAULT_COLOR_STRING);
const DEFAULT_COUNT = 7;

const rotateLCHColor = (base: ColorArray, degree: number) => {
  const [l, c, h] = convert.rgb2lch(...base);
  const actual = convert.lch2rgb(l, c, h + degree);
  const [r, g, b] = actual.map((c) => Math.max(0, Math.min(100, c)));
  return {
    rgb: rgbString([r, g, b]),
    actual: rgbString(actual),
  };
};

const rotateHSLColor = (base: ColorArray, degree: number) => {
  const hsl = convert.rgb2hsl(...base);
  const hue = (hsl[0] + degree) % 360;
  const rgb = convert.hsl2rgb(hue, hsl[1], hsl[2]);
  return {
    rgb: rgbString(rgb),
  };
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(4),
  },
  form: {
    marginBottom: theme.spacing(4),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  colorTitle: {
    textAlign: "center",
    marginTop: theme.spacing(4),
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
    fontSize: "2.5em",
  },
  ballTooltip: {},
  ballRoot: {
    textAlign: "center",
  },
  ballCaption: {
    display: "block",
    maxWidth: "6em",
  },
  footer: {
    marginTop: theme.spacing(12),
  },
}));

const ColorInput: FC<{
  onChangeColor: (color: ColorArray) => void;
}> = ({ onChangeColor }) => {
  const [value, setValue] = useState(DEFAULT_COLOR_STRING);
  const [error, setError] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setValue(next);
    try {
      const rgb = css2rgb(next);
      onChangeColor(rgb);
      if (error) {
        setError(false);
      }
    } catch (e) {
      if (!error) {
        setError(true);
      }
    }
  };
  const onUpdateRandom = () => {
    const rgb = [0, 0, 0].map(() =>
      Math.ceil(Math.random() * 100)
    ) as ColorArray;
    setValue(rgbString(rgb));
    onChangeColor(rgb);
  };
  return (
    <>
      <Tooltip title="Random color">
        <IconButton onClick={onUpdateRandom}>
          <AutorenewIcon />
        </IconButton>
      </Tooltip>
      <TextField
        id="color-input"
        label="Standard color"
        error={error}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

const CountInput: FC<{
  count: number;
  onChangeCount: (count: number) => void;
}> = ({ count, onChangeCount }) => {
  const [value, setValue] = useState(String(DEFAULT_COUNT));
  const [error, setError] = useState(false);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setValue(next);
    const num = Number(next);
    if (Number.isInteger(num) && num > 0 && num < 101) {
      onChangeCount(Number(next));
      if (error) {
        setError(false);
      }
    } else {
      if (!error) {
        setError(true);
      }
    }
  };
  return (
    <TextField
      id="count-input"
      error={error}
      label="Count"
      type="number"
      value={value}
      onChange={onChange}
    />
  );
};

const ColorBall: FC<{ color: string; actual?: string }> = ({
  color,
  actual,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.ballRoot}>
      <Badge
        badgeContent={
          actual &&
          actual !== color && (
            <Tooltip title={`Actual color is ${actual}`}>
              <WarningIcon fontSize="small" color="primary" />
            </Tooltip>
          )
        }
      >
        <Avatar className={classes.ball} style={{ backgroundColor: color }}>
          #
        </Avatar>
      </Badge>
      <Typography
        variant="caption"
        className={classes.ballCaption}
        style={{ color }}
      >
        {color}
      </Typography>
    </div>
  );
};

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}></div>;
};

const App: FC = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [count, setCount] = useState(DEFAULT_COUNT);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Paper variant="outlined" className={classes.paper}>
          <header className={classes.header}>
            <h1>Hue rotation: LCH vs HSL</h1>
          </header>
          <form className={classes.form} noValidate autoComplete="off">
            <ColorInput onChangeColor={setColor} />
            <CountInput count={count} onChangeCount={setCount} />
          </form>
        </Paper>
        <h2 className={classes.colorTitle}>Hue rotation in LCH color space</h2>
        <div className={classes.colors}>
          {Array.from({ length: count }).map((_, i) => {
            const degree = (360 / count) * i;
            const { rgb, actual } = rotateLCHColor(color, degree);
            return <ColorBall color={rgb} actual={actual} key={i} />;
          })}
        </div>
        <h2 className={classes.colorTitle}>Hue rotation in HSL color space</h2>
        <div className={classes.colors}>
          {Array.from({ length: count }).map((_, i) => {
            const degree = (360 / count) * i;
            const { rgb } = rotateHSLColor(color, degree);
            return <ColorBall color={rgb} key={i} />;
          })}
        </div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
