import {
  Button,
  ButtonGroup,
  FilledInput,
  InputAdornment,
} from "@material-ui/core";
import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Content } from "./components";
import StartshipsTable from "./starships-table";

export default function Home() {
  const [value, setValue] = useState(0);
  const [starships, setStarships] = useState([]);
  const [result, setResult] = useState({ previous: "", next: "" });
  const [url, setUrl] = useState("https://swapi.dev/api/starships");

  function calcStops() {
    console.log(value);

    Axios.get(url).then((res) => {
      console.log(res);
      setStarships(res.data.results);
      setResult(res.data);
    });
  }

  useEffect(() => {
    calcStops();
  }, [url]);

  return (
    <Container>
      <Content>
        <h1 style={{ color: "gold" }}>MGTL Calculator</h1>
        <FilledInput
          id="filled-adornment-weight"
          type="number"
          placeholder="Insira a distância"
          onChange={(val) => {
            setValue(parseInt(val.target.value));
          }}
          endAdornment={<InputAdornment position="end">Mglt</InputAdornment>}
          aria-describedby="filled-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          style={{ color: "gold" }}
        />

        {starships.length > 0 && (
          <StartshipsTable
            starships={starships}
            value={value}
          ></StartshipsTable>
        )}
        {
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {result.previous ? (
              <Button
                onClick={() => {
                  setUrl(result.previous);
                }}
              >
                Voltar
              </Button>
            ) : (
              <></>
            )}
            {result.next && (
              <Button
                onClick={() => {
                  setUrl(result.next);
                }}
              >
                Próximo
              </Button>
            )}
          </ButtonGroup>
        }
      </Content>
    </Container>
  );
}
