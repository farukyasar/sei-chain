import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAggregateExchangeRateCombinedVote } from "./types/oracle/tx";
import { MsgDelegateFeedConsent } from "./types/oracle/tx";
import { MsgAggregateExchangeRateVote } from "./types/oracle/tx";
import { MsgAggregateExchangeRatePrevote } from "./types/oracle/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgAggregateExchangeRateCombinedVote: (data: MsgAggregateExchangeRateCombinedVote) => EncodeObject;
    msgDelegateFeedConsent: (data: MsgDelegateFeedConsent) => EncodeObject;
    msgAggregateExchangeRateVote: (data: MsgAggregateExchangeRateVote) => EncodeObject;
    msgAggregateExchangeRatePrevote: (data: MsgAggregateExchangeRatePrevote) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
