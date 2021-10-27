import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as msa_idl, canisterId as msa_id } from 'dfx-generated/msa';

const agent = new HttpAgent();
const msa = Actor.createActor(msa_idl, { agent, canisterId: msa_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await msa.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
