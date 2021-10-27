export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const TokenInfoExt = IDL.Record({
    'url' : IDL.Text,
    'owner' : IDL.Principal,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'approval' : IDL.Opt(IDL.Principal),
    'timestamp' : Time,
    'index' : IDL.Nat,
  });
  const UserInfoExt = IDL.Record({
    'allowedIds' : IDL.Vec(IDL.Nat),
    'allows' : IDL.Vec(IDL.Principal),
    'tokens' : IDL.Vec(IDL.Nat),
    'allowedBy' : IDL.Vec(IDL.Principal),
  });
  const NFToken = IDL.Service({
    'approve' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Bool], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getAllTokens' : IDL.Func([], [IDL.Vec(IDL.Nat)], ['query']),
    'getApproved' : IDL.Func([IDL.Nat], [IDL.Principal], ['query']),
    'getTokenInfo' : IDL.Func([IDL.Nat], [TokenInfoExt], ['query']),
    'getTokenList' : IDL.Func([IDL.Principal], [IDL.Vec(IDL.Nat)], ['query']),
    'getUser' : IDL.Func([IDL.Principal], [UserInfoExt], ['query']),
    'isApprovedForAll' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'mint' : IDL.Func([IDL.Text, IDL.Text, IDL.Text], [], ['oneway']),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'ownerOf' : IDL.Func([IDL.Nat], [IDL.Principal], ['query']),
    'setApprovalForAll' : IDL.Func([IDL.Principal, IDL.Bool], [IDL.Bool], []),
    'setTokenInfo' : IDL.Func([TokenInfoExt], [IDL.Bool], []),
    'symbol' : IDL.Func([], [IDL.Text], ['query']),
    'tokenByIndex' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'tokenOfOwnerByIndex' : IDL.Func(
        [IDL.Principal, IDL.Nat],
        [IDL.Nat],
        ['query'],
      ),
    'totalSupply' : IDL.Func([], [IDL.Nat], ['query']),
    'transferFrom' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat],
        [IDL.Bool],
        [],
      ),
  });
  return NFToken;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Text, IDL.Principal];
};
