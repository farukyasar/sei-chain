// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgPlaceOrders } from "./types/dex/tx";
import { MsgCancelOrders } from "./types/dex/tx";
import { MsgRegisterContract } from "./types/dex/tx";
import { MsgLiquidation } from "./types/dex/tx";
const types = [
    ["/seiprotocol.seichain.dex.MsgPlaceOrders", MsgPlaceOrders],
    ["/seiprotocol.seichain.dex.MsgCancelOrders", MsgCancelOrders],
    ["/seiprotocol.seichain.dex.MsgRegisterContract", MsgRegisterContract],
    ["/seiprotocol.seichain.dex.MsgLiquidation", MsgLiquidation],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgPlaceOrders: (data) => ({ typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders", value: MsgPlaceOrders.fromPartial(data) }),
        msgCancelOrders: (data) => ({ typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders", value: MsgCancelOrders.fromPartial(data) }),
        msgRegisterContract: (data) => ({ typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract", value: MsgRegisterContract.fromPartial(data) }),
        msgLiquidation: (data) => ({ typeUrl: "/seiprotocol.seichain.dex.MsgLiquidation", value: MsgLiquidation.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
