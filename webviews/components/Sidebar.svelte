<script lang="ts">
  import axios from "axios";

  let url = "";
  let data = "";
  let status: number;
  let code = "";

  const sendRequest = async () => {
    data = "";
    status = -1;
    try {
      const result = await axios.get(url);
      data = result.data;
      status = result.status;
      code = `axios.get('${url}')\n\t.then(result => console.log(result.data))\n\t.catch(err => console.log(err))`;
    } catch (e) {
      data = e.response.data;
      status = e.response.status;
    }
  };
</script>

<div class="input">
  <button on:click={sendRequest}>Get</button>
  <input bind:value={url} type="text" />
</div>

<div
  style="white-space: pre-line"
  class:invisible={!(Math.floor(status / 100) === 2)}
>
  code:
  <textarea name="" id="" cols="5" rows="5" bind:value={code} />
</div>

<div class:invisible={status === undefined || status === -1}>
  <div class={Math.floor(status / 100) > 2 ? "fail" : "success"}>
    {`status: ${status}`}
  </div>
</div>

<div class:invisible={data === ""}>{JSON.stringify(data, null, 4)}</div>

<style>
  .input {
    display: flex;
    flex-direction: row;
  }
  .input input {
    flex: 4;
    margin-left: 2px;
  }
  .input button {
    flex: 1;
  }
  .invisible {
    display: none;
  }
  .success {
    color: rgb(51, 175, 51);
  }
  .fail {
    color: rgb(219, 59, 59);
  }
</style>
