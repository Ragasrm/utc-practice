import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Renders correctly", ()=>{
    render(<Greet/>);
    const textElement = screen.getByText(/hellow World/i);
    expect(textElement).toBeInTheDocument()
});