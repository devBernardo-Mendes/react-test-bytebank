import React from "react";
import { render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    test("O nome é exibido", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    test("O saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    test("O botao de transação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });
  describe("Quando eu realizo uma transação", () => {
    test("que é um saque, o valor vai diminuir", () => {
        const valores = {
          transacao: "saque",
          valor: 50,
        };
        const novoSaldo = calcularNovoSaldo(valores, 150);

        expect(novoSaldo).toBe(100);
      })
  });
});
