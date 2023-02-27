import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Renders correctly", ()=>{
    render(<Greet />);
    const textElement = screen.getByText('Hellow');
    expect(textElement).toBeInTheDocument()
});

test("Greet render with name", ()=> {
    render(<Greet name="Ragav"/>)
    const textElement = screen.getByText('Hellow Ragav');
    expect(textElement).toBeInTheDocument()
})