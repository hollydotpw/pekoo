import rpcCall, { batchRpcCall } from './rpc-call';

// TODO: I should move this to another library for crypto stuff

type BlockNumber = number | 'latest' | 'earliest' | 'pending';
const DEFAULT_BLOCK_NUMBER = 'latest';

export default function ethCall(
  rpcEndpoint: string,
  to: string,
  data: string,
  block: BlockNumber = DEFAULT_BLOCK_NUMBER,
) {
  return rpcCall(rpcEndpoint, 'eth_call', [{ to, data }, block]);
}

export type EthCall = {
  readonly to: string;
  readonly data: string;
  readonly block?: BlockNumber;
};

export function batchEthCall(rpcEndpoint: string, batch: EthCall[]) {
  return batchRpcCall<string, EthCall>(
    rpcEndpoint,
    batch.map(({ to, data, block }) => ({
      method: 'eth_call',
      params: [{ to, data }, block || DEFAULT_BLOCK_NUMBER],
    })),
  );
}
