import type { Principal } from '@dfinity/principal';
export interface NFToken {
  'approve' : (arg_0: Principal, arg_1: bigint) => Promise<boolean>,
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'getAllTokens' : () => Promise<Array<bigint>>,
  'getApproved' : (arg_0: bigint) => Promise<Principal>,
  'getTokenInfo' : (arg_0: bigint) => Promise<TokenInfoExt>,
  'getTokenList' : (arg_0: Principal) => Promise<Array<bigint>>,
  'getUser' : (arg_0: Principal) => Promise<UserInfoExt>,
  'isApprovedForAll' : (arg_0: Principal, arg_1: Principal) => Promise<boolean>,
  'mint' : (arg_0: string, arg_1: string, arg_2: string) => Promise<undefined>,
  'name' : () => Promise<string>,
  'ownerOf' : (arg_0: bigint) => Promise<Principal>,
  'setApprovalForAll' : (arg_0: Principal, arg_1: boolean) => Promise<boolean>,
  'setTokenInfo' : (arg_0: TokenInfoExt) => Promise<boolean>,
  'symbol' : () => Promise<string>,
  'tokenByIndex' : (arg_0: bigint) => Promise<bigint>,
  'tokenOfOwnerByIndex' : (arg_0: Principal, arg_1: bigint) => Promise<bigint>,
  'totalSupply' : () => Promise<bigint>,
  'transferFrom' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
    ) => Promise<boolean>,
}
export type Time = bigint;
export interface TokenInfoExt {
  'url' : string,
  'owner' : Principal,
  'desc' : string,
  'name' : string,
  'approval' : [] | [Principal],
  'timestamp' : Time,
  'index' : bigint,
}
export interface UserInfoExt {
  'allowedIds' : Array<bigint>,
  'allows' : Array<Principal>,
  'tokens' : Array<bigint>,
  'allowedBy' : Array<Principal>,
}
export interface _SERVICE extends NFToken {}
