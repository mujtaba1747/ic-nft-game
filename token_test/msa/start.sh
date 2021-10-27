sudo dfx stop
sudo rm -rf .dfx

ALICE_HOME=$(mktemp -d -t alice-temp.XXXX)

ALICE_PUBLIC_KEY="principal \"$( \
    HOME=$ALICE_HOME sudo dfx identity get-principal
)\""

sudo dfx start --background
sudo dfx canister --no-wallet create msa
sudo dfx canister create msa_assets
sudo dfx build

sudo dfx canister --no-wallet install msa --argument="(\"Test NFT 1\", \"NFT1\",$ALICE_PUBLIC_KEY)" -m=reinstall
