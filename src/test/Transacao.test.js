import React from "react";
import { render } from "@testing-library/react";

import Transacao from "../transacoes/Transacao";

describe("Component de transaçao do extrato", () => {
  test("O snapshot do component deve permanecer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="10/08/2020" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
