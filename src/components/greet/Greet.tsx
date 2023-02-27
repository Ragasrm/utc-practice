type GreetProps = {
name?: string;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>Hellow {props.name}</div>
  )
}