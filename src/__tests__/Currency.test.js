import React from "react";
import { render, screen } from "@testing-library/react";
import Currency from "../components/Currency/Currency";

test("renders currency conversion data", async () => {
  render(<Currency />);

  const baseCurrency = await screen.findByText('USD');
  const exchangeRates = await screen.findByText('AED');

  expect(baseCurrency).toBeInTheDocument();
  expect(exchangeRates).toBeInTheDocument();
});
