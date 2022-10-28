import { component$, useClientEffect$, useStore } from "@builder.io/qwik"; 
import Item from "~/components/item";

export default component$(() => {

    const state = useStore({
        data: [],
      });

    useClientEffect$(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => state.data = json)
    })

    return(<>
          <h1>LIST PAGE</h1> 
      {state.data.map(item => <Item item={item} ></Item>)} 
    </>)
})
