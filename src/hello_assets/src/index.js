import { hello } from "../../declarations/hello";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const totalSupply = await hello.totalSupply();
  for (var i = 0; i < totalSupply; i++) {
    var nft = await hello.getTokenInfo(i);
    var img = document.createElement('img');
    img.src = nft.url;
    document.body.appendChild(img);
    document.body.appendChild(document.createElement("br"));

    var name = document.createTextNode("Name: " + nft.name);
    document.body.appendChild(name);
    document.body.appendChild(document.createElement("br"));

    var desc = document.createTextNode("Description:" + nft.desc);
    document.body.appendChild(desc);
    document.body.appendChild(document.createElement("br"));
  }
});