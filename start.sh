sudo dfx stop
sudo rm -rf .dfx

ALICE_HOME=$(mktemp -d -t alice-temp.XXXX)

ALICE_PUBLIC_KEY="principal \"$( \
    HOME=$ALICE_HOME sudo dfx identity get-principal
)\""

sudo dfx start --background
sudo dfx canister --no-wallet create hello
sudo dfx canister create hello_assets
sudo dfx build

sudo dfx canister --no-wallet install hello --argument="(\"Test NFT 1\", \"NFT1\",$ALICE_PUBLIC_KEY)" -m=reinstall

sudo dfx canister call hello mint '("https://arkh-frontend.s3.us-west-1.amazonaws.com/basket-image/Player8.png", "Irvin", "SG")'
sudo dfx canister call hello mint '("https://arkh-frontend.s3.us-west-1.amazonaws.com/basket-image/Player6.png", "Don", "SG")'
sudo dfx canister call hello mint '("https://arkh-frontend.s3.us-west-1.amazonaws.com/basket-image/Player5.png", "Axel", "SF")'
sudo dfx canister call hello mint '("https://arkh-frontend.s3.us-west-1.amazonaws.com/basket-image/Player7.png", "Kristopher", "C")'
sudo dfx canister call hello mint '("https://arkh-frontend.s3.us-west-1.amazonaws.com/basket-image/Player9.png", "Oliver", "C")'