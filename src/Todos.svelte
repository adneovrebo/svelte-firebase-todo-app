<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./plugins/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  
  export let uid;

  let text = "some task";
  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created");
  const todos = collectionData(query, "id").pipe(startWith([]));

  const add = () => {
    db.collection("todos").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
    text = "";
  };

  const updateStatus = event => {
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  };

  const removeItem = event => {
    const { id } = event.detail;
    db.collection("todos").doc(id).delete();
  };
</script>

<style>
  input {
    display: block;
  }
</style>

<ul>
  {#each $todos as todo}
    <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
  {/each}
</ul>

<input bind:value={text} />

<hr />

<p>
  Your task:
  <strong>{text}</strong>
</p>

<button class="button is-info" on:click={add}>Add Task</button>
