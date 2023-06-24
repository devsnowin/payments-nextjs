type ButtonProps = React.ComponentProps<'button'>;

export default function Button(props: ButtonProps){
    return(
        <button {...props}>{props.children}</button>
    )
}