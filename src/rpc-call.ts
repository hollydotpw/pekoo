import generateRandomHex from './generate-random-hex';

async function post<O = unknown, I = unknown>(
  endpoint: string,
  data: I,
): Promise<O> {
  const request = await fetch(
    endpoint,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    },
  );

  const parsed = await request.json<O>();

  return parsed;
}
type RPC = {
  readonly id: string;
  readonly jsonrpc: '2.0';
};

type RPCOutput<T> = RPC & { readonly result: T };
type RPCInput<T> = RPC & { readonly method: string; readonly params: T };

export default function rpcCall<O, I>(
  endpoint: string,
  method: string,
  params: I,
) {
  return post<RPCOutput<O>, RPCInput<I>>(endpoint, {
    id: generateRandomHex(10),
    jsonrpc: '2.0',
    method,
    params,
  });
}

type RPCBatch = {
  readonly method: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly params: any;
};

export function batchRpcCall<O, I>(endpoint: string, batch: RPCBatch[]) {
  return post<RPCOutput<O>[], RPCInput<I>[]>(
    endpoint,
    batch.map((data) => ({
      id: generateRandomHex(10),
      jsonrpc: '2.0',
      ...data,
    })),
  );
}
