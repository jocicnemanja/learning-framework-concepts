import { component$ } from "@builder.io/qwik";

export default component$((props: any)=> {
    return <>
    <ul>
        <li>userId: { props.item.userId }</li>
        <li>id: { props.item.id }</li>
        <li>title: { props.item.title }</li>
        <li>body:{ props.item.body }</li>
        </ul>
        <br />
    </> ;
  }) 